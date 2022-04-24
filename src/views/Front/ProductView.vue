<template>
  <div class="discount-block bg-bright-gray px-20 py-10 fs-4 lh-1 text-center">
    結帳輸入 HBD2022，享有週年慶九折優惠
  </div>
  <section class="pt-50" :class="{'opacity-0': loading}">
    <div class="container">
      <article class="mt-0">
        <div class="row">
          <div class="col-md-5 col-sticky">
            <div class="d-md-none">
              <ul class="breadcrumb">
                <li>
                  <router-link to="/products?category=all">家具選購</router-link>
                </li>
                <li>
                  <router-link :to="`/products?category=${product.category}&page=1`">
                    {{ product.category }}
                  </router-link>
                </li>
              </ul>
              <h1 class="mt-10 mb-0">{{ product.title }}</h1>
              <div class="fs-1 mb-0">NT${{Number(product.price).toLocaleString()}}</div>
            </div>
            <div class="swiper-group">
              <swiper
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                  enabled: true,
                  delay: 5000,
                  disableOnInteraction: false,
                }"
                effect="fade"
                :pagination="{
                  el: '.swiper-pagination-product',
                  clickable: true,
                }"
                :navigation="{
                  nextEl: '.swiper-next-product',
                  prevEl: '.swiper-prev-product',
                }"
                class="product-imgs"
              >
                <swiper-slide>
                  <img :src="product.imageUrl" class="img-fluid w-100" alt="產品主圖">
                </swiper-slide>
                <swiper-slide v-for="(imgUrl, index) in product.imagesUrl" :key="index">
                  <img
                    :src="imgUrl"
                    class="img-fluid w-100"
                    :alt="`產品配圖-${index}`"
                  >
                </swiper-slide>
                <div class="swiper-next swiper-next-product">
                  <span class="material-icons-outlined">chevron_right</span>
                </div>
                <div class="swiper-prev swiper-prev-product">
                  <span class="material-icons-outlined">chevron_left</span>
                </div>
                <div class="swiper-pagination swiper-pagination-product
                position-static mt-10 d-md-none"></div>
              </swiper>
            </div>
          </div>
          <div class="col-md-7">
            <div class="d-md-block d-none">
              <ul class="breadcrumb">
                <li>
                  <router-link to="/products?category=all">家具選購</router-link>
                </li>
                <li>
                  <router-link :to="`/products?category=${product.category}&page=1`">
                    {{ product.category }}
                  </router-link>
                </li>
              </ul>
              <h1 class="mt-10 mb-0">{{ product.title }}</h1>
              <div class="fs-1 mb-0">NT${{ toNumber(product.price) }}</div>
            </div>
            <div class="pre-wrap text-gray-400 my-20">
              {{product.description}}
            </div>
            <div class="row">
              <div class="col-xl-2 col-md-3 col-sm-3 col-5 pe-0">
                <select
                  class="form-select form-select-lg fs-3"
                  v-model.number="cart.qty"
                >
                  <option
                    v-for="idx in 10"
                    :key="`${idx}`"
                    :selected="cart.qty"
                  >
                    {{ idx }}
                  </option>
                </select>
              </div>
              <div class="col-auto">
                <button
                  type="button"
                  class="btn btn-lg btn-primary fs-3"
                  :disabled="cartState"
                  @click="addToCart(product, cart.qty)"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    v-if="cartState"
                    aria-hidden="true"
                  ></span>
                  加入購物車
                </button>
              </div>
            </div>
            <hr class="my-50">
            <div class="content">
              <h3 class="mb-10">產品詳細訊息</h3>
              <p class="my-10 pre-wrap">
                {{ product.content }}
              </p>
              <h3 class="mt-50 mb-10">Jib 購買訊息</h3>
              <p>
                使用 Jib 為您的家具提供更優惠的價格，我們也不會將任何多於費用轉嫁給您。
                如果您在其他家具網站上找到更優惠的價格，請告訴我們，我們會為您比價，確認後若你立即購買，即享 9 折優惠。
              </p>
              <h3 class="mt-50 mb-10">配送規則</h3>
              <p class="my-10">
                由於 Jib 超過 10,000 元的訂單都有資格免費送貨。
                1,000 元的固定運費適用於 10,000 元以下的訂單。
                對於較大的家具，Jib 與專門從事家具運輸的運送方合作，以確保產品安全無虞地到達。
              </p>
              <h3 class="mt-50 mb-10">退貨規則</h3>
              <p class="my-10">
                我們知道購買家具的過程可能會帶來壓力。這就是為什麼 Jib 團隊在這里為您處理所有退貨並讓您的體驗盡可能輕鬆。
                您可以在交貨後 30 天內退回大多數物品以獲得退款。但需要您支付退貨運費，此位該家具必須保持完整產品及包裝。
              </p>
            </div>
          </div>
          <div class="recommend col-12 pt-md-50" v-if="recommends.length > 0">
            <hr class="my-50">
            <h2 class="mb-20">
              推薦商品
            </h2>
            <swiper
              class="cards cards-recommend"
              :slides-per-view="1"
              :space-between="40"
              :pagination="{
                el: '.swiper-pagination-recommend',
                clickable: true,
              }"
              :navigation="{
                nextEl: '.swiper-next-recommend',
                prevEl: '.swiper-prev-recommend',
              }"
              :breakpoints="{
                576: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                }
              }"
            >
              <swiper-slide v-for="recommend in recommends" :key="recommend.id">
                <router-link :to="`/product/${recommend.id}`">
                  <img :src="recommend.imageUrl" class="card-img img-fluid" :alt="recommend.title">
                  <span class="visually-hidden">{{ recommend.title }}</span>
                </router-link>
                <div class="card-body mt-10 text-center">
                  <router-link
                    :to="`/products?category=${product.category}&page=1`"
                    class="d-block card-label fs-4 link-secondary"
                  >
                    {{ recommend.category }}
                  </router-link>
                  <router-link
                    :to="`/product/${recommend.id}`"
                    class="d-block card-title fs-3 fw-bold"
                  >
                    {{ recommend.title }}
                  </router-link>
                  <div class="card-price fs-4 text-gray-300 mt-10 mb-0">
                    NT${{ toNumber(recommend.price) }}
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-next swiper-next-recommend">
                <span class="material-icons-outlined">chevron_right</span>
              </div>
              <div class="swiper-prev swiper-prev-recommend">
                <span class="material-icons-outlined">chevron_left</span>
              </div>
              <div class="swiper-pagination swiper-pagination-recommend
              position-static mt-20"></div>
            </swiper>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import SwiperCore, {
  Autoplay, Pagination, EffectFade, Navigation, Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation, Thumbs]);

export default {
  data() {
    return {
      loading: true,
      cartState: false,
      products: [],
      product: {},
      recommends: [],
      cart: {
        qty: 1,
      },
    };
  },
  emits: ['page-loading', 'get-cart', 'add-cart', 'toggle-spinner'],
  inject: ['routerRefresh'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      Navigation,
      Pagination,
      EffectFade,
    };
  },
  mounted() {
    this.$emitter.emit('page-loading', true);
    document.body.classList.add('index-page');
    document.body.classList.remove('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.add('inner-page');
    this.getAllProducts();
  },
  methods: {
    getProduct() {
      const getProductApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`;
      this.$http.get(getProductApi)
        .then((response) => {
          // console.log(response);
          this.$emitter.emit('page-loading', false);
          this.loading = false;
          this.product = response.data.product;
          this.filterRecommend();
        });
    },
    getAllProducts() {
      const getAllProductApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(getAllProductApi)
        .then((response) => {
          this.products = response.data.products.reverse();
          this.getProduct();
        })
        .catch(() => {
          // console.log(error);
          this.$emitter.emit('page-loading', false);
        });
    },
    filterRecommend() {
      const { category, id } = this.product;
      const arrayFilter = this.products.filter(
        (item) => item.category === category && item.id !== id,
      );
      const max = arrayFilter.length < 6 ? arrayFilter.length : 6;
      const arraySet = new Set([]);
      for (let i = 0; arraySet.size < max; i + 1) {
        const num = Math.floor(Math.random() * arrayFilter.length);
        arraySet.add(num);
      }
      this.recommends = [];
      arraySet.forEach((i) => {
        this.recommends.push(arrayFilter[i]);
      });
    },
    addToCart(item, qty = 1) {
      // console.log(item, qty);
      this.$emitter.emit('page-loading', true);
      this.$emitter.emit('add-cart', { item, qty });
    },
    toNumber(val) {
      return Number.parseInt(val, 10).toLocaleString();
    },
  },
  watch: {
    $route: {
      handler() {
        this.routerRefresh();
      },
    },
  },
};
</script>

<style lang="scss">
  @import "https://unpkg.com/swiper/swiper-bundle.min.css";
</style>

<style lang="scss" scope>
  section {
    transition: opacity 0.3s;
  }
  .pre-wrap {
    white-space: pre-wrap;
  }
</style>
