(this.webpackJsonpnatalia=this.webpackJsonpnatalia||[]).push([[0],{49:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),s=a.n(r),c=(a(49),a(13)),l="Dress",o=a(82),b=a(3),d=function(e){var t=e.update,a=e.ind,n=e.base,i=Object(o.a)((function(){return{type:l,item:{ind:a},end:function(e,n){var i=n.getDropResult();e&&i&&t(a)},collect:function(e){return{isDragging:e.isDragging(),handlerId:e.getHandlerId()}}}})),r=Object(c.a)(i,2),s=(r[0].isDragging,r[1]);return Object(b.jsx)("div",{ref:s,role:"Dress",children:Object(b.jsx)("img",{src:"dress_"+n+"_"+a+".png",className:"App-logo",alt:"base",width:280,draggable:"false"})})},j=a(83),g=function(e){var t=e.display,a=e.base,n=e.dress,i=Object(j.a)((function(){return{accept:l,drop:function(){return{name:"Person"}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),r=Object(c.a)(i,2),s=r[0],o=(s.canDrop,s.isOver,r[1]);return Object(b.jsxs)("div",{ref:o,role:"Person",style:{position:"relative"},children:[Object(b.jsx)("img",{src:(0===n?"./base_":"./base_nude_")+a+".png",className:"App-logo",alt:"base",width:280,draggable:"false"}),Object(b.jsx)("img",{src:"dress_"+a+"_"+n+".png",className:"App-logo",alt:"",width:280,draggable:"false",style:{position:"absolute",left:0,top:0,display:t}}),Object(b.jsx)("img",{src:"./hair_"+a+".png",className:"App-logo",alt:"base",width:280,draggable:"false",style:{position:"absolute",left:0,top:0}})]})},p=a(77),u=a(81);var h=function(){var e=Object(n.useState)(1),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(0),s=Object(c.a)(r,2),l=s[0],o=s[1];return Object(b.jsxs)(p.a,{container:!0,children:[Object(b.jsxs)(p.a,{item:!0,xs:8,children:[Object(b.jsx)(u.a,{variant:"contained",color:"primary",style:{color:"white"},onClick:function(){return o(0),!1},children:"Reiniciar"}),Object(b.jsx)(p.a,{container:!0,justify:"center",children:Object(b.jsx)(p.a,{item:!0,children:Object(b.jsx)(g,{base:a,dress:l,display:0===l?"none":"block",style:{width:280}})})}),Object(b.jsx)(p.a,{container:!0,spacing:2,justify:"center",children:[1,2,3].map((function(e){return Object(b.jsx)(p.a,{item:!0,children:Object(b.jsx)(d,{ind:e,update:o,base:a},e)})}))})]}),Object(b.jsx)(p.a,{item:!0,xs:2,children:Object(b.jsx)(p.a,{direction:"column",spacing:2,justify:"space-between",children:[1,2,3].map((function(e){return Object(b.jsx)(p.a,{item:!0,children:Object(b.jsx)(u.a,{variant:"contained",color:e===a?"secondary":"primary",onClick:function(){return o(0),i(e),!1},children:Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsx)("img",{src:"./base_"+e+".png",width:150,alt:"base",draggable:"false"}),Object(b.jsx)("img",{src:"./hair_"+e+".png",width:150,alt:"base",draggable:"false",style:{position:"absolute",left:0,top:0}})]})})})}))})}),Object(b.jsx)(p.a,{item:!0,xs:2,spacing:2,children:Object(b.jsx)(p.a,{direction:"column",children:[4].map((function(e){return Object(b.jsx)(p.a,{item:!0,children:Object(b.jsx)(u.a,{variant:"contained",color:e===a?"secondary":"primary",onClick:function(){return o(0),i(e),!1},children:Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsx)("img",{src:"./base_"+e+".png",width:150,alt:"base",draggable:"false"}),Object(b.jsx)("img",{src:"./hair_"+e+".png",width:150,alt:"base",draggable:"false",style:{position:"absolute",left:0,top:0}})]})})})}))})})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))},f=a(80),x=a(43),m=a(42),y=a(79),v=Object(m.a)({palette:{primary:{light:"rgb(255, 113, 181)",main:"rgb(255, 84, 167)",dark:"rgb(255, 113, 181)"},secondary:{main:"rgb(255, 113, 181)",dark:"rgb(255, 113, 181)",light:"rgb(255, 113, 181)"}},typography:{useNextVariants:!0}});s.a.render(Object(b.jsx)(y.a,{theme:v,children:Object(b.jsx)(f.a,{backend:x.a,children:Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(h,{})})})}),document.getElementById("root")),O()}},[[55,1,2]]]);
//# sourceMappingURL=main.5f6c2df4.chunk.js.map