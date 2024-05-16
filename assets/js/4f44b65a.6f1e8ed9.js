/*! For license information please see 4f44b65a.6f1e8ed9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69713],{33514:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(85893),s=t(11151);const a={sidebar_label:"Mouse.drag"},o="Mouse.drag() method",i={id:"api/puppeteer.mouse.drag",title:"Mouse.drag() method",description:"Dispatches a drag event.",source:"@site/versioned_docs/version-22.9.0/api/puppeteer.mouse.drag.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.drag",permalink:"/api/puppeteer.mouse.drag",draft:!1,unlisted:!1,tags:[],version:"22.9.0",frontMatter:{sidebar_label:"Mouse.drag"},sidebar:"api",previous:{title:"Mouse.down",permalink:"/api/puppeteer.mouse.down"},next:{title:"Mouse.dragAndDrop",permalink:"/api/puppeteer.mouse.draganddrop"}},d={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"mousedrag-method",children:"Mouse.drag() method"}),"\n",(0,n.jsxs)(r.p,{children:["Dispatches a ",(0,n.jsx)(r.code,{children:"drag"})," event."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract drag(start: Point, target: Point): Promise<Protocol.Input.DragData>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"start"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"starting point for drag"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"target"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"point to drag to"})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<Protocol.Input.DragData>"})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,a={},p=null,c=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,n)&&!d.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:c,props:a,_owner:i.current}}r.Fragment=a,r.jsx=p,r.jsxs=p},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>o});var n=t(67294);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);