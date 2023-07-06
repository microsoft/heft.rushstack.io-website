"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[802],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var s=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||f[g]||a;return n?s.createElement(m,o(o({ref:t},c),{},{components:n})):s.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var s=n(9122),r=n(2501),a=(n(6393),n(158)),o=["components"],i={title:"sass.json"},l=void 0,p={unversionedId:"pages/configs/sass_json",id:"pages/configs/sass_json",title:"sass.json",description:"|                                          |                                                                                                                       |",source:"@site/docs/pages/configs/sass_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/sass_json",permalink:"/pages/configs/sass_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/configs/sass_json.md",tags:[],version:"current",frontMatter:{title:"sass.json"},sidebar:"docsSidebar",previous:{title:"rig.json",permalink:"/pages/configs/rig_json"},next:{title:"typescript.json",permalink:"/pages/configs/typescript_json"}},c={},u=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],f={toc:u},g="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)(g,(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"File path:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"<","project folder",">","/config/rig.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/intro/rig_packages"},(0,a.kt)("strong",{parentName:"a"},"Riggable?"))),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-sass-plugin/src/SassPlugin.ts"},"SassTypingsPlugin"))))),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the Sass Typings plugin for the Heft build system.\n *\n * This optional additional file customizes Sass parsing, module resolution, and emitting of\n * typings files for the Typescript compiler.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/sass.schema.json"\n\n  /**\n   * Source code root directory.\n   * This is where .css, .sass, and .scss files will be searched for to generate typings.\n   */\n  // "srcFolder": "src",\n\n  /**\n   * Output directory for generated Sass typings.\n   */\n  // "generatedTsFolder": "temp/sass-ts",\n\n  /**\n   * Determines if export values are wrapped in a default property, or not.\n   */\n  // "exportAsDefault": true,\n\n  /**\n   * Files with these extensions will pass through the Sass transpiler for typings generation.\n   */\n  // "fileExtensions": [\n  //   ".sass",\n  //   ".scss",\n  //   ".css"\n  // ],\n\n  /**\n   * A list of paths used when resolving Sass imports.\n   */\n  // "importIncludePaths": [\n  //   "node_modules",\n  //   "src"\n  // ],\n\n  /**\n   * A list of file paths relative to the "src" folder that should be excluded from typings generation.\n   */\n  // "excludeFiles": []\n}\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pages/tasks/sass-typings"},"sass-typings")," task")))}m.isMDXComponent=!0}}]);