/*! For license information please see b86dd7dd.12ceb86e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73089],{50109:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(85893),n=t(11151);const a={sidebar_label:"Coverage.startJSCoverage"},o="Coverage.startJSCoverage() method",i={id:"api/puppeteer.coverage.startjscoverage",title:"Coverage.startJSCoverage() method",description:"Signature:",source:"@site/versioned_docs/version-22.11.0/api/puppeteer.coverage.startjscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.startjscoverage",permalink:"/api/puppeteer.coverage.startjscoverage",draft:!1,unlisted:!1,tags:[],version:"22.11.0",frontMatter:{sidebar_label:"Coverage.startJSCoverage"},sidebar:"api",previous:{title:"Coverage.startCSSCoverage",permalink:"/api/puppeteer.coverage.startcsscoverage"},next:{title:"Coverage.stopCSSCoverage",permalink:"/api/puppeteer.coverage.stopcsscoverage"}},c={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"coveragestartjscoverage-method",children:"Coverage.startJSCoverage() method"}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Coverage {\n  startJSCoverage(options?: JSCoverageOptions): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.jscoverageoptions",children:"JSCoverageOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," Set of configurable options for coverage defaults to ",(0,s.jsx)(r.code,{children:"resetOnNavigation : true, reportAnonymousScripts : false,"})," ",(0,s.jsx)(r.code,{children:"includeRawScriptCoverage : false, useBlockCoverage : true"})]})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.p,{children:"Promise that resolves when coverage is started."}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",(0,s.jsx)(r.code,{children:"eval"})," or ",(0,s.jsx)(r.code,{children:"new Function"}),". If ",(0,s.jsx)(r.code,{children:"reportAnonymousScripts"})," is set to ",(0,s.jsx)(r.code,{children:"true"}),", anonymous scripts URL will start with ",(0,s.jsx)(r.code,{children:"debugger://VM"})," (unless a magic //# sourceURL comment is present, in which case that will the be URL)."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,a={},l=null,p=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:n,type:e,key:l,ref:p,props:a,_owner:i.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>o});var s=t(67294);const n={},a=s.createContext(n);function o(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);