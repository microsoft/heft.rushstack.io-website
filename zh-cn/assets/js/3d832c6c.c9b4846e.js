"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[4377],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5989:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(6393),r=n(5881);const s={tabItem:"tabItem_zxeG"};function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n},t)}},1453:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(9122),r=n(6393),s=n(5881),i=n(1149),o=n(8791),l=n(5602),u=n(7947),p=n(2026);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function f(e){var t,n,a,s,i=e.defaultValue,o=e.queryString,l=void 0!==o&&o,u=e.groupId,c=m(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),b=f[0],k=f[1],g=h({queryString:l,groupId:u}),v=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),N=w[0],j=w[1],T=function(){var e=null!=v?v:N;return d({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),j(e)}),[y,j,c]),tabValues:c}}var b=n(7499);const k={tabList:"tabList_ncVf",tabItem:"tabItem_YGAs"};function g(e){var t=e.className,n=e.block,o=e.selectedValue,l=e.selectValue,u=e.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),l(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var s,i=p.indexOf(e.currentTarget)-1;n=null!=(s=p[i])?s:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:m},i,{className:(0,s.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var s=n.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},4655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var a=n(9122),r=n(2501),s=(n(6393),n(158)),i=n(1453),o=n(5989),l=["components"],u={title:"Webpack plugins"},p=void 0,c={unversionedId:"pages/plugins/webpack",id:"pages/plugins/webpack",title:"Webpack plugins",description:"|     |     |",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/plugins/webpack.md",sourceDirName:"pages/plugins",slug:"/pages/plugins/webpack",permalink:"/zh-cn/pages/plugins/webpack",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/plugins/webpack.md",tags:[],version:"current",frontMatter:{title:"Webpack plugins"},sidebar:"docsSidebar",previous:{title:"TypeScript plugin",permalink:"/zh-cn/pages/plugins/typescript"},next:{title:"Environment variables",permalink:"/zh-cn/pages/configs/environment_vars"}},m={},d=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"package.json dependencies",id:"packagejson-dependencies",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Interaction with Jest",id:"interaction-with-jest",level:3},{value:"CLI parameters",id:"cli-parameters",level:2}],h={toc:d},f="wrapper";function b(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)(f,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("table",null,(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Plugin packages:")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack4-plugin"},"@rushstack/heft-webpack4-plugin")," ",(0,s.kt)("br",null),"  ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack5-plugin"},"@rushstack/heft-webpack5-plugin"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Plugin names:")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack4-plugin/heft-plugin.json"},"webpack4-plugin")," implemented by ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack4-plugin/src/Webpack4Plugin.ts"},"Webpack4Plugin.ts")," ",(0,s.kt)("br",null)," ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack5-plugin/heft-plugin.json"},"webpack5-plugin")," implemented by ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack5-plugin/src/Webpack5Plugin.ts"},"Webpack5Plugin.ts"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Plugin config file:")),(0,s.kt)("td",{parentName:"tr",align:null},"(none)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"heft.json options:")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack4-plugin/src/Webpack4Plugin.ts"},"IWebpackPluginOptions (Webpack 4)")," ",(0,s.kt)("br",null)," ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack5-plugin/src/Webpack5Plugin.ts"},"IWebpackPluginOptions (Webpack 5)"))))),(0,s.kt)("p",null,"This task invokes the ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," tool to produce application bundles. It provides features such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Combining many small .js files into one large file for faster downloads"),(0,s.kt)("li",{parentName:"ul"},'Improving performance by applying various compiler optimizations such as inlining and dead code elimination ("tree shaking")'),(0,s.kt)("li",{parentName:"ul"},"Compressing and obfuscating code by shortening identifiers, using the ",(0,s.kt)("a",{parentName:"li",href:"https://terser.org/"},"Terser")," minifier by default"),(0,s.kt)("li",{parentName:"ul"},"Converting assets such as .css or even images into embedded JavaScript objects")),(0,s.kt)("p",null,"Webpack also has the ability to act as a general purpose build system, for example by invoking a compiler or linter, however Heft does not use it that way. Heft invokes the TypeScript compiler to produce intermediate .js files which become the inputs for other tasks such as Jest or Webpack. This reduces the number of compiler passes, and avoids the need for compiler optimizations to be reimplemented multiple times for different contexts (",(0,s.kt)("inlineCode",{parentName:"p"},"ts-loader"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest"),", etc)."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-webpack-basic-tutorial"},"heft-webpack-basic-tutorial")," sample project illustrates a complete project using Webpack and React.")),(0,s.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,s.kt)("p",null,"Webpack should be used for projects whose output is a web application bundle. Webpack can also be used to bundle Node.js tools or services, however this is less common."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"In these notes, we'll assume you're using Webpack 5. For Webpack 4, substitute\n",(0,s.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-webpack4-plugin")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-webpack5-plugin")," everywhere.\nTheir usage is essentially identical.")),(0,s.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,s.kt)("p",null,"The simplest way to use Webpack is via\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/tree/main/rigs/heft-web-rig"},"@rushstack/heft-web-rig"),",\nwhich provides a standard configuration with a recommended set of plugins and loaders."),(0,s.kt)("p",null,"Otherwise, if you're not using a rig, you'll need to add the plugin package to your project:"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"rush-install",label:"Rush",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are using Rush, run this shell command in your project folder:\nrush add --package @rushstack/heft-webpack5-plugin --dev\n"))),(0,s.kt)(o.Z,{value:"npm-install",label:"NPM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are using vanilla NPM, run this shell command in your project folder:\nnpm install @rushstack/heft-webpack5-plugin --save-dev\n")))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-webpack5-plugin")," package has a peer dependency on ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack"),". If you're not using a rig,\nthen you must add this dependency as well:"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"rush-install",label:"Rush",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are using Rush, run this shell command in your project folder:\nrush add --package webpack --dev\n"))),(0,s.kt)(o.Z,{value:"npm-install",label:"NPM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are using vanilla NPM, run this shell command in your project folder:\nnpm install webpack --save-dev\n")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Important:")," If you are using ",(0,s.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-web-rig"),", then the peer dependency is satisfied by the rig,\nso it's not strictly necessarily to add ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack")," to your project's ",(0,s.kt)("strong",{parentName:"p"},"package.json")," dependencies.\nHowever doing so can be useful, for example to satisfy peer dependencies of project-specific loaders.\nIf you add it, make sure the same SemVer range is the same as the rig's\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/rigs/heft-web-rig/package.json"},"heft-web-rig/package.json"),"\nto avoid inconsistencies.")),(0,s.kt)("p",null,"You should also add ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/webpack-env")," to your project, which provides TypeScript typings for the Webpack environment:"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"rush-install",label:"Rush",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are using Rush, run this shell command in your project folder:\nrush add --package @types/webpack-env --exact  --dev\n\n# Because @types packages don't follow SemVer, it's a good idea to use --exact\n"))),(0,s.kt)(o.Z,{value:"npm-install",label:"NPM",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are using vanilla NPM, run this shell command in your project folder:\nnpm install @types/webpack-env --save-dev --save-exact\n\n# Because @types packages don't follow SemVer, it's a good idea to use --save-exact\n")))),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Since ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/webpack-env")," defines global APIs (that aren't accessed using regular ",(0,s.kt)("inlineCode",{parentName:"p"},"import")," statements), it must\nbe be added to your TypeScript configuration like this:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"<","project folder",">","/tsconfig.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "extends": "./node_modules/@rushstack/heft-web-rig/profiles/library/tsconfig-base.json",\n  "compilerOptions": {\n    "types": [\n      "webpack-env" // <---- ADD THIS\n    ]\n  }\n}\n')),(0,s.kt)("p",null,"If Webpack is not already being provided by a rig, your ",(0,s.kt)("a",{parentName:"p",href:"/zh-cn/pages/configs/heft_json"},"heft.json config file")," could invoke it\nlike in this example:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"<","project folder",">","/config/heft.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n\n  "aliasesByName": {\n    "start": {\n      "actionName": "build-watch",\n      "defaultParameters": ["--serve"]\n    }\n  },\n\n  "phasesByName": {\n    "build": {\n      "cleanFiles": [\n        { "sourcePath": "dist" },\n        { "sourcePath": "lib" },\n        { "sourcePath": "lib-amd" },\n        { "sourcePath": "lib-commonjs" },\n        { "sourcePath": "lib-es6" }\n      ],\n      "tasksByName": {\n        "sass": {\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-sass-plugin"\n          }\n        },\n        "typescript": {\n          "taskDependencies": ["sass"],\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-typescript-plugin"\n          }\n        },\n        "webpack": {\n          "taskDependencies": ["typescript"],\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-webpack5-plugin"\n          }\n        }\n        . . .\n      }\n    },\n    . . .\n  }\n}\n')),(0,s.kt)("p",null,"Next, create a ",(0,s.kt)("strong",{parentName:"p"},"webpack.config.js")," file in your project folder. Here is a rudimentary example:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"<","project folder",">","/webpack.config.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nconst path = require('path');\n\nconst webpackConfig = {\n  mode: 'development',\n  resolve: {\n    // Note: Do not specify '.ts' or '.tsx' here.  Heft invokes Webpack as a post-process after the compiler.\n    extensions: ['.js', '.jsx', '.json']\n  },\n  entry: {\n    app: path.join(__dirname, 'lib', 'index.js')\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    filename: '[name]_[contenthash].js'\n  }\n};\n\nmodule.exports = webpackConfig;\n")),(0,s.kt)("p",null,"If you want to use a slightly different configuration when developing using the localhost dev server,\nyou can optionally create a second file called ",(0,s.kt)("strong",{parentName:"p"},"webpack.dev.config.js"),"."),(0,s.kt)("p",null,"To start the localhost dev server, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"heft start")," command, which conventionally is defined as an alias\nfor ",(0,s.kt)("inlineCode",{parentName:"p"},"heft build-watch --serve")," (see ",(0,s.kt)("inlineCode",{parentName:"p"},"aliasesByName")," above). Whenever you save a change to a source file,\nHeft's watch mode will recompile your project, then Webpack hot module reloading should refresh your\nweb browser with the latest build of the app."),(0,s.kt)("h3",{id:"interaction-with-jest"},"Interaction with Jest"),(0,s.kt)("p",null,"Webpack works best with the ",(0,s.kt)("inlineCode",{parentName:"p"},"esnext")," module format, whereas Jest must use the ",(0,s.kt)("inlineCode",{parentName:"p"},"commonjs")," module format because\nits tests are executed by the Node.js runtime. In order to use Webpack and Jest together, you will need\nto emit both module formats. This is described in the ",(0,s.kt)("a",{parentName:"p",href:"/zh-cn/pages/plugins/jest"},"Jest plugin")," section."),(0,s.kt)("h2",{id:"cli-parameters"},"CLI parameters"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-webpack5-plugin/heft-plugin.json"},"heft-jest-plugin/heft-plugin.json")," defines these parameters:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  --serve\n                        Start a local web server for testing purposes using\n                        webpack-dev-server. This parameter is only available\n                        when running in watch mode.\n")))}b.isMDXComponent=!0}}]);