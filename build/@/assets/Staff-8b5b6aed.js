import{x as N,j as e,y as a,r as w,S as T,F as E}from"./index-0375175f.js";import{T as f,l as I,U as R,D as F,t as z,d as U,e as B,M as C,s as S,E as L,u as Z,P as _,i as J}from"./Layout-781e84c8.js";import{u as v}from"./useFilter-ac1a38e5.js";import{L as x,E as p,A as y,b as M,n as $}from"./AdminServices-cf2ec72f.js";import{I as b}from"./InputArea-bd055fd2.js";import{u as O}from"./useStaffSubmit-a1cbfa5f.js";import{S as V}from"./SelectRole-4189b3fd.js";import{T as q}from"./TableLoading-b4c38795.js";import{S as H}from"./Status-dac9a41d.js";import{s as G}from"./dateFormate-3888c63a.js";import{N as K}from"./NotFound-535e9595.js";import"./iconBase-c373190d.js";import"./dayjs.min-fd9685be.js";import"./xlsx-04f2268f.js";const A=({id:n})=>{const{register:r,handleSubmit:g,onSubmit:c,errors:i,imageUrl:m,setImageUrl:o,selectedDate:h,setSelectedDate:d,handleSelectLanguage:l}=O(n),{t:s}=N();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:n?e.jsx(f,{register:r,handleSelectLanguage:l,title:s("UpdateStaff"),description:s("UpdateStaffdescription")}):e.jsx(f,{register:r,handleSelectLanguage:l,title:s("AddStaffTitle"),description:s("AddStaffdescription")})}),e.jsx(I.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsx(a.Card,{className:"overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full",children:e.jsx(a.CardBody,{children:e.jsxs("form",{onSubmit:g(c),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(x,{label:"Staff Image"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(R,{imageUrl:m,setImageUrl:o,folder:"admin"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(x,{label:"Name"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:r,label:"Name",name:"name",type:"text",autoComplete:"username",placeholder:"Staff name"}),e.jsx(p,{errorName:i.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(x,{label:"Email"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:r,label:"Email",name:"email",type:"text",autoComplete:"username",pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,placeholder:"Email"}),e.jsx(p,{errorName:i.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(x,{label:"Password"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[n?e.jsx(b,{required:!0,register:r,label:"Password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password"}):e.jsx(b,{register:r,label:"Password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password"}),e.jsx(p,{errorName:i.password})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(x,{label:"Contact Number"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:r,label:"Contact Number",name:"phone",pattern:/^[+]?\d*$/,minLength:6,maxLength:15,type:"text",placeholder:"Phone number"}),e.jsx(p,{errorName:i.phone})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(x,{label:"Joining Date"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(a.Input,{onChange:j=>d(j.target.value),label:"Joining Date",name:"joiningDate",value:h,type:"date",className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white",placeholder:s("StaffJoiningDate")}),e.jsx(p,{errorName:i.joiningDate})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(x,{label:"Staff Role"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(V,{register:r,label:"Role",name:"role"}),e.jsx(p,{errorName:i.role})]})]})]}),e.jsx(F,{id:n,title:"Staff"})]})})})})]})},Q=({id:n,status:r,option:g,staff:c})=>{const{setIsUpdate:i}=w.useContext(T),m=async(o,h)=>{var d,l;try{let s;r==="Active"?s="Inactive":s="Active";const j=await y.updateStaffStatus(o,{status:s});i(!0),M(j.message);return}catch(s){$(s?(l=(d=s==null?void 0:s.response)==null?void 0:d.data)==null?void 0:l.message:s==null?void 0:s.message)}};return e.jsx(e.Fragment,{children:e.jsx(z,{onChange:()=>m(n),checked:r==="Active",className:"react-switch md:ml-0",uncheckedIcon:e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",width:120,fontSize:14,color:"white",paddingRight:22,paddingTop:1}}),width:30,height:15,handleDiameter:13,offColor:"#E53E3E",onColor:"#2F855A",checkedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:73,height:"100%",fontSize:14,color:"white",paddingLeft:20,paddingTop:1}})})})},W=({staffs:n,lang:r})=>{const{title:g,serviceId:c,handleModalOpen:i,handleUpdate:m,isSubmitting:o,handleResetPassword:h}=U(),{globalSetting:d}=v();return e.jsxs(e.Fragment,{children:[e.jsx(B,{id:c,title:g}),e.jsx(C,{children:e.jsx(A,{id:c})}),e.jsx(a.TableBody,{children:n==null?void 0:n.map(l=>e.jsxs(a.TableRow,{children:[e.jsx(a.TableCell,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(a.Avatar,{className:"hidden mr-3 md:block bg-gray-50",src:l.image,alt:"staff"}),e.jsx("div",{children:e.jsx("h2",{className:"text-sm font-medium",children:S(l==null?void 0:l.name,r)})})]})}),e.jsxs(a.TableCell,{children:[e.jsx("span",{className:"text-sm",children:l.email})," "]}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm ",children:l.phone})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm",children:G(l.joiningData,d.default_date_format)})}),e.jsx(a.TableCell,{children:e.jsx("span",{className:"text-sm font-semibold",children:l==null?void 0:l.role})}),e.jsx(a.TableCell,{className:"text-center text-xs",children:e.jsx(H,{status:l.status})}),e.jsx(a.TableCell,{className:"text-center",children:e.jsx(Q,{id:l==null?void 0:l._id,staff:l,option:"staff",status:l.status})}),e.jsx(a.TableCell,{children:e.jsx(L,{id:l._id,staff:l,isSubmitting:o,handleUpdate:m,handleModalOpen:i,handleResetPassword:h,title:S(l==null?void 0:l.name,r)})})]},l._id))})]})},xe=()=>{const{state:n}=w.useContext(E),{adminInfo:r}=n,{toggleDrawer:g,lang:c}=w.useContext(T),{data:i,loading:m,error:o}=Z(()=>y.getAllStaff({email:r.email})),{userRef:h,setRole:d,handleChangePage:l,totalResults:s,resultsPerPage:j,dataTable:D,serviceData:u,handleSubmitUser:P}=v(i),{t}=N();return e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[t("StaffPageTitle")," "]}),e.jsx(C,{children:e.jsx(A,{})}),e.jsx(a.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(a.CardBody,{children:e.jsxs("form",{onSubmit:P,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(a.Input,{ref:h,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",type:"search",name:"search",placeholder:t("StaffSearchBy")}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(a.Select,{onChange:k=>d(k.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:t("StaffRole")}),e.jsx("option",{value:"Admin",children:t("StaffRoleAdmin")}),e.jsx("option",{value:"Cashier",children:t("SelectCashiers")}),e.jsx("option",{value:"Super Admin",children:t("SelectSuperAdmin")})]})}),e.jsx("div",{className:"w-full md:w-56 lg:w-56 xl:w-56",children:e.jsxs(a.Button,{onClick:g,className:"w-full rounded-md h-12",children:[e.jsx("span",{className:"mr-3",children:e.jsx(J,{})}),t("AddStaff")]})})]})})}),m?e.jsx(q,{row:12,col:7,width:163,height:20}):o?e.jsx("span",{className:"text-center mx-auto text-red-500",children:o}):(u==null?void 0:u.length)!==0?e.jsxs(a.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(a.Table,{children:[e.jsx(a.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(a.TableCell,{children:t("StaffNameTbl")}),e.jsx(a.TableCell,{children:t("StaffEmailTbl")}),e.jsx(a.TableCell,{children:t("StaffContactTbl")}),e.jsx(a.TableCell,{children:t("StaffJoiningDateTbl")}),e.jsx(a.TableCell,{children:t("StaffRoleTbl")}),e.jsx(a.TableCell,{className:"text-center",children:t("OderStatusTbl")}),e.jsx(a.TableCell,{className:"text-center",children:t("PublishedTbl")}),e.jsx(a.TableCell,{className:"text-right",children:t("StaffActionsTbl")})]})}),e.jsx(W,{staffs:D,lang:c})]}),e.jsx(a.TableFooter,{children:e.jsx(a.Pagination,{totalResults:s,resultsPerPage:j,onChange:l,label:"Table navigation"})})]}):e.jsx(K,{title:"Sorry, There are no staff right now."})]})};export{xe as default};
