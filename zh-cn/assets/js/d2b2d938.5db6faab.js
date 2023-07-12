"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[2202],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=n(9122),r=n(2501),i=(n(6393),n(158)),s=["components"],a={title:"typescript.json"},l=void 0,p={unversionedId:"pages/configs/typescript_json",id:"pages/configs/typescript_json",title:"typescript.json",description:"|     |     |",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/typescript_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/typescript_json",permalink:"/zh-cn/pages/configs/typescript_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/configs/typescript_json.md",tags:[],version:"current",frontMatter:{title:"typescript.json"},sidebar:"docsSidebar",previous:{title:"sass.json",permalink:"/zh-cn/pages/configs/sass_json"},next:{title:"Other config files",permalink:"/zh-cn/pages/configs/other_files"}},c={},u=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],d={toc:u},f="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)(f,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"File path:")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"<","project folder",">","/config/typescript.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh-cn/pages/intro/rig_packages"},(0,i.kt)("strong",{parentName:"a"},"Riggable?"))),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Associated plugin:")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh-cn/pages/plugins/typescript"},"TypeScript plugin"))))),(0,i.kt)("h2",{id:"template"},"Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the TypeScript plugin for Heft.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/typescript.schema.json",\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/typescript.json",\n\n  /**\n   * If provided, emit these module kinds in addition to the modules specified in the tsconfig.\n   * Note that this option only applies to the main tsconfig.json configuration.\n   */\n  "additionalModuleKindsToEmit": [\n    // {\n    //   /**\n    //    * (REQUIRED) Must be one of "commonjs", "amd", "umd", "system", "es2015", "esnext"\n    //    */\n    //  "moduleKind": "amd",\n    //\n    //   /**\n    //    * (REQUIRED) The name of the folder where the output will be written.\n    //    */\n    //    "outFolderName": "lib-amd"\n    // }\n  ],\n\n  /**\n   * If true, emit CommonJS module output to the folder specified in the tsconfig "outDir"\n   * compiler option with the .cjs extension alongside (or instead of, if tsconfig.json\n   * specifies CommonJS) the default compilation output.\n   */\n  // "emitCjsExtensionForCommonJS": true,\n\n  /**\n   * If true, emit ESNext module output to the folder specified in the tsconfig "outDir"\n   * compiler option with the .mjs extension alongside (or instead of, if tsconfig.js\n   * specifies ESNext) the default compilation output.\n   */\n  // "emitMjsExtensionForESModule": true,\n\n  /**\n   * If true, enable behavior analogous to the "tsc --build" command. Will build projects\n   * referenced by the main project. Note that this will effectively enable "noEmitOnError".\n   */\n  // "buildProjectReferences": true,\n\n  /**\n   * If true, and the tsconfig.json has "isolatedModules": true, then transpilation will happen\n   * in parallel in a worker thread.\n   */\n  // "useTranspilerWorker": true,\n\n  /**\n   * Specifies the tsconfig.json file that will be used for compilation. Equivalent to\n   * the "project" argument for the \'tsc\' and \'tslint\' command line tools.\n   * The default value is "./tsconfig.json".\n   */\n  // "project": "tsconfig.special.json",\n\n  /**\n   * Configures additional file types that should be copied into the TypeScript compiler\'s emit folders, for example\n   * so that these files can be resolved by import statements.\n   */\n  "staticAssetsToCopy": {\n    /**\n     * File extensions that should be copied from the src folder to the destination folder(s).\n     */\n    // "fileExtensions": [\n    //   ".json", ".css"\n    // ],\n\n    /**\n     * Glob patterns that should be explicitly included.\n     */\n    // "includeGlobs": [\n    //   "some/path/*.js"\n    // ],\n\n    /**\n     * Glob patterns that should be explicitly excluded. This takes precedence over globs listed\n     * in "includeGlobs" and files that match the file extensions provided in "fileExtensions".\n     */\n    // "excludeGlobs": [\n    //   "some/path/*.css"\n    // ]\n  }\n}\n')),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-cn/pages/plugins/typescript"},"TypeScript plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-cn/pages/plugins/jest"},"Jest plugin"))))}m.isMDXComponent=!0}}]);