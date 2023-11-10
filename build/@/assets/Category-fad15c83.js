import{x as C,j as e,r as o,S as O,y as l}from"./index-0375175f.js";import{t as H,u as w,d as _,P as $,e as q,M as G,g as J,h as K,i as Q,C as u}from"./Layout-781e84c8.js";import{u as V}from"./useFilter-ac1a38e5.js";import{B as W,C as X}from"./BulkActionDrawer-9f56701f.js";import{C as Y,a as Z}from"./CategoryTable-db3e8d0b.js";import{U as ee}from"./UploadManyTwo-93cc0725.js";import{T as le}from"./TableLoading-b4c38795.js";import{N as se}from"./NotFound-535e9595.js";import"./AdminServices-cf2ec72f.js";import"./iconBase-c373190d.js";import"./InputArea-bd055fd2.js";import"./dayjs.min-fd9685be.js";import"./xlsx-04f2268f.js";import"./exportFromJSON-59a1cb7c.js";const ae=({title:c,handleProcess:r,processOption:a})=>{const{t:i}=C();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mb-3",children:e.jsxs("div",{className:"flex flex-wrap items-center float-right",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:c}),e.jsx(H,{onChange:r,checked:a,className:"react-switch md:ml-0 ml-3",uncheckedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"left",alignItems:"center",height:"100%",fontSize:12,color:"white",paddingRight:50,paddingTop:1,marginLeft:-40,whiteSpace:"nowrap"},children:i("ParentsOnly")}),width:115,height:28,handleDiameter:26,offColor:"#0e9f6e",onColor:"#2F855A",checkedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:12,color:"white",paddingLeft:8,paddingTop:1},children:i("All")})})]})})})},pe=()=>{var f,b;const{toggleDrawer:c,lang:r}=o.useContext(O),{data:a,loading:i,error:m}=w(u.getAllCategory),{data:y}=w(u.getAllCategories);console.log("data",a);const{handleDeleteMany:T,allId:g,handleUpdateMany:N,serviceId:k}=_(),{t:s}=C(),{handleSubmitCategory:j,categoryRef:S,totalResults:v,resultsPerPage:A,dataTable:D,serviceData:n,handleChangePage:F,filename:I,isDisabled:P,handleSelectFile:B,handleUploadMultiple:M,handleRemoveSelectFile:R}=V((f=a[0])!=null&&f.children?(b=a[0])==null?void 0:b.children:a);console.log("serviceData==>",n);const[h,E]=o.useState(!1),[t,d]=o.useState([]),[x,U]=o.useState(!1),L=()=>{var p;E(!h),d((p=a[0])==null?void 0:p.children.map(z=>z._id)),h&&d([])};return e.jsxs(e.Fragment,{children:[e.jsx($,{children:s("Category")}),e.jsx(q,{ids:g,setIsCheck:d}),e.jsx(W,{ids:g,title:"Categories",lang:r,data:a,isCheck:t}),e.jsx(G,{children:e.jsx(Y,{id:k,data:a,lang:r})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(l.CardBody,{className:"",children:e.jsxs("form",{onSubmit:j,className:"py-3  grid gap-4 lg:gap-6 xl:gap-6  xl:flex",children:[e.jsx("div",{className:"flex justify-start w-1/2 xl:w-1/2 md:w-full",children:e.jsx(ee,{title:"Categories",exportData:y,filename:I,isDisabled:P,handleSelectFile:B,handleUploadMultiple:M,handleRemoveSelectFile:R})}),e.jsxs("div",{className:"lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0",children:[e.jsx("div",{className:"w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0",children:e.jsxs(l.Button,{disabled:t.length<1,onClick:()=>N(t),className:"w-full rounded-md h-12 text-gray-600 btn-gray",children:[e.jsx("span",{className:"mr-2",children:e.jsx(J,{})}),s("BulkAction")]})}),e.jsx("div",{className:"w-full md:w-32 lg:w-32 xl:w-32  mr-3 mb-3 lg:mb-0",children:e.jsxs(l.Button,{disabled:t.length<1,onClick:()=>T(t),className:"w-full rounded-md h-12 bg-red-500 disabled  btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(K,{})}),s("Delete")]})}),e.jsx("div",{className:"w-full md:w-48 lg:w-48 xl:w-48",children:e.jsxs(l.Button,{onClick:c,className:"rounded-md h-12 w-full",children:[e.jsx("span",{className:"mr-2",children:e.jsx(Q,{})}),s("AddCategory")]})})]})]})})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(l.CardBody,{children:e.jsx("form",{onSubmit:j,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(l.Input,{ref:S,type:"search",className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",placeholder:s("SearchCategory")})})})})}),e.jsx(ae,{title:" ",handleProcess:U,processOption:x,name:x}),i?e.jsx(le,{row:12,col:6,width:190,height:20}):m?e.jsx("span",{className:"text-center mx-auto text-red-500",children:m}):(n==null?void 0:n.length)!==0?e.jsxs(l.TableContainer,{className:"mb-8",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:e.jsx(X,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:L,isChecked:h})}),e.jsx(l.TableCell,{children:s("catIdTbl")}),e.jsx(l.TableCell,{children:s("catIconTbl")}),e.jsx(l.TableCell,{children:s("CatTbName")}),e.jsx(l.TableCell,{children:s("CatTbDescription")}),e.jsx(l.TableCell,{className:"text-center",children:s("catPublishedTbl")}),e.jsx(l.TableCell,{className:"text-right",children:s("catActionsTbl")})]})}),e.jsx(Z,{data:a,lang:r,isCheck:t,categories:D,setIsCheck:d,showChild:x})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:v,resultsPerPage:A,onChange:F,label:"Table navigation"})})]}):e.jsx(se,{title:"Sorry, There are no categories right now."})]})};export{pe as default};
