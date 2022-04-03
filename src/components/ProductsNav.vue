<template>
  <ul class="d-md-block d-none">
    <li>
      <router-link :to="{ query: { category: 'all', page: 1 } }" class="btn-link" >
        全部
      </router-link>
    </li>
    <li>
      <router-link :to="{ query: { category: '沙發', page: 1 } }" class="btn-link" >
        沙發
      </router-link>
    </li>
    <li>
      <router-link :to="{ query: { category: '桌子', page: 1 } }" class="btn-link" >
        桌子
      </router-link>
    </li>
    <li>
      <router-link :to="{ query: { category: '椅子', page: 1 } }" class="btn-link" >
        椅子
      </router-link>
    </li>
    <li>
      <router-link :to="{ query: { category: '系統櫃 / 收納櫃', page: 1 } }" class="btn-link" >
        系統櫃 / 收納櫃
      </router-link>
    </li>
    <li>
      <router-link :to="{ query: { category: '床組 / 寢具', page: 1 } }" class="btn-link" >
        床組 / 寢具
      </router-link>
    </li>
    <li>
      <router-link :to="{ query: { category: '燈具照明', page: 1 } }" class="btn-link" >
        燈具照明
      </router-link>
    </li>
    <li>
      <router-link :to="{ query: { category: '廚房 / 餐具', page: 1 } }" class="btn-link" >
        廚房 / 餐具
      </router-link>
    </li>
  </ul>
  <select class="form-select form-select-lg fs-3 d-md-none mb-50">
    <option value="全部">全部</option>
    <option value="沙發">沙發</option>
    <option value="桌子">桌子</option>
    <option value="椅子">椅子</option>
    <option value="系統櫃 / 收納櫃">系統櫃 / 收納櫃</option>
    <option value="床組 / 寢具">床組 / 寢具</option>
    <option value="燈具照明">燈具照明</option>
    <option value="廚房 / 餐具">廚房 / 餐具</option>
  </select>
</template>
