<template>
  <div class="discount-block bg-bright-gray px-20 py-10 fs-4 lh-1 text-center">
    結帳輸入 HBD2022，享有週年慶九折優惠
  </div>
  <section class="opening-inner">
    <img src="@/assets/images/kv-products.jpg" alt="家具選購 示意圖" />
    <h1 class="mb-0 serif">家具選購</h1>
  </section>
  <section class="pt-50">
    <div class="container">
      <article class="mt-md-50 mt-0">
        <div class="row">
          <div class="col-xl-2 col-md-3 col-sticky">
            <products-nav
              :categories="category"
              @emit-change-category="changeCategory"
            />
          </div>
          <div class="col-xl-10 col-md-9">
            <div class="row cards cards-products">
              <div
                class="col-xl-3 col-md-4 col-6 card card-vertical"
                v-for="product in products"
                :key="product.id"
              >
                <RouterLink :to="`/product/${product.id}`">
                  <img
                    :src="product.imageUrl"
                    class="card-img img-fluid"
                    :alt="`${product.title}-主圖`"
                  />
                  <span class="visually-hidden">{{ product.title }}}</span>
                </RouterLink>
                <div class="card-body mt-10 text-center">
                  <button
                    type="button"
                    @click="changeCategory(product.category)"
                    class="d-block card-label fs-4 link-secondary"
                  >
                    {{ product.category }}
                  </button>
                  <RouterLink
                    :to="`/product/${product.id}`"
                    class="d-block card-title fs-3 fw-bold"
                  >
                    {{ product.title }}
                  </RouterLink>
                  <div class="card-price fs-4 text-gray-300 mt-10 mb-0">
                    NT${{ product.price.toLocaleString() }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import ProductsNav from '@/components/ProductsNav.vue';

export default {
  data() {
    return {
      products: [],
      category: {
        now: '',
        list: [],
      },
    };
  },
  emits: ['page-loading', 'get-cart'],
  components: {
    ProductsNav,
  },
  mounted() {
    this.$emitter.emit('page-loading', true);
    document.body.classList.add('index-page');
    document.body.classList.remove('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.add('inner-page');

    this.getCategories();
    if (this.$route.query.category !== 'all') {
      this.category.now = this.$route.query.category;
      this.changeCategory(this.$route.query.category);
    } else if (
      this.$route.query === {}
      || this.$route.query.category === 'all'
    ) {
      this.category.now = 'all';
      this.getProducts();
    }
  },
  methods: {
    getCategories() {
      const getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(getProductsApi)
        .then((response) => {
          const unSortCategory = response.data.products.map(
            (item) => item.category,
          );
          const sortedCategory = unSortCategory.filter(
            (item, i) => unSortCategory.indexOf(item) === i,
          );
          this.category.list = sortedCategory;
        })
        .catch(() => {
          this.$emitter.emit('page-loading', false);
        });
    },
    getProducts() {
      let getProductsApi = '';
      if (
        this.category.now === 'all'
        || this.category.now === 'undefined'
        || this.category.now === ''
      ) {
        getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
        this.$router.push('/products?category=all');
      } else {
        getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=1&category=${this.category.now}`;
        this.$router.push(`/products?category=${this.category.now}`);
      }
      this.$http
        .get(getProductsApi)
        .then((response) => {
          this.products = response.data.products.reverse(); // 最新的往上
          this.$emitter.emit('page-loading', false);
        })
        .catch(() => {
          // console.log(error);
          this.$emitter.emit('page-loading', false);
        });
    },
    changeCategory(value) {
      this.$emitter.emit('page-loading', true);
      this.category.now = value;
      this.getProducts();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "src/assets/sass/variables";
@import "~bootstrap/scss/mixins";
button.link-secondary {
  padding: 0;
  margin: auto;
  color: $grullo;
  border-width: 0;
  background-color: transparent;
  &:hover {
    color: $gold-fusion;
  }
}
</style>
