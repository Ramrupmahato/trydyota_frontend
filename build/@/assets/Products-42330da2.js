import{r as S,S as H,j as e,y as l,A as E,x as L}from"./index-88bd6ee5.js";import{m as Y,n as J,o as Z,d as q,e as Q,M as G,p as z,E as $,s as K,u as R,C as ee,P as se,g as le,h as ae,i as te,q as ie}from"./Layout-349eb748.js";import{U as ne}from"./UploadManyTwo-09a98942.js";import{N as re}from"./NotFound-1ce94f42.js";import{C as W,S as oe,B as de}from"./BulkActionDrawer-9ef1dd7a.js";import{r as ce,u as me}from"./xlsx-04f2268f.js";import{n as I,b as V}from"./AdminServices-80d6ce31.js";import{T as ge}from"./TableLoading-fbead3b4.js";import"./iconBase-841798fc.js";import"./InputArea-95872283.js";import"./exportFromJSON-59a1cb7c.js";const xe={type:"object",properties:{categories:{type:"array"},image:{type:"array"},tag:{type:"array"},variants:{type:"array"},show:{type:"array"},status:{type:"string"},prices:{type:"object"},isCombination:{type:"boolean"},title:{type:"object"},productId:{type:"string"},slug:{type:"string"},category:{type:"object"},stock:{type:"number"},description:{type:"object"}},required:["categories","category","prices","title"]},he=h=>{const c=new Y({allErrors:!0}),{setLoading:x,setIsUpdate:b}=S.useContext(H),[g]=S.useState([]),[t,f]=S.useState([]),[C,p]=S.useState(""),[F,s]=S.useState(!1),w=h;return console.log("selectedFile=>>",t),{data:h,filename:C,isDisabled:F,handleSelectFile:async m=>{var P;m.preventDefault();const a=new FileReader,n=(P=m.target)==null?void 0:P.files[0];if(n&&n.type==="application/json")p(n==null?void 0:n.name),s(!0),a.readAsText(n,"UTF-8BOM"),a.onload=r=>{const j=JSON.parse(r.target.result).map(o=>({categories:o.categories,image:o.image,barcode:o.barcode,tag:o.tag,variants:o.variants,status:o.status,prices:o.prices,isCombination:o.isCombination,title:o.title,productId:o.productId,slug:o.slug,sku:o.sku,category:o.category,stock:o.stock,description:o.description}));f(j)};else if(n&&n.type==="text/csv")p(n==null?void 0:n.name),s(!0),a.onload=async r=>{const D=r.target.result,j=await Z().fromString(D);console.log("json",j);const o=j.map(i=>{var u,d,U;let y=[],v=(u=i.image)==null?void 0:u.split(",");for(let k=0;k<v.length;k++){let M={medialink:v[k],defaultOrNot:k==0&&!0};y.push(M)}return{barcode:"",title:i.title,description:i.description,slug:i.slug,categories:(d=i.categories)==null?void 0:d.split(","),category:i.category,image:y,stock:i.stock,tax:[i.tax],warrantyPeriods:{duration:i.warranty,unit:"year"},quantity:parseInt(i.MOQ,10),sales:0,tag:(U=i.tag)==null?void 0:U.split(","),prices:{price:i.prices,salePrice:i.sale_price,discount:i.prices-i.sale_price},variants:[],isCombination:!1,status:i.status,userManual:[{medialink:""}],technicalSpecification:[{medialink:""}],testCertification:[{medialink:""}]}});f(o)},a.readAsText(n);else{p(n==null?void 0:n.name),s(!0);const r=!!a.readAsBinaryString;a.onload=function(D){const j=D.target.result,o=ce(j,{type:r?"binary":"array",bookVBA:!0}),i=o.SheetNames[0],y=o.Sheets[i],u=me.sheet_to_json(y).map(d=>({categories:JSON.parse(d.categories),image:JSON.parse(d.image),barcode:d.barcode,tag:JSON.parse(d.tag),variants:JSON.parse(d.variants),status:d.status,prices:JSON.parse(d.prices),isCombination:JSON.parse(d.isCombination),title:JSON.parse(d.title),productId:d.productId,slug:d.slug,sku:d.sku,category:JSON.parse(d.category),stock:JSON.parse(d.stock),description:JSON.parse(d.description)}));f(u)},r?a.readAsBinaryString(n):a.readAsArrayBuffer(n)}},serviceData:w,handleOnDrop:m=>{for(let a=0;a<m.length;a++)g.push(m[a].data)},handleUploadProducts:()=>{g.length<1?I("Please upload/select csv file first!"):J.addAllProducts(g).then(m=>{V(m.message)}).catch(m=>I(m.message))},handleRemoveSelectFile:m=>{p(""),f([]),setTimeout(()=>s(!1),1e3)},handleUploadMultiple:m=>{if(console.log("selectedFile",t),t.length>0){console.log("validationdatayty"),x(!0);let a=t.map(r=>c.validate(xe,r));const n=r=>r===!0,P=a.every(n);console.log("validationdata",P),console.log(t),J.addAllProducts(t).then(r=>{(r==null?void 0:r.success)===!0?(b(!0),x(!1),V(r.message)):I(r.message)}).catch(r=>{x(!1),I(r.message)})}else x(!1),I("Please select a valid json, csv & xls file first!")}}},je=({products:h,isCheck:c,setIsCheck:x,currency:b,lang:g})=>{const{title:t,serviceId:f,handleModalOpen:C,handleUpdate:p}=q(),F=s=>{const{id:w,checked:N}=s.target;x([...c,w]),N||x(c.filter(T=>T!==w))};return e.jsxs(e.Fragment,{children:[(c==null?void 0:c.length)<1&&e.jsx(Q,{id:f,title:t}),(c==null?void 0:c.length)<2&&e.jsx(G,{children:e.jsx(z,{currency:b,id:f})}),e.jsx(l.TableBody,{children:h==null?void 0:h.map((s,w)=>{var N,T,A,B,O,m,a,n;return e.jsxs(l.TableRow,{children:[e.jsx(l.TableCell,{children:e.jsx(W,{type:"checkbox",name:(N=s==null?void 0:s.title)==null?void 0:N.en,id:s._id,handleClick:F,isChecked:c==null?void 0:c.includes(s._id)})}),e.jsx(l.TableCell,{children:e.jsxs("div",{className:"flex items-center",children:[s!=null&&s.image&&((T=s==null?void 0:s.image[0])!=null&&T.medialink)?e.jsx(l.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:s==null?void 0:s.image[0].medialink,alt:"product"}):e.jsx(l.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"}),e.jsx("div",{children:e.jsx("h2",{className:"text-sm font-medium",children:s==null?void 0:s.title})})]})}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm",children:(A=s==null?void 0:s.category)==null?void 0:A.name})}),e.jsx(l.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[b,s==null?void 0:s.salePrice,s!=null&&s.isCombination?(B=s==null?void 0:s.variants[0])==null?void 0:B.price:(O=s==null?void 0:s.prices)==null?void 0:O.price]})}),e.jsx(l.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[b,s==null?void 0:s.salePrice,s!=null&&s.isCombination?(m=s==null?void 0:s.variants[0])==null?void 0:m.salePrice:(a=s==null?void 0:s.prices)==null?void 0:a.salePrice]})}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm",children:s.stock})}),e.jsx(l.TableCell,{children:s.stock>0?e.jsx(l.Badge,{type:"success",children:E("Selling")}):e.jsx(l.Badge,{type:"danger",children:E("SoldOut")})}),e.jsx(l.TableCell,{children:s==null?void 0:s.minimumOrderOfQuantity})," ",e.jsx(l.TableCell,{children:(n=s==null?void 0:s.warrantyPeriods)==null?void 0:n.duration}),e.jsx(l.TableCell,{className:"text-center",children:e.jsx(oe,{id:s._id,status:s.status})}),e.jsx(l.TableCell,{children:e.jsx($,{id:s._id,product:s,isCheck:c,handleUpdate:p,handleModalOpen:C,title:K(s==null?void 0:s.title,g)})})]},w+1)})})]})},be=({setCategory:h,lang:c})=>{const{data:x}=R(ee.getAllCategories),{t:b}=L();return e.jsx(e.Fragment,{children:e.jsxs(l.Select,{onChange:g=>h(g.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:b("Category")}),x==null?void 0:x.map(g=>e.jsx("option",{value:g._id,children:K(g==null?void 0:g.name,c)},g._id))]})})},De=()=>{const{title:h,allId:c,serviceId:x,handleDeleteMany:b,handleUpdateMany:g}=q(),{t}=L(),{toggleDrawer:f,lang:C,currentPage:p,handleChangePage:F,searchText:s,category:w,setCategory:N,searchRef:T,handleSubmitForAll:A,sortedField:B,setSortedField:O,limitData:m}=S.useContext(H),{data:a,loading:n,error:P}=R(()=>J.getAllProducts({page:p,limit:m,category:w,title:s,price:B})),{data:r}=R(ie.getGlobalSetting),D=(r==null?void 0:r.default_currency)||"₹",[j,o]=S.useState(!1),[i,y]=S.useState([]),v=()=>{o(!j),y(a==null?void 0:a.products.map(_=>_._id)),j&&y([])},{serviceData:u,filename:d,isDisabled:U,handleSelectFile:k,handleUploadMultiple:M,handleRemoveSelectFile:X}=he(a==null?void 0:a.products);return e.jsxs(e.Fragment,{children:[e.jsx(se,{children:t("ProductsPage")}),e.jsx(Q,{ids:c,setIsCheck:y,title:h}),e.jsx(de,{ids:c,title:"Products"}),e.jsx(G,{children:e.jsx(z,{id:x})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(l.CardBody,{className:"",children:e.jsxs("form",{onSubmit:A,className:"py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6  xl:flex",children:[e.jsx("div",{className:"flex justify-start xl:w-1/2  md:w-full",children:e.jsx(ne,{title:"Products",filename:d,isDisabled:U,totalDoc:a==null?void 0:a.totalDoc,handleSelectFile:k,handleUploadMultiple:M,handleRemoveSelectFile:X})}),e.jsxs("div",{className:"lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0",children:[e.jsx("div",{className:"w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0",children:e.jsxs(l.Button,{disabled:i.length<1,onClick:()=>g(i),className:"w-full rounded-md h-12 btn-gray text-gray-600 sm:mb-3",children:[e.jsx("span",{className:"mr-2",children:e.jsx(le,{})}),t("BulkAction")]})}),e.jsx("div",{className:"w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0",children:e.jsxs(l.Button,{disabled:(i==null?void 0:i.length)<1,onClick:()=>b(i,a.products),className:"w-full rounded-md h-12 bg-red-300 disabled btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(ae,{})}),t("Delete")]})}),e.jsx("div",{className:"w-full md:w-48 lg:w-48 xl:w-48",children:e.jsxs(l.Button,{onClick:f,className:"w-full rounded-md h-12",children:[e.jsx("span",{className:"mr-2",children:e.jsx(te,{})}),t("AddProduct")]})})]})]})})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(l.CardBody,{children:e.jsxs("form",{onSubmit:A,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(l.Input,{ref:T,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",type:"search",name:"search",placeholder:"Search Product"}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(be,{setCategory:N,lang:C})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Select,{onChange:_=>O(_.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:t("Price")}),e.jsx("option",{value:"low",children:t("LowtoHigh")}),e.jsx("option",{value:"high",children:t("HightoLow")}),e.jsx("option",{value:"published",children:t("Published")}),e.jsx("option",{value:"unPublished",children:t("Unpublished")}),e.jsx("option",{value:"status-selling",children:t("StatusSelling")}),e.jsx("option",{value:"status-out-of-stock",children:t("StatusStock")}),e.jsx("option",{value:"date-added-asc",children:t("DateAddedAsc")}),e.jsx("option",{value:"date-added-desc",children:t("DateAddedDesc")}),e.jsx("option",{value:"date-updated-asc",children:t("DateUpdatedAsc")}),e.jsx("option",{value:"date-updated-desc",children:t("DateUpdatedDesc")})]})})]})})}),n?e.jsx(ge,{row:12,col:7,width:160,height:20}):P?e.jsx("span",{className:"text-center mx-auto text-red-500",children:P}):(u==null?void 0:u.length)!==0?e.jsxs(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:e.jsx(W,{type:"checkbox",name:"selectAll",id:"selectAll",isChecked:j,handleClick:v})}),e.jsx(l.TableCell,{children:t("ProductNameTbl")}),e.jsx(l.TableCell,{children:t("CategoryTbl")}),e.jsx(l.TableCell,{children:t("PriceTbl")}),e.jsx(l.TableCell,{children:"Sale Price"}),e.jsx(l.TableCell,{children:t("StockTbl")}),e.jsx(l.TableCell,{children:t("StatusTbl")}),e.jsx(l.TableCell,{children:"minimum order"}),e.jsx(l.TableCell,{children:"warranty"}),e.jsx(l.TableCell,{className:"text-center",children:t("PublishedTbl")}),e.jsx(l.TableCell,{className:"text-right",children:t("ActionsTbl")})]})}),e.jsx(je,{lang:C,isCheck:i,products:a==null?void 0:a.products,setIsCheck:y,currency:D})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:a==null?void 0:a.totalDoc,resultsPerPage:m,onChange:F,label:"Product Page Navigation"})})]}):e.jsx(re,{title:"Product"})]})};export{De as default};
