import{v as i,r as A,j as _}from"./index-88bd6ee5.js";var b={},u={};Object.defineProperty(u,"__esModule",{value:!0});u.cssValue=u.parseLengthAndUnit=void 0;var V={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function O(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return V[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}u.parseLengthAndUnit=O;function D(e){var t=O(e);return"".concat(t.value).concat(t.unit)}u.cssValue=D;var v={};Object.defineProperty(v,"__esModule",{value:!0});v.createAnimation=void 0;var R=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var c=a.sheet,f=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return c&&c.insertRule(f,0),r};v.createAnimation=R;var d=i&&i.__assign||function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)},C=i&&i.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),U=i&&i.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),F=i&&i.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&C(t,e,n);return U(t,e),t},B=i&&i.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};Object.defineProperty(b,"__esModule",{value:!0});var o=F(A),s=u,I=v,N=(0,I.createAnimation)("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");function $(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,a=r===void 0?"#000000":r,c=e.speedMultiplier,f=c===void 0?1:c,p=e.cssOverride,j=p===void 0?{}:p,m=e.height,w=m===void 0?35:m,g=e.width,x=g===void 0?4:g,y=e.radius,S=y===void 0?2:y,h=e.margin,E=h===void 0?2:h,M=B(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),P=d({display:"inherit"},j),l=function(L){return{backgroundColor:a,width:(0,s.cssValue)(x),height:(0,s.cssValue)(w),margin:(0,s.cssValue)(E),borderRadius:(0,s.cssValue)(S),display:"inline-block",animation:"".concat(N," ").concat(1/f,"s ").concat(L*.1,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?o.createElement("span",d({style:P},M),o.createElement("span",{style:l(1)}),o.createElement("span",{style:l(2)}),o.createElement("span",{style:l(3)}),o.createElement("span",{style:l(4)}),o.createElement("span",{style:l(5)})):null}var G=b.default=$;const q=({loading:e})=>_.jsx("div",{className:"text-lg text-center py-6",children:_.jsx(G,{color:"#34D399",loading:e,height:25,width:3,radius:3,margin:4})});export{q as L};
