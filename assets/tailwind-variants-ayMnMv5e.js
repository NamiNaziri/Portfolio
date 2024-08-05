import{t as ne,e as le}from"./tailwind-merge-Dc5vmgZ1.js";var F=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,b=e=>!e||typeof e!="object"||Object.keys(e).length===0,oe=(e,f)=>JSON.stringify(e)===JSON.stringify(f);function I(e,f){e.forEach(function(r){Array.isArray(r)?I(r,f):f.push(r)})}function L(e){let f=[];return I(e,f),f}var U=(...e)=>L(e).filter(Boolean),W=(e,f)=>{let r={},h=Object.keys(e),w=Object.keys(f);for(let u of h)if(w.includes(u)){let g=e[u],j=f[u];typeof g=="object"&&typeof j=="object"?r[u]=W(g,j):Array.isArray(g)||Array.isArray(j)?r[u]=U(j,g):r[u]=j+" "+g}else r[u]=e[u];for(let u of w)h.includes(u)||(r[u]=f[u]);return r},G=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),ie={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Z=e=>e||void 0,M=(...e)=>Z(L(e).filter(Boolean).join(" ")),P=null,S={},B=!1,k=(...e)=>f=>f.twMerge?((!P||B)&&(B=!1,P=b(S)?ne:le(S)),Z(P(M(e)))):M(e),H=(e,f)=>{for(let r in f)e.hasOwnProperty(r)?e[r]=M(e[r],f[r]):e[r]=f[r];return e},se=(e,f)=>{let{extend:r=null,slots:h={},variants:w={},compoundVariants:u=[],compoundSlots:g=[],defaultVariants:j={}}=e,d={...ie,...f},T=r!=null&&r.base?M(r.base,e==null?void 0:e.base):e==null?void 0:e.base,v=r!=null&&r.variants&&!b(r.variants)?W(w,r.variants):w,N=r!=null&&r.defaultVariants&&!b(r.defaultVariants)?{...r.defaultVariants,...j}:j;!b(d.twMergeConfig)&&!oe(d.twMergeConfig,S)&&(B=!0,S=d.twMergeConfig);let x=b(r==null?void 0:r.slots),C=b(h)?{}:{base:M(e==null?void 0:e.base,x&&(r==null?void 0:r.base)),...h},V=x?C:H({...r==null?void 0:r.slots},b(C)?{base:e==null?void 0:e.base}:C),A=y=>{if(b(v)&&b(h)&&x)return k(T,y==null?void 0:y.class,y==null?void 0:y.className)(d);if(u&&!Array.isArray(u))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);if(g&&!Array.isArray(g))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof g}`);let Q=(t,l,n=[],i)=>{let o=n;if(typeof l=="string")o=o.concat(G(l).split(" ").map(a=>`${t}:${a}`));else if(Array.isArray(l))o=o.concat(l.reduce((a,s)=>a.concat(`${t}:${s}`),[]));else if(typeof l=="object"&&typeof i=="string"){for(let a in l)if(l.hasOwnProperty(a)&&a===i){let s=l[a];if(s&&typeof s=="string"){let c=G(s);o[i]?o[i]=o[i].concat(c.split(" ").map(p=>`${t}:${p}`)):o[i]=c.split(" ").map(p=>`${t}:${p}`)}else Array.isArray(s)&&s.length>0&&(o[i]=s.reduce((c,p)=>c.concat(`${t}:${p}`),[]))}}return o},K=(t,l=v,n=null,i=null)=>{var o;let a=l[t];if(!a||b(a))return null;let s=(o=i==null?void 0:i[t])!=null?o:y==null?void 0:y[t];if(s===null)return null;let c=F(s),p=Array.isArray(d.responsiveVariants)&&d.responsiveVariants.length>0||d.responsiveVariants===!0,O=N==null?void 0:N[t],m=[];if(typeof c=="object"&&p)for(let[J,D]of Object.entries(c)){let te=a[D];if(J==="initial"){O=D;continue}Array.isArray(d.responsiveVariants)&&!d.responsiveVariants.includes(J)||(m=Q(J,te,m,n))}let E=a[c]||a[F(O)];return typeof m=="object"&&typeof n=="string"&&m[n]?H(m,E):m.length>0?(m.push(E),m):E},X=()=>v?Object.keys(v).map(t=>K(t,v)):null,Y=(t,l)=>{if(!v||typeof v!="object")return null;let n=new Array;for(let i in v){let o=K(i,v,t,l),a=t==="base"&&typeof o=="string"?o:o&&o[t];a&&(n[n.length]=a)}return n},R={};for(let t in y)y[t]!==void 0&&(R[t]=y[t]);let $=(t,l)=>{var n;let i=typeof(y==null?void 0:y[t])=="object"?{[t]:(n=y[t])==null?void 0:n.initial}:{};return{...N,...R,...i,...l}},q=(t=[],l)=>{let n=[];for(let{class:i,className:o,...a}of t){let s=!0;for(let[c,p]of Object.entries(a)){let O=$(c,l);if(Array.isArray(p)){if(!p.includes(O[c])){s=!1;break}}else if(O[c]!==p){s=!1;break}}s&&(i&&n.push(i),o&&n.push(o))}return n},z=t=>{let l=q(u,t),n=q(r==null?void 0:r.compoundVariants,t);return U(n,l)},ee=t=>{let l=z(t);if(!Array.isArray(l))return l;let n={};for(let i of l)if(typeof i=="string"&&(n.base=k(n.base,i)(d)),typeof i=="object")for(let[o,a]of Object.entries(i))n[o]=k(n[o],a)(d);return n},re=t=>{if(g.length<1)return null;let l={};for(let{slots:n=[],class:i,className:o,...a}of g){if(!b(a)){let s=!0;for(let c of Object.keys(a)){let p=$(c,t)[c];if(p===void 0||(Array.isArray(a[c])?!a[c].includes(p):a[c]!==p)){s=!1;break}}if(!s)continue}for(let s of n)l[s]=l[s]||[],l[s].push([i,o])}return l};if(!b(h)||!x){let t={};if(typeof V=="object"&&!b(V))for(let l of Object.keys(V))t[l]=n=>{var i,o;return k(V[l],Y(l,n),((i=ee(n))!=null?i:[])[l],((o=re(n))!=null?o:[])[l],n==null?void 0:n.class,n==null?void 0:n.className)(d)};return t}return k(T,X(),z(),y==null?void 0:y.class,y==null?void 0:y.className)(d)},_=()=>{if(!(!v||typeof v!="object"))return Object.keys(v)};return A.variantKeys=_(),A.extend=r,A.base=T,A.slots=V,A.variants=v,A.defaultVariants=N,A.compoundSlots=g,A.compoundVariants=u,A};export{se as i};