<template>
  <header>
    <div class="container px-0 d-flex align-items-center justify-content-between">
      <button type="button" class="hamburger btn p-20" @click="$emit('emit-toggle-nav')">
        <span class="material-icons-outlined d-block">
          menu
        </span>
      </button>
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo.svg" width="120" alt="Jib Interior Studio">
      </router-link>
      <nav class="ms-auto">
        <ul class="align-items-center">
          <li>
            <router-link to="/about">關於 Jib</router-link>
          </li>
          <li>
            <router-link to="/works">設計作品</router-link>
          </li>
          <li>
            <router-link to="/products?category=all">家具選購</router-link>
          </li>
          <li>
            <router-link to="/contact" class="btn btn-outline-primary">預約諮詢</router-link>
          </li>
        </ul>
      </nav>
      <router-link to="/checkout" class="btn btn-cart p-20">
        <span class="d-block position-relative">
          <span class="material-icons-outlined d-block">
            shopping_cart
          </span>
          <span class="position-absolute badge rounded-pill bg-danger">
            {{ provideCart.amount }}
            <span class="visually-hidden">購物車數量</span>
          </span>
        </span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  emits: ['emit-toggle-nav'],
  inject: ['provideCart'],
};
</script>

<style lang="scss" scoped>
  @import "~bootstrap/scss/functions";
  @import "src/assets/sass/variables";
  a.router-link-active {
    color: $russian-green;
  }
</style>
