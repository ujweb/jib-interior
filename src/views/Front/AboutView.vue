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
            <h1 class="display-6 serif mb-0">認識 Jib</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <article>
    <div class="container">
      <div class="row">
        <div class="col-sticky col-xl-2 col-md-3">
          <AboutNav />
        </div>
        <div class="content col-xl-8 col-md-9">
          <p>
            於 2007
            年成立，以室內設計為主軸模式融入生活，溝通傾聽、互信互賴，從而創造出優質生活美學，
            我們著重於空間的生命力與獨特性，
            藉由室內設計的畫筆呈現作品中的透明性和立體空間的位移，將建築的主體延伸至形式上的呈現，善用虛擬、實體媒介連結空間，
            依色彩巧思的搭配組合、材質運用整合，
            為您的需求量身訂做一個專屬的個人空間，
            輕鬆享受無窮的生活價值與樂趣。
          </p>
          <h2>一磚一瓦 為空間注入光、溫度、感動</h2>
          <p>
            「Jib 希望透過室內設計的規劃，幫助客戶擁有不一樣的生活體驗，
            新屋裝潢只是單純複製於舊房是沒有意義的」— 這是 Jib
            設計公司負責人王曉虞女士一直以來的經營理念。 Jib
            在進行室內設計規劃時，專注人與空間的互動關係，
            打造以人為本的舒適環境。確認空間的使用目的與使用者習慣後，開始進行光線、通風、動線等空間配置，
            並針對電器的擺放位置、桌椅高度等細節，進行完善的人體工學規劃。
          </p>
          <p>
            最後結合素材配色、細節巧思等設計環節，
            讓使用者與空間取得平衡。每個空間的用心設計，為的是讓客戶享受更高品質的居住體驗，
            宸舍為空間創造生命力，是北台灣室內設計推薦首選品牌。
          </p>
          <h2>全方位設計施工團隊，讓夢想的家化為真實</h2>
          <p>
            Jib
            室內設計公司擁有實力堅強的設計師陣容，設計作品曾榮獲多項國外設計獎項，不論住家、商辦、學校、老屋翻新、建築外觀設計等需求，皆是
            Jib 的專業領域。
          </p>
          <p>
            Jib 亦培養自己的專業工務團隊，為的是在施工環節上，
            進行更嚴格的控管，從最初的規劃設計到最後的施工收尾， 皆由 Jib
            為您把關，確保客戶的居住安全及品質。
            極具經驗的設計師，配合嚴謹的施工團隊，再搭配高標準的合格綠建材，
            北台灣室內設計推薦 Jib，幫您一步步規劃出夢想的家。
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import AboutNav from '@/components/AboutNav.vue';

export default {
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
};
</script>
