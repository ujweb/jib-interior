"use strict";(self["webpackChunkjib_interior"]=self["webpackChunkjib_interior"]||[]).push([[56],{1347:function(t,e,a){a.d(e,{Z:function(){return _}});var l=a(6252);const s={class:"modal fade",id:"DangerModal","data-bs-keyboard":"false"},d={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},i={class:"modal-content"},o={class:"modal-body p-30"},n={class:"mb-2"},c=(0,l._)("div",{class:"d-flex align-items-center justify-content-end mt-2"},[(0,l._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," 我知道了 ")],-1);function r(t,e){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",d,[(0,l._)("div",i,[(0,l._)("div",o,[(0,l._)("h2",n,[(0,l.WI)(t.$slots,"title")]),(0,l._)("p",null,[(0,l.WI)(t.$slots,"default")]),c])])])])}var m=a(3744);const u={},p=(0,m.Z)(u,[["render",r]]);var _=p},5354:function(t,e,a){a.d(e,{Z:function(){return h}});var l=a(6252);const s={class:"modal fade",id:"deleteModal","data-bs-keyboard":"false"},d={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},i={class:"modal-content"},o={class:"modal-body p-30"},n={class:"mb-2"},c={class:"d-flex align-items-center justify-content-end mt-2"},r=(0,l._)("button",{type:"button",class:"btn btn-light me-10","data-bs-dismiss":"modal"}," 取消 ",-1);function m(t,e,a,m,u,p){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",d,[(0,l._)("div",i,[(0,l._)("div",o,[(0,l._)("h2",n,[(0,l.WI)(t.$slots,"title")]),(0,l._)("p",null,[(0,l.WI)(t.$slots,"default")]),(0,l._)("div",c,[r,(0,l._)("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal",onClick:e[0]||(e[0]=e=>t.$emit("emit-delete",u.data))}," 確認 ")])])])])])}var u={props:["modal"],emits:["emit-delete"],data(){return{data:{}}},watch:{modal(){this.data=this.modal}}},p=a(3744);const _=(0,p.Z)(u,[["render",m]]);var h=_},2056:function(t,e,a){a.r(e),a.d(e,{default:function(){return te}});var l=a(6252),s=a(3577);const d={class:"d-flex align-items-center justify-content-between"},i=(0,l._)("h1",{class:"fs-2 mb-0"},"訂單管理",-1),o={class:"row"},n={class:"col"},c={class:"table-responsive py-20"},r={class:"table text-center align-middle"},m=(0,l._)("thead",{class:"table-light"},[(0,l._)("tr",null,[(0,l._)("th",{width:"6%",scope:"col"},"#"),(0,l._)("th",{width:"14%",scope:"col"},"收單時間"),(0,l._)("th",{width:"18%",scope:"col"},"訂單編號"),(0,l._)("th",{width:"14%",scope:"col"},"訂單金額"),(0,l._)("th",{width:"14%",scope:"col"},"訂單狀態"),(0,l._)("th",{width:"14%",scope:"col"},"付款時間"),(0,l._)("th",{width:"20%",scope:"col"},"編輯")])],-1),u={key:0,class:"text-success"},p={key:1,class:"text-danger"},_={key:0,class:"m-0"},h={class:"d-block text-secondary"},b={class:"d-block text-secondary"},g={key:1,class:"m-0"},w={class:"d-block text-secondary"},y={class:"d-block text-secondary"},f={key:2,class:"m-0"},k=["onClick"],v=["onClick"],D={key:0,class:"d-block"},x=(0,l.Uk)(" 是否刪除編號為 "),M={class:"text-danger"},z=(0,l.Uk)(" 的訂單？"),$=(0,l._)("br",null,null,-1),O={key:1,class:"d-block"},U=(0,l.Uk)(" 是否刪除"),j=(0,l._)("b",{class:"text-danger"},"全部",-1),S=(0,l.Uk)("訂單？"),C=(0,l._)("br",null,null,-1),N=[U,j,S,C],T=(0,l.Uk)(" 提醒您，刪除後將無法恢復 ");function W(t,e,a,U,j,S){const C=(0,l.up)("pagination-nav"),W=(0,l.up)("OrderModal"),I=(0,l.up)("SuccessModal"),Z=(0,l.up)("DangerModal"),E=(0,l.up)("DeleteModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",d,[i,(0,l._)("button",{class:"btn btn-sm btn-danger",type:"button",onClick:e[0]||(e[0]=t=>{j.modal.title="清除訂單",S.openOrderModal(j.modal.title,{})})}," 清除所有訂單 ")]),(0,l._)("div",o,[(0,l._)("div",n,[(0,l._)("div",c,[(0,l._)("table",r,[m,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(j.orders,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,s.zw)(e+1),1),(0,l._)("td",null,(0,s.zw)(S.toDate(t.create_at)),1),(0,l._)("td",null,[(0,l._)("small",null,(0,s.zw)(t.id),1)]),(0,l._)("td",null,(0,s.zw)(S.toNumber(t.total)),1),(0,l._)("td",null,[t.is_paid?((0,l.wg)(),(0,l.iD)("span",u,"已付款")):((0,l.wg)(),(0,l.iD)("span",p,"未付款"))]),(0,l._)("td",null,[t.is_paid&&S.checkDate(t.paid_date)>0?((0,l.wg)(),(0,l.iD)("p",_,[(0,l._)("small",h,(0,s.zw)(t.paid_date),1),(0,l._)("small",b,(0,s.zw)(t.paid_time),1)])):t.is_paid?((0,l.wg)(),(0,l.iD)("p",g,[(0,l._)("small",w,(0,s.zw)(S.toDate(t.paid_date)),1),(0,l._)("small",y,(0,s.zw)(S.toTime(t.paid_date)),1)])):((0,l.wg)(),(0,l.iD)("p",f,"-"))]),(0,l._)("td",null,[(0,l._)("button",{class:"btn btn-sm btn-primary me-5",type:"button",onClick:e=>{j.modal.title="訂單詳情",S.openOrderModal(j.modal.title,t)}}," 訂單詳情 ",8,k),(0,l._)("button",{class:"btn btn-sm btn-bright-gray",type:"button",onClick:e=>{j.modal.title="刪除訂單",S.openOrderModal(j.modal.title,t)}}," 刪除 ",8,v)])])))),128))])])])])]),(0,l.Wm)(C,{pages:j.paginations,onGetDatas:S.getOrder},null,8,["pages","onGetDatas"]),(0,l.Wm)(W,{modal:j.modal.temp,type:j.modal.title,onEmitOrderData:S.updatePaid},{title:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(j.modal.temp.id)+" "+(0,s.zw)(j.modal.title),1)])),_:1},8,["modal","type","onEmitOrderData"]),(0,l.Wm)(I,null,{title:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(j.modal.title),1)])),default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(j.modal.content),1)])),_:1}),(0,l.Wm)(Z,null,{title:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(j.modal.title),1)])),default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(j.modal.content),1)])),_:1}),(0,l.Wm)(E,{modal:j.modal.temp,onEmitDelete:S.deleteOrder},{title:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(j.modal.title),1)])),default:(0,l.w5)((()=>["刪除訂單"===j.modal.title?((0,l.wg)(),(0,l.iD)("span",D,[x,(0,l._)("b",M,(0,s.zw)(j.modal.temp.id),1),z,$])):((0,l.wg)(),(0,l.iD)("span",O,N)),T])),_:1},8,["modal","onEmitDelete"])],64)}var I=a(4983),Z=a(9963);const E=t=>((0,l.dD)("data-v-6f3d9ae7"),t=t(),(0,l.Cn)(),t),q={class:"modal fade needs-validation",id:"orderModal","data-bs-backdrop":"static","data-bs-keyboard":"false",novalidate:""},L={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"},H={class:"modal-content"},Y={class:"modal-body p-30"},G={class:"fs-3 mb-0"},J={class:"row"},K={class:"col-md-6"},P=E((()=>(0,l._)("h5",{class:"fs-2 mt-30 mb-0"},"訂購者資訊",-1))),Q={class:"table"},V={key:0},A=E((()=>(0,l._)("th",{style:{width:"100px"}},"姓名",-1))),B=E((()=>(0,l._)("th",null,"Email",-1))),F=E((()=>(0,l._)("th",null,"電話",-1))),R=E((()=>(0,l._)("th",null,"地址",-1))),X={key:0},tt=E((()=>(0,l._)("th",null,"留言",-1))),et=E((()=>(0,l._)("h5",{class:"fs-2 mt-30 mb-0"},"訂單細節",-1))),at={class:"table"},lt=E((()=>(0,l._)("th",{style:{width:"100px"}},"下單時間",-1))),st=E((()=>(0,l._)("th",null,"付款時間",-1))),dt={key:0,class:"text-success"},it={key:1,class:"text-muted"},ot=E((()=>(0,l._)("th",null,"付款狀態",-1))),nt={key:0,class:"text-success"},ct={key:1,class:"text-muted"},rt={class:"col-md-6"},mt=E((()=>(0,l._)("h5",{class:"fs-2 mt-30 mb-0"},"訂單內容",-1))),ut={class:"table"},pt={key:0},_t={style:{width:"120px"}},ht=["src","alt"],bt={class:"card-title my-0"},gt={class:"card-text my-0"},wt={class:"text-secondary"},yt={class:"d-flex align-items-center justify-content-end"},ft=E((()=>(0,l._)("span",{class:"pe-1"},"數量",-1))),kt={class:"d-flex justify-content-between"},vt={class:"my-5"},Dt=(0,l.Uk)(" 共 "),xt={class:"text-primary"},Mt=(0,l.Uk)(" 項 "),zt={class:"text-end"},$t={class:"my-5"},Ot=(0,l.Uk)(" 優惠碼： "),Ut={class:"fs-3 text-primary"},jt={class:"my-5"},St=(0,l.Uk)(" 優惠券折扣： "),Ct={class:"fs-3 text-primary"},Nt={class:"my-5"},Tt=(0,l.Uk)(" 總金額："),Wt={class:"fs-3 text-primary"},It={class:"d-flex align-items-center justify-content-end mt-20"},Zt={class:"d-flex justify-content-end"},Et={class:"form-check"},qt={class:"form-check-label",for:"flexCheckDefault"},Lt={key:0},Ht={key:1},Yt={class:"d-flex align-items-center justify-content-end mt-20"},Gt=E((()=>(0,l._)("button",{type:"button",class:"btn btn-bright-gray me-10","data-bs-dismiss":"modal"}," 取消 ",-1)));function Jt(t,e,a,d,i,o){return(0,l.wg)(),(0,l.iD)("form",q,[(0,l._)("div",L,[(0,l._)("div",H,[(0,l._)("div",Y,[(0,l._)("h2",G,[(0,l.WI)(t.$slots,"title",{},void 0,!0)]),(0,l._)("div",J,[(0,l._)("div",K,[P,(0,l._)("table",Q,[i.user?((0,l.wg)(),(0,l.iD)("tbody",V,[(0,l._)("tr",null,[A,(0,l._)("td",null,(0,s.zw)(i.user.name),1)]),(0,l._)("tr",null,[B,(0,l._)("td",null,(0,s.zw)(i.user.email),1)]),(0,l._)("tr",null,[F,(0,l._)("td",null,(0,s.zw)(i.user.tel),1)]),(0,l._)("tr",null,[R,(0,l._)("td",null,(0,s.zw)(i.user.address),1)]),i.data.message?((0,l.wg)(),(0,l.iD)("tr",X,[tt,(0,l._)("td",null,(0,s.zw)(i.data.message),1)])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)]),et,(0,l._)("table",at,[(0,l._)("tbody",null,[(0,l._)("tr",null,[lt,(0,l._)("td",null,(0,s.zw)(o.toDate(i.data.create_at)),1)]),(0,l._)("tr",null,[st,(0,l._)("td",null,[i.data.paid_at?((0,l.wg)(),(0,l.iD)("span",dt,(0,s.zw)(o.toDate(i.data.paid_at)),1)):((0,l.wg)(),(0,l.iD)("span",it,"-"))])]),(0,l._)("tr",null,[ot,(0,l._)("td",null,[i.data.is_paid?((0,l.wg)(),(0,l.iD)("span",nt,"已付款")):((0,l.wg)(),(0,l.iD)("span",ct,"尚未付款"))])])])])]),(0,l._)("div",rt,[mt,(0,l._)("table",ut,[i.user?((0,l.wg)(),(0,l.iD)("tbody",pt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.details,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",_t,[(0,l._)("img",{class:"img-fluid",src:t.product.imageUrl,alt:t.product.title},null,8,ht)]),(0,l._)("td",null,[(0,l._)("h5",bt,(0,s.zw)(t.product.title),1),(0,l._)("p",gt,[(0,l._)("small",wt," NT$ "+(0,s.zw)(o.toNumber(t.product.price)),1)])]),(0,l._)("td",null,[(0,l._)("div",yt,[ft,(0,l._)("span",null,[(0,l.Uk)((0,s.zw)(t.qty)+" ",1),(0,l._)("small",null,"/"+(0,s.zw)(t.product.unit),1)])])])])))),128))])):(0,l.kq)("",!0)]),(0,l._)("div",kt,[(0,l._)("div",vt,[Dt,(0,l._)("span",xt,(0,s.zw)(o.getTotalQty(i.details)),1),Mt]),(0,l._)("div",zt,[(0,l._)("div",$t,[Ot,(0,l._)("span",Ut,(0,s.zw)(Object.values(i.details)[0]?.coupon?.code),1)]),(0,l._)("div",jt,[St,(0,l._)("span",Ct,(0,s.zw)(o.toNumber(Object.values(i.details)[0]?.final_total-Object.values(i.details)[0]?.total)),1)]),(0,l._)("div",Nt,[Tt,(0,l._)("span",Wt,(0,s.zw)(o.toNumber(i.data.total)),1)])])])])]),(0,l._)("div",It,[(0,l._)("div",Zt,[(0,l._)("div",Et,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=t=>i.data.is_paid=t)},null,512),[[Z.e8,i.data.is_paid]]),(0,l._)("label",qt,[i.data.is_paid?((0,l.wg)(),(0,l.iD)("span",Lt,"已付款")):((0,l.wg)(),(0,l.iD)("span",Ht,"未付款"))])])])]),(0,l._)("div",Yt,[Gt,(0,l._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:e[1]||(e[1]=e=>t.$emit("emit-order-data",i.data))}," 更新付款狀態 ")])])])])])}var Kt={data(){return{data:{},user:{},details:[],title:null}},props:["modal","type"],emits:["emit-order-data"],methods:{toNumber(t){return Number.parseInt(t,10).toLocaleString()},toDate(t){const e=new Date(1e3*t);return e.toLocaleDateString()},getTotalQty(t){let e=0;return"undefined"!==typeof t&&Object.values(t).forEach((t=>{e+=t.qty})),e}},watch:{modal(){this.data=this.modal,this.user=this.modal.user,this.details=this.modal.products,this.title=this.type}}},Pt=a(3744);const Qt=(0,Pt.Z)(Kt,[["render",Jt],["__scopeId","data-v-6f3d9ae7"]]);var Vt=Qt,At=a(3963),Bt=a(1347),Ft=a(5354),Rt={data(){return{page:1,orders:[],paginations:{},bsModal:null,modal:{title:"",content:"",temp:{}}}},emits:["page-loading"],components:{OrderModal:Vt,SuccessModal:At.Z,DangerModal:Bt.Z,DeleteModal:Ft.Z},mounted(){this.$emitter.emit("page-loading",!0),this.getOrder()},methods:{getOrder(t=1){const e=`https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/orders?page=${t}`;this.$emitter.emit("page-loading",!0),this.$http.get(e).then((t=>{this.$emitter.emit("page-loading",!1),this.paginations=t.data.pagination,this.orders=t.data.orders})).catch((()=>{}))},updatePaid(t){this.$emitter.emit("page-loading",!0);const e=`https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/order/${t.id}`,a=new Date,l=Math.floor(Date.now()/1e3),s={is_paid:t.is_paid,paid_at:l,paid_date:this.toDate(l),paid_time:`${`0${a.getHours()}`.substr(-2)}:${`0${a.getMinutes()}`.substr(-2)}:${`0${a.getSeconds()}`.substr(-2)}`};let d={};this.$http.put(e,{data:s}).then((t=>{d={title:"更新成功",content:t.data.message}})).catch((t=>{d={title:"更新失敗",content:t.response.data.message}})).finally((()=>{this.$emitter.emit("page-loading",!1),this.getOrder(),this.clearTemp(),this.openSuccessModal(d)}))},deleteOrder(t){this.$emitter.emit("page-loading",!0);let e={},a="";"刪除訂單"===this.modal.title?a=`https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/order/${t.id}`:"清除訂單"===this.modal.title&&(a="https://vue3-course-api.hexschool.io/v2/api/ujhwang/admin/orders/all"),this.$http.delete(a).then((t=>{e={title:"刪除成功",content:t.data.message}})).catch((t=>{e={title:"刪除失敗",content:t.response.data.message}})).finally((()=>{this.$emitter.emit("page-loading",!1),this.getOrder(),this.clearTemp(),this.openSuccessModal(e)}))},openOrderModal(t,e){"訂單詳情"===t?(this.bsModal=(0,I.$7)("orderModal"),this.modal.temp=JSON.parse(JSON.stringify(e))):("刪除訂單"===t||"清除訂單"===t)&&(this.bsModal=(0,I.$7)("deleteModal"),this.modal.temp=e),this.bsModal.show()},openSuccessModal(t){this.modal.title=t.title,this.modal.content=t.content,this.bsModal=(0,I.$7)("SuccessModal"),this.bsModal.show()},openDangerModal(t){this.modal.title=t.title,this.modal.content=t.content,this.bsModal=(0,I.$7)("DangerModal"),this.bsModal.show()},clearTemp(){this.modal.temp={}},toNumber(t){return Number.parseInt(t,10).toLocaleString()},checkDate(t){return t.toString().indexOf("/")},toDate(t){const e=new Date(1e3*t);return e.toLocaleDateString()},toTime(t){const e=new Date(1e3*t);return e.toLocaleTimeString("it-IT")}}};const Xt=(0,Pt.Z)(Rt,[["render",W]]);var te=Xt}}]);
//# sourceMappingURL=56.f2aca6ac.js.map