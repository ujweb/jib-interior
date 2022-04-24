<template>
  <section class="opening-about mt-md-40">
    <div class="container position-relative px-md-20 px-0">
      <div class="ratio ratio-2x1">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/ujhwang/1648997728155.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NI1w6UrLtFFNh0eL%2FWnQgB4XqhFF5bvGXh%2B4XrP%2BkshDk2ztiMi%2BkiPjaUPprHmimEbLP41PBBMXwcHDRxEZCD0Z9i3A%2Bs28DrQO1GqABZthiJkikS1%2B%2B7TRME6FMiic2UixkNFSl8eFgUgy1GlNBglRuTuNCDmjDhmCZk%2Fzp3GeelTVCS%2FlD%2BrXeAwLtvXHZq%2BQz2pxMNn38I2xM1qoRC16QKgy4SUjphJmqcHIuGkDkSveZ1pXga3%2B3XId1KBphkVbjAqMEgwGAxSYmYq%2Bx%2FbODbNPOyVcTjLNtk8Qwv9bitA%2BO%2FRRTdRb8%2FCZIlI%2BgK7osq35hRXiN4i6kKLKjA%3D%3D" alt="關於我們 示意圖">
      </div>
      <div class="position-absolute start-0 top-50 translate-middle-y w-100">
        <div class="col-md-6 offset-md-6">
          <div class="d-flex align-items-baseline justify-content-center">
            <div class="fs-4 me-5">關於 jib interior /</div>
            <h1 class="display-6 serif mb-0">團隊介紹</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <article>
    <div class="container">
      <div class="row">
        <div class="col-sticky col-xl-2 col-md-3">
          <about-nav />
        </div>
        <div class="content col-xl-8 col-md-9">
          <div class="row cards cards-team">
            <div class="col-lg-3 col-md-4 col-6 card card-vertical">
              <img src="../../../public/images/team-01.png" class="card-img img-fluid" alt="符唯剛">
              <span class="card-body mt-10 text-center">
                <span class="card-label fs-4 text-secondary">總設計師</span>
                <h3 class="card-title mb-0">符唯剛</h3>
              </span>
            </div>
            <div class="col-lg-3 col-md-4 col-6 card card-vertical">
              <img src="../../../public/images/team-02.png" class="card-img img-fluid" alt="金姿焰">
              <span class="card-body mt-10 text-center">
                <span class="card-label fs-4 text-secondary">設計師</span>
                <h3 class="card-title mb-0">金姿焰</h3>
              </span>
            </div>
            <div class="col-lg-3 col-md-4 col-6 card card-vertical">
              <img src="../../../public/images/team-03.png" class="card-img img-fluid" alt="喻琴茉">
              <span class="card-body mt-10 text-center">
                <span class="card-label fs-4 text-secondary">設計師</span>
                <h3 class="card-title mb-0">喻琴茉</h3>
              </span>
            </div>
            <div class="col-lg-3 col-md-4 col-6 card card-vertical">
              <img src="../../../public/images/team-04.png" class="card-img img-fluid" alt="謝莉思">
              <span class="card-body mt-10 text-center">
                <span class="card-label fs-4 text-secondary">設計師</span>
                <h3 class="card-title mb-0">謝莉思</h3>
              </span>
            </div>
            <div class="col-lg-3 col-md-4 col-6 card card-vertical">
              <img src="../../../public/images/team-05.png" class="card-img img-fluid" alt="錢露淑">
              <span class="card-body mt-10 text-center">
                <span class="card-label fs-4 text-secondary">設計師</span>
                <h3 class="card-title mb-0">錢露淑</h3>
              </span>
            </div>
            <div class="col-lg-3 col-md-4 col-6 card card-vertical">
              <img src="../../../public/images/team-06.png" class="card-img img-fluid" alt="伍良芮">
              <span class="card-body mt-10 text-center">
                <span class="card-label fs-4 text-secondary">助理設計師</span>
                <h3 class="card-title mb-0">伍良芮</h3>
              </span>
            </div>
            <div class="col-lg-3 col-md-4 col-6 card card-vertical">
              <img src="../../../public/images/team-07.png" class="card-img img-fluid" alt="時榕蘊">
              <span class="card-body mt-10 text-center">
                <span class="card-label fs-4 text-secondary">助理設計師</span>
                <h3 class="card-title mb-0">時榕蘊</h3>
              </span>
            </div>
            <div class="col-lg-3 col-md-4 col-6 card card-vertical">
              <img src="../../../public/images/team-08.png" class="card-img img-fluid" alt="申昀晶">
              <span class="card-body mt-10 text-center">
                <span class="card-label fs-4 text-secondary">助理設計師</span>
                <h3 class="card-title mb-0">申昀晶</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import AboutNav from '@/components/AboutNav.vue';

export default {
  components: {
    AboutNav,
  },
  emits: ['page-loading', 'get-cart'],
  mounted() {
    this.$emitter.emit('page-loading', false);
    document.body.classList.add('index-page');
    document.body.classList.remove('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.add('inner-page');
  },
};
</script>
