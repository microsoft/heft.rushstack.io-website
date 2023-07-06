"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[367],{158:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var r=a(6393);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),o=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return r.createElement(l.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=o(a),m=n,k=c["".concat(l,".").concat(m)]||c[m]||g[m]||s;return a?r.createElement(k,i(i({ref:e},u),{},{components:a})):r.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,i=new Array(s);i[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[c]="string"==typeof t?t:n,i[1]=p;for(var o=2;o<s;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5090:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=a(9122),n=a(2501),s=(a(6393),a(158)),i=["components"],p={title:"Core plugins"},l=void 0,o={unversionedId:"pages/intro/core_plugins",id:"pages/intro/core_plugins",title:"Core plugins",description:"Built-in plugins",source:"@site/docs/pages/intro/core_plugins.md",sourceDirName:"pages/intro",slug:"/pages/intro/core_plugins",permalink:"/pages/intro/core_plugins",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/intro/core_plugins.md",tags:[],version:"current",frontMatter:{title:"Core plugins"},sidebar:"docsSidebar",previous:{title:"Heft architecture",permalink:"/pages/intro/architecture"},next:{title:"Using rig packages",permalink:"/pages/intro/rig_packages"}},u={},c=[{value:"Built-in plugins",id:"built-in-plugins",level:2},{value:"Packaged plugins",id:"packaged-plugins",level:2}],g={toc:c},m="wrapper";function k(t){var e=t.components,a=(0,n.Z)(t,i);return(0,s.kt)(m,(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"built-in-plugins"},"Built-in plugins"),(0,s.kt)("p",null,"These plugins are bundled with the ",(0,s.kt)("inlineCode",{parentName:"p"},"@rushstack/heft")," package and are enabled by default:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts"},"ApiExtractorPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/api-extractor"},"api-extractor")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/CopyFilesPlugin.ts"},"CopyFilesPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/copy-files"},"copy-files")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/CopyStaticAssetsPlugin.ts"},"CopyStaticAssetsPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/copy-static-assets"},"copy-static-assets")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/DeleteGlobsPlugin.ts"},"DeleteGlobsPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/delete-globs"},"delete-globs")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/NodeServicePlugin.ts"},"NodeServicePlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/node-service"},"node-service")," task for developing Node.js services")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/ProjectValidatorPlugin.ts"},"ProjectValidatorPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"An internal Heft plugin that performs basic validation such as warning about obsolete files in the ",(0,s.kt)("inlineCode",{parentName:"td"},".heft")," folder")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-sass-plugin/src/SassTypingsPlugin.ts"},"SassTypingsPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/sass-typings"},"sass-typings")," task")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/TypeScriptPlugin/TypeScriptPlugin.ts"},"TypeScriptPlugin")),(0,s.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/typescript"},"typescript"),", ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/eslint"},"eslint"),", and ",(0,s.kt)("a",{parentName:"td",href:"/pages/tasks/tslint"},"tslint")," tasks")))),(0,s.kt)("h2",{id:"packaged-plugins"},"Packaged plugins"),(0,s.kt)("p",null,"The following core plugins are published as separate NPM packages, and must be explicitly loaded using your\nproject's ",(0,s.kt)("a",{parentName:"p",href:"/pages/configs/heft_json"},"heft.json")," config file:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-jest-plugin"},"@rushstack/heft-jest-plugin")," - Implements the ",(0,s.kt)("a",{parentName:"li",href:"/pages/tasks/jest"},"jest")," task for unit tests"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-webpack5-plugin"},"@rushstack/heft-webpack5-plugin")," - Implements the ",(0,s.kt)("a",{parentName:"li",href:"/pages/tasks/webpack"},"webpack")," bundling and ",(0,s.kt)("inlineCode",{parentName:"li"},"webpack-dev-server")," functionality for Webpack 5"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-webpack4-plugin"},"@rushstack/heft-webpack4-plugin")," - Supports older projects using Webpack 4")))}k.isMDXComponent=!0}}]);