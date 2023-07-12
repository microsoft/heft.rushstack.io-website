"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[6971],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(9122),r=n(2501),o=(n(6393),n(158)),i=["components"],s={title:"Overview",hide_title:!0,custom_edit_url:null},p=void 0,l={unversionedId:"index",id:"index",title:"Overview",description:"Heft is a config-driven toolchain that invokes other popular tools such as TypeScript, ESLint, Jest, Webpack,",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Overview",hide_title:!0,custom_edit_url:null},sidebar:"docsSidebar",next:{title:"Getting started",permalink:"/pages/intro/getting_started"}},c={},u=[],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",null,(0,o.kt)("img",{src:"/images/site/heft-logo.svg",alt:"heft",title:"heft",style:{width:"380px",paddingTop:"30px"}}),(0,o.kt)("p",null)),(0,o.kt)("p",null,"Heft is a config-driven toolchain that invokes other popular tools such as TypeScript, ESLint, Jest, Webpack,\nand API Extractor. You can use it to build web applications, Node.js services, command-line tools, libraries,\nand more. Heft builds all your JavaScript projects the same way: A way that works."),(0,o.kt)("p",null,"Heft is typically launched by ",(0,o.kt)("strong",{parentName:"p"},"package.json")," commands such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"npm run build"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"npm run test"'),". It's designed\nfor use in a monorepo with potentially hundreds of projects, where the ",(0,o.kt)("a",{parentName:"p",href:"https://rushjs.io/"},"Rush")," orchestrator invokes\nthese commands separately in each project folder. In this situation, everything must execute as fast as possible.\nSpecial purpose scripts become a headache to maintain, so it's better to replace them with a reusable engine that's\ndriven by config files. In a large repo, you'll want to minimize duplication of these config files across projects.\nUltimately, you'll want to define a small set of stereotypical project types\n(",(0,o.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/rig_packages/"},'"rigs"'),") to officially support, then discourage projects from\noverriding the rig configuration. Being consistent ensures that any person can easily contribute to any project.\nHeft is a ready-made implementation of all these concepts."),(0,o.kt)("p",null,"You don't need a monorepo to use Heft, however. It also works well for small standalone projects. Compared to other\nsimilar systems, Heft has some unique design goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scalable"),": Heft interfaces with the ",(0,o.kt)("a",{parentName:"p",href:"https://rushstack.io/"},"Rush Stack")," family of tools, which are tailored\nfor large monorepos with many people and projects. Heft doesn't require Rush, though.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optimized"),": Heft tracks fine-grained performance metrics at each step. The TypeScript plugin implements\nsophisticated optimizations such as: filesystem caching, incremental compilation, simultaneous multi-target emit,\nand a unified compiler pass for Jest/Webpack/ESLint. JSON config files and plugin manifests enable fast\nquerying of metadata without evaluating potentially inefficient script code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Complete"),": Rush Stack aspires to establish a fully worked out solution for building typical TypeScript\nprojects. Unopinionated task abstractions often work against this goal: It is expensive to optimize and support\n(and document!) every possible cocktail of tech choices. The best optimizations and integrations\nmake deep assumptions about how tasks will interact. Although the Heft engine itself is very flexible,\nour philosophy is to agree on a standard approach that covers a broad range of scenarios, then invest in\nmaking the best possible experience for that approach.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Extensible"),": Most projects require at least a few specialized tasks such as preprocessors, postprocessors,\nor loaders. Heft is organized around plugins using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tapable"},"tapable"),"\nhook system (familiar from Webpack). Strongly typed APIs make it easy to write your own plugins. Compared to\nloose architectures such as Grunt or Gulp, Heft's plugin-system is organized around explicit easy-to-read\nconfig files. Customizations generally will extend a standard rig rather than starting from scratch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Familiar"),": Like Rush, Heft is a regular Node.js application -- developers don't need to install native\nprerequisites such as Python, MSYS2, or the .NET Framework. Heft's source code is easy to understand and debug\nbecause it's 100% TypeScript, the same programming language as your web projects. Developing for native targets\nis still possible, of course.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Professional"),": The Rush Stack projects are developed by and for engineers who ship large scale commercial\napps. Each feature is designed, discussed in the open, and thoughtfully code reviewed. Breaking changes\nrequire us to migrate thousands of our own projects, so upgrades are relatively painless compared to typical\nNode.js tooling."))))}f.isMDXComponent=!0}}]);