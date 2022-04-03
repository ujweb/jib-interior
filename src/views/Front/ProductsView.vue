<template>
  <section class="opening-inner">
    <img src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="">
    <h1 class="mb-0 serif">家具選購</h1>
  </section>
  <section class="pt-50">
    <div class="container">
      <article class="mt-md-50 mt-0">
        <div class="row">
          <div class="col-xl-2 col-md-3 col-sticky">
            <products-nav />
          </div>
          <div class="col-xl-10 col-md-9">
            <div class="row cards cards-products">
              <div
                class="col-xl-3 col-md-4 col-6 card card-vertical"
                v-for="product in products" :key="product.id"
              >
                <router-link :to="`/product/${product.id}`">
                  <img :src="product.imageUrl" class="card-img img-fluid" alt="">
                  <span class="visually-hidden">{{ product.title }}}</span>
                </router-link>
                <div class="card-body mt-10 text-center">
                  <router-link
                    :to="`/product/${product.id}`"
                    class="d-block card-label fs-4 link-secondary"
                  >
                    {{ product.category }}
                  </router-link>
                  <router-link
                    :to="`/product/${product.id}`"
                    class="d-block card-title fs-3 fw-bold"
                  >
                    {{ product.title }}
                  </router-link>
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
    };
  },
  emits: ['page-loading'],
  components: {
    ProductsNav,
  },
  mounted() {
    this.$emitter.emit('page-loading', false);
    document.body.classList.add('index-page');
    document.body.classList.remove('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.add('inner-page');
    this.getProducts();
  },
  methods: {
    getProducts() {
      let getProductsApi = '';
      // console.log(this.$route.query.category, this.$route.query.page);
      if (typeof this.$route.query.category === 'undefined') {
        getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      } else {
        getProductsApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${this.$route.query.page}&category=${this.$route.query.category}`;
      }
      this.$http.get(getProductsApi)
        .then((response) => {
          this.products = response.data.products.reverse(); // 最新的往上
          this.$emitter.emit('page-loading', false);
        })
        .catch((error) => {
          console.log(error);
          this.$emitter.emit('page-loading', false);
        });
    },
  },
};
</script>
