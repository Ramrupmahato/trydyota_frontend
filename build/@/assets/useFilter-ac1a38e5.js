import{m as Ge,u as Ze,q as $e,n as ke,o as He,C as Xe,G as Ke,R as Qe,A as We,a2 as ve,a3 as et}from"./Layout-781e84c8.js";import{d as E}from"./dayjs.min-fd9685be.js";import{v as ue,o as ce,r as o,t as tt,S as st}from"./index-0375175f.js";import{r as nt,u as ot}from"./xlsx-04f2268f.js";import{n as f,b as x}from"./AdminServices-cf2ec72f.js";var pe={exports:{}};(function(C,N){(function(O,h){C.exports=h()})(ue,function(){return function(O,h,L){h.prototype.isBetween=function(j,P,w,b){var B=L(j),l=L(P),M=(b=b||"()")[0]==="(",_=b[1]===")";return(M?this.isAfter(B,w):!this.isBefore(B,w))&&(_?this.isBefore(l,w):!this.isAfter(l,w))||(M?this.isBefore(B,w):!this.isAfter(B,w))&&(_?this.isAfter(l,w):!this.isBefore(l,w))}}})})(pe);var at=pe.exports;const rt=ce(at);var me={exports:{}};(function(C,N){(function(O,h){C.exports=h()})(ue,function(){return function(O,h,L){h.prototype.isToday=function(){var j="YYYY-MM-DD",P=L();return this.format(j)===P.format(j)}}})})(me);var it=me.exports;const dt=ce(it),ut={type:"object",properties:{_id:{type:"string"},name:{type:"object"},description:{type:"object"},icon:{type:"string"},status:{type:"string"}},required:["name"]},ct={type:"object",properties:{status:{type:"string"},title:{type:"object"},name:{type:"object"},variants:{type:"array"},option:{type:"string"},type:{type:"string"}},required:["name","title"]},pt={type:"object",properties:{title:{type:"object"},couponCode:{type:"string"},endTime:{type:"string"},discountPercentage:{type:"number"},minimumAmount:{type:"number"},productType:{type:"string"},logo:{type:"string"},discountType:{type:"object"},status:{type:"string"}},required:["title","couponCode","endTime","status"]},mt={type:"object",properties:{name:{type:"string"},email:{type:"string"}},required:["name","email"]},_t=C=>{console.log("data=>===",C);const N=new Ge({allErrors:!0}),[O,h]=o.useState(""),[L,j]=o.useState(""),[P,w]=o.useState(""),[b,B]=o.useState(""),[l,M]=o.useState(""),[_,le]=o.useState(""),[D,fe]=o.useState(""),[A,ge]=o.useState(""),[F,W]=o.useState(""),[Se,ye]=o.useState(""),[U,we]=o.useState(""),[Z,Ce]=o.useState(""),[he,be]=o.useState([]),[Le,De]=o.useState([]),[Ae,Te]=o.useState([]),[$,Oe]=o.useState(""),[k,Pe]=o.useState(""),[V,Re]=o.useState(""),[H,xe]=o.useState(1),[Ne,je]=o.useState([]),[Be,_e]=o.useState(""),[Je,Fe]=o.useState(""),[Ue,Ie]=o.useState(""),[S,q]=o.useState([]),[Ee,Y]=o.useState(""),[Me,z]=o.useState(!1),[X,Ve]=o.useState(""),[K]=o.useState([]),v=o.useRef(""),ee=o.useRef(""),te=o.useRef(""),se=o.useRef(""),ne=o.useRef(""),oe=o.useRef(""),ae=o.useRef(""),re=o.useRef(""),ie=o.useRef(""),qe=o.useRef(""),de=o.useRef("");E.extend(rt),E.extend(dt);const c=tt(),{lang:I,setIsUpdate:J,setLoading:g}=o.useContext(st),{data:R}=Ze($e.getGlobalSetting),T=o.useMemo(()=>{const a=new Date;a.setDate(a.getDate()-V);let t=C==null?void 0:C.map(e=>{const i=new Date(e==null?void 0:e.updatedAt).toLocaleString("en-US",{timeZone:R==null?void 0:R.default_time_zone});return{...e,updatedDate:i==="Invalid Date"?"":i}});if(c.pathname==="/dashboard"){const e=t==null?void 0:t.filter(p=>p.status==="Pending");be(e);const i=t==null?void 0:t.filter(p=>p.status==="Processing");De(i);const s=t==null?void 0:t.filter(p=>p.status==="Delivered");Te(s);const u=t==null?void 0:t.filter(p=>E(p.createdAt).isToday()),m=u==null?void 0:u.reduce((p,y)=>p+y.total,0);_e(m);const n=t==null?void 0:t.filter(p=>E(p.createdAt).isBetween(new Date().setDate(new Date().getDate()-30),new Date)),r=n==null?void 0:n.reduce((p,y)=>p+y.total,0);Fe(r);const Q=t==null?void 0:t.reduce((p,y)=>p+y.total,0);Ie(Q)}return O&&(t=t.filter(e=>e.parent===O)),L==="Low"&&(t=t.sort((e,i)=>e.price<i.price&&-1)),L==="High"&&(t=t.sort((e,i)=>e.price>i.price&&-1)),P&&(t=t.filter(e=>{var i;return(i=e==null?void 0:e.title)==null?void 0:i.toLowerCase().includes(P.toLowerCase())})),A&&(t=t.filter(e=>{var i,s,u;return((s=(i=e==null?void 0:e.title[I])==null?void 0:i.toLowerCase())==null?void 0:s.includes(A==null?void 0:A.toLowerCase()))||((u=e==null?void 0:e.attribute)==null?void 0:u.toLowerCase().includes(A==null?void 0:A.toLowerCase()))})),D&&(t=t.filter(e=>{var i,s,u;return((s=(i=e==null?void 0:e.name[I])==null?void 0:i.toLowerCase())==null?void 0:s.includes(D==null?void 0:D.toLowerCase()))||((u=e==null?void 0:e.category)==null?void 0:u.toLowerCase().includes(D==null?void 0:D.toLowerCase()))})),k&&(t=t.filter(e=>e.role===k)),b&&(t=t.filter(e=>{var i,s,u;return((i=e==null?void 0:e.name[I])==null?void 0:i.toLowerCase().includes(b.toLowerCase()))||((s=e==null?void 0:e.phone)==null?void 0:s.toLowerCase().includes(b.toLowerCase()))||((u=e==null?void 0:e.email)==null?void 0:u.toLowerCase().includes(b.toLowerCase()))})),l&&(t=t==null?void 0:t.filter(e=>{var i,s,u;return((s=(i=e==null?void 0:e.title[I])==null?void 0:i.toLowerCase())==null?void 0:s.includes(l==null?void 0:l.toLowerCase()))||((u=e==null?void 0:e.couponCode)==null?void 0:u.toLowerCase().includes(l==null?void 0:l.toLowerCase()))})),$&&(t=t.filter(e=>e.status===$)),_&&(t=t.filter(e=>e.contact.toLowerCase().includes(_.toLowerCase()))),V&&(t=t.filter(e=>E(e.createdAt).isBetween(a,new Date))),F&&(t=t.filter(e=>{var i,s;return((i=e==null?void 0:e.name)==null?void 0:i.toLowerCase().includes(F.toLowerCase()))||((s=e==null?void 0:e.iso_code)==null?void 0:s.toLowerCase().includes(F.toLowerCase()))})),X&&(t=t.filter(e=>e==null?void 0:e.name.toLowerCase().includes(X.toLowerCase()))),U&&(t=t.filter(e=>e.name.toLowerCase().includes(U.toLowerCase())||e.iso_code.toLowerCase().includes(U.toLowerCase())||e.language_code.toLowerCase().includes(U.toLowerCase()))),Z&&(t=t.filter(e=>e.iso_code.toLowerCase().includes(Z.toLowerCase()))),t},[V,C,c.pathname,O,L,P,A,D,k,b,l,$,_,F,X,U,Z,R==null?void 0:R.default_time_zone,I]),G=20,Ye=T==null?void 0:T.length,ze=a=>{xe(a)};return o.useEffect(()=>{je(T==null?void 0:T.slice((H-1)*G,H*G))},[T,H,G]),{userRef:te,searchRef:ee,couponRef:se,orderRef:ne,categoryRef:oe,attributeRef:ae,pending:he,processing:Le,delivered:Ae,todayOrder:Be,monthlyOrder:Je,totalOrder:Ue,setFilter:h,setSortedField:j,setStatus:Oe,setRole:Pe,time:V,setTime:Re,handleChangePage:ze,totalResults:Ye,resultsPerPage:G,dataTable:Ne,serviceData:T,handleSubmitUser:a=>{a.preventDefault(),B(te.current.value)},handleSubmitForAll:a=>{a.preventDefault(),w(ee.current.value)},handleSubmitCoupon:a=>{a.preventDefault(),M(se.current.value)},handleSubmitOrder:a=>{a.preventDefault(),le(ne.current.value)},handleSubmitCategory:a=>{a.preventDefault(),fe(oe.current.value)},handleSubmitAttribute:a=>{a.preventDefault(),ge(ae.current.value)},handleOnDrop:a=>{for(let t=0;t<a.length;t++)K.push(a[t].data)},handleUploadProducts:()=>{K.length<1?f("Please upload/select csv file first!"):ke.addAllProducts(K).then(a=>{x(a.message)}).catch(a=>f(a.message))},countryRef:re,country:F,setCountry:W,zone:Se,setZone:ye,handleSubmitCountry:a=>{a.preventDefault(),W(re.current.value)},languageRef:ie,handleSubmitLanguage:a=>{a.preventDefault(),we(ie.current.value)},handleSelectFile:a=>{var i;a.preventDefault();const t=new FileReader,e=(i=a.target)==null?void 0:i.files[0];if(e&&e.type==="application/json")Y(e==null?void 0:e.name),z(!0),t.readAsText(e,"UTF-8"),t.onload=s=>{let u=JSON.parse(s.target.result),m=[];c.pathname==="/categories"&&(m=u.map(n=>({_id:n._id,id:n.id,status:n.status,name:n.name,description:n.description,parentName:n.parentName,parentId:n.parentId,icon:n.icon}))),c.pathname==="/attributes"&&(m=u.map(n=>({_id:n._id,status:n.status,title:n.title,name:n.name,variants:n.variants,option:n.option,type:n.type}))),c.pathname==="/coupons"&&(m=u.map(n=>({title:n.title,couponCode:n.couponCode,endTime:n.endTime,discountPercentage:n.discountPercentage,minimumAmount:n.minimumAmount,productType:n.productType,logo:n.logo,discountType:n.discountType,status:n.status}))),c.pathname==="/customers"&&(m=u.map(n=>({name:n.name,email:n.email,password:n.password,phone:n.phone}))),q(m)};else if(e&&e.type==="text/csv")Y(e==null?void 0:e.name),z(!0),t.onload=async s=>{const u=s.target.result,m=await He().fromString(u);let n=[];c.pathname==="/categories"&&(n=m.map(r=>({_id:r._id,id:r.id,status:r.status,name:JSON.parse(r.name),description:JSON.parse(r.description),parentName:r.parentName,parentId:r.parentId,icon:r.icon}))),c.pathname==="/attributes"&&(n=m.map(r=>({status:r.status,title:JSON.parse(r.title),name:JSON.parse(r.name),variants:JSON.parse(r.variants),option:r.option,type:r.type}))),c.pathname==="/coupons"&&(n=m.map(r=>({title:JSON.parse(r.title),couponCode:r.couponCode,endTime:r.endTime,discountPercentage:r.discountPercentage?JSON.parse(r.discountPercentage):0,minimumAmount:r.minimumAmount?JSON.parse(r.minimumAmount):0,productType:r.productType,logo:r.logo,status:r.status}))),c.pathname==="/customers"&&(n=m.map(r=>({name:r.name,email:r.email,password:r.password,phone:r.phone}))),q(n)},t.readAsText(e);else{Y(e==null?void 0:e.name),z(!0);const s=!!t.readAsBinaryString;t.onload=function(u){const m=u.target.result,n=nt(m,{type:s?"binary":"array",bookVBA:!0}),r=n.SheetNames[0],Q=n.Sheets[r],p=ot.sheet_to_json(Q);let y=[];c.pathname==="/categories"&&(y=p.map(d=>({_id:d._id,id:d.id,status:d.status,name:JSON.parse(d.name),description:JSON.parse(d.description),parentName:d.parentName,parentId:d.parentId,icon:d.icon}))),c.pathname==="/attributes"&&(y=p.map(d=>({status:d.status,title:JSON.parse(d.title),name:JSON.parse(d.name),variants:JSON.parse(d.variants),option:d.option,type:d.type}))),c.pathname==="/coupons"&&(y=p.map(d=>({title:JSON.parse(d.title),couponCode:d.couponCode,endTime:d.endTime,discountPercentage:d.discountPercentage,minimumAmount:d.minimumAmount,productType:d.productType,logo:d.logo,status:d.status}))),c.pathname==="/customers"&&(y=p.map(d=>({name:d.name,email:d.email,password:d.password?d.password:"null",phone:d.phone?d.phone:"null"}))),q(y)},s?t.readAsBinaryString(e):t.readAsArrayBuffer(e)}},handleUploadMultiple:a=>{if(S.length>1){if(c.pathname==="/categories"){g(!0);let t=S.map(s=>N.validate(ut,s));const e=s=>s===!0;t.every(e)?Xe.addAllCategory(S).then(s=>{g(!1),J(!0),x(s.message)}).catch(s=>{g(!1),f(s?s.response.data.message:s.message)}):f("Please enter valid data!")}if(c.pathname==="/customers"){g(!0);let t=S.map(s=>N.validate(mt,s));const e=s=>s===!0;t.every(e)?Ke.addAllCustomers(S).then(s=>{g(!1),J(!0),x(s.message)}).catch(s=>{g(!1),f(s?s.response.data.message:s.message)}):f("Please enter valid data!")}if(c.pathname==="/coupons"){g(!0);let t=S.map(s=>N.validate(pt,s));const e=s=>s===!0;t.every(e)?Qe.addAllCoupon(S).then(s=>{g(!1),J(!0),x(s.message)}).catch(s=>{g(!1),f(s?s.response.data.message:s.message)}):f("Please enter valid data!")}if(c.pathname==="/attributes"){g(!0);let t=S.map(s=>N.validate(ct,s));const e=s=>s===!0;t.every(e)?We.addAllAttributes(S).then(s=>{g(!1),J(!0),x(s.message)}).catch(s=>{g(!1),f(s?s.response.data.message:s.message)}):f("Please enter valid data!")}c.pathname==="/languages"&&ve.addAllLanguage(S).then(t=>{J(!0),x(t.message)}).catch(t=>f(t?t.response.data.message:t.message)),c.pathname==="/currencies"&&et.addAllCurrency(S).then(t=>{J(!0),x(t.message)}).catch(t=>f(t?t.response.data.message:t.message))}else f("Please select a valid .JSON/.CSV/.XLS file first!")},filename:Ee,isDisabled:Me,handleRemoveSelectFile:a=>{Y(""),q([]),setTimeout(()=>z(!1),1e3)},taxRef:qe,currencyRef:v,handleSubmitCurrency:a=>{a.preventDefault(),Ce(v.current.value)},handleSubmitShipping:a=>{a.preventDefault(),Ve(de.current.value)},shippingRef:de,globalSetting:R}};export{dt as a,rt as i,_t as u};
