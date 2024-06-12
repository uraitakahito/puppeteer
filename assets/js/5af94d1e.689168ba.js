/*! For license information please see 5af94d1e.689168ba.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34738],{59832:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=r(85893),n=r(11151);const i={sidebar_label:"HTTPResponse"},d="HTTPResponse class",p={id:"api/puppeteer.httpresponse",title:"HTTPResponse class",description:"The HTTPResponse class represents responses which are received by the Page class.",source:"@site/versioned_docs/version-22.11.0/api/puppeteer.httpresponse.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse",permalink:"/api/puppeteer.httpresponse",draft:!1,unlisted:!1,tags:[],version:"22.11.0",frontMatter:{sidebar_label:"HTTPResponse"},sidebar:"api",previous:{title:"HTTPRequest.url",permalink:"/api/puppeteer.httprequest.url"},next:{title:"HTTPResponse.buffer",permalink:"/api/puppeteer.httpresponse.buffer"}},h={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"httpresponse-class",children:"HTTPResponse class"}),"\n",(0,t.jsxs)(s.p,{children:["The HTTPResponse class represents responses which are received by the ",(0,t.jsx)(s.a,{href:"/api/puppeteer.page",children:"Page"})," class."]}),"\n",(0,t.jsx)(s.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class HTTPResponse\n"})}),"\n",(0,t.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(s.code,{children:"HTTPResponse"})," class."]}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"buffer",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.buffer",children:"buffer()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"Promise which resolves to a buffer with response body."}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Remarks:"})}),(0,t.jsxs)(s.p,{children:["The buffer might be re-encoded by the browser based on HTTP-headers or other heuristics. If the browser failed to detect the correct encoding, the buffer might be encoded incorrectly. See ",(0,t.jsx)(s.a,{href:"https://github.com/puppeteer/puppeteer/issues/6478",children:"https://github.com/puppeteer/puppeteer/issues/6478"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"frame",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.frame",children:"frame()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.a,{href:"/api/puppeteer.frame",children:"Frame"})," that initiated this response, or ",(0,t.jsx)(s.code,{children:"null"})," if navigating to error pages."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"fromcache",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.fromcache",children:"fromCache()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"True if the response was served from either the browser's disk cache or memory cache."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"fromserviceworker",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.fromserviceworker",children:"fromServiceWorker()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"True if the response was served by a service worker."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"headers",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.headers",children:"headers()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"An object with HTTP headers associated with the response. All header names are lower-case."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"json",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.json",children:"json()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"Promise which resolves to a JSON representation of response body."}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Remarks:"})}),(0,t.jsxs)(s.p,{children:["This method will throw if the response body is not parsable via ",(0,t.jsx)(s.code,{children:"JSON.parse"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"ok",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.ok",children:"ok()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"True if the response was successful (status in the range 200-299)."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"remoteaddress",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.remoteaddress",children:"remoteAddress()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The IP address and port number used to connect to the remote server."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"request",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.request",children:"request()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:["A matching ",(0,t.jsx)(s.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})," object."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"securitydetails",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.securitydetails",children:"securityDetails()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/puppeteer.securitydetails",children:"SecurityDetails"})," if the response was received over the secure connection, or ",(0,t.jsx)(s.code,{children:"null"})," otherwise."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"status",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.status",children:"status()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The status code of the response (e.g., 200 for a success)."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"statustext",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.statustext",children:"statusText()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:'The status text of the response (e.g. usually an "OK" for a success).'})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"text",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.text",children:"text()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Promise which resolves to a text (utf8) representation of response body."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"timing",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.timing",children:"timing()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"Timing information related to the response."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"url",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.httpresponse.url",children:"url()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The URL of the response."})})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},75251:(e,s,r)=>{var t=r(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,r){var t,i={},c=null,o=null;for(t in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(o=s.ref),s)d.call(s,t)&&!h.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:n,type:e,key:c,ref:o,props:i,_owner:p.current}}s.Fragment=i,s.jsx=c,s.jsxs=c},85893:(e,s,r)=>{e.exports=r(75251)},11151:(e,s,r)=>{r.d(s,{Z:()=>p,a:()=>d});var t=r(67294);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function p(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);