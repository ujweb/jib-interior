"use strict";(self["webpackChunkjib_interior"]=self["webpackChunkjib_interior"]||[]).push([[783],{4783:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var r=s(6252),n=s(9963),o=s(3577);const a=e=>((0,r.dD)("data-v-1dd5a82c"),e=e(),(0,r.Cn)(),e),i={class:"container-fluid h-100"},l={class:"row h-100"},d={class:"col-md-6 bg-blur d-flex align-items-center justify-content-center text-light"},c=a((()=>(0,r._)("h1",{class:"my-0"},"歡迎回來",-1))),u=a((()=>(0,r._)("p",{class:"mt-0 mb-5"},"登入繼續使用",-1))),p={class:"my-20"},m={class:"d-block",for:"inputMail"},h={class:"my-20"},b={class:"d-block",for:"inputPassword"},f={class:"fs-8 lh-sm my-0"},g=a((()=>(0,r._)("button",{class:"btn btn-lg btn-primary w-100 mt-20 fs-3",type:"submit"}," 登入 ",-1))),w=(0,r.Uk)(" 返回前台 ");function _(e,t,s,a,_,k){const v=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",l,[(0,r._)("div",d,[(0,r._)("form",{onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>k.login&&k.login(...e)),["prevent"]))},[c,u,(0,r._)("div",p,[(0,r._)("label",m,[(0,r.wy)((0,r._)("input",{type:"email",class:"form-control form-control-lg fs-4 text-light bg-transparent border-white",id:"inputMail",placeholder:"請輸入登入 Email","onUpdate:modelValue":t[0]||(t[0]=e=>_.user.username=e),required:""},null,512),[[n.nr,_.user.username]])])]),(0,r._)("div",h,[(0,r._)("label",b,[(0,r.wy)((0,r._)("input",{type:"password",class:"form-control form-control-lg fs-4 text-light bg-transparent border-white",id:"inputPassword",placeholder:"請輸入密碼","onUpdate:modelValue":t[1]||(t[1]=e=>_.user.password=e),required:""},null,512),[[n.nr,_.user.password]])])]),(0,r._)("p",f,(0,o.zw)(_.error),1),g,(0,r.Wm)(v,{class:"d-block link-light mt-20 text-center text-decoration-none",to:"/"},{default:(0,r.w5)((()=>[w])),_:1})],32)])])])}var k={data(){return{error:"",user:{username:"",password:""}}},mounted(){this.$emitter.emit("page-loading",!1)},methods:{login(){const e="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(e,this.user).then((e=>{const{token:t,expired:s}=e.data;document.cookie=`signinToken=${t}; expires=${new Date(s)}`,this.$router.push("/admin/products")})).catch((e=>{this.user.username="",this.user.password="",this.error=e.response.data.error.message}))}}},v=s(3744);const y=(0,v.Z)(k,[["render",_],["__scopeId","data-v-1dd5a82c"]]);var x=y}}]);
//# sourceMappingURL=783.3b32f8ca.js.map