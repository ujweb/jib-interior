<template>
  <h1 class="fs-2 mb-20">產品管理</h1>
  <div class="d-flex align-items-center justify-content-between">
    <select class="form-select w-auto" v-model="category.now" @change="getProduct">
      <option value="all" selected>全部商品</option>
      <option v-for="item in category.array" :key="`${item}`">{{ item }}</option>
    </select>
    <button
      class="btn btn-sm btn-primary"
      type="button"
      @click="
        modal.title = '新增產品';
        openProductModal(modal.title, product);
      "
    >
      建立新的產品
    </button>
  </div>
  <div class="table-responsive py-20">
    <table class="table text-center align-middle">
      <thead class="table-light">
        <tr>
          <th width="4%" scope="col">#</th>
          <th width="17%" scope="col">id</th>
          <th width="13%" scope="col">分類</th>
          <th class="text-start" scope="col">產品名稱</th>
          <th width="10%" scope="col">原價</th>
          <th width="10%" scope="col">售價</th>
          <th width="8%" scope="col">是否啟用</th>
          <th width="12%" scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>{{ index + 1 }}</td>
          <td><small>{{ product.id }}</small></td>
          <td class="text-center">{{ product.category }}</td>
          <td class="text-start">
            <RouterLink :to="`/product/${product.id}`" target="_blank">
              {{ product.title }}
            </RouterLink>
          </td>
          <td>{{ product.origin_price.toLocaleString() }}</td>
          <td>{{ product.price.toLocaleString() }}</td>
          <td>
            <div class="form-check form-switch float-none d-inline-block mb-0">
              <button
                class="form-check-input"
                :class="{ checked: product.is_enabled == 1 }"
                @click="toggleEnabled(product)"
                type="button"
              ></button>
            </div>
          </td>
          <td>
            <button
              class="btn btn-sm btn-primary me-5"
              type="button"
              @click="
                modal.title = '編輯產品';
                openProductModal(modal.title, product);
              "
            >
              編輯
            </button>
            <button
              class="btn btn-sm btn-bright-gray"
              type="button"
              @click="
                modal.title = '刪除商品';
                openProductModal(modal.title, product);
              "
            >
              刪除
            </button>
          </td>
        </tr>
        <tr v-if="products?.length === 0">
          <td class="text-center" colspan="8">目前尚無資料</td>
        </tr>
      </tbody>
    </table>
  </div>
  <pagination-nav :pages="paginations" @get-datas="getProduct"></pagination-nav>
  <ProductModal
    :modal="modal.temp"
    :type="modal.title"
    @emit-update-data="updateProduct"
  >
    <template #title>{{ modal.title }}</template>
  </ProductModal>
  <SuccessModal>
    <template #title>{{ modal.title }}</template>
    <template #default>
      {{ modal.content }}
    </template>
  </SuccessModal>
  <DangerModal :modal="modal.temp">
    <template #title>{{ modal.title }}</template>
    <template #default>
      {{ modal.content }}
    </template>
  </DangerModal>
  <DeleteModal :modal="modal.temp" @emit-delete-data="deleteProduct">
    <template #title>{{ modal.title }}</template>
    <template #default>
      是否刪除 <b class="text-danger">{{ modal.temp.title }}</b
      ><br />
      提醒您，刪除後將無法恢復
    </template>
  </DeleteModal>
</template>

<script>
import { bsModal } from '@/script/bootstrap';
import ProductModal from '@/components/AdminProductModal.vue';
import SuccessModal from '@/components/AdminSuccessModal.vue';
import DangerModal from '@/components/AdminDangerModal.vue';
import DeleteModal from '@/components/AdminDeleteModal.vue';

export default {
  data() {
    return {
      page: 1,
      products: [],
      category: {
        now: 'all',
        array: [],
      },
      paginations: {},
      bsModal: null,
      modal: {
        title: '',
        content: '',
        temp: {},
      },
    };
  },
  emits: ['page-loading'],
  components: {
    ProductModal,
    SuccessModal,
    DangerModal,
    DeleteModal,
  },
  mounted() {
    this.$emitter.emit('page-loading', true);
    this.getProducts();
    this.getProduct();
  },
  methods: {
    getProducts() {
      const adminProductsUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.$emitter.emit('page-loading', true);
      this.$http
        .get(adminProductsUrl)
        .then((response) => {
          this.category.array = [...new Set(
            Object.values(response.data.products).map((o) => o.category),
          )];
        })
        .catch(() => {
          // console.dir(error);
          // alert(error.response.data.message);
        });
    },
    getProduct(page = 1) {
      let adminProductsUrl = '';
      if (this.category.now === 'all') {
        adminProductsUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      } else {
        adminProductsUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}&category=${this.category.now}`;
      }
      this.$emitter.emit('page-loading', true);
      this.$http
        .get(adminProductsUrl)
        .then((response) => {
          this.paginations = response.data.pagination;
          this.products = response.data.products;
          this.$emitter.emit('page-loading', false);
        })
        .catch(() => {
          // console.dir(error);
          // alert(error.response.data.message);
        });
    },
    updateProduct(type, product) {
      this.$emitter.emit('page-loading', true);
      const dataProduct = {
        data: product,
      };
      let adminProductUrl = null;
      let method = null;
      if (type === '新增產品') {
        adminProductUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
        method = 'post';
      } else if (type === '編輯產品') {
        adminProductUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.modal.temp.id}`;
        method = 'put';
      }
      this.$http[method](adminProductUrl, dataProduct)
        .then((response) => {
          // console.log(response);
          if (type === '新增產品') {
            this.modal.title = '新增成功';
          } else if (type === '編輯產品') {
            this.modal.title = '修改成功';
          }
          this.modal.content = response.data.message;
          this.modal.temp = {};
        })
        .catch((error) => {
          // console.dir(error);
          if (type === '新增產品') {
            this.modal.title = '新增失敗';
          } else if (type === '編輯產品') {
            this.modal.title = '修改失敗';
          }
          this.modal.content = error.response.data.message;
        })
        .finally(() => {
          this.getProduct();
          this.openSuccessModal();
        });
    },
    deleteProduct(product) {
      const adminProductUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
      this.$emitter.emit('page-loading', true);
      this.$http
        .delete(adminProductUrl)
        .then((response) => {
          // console.log(response);
          this.modal.title = '刪除成功';
          this.modal.content = response.data.message;
          this.getProduct();
        })
        .catch((error) => {
          // console.dir(error);
          this.modal.title = '刪除失敗';
          this.modal.content = error.response.data.message;
        })
        .finally(() => {
          this.openSuccessModal(this.modal.title, this.modal.content);
        });
    },
    toggleEnabled(product) {
      const adminProductUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
      this.$emitter.emit('page-loading', true);
      this.modal.temp = product;

      const dataProduct = {
        data: this.modal.temp,
      };

      if (
        this.modal.temp.is_enabled === 0
        || this.modal.temp.is_enabled === undefined
      ) {
        this.modal.temp.is_enabled = 1;
      } else if (this.modal.temp.is_enabled === 1) {
        this.modal.temp.is_enabled = 0;
      }
      this.$http
        .put(adminProductUrl, dataProduct)
        .then((response) => {
          // console.log(response);
          this.modal.title = '修改成功';
          this.modal.content = response.data.message;
          this.getProduct();
        })
        .catch((error) => {
          // console.dir(error);
          this.modal.title = '修改失敗';
          this.modal.content = error.response.data.message;
        })
        .finally(() => {
          this.openSuccessModal(this.modal.title, this.modal.content);
        });
    },
    openProductModal(type, data) {
      this.$emitter.emit('page-loading', false);
      if (type === '編輯產品') {
        this.bsModal = bsModal('productModal');
        this.modal.temp = JSON.parse(JSON.stringify(data));
      } else if (type === '新增產品') {
        this.bsModal = bsModal('productModal');
        this.modal.temp = {};
      } else if (type === '刪除商品') {
        this.bsModal = bsModal('deleteModal');
        this.modal.temp = JSON.parse(JSON.stringify(data));
      }
      this.bsModal.show();
    },
    openSuccessModal() {
      this.$emitter.emit('page-loading', false);
      this.bsModal = bsModal('SuccessModal');
      this.bsModal.show();
    },
    openDangerModal(obj) {
      this.$emitter.emit('page-loading', false);
      this.modal.title = obj.title;
      this.modal.content = obj.content;
      this.bsModal = bsModal('DangerModal');
      this.bsModal.show();
    },
  },
};
</script>
