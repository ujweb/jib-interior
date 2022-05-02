<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="
          container
          min-vh-100
          py-60
          d-flex
          flex-column
          align-items-center
          justify-content-center
        "
      >
        <img src="@/assets/images/404.svg" alt="error icon" />
        <h1 class="my-20 text-center">
          <span class="d-inline-block">Oops！</span>
          <span class="d-inline-block">這個頁面不存在唷</span>
        </h1>
        <div class="fs-3 mt-20 mb-10">前往其他頁面查看</div>
        <ul
          class="
            d-flex
            flex-md-row flex-column
            align-items-center
            justify-content-center
          "
        >
          <li>
            <RouterLink to="/about">關於 Jib</RouterLink>
          </li>
          <li>
            <RouterLink to="/works">設計作品</RouterLink>
          </li>
          <li>
            <RouterLink to="/products?category=all">家具選購</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">預約諮詢</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "src/assets/sass/variables";
@import "~bootstrap/scss/mixins";
@import "src/assets/sass/mixin";
img {
  width: 50px;
}
ul {
  @include list(0, 0, none);
  li {
    position: relative;
    + li {
      @include media-breakpoint-up(md) {
        padding-left: 1px;
      }
      @include media-breakpoint-down(md) {
        padding-top: 1px;
      }
      &::before {
        @include beforeafter("", block);
        position: absolute;
        background-color: $light-gray;
        @include media-breakpoint-up(md) {
          top: 50%;
          right: 100%;
          width: 1px;
          height: 1rem;
          transform: translateY(-50%);
        }
        @include media-breakpoint-down(md) {
          bottom: 100%;
          left: 50%;
          width: 4rem;
          height: 1px;
          transform: translateX(-50%);
        }
      }
    }
    a {
      display: block;
      padding: 10px;
      color: $russian-green;
      &:hover {
        color: $rifle-green;
      }
    }
  }
}
</style>
