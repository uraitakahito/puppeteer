/*! For license information please see f402353f.a602727e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77914],{99648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(85893),l=n(11151);const s={sidebar_label:"ElementHandle.uploadFile"},i="ElementHandle.uploadFile() method",a={id:"api/puppeteer.elementhandle.uploadfile",title:"ElementHandle.uploadFile() method",description:"Sets the value of an input element to the given file paths.",source:"@site/versioned_docs/version-22.11.0/api/puppeteer.elementhandle.uploadfile.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.uploadfile",permalink:"/api/puppeteer.elementhandle.uploadfile",draft:!1,unlisted:!1,tags:[],version:"22.11.0",frontMatter:{sidebar_label:"ElementHandle.uploadFile"},sidebar:"api",previous:{title:"ElementHandle.type",permalink:"/api/puppeteer.elementhandle.type"},next:{title:"ElementHandle.waitForSelector",permalink:"/api/puppeteer.elementhandle.waitforselector"}},o={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"elementhandleuploadfile-method",children:"ElementHandle.uploadFile() method"}),"\n",(0,r.jsxs)(t.p,{children:["Sets the value of an ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",children:"input element"})," to the given file paths."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  abstract uploadFile(\n    this: ElementHandle<HTMLInputElement>,\n    ...paths: string[]\n  ): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"this"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLInputElement>"]})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"paths"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"string[]"})}),(0,r.jsx)("td",{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["This will not validate whether the file paths exists. Also, if a path is relative, then it is resolved against the ",(0,r.jsx)(t.a,{href:"https://nodejs.org/api/process.html#process_process_cwd",children:"current working directory"}),". For locals script connecting to remote chrome environments, paths must be absolute."]})]})}function c(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,t,n)=>{var r=n(67294),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,p=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:l,type:e,key:d,ref:p,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const l={},s=r.createContext(l);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);