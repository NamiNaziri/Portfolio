import{c as m}from"./unist-util-is-D9KQvrmg.js";import{v as E}from"./unist-util-visit-parents-BzuIhZFT.js";function I(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function F(e,f,u){const p=m((u||{}).ignore||[]),x=R(f);let d=-1;for(;++d<x.length;)E(e,"text",w);function w(n,s){let c=-1,t;for(;++c<s.length;){const a=s[c],r=t?t.children:void 0;if(p(a,r?r.indexOf(a):void 0,t))return;t=a}if(t)return A(n,s)}function A(n,s){const c=s[s.length-1],t=x[d][0],a=x[d][1];let r=0;const v=c.children.indexOf(n);let y=!1,l=[];t.lastIndex=0;let o=t.exec(n.value);for(;o;){const g=o.index,b={index:o.index,input:o.input,stack:[...s,n]};let i=a(...o,b);if(typeof i=="string"&&(i=i.length>0?{type:"text",value:i}:void 0),i===!1?t.lastIndex=g+1:(r!==g&&l.push({type:"text",value:n.value.slice(r,g)}),Array.isArray(i)?l.push(...i):i&&l.push(i),r=g+o[0].length,y=!0),!t.global)break;o=t.exec(n.value)}return y?(r<n.value.length&&l.push({type:"text",value:n.value.slice(r)}),c.children.splice(v,1,...l)):l=[n],v+l.length}}function R(e){const f=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const u=!e[0]||Array.isArray(e[0])?e:[e];let h=-1;for(;++h<u.length;){const p=u[h];f.push([k(p[0]),P(p[1])])}return f}function k(e){return typeof e=="string"?new RegExp(I(e),"g"):e}function P(e){return typeof e=="function"?e:function(){return e}}export{F as f};