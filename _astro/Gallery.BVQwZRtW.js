import{r as o}from"./index.DhYZZe0J.js";/* empty css                       */var N={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=o,L=Symbol.for("react.element"),O=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,M=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function b(t,r,c){var a,l={},d=null,i=null;c!==void 0&&(d=""+c),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(i=r.ref);for(a in r)R.call(r,a)&&!P.hasOwnProperty(a)&&(l[a]=r[a]);if(t&&t.defaultProps)for(a in r=t.defaultProps,r)l[a]===void 0&&(l[a]=r[a]);return{$$typeof:L,type:t,key:d,ref:i,props:l,_owner:M.current}}m.Fragment=O;m.jsx=b;m.jsxs=b;N.exports=m;var e=N.exports;const $=({showModal:t,closeModal:r})=>e.jsx("div",{className:`modal ${t?"active":""}`,onClick:r,children:e.jsxs("div",{className:"modal-content",onClick:c=>c.stopPropagation(),children:[e.jsx("span",{className:"close",onClick:r,children:"×"}),e.jsx("img",{src:"logo.png",alt:"Logo",className:"logo"}),e.jsx("p",{children:"Ofrecemos servicios de corte y grabado láser de alta calidad."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Trabajamos con MDF"}),e.jsx("li",{children:"Grabado en termos"}),e.jsx("li",{children:"Diseños personalizados"}),e.jsx("li",{children:"Venta a menudeo y mayoreo"})]}),e.jsx("a",{href:"https://www.instagram.com/cacheshoop",target:"_blank",rel:"noopener noreferrer",children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"https://wa.me/3318444445",target:"_blank",rel:"noopener noreferrer",children:e.jsx("i",{className:"fab fa-whatsapp"})})]})}),v=20,G=()=>{const[t,r]=o.useState([]),[c,a]=o.useState([]),[l,d]=o.useState(""),[i,p]=o.useState(null),[u,y]=o.useState(!1),[x,f]=o.useState(1),[j,g]=o.useState(!1),[S,C]=o.useState("");o.useEffect(()=>{(async()=>{try{const h=await(await fetch("/images.json")).json();r(h),a(h.slice(0,v))}catch(n){console.error("Error fetching images:",n)}})()},[]),o.useEffect(()=>{const s=t.filter(n=>n.public_id.toLowerCase().includes(l.toLowerCase()));a(s.slice(0,x*v))},[l,x,t]),o.useEffect(()=>{const s=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-500&&!j&&(g(!0),f(n=>n+1),g(!1))};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[j]);const k=s=>{d(s.target.value),f(1)},E=s=>{p(s);const n="3318444445",h=`Hola, estoy interesado en este producto: ${s.public_id}`;C(`https://wa.me/${n}?text=${encodeURIComponent(h)}`)},w=()=>{p(null)},_=()=>{y(!u)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:"wrapper",children:[e.jsxs("header",{id:"header",children:[e.jsx("h3",{children:"Cacheshoop - Corte y Grabado Laser."}),e.jsx("div",{className:"search-bar",children:e.jsx("input",{type:"text",className:"searchInput",placeholder:"Buscar...",value:l,onChange:k})}),e.jsx("nav",{children:e.jsx("ul",{children:e.jsx("li",{children:e.jsxs("a",{href:"#",onClick:_,children:[e.jsx("h5",{children:"Nosotros"})," ",e.jsx("i",{className:"fas fa-info-circle"})]})})})})]}),e.jsx($,{showModal:u,closeModal:_})]}),e.jsx("div",{className:"container-gallery",children:e.jsx("div",{className:"gallery-grid",children:c.map(s=>e.jsxs("article",{className:"thumb",children:[e.jsxs("a",{className:"image",href:"#",onClick:()=>E(s),children:[e.jsx("img",{src:s.url,width:"1200",height:"750",alt:`${s.public_id}`}),e.jsx("div",{className:"overlay",children:e.jsx("h5",{children:s.public_id})})]}),e.jsx("p",{className:"description",children:"Descripcion IMG"})]},s.public_id))})}),i&&e.jsx("div",{className:"modal2",onClick:w,children:e.jsxs("div",{className:"modal-content2",onClick:s=>s.stopPropagation(),children:[e.jsx("span",{className:"close2",onClick:w,children:"×"}),e.jsx("img",{className:"modal-image2",src:i.url,alt:i.public_id}),e.jsx("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"quote-button",children:"Cotizar"})]})})]})};export{G as default};
