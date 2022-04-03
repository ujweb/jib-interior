<template>
  <div
    class="modal fade"
    id="articleModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-body p-30">
          <h2 class="mb-20"><slot name="title"></slot></h2>
          <div class="row">
            <div class="col-md-6 mb-20">
              <label for="title" class="form-label">文章標題</label>
              <input
                type="text"
                id="title"
                class="form-control"
                placeholder="輸入標題"
                v-model="data.title"
              />
            </div>
            <div class="col-md-3 mb-20">
              <label for="author" class="form-label">作者名稱</label>
              <input
                type="text"
                id="author"
                class="form-control"
                v-model="data.author"
              />
            </div>
            <div class="col-md-3 mb-20">
              <label for="date" class="form-label">發佈日期</label>
              <v-date-picker
                color="indigo"
                v-model="data.create_at"
                :model-config="modelConfig"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <div class="input-group">
                    <input class="form-control" id="date" :value="inputValue" />
                    <button
                      class="btn btn-sm btn-outline-primary"
                      @click="togglePopover()"
                    >
                      <span class="material-icons-outlined d-block fs-6">calendar_today</span>
                    </button>
                  </div>
                </template>
              </v-date-picker>
            </div>
            <div class="col-md-6 mb-20">
              <label for="image" class="form-label">文章主圖</label>
              <div class="row">
                <div
                  class="col-md-8 pe-0"
                  :class="{ 'col-md-12': data.img }"
                >
                  <input
                    type="text"
                    id="image"
                    class="form-control"
                    v-model="data.img"
                    placeholder="請輸入主圖網址或上傳圖片"
                  />
                </div>
                <div class="col-md-4 position-relative" v-show="!data.img">
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
            </div>
            <div class="col-md-6 mb-20">
              <label for="tags" class="form-label">文章標籤</label>
              <div
                class="d-flex flex-wrap form-control input-tags"
                :class="data.tag > 0 ? 'p-1' : ''"
              >
                <div
                  class="btn btn-sm alert-secondary btn-tags me-5 lh-1"
                  v-for="(item, key) in data.tag"
                  :key="key"
                >
                  <span>{{ item }}</span>
                  <button
                    class="btn btn-xs material-icons-outlined fs-4 lh-1 p-0"
                    type="button"
                    @click="removeTag(item, key)"
                  >
                    clear
                  </button>
                </div>
                <input
                  type="text"
                  id="tags"
                  class="col border-0"
                  :placeholder="
                    data.tag.length > 0 ? '' : '輸入完標籤後，使用 ENTER 新增'
                  "
                  v-model.trim="insertTag"
                  @keydown.enter="addTag"
                />
              </div>
            </div>
            <div class="col-md-3 mb-20">
              <label for="pattern" class="form-label">格局</label>
              <input
                type="text"
                id="pattern"
                class="form-control"
                v-model="data.pattern"
                placeholder="如：三房兩廳"
              />
            </div>
            <div class="col-md-3 mb-20">
              <label for="housetype" class="form-label">案件類型</label>
              <select id="housetype" class="form-select" v-model="data.housetype">
                <option selected disabled>請選擇案件類型</option>
                <option value="新屋裝修">新屋裝修</option>
                <option value="老屋翻新">老屋翻新</option>
                <option value="商業空間">商業空間</option>
              </select>
            </div>
            <div class="col-md-2 mb-20">
              <label for="square" class="form-label">坪數</label>
              <input
                type="number"
                id="square"
                class="form-control"
                v-model="data.square"
              />
            </div>
            <div class="col-md-2 mb-20">
              <label for="location" class="form-label">地點</label>
              <input
                type="text"
                id="location"
                class="form-control"
                v-model="data.location"
              />
            </div>
            <div class="col-md-2 mb-20">
              <label for="styletype" class="form-label">風格</label>
              <select id="styletype" class="form-select" v-model="data.styletype">
                <option selected disabled>請選擇風格</option>
                <option value="現代">現代</option>
                <option value="簡約">簡約</option>
                <option value="美式">美式</option>
                <option value="北歐">北歐</option>
                <option value="鄉村">鄉村</option>
                <option value="奢華">奢華</option>
                <option value="工業">工業</option>
                <option value="新古典">新古典</option>
                <option value="日式">日式</option>
                <option value="混搭">混搭</option>
              </select>
            </div>
            <div class="col-md-12 mb-20">
              <label for="recommends" class="form-label">推薦商品（三項為限）</label>
              <div
                class="d-flex flex-wrap form-control input-recommends"
                :class="data.recommend > 0 ? 'p-1' : ''"
              >
                <div
                  class="btn btn-sm alert-secondary btn-recommends me-5 lh-1"
                  v-for="(item, key) in data.recommend"
                  :key="key"
                >
                  <span>{{ item }}</span>
                  <button
                    class="btn btn-xs material-icons-outlined fs-4 lh-1 p-0"
                    type="button"
                    @click="removeRecommend(item, key)"
                  >
                    clear
                  </button>
                </div>
                <input
                  type="text"
                  id="recommends"
                  class="col border-0"
                  :placeholder="
                    data.recommend.length > 0 ? '' : '輸入完 id 後，使用 ENTER 新增'
                  "
                  v-model.trim="insertRecommend"
                  @keydown.enter="addRecommend"
                />
              </div>
            </div>
            <div class="col-12 mt-20">
              <ckeditor
                :editor="editor"
                :config="editorConfig"
                v-model="data.content"
                class="w-100"
              ></ckeditor>
            </div>
          </div>
          <div class="form-check mt-20">
            <input
              class="form-check-input"
              type="checkbox"
              value="isPublic"
              id="checkPublic"
              v-model.number="data.isPublic"
            />
            <label class="form-check-label" for="checkPublic">
              是否公開
            </label>
          </div>
          <div class="d-flex align-items-center justify-content-end mt-20">
            <button
              type="button"
              class="btn btn-outline-secondary me-10"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="$emit('emit-article-data', data)"
            >
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: ['modal'],
  emits: ['page-loading', 'push-message', 'update-data'],
  data() {
    return {
      data: {
        tag: [],
        recommend: [],
        id: '',
      },
      insertTag: '',
      insertRecommend: '',
      scrollspy: {},
      modelConfig: {
        type: 'number',
      },
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'numberedList', 'bulletedList', '|', 'blockQuote', 'undo', 'redo'],
      },
    };
  },
  methods: {
    getContent() {
      if (!this.data.id) { return; }
      const adminArticleApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${this.data.id}`;
      this.$http.get(adminArticleApi)
        .then((res) => {
          if (!res.data.success) {
            this.$pushMessage(res);
          }
          this.data.content = res.data.article.content;
          this.$emitter.emit('page-loading', false);
        })
        .catch((err) => {
          this.$emitter.emit('page-loading', false);
          this.$pushMessage(err);
        });
    },
    addTag() {
      if (this.insertTag.trim()) {
        this.data.tag.push(this.insertTag.trim());
        this.insertTag = '';
      }
    },
    removeTag(tag, key) {
      const newArray = this.data.tag.filter((item, index) => item !== tag && key !== index);
      this.data.tag = newArray;
    },
    addRecommend() {
      if (this.insertRecommend.trim()) {
        if (this.data.recommend.length > 2) {
          return;
        }
        this.data.recommend.push(this.insertRecommend.trim());
        this.insertRecommend = '';
      }
    },
    removeRecommend(recommend, key) {
      const newArray = this.data.recommend.filter(
        (item, index) => item !== recommend && key !== index,
      );
      this.data.recommend = newArray;
    },
    uploadImage(e) {
      const formData = new FormData();
      formData.append('file-to-upload', e.target.files[0]);
      // 使用 file-to-upload 是因為 Api 所需

      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then((response) => {
          console.log(response.data.imageUrl);
          this.data.img = response.data.imageUrl;
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  },
  watch: {
    modal() {
      this.data = { ...this.modal };
      if (!this.data.tag) {
        this.data.tag = [];
      }
      if (!this.data.recommend) {
        this.data.recommend = [];
      }
      if (!this.data.id) {
        this.data.id = '';
      }
      this.insertTag = '';
      this.insertRecommend = '';
      this.getContent();
    },
  },
};
</script>

<style lang="scss">
.btn.btn-sm {
  min-width: auto;
}
.ck.ck-editor {
  width: 100%;
}
.ck.ck-content {
  height: 300px;
}
</style>
