import{x as _,j as e,y as r,r as d,S as H}from"./index-88bd6ee5.js";import{T as Q,w as X,d as J,e as W,E as ee,s as ae,P as re,M as te}from"./Layout-349eb748.js";import{u as K,L as N,E as F,n as S,b as Y}from"./AdminServices-80d6ce31.js";import"./iconBase-841798fc.js";import"./InputArea-95872283.js";const le=({id:x,taxName:o,buttonType:s,handleSelectType:n,taxType:y,taxAmount:h,isSubmitting:T,UpdateTaxData:w,cancelUpdate:f,handleTaxAmount:P,handleTaxName:t})=>{const{t:C}=_(),{register:A,handleSubmit:I,setValue:B,clearErrors:D,formState:{errors:i}}=K();return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-3 h-full flex flex-col gap-6 dark:bg-gray-800 mb-5",children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:e.jsx(Q,{register:A,title:"Update Tax",description:" Please provide correct information !"})}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 ",children:[e.jsx(N,{label:"TAX NAME"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(r.Input,{...A("taxName",{required:"Tax Name is required!"}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white",name:"taxName",type:"text",defaultValue:o,placeholder:"Enter Tax Title.",onBlur:l=>t(l.target.value)}),e.jsx(F,{errorName:i.taxName})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(N,{label:"TYPE"}),e.jsx("div",{className:"col-span-8 sm:col-span-4 w-full flex gap-1 flex-wrap",children:s&&s.map((l,m)=>e.jsx("p",{onClick:()=>n(l),className:`py-3 px-4 rounded bg-gray-200 dark:bg-gray-700 dark:text-primaryOn dark:hover:bg-secondaryContainerOn w-48 text-xs text-center cursor-pointer ${y===l?"border-2 border-dashed border-green-500":""} `,children:l},m))})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(N,{label:"AMOUNT"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(r.Input,{...A("taxAmount",{required:"Amount is required!"}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white",name:"taxAmount",type:"number",defaultValue:h,placeholder:"Please Enter Amount.",onBlur:l=>P(l.target.value)}),e.jsx(F,{errorName:i.taxAmount})]})]}),e.jsx("div",{className:" z-10  w-full py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(N,{}),e.jsxs("div",{className:"col-span-8 sm:col-span-4 flex gap-1 justify-between w-full",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(r.Button,{onClick:()=>f(),className:"h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700",layout:"outline",children:"Cancel"})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow flex-row",children:T?e.jsxs(r.Button,{disabled:!0,type:"button",className:"w-full h-12",children:[e.jsx("img",{src:spinnerLoadingImage,alt:"Loading",width:20,height:10})," ",e.jsx("span",{className:"font-serif ml-2 font-light",children:"Processing"})]}):e.jsx(r.Button,{type:"submit",className:"w-full h-12",onClick:w,children:x?e.jsx("span",{children:C("UpdateBtn")}):e.jsx("span",{children:"Update"})})})]})]})})]})})},se=()=>{const{register:x,handleSubmit:o,setValue:s,clearErrors:n,formState:{errors:y}}=K(),{toggleDrawer:h,isDrawerOpen:T,currentPage:w,limitData:f,toggleModal:P,toggleBulkDrawer:t,taxEdit:C,setTaxEdit:A}=d.useContext(H),[I,B]=d.useState([]),D=["PERCENTAGE (%)","FLAT IN ₹"],[i,l]=d.useState(""),[m,u]=d.useState(""),[b,p]=d.useState("PERCENTAGE (%)"),[E,v]=d.useState(""),[U,R]=d.useState(""),L=a=>{p(a)},O=a=>{s("taxName",a.toLowerCase().replace(/[^A-Z0-9]+/gi,"-")),l(a.toLowerCase().replace(/[^A-Z0-9]+/gi,"-")),console.log("value",a)},V=a=>/^\d+$/.test(a),M=a=>{V(a)?(s("taxAmount",a.toLowerCase().replace(/[^A-Z0-9]+/gi,"-")),u(a.toLowerCase().replace(/[^A-Z0-9]+/gi,"-"))):S("Please enter valid amount")},Z=()=>{console.log("taxdata##=",{taxName:i,taxAmount:m,taxType:b});let a=0;i.trim().length==0&&(a=a+1,S("Please enter Tax Name.")),m.trim()||(a=a+1,S("please fill tax amount.")),a===0&&G()},G=()=>{let g={taxName:i,type:b==="PERCENTAGE (%)"?"percentage":"flatin",currencySymbol:b==="PERCENTAGE (%)"?"%":"₹",ammount:parseInt(m,10),id:E||""};X.postTax(g).then(j=>{console.log("taxResponse",j),(j==null?void 0:j.success)===!0?(Y(j.message),E&&h(),v(""),c(),l(""),u(""),s("taxAmount",""),s("taxName",""),p("PERCENTAGE (%)"),n("taxAmount"),n("taxName")):S(j.message)})},q=()=>{l(""),u(""),s("taxAmount",""),s("taxName",""),p("PERCENTAGE (%)"),n("taxAmount"),n("taxName")},k=a=>{h(),[...I].forEach((g,j)=>{g._id===a&&(console.log("item===>",g),console.log("idddddd",a),A(g),v(a),s("taxName",g.taxName),l(g.taxName),s("taxAmount",g.ammount),u(g.ammount),p(g.type==="percentage"?"PERCENTAGE (%)":"FLAT IN ₹"))})},$=()=>{l(""),u(""),s("taxAmount",""),s("taxName",""),p("PERCENTAGE (%)"),n("taxAmount"),n("taxName"),h(),q()},c=()=>{X.getTax({page:w,limit:f}).then(a=>{(a==null?void 0:a.success)===!0?(Y(a.message),B(a.taxDetails),R(a.Pagination)):S(a.message)})};return{taxName:i,setTaxName:l,register:x,handleSubmit:o,setValue:s,clearErrors:n,errors:y,taxAmount:m,buttonType:D,setTaxAmount:u,taxList:I,handleTaxName:O,handleTaxAmount:M,taxType:b,taxPage:U,handleSelectType:L,onSubmit:Z,handleCancel:q,handleUpdate:k,getTaxDetails:c,cancelUpdate:$,validation:G}},ne=({TaxList:x,isCheck:o,setIsCheck:s,currency:n,lang:y,handleUpdate:h,getTaxDetails:T})=>{const{title:w,serviceId:f,handleModalOpen:P}=J();return e.jsxs(e.Fragment,{children:[(o==null?void 0:o.length)<1&&e.jsx(W,{id:f,title:w,fetchData:T}),e.jsx(r.TableBody,{children:x==null?void 0:x.map((t,C)=>e.jsxs(r.TableRow,{children:[e.jsx(r.TableCell,{children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{children:e.jsx("h2",{className:"text-sm font-medium",children:t==null?void 0:t.taxName})})})}),e.jsx(r.TableCell,{children:e.jsx("span",{className:"text-sm",children:t.type==="percentage"?(t==null?void 0:t.ammount)+"%":"₹ "+(t==null?void 0:t.ammount)})}),e.jsx(r.TableCell,{children:e.jsx(ee,{id:t._id,Product:t,isCheck:o,handleUpdate:h,handleModalOpen:P,title:ae(t==null?void 0:t.title,y)})})]},C+1))})]})},xe=({id:x})=>{const{title:o,allId:s,serviceId:n,handleDeleteMany:y,handleUpdateMany:h}=J(),{t:T}=_(),{toggleDrawer:w,lang:f,currentPage:P,handleChangePage:t,searchText:C,category:A,sortedField:I,limitData:B}=d.useContext(H),{register:D,errors:i,taxName:l,taxAmount:m,isSubmitting:u,buttonType:b,taxType:p,taxList:E,taxPage:v,handleTaxName:U,handleTaxAmount:R,handleSelectType:L,onSubmit:O,handleCancel:V,getTaxDetails:M,handleUpdate:Z,cancelUpdate:G,validation:q}=se();d.useState(!1);const[k,$]=d.useState([]);return d.useEffect(()=>{M()},[]),e.jsxs(e.Fragment,{children:[e.jsx(re,{children:"Tax Details"}),e.jsx(te,{children:e.jsx(le,{id:n,taxName:l,buttonType:b,handleSelectType:L,taxType:p,taxAmount:m,isSubmitting:u,UpdateTaxData:q,cancelUpdate:G,handleTaxAmount:R,handleTaxName:U})}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(N,{label:"TAX NAME"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(r.Input,{...D("taxName",{required:"Tax Name is required!"}),className:"border h-12 text-sm focus:outline-none block w-full   dark:bg-gray-700 border-transparent ",name:"taxName",type:"text",defaultValue:l,placeholder:"Enter Tax Title.",onBlur:c=>U(c.target.value)}),e.jsx(F,{errorName:i.taxName})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(N,{label:"TYPE"}),e.jsx("div",{className:"col-span-8 sm:col-span-4 w-full flex gap-1 flex-wrap",children:b&&b.map((c,a)=>e.jsx("p",{onClick:()=>L(c),className:`py-3 px-4 rounded bg-gray-200 dark:bg-gray-800 dark:text-primaryOn w-48 text-xs text-center cursor-pointer ${p===c?"border-2 border-dashed border-green-500":""} `,children:c},a))})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(N,{label:"AMOUNT"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(r.Input,{...D("taxAmount",{required:"Amount is required!"}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-gray-700 border-transparent",name:"taxAmount",type:"number",defaultValue:m,placeholder:`Please Enter Amount ${p==="PERCENTAGE (%)"?'"%"':'"₹"'}`,onBlur:c=>R(c.target.value)}),e.jsx(F,{errorName:i.taxAmount})]})]}),e.jsx("div",{className:" z-10  w-full py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(N,{}),e.jsxs("div",{className:"col-span-8 sm:col-span-4 flex gap-1 justify-between w-full",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(r.Button,{onClick:()=>V(),className:"h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700",layout:"outline",children:"Cancel"})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow flex-row",children:u?e.jsxs(r.Button,{disabled:!0,type:"button",className:"w-full h-12",children:[e.jsx("img",{src:spinnerLoadingImage,alt:"Loading",width:20,height:10})," ",e.jsx("span",{className:"font-serif ml-2 font-light",children:"Processing"})]}):e.jsx(r.Button,{type:"submit",className:"w-full h-12",onClick:O,children:x?e.jsxs("span",{children:[T("UpdateBtn")," ",o]}):e.jsxs("span",{children:["ADD ",o]})})})]})]})}),E.length>0&&e.jsxs(r.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(r.Table,{children:[e.jsx(r.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(r.TableCell,{children:"Tax Name"}),e.jsx(r.TableCell,{children:"Amount"}),e.jsx(r.TableCell,{children:e.jsx("button",{disabled:(k==null?void 0:k.length)>0,className:"p-2 w-full  flex gap-0 items-center justify-end text-base cursor-pointer dark:text-gray-400",children:"Edit/Delete"})})]})}),e.jsx(ne,{lang:f,isCheck:k,TaxList:E,setIsCheck:$,handleUpdate:Z,getTaxDetails:M})]}),e.jsx(r.TableFooter,{children:e.jsx(r.Pagination,{totalResults:v==null?void 0:v.TotalPages,resultsPerPage:B,onChange:t,label:"Product Page Navigation"})})]})]})};export{xe as default};