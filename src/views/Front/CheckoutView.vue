<template>
  <section class="pt-50">
    <div class="container">
      <article class="mt-0">
        <div class="row">
          <div
            class="
              step-group
              col-md-6
              offset-md-3
              d-flex
              align-items-center
              justify-content-between
              mb-50
            "
          >
            <div class="step-item text-secondary">
              <div class="fs-3">STEP 1</div>
              <h3 class="mb-0">訂購資訊</h3>
            </div>
            <span class="material-icons-outlined">arrow_right_alt</span>
            <div class="step-item">
              <div class="fs-3">STEP 2</div>
              <h3 class="mb-0">建立訂單</h3>
            </div>
            <span class="material-icons-outlined">arrow_right_alt</span>
            <div class="step-item">
              <div class="fs-3">STEP 3</div>
              <h3 class="mb-0">完成訂單</h3>
            </div>
          </div>
          <div class="col-md-12 mb-20" v-if="provideCart.data.length !== 0">
            <RouterLink
              to="/products?category=all"
              class="link-black d-inline-flex align-items-center"
            >
              <span class="material-icons-outlined me-5">chevron_left</span>
              繼續購物
            </RouterLink>
          </div>
          <div class="col-12">
            <div class="row" v-if="provideCart.data.length > 0">
              <div class="col-md-6 mb-md-0 mb-50">
                <hr class="bg-light my-0" />
                <div class="cards cards-cart">
                  <div
                    class="card card-horizontal"
                    v-for="cart in provideCart.data"
                    :key="cart.product_id"
                  >
                    <RouterLink
                      :to="`/product/${cart.product_id}`"
                      class="card-img me-10"
                    >
                      <img
                        :src="`${cart.product.imageUrl}`"
                        class="img-fluid"
                        :alt="`${cart.product.title} 主圖`"
                      />
                      <span class="visually-hidden">{{
                        cart.product.title
                      }}</span>
                    </RouterLink>
                    <div class="card-body">
                      <div class="card-text me-md-20">
                        <RouterLink
                          :to="`/products?category=${cart.product.category}`"
                          class="d-block card-label fs-4 link-secondary"
                        >
                          {{ cart.product.category }}
                        </RouterLink>
                        <RouterLink
                          :to="`/product/${cart.product_id}`"
                          class="d-block card-title fs-3 fw-bold"
                        >
                          {{ cart.product.title }}
                        </RouterLink>
                        <div class="card-amount fs-4 mt-5">
                          數量：{{ cart.qty }}
                        </div>
                      </div>
                      <div class="card-price fs-4 mt-md-0 mt-5 text-md-end">
                        NT${{ cart.final_total.toLocaleString() }}
                      </div>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-primary ms-10"
                        @click="removeCart('delete', cart.id)"
                      >
                        刪除
                      </button>
                    </div>
                  </div>
                </div>
                <hr class="bg-light my-0" />
                <div
                  class="input-group mt-40 mb-30"
                  :class="{ 'pb-10': error.length > 0 }"
                >
                  <label for="coupon"></label>
                  <input
                    id="coupon"
                    type="text"
                    class="form-control form-control-lg fs-3 bg-white"
                    :readonly="provideCart.total !== provideCart.final_total"
                    :placeholder="
                      provideCart.total !== provideCart.final_total
                        ? '您已套用優惠券'
                        : '套用優惠券'
                    "
                    v-model="code"
                  />
                  <div class="error fs-4 text-danger" v-if="error.length > 0">
                    {{ error }}
                  </div>
                  <button
                    class="btn btn-lg btn-primary fs-3"
                    type="button"
                    :disabled="
                      provideCart.total !== provideCart.final_total || !code
                    "
                    @click="useCoupon"
                  >
                    套用優惠券
                  </button>
                </div>
                <div class="row">
                  <div class="col-md-8 offset-md-4">
                    <div
                      class="
                        d-flex
                        align-items-center
                        justify-content-between
                        mt-10
                      "
                    >
                      <div class="fs-3">商品總計</div>
                      <h3 class="fs-2">
                        NT$ {{ provideCart.total.toLocaleString() }}
                      </h3>
                    </div>
                    <div
                      class="
                        d-flex
                        align-items-center
                        justify-content-between
                        mt-10
                      "
                      v-if="provideCart.total !== provideCart.final_total"
                    >
                      <div class="fs-3">優惠券折扣</div>
                      <div class="fs-3">
                        − NT$ {{ provideCart.total - provideCart.final_total }}
                      </div>
                    </div>
                    <div
                      class="
                        d-flex
                        align-items-center
                        justify-content-between
                        mt-10
                      "
                    >
                      <div class="fs-3">訂單總計</div>
                      <h3 class="fs-2">
                        NT$ {{ provideCart.final_total.toLocaleString() }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 px-md-20 px-0">
                <div class="p-30 bg-bright-gray bg-opacity-25">
                  <h2 class="mb-20">填寫訂購資訊</h2>
                  <FormBlock
                    ref="order"
                    v-slot="{ errors }"
                    @submit="sendOrder"
                  >
                    <div class="mb-20">
                      <label for="email" class="form-label mb-10">
                        <span class="text-danger">*</span> Email
                      </label>
                      <FieldInput
                        type="email"
                        id="email"
                        name="Email"
                        class="form-control"
                        :class="{ 'is-invalid': errors['Email'] }"
                        placeholder="請輸入 Email"
                        rules="email|required"
                        inputmode="email"
                        v-model="user.email"
                      ></FieldInput>
                      <ErrorMessage
                        name="Email"
                        class="invalid-feedback"
                      ></ErrorMessage>
                    </div>
                    <div class="mb-20">
                      <label for="name" class="form-label mb-10">
                        <span class="text-danger">*</span> 收件人姓名
                      </label>
                      <FieldInput
                        type="name"
                        id="name"
                        name="姓名"
                        class="form-control"
                        :class="{ 'is-invalid': errors['姓名'] }"
                        placeholder="請輸入收件人姓名"
                        rules="required"
                        v-model="user.name"
                      ></FieldInput>
                      <ErrorMessage
                        name="姓名"
                        class="invalid-feedback"
                      ></ErrorMessage>
                    </div>
                    <div class="mb-20">
                      <label for="tel" class="form-label mb-10">
                        <span class="text-danger">*</span> 聯絡電話
                      </label>
                      <FieldInput
                        type="tel"
                        id="tel"
                        name="電話"
                        class="form-control"
                        :class="{ 'is-invalid': errors['電話'] }"
                        placeholder="請輸入聯絡電話"
                        :rules="isPhone"
                        inputmode="tel"
                        v-model="user.tel"
                      ></FieldInput>
                      <ErrorMessage
                        name="電話"
                        class="invalid-feedback"
                      ></ErrorMessage>
                    </div>
                    <div class="mb-20">
                      <label for="address" class="form-label mb-10">
                        <span class="text-danger">*</span> 收件地址
                      </label>
                      <FieldInput
                        type="text"
                        id="address"
                        name="地址"
                        class="form-control"
                        :class="{ 'is-invalid': errors['地址'] }"
                        placeholder="請輸入收件地址"
                        rules="required"
                        v-model="user.address"
                      ></FieldInput>
                      <ErrorMessage
                        name="地址"
                        class="invalid-feedback"
                      ></ErrorMessage>
                    </div>
                    <div class="mb-40">
                      <label for="ask" class="form-label mb-10">備註</label>
                      <textarea
                        class="form-control"
                        id="ask"
                        rows="3"
                        v-model="message"
                        placeholder="請輸入備註"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary fs-3 w-100"
                    >
                      送出訂單
                    </button>
                  </FormBlock>
                </div>
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-md-12 mb-md-0 mb-50">
                <div
                  class="
                    d-flex
                    flex-column
                    align-items-center
                    justify-content-between
                    py-40
                  "
                >
                  購物車內沒有商品
                  <RouterLink
                    to="/products?category=all"
                    class="
                      btn btn-primary
                      d-inline-flex
                      align-items-center
                      mt-20
                    "
                  >
                    <span class="material-icons-outlined me-5"
                      >chevron_left</span
                    >
                    繼續購物
                  </RouterLink>
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
export default {
  data() {
    return {
      user: {
        email: '',
        name: '',
        tel: '',
        address: '',
      },
      message: '',
      code: '',
      hasDiscount: false,
      error: '',
      carts: [],
    };
  },
  emits: ['page-loading', 'get-cart'],
  inject: ['provideCart'],
  mounted() {
    this.$emit('get-cart');
    this.$emitter.emit('page-loading', false);
    document.body.classList.add('index-page');
    document.body.classList.remove('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.add('inner-page');
  },
  methods: {
    removeCart(type, id) {
      this.$emitter.emit('page-loading', true);
      let cartUrl = null;
      if (type === 'clear') {
        cartUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      } else if (type === 'delete') {
        cartUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      }
      this.$http
        .delete(cartUrl)
        .then(() => {
          // console.log(response);
          this.$emitter.emit('page-loading', false);
          this.$emitter.emit('get-cart');
        })
        .catch(() => {
          // console.dir(error);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼';
    },
    useCoupon() {
      this.$emitter.emit('page-loading', true);
      const data = {
        code: this.code,
      };
      const useCouponApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http
        .post(useCouponApi, { data })
        .then(() => {
          // console.log(response);
          this.$emitter.emit('page-loading', false);
          this.$emitter.emit('get-cart');
          this.hasDiscount = true;
        })
        .catch((error) => {
          // console.dir(error);
          this.error = error.response.data.message;
          this.$emitter.emit('page-loading', false);
        });
    },
    clearForm() {
      this.user = {
        email: '',
        name: '',
        tel: '',
        address: '',
      };
    },
    sendOrder() {
      this.$emitter.emit('page-loading', true);
      const orderUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      // console.log({ data: { user: this.user, message: this.message } });
      this.$http
        .post(orderUrl, { data: { user: this.user, message: this.message } })
        .then((response) => {
          // console.log(response.data);
          this.$emitter.emit('get-cart');
          this.clearForm();
          this.$router.push(`/bill/${response.data.orderId}`);
          this.$emitter.emit('page-loading', false);
        })
        .catch(() => {
          // console.log(error);
          this.$emitter.emit('page-loading', false);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  @import "~bootstrap/scss/functions";
  @import "src/assets/sass/variables";
  @import "~bootstrap/scss/mixins";
  min-height: calc(100vh - 81px - 181px);
  @include media-breakpoint-up(md) {
    min-height: calc(100vh - 81px - 210px);
  }
  .error {
    position: absolute;
    top: calc(100% - 10px);
    left: 0;
    width: 100%;
    padding: 0.75rem 1.5rem;
  }
}
</style>
