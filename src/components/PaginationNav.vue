<template>
  <nav class="text-center" v-show="pages.total_pages > 1">
    <ul class="pagination d-flex justify-content-center my-4">
      <li class="page-item mx-5" :class="pages.has_pre ? '' : 'disabled'">
        <a
          class="page-link border-0"
          href="#"
          @click.prevent="$emit('get-datas', pages.current_page - 1)"
        >
          <span class="material-icons-outlined fs-4">arrow_back_ios</span>
        </a>
      </li>
      <li
        class="page-item mx-5"
        v-for="(item, key) in pages.total_pages"
        :key="key"
        :class="item === pages.current_page ? 'active' : ''"
      >
        <a class="page-link border-0" href="#" @click.prevent="$emit('get-datas', item)">
          {{ item }}</a
        >
      </li>
      <li class="page-item mx-5" :class="pages.has_next ? '' : 'disabled'">
        <a
          class="page-link border-0"
          href="#"
          @click.prevent="$emit('get-datas', pages.current_page + 1)"
        >
          <span class="material-icons-outlined fs-4">arrow_forward_ios</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
};
</script>
