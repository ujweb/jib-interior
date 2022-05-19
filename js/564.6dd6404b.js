"use strict";(self["webpackChunkjib_interior"]=self["webpackChunkjib_interior"]||[]).push([[564],{5354:function(t,e,a){a.d(e,{Z:function(){return b}});var o=a(6252);const l={class:"modal fade",id:"deleteModal","data-bs-keyboard":"false"},s={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},n={class:"modal-content"},d={class:"modal-body p-30"},i={class:"mb-2"},c={class:"d-flex align-items-center justify-content-end mt-2"},m=(0,o._)("button",{type:"button",class:"btn btn-light me-10","data-bs-dismiss":"modal"}," 取消 ",-1);function p(t,e,a,p,u,r){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",s,[(0,o._)("div",n,[(0,o._)("div",d,[(0,o._)("h2",i,[(0,o.WI)(t.$slots,"title")]),(0,o._)("p",null,[(0,o.WI)(t.$slots,"default")]),(0,o._)("div",c,[m,(0,o._)("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal",onClick:e[0]||(e[0]=e=>t.$emit("emit-delete",u.data))}," 確認 ")])])])])])}var u={props:["modal"],emits:["emit-delete"],data(){return{data:{}}},watch:{modal(){this.data=this.modal}}},r=a(3744);const h=(0,r.Z)(u,[["render",p]]);var b=h},6564:function(t,e,a){a.r(e),a.d(e,{default:function(){return bt}});var o=a(6252),l=a(3577);const s={class:"d-flex align-items-center justify-content-between"},n=(0,o._)("h1",{class:"fs-2 mb-0"},"優惠券管理",-1),d={class:"row"},i={class:"col"},c={class:"table-responsive py-20"},m={class:"table text-center align-middle"},p=(0,o._)("thead",{class:"table-light"},[(0,o._)("tr",null,[(0,o._)("th",{width:"6%",scope:"col"},"#"),(0,o._)("th",{width:"12%",scope:"col"},"優惠券標題"),(0,o._)("th",{width:"12%",scope:"col"},"優惠碼"),(0,o._)("th",{width:"12%",scope:"col"},"折扣"),(0,o._)("th",{width:"12%",scope:"col"},"起始日"),(0,o._)("th",{width:"12%",scope:"col"},"截止日"),(0,o._)("th",{width:"12%",scope:"col"},"啟用"),(0,o._)("th",{width:"22%",scope:"col"},"編輯")])],-1),u={class:"form-check form-switch float-none d-inline-block mb-0"},r=["onClick"],h=["onClick"],b=["onClick"],_=(0,o.Uk)(" 是否刪除 "),g={class:"text-danger"},v=(0,o.Uk)("優惠券"),f=(0,o._)("br",null,null,-1),w=(0,o.Uk)(" 提醒您，刪除後將無法恢復 ");function y(t,e,a,y,k,C){const M=(0,o.up)("pagination-nav"),$=(0,o.up)("CouponModal"),D=(0,o.up)("SuccessModal"),x=(0,o.up)("DeleteModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[n,(0,o._)("button",{class:"btn btn-sm btn-primary",type:"button",onClick:e[0]||(e[0]=e=>{k.modal.title="建立新優惠券",C.openCouponModal(k.modal.title,t.coupon)})}," 建立新優惠券 ")]),(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("div",c,[(0,o._)("table",m,[p,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.coupons,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",null,(0,l.zw)(e+1),1),(0,o._)("td",null,(0,l.zw)(t.title),1),(0,o._)("td",null,(0,l.zw)(t.code),1),(0,o._)("td",null,(0,l.zw)(t.percent),1),(0,o._)("td",null,(0,l.zw)(C.toDate(t.start_date/1e3)),1),(0,o._)("td",null,(0,l.zw)(C.toDate(t.due_date/1e3)),1),(0,o._)("td",null,[(0,o._)("div",u,[(0,o._)("button",{class:(0,l.C_)(["form-check-input",{checked:1==t.is_enabled}]),type:"button",onClick:e=>C.toggleEnabled(t)},null,10,r)])]),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-sm btn-primary me-5",type:"button",onClick:e=>{k.modal.title="編輯優惠券",C.openCouponModal(k.modal.title,t)}}," 編輯 ",8,h),(0,o._)("button",{class:"btn btn-sm btn-bright-gray",type:"button",onClick:e=>{k.modal.title="刪除優惠券",C.openCouponModal(k.modal.title,t)}}," 刪除 ",8,b)])])))),128))])])])])]),(0,o.Wm)(M,{pages:k.paginations,onGetDatas:C.getCoupons},null,8,["pages","onGetDatas"]),(0,o.Wm)($,{modal:k.modal.temp,type:k.modal.title,onEmitCouponData:C.updateCoupon},{title:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(k.modal.title),1)])),_:1},8,["modal","type","onEmitCouponData"]),(0,o.Wm)(D,null,{title:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(k.modal.title),1)])),default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(k.modal.content),1)])),_:1}),(0,o.Wm)(x,{modal:k.modal.temp,onEmitDelete:C.deleteCoupon},{title:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(k.modal.title),1)])),default:(0,o.w5)((()=>[_,(0,o._)("b",g,(0,l.zw)(k.modal.temp.title),1),v,f,w])),_:1},8,["modal","onEmitDelete"])],64)}var k=a(4983),C=a(9963);const M={class:"modal-dialog modal-lg modal-dialog-centered"},$={class:"modal-content"},D={class:"modal-body p-30"},x={class:"mb-20"},U={class:"row"},V={class:"col-md-4 mb-20"},z=(0,o._)("label",{for:"title",class:"mb-5"},"請輸入優惠券標題",-1),S={class:"col-md-5 mb-20"},j={class:"row align-items-end"},W={class:"col-8 pe-1"},E=(0,o._)("label",{for:"code",class:"mb-5"},"請輸入優惠碼",-1),Z={class:"col-4 ps-0"},I={class:"col-md-3 mb-20"},G=(0,o._)("label",{for:"percent",class:"mb-5"},"請輸入折扣 (%)",-1),H={class:"col-md-12 mb-20"},J={class:"row align-items-center"},N={class:"col"},P=(0,o._)("label",{for:"startDate",class:"visually-hidden"},"請選擇起始日",-1),T={class:"input-group"},Y=["value"],K=["onClick"],L=(0,o._)("span",{class:"material-icons-outlined d-block fs-6"},"calendar_today",-1),O=[L],Q=(0,o._)("div",{class:"col-auto"},"～",-1),A={class:"col"},B=(0,o._)("label",{for:"startDate",class:"visually-hidden"},"請選擇截止日",-1),F={class:"input-group"},R=["value"],X=["onClick"],q=(0,o._)("span",{class:"material-icons-outlined d-block fs-6"},"calendar_today",-1),tt=[q],et={class:"col-md-12 mb-20"},at={class:"form-check"},ot=(0,o._)("label",{class:"form-check-label",for:"checkEnable"}," 是否啟用 ",-1),lt={class:"d-flex align-items-center justify-content-end mt-20"},st=(0,o._)("button",{type:"button",class:"btn btn-bright-gray me-10","data-bs-dismiss":"modal"}," 取消 ",-1);function nt(t,e,a,l,s,n){const d=(0,o.up)("v-date-picker");return(0,o.wg)(),(0,o.iD)("form",{class:"modal fade needs-validation",id:"couponModal","data-bs-backdrop":"static","data-bs-keyboard":"false",novalidate:"",onSubmit:e[8]||(e[8]=(0,C.iM)((()=>{}),["prevent"]))},[(0,o._)("div",M,[(0,o._)("div",$,[(0,o._)("div",D,[(0,o._)("h2",x,[(0,o.WI)(t.$slots,"title")]),(0,o._)("div",U,[(0,o._)("div",V,[z,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入優惠券標題","onUpdate:modelValue":e[0]||(e[0]=t=>s.data.title=t)},null,512),[[C.nr,s.data.title]])]),(0,o._)("div",S,[(0,o._)("div",j,[(0,o._)("div",W,[E,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"code",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[1]||(e[1]=t=>s.data.code=t)},null,512),[[C.nr,s.data.code]])]),(0,o._)("div",Z,[(0,o._)("button",{type:"button",class:"btn btn-bright-gray",onClick:e[2]||(e[2]=t=>n.randomCoupon(6))}," 產生 ")])])]),(0,o._)("div",I,[G,(0,o.wy)((0,o._)("input",{type:"number",min:"0",max:"100",class:"form-control",id:"percent",placeholder:"請輸入折扣 (%)","onUpdate:modelValue":e[3]||(e[3]=t=>s.data.percent=t)},null,512),[[C.nr,s.data.percent]])]),(0,o._)("div",H,[(0,o._)("div",J,[(0,o._)("div",N,[P,(0,o.Wm)(d,{color:"indigo",class:"inline-block h-full",modelValue:s.data.start_date,"onUpdate:modelValue":e[4]||(e[4]=t=>s.data.start_date=t),"model-config":s.modelConfig},{default:(0,o.w5)((({inputValue:t,togglePopover:e})=>[(0,o._)("div",T,[(0,o._)("input",{class:"form-control",id:"start-date",value:t,placeholder:"請選擇起始日"},null,8,Y),(0,o._)("button",{class:"btn btn-sm btn-bright-gray",type:"button",onClick:t=>e()},O,8,K)])])),_:1},8,["modelValue","model-config"])]),Q,(0,o._)("div",A,[B,(0,o.Wm)(d,{color:"indigo",class:"inline-block h-full",modelValue:s.data.due_date,"onUpdate:modelValue":e[5]||(e[5]=t=>s.data.due_date=t),"model-config":s.modelConfig},{default:(0,o.w5)((({inputValue:t,togglePopover:e})=>[(0,o._)("div",F,[(0,o._)("input",{class:"form-control",id:"end-date",value:t,placeholder:"請選擇截止日"},null,8,R),(0,o._)("button",{class:"btn btn-sm btn-bright-gray",type:"button",onClick:t=>e()},tt,8,X)])])),_:1},8,["modelValue","model-config"])])])]),(0,o._)("div",et,[(0,o._)("div",at,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox",value:"is_enabled",id:"checkEnable","onUpdate:modelValue":e[6]||(e[6]=t=>s.data.is_enabled=t),"true-value":1,"false-value":0},null,512),[[C.e8,s.data.is_enabled,void 0,{number:!0}]]),ot])])]),(0,o._)("div",lt,[st,(0,o._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:e[7]||(e[7]=e=>t.$emit("emit-coupon-data",s.data))}," 儲存 ")])])])])],32)}var dt={data(){return{data:{},title:"",modelConfig:{type:"number"},today:new Date}},props:["modal","type"],emits:["emit-coupon-data"],methods:{randomCoupon(t){const e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","m","n","p","Q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],a=e.length;let o="";for(let l=0;l<t;l+=1){const t=Math.floor(Math.random()*a);o+=e[t]}this.data.code=o}},watch:{modal(){this.data=this.modal,this.title=this.type}}},it=a(3744);const ct=(0,it.Z)(dt,[["render",nt]]);var mt=ct,pt=a(3963),ut=a(5354),rt={data(){return{coupons:[],bsModal:null,paginations:{},modal:{title:"",temp:{},content:""}}},components:{CouponModal:mt,SuccessModal:pt.Z,DeleteModal:ut.Z},mounted(){this.$emitter.emit("page-loading",!0),this.getCoupons()},methods:{getCoupons(){const t="https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/coupons";this.$http.get(t).then((t=>{this.$emitter.emit("page-loading",!1),this.coupons=t.data.coupons,this.paginations=t.data.pagination})).catch((()=>{this.$emitter.emit("page-loading",!1)}))},updateCoupon(t){this.$emitter.emit("page-loading",!0);const e=this.modal.title;let a="",o="";"建立新優惠券"===e?(a="https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/coupon",o="post"):"編輯優惠券"===e&&(a=`https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/coupon/${t.id}`,o="put");const l={data:t};""!==l.data.is_enabled&&void 0!==l.data.is_enabled||(l.data.is_enabled=0),this.$http[o](a,l).then((t=>{"建立新優惠券"===e?this.modal.title="新增成功":"編輯優惠券"===e&&(this.modal.title="修改成功"),this.modal.content=t.data.message,this.modal.temp={}})).catch((t=>{"建立新優惠券"===e?this.modal.title="新增失敗":"編輯優惠券"===e&&(this.modal.title="修改失敗"),this.modal.content=t.response.data.message})).finally((()=>{this.getCoupons(),this.openSuccessModal()}))},deleteCoupon(t){this.$emitter.emit("page-loading",!0);const e=`https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/coupon/${t.id}`;this.$http.delete(e).then((t=>{this.modal.title="刪除成功",this.modal.content=t.data.message})).catch((t=>{this.modal.title="刪除失敗",this.modal.content=t.response.data.message})).finally((()=>{this.getCoupons(),this.clearTemp(),this.openSuccessModal()}))},toggleEnabled(t){const e=`https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/coupon/${t.id}`;this.$emitter.emit("page-loading",!0),this.modal.temp=t;const a={data:this.modal.temp};0===this.modal.temp.is_enabled||void 0===this.modal.temp.is_enabled?this.modal.temp.is_enabled=1:1===this.modal.temp.is_enabled&&(this.modal.temp.is_enabled=0),this.$http.put(e,a).then((t=>{this.modal.title="修改成功",this.modal.content=t.data.message,this.getCoupons()})).catch((t=>{this.modal.title="修改失敗",this.modal.content=t.response.data.message})).finally((()=>{this.openSuccessModal(this.modal.title,this.modal.content)}))},openCouponModal(t,e){this.$emitter.emit("page-loading",!1),"編輯優惠券"===t?(this.bsModal=(0,k.$7)("couponModal"),this.modal.temp=JSON.parse(JSON.stringify(e))):"刪除優惠券"===t?(this.bsModal=(0,k.$7)("deleteModal"),this.modal.temp=e):"建立新優惠券"===t&&(this.bsModal=(0,k.$7)("couponModal"),this.modal.temp={}),this.bsModal.show()},openSuccessModal(){this.$emitter.emit("page-loading",!1),this.bsModal=(0,k.$7)("SuccessModal"),this.bsModal.show()},clearTemp(){this.modal.temp={}},toDate(t){const e=new Date(1e3*t);return e.toLocaleDateString()}}};const ht=(0,it.Z)(rt,[["render",y]]);var bt=ht}}]);
//# sourceMappingURL=564.6dd6404b.js.map