import{t as R,r as l,S as U}from"./index-88bd6ee5.js";import{u as _,n as g,b as S}from"./AdminServices-80d6ce31.js";import{d as $,k as T,A as m}from"./Layout-349eb748.js";const K=r=>{const o=R(),{isDrawerOpen:x,closeDrawer:c,setIsUpdate:p,lang:y}=l.useContext(U),[u,d]=l.useState([]),[s,C]=l.useState(y),[w,I]=l.useState({}),[v,E]=l.useState(!1),[V,i]=l.useState(!1),{setServiceId:h}=$();let A=[];(async()=>{for(let t=0;t<u.length;t++){const a=await T(u[t],s);A=[...A,{name:{[s]:u[t],...a}}]}})();const{handleSubmit:L,register:j,setValue:n,clearErrors:b,formState:{errors:k}}=_(),B=async({title:t,name:a,option:e})=>{try{if(i(!0),!r&&u.length===0){g("Minimum one value is required for add attribute!");return}const f=await T(t,s),P=await T(a,s),O={title:{[s]:t,...f},name:{[s]:a,...P},variants:A,option:e,type:"attribute",lang:s};if(r){const D=await m.updateAttributes(r,O);p(!0),i(!1),S(D.message),c(),h()}else{const D=await m.addAttribute(O);p(!0),i(!1),S(D.message),c(),h()}}catch(f){g(f?f.response.data.message:f.message),c(),i(!1),h()}},q=async({name:t})=>{try{if(i(!0),r){const a=await m.updateChildAttributes({ids:o.pathname.split("/")[2],id:r},{name:{[s]:t},status:v?"show":"hide"});p(!0),i(!1),S(a.message),c()}else{const a=await m.addChildAttribute(o.pathname.split("/")[2],{name:{[s]:t},status:v?"show":"hide"});p(!0),i(!1),S(a.message),c()}}catch(a){g(a?a.response.data.message:a.message),c(),i(!1),h()}},F=t=>{C(t),Object.keys(w).length>0&&(n("title",w.title[t||"en"]),n("name",w.name[t||"en"]))},H=t=>{d([...u.filter((a,e)=>e!==t)])},M=t=>{t.preventDefault(),t.target.value!==""&&(d([...u,t.target.value]),t.target.value="")};return l.useEffect(()=>{if(!x){I({}),n("title"),n("name"),n("option"),b("title"),b("name"),b("option"),d([]),C(y),n("language",s);return}o.pathname==="/attributes"&&r?(async()=>{var t,a;try{const e=await m.getAttributeById(r);e&&(I(e),n("title",e.title[s||"en"]),n("name",e.name[s||"en"]),n("option",e.option))}catch(e){g(e?(a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message:e.message)}})():o.pathname===`/attributes/${o.pathname.split("/")[2]}`&&(async()=>{var t,a;try{const e=await m.getChildAttributeById({id:o.pathname.split("/")[2],ids:r});e&&(n("name",e.name[s||"en"]),E(e.status==="show"))}catch(e){g(e?(a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message:e.message)}})()},[b,r,x,n,o,s,y]),{handleSubmit:L,onSubmits:q,onSubmit:B,register:j,errors:k,variants:u,setVariants:d,addVariant:M,removeVariant:H,published:v,setPublished:E,isSubmitting:V,handleSelectLanguage:F}};export{K as u};
