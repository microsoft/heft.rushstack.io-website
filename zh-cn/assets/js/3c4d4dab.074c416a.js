"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[835],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(6393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,h=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var a=r(9122),n=r(2501),i=(r(6393),r(158)),o=["components"],p={title:"\u5feb\u901f\u5f00\u59cb",hide_title:!0},s=void 0,l={unversionedId:"pages/intro/getting_started",id:"pages/intro/getting_started",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5982\u4f55\u5f00\u59cb",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/intro/getting_started.md",sourceDirName:"pages/intro",slug:"/pages/intro/getting_started",permalink:"/zh-cn/pages/intro/getting_started",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/intro/getting_started.md",tags:[],version:"current",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",hide_title:!0},sidebar:"docsSidebar",previous:{title:"Heft \u4ecb\u7ecd",permalink:"/zh-cn/"},next:{title:"Heft \u67b6\u6784",permalink:"/zh-cn/pages/intro/architecture"}},c={},u=[{value:"\u5982\u4f55\u5f00\u59cb",id:"\u5982\u4f55\u5f00\u59cb",level:2},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:2},{value:"\u5de5\u7a0b\u793a\u4f8b",id:"\u5de5\u7a0b\u793a\u4f8b",level:2}],m={toc:u},f="wrapper";function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5982\u4f55\u5f00\u59cb"},"\u5982\u4f55\u5f00\u59cb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/tutorials/getting_started"},"\u4f7f\u7528 Heft \u6765\u5f00\u59cb")," \u4e00\u6587\u63d0\u4f9b\u4e86\u4f7f\u7528 Heft \u5efa\u7acb\u9879\u76ee\u7684\u793a\u4f8b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b83\u5728 NPM \u4e0a\u7684\u5305\u662f\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/heft"},"@rushstack/heft"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/tutorials/heft_and_rush"},"\u4e0e Rush \u4ea4\u4e92")," \u4e00\u6587\u89e3\u91ca\u4e86 Heft \u4e0e Rush \u5982\u4f55\u4ea4\u4e92\u4f7f\u7528")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/intro/architecture"},"Heft \u67b6\u6784")," \u4e00\u6587\u63cf\u8ff0\u4e86\u6784\u5efa\u7cfb\u7edf\u7684\u8bbe\u8ba1\u7ec6\u8282"))),(0,i.kt)("h2",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/CHANGELOG.md"},"CHANGELOG.md")," - \u67e5\u770b\u6700\u65b0\u7248\u672c\u6709\u4ec0\u4e48\u53d8\u5316"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/UPGRADING.md"},"UPGRADING.md")," - \u5c06\u73b0\u6709\u9879\u76ee\u8fc1\u79fb\u5230\u8f83\u65b0\u7684 Heft \u7684\u8bf4\u660e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.rushstack.io/pages/heft/"},"API \u7d22\u5f15"))),(0,i.kt)("h2",{id:"\u5de5\u7a0b\u793a\u4f8b"},"\u5de5\u7a0b\u793a\u4f8b"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u51e0\u4e2a\u6587\u4ef6\u5939\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7b80\u5355\u7684 Rush monorepo \u4e0b\u4f7f\u7528 Heft \u9879\u76ee\u793a\u4f8b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-basic-tutorial"},"heft-node-basic-tutorial"),": \u4f7f\u7528 Jest \u548c ESLint \u7684\u57fa\u672c Node.js \u9879\u76ee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-webpack-basic-tutorial"},"heft-webpack-basic-tutorial"),": \u4f7f\u7528 Webpack \u6253\u5305\u7684\u57fa\u672c web \u9879\u76ee"))))}h.isMDXComponent=!0}}]);