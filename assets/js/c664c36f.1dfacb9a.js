/*! For license information please see c664c36f.1dfacb9a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67192],{13530:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var s=t(85893),n=t(11151);const i={sidebar_label:"BrowserContext.overridePermissions"},o="BrowserContext.overridePermissions() method",a={id:"api/puppeteer.browsercontext.overridepermissions",title:"BrowserContext.overridePermissions() method",description:"Grants this browser context the given permissions within the given origin.",source:"@site/versioned_docs/version-22.4.0/api/puppeteer.browsercontext.overridepermissions.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.overridepermissions",permalink:"/api/puppeteer.browsercontext.overridepermissions",draft:!1,unlisted:!1,tags:[],version:"22.4.0",frontMatter:{sidebar_label:"BrowserContext.overridePermissions"},sidebar:"api",previous:{title:"BrowserContext.newPage",permalink:"/api/puppeteer.browsercontext.newpage"},next:{title:"BrowserContext.pages",permalink:"/api/puppeteer.browsercontext.pages"}},d={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"browsercontextoverridepermissions-method",children:"BrowserContext.overridePermissions() method"}),"\n",(0,s.jsxs)(r.p,{children:["Grants this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," the given ",(0,s.jsx)(r.code,{children:"permissions"})," within the given ",(0,s.jsx)(r.code,{children:"origin"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract overridePermissions(\n    origin: string,\n    permissions: Permission[]\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"origin"}),(0,s.jsx)(r.td,{children:"string"}),(0,s.jsxs)(r.td,{children:['The origin to grant permissions to, e.g. "',(0,s.jsx)(r.a,{href:"https://example.com",children:"https://example.com"}),'".']})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"permissions"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/api/puppeteer.permission",children:"Permission"}),"[]"]}),(0,s.jsx)(r.td,{children:"An array of permissions to grant. All permissions that are not listed here will be automatically denied."})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["Overriding permissions in the ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const context = browser.defaultBrowserContext();\nawait context.overridePermissions('https://html5demos.com', ['geolocation']);\n"})})]})}function l(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var s,i={},p=null,c=null;for(s in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,s)&&!d.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:n,type:e,key:p,ref:c,props:i,_owner:a.current}}r.Fragment=i,r.jsx=p,r.jsxs=p},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>o});var s=t(67294);const n={},i=s.createContext(n);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);