(this["webpackJsonpurl-shortener-frontend"]=this["webpackJsonpurl-shortener-frontend"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(12),s=n.n(c),o=n(14),i=n(13),u=n.n(i),a=function(e){return u.a.post("/shorten",{url:e}).then((function(e){return e.data.uuid}))},j=(n(37),n(0)),d=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useRef)("https://weeurlio.herokuapp.com"),i=Object(r.useRef)();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{children:"WeeURL.io"}),Object(j.jsx)("p",{children:"The only URL Shortener you'll ever need"})]}),n?Object(j.jsxs)("div",{className:"main-form",children:[Object(j.jsx)("input",{readOnly:!0,value:n,type:"text"}),Object(j.jsx)("button",{onClick:function(e){navigator.clipboard.writeText(n),e.target.textContent="Copied!"},children:"Copy"})]}):Object(j.jsxs)("form",{className:"main-form",onSubmit:function(e){e.preventDefault(),a(i.current.value).then((function(e){return c("".concat(s.current,"/").concat(e))}))},children:[Object(j.jsx)("input",{required:!0,ref:i,type:"text"}),Object(j.jsx)("button",{type:"submit",children:"Shorten!"})]}),Object(j.jsxs)("footer",{children:["Made with \u2764\ufe0f\ufe0f by"," ",Object(j.jsx)("a",{href:"https://www.instagram.com/_tsensei_",children:"tsensei"})]})]})};s.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e9c0b0a5.chunk.js.map