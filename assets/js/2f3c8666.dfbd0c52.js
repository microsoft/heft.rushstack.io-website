"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[8740],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var s=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?s.createElement(f,i(i({ref:t},c),{},{components:n})):s.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var s=n(9122),r=n(2501),o=(n(6393),n(158)),i=["components"],a={title:"typescript.json"},l=void 0,p={unversionedId:"pages/configs/typescript_json",id:"version-0.50.0/pages/configs/typescript_json",title:"typescript.json",description:"|                                           |                                                                                                                                                                                                                                                                                                                                                                             |",source:"@site/versioned_docs/version-0.50.0/pages/configs/typescript_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/typescript_json",permalink:"/0.50.0/pages/configs/typescript_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/versioned_docs/version-0.50.0/pages/configs/typescript_json.md",tags:[],version:"0.50.0",frontMatter:{title:"typescript.json"},sidebar:"docsSidebar",previous:{title:"sass.json",permalink:"/0.50.0/pages/configs/sass_json"},next:{title:"Other config files",permalink:"/0.50.0/pages/configs/other_files"}},c={},d=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],u={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/typescript.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/0.50.0/pages/intro/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/TypeScriptPlugin/TypeScriptPlugin.ts"},"TypeScriptPlugin"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/CopyStaticAssetsPlugin.ts"},"CopyStaticAssetsPlugin"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-jest-plugin/src/JestPlugin.ts"},"JestPlugin"))))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the TypeScript plugin for Heft.  This plugin also manages linting.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/typescript.schema.json",\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/typescript.json",\n\n  /**\n   * Can be set to "copy" or "hardlink". If set to "copy", copy files from cache.\n   * If set to "hardlink", files will be hardlinked to the cache location.\n   * This option is useful when producing a tarball of build output as TAR files don\'t\n   * handle these hardlinks correctly. "hardlink" is the default behavior.\n   */\n  // "copyFromCacheMode": "copy",\n\n  /**\n   * If provided, emit these module kinds in addition to the modules specified in the tsconfig.\n   * Note that this option only applies to the main tsconfig.json configuration.\n   */\n  "additionalModuleKindsToEmit": [\n    // {\n    //   /**\n    //    * (Required) Must be one of "commonjs", "amd", "umd", "system", "es2015", "esnext"\n    //    */\n    //  "moduleKind": "amd",\n    //\n    //   /**\n    //    * (Required) The name of the folder where the output will be written.\n    //    */\n    //    "outFolderName": "lib-amd"\n    //\n    //   /**\n    //    * File extension to use instead of \'.js\' for emitted ECMAScript files.\n    //    * For example, \'.cjs\' to indicate commonjs content, or \'.mjs\' to indicate ECMAScript modules.\n    //    */\n    //    "jsExtensionOverride": ".cjs"\n    // }\n  ],\n\n  /**\n   * Specifies the intermediary folder that tests will use.  Because Jest uses the\n   * Node.js runtime to execute tests, the module format must be CommonJS.\n   *\n   * The default value is "lib".\n   */\n  // "emitFolderNameForTests": "lib-commonjs",\n\n  /**\n   * If set to "true", the TSlint task will not be invoked.\n   */\n  // "disableTslint": true,\n\n  /**\n   * Set this to change the maximum number of file handles that will be opened concurrently for writing.\n   * The default is 50.\n   */\n  // "maxWriteParallelism": 50,\n\n  /**\n   * Configures additional file types that should be copied into the TypeScript compiler\'s emit folders, for example\n   * so that these files can be resolved by import statements.\n   */\n  "staticAssetsToCopy": {\n    /**\n     * File extensions that should be copied from the src folder to the destination folder(s).\n     */\n    // "fileExtensions": [\n    //   ".json", ".css"\n    // ],\n    /**\n     * Glob patterns that should be explicitly included.\n     */\n    // "includeGlobs": [\n    //   "some/path/*.js"\n    // ],\n    /**\n     * Glob patterns that should be explicitly excluded. This takes precedence over globs listed\n     * in "includeGlobs" and files that match the file extensions provided in "fileExtensions".\n     */\n    // "excludeGlobs": [\n    //   "some/path/*.css"\n    // ]\n  }\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.50.0/pages/tasks/typescript"},"typescript")," task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.50.0/pages/tasks/copy-static-assets"},"copy-static-assets")," task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.50.0/pages/tasks/jest"},"jest")," task")))}f.isMDXComponent=!0}}]);