var Y=Object.defineProperty;var V=(s,t,i)=>t in s?Y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var h=(s,t,i)=>(V(s,typeof t!="symbol"?t+"":t,i),i);import{j as e,a as g,r as u}from"./react-7luxY-ph.js";import{c as W}from"./react-dom-CT1HZngQ.js";import{R as Q}from"./react-image-gallery-Ll0mghTr.js";import{p as P,P as r}from"./prop-types-Nl1eov_5.js";/* empty css                  */import{c as L,b as k,n as X,a as Z,d as ee,l as te,e as E,f as C,g as b,h as ie,N as se}from"./@nextui-org-B4Kg5ey-.js";import{u as y}from"./react-responsive-_BgkYocO.js";import{G as m}from"./@mui-pGJix_pZ.js";import{F as O,a as A,I as M,b as ne,c as re,d as ae,e as oe}from"./react-icons-DYSZe8HC.js";import{M as le}from"./react-markdown-C4AhfTKS.js";import{r as ce}from"./remark-gfm-XnfW2BMk.js";import{r as me}from"./rehype-raw--fqtwM4z.js";import{h as de,d as he}from"./react-syntax-highlighter-amppM6z-.js";import{u as pe,a as ue,b as ge,c as v}from"./react-router-U9DzzpZd.js";import{B as xe}from"./react-router-dom-BB-xnVX2.js";import"./@babel-BG7E9IUl.js";import"./scheduler-CzFDRTuY.js";import"./@react-aria-B-TZIz0r.js";import"./@swc-h1AXYk7E.js";import"./@internationalized-Cg7NuFGP.js";import"./framer-motion-D_Pztj92.js";import"./react-remove-scroll-DwofSBos.js";import"./tslib-CDuPK5Eb.js";import"./react-remove-scroll-bar-DdwOUtNU.js";import"./react-style-singleton-BoEcxELk.js";import"./get-nonce-C-Z93AgS.js";import"./use-sidecar-Crw6PKh6.js";import"./use-callback-ref-5y4H_GnU.js";import"./tailwind-variants-ayMnMv5e.js";import"./tailwind-merge-Dc5vmgZ1.js";import"./@react-stately-Bo5eP4_W.js";import"./matchmediaquery-Bo10qaqu.js";import"./css-mediaquery-DcYbJrVh.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./shallow-equal-BQUY1Bas.js";import"./@emotion-Bj7usDE2.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./devlop-Cl3hj7Sz.js";import"./unified-C5t2ibU-.js";import"./bail-FqpXQuLt.js";import"./extend-DWCt-uIN.js";import"./is-plain-obj-C1gvLhAf.js";import"./trough-B_b8ryxu.js";import"./vfile-D1_tGWGU.js";import"./vfile-message-Bq256rVA.js";import"./unist-util-stringify-position-Ch_qCilz.js";import"./remark-parse-PFb__MD6.js";import"./mdast-util-from-markdown-BvD3T9Wt.js";import"./micromark-util-decode-numeric-character-reference-CNs1qBpV.js";import"./micromark-util-decode-string-strjl-tx.js";import"./decode-named-character-reference-C3-224fz.js";import"./micromark-util-normalize-identifier-C9ANKk3v.js";import"./micromark-Cp9IgYwT.js";import"./micromark-util-combine-extensions-Bka6Sc1c.js";import"./micromark-util-chunked-DrRIdSP-.js";import"./micromark-factory-space-Bzki161k.js";import"./micromark-util-character-Cn8n62xE.js";import"./micromark-core-commonmark-D5SA4aCp.js";import"./micromark-util-classify-character-72LGz2mN.js";import"./micromark-util-resolve-all-PQCKh0dx.js";import"./micromark-util-subtokenize-BcSgYDy4.js";import"./micromark-factory-destination-Dhx6mInV.js";import"./micromark-factory-label-Dm2aTycn.js";import"./micromark-factory-title-B-Q3zsGF.js";import"./micromark-factory-whitespace-DxqLJ6OX.js";import"./micromark-util-html-tag-name-DbKNfynz.js";import"./mdast-util-to-string-C_aolqmU.js";import"./remark-rehype-DNC-thMq.js";import"./mdast-util-to-hast-DWFPJkWc.js";import"./@ungap-DDJC10qW.js";import"./micromark-util-sanitize-uri-B1mpwOqX.js";import"./unist-util-position-60F3QETU.js";import"./trim-lines-D8znQY54.js";import"./unist-util-visit-BEqpjG-T.js";import"./unist-util-visit-parents-BzuIhZFT.js";import"./unist-util-is-D9KQvrmg.js";import"./hast-util-to-jsx-runtime-YXVPut2A.js";import"./comma-separated-tokens-Dw-VBL9A.js";import"./property-information-DdDptki-.js";import"./space-separated-tokens-D7QSIrTI.js";import"./style-to-object-CVLTvUOF.js";import"./inline-style-parser-D--Rb2MU.js";import"./hast-util-whitespace-D4Wp6AEg.js";import"./estree-util-is-identifier-name-BgBfM8ME.js";import"./html-url-attributes-D46m5wfe.js";import"./micromark-extension-gfm-DKDoHsnq.js";import"./micromark-extension-gfm-autolink-literal-DLPcB62U.js";import"./micromark-extension-gfm-footnote-CfuxHbgG.js";import"./micromark-extension-gfm-strikethrough-DRvqaQ9w.js";import"./micromark-extension-gfm-table-DL38QGqH.js";import"./micromark-extension-gfm-task-list-item-CQ-9H0He.js";import"./mdast-util-gfm-Bl-XQC5F.js";import"./mdast-util-gfm-autolink-literal-CvbBA4TR.js";import"./ccount-c2V3InAJ.js";import"./mdast-util-find-and-replace-FYaswp1Z.js";import"./mdast-util-gfm-footnote-DDcgsGKB.js";import"./mdast-util-gfm-strikethrough-Cj9qKt6Q.js";import"./mdast-util-gfm-table-D2quw1JG.js";import"./markdown-table-De3aUdCo.js";import"./mdast-util-to-markdown-axH5eqwW.js";import"./longest-streak-CtXnX3Xp.js";import"./mdast-util-phrasing-C4Vf_nAi.js";import"./mdast-util-gfm-task-list-item-CbpHDP9z.js";import"./hast-util-raw-0ilyNlsR.js";import"./html-void-elements-CkdplsNl.js";import"./parse5-Bfc7-xf9.js";import"./entities-CCBHeVIA.js";import"./web-namespaces-bsVAaBS1.js";import"./zwitch-C2o2j-tx.js";import"./hast-util-from-parse5-C-SASldK.js";import"./vfile-location-DSsxp4eW.js";import"./hastscript-D9_WlGpv.js";import"./hast-util-parse-selector-TXfch5wI.js";import"./hast-util-to-parse5-Um_HjfjX.js";import"./refractor-lt0Mb1Xq.js";import"./xtend-CeaPpq3n.js";import"./@remix-run-DhJqR0mU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const fe=e.jsx("polyline",{points:"15 18 9 12 15 6"}),je=e.jsx("polyline",{points:"9 18 15 12 9 6"}),be=e.jsx("polyline",{points:"6 15 12 9 18 15"}),ye=e.jsx("polyline",{points:"6 9 12 15 18 9"}),ve=e.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}),we=e.jsx("path",{d:"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}),ke=e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"}),Se=e.jsxs(g.Fragment,{children:[e.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),e.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),Ne={left:fe,right:je,top:be,bottom:ye,maximize:ve,minimize:we,play:ke,pause:Se},Ie={strokeWidth:1,viewBox:"0 0 24 24"},_=s=>{const{strokeWidth:t,viewBox:i,icon:a}={...Ie,...s};return e.jsx("svg",{className:"image-gallery-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:i,fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Ne[a]})};_.propTypes={strokeWidth:P.number,viewBox:P.string,icon:P.oneOf(["left","right","top","bottom","maximize","minimize","play","pause"]).isRequired};const Ce=g.memo(({disabled:s,onClick:t})=>e.jsx("button",{type:"button",className:"image-gallery-icon image-gallery-left-nav",disabled:s,onClick:t,"aria-label":"Previous Slide",children:e.jsx(_,{icon:"left",className:"scaled-svg"})})),Pe=g.memo(({disabled:s,onClick:t})=>e.jsx("button",{type:"button",className:"image-gallery-icon image-gallery-right-nav",disabled:s,onClick:t,"aria-label":"Next Slide",children:e.jsx(_,{icon:"right",className:"scaled-svg"})})),Re=({items:s})=>{const t=s.map(l=>{const c={...l};return/\.(png|jpg|jfif|gif)$/i.test(c.original)?c.renderItem=a:c.renderItem=n,c});function i(l){return e.jsx("img",{src:l.thumbnail,alt:""})}function a(l){return e.jsx("div",{className:"image-gallery-image",children:e.jsx("img",{src:l.original,className:"custom-image",alt:""})})}function n(l){return e.jsx("div",{className:"image-gallery-image",children:e.jsx("iframe",{className:"iframe-video",src:l.embedUrl,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}const o={items:t,showPlayButton:!1,showBullets:!0,thumbnailPosition:"bottom",renderThumbInner:i,renderLeftNav:(l,c)=>e.jsx(Ce,{onClick:l,disabled:c}),renderRightNav:(l,c)=>e.jsx(Pe,{onClick:l,disabled:c})};return e.jsx(Q,{...o})},Te=({project:s})=>{const t=y({query:"(max-width: 575px)"}),i=o=>{window.open(o,"_blank")},n={position:"absolute",width:"100%",height:"100vh",backgroundImage:`url(${s.backgroundImage}), linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"blur(10px)",marginTop:"1vh",zIndex:-2};return e.jsxs("div",{children:[e.jsx("div",{style:n}),e.jsx(m,{className:"rowStyle",columnSpacing:{xs:2,md:5},paddingTop:{xs:"5vh"},marginTop:{xs:"1.8vh"},rowSpacing:{xs:0},container:!0,display:"flex",height:"100vh",marginBottom:0,justifyContent:"center",alignItems:"center",children:e.jsxs(m,{container:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:[e.jsx(m,{className:" justify-center text-center w-full md:w-1/2 max-w-xl",justifyContent:"center",alignItems:"top",children:e.jsx(Re,{items:s.galeryItems})}),e.jsxs(m,{container:!0,className:"text-justify  w-full md:w-1/2 text-sm xl:text-base",children:[e.jsx(m,{xs:12,children:!t&&e.jsx("h1",{children:s.title})}),e.jsx(m,{xs:12,children:e.jsx(m,{className:t?"flex justify-center flex gap-2":"flex gap-2",marginTop:1,children:s.tags.map((o,l)=>e.jsx(L,{color:"default",children:o},l))})}),e.jsx(m,{xs:12,marginTop:2,marginBottom:t?0:2,children:e.jsx("p",{children:s.description})}),e.jsx(m,{xs:12,children:e.jsxs("div",{className:"flex gap-2",children:[Object.prototype.hasOwnProperty.call(s,"itch")&&e.jsx(k,{color:"danger",variant:"bordered",startContent:e.jsx(O,{}),onPress:()=>{i(s.itch)},children:"itch.io"}),Object.prototype.hasOwnProperty.call(s,"github")&&e.jsx(k,{color:"white",variant:"bordered",startContent:e.jsx(A,{}),onPress:()=>{i(s.github)},children:"github"}),Object.prototype.hasOwnProperty.call(s,"more")&&e.jsx(k,{color:"warning",variant:"bordered",startContent:e.jsx(M,{}),onPress:()=>{i(s.more)},children:"more"})]})})]})]})})]})},Le=[{name:"Home",path:"/"},{name:"CV",path:"cv"}];function _e({primary:s=0}){return e.jsx(X,{isBordered:!0,children:e.jsx(Z,{children:Le.map((t,i)=>{const a=s===i?"primary":"foreground";return e.jsx(ee,{className:"items-center mt-3",children:e.jsx(te,{color:a,href:t.path,children:t.name})},i)})})})}function B({element:s}){const t=y({query:"(max-width: 575px)"});return e.jsxs(E,{children:[e.jsxs(C,{className:"grid grid-cols-3 md:grid-cols-4",children:[e.jsx("div",{className:"image-container ",children:e.jsx("img",{radius:"sm",src:s.image})}),e.jsxs("div",{className:"flex flex-col col-span-2 md:col-span-3 ml-2    items-start",children:[e.jsx("div",{className:"text-sm md:text-large font-bold mt-2  m-0",children:s.title1}),e.jsx("div",{className:"text-xs md:text-base font-semibold text-foreground/90  m-0",children:s.title2}),e.jsx("p",{className:"text-xs text-foreground/80  m-0",children:s.date}),e.jsx("p",{className:"text-xs text-foreground/80 m-0 ",children:s.location}),!t&&e.jsx(b,{}),!t&&e.jsxs("div",{className:"text-justify",children:[" ",s.description]})]})]}),t&&e.jsx(C,{className:"grid grid-cols-1 md:grid-cols-2 gap-0",children:e.jsxs("div",{className:"text-justify",children:[s.description,"  "]})})]})}const ze=[{description:"I designed and implemented NPC behaviors utilizing behavior trees, enabling dynamic interactions such as mantling using Nav Link Proxies and NPC following of the player or predefined paths. I developed a crowd system using the MassEntity framework, enhancing it by integrating an accessory and animation system for crowd agents. I utilized smart objects to enhance crowd interactions, allowing crowds to identify, claim, and use objects such as benches. Additionally, I analyzed and addressed performance bottlenecks within the crowd systems, resulting in significant optimization and improved frame rates.",image:"img/RR.jfif",title1:"Game AI Programmer",title2:"RichardRendering · Freelance",date:"Apr 2023 - Present",location:"Remote"},{description:"I conduct research in machine learning, specializing in deep reinforcement learning (RL) and deep learning for character animation. My work involves both physics-based and kinematic characters. I develop solutions to avoid full-body collisions in environments with multiple characters, utilizing Isaac Gym as the physical simulation and reinforcement learning tool.",image:"img/aalto.png",title1:"Graduate Research Assistant",title2:"Aalto University Department of Computer Science · Full-time",date:"Apr 2024 - Jun 2024",location:"On-site"}];function Ee(){return e.jsxs(m,{className:"object-contain  flex flex-col  items-center space-x-2 md:space-x-5 space-y-1",children:[e.jsx(m,{className:"object-contain justify-center text-center w-full h-full",children:e.jsx("h1",{children:"Experience"})}),ze.map((s,t)=>e.jsx(m,{className:"object-contain justify-center   w-full h-full",children:e.jsx(B,{element:s})},t))]})}const Oe=[{description:"Master Thesis: Multi-character collision avoidance",image:"img/aalto.png",title1:"Aalto University",title2:"Master's degree, Computer Science",date:"Aug 2022 - Present",location:"Espoo, Finland"},{description:"Thesis. Analysis of the animation graph in Unreal Engine and implementation of an animation system using OpenGL",image:"img/iut.jfif",title1:"Isfahan University of Technology",title2:"Bachelor of Science, Computer Engineering",date:"2018 - 2022",location:"GPA: 18.13/20"}];function Ae(){return e.jsxs(m,{className:"object-contain  flex flex-col  items-center space-x-2 md:space-x-5 space-y-1",children:[e.jsx(m,{className:"object-contain justify-center text-center w-full h-full",children:e.jsx("h1",{children:"Education"})}),Oe.map((s,t)=>e.jsx(m,{className:"object-contain justify-center   w-full h-full",children:e.jsx(B,{element:s})},t))]})}function Me({SummaryText:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Summary"}),e.jsx("p",{children:s})]})}function Be({AwardsText:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Awards"}),e.jsx("ul",{className:"m-0 pl-1",children:s.map((t,i)=>e.jsxs("li",{children:[e.jsxs("div",{className:"flex items-start  ",children:[e.jsx("div",{className:"mt-1 mr-2",children:e.jsx(ne,{})}),e.jsx("div",{className:"text-sm md:text-large font-bold",children:t.title})]}),e.jsx("div",{children:e.jsx("div",{className:"text-xs md:text-base font-semibold text-foreground/90 ml-8 mb-3",children:t.text()})})]},i))})]})}function Ue({mediaList:s}){const t=i=>{window.open(i,"_blank")};return e.jsx("div",{className:"flex gap-2 justify-center",children:s.map((i,a)=>e.jsx("button",{style:{fontSize:"20px"},onClick:()=>t(i.link),children:e.jsx(re.Provider,{value:{className:"contactIcon"},children:e.jsx("div",{children:i.icon})})},a))})}const Ge=[{icon:e.jsx(O,{}),link:"https://naminaziri.itch.io/"},{icon:e.jsx(A,{}),link:"https://github.com/NamiNaziri/"},{icon:e.jsx(ae,{}),link:"https://www.linkedin.com/in/naminaziri/"},{icon:e.jsx(oe,{}),link:"https://github.com/NamiNaziri/"}];function He(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid justify-center",children:[e.jsx("div",{className:"pesonal-image-container",children:e.jsx("img",{radius:"sm",src:"img/2.jpg"})}),e.jsx("div",{className:"text-sm md:text-large text-center font-semibold  m-0",children:"Nami Naziri"}),e.jsx("div",{className:"text-xs md:text-sm  text-center    mb-2",children:"Game Programmer"}),e.jsx(Ue,{mediaList:Ge})]})})}function w(){return e.jsx("hr",{className:"custom-hr"})}const De=[{Title:"Programming",Set:["C/C++","Python","JavaScrip","MATLAB","C#","SQL"]},{Title:"Software",Set:["Unreal Engine","GitHub","Perforce","MATLAB","Docker"]},{Title:"AI",Set:["Behavior tree","State Tree","Mass AI"]},{Title:"Animation",Set:["State Machines","Blend Spaces","Animation Blueprint","IK"]}];function Ke({SkillsText:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Skills"}),e.jsx(b,{}),De.map((t,i)=>e.jsxs("div",{className:"ml-10	",children:[e.jsx("h4",{children:t.Title}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.Set.map((a,n)=>e.jsxs(L,{radius:"sm",children:[" ",a," "]},n))}),e.jsx(b,{})]},i))]})}function Fe({CertificateList:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Certificates"}),e.jsx("ul",{className:"m-0 pl-1",children:s.map((t,i)=>e.jsx("li",{children:e.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:e.jsx("div",{className:"text-sm md:text-large font-bold",children:t.text})})},i))})]})}const qe=[{title:"Kumma Gallery Showcase – Lost Radiance (Games Now! Game Jam 2023)",text:()=>e.jsxs("div",{children:["Developed Lost Radiance, which was selected by industry professionals to be showcased at Kumma Gallery.",e.jsx("br",{}),e.jsx("strong",{children:"Judges:"})," Essi Jukkala (",e.jsx("strong",{children:"Supercell"}),"), Eevi Korhonen (",e.jsx("strong",{children:"Housemarque"}),"), Tatu Laine (",e.jsx("strong",{children:"Futureplay"}),"), and Jussi Loukiainen (",e.jsx("strong",{children:"Platonic Partnership"}),")",e.jsx("br",{}),e.jsx("strong",{children:"Feedback:"})," Recognized for its simple yet engaging mechanics and strong visual presentation.",e.jsx("br",{}),e.jsx("a",{href:"https://www.instagram.com/p/C7cN6jRtFZY/?img_index=1",target:"_blank",rel:"noopener noreferrer",children:"More"})]})},{title:"Unreal Engine Programming Challenge – Space Invaders",text:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Space Invaders game selected as one of the top 3 entries. The code structure was reviewed by Chris Rock, Lead Gameplay Programmer at Neon Koi(PlayStation)."}),e.jsx("a",{href:"https://gamesjobfair.com/programming-challenges-unrealengine-unity",target:"_blank",rel:"noopener noreferrer",children:"More"})]})},{title:"Finland Scholarship for Master's Studies",text:()=>e.jsx("div",{children:"Awarded a merit-based scholarship covering full tuition fees and a €5000 grant for living expenses."})}],Je=[{text:"Winner of Unreal Engine Programming Challenge - Game Job Fair - Spring 2023",link:"/img/spaceInvader/Nami_Naziri_UE_Challenge.png"}];function $e(){const s="Hey there, my name is Nami, and I’m currently pursuing my Master's in Computer Science at Aalto University.I’m proficient in Unreal Engine and enjoy exploring new concepts related to game development, particularly where gameplay, AI, and animation intersect.My experience includes working with animation components such as blending, layering, and state machines, as well as AI components such as behavior trees, smart objects, state trees, environment query systems, and AI perception.";return u.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),e.jsx(m,{className:"rowStyle",rowSpacing:{xs:0},container:!0,marginTop:10,marginBottom:0,justifyContent:"center",alignItems:"center",children:e.jsx(m,{container:!0,xs:10,sm:10,md:10,lg:10,xl:10,children:e.jsxs(m,{className:" text-justify md:text-justify w-full",justifyContent:"center",alignItems:"top",children:[e.jsx(He,{}),e.jsx(w,{}),e.jsx(Me,{SummaryText:s}),e.jsx(w,{}),e.jsx(Be,{AwardsText:qe}),e.jsx(w,{}),e.jsx(Ke,{}),e.jsx(w,{}),e.jsx(Ee,{}),e.jsx(b,{}),e.jsx(Ae,{}),e.jsx(b,{}),e.jsx(Fe,{CertificateList:Je}),e.jsx("div",{className:"m-8"})]})})})}const Ye=({markdownObject:s})=>{const[t,i]=u.useState(null);return console.log(s),u.useEffect(()=>{fetch(s.link).then(a=>a.text()).then(a=>i(a))},[]),e.jsx("div",{className:"grid grid-cols-6 mt-2.5	",children:e.jsx("div",{className:"col-start-2 col-span-4 ",children:t?e.jsx(le,{remarkPlugins:[[ce]],children:t,rehypePlugins:[me],components:{code(a){const{children:n,className:o,node:l,...c}=a,p=/language-(\w+)/.exec(o||"");return p?e.jsx(de,{...c,PreTag:"div",children:String(n).replace(/\n$/,""),language:p[1],style:he}):e.jsx("code",{...c,className:o,children:n})}}}):e.jsx("div",{className:"h-screen bg-black"})})})},f=g.createContext({number:0,count:0,subscribe:null,unsubscribe:null,goto:null,back:null,next:null});class S extends u.PureComponent{constructor(t,i){super(t,i),this.slides=[],this.state={slide:null,translateY:0,pageYOffset:0,prevScrollPos:0,offsetHeight:0,count:0,number:0,resetScroll:!1,instantScroll:!1},this.ticking=!1,this.fullPageHeight=0,this.viewportHeight=0,this.subscribe=this.subscribe.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.update=this.update.bind(this),this.getIndex=this.getIndex.bind(this),this.handleScroll=this.handleScroll.bind(this),this.handleResize=this.handleResize.bind(this),this.handleKeys=this.handleKeys.bind(this),this.driverRef=g.createRef(),this.warperRef=g.createRef(),this.fullpageRef=g.createRef()}componentDidMount(){this.handleResize(),this.setState({slide:this.slides[0]}),typeof window<"u"&&(window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)),typeof document<"u"&&document.addEventListener("keydown",this.handleKeys)}componentWillUnmount(){typeof window<"u"&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)),typeof document<"u"&&document.removeEventListener("keydown",this.handleKeys)}getIndex(t){return this.slides.indexOf(t)}subscribe(t){const i=[...this.slides,t];return this.slides=i.sort((a,n)=>{const o=a.el.current.offsetTop,l=n.el.current.offsetTop;return o-l}),this.setState({count:this.slides.length}),this.ticking=!1,this.handleResize(),t}unsubscribe(t){return this.slides=this.slides.filter(i=>i.el!==t.el),this.setState({count:this.slides.length}),this.handleResize(),this.handleScroll(),t}handleScroll(){const{resetScroll:t,translateY:i}=this.state;return console.log("handle scroll"),this.disableScroll?(console.log("disable scroll"),!1):this.lockScroll?(window.scrollTo({top:i*-1,left:0,behavior:"instant"}),!1):(this.ticking||(console.log("ticking"),window.requestAnimationFrame(()=>{t&&(console.log("reset scroll"),window.scrollTo(0,i*-1));const{prevScrollPos:a}=this.state,n=window.pageYOffset||0,l=n-a>0?.2:.8,c=n;this.setState({pageYOffset:n,prevScrollPos:c,resetScroll:!1});const p=this.slides.find(d=>{const x=d.el.current;return n<x.offsetTop+x.offsetHeight*l});this.goto(p),this.ticking=!1})),this.ticking=!0,!0)}handleResize(){this.ticking||window.requestAnimationFrame(()=>{this.viewportHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.fullPageHeight=this.fullpageRef.current.clientHeight,this.driverRef.current.style.height=`${this.fullPageHeight}px`,this.ticking=!1}),this.ticking=!0}handleKeys(t){const{keyboardShortcut:i}=this.props;return i?t.keyCode===33||t.keyCode===37||t.keyCode===38?(t.preventDefault(),t.shiftKey?this.first(t):this.back(t)):t.keyCode===34||t.keyCode===39||t.keyCode===40?(t.preventDefault(),t.shiftKey?this.last(t):this.next(t)):t.keyCode===35?(t.preventDefault(),this.last(t)):t.keyCode===36?(t.preventDefault(),this.first(t)):!0:!0}update(){return this}goto(t,i=!1,a=!1){const{slide:n}=this.state,{transitionTiming:o,onChange:l,scrollLockTiming:c}=this.props;if(n!==t){const p=Math.max((this.fullPageHeight-this.viewportHeight)*-1,t.el.current.offsetTop*-1),{onHide:d}=n.props;d&&typeof d=="function"&&setTimeout(()=>d(p),o),this.lockScroll=!0,console.log(a),a&&(this.disableScroll=!0,window.scrollTo({top:p*-1,left:0,behavior:"instant"})),this.setState({slide:t,number:this.getIndex(t),translateY:p,offsetHeight:t.el.current.offsetHeight,resetScroll:i}),setTimeout(()=>{this.disableScroll=!1,this.lockScroll=!1},c);const{onShow:x}=t.props;x&&typeof x=="function"&&x(p),typeof l=="function"&&l(this.state)}return t}back(){const{number:t}=this.state,i=Math.max(0,t-1);this.goto(this.slides[i],!0,!0)}next(){const{length:t}=this.slides,{number:i}=this.state,a=Math.min(t-1,i+1);this.goto(this.slides[a],!0,!0)}first(){this.goto(this.slides[0],!0,!0)}last(){this.goto(this.slides[this.slides.length-1],!0,!0)}render(){const{children:t,style:i,className:a,transitionTiming:n,scrollLockTiming:o}=this.props,{translateY:l,pageYOffset:c,prevScrollPos:p,offsetHeight:d,number:x,count:F,resetScroll:rt,instantScroll:at}=this.state;return e.jsxs(f.Provider,{value:{translateY:l,pageYOffset:c,prevScrollPos:p,offsetHeight:d,number:x,count:F,subscribe:this.subscribe,unsubscribe:this.unsubscribe,update:this.update,goto:(q,J,$)=>this.goto(q,J,$),back:this.back,next:this.next,getIndex:this.getIndex,transitionTiming:n,scrollLockTiming:o,className:a,style:i,warperRef:this.warperRef,fullpageRef:this.fullpageRef,slides:this.slides},children:[e.jsx("div",{name:"Driver",style:{position:"relative"},ref:this.driverRef}),t]})}}h(S,"contextType",f),h(S,"propTypes",{children:r.node.isRequired,transitionTiming:r.number,scrollLockTiming:r.number,style:r.objectOf(r.oneOfType([r.number,r.string,r.bool])),className:r.string,onChange:r.func,keyboardShortcut:r.bool}),h(S,"defaultProps",{transitionTiming:700,scrollLockTiming:700,style:{position:"fixed",top:0,left:0,right:0},className:"",onChange:null,keyboardShortcut:!0});class N extends u.PureComponent{render(){const{children:t,style:i,className:a}=this.props;return e.jsx(f.Consumer,{children:n=>e.jsx("div",{name:"Warper",style:n.style,ref:this.warperRef,children:e.jsx("div",{name:"Inner",className:a,style:{transition:`transform ${n.transitionTiming}ms cubic-bezier(0.645, 0.045, 0.355, 1.000)`,...i,transform:`translate3D(0, ${n.translateY}px, 0)`},ref:n.fullpageRef,children:t})})})}}h(N,"contextType",f),h(N,"propTypes",{children:r.node.isRequired,className:r.string,style:r.objectOf(r.oneOfType([r.number,r.string,r.bool]))}),h(N,"defaultProps",{className:"",style:{position:"absolute",left:0,right:0}});const z=g.createContext();class j extends u.PureComponent{constructor(t,i){super(t,i),this.sectionRef=g.createRef()}componentDidMount(){const{subscribe:t}=this.context;this.el=this.sectionRef,t(this)}componentWillUnmount(){const{unsubscribe:t}=this.context;t(this)}render(){const{children:t,height:i,style:a,className:n}=this.props,{getIndex:o}=this.context;return this.index=o(this),e.jsx(z.Provider,{value:{index:this.index},children:e.jsx("section",{className:n,style:{height:i,...a},ref:this.sectionRef,children:t})})}}h(j,"contextType",f),h(j,"defaultProps",{height:"100vh",style:{},className:"",onShow:null,onHide:null}),h(j,"propTypes",{children:r.node.isRequired,height:r.string,style:r.objectOf(r.oneOfType([r.number,r.string,r.bool])),className:r.string,onShow:r.func,onHide:r.func}),h(j,"Number",({style:t={}})=>e.jsx(z.Consumer,{children:i=>e.jsx("span",{style:t,children:`${i.index+1}`})}));class I extends u.PureComponent{render(){const{style:t,itemStyle:i,reverse:a=!1}=this.props,{number:n,slides:o,transitionTiming:l}=this.context,c=p=>{const{goto:d}=this.context;d(p,!1,!0)};return e.jsx("div",{style:{position:"fixed",height:"100vh",zIndex:100,top:0,right:0,listStyleType:"none",display:"flex",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",paddingRight:"1em",...t},children:o.map((p,d)=>e.jsx("div",{children:e.jsx("div",{style:{borderRadius:"50%",height:n===d?14:10,width:n===d?14:10,margin:n===d?3:5,backgroundColor:a?"white":"black",opacity:n===d?1:.5,transition:`all ${l*.5}ms ease-in-out`,...i},onClick:()=>c(p),onKeyPress:()=>c(p),role:"button",tabIndex:"-1","aria-label":`Slide ${d}`,children:e.jsx("span",{style:{display:"none"},children:`slide number ${d}`})})},d.toString()))})}}h(I,"contextType",f),h(I,"defaultProps",{style:{},itemStyle:{},reverse:!1}),h(I,"propTypes",{style:r.objectOf(r.oneOfType([r.number,r.string,r.bool])),itemStyle:r.objectOf(r.oneOfType([r.number,r.string,r.bool])),reverse:r.bool});class R extends u.PureComponent{render(){const{style:t}=this.props;return e.jsx(f.Consumer,{children:i=>e.jsx("span",{style:t,children:i.count})})}}h(R,"contextType",f),h(R,"propTypes",{style:r.objectOf(r.oneOfType([r.number,r.string,r.bool]))}),h(R,"defaultProps",{style:{}});const Ve=({children:s})=>{const t=y({query:"(max-width: 575px)"});return e.jsxs(S,{transitionTiming:t?400:550,scrollLockTiming:t?500:250,desktopForceStep:!0,children:[e.jsx(I,{itemStyle:{backgroundColor:"red"}}),e.jsx(N,{children:s})]})},We={title:"Lost Radiance",description:"This game is created using Unreal Engine 5 for the Games Now Game Jam, where the theme 'missing' takes center stage. Dive into a cosmic odyssey where light has gone astray, and you find yourself as the new star amidst the void. As shadows and darkness compel other stars to assail you, your survival becomes crucial. Beware, for if you falter, the cosmos will plunge into an everlasting darkness. Navigate this celestial challenge, illuminate the universe, and stave",tags:["C++","Blueprint","Unreal Engine"],backgroundImage:"/img/lostRadiance.jpg",itch:"https://naminaziri.itch.io/lost-radiance",github:"https://github.com/lost-radiance",more:"https://naminaziri.itch.io/lost-radiance",galeryItems:[{original:"img/s.png",thumbnail:"img/s.png"},{original:"img/lostRadiance.jpg",thumbnail:"img/lostRadiance.jpg"},{original:"https://www.youtube.com/embed/dR0P4tOlGsU",thumbnail:"img/lr_thumnail.jpg",embedUrl:"https://www.youtube.com/embed/dR0P4tOlGsU"},{original:"img/LostRadiance/LR_e1.jpg",thumbnail:"img/LostRadiance/LR_e1.jpg"},{original:"img/LostRadiance/LR_e2.jpg",thumbnail:"img/LostRadiance/LR_e2.jpg"},{original:"img/LostRadiance/LR_e3.jpg",thumbnail:"img/LostRadiance/LR_e3.jpg"}]},Qe={title:"Space Invaders",description:"This is a space invaders clone game made using the Unreal engine as an entry for the 'Games Job Fair Spring 2023 - Unreal Engine Programming Challenge'.",tags:["C++","Blueprint","Unreal Engine"],backgroundImage:"/img/spaceInvader/background.png",itch:"https://naminaziri.itch.io/space-invaders",github:"https://github.com/NamiNaziri/SpaceInvaders",more:"https://www.youtube.com/watch?v=u3x7nDlHT6s&t=2168s",galeryItems:[{original:"img/spaceInvader/SpaceInvaders.gif",thumbnail:"img/spaceInvader/SI_thumbnail.png"},{original:"img/spaceInvader/SI_2.png",thumbnail:"img/spaceInvader/SI_2.png"},{original:"https://www.youtube.com/embed/JWBiKHRHcaw",thumbnail:"img/spaceInvader/SI_yt.jpg",embedUrl:"https://www.youtube.com/embed/JWBiKHRHcaw"},{original:"img/spaceInvader/Nami_Naziri_UE_Challenge.png",thumbnail:"img/spaceInvader/Nami_Naziri_UE_Challenge.png"},{original:"img/spaceInvader/si_review.png",thumbnail:"img/spaceInvader/si_review.png"},{original:"img/spaceInvader/SI_1.png",thumbnail:"img/spaceInvader/SI_1.png"}]},U={title:"Dual Quaternion Skinning ",description:"Implementation of Dual Quaternion Skinning (DQS) to address candy wrapping issue with other skinning techniques like Linear Blend Skinning.",tags:["C++","OpenGL","2023"],link:"/Dual-Quaternion-Skinning",img:"img/DQS.gif"},G={title:"Animation System",description:"An application for playing and blending animations created from scratch using OpenGL and C++.",tags:["C++","OpenGL","2022"],link:"https://github.com/NamiNaziri/Skeletal-Animation",img:"img/animation.gif"},H={title:"Jacobian Inverse Kinematics",description:"An implementation of inverse kinematics that utilizes the Jacobian matrix.",tags:["C++","OpenGL","2023"],link:"/inverse-kinematics",img:"img/IK.gif"},D={title:"Mesh Import and Simplification",description:"A mesh importer and surface simplification using quadric error metrics",tags:["C++","OpenGL","2023"],link:"https://github.com/NamiNaziri/MeshSimplifier",img:"img/simplifier.gif"},K={title:"Unreal Prototypes",description:"This is a compilation of various prototypes I have developed using Unreal Engine.",tags:["Unreal Engine","C++","Blueprint","2021-2023"],link:"/Unreal-Prototypes",img:"img/BossAI_V2.jpg"};function Xe({project:s}){const t=i=>{window.open(i,"_blank")};return e.jsx("div",{className:"backdrop-blur-3xl samll-project-container",children:e.jsxs(E,{children:[e.jsxs(ie,{className:"pb-0 pt-2 px-4 flex-col items-center",children:[e.jsx("h4",{className:"font-bold text-large",children:s.title}),e.jsx("div",{className:"flex gap-2",children:s.tags.map((i,a)=>e.jsx(L,{color:"default",children:i},a))})]}),e.jsx(C,{className:"flex items-center",children:e.jsx("div",{className:"project-image-container",children:e.jsx("img",{radius:"sm",src:s.img})})}),e.jsxs(C,{className:"items-center gap-0",children:[e.jsx("div",{className:"text-justify",children:s.description}),e.jsx(k,{className:"flex w-full mt-4 min-h-10",variant:"bordered",startContent:e.jsx(M,{}),onPress:()=>{t(s.link)},children:"more"})]})]})})}function T({projects:s,index:t}){const i=y({query:"(max-width: 575px)"});console.log(t);const n={position:"absolute",width:"100%",height:"100vh",backgroundImage:`url(${`/img/bg${t}.jpg`}), linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",filter:"blur(10px)",marginTop:"1vh",zIndex:-2},o=i?"grid-rows-1":"grid-cols-2";return e.jsxs(m,{className:"rowStyle",columnSpacing:{xs:2,md:5},paddingTop:{xs:"5vh"},marginTop:{xs:"1.8vh"},rowSpacing:{xs:0},container:!0,display:"flex",height:"100vh",marginBottom:0,justifyContent:"center",alignItems:"center",children:[e.jsx("div",{style:n}),e.jsx("div",{className:`grid ${o} gap-16  mx-10 md:mx-20 place-items-center`,children:s.map((l,c)=>e.jsx(Xe,{project:l},c))})]})}const Ze=[We,Qe],et=[[K],[G],[U],[H],[D]],tt=[[K,G],[U,H],[D]];function it(){const s=y({query:"(max-width: 575px)"});return u.useState(5),u.useState(0),e.jsx("div",{children:e.jsxs(Ve,{children:[Ze.map((t,i)=>e.jsx(j,{children:e.jsx(Te,{project:t})},i)),s&&et.map((t,i)=>e.jsx(j,{children:e.jsx(T,{projects:t,index:i})},i+50)),!s&&tt.map((t,i)=>e.jsx(j,{children:e.jsx(T,{projects:t,index:i})},i+100))]})})}const st=[{title:"Unreal Prototypes",link:"/blogs/2023-05-23-Unreal-Prototypes.md",path:"/Unreal-Prototypes"},{title:"Dual Quaternion Skinning",link:"/blogs/2023-03-22-Dual-quaternion-skinning.md",path:"/Dual-Quaternion-Skinning"},{title:"Inverse Kinematics",link:"/blogs/2023-03-14-Inverse-Kinematics.md",path:"/inverse-kinematics"}],nt=()=>{const[s,t]=u.useState(0),i=pe(),a=ue();return u.useEffect(()=>{switch(console.log(a.pathname),a.pathname){case"/":t(0);break;case"/cv":t(1);break;case"/contact":t(2);break;default:t(-1);break}},[a]),e.jsx(se,{navigate:i,children:e.jsxs("main",{className:"dark text-foreground bg-background",children:[e.jsx(_e,{primary:s}),e.jsxs(ge,{children:[e.jsx(v,{path:"/",element:e.jsx(it,{})}),e.jsx(v,{path:"/cv",element:e.jsx($e,{})}),e.jsx(v,{path:"/contact",element:e.jsx(T,{})}),st.map((n,o)=>e.jsx(v,{path:n.path,element:e.jsx(Ye,{markdownObject:n})},o))]})]})})};W.createRoot(document.getElementById("root")).render(e.jsx(xe,{children:e.jsx(nt,{})}));
