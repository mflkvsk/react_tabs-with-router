(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),s=c(4),i=(c(15),c(1)),r=(c(0),c(9),c(6)),b=c.n(r),j=c(2),l=function(){return Object(j.jsx)("header",{className:"navbar",children:Object(j.jsxs)("nav",{className:"navbar-menu columns is-centered mt-4 mb-4",children:[Object(j.jsx)(s.b,{className:function(e){return b()("navbar-item",{"is-active":e.isActive})},to:"/",children:"Home"}),Object(j.jsx)(s.b,{className:function(e){return b()("navbar-item",{"is-active":e.isActive})},to:"/tabs",children:"Tabs"})]})})},d=function(){return Object(j.jsx)("h1",{className:"has-text-centered",children:"Home page"})},o=function(e){var t=e.tabs,c=Object(i.g)().tabId,n=t.find((function(e){return e.id===c}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar-menu columns is-centered mb-6",children:t.map((function(e){return Object(j.jsx)(s.b,{to:"/tabs/".concat(e.id),className:function(e){return b()("navbar-item",{"is-active":e.isActive})},children:e.title},e.id)}))}),void 0===(null===n||void 0===n?void 0:n.id)?Object(j.jsx)("p",{className:"has-text-centered",children:"Please select a tab"}):Object(j.jsx)("p",{className:"has-text-centered",children:null===n||void 0===n?void 0:n.content})]})},m=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"has-text-centered",children:"Tabs with router"}),Object(j.jsx)(l,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",element:Object(j.jsx)(d,{})}),Object(j.jsx)(i.a,{path:"tabs/:tabId",element:Object(j.jsx)(o,{tabs:m})}),Object(j.jsx)(i.a,{path:"/tabs",element:Object(j.jsx)(o,{tabs:m})}),Object(j.jsx)(i.a,{path:"*",element:Object(j.jsx)(d,{})})]})]})};a.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3e82fa4b.chunk.js.map