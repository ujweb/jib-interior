<template>
  <section class="opening-index">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        enabled: true,
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="[EffectFade]" effect="fade"
      class="swiper-index h-100"
    >
      <swiper-slide>
        <img src="../../../public/images/index/promote-1.png" alt="裝潢渲染圖1">
        <div class="container h-100">
          <div
            class="row h-100 align-content-center justify-content-sm-start justify-content-center"
          >
            <div class="col-md-3 col-9">
              <img src="@/assets/images/logo.svg" class="w-100 img-fluid" alt="Jib Interior Logo">
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../../../public/images/index/promote-2.png" alt="裝潢渲染圖2">
        <div class="container h-100">
          <div
            class="row h-100 align-content-center justify-content-sm-start justify-content-center"
          >
            <div class="col-md-3 col-9">
              <img src="@/assets/images/logo.svg" class="w-100 img-fluid" alt="Jib Interior Logo">
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../../../public/images/index/promote-3.png" alt="裝潢渲染圖3">
        <div class="container h-100">
          <div
            class="row h-100 align-content-center justify-content-sm-start justify-content-center"
          >
            <div class="col-md-3 col-9">
              <img src="@/assets/images/logo.svg" class="w-100 img-fluid" alt="Jib Interior Logo">
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import SwiperCore, {
  Autoplay, Pagination, EffectFade, Navigation, Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation, Thumbs]);
// import 'swiper/swiper.scss';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      EffectFade,
      Autoplay,
    };
  },
  mounted() {
    this.$emitter.emit('page-loading', false);
    document.body.classList.remove('index-page');
    document.body.classList.add('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.remove('inner-page');
  },
};
</script>

<style lang="scss">
  @import "https://unpkg.com/swiper/swiper-bundle.min.css";
</style>

<style lang="scss" scoped>
  .opening-index {
    min-height: 100%;
    height: 100%;
    transition: transform 0.3s;
    .opened-nav & {
      transform: translateX(200px);
    }
    .container {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
    .swiper-slide {
      position: relative;
      > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
