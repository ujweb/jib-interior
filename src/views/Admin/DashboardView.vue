<template>
  <PageLoading />
  <div class="container-fluid">
    <div class="row">
      <aside class="bg-dark sidebar min-vh-100 px-30 py-20">
        <div class="position-sticky h-100 d-flex flex-column">
          <div class="mb-20 py-20 border-bottom">
            <img
              src="@/assets/images/logo-white.svg"
              width="170"
              alt="Jib Interior Studio"
              class="d-block mx-auto"
            />
          </div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <RouterLink to="/admin/products">
                <span class="material-icons-outlined me-5">inventory_2</span>
                <span>產品管理</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/orders">
                <span class="material-icons-outlined me-5">summarize</span>
                <span>訂單管理</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/coupons">
                <span class="material-icons-outlined me-5"
                  >confirmation_number</span
                >
                <span>優惠券管理</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/articles">
                <span class="material-icons-outlined me-5">description</span>
                <span>文章管理</span>
              </RouterLink>
            </li>
          </ul>
          <div class="mt-auto"></div>
          <ul class="nav flex-column border-top border-gray-300">
            <li class="nav-item">
              <button type="button" class="w-100" @click.prevent="logout">
                登出
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div class="content-wrapper px-30 py-20">
        <RouterView v-if="checkAccount" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkAccount: false,
    };
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)signinToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = token;
    this.checkSignin();
  },
  methods: {
    checkSignin() {
      const checkUserApi = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http
        .post(checkUserApi)
        .then(() => {
          this.$emitter.emit('page-loading', false);
          this.checkAccount = true;
        })
        .catch(() => {
          // console.dir(error);
          // alert(error.response.data.message);
          this.$router.push('/login');
        });
    },
    logout() {
      const logoutUrl = `${process.env.VUE_APP_API}/logout`;
      this.$http
        .post(logoutUrl)
        .then(() => {
          this.$router.push('/login'); // 登出成功後返回登入首頁
        })
        .catch(() => {
          // console.dir(error);
          // alert(error.response.data.message);
        });
    },
  },
  watch: {
    $route(to) {
      const currentTitle = to.meta.title || '';
      document.title = `${currentTitle} | Jib Interior Studio`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "src/assets/sass/variables";
@import "~bootstrap/scss/mixins";
@import "src/assets/sass/mixin";

aside {
  width: 250px;
  color: $white;
  ul {
    @include list(0, 0, none);
  }
  .nav-item {
    + .nav-item {
      margin-top: 0.25rem;
    }
    > a,
    > button {
      display: flex;
      align-items: center;
      padding: 0.75rem 0.5rem;
      color: $white;
      text-decoration: none;
      border: 0;
      background-color: transparent;
      appearance: none;
      &:hover {
        color: $primary;
      }
      &.router-link-active {
        background-color: rgba($white, 0.05);
      }
    }
  }
}
.content-wrapper {
  width: calc(100% - 250px);
}
</style>
