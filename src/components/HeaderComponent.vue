<template>
  <header>
    <div
      class="container px-0 d-flex align-items-center justify-content-between"
    >
      <button
        type="button"
        class="hamburger btn p-20"
        @click="$emit('emit-toggle-nav')"
      >
        <span class="material-icons-outlined d-block"> menu </span>
      </button>
      <RouterLink to="/" class="logo">
        <img
          src="@/assets/images/logo.svg"
          width="120"
          alt="Jib Interior Studio"
        />
      </RouterLink>
      <nav class="ms-auto">
        <ul class="align-items-center">
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
            <RouterLink to="/contact" class="btn btn-outline-primary"
              >預約諮詢</RouterLink
            >
          </li>
        </ul>
      </nav>
      <RouterLink to="/checkout" class="btn btn-cart p-20">
        <span class="d-block position-relative">
          <span class="material-icons-outlined d-block"> shopping_cart </span>
          <span
            class="position-absolute badge rounded-pill bg-danger"
            v-if="provideCart.data.length > 0"
          >
            {{ provideCart.data.length }}
            <span class="visually-hidden">購物車數量</span>
          </span>
        </span>
      </RouterLink>
    </div>
  </header>
</template>

<script>
export default {
  emits: ['emit-toggle-nav'],
  props: ['carts'],
  inject: ['provideCart'],
};
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "src/assets/sass/variables";
a.RouterLink-active:not(.btn-outline-primary) {
  color: $russian-green;
}
</style>
