<template>
  <form
    class="modal fade needs-validation"
    id="productModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    novalidate
  >
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body p-30">
          <h2 class="mb-2"><slot name="title"></slot></h2>
          <div class="row">
            <div class="col-md-3 mb-20">
              <label class="mb-10" for="title">請輸入產品名稱</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入產品名稱"
                v-model="data.title"
              />
            </div>
            <div class="col-md-3 mb-20">
              <label class="mb-10" for="category">請輸入分類</label>
              <select id="category" class="form-select" v-model="data.category">
                <option selected disabled>請選擇產品分類</option>
                <option value="沙發">沙發</option>
                <option value="桌子">桌子</option>
                <option value="椅子">椅子</option>
                <option value="系統櫃 / 收納櫃">系統櫃 / 收納櫃</option>
                <option value="床組 / 寢具">床組 / 寢具</option>
                <option value="燈具照明">燈具照明</option>
                <option value="廚房 / 餐具">廚房 / 餐具</option>
              </select>
            </div>
            <div class="col-md-2 mb-20">
              <label class="mb-10" for="unit">請輸入單位</label>
              <input
                type="text"
                class="form-control"
                id="unit"
                placeholder="請輸入單位"
                v-model="data.unit"
              />
            </div>
            <div class="col-md-2 mb-20">
              <label class="mb-10" for="origin_price">請輸入原價</label>
              <input
                type="number"
                class="form-control"
                id="origin_price"
                placeholder="請輸入原價"
                v-model="data.origin_price"
              />
            </div>
            <div class="col-md-2 mb-20">
              <label class="mb-10" for="selling">請輸入售價</label>
              <input
                type="number"
                class="form-control"
                id="selling"
                placeholder="請輸入售價"
                v-model="data.price"
              />
            </div>
            <div class="col-md-12 mb-20">
              <div class="d-flex align-items-center justify-content-between mb-10">
                <div class="fs-3">
                  請輸入網址或上傳圖片
                </div>
                <button
                  class="btn btn-sm btn-primary"
                  type="button"
                  v-if="!data.imagesUrl?.length || data.imagesUrl[data.imagesUrl.length - 1]"
                  @click="addImage"
                  :disabled="data.imagesUrl?.length === 2 && data.imagesUrl?.[1] !== ''"
                >
                  新增圖片
                </button>
                <button
                  class="btn btn-sm btn-light"
                  type="button"
                  v-else
                  @click="removeImage"
                  :disabled="data.imagesUrl?.length === 2 && data.imagesUrl?.[1] !== ''"
                >
                  刪除圖片
                </button>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="row">
                    <div
                      class="col-md-8"
                      :class="{ 'col-md-12': data.imageUrl, 'pe-0': !data.imageUrl }"
                    >
                      <label class="visually-hidden" for="floatingMainPic">請輸入網址或上傳圖片</label>
                      <input
                        type="text"
                        class="form-control"
                        id="floatingMainPic"
                        v-model="data.imageUrl"
                        placeholder="請輸入網址或上傳圖片"
                      />
                    </div>
                    <div class="col-md-4 position-relative" v-show="!data.imageUrl">
                      <button
                        class="d-block w-100 h-100 btn btn-sm btn-light"
                        type="button"
                      >
                        上傳圖片
                      </button>
                      <label for="mainFile" class="position-absolute"></label>
                      <input
                        type="file"
                        class="d-block w-100 h-100 position-absolute top-0 start-0 opacity-0"
                        id="mainFile"
                        placeholder="上傳圖片"
                        data-type="main"
                        @change="uploadImage"
                      />
                    </div>
                  </div>
                  <img
                    v-if="data.imageUrl"
                    class="img-fluid mt-5"
                    :src="data.imageUrl"
                    alt="主圖"
                  />
                </div>
                <div
                  class="col-md-4"
                  v-for="(image, index) in data.imagesUrl"
                  :key="index"
                >
                  <div class="row">
                    <div class="col-md-8" :class="{ 'col-md-12': image }">
                      <input
                        type="text"
                        class="form-control"
                        :id="'floatingPic' + index"
                        v-model="data.imagesUrl[index]"
                        placeholder="請輸入網址或上傳圖片"
                      />
                      <label :for="'floatingPic' + index" class="visually-hidden">請輸入網址或上傳圖片</label>
                    </div>
                    <div class="col-md-4 position-relative ps-0" v-show="!image">
                      <button
                        class="d-block w-100 h-100 btn btn-sm btn-light"
                        type="button"
                      >
                        上傳圖片
                      </button>
                      <label for="subFile" class="position-absolute"></label>
                      <input
                        type="file"
                        class="d-block w-100 h-100 position-absolute top-0 start-0 opacity-0"
                        id="subFile"
                        placeholder="上傳圖片"
                        :data-index="index"
                        data-type="sub"
                        @change="uploadImage"
                      />
                    </div>
                  </div>
                  <img
                    class="img-fluid mt-5"
                    v-show="image"
                    :src="image"
                    :alt="`配圖-${index}`"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6 mb-20">
                  <label class="mb-10" for="description">請輸入產品描述</label>
                  <textarea
                    class="form-control"
                    id="description"
                    style="height: 100px"
                    placeholder="請輸入產品描述"
                    v-model="data.description"
                  ></textarea>
                </div>
                <div class="col-md-6 mb-20">
                  <label class="mb-10" for="content">請輸入說明內容</label>
                  <textarea
                    class="form-control"
                    id="content"
                    style="height: 100px"
                    v-model="data.content"
                    placeholder="請輸入說明內容"
                  ></textarea>
                </div>
              </div>
              <div class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="is_enabled"
                  id="checkEnable"
                  v-model.number="data.is_enabled"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label" for="checkEnable">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-end mt-2">
            <button
              type="button"
              class="btn btn-bright-gray me-10"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="$emit('emit-update-data', title, data)"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      title: null,
      return: {
        title: null,
        content: null,
      },
    };
  },
  props: ['modal', 'type'],
  emits: ['emit-update-data'],
  methods: {
    uploadImage(e) {
      const formData = new FormData();
      formData.append('file-to-upload', e.target.files[0]);
      // 使用 file-to-upload 是因為 Api 所需

      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then((response) => {
          // console.log(response.data.imageUrl);
          if (e.target.dataset.type === 'main') {
            this.data.imageUrl = response.data.imageUrl;
          } else if (e.target.dataset.type === 'sub') {
            this.data.imagesUrl[e.target.dataset.index] = response.data.imageUrl;
          }
        })
        .catch(() => {
          // console.dir(error);
        });
    },
    addImage() {
      if (this.data.imagesUrl === undefined) {
        // 沒有 imagesUrl，先給空陣列
        this.data.imagesUrl = [];
      }
      // 新增一筆空白資料，讓欄位先出來
      this.data.imagesUrl.push('');
    },
    removeImage() {
      this.data.imagesUrl.pop();
    },
  },
  watch: {
    modal() {
      this.data = this.modal;
      this.title = this.type;
    },
  },
};
</script>
