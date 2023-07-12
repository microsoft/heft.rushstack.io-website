"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[4490],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(9122),r=n(2501),i=(n(6393),n(158)),o=["components"],s={title:"Node.js service plugin"},l=void 0,p={unversionedId:"pages/plugins/node-service",id:"pages/plugins/node-service",title:"Node.js service plugin",description:"|     |     |",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/plugins/node-service.md",sourceDirName:"pages/plugins",slug:"/pages/plugins/node-service",permalink:"/zh-cn/pages/plugins/node-service",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/plugins/node-service.md",tags:[],version:"current",frontMatter:{title:"Node.js service plugin"},sidebar:"docsSidebar",previous:{title:"ESlint / TSLint plugins",permalink:"/zh-cn/pages/plugins/lint"},next:{title:"Run script plugin",permalink:"/zh-cn/pages/plugins/run-script"}},c={},u=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"package.json dependencies",id:"packagejson-dependencies",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Starting the service",id:"starting-the-service",level:2},{value:"CLI parameters",id:"cli-parameters",level:2}],m={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Plugin package:")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/tree/main/apps/heft"},"@rushstack/heft")," (built-in)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Plugin name:")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/heft-plugin.json"},"node-service-plugin")," implemented by ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/NodeServicePlugin.ts"},"NodeServicePlugin.ts"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Plugin config file:")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh-cn/pages/configs/node-service_json"},"node-service.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"heft.json options:")),(0,i.kt)("td",{parentName:"tr",align:null},"(none)")))),(0,i.kt)("p",null,"This plugin supports development of Node.js services using Heft. It enables ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start")," to launch your service on a ",(0,i.kt)("strong",{parentName:"p"},"localhost")," port. Whenever you save a change to your source code, the project will be rebuilt, and then the service will be restarted."),(0,i.kt)("p",null,"This functionality is similar to standalone launchers such as ",(0,i.kt)("a",{parentName:"p",href:"https://nodemon.io/"},"nodemon")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-dev"},"node-dev"),". They can also be used with Heft, however the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-service")," task has the benefit of being ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/intro/rig_packages"},"riggable")," and better integrated with Heft's workflow."),(0,i.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,i.kt)("p",null,"Use this plugin if your project is a Node.js service. It has been tested with the following popular frameworks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://expressjs.com/"},"Express"),' - the classic "unopinionated" Node.js framework with minimal structure and a very large ecosystem of community plugins'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/"},"Fastify")," - similar in character to Express, but with improved validation and a larger set of core components"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hapi.dev/"},"HapiJS"),' - a good "batteries included" framework built on a comprehensive foundation of officially maintained components'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nestjs.com/"},"NestJS")," - a popular framework offering paid enterprise support and a heavyweight system of abstractions using ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata"},"emitDecoratorMetadata"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Security Note:"),' Unlike a web browser application, a Node.js service typically runs in a trusted data center\nwith access to production databases and internal company services. And unlike a developer tool, a Node.js service\nwill accept inputs from potentially malicious clients on the public internet. It\'s a good idea to carefully review\neach library that your service will load. Who maintains the NPM package? Is it being actively developed? Does\nthe code follow engineering best practices? These questions may be more important than "How many times was\nit downloaded?"')),(0,i.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,i.kt)("p",null,"None - this feature is built-in to ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are using the standard ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/tree/main/rigs/heft-node-rig"},"@rushstack/heft-node-rig"),",\nthen ",(0,i.kt)("inlineCode",{parentName:"p"},"node-service-plugin")," will already be loaded and configured.\nOtherwise, your ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/configs/heft_json"},"heft.json config file")," could invoke it in this example:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"<","project folder",">","/config/heft.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n\n  "aliasesByName": {\n    "start": {\n      "actionName": "build-watch",\n      "defaultParameters": ["--serve"]\n    }\n  },\n  "phasesByName": {\n    "build": {\n      "cleanFiles": [{ "sourcePath": "dist" }, { "sourcePath": "lib" }, { "sourcePath": "lib-commonjs" }],\n      "tasksByName": {\n        "typescript": {\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-typescript-plugin"\n          }\n        },\n        . . .\n        "node-service": {\n          "taskDependencies": ["typescript"],\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft",\n            "pluginName": "node-service-plugin"\n          }\n        }\n      }\n    },\n\n    . . .\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"node-service")," plugin looks for a ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/configs/node-service_json"},"config/node-service.json")," config file.\nThe defaults work for most cases, so the file may be mostly empty.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a script to your ",(0,i.kt)("strong",{parentName:"p"},"package.json")," file containing the command to launch the service. The default name\nfor this command is ",(0,i.kt)("inlineCode",{parentName:"p"},'"serve"'),". For example:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"<","project folder",">","/package.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "scripts": {\n    "build": "heft build --clean",\n    "start": "heft start",\n    "serve": "node lib/start.js"\n  },\n')))),(0,i.kt)("p",null,"If your framework uses a wrapper such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-cli"},"fastify-cli"),", then\nyour ",(0,i.kt)("inlineCode",{parentName:"p"},'"serve"')," command might be ",(0,i.kt)("inlineCode",{parentName:"p"},'"fastify start ./lib/start.js"')," instead."),(0,i.kt)("h2",{id:"starting-the-service"},"Starting the service"),(0,i.kt)("p",null,"To start the localhost dev server, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start")," command, which conventionally is defined as an alias\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build-watch --serve")," (see ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasesByName")," above). Whenever you save a change to a source file,\nHeft's watch mode will recompile your project, then automatically stop the service process and restart it."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If the ",(0,i.kt)("inlineCode",{parentName:"p"},"--serve")," parameter is included in the Heft command-line, then ",(0,i.kt)("inlineCode",{parentName:"p"},"node-service-plugin"),"\nperforms no action, and will not even report an error if ",(0,i.kt)("strong",{parentName:"p"},"config/node-service.json")," is absent.")),(0,i.kt)("p",null,"When debugging, you may prefer to use the VS Code debugger to launch your service:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"<","project folder",">","/.vscode/launch.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug the service",\n      "program": "${workspaceFolder}/lib/start.js",\n      "args": [],\n      "console": "integratedTerminal"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"The process created by VS Code would conflict with the process that is launched by ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start"),". To use watch\nmode in this situation, invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build-watch")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"--serve"),". It will recompile your project whenever the\ncode is changed, but without launching the service."),(0,i.kt)("h2",{id:"cli-parameters"},"CLI parameters"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/heft-plugin.json"},"heft/heft-plugin.json")," defines these parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  --serve\n                        Start a local web server for testing purposes. This\n                        parameter is only available when running in watch\n                        mode.\n")))}h.isMDXComponent=!0}}]);