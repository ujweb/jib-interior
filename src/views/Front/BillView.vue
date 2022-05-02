<template>
  <section class="pt-50">
    <div class="container">
      <article class="mt-0">
        <div class="row">
          <div class="step-group col-md-6 offset-md-3
            d-flex align-items-center justify-content-between mb-50">
            <div class="step-item text-secondary">
              <div class="fs-3">STEP 1</div>
              <h3 class="mb-0">訂購資訊</h3>
            </div>
            <span class="material-icons-outlined text-secondary">arrow_right_alt</span>
            <div class="step-item text-secondary">
              <div class="fs-3">STEP 2</div>
              <h3 class="mb-0">建立訂單</h3>
            </div>
            <span
              class="material-icons-outlined"
              :class="{'text-secondary': orders.is_paid}"
            >arrow_right_alt</span>
            <div class="step-item" :class="{'text-secondary': orders.is_paid}">
              <div class="fs-3">STEP 3</div>
              <h3 class="mb-0">完成訂單</h3>
            </div>
          </div>
          <div class="col-md-6 mb-md-0 mb-50">
            <h2 class="mb-0">訂單內容</h2>
            <div class="cards cards-cart">
              <div
                class="card card-horizontal"
                v-for="product in products"
                :key="product.id"
              >
                <RouterLink :to="`/product/${product.product.id}`" class="card-img me-10">
                  <img
                    :src="`${product.product.imageUrl}`"
                    class="img-fluid"
                    :alt="`${product.product.title} 產品圖`"
                  >
                  <span class="visually-hidden">{{ product.product.title }}</span>
                </RouterLink>
                <div class="card-body">
                  <div class="card-text me-md-20">
                    <RouterLink
                      :to="`/products?category=${product.product.category}`"
                      class="d-block card-label fs-4 link-secondary"
                    >
                      {{ product.product.category }}
                    </RouterLink>
                    <RouterLink
                      :to="`/product/${product.product_id}`"
                      class="d-block card-title fs-3 fw-bold
                    ">
                      {{ product.product.title }}
                    </RouterLink>
                    <div class="card-amount fs-4 mt-5">數量：{{ product.qty }}</div>
                  </div>
                  <div class="card-price fs-4 mt-md-0 mt-5 text-md-end">
                    NT${{ product.final_total.toLocaleString() }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-order px-md-20 px-0">
            <div class="p-30 bg-bright-gray bg-opacity-25">
              <h2 class="mb-20">訂購資訊</h2>
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">訂單狀態</div>
                <div class="fs-3 text-danger" v-if="!orders.is_paid">未付款</div>
                <div class="fs-3 text-success" v-else>已付款</div>
              </div>
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">訂單金額</div>
                <h4 class="fs-2 mb-0">NT$ {{ toNumber(orders.total) }}</h4>
              </div>
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">訂單編號</div>
                <div class="fs-3">{{ orders.id }}</div>
              </div>
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">訂單成立時間</div>
                <div class="fs-3">{{ toDate(orders.create_at) }}</div>
              </div>
              <hr class="my-20">
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">Email</div>
                <div class="fs-3">{{ orders.user?.email }}</div>
              </div>
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">收件人姓名</div>
                <div class="fs-3">{{ orders.user?.name }}</div>
              </div>
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">聯絡電話</div>
                <div class="fs-3">{{ orders.user?.tel }}</div>
              </div>
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">收件地址</div>
                <div class="fs-3">{{ orders.user?.address }}</div>
              </div>
              <div class="d-flex align-items-center mt-20">
                <div class="order-title fs-3">備註</div>
                <div class="fs-3">無</div>
              </div>
              <button
                type="button"
                class="btn btn-lg btn-primary fs-3 w-100 mt-40"
                v-if="!orders.is_paid"
                @click="payOrder"
              >前往付款</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      orders: {},
      products: [],
    };
  },
  emits: ['page-loading', 'get-cart'],
  inject: ['provideCart'],
  mounted() {
    this.$emitter.emit('page-loading', false);
    this.$emit('get-cart');
    document.body.classList.add('index-page');
    document.body.classList.remove('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.add('inner-page');
    this.getOrder();
  },
  methods: {
    getOrder() {
      const getOrderApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.$route.params.id}`;
      this.$http.get(getOrderApi)
        .then((response) => {
          this.orders = response.data.order;
          this.products = Object.values(this.orders.products);
          this.$emitter.emit('page-loading', false);
        });
    },
    payOrder() {
      this.$emitter.emit('page-loading', true);
      const payOrderApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.$route.params.id}`;
      this.$http.post(payOrderApi)
        .then((response) => {
          if (response.data.success) {
            this.getOrder();
          }
          this.$emitter.emit('page-loading', false);
        })
        .catch((error) => {
          this.$emitter.emit('page-loading', false);
          this.$pushMessage(error);
        });
    },
    toNumber(val) {
      return Number.parseInt(val, 10).toLocaleString();
    },
    toDate(timestamp) {
      const newDate = new Date(timestamp * 1000);
      return newDate.toLocaleDateString();
    },
  },
};
</script>
