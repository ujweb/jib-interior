<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div
        class="
          col-md-6
          bg-blur
          d-flex
          align-items-center
          justify-content-center
          text-light
        "
      >
        <form @submit.prevent="login">
          <h1 class="my-0">歡迎回來</h1>
          <p class="mt-0 mb-5">登入繼續使用</p>
          <div class="my-20">
            <label class="d-block" for="inputMail">
              <input
                type="email"
                class="
                  form-control form-control-lg
                  fs-4
                  text-light
                  bg-transparent
                  border-white
                "
                id="inputMail"
                placeholder="請輸入登入 Email"
                v-model="user.username"
                required
              />
            </label>
          </div>
          <div class="my-20">
            <label class="d-block" for="inputPassword">
              <input
                type="password"
                class="
                  form-control form-control-lg
                  fs-4
                  text-light
                  bg-transparent
                  border-white
                "
                id="inputPassword"
                placeholder="請輸入密碼"
                v-model="user.password"
                required
              />
            </label>
          </div>
          <p class="fs-8 lh-sm my-0">{{ error }}</p>
          <button class="btn btn-lg btn-primary w-100 mt-20 fs-3" type="submit">
            登入
          </button>
          <RouterLink
            class="d-block link-light mt-20 text-center text-decoration-none"
            to="/"
          >
            返回前台
          </RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: '',
      user: {
        username: '',
        password: '',
      },
    };
  },
  mounted() {
    this.$emitter.emit('page-loading', false);
  },
  methods: {
    login() {
      const signinApi = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http
        .post(signinApi, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          document.cookie = `signinToken=${token}; expires=${new Date(
            expired,
          )}`;
          this.$router.push('/admin/products');
        })
        .catch((error) => {
          // console.dir(error);
          this.user.username = '';
          this.user.password = '';
          this.error = error.response.data.error.message;
        });
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "src/assets/sass/variables";
@import "~bootstrap/scss/mixins";
html,
body,
#app {
  @include media-breakpoint-up(md) {
    min-height: 100%;
    height: 100%;
  }
}
</style>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "src/assets/sass/variables";
@import "~bootstrap/scss/mixins";
.container-fluid {
  background-image: url("@/assets/images/kv-login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.bg-blur {
  backdrop-filter: blur(10px) brightness(0.95);
}
form {
  @include media-breakpoint-up(md) {
    width: 300px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: color 5000000s ease-in-out 0s,
      background-color 5000000s ease-in-out 0s;
  }
  .form-control::placeholder {
    color: $white;
  }
  .form-control::-webkit-input-placeholder {
    color: $white;
  }
  .form-control:-ms-input-placeholder {
    color: $white;
  }
  .form-control::-moz-placeholder {
    color: $white;
    opacity: 1;
  }
}
</style>
