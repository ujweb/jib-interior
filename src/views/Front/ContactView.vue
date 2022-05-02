<template>
  <section class="opening-about mt-md-40">
    <div class="container position-relative px-md-20 px-0">
      <div class="ratio ratio-2x1">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/ujhwang/1648997728155.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NI1w6UrLtFFNh0eL%2FWnQgB4XqhFF5bvGXh%2B4XrP%2BkshDk2ztiMi%2BkiPjaUPprHmimEbLP41PBBMXwcHDRxEZCD0Z9i3A%2Bs28DrQO1GqABZthiJkikS1%2B%2B7TRME6FMiic2UixkNFSl8eFgUgy1GlNBglRuTuNCDmjDhmCZk%2Fzp3GeelTVCS%2FlD%2BrXeAwLtvXHZq%2BQz2pxMNn38I2xM1qoRC16QKgy4SUjphJmqcHIuGkDkSveZ1pXga3%2B3XId1KBphkVbjAqMEgwGAxSYmYq%2Bx%2FbODbNPOyVcTjLNtk8Qwv9bitA%2BO%2FRRTdRb8%2FCZIlI%2BgK7osq35hRXiN4i6kKLKjA%3D%3D"
          alt="關於我們 示意圖"
        />
      </div>
      <div class="position-absolute start-0 top-50 translate-middle-y w-100">
        <div class="col-md-6 offset-md-6">
          <div class="d-flex align-items-baseline justify-content-center">
            <div class="fs-4 me-5">關於 jib interior /</div>
            <h1 class="display-6 serif mb-0">聯絡我們</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <article>
    <div class="container">
      <div class="row">
        <div class="col-sticky col-xl-2 col-md-3">
          <about-nav />
        </div>
        <div class="content col-xl-8 col-md-9">
          <form
            method="post"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScdPpK935_q3UMWAe6SbZfV0wHLw0SdkL7nBo33cVOEzv_aVw/formResponse"
            target="response_frame"
          >
            <div class="mb-20">
              <label for="name" class="form-label mb-10">
                <span class="text-danger">*</span> 聯絡人姓名
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="form.name"
                placeholder="請輸入聯絡人姓名"
                name="entry.825960269"
                required
              />
            </div>
            <div class="mb-20">
              <label for="phone" class="form-label mb-10">
                <span class="text-danger">*</span> 聯絡電話
              </label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                v-model="form.phone"
                placeholder="請輸入聯絡電話"
                name="entry.608796273"
                required
              />
            </div>
            <div class="mb-20">
              <label for="email" class="form-label mb-10">
                <span class="text-danger">*</span> Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="form.email"
                placeholder="請輸入 Email"
                name="entry.2082609530"
                required
              />
            </div>
            <div class="mb-20">
              <label for="ask" class="form-label mb-10">
                <span class="text-danger">*</span> 詢問內容
              </label>
              <textarea
                class="form-control"
                id="ask"
                rows="3"
                v-model="form.ask"
                placeholder="請輸入詢問內容"
                name="entry.2043559219"
                required
              ></textarea>
            </div>
            <div class="form-check mb-40">
              <input
                class="form-check-input"
                type="checkbox"
                value="已同意"
                id="readCheck"
                v-model="form.check"
                name="entry.1056356055"
              />
              <label class="form-check-label" for="readCheck">
                我已閱讀並同意個資聲明<br />
                <span class="fs-4 text-gray-400">
                  Jib
                  室內設計公司（以下統稱我們）為本服務之目的向您蒐集、處理、利用您的資料包括您的
                  【姓名、電話、Email
                  或其他得以直接或間接識別您個人之資料】，通過遞交此表格，
                  您確認同意我們按照隱私權聲明存儲及處理您的個人資料。<br />
                  您可依個人資料保護法規定，就您的個人資料向我們行使下列權利：
                  (1) 查詢或請求閱覽 (2) 請求製給複製本 (3) 請求補充或更正 (4)
                  請求停止蒐集、處理及利用 (5) 請求刪除。
                </span>
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-lg btn-primary fs-3 w-100"
              :disabled="
                !form.name ||
                !form.phone ||
                !form.email ||
                !form.ask ||
                !form.check
              "
              @click="responseForm"
            >
              確認送出
            </button>
            <div class="text-danger text-center mt-10" v-if="sentForm">
              已收到您的回覆，我們將於數日內與您聯絡，謝謝。
            </div>
          </form>
          <iframe
            name="response_frame"
            class="d-none"
            title="回覆不跳頁用"
          ></iframe>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import AboutNav from '@/components/AboutNav.vue';

export default {
  data() {
    return {
      sentForm: false,
      form: {
        name: '',
        phone: '',
        email: '',
        ask: '',
        check: '',
      },
    };
  },
  components: {
    AboutNav,
  },
  emits: ['page-loading', 'get-cart'],
  mounted() {
    this.$emitter.emit('page-loading', false);
    document.body.classList.add('index-page');
    document.body.classList.remove('index-page');
    document.body.classList.remove('opened-nav');
    document.body.classList.add('inner-page');
  },
  methods: {
    responseForm() {
      this.sentForm = true;
      setTimeout(() => {
        this.form = {
          name: '',
          phone: '',
          email: '',
          ask: '',
          check: '',
        };
      }, 1000);
    },
  },
};
</script>
