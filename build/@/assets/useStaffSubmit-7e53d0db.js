import{d as p}from"./dayjs.min-ebcc177c.js";import{r as n,F as B,S as G,t as H,G as R}from"./index-88bd6ee5.js";import{u as V,A as S,b as C,n as A}from"./AdminServices-80d6ce31.js";import{k as q}from"./Layout-349eb748.js";const P=i=>{const{state:L}=n.useContext(B),{adminInfo:D}=L,{isDrawerOpen:d,closeDrawer:l,setIsUpdate:h,lang:w}=n.useContext(G),[Y,c]=n.useState(""),[u,y]=n.useState(p(new Date).format("YYYY-MM-DD")),[o,b]=n.useState(w),[x,j]=n.useState({}),[T,f]=n.useState(!1),I=H(),{register:U,handleSubmit:k,setValue:a,clearErrors:r,formState:{errors:F}}=V(),O=async t=>{var m,e;try{f(!0);const s=await q(t.name,o),E={name:{[o]:t.name,...s},email:t.email,password:t.password,phone:t.phone,role:t.role,joiningDate:u||p(new Date).format("YYYY-MM-DD"),image:Y,lang:o};if(i){const g=await S.updateStaff(i,E);h(!0),f(!1),C(g.message),l()}else{const g=await S.addStaff({staffData:E});h(!0),f(!1),C(g.message),l()}}catch(s){A(s?(e=(m=s==null?void 0:s.response)==null?void 0:m.data)==null?void 0:e.message:s==null?void 0:s.message),f(!1),l()}},M=async()=>{var t,m;try{const e=await S.getStaffById(i,{email:D.email});e&&(j(e),a("name",e.name[o||"en"]),a("email",e.email),a("password"),a("phone",e.phone),a("role",e.role),y(p(e.joiningData).format("YYYY-MM-DD")),c(e.image))}catch(e){A(e?(m=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:m.message:e==null?void 0:e.message)}},v=t=>{b(t),Object.keys(x).length>0&&a("name",x.name[t||"en"])};return n.useEffect(()=>{if(!d){j({}),a("name"),a("email"),a("password"),a("phone"),a("role"),a("joiningDate"),c(""),r("name"),r("email"),r("password"),r("phone"),r("role"),r("joiningDate"),c(""),b(w),a("language",o);return}i&&M()},[i,a,d,D.email,r]),n.useEffect(()=>{I.pathname==="/edit-profile"&&R.get("adminInfo")&&M()},[I.pathname,a]),{register:U,handleSubmit:k,onSubmit:O,language:o,errors:F,setImageUrl:c,imageUrl:Y,selectedDate:u,setSelectedDate:y,isSubmitting:T,handleSelectLanguage:v}};export{P as u};
