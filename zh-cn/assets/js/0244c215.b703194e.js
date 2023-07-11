"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[6638],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(6393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||h[m]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(9122),n=r(2501),i=(r(6393),r(158)),o=["components"],s={title:"Getting started"},p=void 0,l={unversionedId:"pages/intro/getting_started",id:"pages/intro/getting_started",title:"Getting started",description:"Where to begin?",source:"@site/docs/pages/intro/getting_started.md",sourceDirName:"pages/intro",slug:"/pages/intro/getting_started",permalink:"/zh-cn/pages/intro/getting_started",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/intro/getting_started.md",tags:[],version:"current",frontMatter:{title:"Getting started"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/zh-cn/"},next:{title:"Heft architecture",permalink:"/zh-cn/pages/intro/architecture"}},c={},u=[{value:"Where to begin?",id:"where-to-begin",level:2},{value:"Links",id:"links",level:2},{value:"Sample projects",id:"sample-projects",level:2}],h={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"where-to-begin"},"Where to begin?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/tutorials/hello_world"},"Hello World")," tutorial provides a quick\nwalkthrough of the steps for setting up a project to build using Heft")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The main NPM package page is here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/heft"},"@rushstack/heft"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/tutorials/heft_and_rush"},"Interfacing with Rush")," explains how Heft and Rush interact")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/intro/architecture"},"Heft architecture")," article provides more detail about the\nbuild system's design"))),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/CHANGELOG.md"},"CHANGELOG.md")," - Find\nout what's new in the latest version"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/UPGRADING.md"},"UPGRADING.md")," - Instructions\nfor migrating existing projects to use a newer version of Heft"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.rushstack.io/pages/heft/"},"API Reference"))),(0,i.kt)("h2",{id:"sample-projects"},"Sample projects"),(0,i.kt)("p",null,"For a couple quick examples of Heft projects in a real Rush monorepo, take a look at these folders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-basic-tutorial"},"heft-node-basic-tutorial"),": A basic Node.js\napplication with Jest and ESLint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-webpack-basic-tutorial"},"heft-webpack-basic-tutorial"),": A basic\nweb application bundled using Webpack"))))}f.isMDXComponent=!0}}]);