"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[2738],{158:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(6393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(a),h=r,m=f["".concat(p,".").concat(h)]||f[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[f]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var n=a(9122),r=a(2501),i=(a(6393),a(158)),o=["components"],s={title:"Heft architecture"},p=void 0,l={unversionedId:"pages/intro/architecture",id:"pages/intro/architecture",title:"Heft architecture",description:"Read this first \ud83c\udf88",source:"@site/docs/pages/intro/architecture.md",sourceDirName:"pages/intro",slug:"/pages/intro/architecture",permalink:"/pages/intro/architecture",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/intro/architecture.md",tags:[],version:"current",frontMatter:{title:"Heft architecture"},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/pages/intro/getting_started"},next:{title:"Using rig packages",permalink:"/pages/intro/rig_packages"}},c={},f=[{value:"Read this first \ud83c\udf88",id:"read-this-first-",level:2},{value:"Action",id:"action",level:3},{value:"Parameter",id:"parameter",level:3},{value:"Task",id:"task",level:3},{value:"Phase",id:"phase",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Plugin package",id:"plugin-package",level:3},{value:"Plugin manifest",id:"plugin-manifest",level:3},{value:"Hook",id:"hook",level:3},{value:"Rig package",id:"rig-package",level:3},{value:"Rig profile",id:"rig-profile",level:3}],u={toc:f},h="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"read-this-first-"},"Read this first \ud83c\udf88"),(0,i.kt)("p",null,"Here's a quick summary of the most important concepts of Heft:"),(0,i.kt)("h3",{id:"action"},"Action"),(0,i.kt)("p",null,"In Heft's terminology, an \"action\" is command-line verb, as formalized by Rush Stack's ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/ts-command-line"},"ts-command-line")," system. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"heft --help")," to see the available actions. The ",(0,i.kt)("inlineCode",{parentName:"p"},"clean")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," actions are provided by Heft itself; the others are produced by your ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," configuration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," A shell command ",(0,i.kt)("inlineCode",{parentName:"p"},"heft test --clean")," is invoking the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," action."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),' Early releases of Heft also used the word "action" for ',(0,i.kt)("inlineCode",{parentName:"p"},"eventActions")," in ",(0,i.kt)("strong",{parentName:"p"},"heft.json"),". This terminology is no longer used.")),(0,i.kt)("h3",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,'Actions support various command-line "parameters" for adjusting behavior. Some parameters are defined by Heft itself; others are contributed by Heft plugins.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," A shell command ",(0,i.kt)("inlineCode",{parentName:"p"},"heft test --clean")," is using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--clean")," parameter."),(0,i.kt)("h3",{id:"task"},"Task"),(0,i.kt)("p",null,'Heft "tasks" are defined in the ',(0,i.kt)("inlineCode",{parentName:"p"},"tasksByName")," section of a ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," config file for your project. Tasks typically read input files and/or generate output files, often by invoking a familiar tool such as TypeScript or ESLint. Each task loads a Heft task plugin (see below). It's possible for two different tasks to load the same plugin. Tasks can depend on each other, which determines scheduling order."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-web-rig")," configuration ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/9ffb14519dd42e5808e56bc2ea80c8734f5f2e5b/rigs/heft-web-rig/profiles/app/config/heft.json#L53"},"defines")," a task called ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack"),"."),(0,i.kt)("h3",{id:"phase"},"Phase"),(0,i.kt)("p",null,'A "phase" is an arrangement of Heft tasks, defined in the ',(0,i.kt)("inlineCode",{parentName:"p"},"phasesByName")," section of a ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," config file for your project. In that file, phases are given names such as ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),". Defining a phase creates two corresponding command-line actions. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," phase produces a ",(0,i.kt)("inlineCode",{parentName:"p"},"heft test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"heft test-watch")," action. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-watch")," variant is for interactive watch mode, for example a localhost dev server."),(0,i.kt)("p",null,"If tasks belong to the same phase, they can share memory objects for optimization; otherwise, they must only communicate by writing files to disk. This requirement supports integration with ",(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/phased_builds/"},"Rush phases")," which may run at different times or on different computers, communicating via the Rush build cache."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-web-rig")," configuration ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/9ffb14519dd42e5808e56bc2ea80c8734f5f2e5b/rigs/heft-web-rig/profiles/app/config/heft.json#L21"},"defines")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," phase that incorporates a ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," task."),(0,i.kt)("h3",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"Heft plugins are TypeScript classes that implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"IHeftPlugin")," contract. There are two kinds of plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"task plugin")," can be loaded by ",(0,i.kt)("strong",{parentName:"li"},"heft.json")," tasks and provides their implementation"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"lifecycle plugin")," provides general functionality that is not specific to any task; for example, to collect timing metrics")),(0,i.kt)("h3",{id:"plugin-package"},"Plugin package"),(0,i.kt)("p",null,'A "plugin package" is an NPM package providing Heft plugins. The NPM package naming pattern is ',(0,i.kt)("inlineCode",{parentName:"p"},"heft-____-plugin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"heft-____-plugins")," (according to the number of plugins). ",(0,i.kt)("strong",{parentName:"p"},"Built-in plugins")," are loaded directly from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft")," package."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/pages/plugins/package_index"},"Plugin package index")," for the list of official plugins."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin")," package implements ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/9ffb14519dd42e5808e56bc2ea80c8734f5f2e5b/heft-plugins/heft-jest-plugin/src/JestPlugin.ts#L144"},"jest-plugin"),"."),(0,i.kt)("h3",{id:"plugin-manifest"},"Plugin manifest"),(0,i.kt)("p",null,"Each plugin package includes a file ",(0,i.kt)("strong",{parentName:"p"},"heft-plug.json"),' which is called the "plugin manifest." It describes the available plugins, their options, and their command-line parameters. Heft is data-driven, which means that such information can be discovered without executing any custom scripts. (Although scripted configuration is very popular, it has many problems such as unexpected performance costs, unpredictable behavior that hinders caching, and poor error messages.)'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin")," package declares ",(0,i.kt)("inlineCode",{parentName:"p"},"jest-plugin")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/9ffb14519dd42e5808e56bc2ea80c8734f5f2e5b/heft-plugins/heft-jest-plugin/heft-plugin.json"},"this manifest"),"."),(0,i.kt)("h3",{id:"hook"},"Hook"),(0,i.kt)("p",null,'Heft plugins can register handlers for various events during the build lifecycle. The API terminology of "tapping" event "hooks" comes from Heft\'s usage of the ',(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tapable"},"tapable")," system, familiar from Webpack plugins."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," In Heft's source code, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/9ffb14519dd42e5808e56bc2ea80c8734f5f2e5b/apps/heft/src/pluginFramework/HeftTaskSession.ts#L135"},"IHeftTaskHooks")," interface exposes some hooks."),(0,i.kt)("h3",{id:"rig-package"},"Rig package"),(0,i.kt)("p",null,"The main philosophy of Heft is to move build logic into plugin packages, so that your build process is defined by config files instead of program scripts. In a large monorepo, this greatly reduces maintenance costs, by ensuring that program scripts are developed as professional software and not ad hoc commands in a ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," file."),(0,i.kt)("p",null,"The Rush Stack ",(0,i.kt)("a",{parentName:"p",href:"/pages/intro/rig_packages"},"rig system"),' goes a step further, optionally moving config files into a centralized NPM package called a "rig." Rigs define standardized configurations for your projects. In a large monorepo, they formalize the configurations that your build team has agreed to support. Heft also allows ',(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," to be resolved from rig packages, reducing ",(0,i.kt)("strong",{parentName:"p"},"package.json")," clutter."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/tree/main/rigs/heft-web-rig"},"@rushstack/heft-web-rig")," is Rush Stack's reference rig for web projects."),(0,i.kt)("h3",{id:"rig-profile"},"Rig profile"),(0,i.kt)("p",null,'A single rig package can provide multiple "profiles" tailored for specific purposes. Profiles within a rig package share the same rigged ',(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),", and may also share configuration via ",(0,i.kt)("inlineCode",{parentName:"p"},'"extends"')," inheritance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-web-rig")," rig package currently defines ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/tree/main/rigs/heft-web-rig/profiles"},"two profiles"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"library"),"."))}m.isMDXComponent=!0}}]);