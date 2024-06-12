/*! For license information please see 087b1f15.f5fa7d0f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62381],{996:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var t=s(85893),n=s(11151);const p={sidebar_label:"Browser.pages"},a="Browser.pages() method",o={id:"api/puppeteer.browser.pages",title:"Browser.pages() method",description:"Gets a list of all open pages inside this Browser.",source:"@site/versioned_docs/version-22.11.0/api/puppeteer.browser.pages.md",sourceDirName:"api",slug:"/api/puppeteer.browser.pages",permalink:"/api/puppeteer.browser.pages",draft:!1,unlisted:!1,tags:[],version:"22.11.0",frontMatter:{sidebar_label:"Browser.pages"},sidebar:"api",previous:{title:"Browser.newPage",permalink:"/api/puppeteer.browser.newpage"},next:{title:"Browser.process",permalink:"/api/puppeteer.browser.process"}},i={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"browserpages-method",children:"Browser.pages() method"}),"\n",(0,t.jsxs)(r.p,{children:["Gets a list of all open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," inside this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If there ar multiple ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),", this returns all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," in all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Browser {\n  pages(): Promise<Page[]>;\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"Page"}),"[]>"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["Non-visible ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),", such as ",(0,t.jsx)(r.code,{children:'"background_page"'}),", will not be listed here. You can find them using ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"Target.page()"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},75251:(e,r,s)=>{var t=s(67294),n=Symbol.for("react.element"),p=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,p={},l=null,c=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(p[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===p[t]&&(p[t]=r[t]);return{$$typeof:n,type:e,key:l,ref:c,props:p,_owner:o.current}}r.Fragment=p,r.jsx=l,r.jsxs=l},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>a});var t=s(67294);const n={},p=t.createContext(n);function a(e){const r=t.useContext(p);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(p.Provider,{value:r},e.children)}}}]);