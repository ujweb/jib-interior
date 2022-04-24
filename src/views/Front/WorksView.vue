<template>
  <div class="discount-block bg-bright-gray px-20 py-10 fs-4 lh-1 text-center">
    結帳輸入 HBD2022，享有週年慶九折優惠
  </div>
  <section class="opening-inner">
    <img src="../../../public/kv-works.jpg" alt="設計作品 示意圖">
    <h1 class="mb-0 serif">設計作品</h1>
  </section>
  <section class="pt-50">
    <div class="container pt-50">
      <div class="row cards cards-works">
        <div
          class="col-md-4 card card-vertical"
          v-for="work in works" :key="work.id"
        >
          <router-link class="ratio ratio-3x2" :to="`/work/${work.id}`">
            <img :src="work.img" class="card-img img-fluid" :alt="work.title">
            <span class="visually-hidden">{{ work.title }}</span>
          </router-link>
          <div class="card-body mt-10 text-center">
            <div class="card-label fs-3 text-secondary mb-5">
              {{ work.styletype }}風・{{ work.location }}
            </div>
            <router-link
              :to="`/work/${work.id}`"
              class="card-title fs-2 fw-bold"
            >{{ work.title }}</router-link>
          </div>
          <div class="card-desc mt-20">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      works: [],
    };
  },
  emits: ['page-loading', 'get-cart'],
  components: {},
  mounted() {
    this.$emitter.emit('page-loading', true);
    document.body.classList.add('index-page');
    document.body.classList.remove('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.add('inner-page');
    const getWorksApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles`;
    this.$http.get(getWorksApi)
      .then((response) => {
        // console.log(response);
        this.works = response.data.articles;
        this.$emitter.emit('page-loading', false);
      });
  },
};
</script>
