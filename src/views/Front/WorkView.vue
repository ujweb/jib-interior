<template>
  <div class="discount-block bg-bright-gray px-20 py-10 fs-4 lh-1 text-center">
    結帳輸入 HBD2022，享有週年慶九折優惠
  </div>
  <section class="pt-md-50 pt-30">
    <div class="container">
      <h1 class="mb-md-50 mb-30 text-center">
        {{ work.title }}
      </h1>
      <div class="row mx-md-0">
        <img :src="work.img" :alt="work.title" class="img-fluid px-0" />
      </div>
      <article class="mt-md-50 mt-30">
        <div class="row">
          <div class="col-xl-2 col-md-3 col-sticky">
            <div class="desc-group">
              <div class="desc-item">
                <div class="fs-4 text-gray-300 mb-5">格局</div>
                <div class="fs-3">{{ work.pattern }}</div>
              </div>
              <div class="desc-item">
                <div class="fs-4 text-gray-300 mb-5">類型</div>
                <div class="fs-3">{{ work.housetype }}</div>
              </div>
              <div class="desc-item">
                <div class="fs-4 text-gray-300 mb-5">坪數</div>
                <div class="fs-3">{{ work.square }}坪</div>
              </div>
              <div class="desc-item">
                <div class="fs-4 text-gray-300 mb-5">完工時間</div>
                <div class="fs-3">2021 年 3 月</div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-md-9">
            <div class="content" v-html="work.content"></div>
            <div class="recommend pt-50">
              <h2 class="pt-50 mb-20">推薦商品</h2>
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
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }"
              >
                <swiper-slide
                  v-for="recommend in recommends"
                  :key="recommend.id"
                >
                  <RouterLink :to="`/product/${recommend.id}`">
                    <img
                      :src="recommend.imageUrl"
                      class="card-img img-fluid"
                      :alt="`${recommend.title} 產品圖`"
                    />
                    <span class="visually-hidden">{{ recommend.title }}</span>
                  </RouterLink>
                  <div class="card-body mt-10 text-center">
                    <RouterLink
                      :to="`/products?category=${recommend.category}`"
                      class="d-block card-label fs-4 link-secondary"
                    >
                      {{ recommend.category }}
                    </RouterLink>
                    <RouterLink
                      :to="`/product/${recommend.id}`"
                      class="d-block card-title fs-3 fw-bold"
                    >
                      {{ recommend.title }}
                    </RouterLink>
                    <div class="card-price fs-4 text-gray-300 mt-10 mb-0">
                      NT${{ recommend.price.toLocaleString() }}
                    </div>
                  </div>
                </swiper-slide>
                <div class="swiper-next swiper-next-recommend">
                  <span class="material-icons-outlined">chevron_right</span>
                </div>
                <div class="swiper-prev swiper-prev-recommend">
                  <span class="material-icons-outlined">chevron_left</span>
                </div>
                <div
                  class="
                    swiper-pagination swiper-pagination-recommend
                    position-static
                    mt-20
                  "
                ></div>
              </swiper>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import SwiperCore, {
  Autoplay,
  Pagination,
  EffectFade,
  Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation]);

export default {
  data() {
    return {
      work: [],
      recommends: [],
    };
  },
  emits: ['page-loading', 'get-cart'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
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
    this.getWork();
  },
  methods: {
    getWork() {
      const getWorkApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${this.$route.params.id}`;
      this.$http.get(getWorkApi).then((response) => {
        // console.log(response);
        this.$emitter.emit('page-loading', false);
        this.work = response.data.article;
        if (this.work.recommend.length > 0) {
          this.work.recommend.forEach((item) => {
            this.getProduct(item);
          });
        }
      });
    },
    getProduct(id) {
      const getProductApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(getProductApi).then((response) => {
        // console.log(response);
        this.recommends.push(response.data.product);
      });
    },
  },
};
</script>

<style lang="scss">
@import "https://unpkg.com/swiper/swiper-bundle.min.css";
</style>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "src/assets/sass/variables";
@import "~bootstrap/scss/mixins";
@import "src/assets/sass/mixin";
.swiper-slide {
  @include media-breakpoint-down(md) {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
