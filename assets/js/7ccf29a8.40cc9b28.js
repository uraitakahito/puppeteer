/*! For license information please see 7ccf29a8.40cc9b28.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[317],{49417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(85893),o=t(11151);const s={sidebar_label:"Connection.send"},i="Connection.send() method",a={id:"api/puppeteer.connection.send",title:"Connection.send() method",description:"Signature:",source:"@site/versioned_docs/version-22.4.0/api/puppeteer.connection.send.md",sourceDirName:"api",slug:"/api/puppeteer.connection.send",permalink:"/api/puppeteer.connection.send",draft:!1,unlisted:!1,tags:[],version:"22.4.0",frontMatter:{sidebar_label:"Connection.send"},sidebar:"api",previous:{title:"Connection.fromSession",permalink:"/api/puppeteer.connection.fromsession"},next:{title:"Connection.session",permalink:"/api/puppeteer.connection.session"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"connectionsend-method",children:"Connection.send() method"}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Connection {\n  send<T extends keyof ProtocolMapping.Commands>(\n    method: T,\n    params?: ProtocolMapping.Commands[T]['paramsType'][0],\n    options?: CommandOptions\n  ): Promise<ProtocolMapping.Commands[T]['returnType']>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"method"}),(0,r.jsx)(n.td,{children:"T"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"params"}),(0,r.jsx)(n.td,{children:"ProtocolMapping.Commands[T]['paramsType'][0]"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"(Optional)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/api/puppeteer.commandoptions",children:"CommandOptions"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"(Optional)"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<ProtocolMapping.Commands[T]['returnType']>"})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,n,t)=>{var r=t(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,p=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:p,props:s,_owner:a.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);