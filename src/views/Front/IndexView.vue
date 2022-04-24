<template>
  <PageLoading />
  <header-component @emit-toggle-nav="openNavigation" />
  <main>
    <RouterView
      @get-cart="getCart"
    />
  </main>
  <footer>
    <div class="container">
      <span class="d-inline-block">jib interior © 2022 All Rights Reserved.</span>
      <span class="d-inline-block">圖片為練習使用，無商業用途｜<router-link to="/login">登入後台</router-link></span>
    </div>
  </footer>
  <SuccessModal>
    <template #title>{{ modal.title }}</template>
    <template #default>
      {{ modal.content }}
    </template>
  </SuccessModal>
</template>

<script>
import { bsModal } from '@/script/bootstrap';
import SuccessModal from '@/components/AdminSuccessModal.vue';

export default {
  data() {
    return {
      cart: {
        data: [],
        amount: 0,
        final_total: 0,
        total: 0,
      },
      modal: {
        title: '',
        temp: {},
        content: '',
      },
    };
  },
  emits: ['emit-toggle-nav'],
  components: {
    SuccessModal,
  },
  provide() {
    return {
      provideCart: this.cart,
    };
  },
  mounted() {
    this.getCart();
    this.$emitter.on('add-cart', (res) => {
      const { item, qty } = res;
      this.addCart(item, qty);
    });
    this.$emitter.on('get-cart', () => {
      this.getCart();
    });
  },
  methods: {
    openNavigation() {
      document.body.classList.toggle('opened-nav');
    },
    openSuccessModal() {
      this.$emitter.emit('page-loading', false);
      this.bsModal = bsModal('SuccessModal');
      this.bsModal.show();
    },
    getCart() {
      const getCartApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(getCartApi)
        .then((response) => {
          this.cart.data = response.data.data.carts;
          this.cart.final_total = 0;
          this.cart.total = 0;
          this.cart.amount = 0;
          this.cart.data.forEach((element) => {
            this.cart.amount += element.qty;
            this.cart.final_total += element.final_total;
            this.cart.total += element.total;
          });
        });
    },
    addToCart(item) {
      this.$emitter.emit('add-cart', { item, qty: item.qty });
    },
    addCart(item, qty = 1) {
      const cartUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        data: {
          product_id: item.id,
          qty,
        },
      };
      // console.log(cartUrl, data);
      this.$http.post(cartUrl, data)
        .then((response) => {
          // console.log(response);
          this.modal.title = response.data.message;
          this.modal.content = `已將${response.data.data.product.title}加入購物車`;
          this.openSuccessModal();
          this.$emitter.emit('page-loading', false);
        })
        .catch(() => {
          // console.log(error);
        })
        .finally(() => {
          this.$emitter.emit('page-loading', false);
        });
    },
  },
  unmounted() {
    this.$emitter.off('add-cart');
    this.$emitter.off('sending-sate');
    this.$emitter.off('get-cart');
  },
};
</script>
