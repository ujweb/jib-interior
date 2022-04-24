<template>
  <RouterView v-if="routerAlive" />
</template>

<script>
export default {
  data() {
    return {
      routerAlive: true,
    };
  },
  provide() {
    return {
      routerRefresh: this.routerRefresh,
    };
  },
  watch: {
    $route(to) {
      const currentTitle = to.meta.title || '';
      if (currentTitle === '首頁') {
        document.title = 'Jib Interior Studio';
      } else {
        document.title = `${currentTitle} | Jib Interior Studio`;
      }
    },
  },
  methods: {
    routerRefresh() {
      this.routerAlive = false;
      this.$nextTick(() => {
        this.routerAlive = true;
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    },
  },
};
</script>

<style lang="scss">
  @import "@/assets/sass/main";
</style>
