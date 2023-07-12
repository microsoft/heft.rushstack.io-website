"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[7608],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(6393);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=s,k=u["".concat(o,".").concat(h)]||u[h]||m[h]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(9122),s=r(2501),a=(r(6393),r(158)),i=["components"],l={title:"Serverless Stack plugin"},o=void 0,p={unversionedId:"pages/plugins/serverless-stack",id:"pages/plugins/serverless-stack",title:"Serverless Stack plugin",description:"|     |     |",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/plugins/serverless-stack.md",sourceDirName:"pages/plugins",slug:"/pages/plugins/serverless-stack",permalink:"/zh-cn/pages/plugins/serverless-stack",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/plugins/serverless-stack.md",tags:[],version:"current",frontMatter:{title:"Serverless Stack plugin"},sidebar:"docsSidebar",previous:{title:"Sass plugin",permalink:"/zh-cn/pages/plugins/sass"},next:{title:"Storybook plugin",permalink:"/zh-cn/pages/plugins/storybook"}},c={},u=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Configuration",id:"configuration",level:2},{value:"CLI parameters",id:"cli-parameters",level:2}],m={toc:u},h="wrapper";function k(e){var t=e.components,r=(0,s.Z)(e,i);return(0,a.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Plugin package:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-serverless-stack-plugin"},"@rushstack/heft-serverless-stack-plugin"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Plugin name:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-serverless-stack-plugin/heft-plugin.json"},"serverless-stack-plugin")," implemented by ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-serverless-stack-plugin/src/ServerlessStackPlugin.ts"},"ServerlessStackPlugin.ts"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Plugin config file:")),(0,a.kt)("td",{parentName:"tr",align:null},"(none)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"heft.json options:")),(0,a.kt)("td",{parentName:"tr",align:null},"(none)")))),(0,a.kt)("p",null,"This is a Heft plugin for building apps using the ",(0,a.kt)("a",{parentName:"p",href:"https://serverless-stack.com/"},"Serverless Stack (SST)")," framework.\nWith this approach, the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.serverless-stack.com/packages/cli"},"SST toolchain")," is only used for\nsynthesizing CloudFormation stacks and deploying the app, and Heft takes over the role of compiling, linting,\ntesting your TypeScript project."),(0,a.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,a.kt)("p",null,"If your lambda service was built using the Serverless Stack framework."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The plugin has no effect without the ",(0,a.kt)("inlineCode",{parentName:"p"},"--sst")," parameter. When the parameter is provided:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"heft build --sst")," will behave similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"sst build"),", which synthesizes CloudFormation stacks\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"build/cdk.out/")," directory. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.serverless-stack.com/packages/cli#build"},"this documentation"),"\nfor details. Heft's ",(0,a.kt)("inlineCode",{parentName:"p"},"build-watch")," mode is also supported.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"heft start --sst")," will behave similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"sst start"),", which deploys a\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.serverless-stack.com/live-lambda-development#sst-start"},"stub lambda")," to AWS\nand then launches the WebSocket client locally for debugging. See\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.serverless-stack.com/packages/cli#start"},"this documentation")," for details."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"heft build --sst")," currently requires AWS credentials, which limits the ability to perform this\nvalidation in a monorepo environment where we can't assume that every developer works on AWS.\nIssue ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverless-stack/serverless-stack/issues/1537"},"serverless-stack#1537"),"\nis tracking a possible improvement.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-serverless-stack-tutorial"},"heft-serverless-stack-tutorial"),"\nsample folder illustrates a complete project setup."),(0,a.kt)("h2",{id:"cli-parameters"},"CLI parameters"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-serverless-stack-plugin/heft-plugin.json"},"heft-serverless-stack-plugin/heft-plugin.json")," defines these parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  --sst\n                        Invokes the SST postprocessing. Requires AWS credentials.\n  --sst-stage STAGE_NAME\n                        Specifies the Serverless Stack stage; equivalent to\n                        to the "--stage" parameter from the "sst" CLI\n')))}k.isMDXComponent=!0}}]);