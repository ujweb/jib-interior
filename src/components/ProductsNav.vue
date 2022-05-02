<template>
  <ul class="d-md-block d-none">
    <li>
      <button
        type="button"
        class="btn-link"
        :class="{ active: categories.now === 'all' }"
        @click="$emit('emit-change-category', 'all')"
      >
        全部
      </button>
    </li>
    <li v-for="category in categories.list" :key="`list-${category}`">
      <button
        type="button"
        class="btn-link"
        :class="{ active: categories.now === category }"
        @click="$emit('emit-change-category', category)"
      >
        {{ category }}
      </button>
    </li>
  </ul>
  <select
    class="form-select form-select-lg fs-3 d-md-none mb-50"
    v-model="selectCategory"
    @change="$emit('emit-change-category', selectCategory)"
  >
    <option value="all">全部</option>
    <option value="沙發">沙發</option>
    <option value="桌子">桌子</option>
    <option value="椅子">椅子</option>
    <option value="系統櫃 / 收納櫃">系統櫃 / 收納櫃</option>
    <option value="床組 / 寢具">床組 / 寢具</option>
    <option value="燈具照明">燈具照明</option>
    <option value="廚房 / 餐具">廚房 / 餐具</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectCategory: 'all',
    };
  },
  props: ['categories'],
  emits: ['emit-change-category'],
};
</script>

<style lang="scss" scoped>
button.btn-link {
  padding-left: 0;
  padding-right: 0;
  border-left-width: 0;
  border-right-width: 0;
  background-color: transparent;
}
</style>
