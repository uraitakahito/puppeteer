/*! For license information please see 6c04b322.46272552.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2567],{87456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=n(85893),i=n(11151);const s={sidebar_label:"EventEmitter.off"},o="EventEmitter.off() method",l={id:"api/puppeteer.eventemitter.off",title:"EventEmitter.off() method",description:"Remove an event listener from firing.",source:"@site/versioned_docs/version-22.11.1/api/puppeteer.eventemitter.off.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter.off",permalink:"/api/puppeteer.eventemitter.off",draft:!1,unlisted:!1,tags:[],version:"22.11.1",frontMatter:{sidebar_label:"EventEmitter.off"},sidebar:"api",previous:{title:"EventEmitter.listenerCount",permalink:"/api/puppeteer.eventemitter.listenercount"},next:{title:"EventEmitter.on",permalink:"/api/puppeteer.eventemitter.on"}},d={},a=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"eventemitteroff-method",children:"EventEmitter.off() method"}),"\n",(0,r.jsx)(t.p,{children:"Remove an event listener from firing."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class EventEmitter {\n  off<Key extends keyof EventsWithWildcard<Events>>(\n    type: Key,\n    handler?: Handler<EventsWithWildcard<Events>[Key]>\n  ): this;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"type"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Key"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"the event type you'd like to stop listening to."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"handler"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.handler",children:"Handler"}),"<",(0,r.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>[Key]>"]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," the function that should be removed."]})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"this"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"this"})," to enable you to chain method calls."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,n)=>{var r=n(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,c=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:c,props:s,_owner:l.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);