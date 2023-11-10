import{r as j,S as Z,W as ae,j as e,A as x,y as a,x as le}from"./index-88bd6ee5.js";import{R as F,k as te,t as re,T as H,l as ie,U as ne,V as z,D as de,d as J,u as K,q as ce,e as Q,M as X,s as Y,E as oe,P as me,g as xe,h as ge,i as ue}from"./Layout-349eb748.js";import{u as he}from"./useFilter-22b8eaa7.js";import{a as pe,C as ee,S as je,B as be}from"./BulkActionDrawer-9ef1dd7a.js";import{u as fe,n as $,b as q,L as A,E as k}from"./AdminServices-80d6ce31.js";import{I as G}from"./InputArea-95872283.js";import{d as O}from"./dayjs.min-ebcc177c.js";import{T as Te}from"./TableLoading-fbead3b4.js";import{s as W}from"./dateFormate-a75b60f5.js";import{N as ye}from"./NotFound-1ce94f42.js";import{U as Ce}from"./UploadManyTwo-09a98942.js";import"./iconBase-841798fc.js";import"./xlsx-04f2268f.js";import"./exportFromJSON-59a1cb7c.js";const we=o=>{const{isDrawerOpen:t,closeDrawer:n,setIsUpdate:p,lang:r}=j.useContext(Z),[f,C]=j.useState(""),[m,b]=j.useState(r),[T,l]=j.useState({}),[v,S]=j.useState(!1),[s,u]=j.useState(!1),[y,h]=j.useState(!1),P=ae(d=>d.setting),{settingItem:I}=P,D=I.find(d=>d.name==="globalSetting"),U=(D==null?void 0:D.default_currency)||"₹",{register:_,handleSubmit:M,setValue:c,clearErrors:w,formState:{errors:V}}=fe(),g=async d=>{var E,B;try{h(!0);const N=await te(d.title,m),i={title:d.title,couponCode:d.couponCode,endTime:d.endTime,minimumAmount:d.minimumAmount,logo:f,startTime:"",status:v?"show":"hide",discountType:{type:s?"percentage":"fixed",value:d.discountPercentage},productType:d.productType};if(o){const R=await F.updateCoupon(o,i);p(!0),h(!1),q(R.message),n()}else{const R=await F.addCoupon(i);p(!0),h(!1),q(R.message),n()}}catch(N){$(N?(B=(E=N==null?void 0:N.response)==null?void 0:E.data)==null?void 0:B.message:N.message),h(!1),n()}},L=d=>{b(d),Object.keys(T).length>0&&c("title",T.title[d||"en"])};return j.useEffect(()=>{if(!t){l({}),c("title"),c("productType"),c("couponCode"),c("endTime"),c("discountPercentage"),c("minimumAmount"),C(""),w("title"),w("productType"),w("couponCode"),w("endTime"),w("discountPercentage"),w("minimumAmount"),b(r),c("language",m);return}o&&(async()=>{var d,E,B,N;try{const i=await F.getCouponById(o);i&&(l(i),c("title",i.title[m||"en"]),c("productType",i.productType),c("couponCode",i.couponCode),c("endTime",O(i.endTime).format("YYYY-MM-DD HH:mm")),c("discountPercentage",(d=i.discountType)==null?void 0:d.value),c("minimumAmount",i.minimumAmount),S(i.status==="show"),u(((E=i.discountType)==null?void 0:E.type)==="percentage"),C(i.logo))}catch(i){$(i?(N=(B=i==null?void 0:i.response)==null?void 0:B.data)==null?void 0:N.message:i.message)}})()},[o,c,t,w,m,r]),{register:_,handleSubmit:M,onSubmit:g,errors:V,setImageUrl:C,imageUrl:f,published:v,setPublished:S,currency:U,discountType:s,isSubmitting:y,setDiscountType:u,handleSelectLanguage:L}},Ne=({title:o,handleProcess:t,processOption:n,product:p,handleIsCombination:r})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:`${p?"mb-3 flex flex-wrap justify-end items-center mr-8":"mb-3"}`,children:e.jsxs("div",{className:"flex flex-wrap items-center",children:[p?e.jsx("label",{className:"block text-base font-normal text-orange-500 dark:text-orange-400 mx-4",children:"Does this product have variants?"}):e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:o}),e.jsx(re,{onChange:p?r:t,checked:n,className:"react-switch",uncheckedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:14,color:"white",paddingRight:45,paddingTop:1},children:"Fixed"}),width:125,height:33,handleDiameter:28,offColor:"#E53E3E",onColor:"#2F855A",checkedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:14,color:"white",paddingLeft:50,paddingTop:1},children:"Percentage"})})]})})}),se=({id:o})=>{const{register:t,handleSubmit:n,onSubmit:p,errors:r,setImageUrl:f,imageUrl:C,published:m,setPublished:b,currency:T,discountType:l,setDiscountType:v,isSubmitting:S,handleSelectLanguage:s}=we(o);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative  p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ",children:o?e.jsx(H,{register:t,handleSelectLanguage:s,title:x("UpdateCoupon"),description:x("UpdateCouponDescription")}):e.jsx(H,{register:t,handleSelectLanguage:s,title:x("AddCoupon"),description:x("AddCouponDescription")})}),e.jsx(ie.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:n(p),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(A,{label:x("CouponBannerImage")}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(ne,{imageUrl:C,setImageUrl:f,folder:"coupon"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(A,{label:x("CampaignName")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(G,{register:t,label:"Coupon title",name:"title",type:"text",placeholder:x("CampaignName")}),e.jsx(k,{errorName:r.title})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(A,{label:x("CampaignCode")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(G,{register:t,label:"Coupon Code",name:"couponCode",type:"text",placeholder:x("CampaignCode")}),e.jsx(k,{errorName:r.couponCode})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(A,{label:x("CouponValidityTime")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(a.Input,{...t("endTime",{required:"Coupon Validation End Time"}),label:"Coupon Validation End Time",name:"endTime",type:"datetime-local",placeholder:x("CouponValidityTime"),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"}),e.jsx(k,{errorName:r.endTime})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(A,{label:x("DiscountType")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Ne,{handleProcess:v,processOption:l}),e.jsx(k,{errorName:r.discountType})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(A,{label:x("Discount")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(z,{product:!0,register:t,maxValue:l?99:1e3,minValue:1,label:"Discount",name:"discountPercentage",type:"number",placeholder:l?"Percentage":"Fixed Amount",currency:l?"%":T}),e.jsx(k,{errorName:r.discountPercentage})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(A,{label:x("MinimumAmount")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(z,{product:!0,register:t,maxValue:2e5,minValue:100,label:"Minimum Amount",name:"minimumAmount",type:"number",placeholder:x("MinimumAmountPlasholder"),currency:T}),e.jsx(k,{errorName:r.minimumAmount})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(A,{label:x("Published")}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(pe,{handleProcess:b,processOption:m}),e.jsx(k,{errorName:r.productType})]})]})]}),e.jsx(de,{id:o,title:"Coupon",isSubmitting:S})]})})]})},ve=({lang:o,isCheck:t,coupons:n,setIsCheck:p})=>{const[r,f]=j.useState([]),{title:C,serviceId:m,handleModalOpen:b,handleUpdate:T}=J(),{data:l}=K(ce.getGlobalSetting),v=s=>{const{id:u,checked:y}=s.target;p([...t,u]),y||p(t.filter(h=>h!==u))},S=(l==null?void 0:l.default_currency)||"₹";return j.useEffect(()=>{const s=n==null?void 0:n.map(u=>{const y=new Date(u==null?void 0:u.updatedAt).toLocaleString("en-US",{timeZone:l==null?void 0:l.default_time_zone});return{...u,updatedDate:y}});f(s)},[n,l==null?void 0:l.default_time_zone]),e.jsxs(e.Fragment,{children:[t.length<1&&e.jsx(Q,{id:m,title:C}),t.length<2&&e.jsx(X,{children:e.jsx(se,{id:m})}),e.jsx(a.TableBody,{children:r==null?void 0:r.map((s,u)=>{var y,h,P,I,D;return e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:e.jsx(ee,{type:"checkbox",name:(y=s==null?void 0:s.title)==null?void 0:y.en,id:s._id,handleClick:v,isChecked:t==null?void 0:t.includes(s._id)})}),e.jsxs(a.TableCell,{children:[e.jsxs("div",{className:"flex items-center",children:[s!=null&&s.logo?e.jsx(a.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:s==null?void 0:s.logo,alt:"product"}):e.jsx(a.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm",children:Y(s==null?void 0:s.title,o)})," "]})]})," "]}),e.jsxs(a.TableCell,{children:[" ",e.jsxs("span",{className:"text-sm",children:[" ",s.couponCode]})," "]}),(h=s==null?void 0:s.discountType)!=null&&h.type?e.jsxs(a.TableCell,{children:[" ",e.jsxs("span",{className:"text-sm font-semibold",children:[" ",((P=s==null?void 0:s.discountType)==null?void 0:P.type)==="percentage"?`${(I=s==null?void 0:s.discountType)==null?void 0:I.value}%`:`${S}${(D=s==null?void 0:s.discountType)==null?void 0:D.value}`]})," "]}):e.jsxs(a.TableCell,{children:[" ",e.jsx("span",{className:"text-sm font-semibold",children:" "})," "]}),e.jsx(a.TableCell,{className:"text-center",children:e.jsx(je,{id:s._id,status:s.status})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm",children:W(s.startTime,l==null?void 0:l.default_date_format)})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm",children:W(s.endTime,l==null?void 0:l.default_date_format)})}),e.jsx(a.TableCell,{className:"align-middle ",children:O().isAfter(O(s.endTime))?e.jsx(a.Badge,{type:"danger",children:"Expired"}):e.jsx(a.Badge,{type:"success",children:"Active"})}),e.jsx(a.TableCell,{children:e.jsx(oe,{id:s==null?void 0:s._id,isCheck:t,handleUpdate:T,handleModalOpen:b,title:Y(s==null?void 0:s.title,o)})})]},u+1)})})]})},Re=()=>{const{toggleDrawer:o,lang:t}=j.useContext(Z),{data:n,loading:p,error:r}=K(F.getAllCoupons),[f,C]=j.useState(!1),[m,b]=j.useState([]),{allId:T,serviceId:l,handleDeleteMany:v,handleUpdateMany:S}=J(),{handleSubmitCoupon:s,couponRef:u,dataTable:y,serviceData:h,totalResults:P,resultsPerPage:I,handleChangePage:D,handleSelectFile:U,filename:_,isDisabled:M,handleUploadMultiple:c,handleRemoveSelectFile:w}=he(n),V=()=>{C(!f),b(n==null?void 0:n.map(L=>L._id)),f&&b([])},{t:g}=le();return e.jsxs(e.Fragment,{children:[e.jsx(me,{children:g("CouponspageTitle")}),e.jsx(Q,{ids:T,setIsCheck:b,title:"Selected Coupon"}),e.jsx(be,{ids:T,title:"Coupons"}),e.jsx(X,{children:e.jsx(se,{id:l})}),e.jsx(a.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(a.CardBody,{children:e.jsxs("form",{onSubmit:s,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6  xl:flex",children:[e.jsx("div",{className:"flex justify-start xl:w-1/2  md:w-full",children:e.jsx(Ce,{title:"Coupon",exportData:n,filename:_,isDisabled:M,handleSelectFile:U,handleUploadMultiple:c,handleRemoveSelectFile:w})}),e.jsxs("div",{className:"lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0",children:[e.jsx("div",{className:"w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0",children:e.jsxs(a.Button,{disabled:m.length<1,onClick:()=>S(m),className:"w-full rounded-md h-12 btn-gray text-gray-600",children:[e.jsx("span",{className:"mr-2",children:e.jsx(xe,{})}),g("BulkAction")]})}),e.jsx("div",{className:"w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0",children:e.jsxs(a.Button,{disabled:m.length<1,onClick:()=>v(m),className:"w-full rounded-md h-12 bg-red-500 btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(ge,{})}),g("Delete")]})}),e.jsx("div",{className:"w-full md:w-48 lg:w-48 xl:w-48",children:e.jsxs(a.Button,{onClick:o,className:"w-full rounded-md h-12",children:[e.jsx("span",{className:"mr-2",children:e.jsx(ue,{})}),g("AddCouponsBtn")]})})]})]})})}),e.jsx(a.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(a.CardBody,{children:e.jsx("form",{onSubmit:s,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(a.Input,{ref:u,type:"search",className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",placeholder:g("SearchCoupon")})})})})}),p?e.jsx(Te,{row:12,col:8,width:140,height:20}):r?e.jsx("span",{className:"text-center mx-auto text-red-500",children:r}):(h==null?void 0:h.length)!==0?e.jsxs(a.TableContainer,{className:"mb-8",children:[e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(a.TableCell,{children:e.jsx(ee,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:V,isChecked:f})}),e.jsx(a.TableCell,{children:g("CoupTblCampaignsName")}),e.jsx(a.TableCell,{children:g("CoupTblCode")}),e.jsx(a.TableCell,{children:g("Discount")}),e.jsx(a.TableCell,{className:"text-center",children:g("catPublishedTbl")}),e.jsx(a.TableCell,{children:g("CoupTblStartDate")}),e.jsx(a.TableCell,{children:g("CoupTblEndDate")}),e.jsx(a.TableCell,{children:g("CoupTblStatus")}),e.jsx(a.TableCell,{className:"text-right",children:g("CoupTblActions")})]})}),e.jsx(ve,{lang:t,isCheck:m,coupons:y,setIsCheck:b})]}),e.jsx(a.TableFooter,{children:e.jsx(a.Pagination,{totalResults:P,resultsPerPage:I,onChange:D,label:"Table navigation"})})]}):e.jsx(ye,{title:"Sorry, There are no coupons right now."})]})};export{Re as default};
