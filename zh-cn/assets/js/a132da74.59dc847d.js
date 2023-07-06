"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[1159],{158:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>g});var n=r(6393);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(g,s(s({ref:e},l),{},{components:r})):n.createElement(g,s({ref:e},l))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9061:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(9122),a=r(2501),o=(r(6393),r(158)),s=["components"],i={title:"api-extractor-task.json"},c=void 0,p={unversionedId:"pages/configs/api-extractor-task_json",id:"pages/configs/api-extractor-task_json",title:"api-extractor-task.json",description:"|                                           |                                                                                                                                         |",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/api-extractor-task_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/api-extractor-task_json",permalink:"/zh-cn/pages/configs/api-extractor-task_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/configs/api-extractor-task_json.md",tags:[],version:"current",frontMatter:{title:"api-extractor-task.json"},sidebar:"docsSidebar",previous:{title:"Environment variables",permalink:"/zh-cn/pages/configs/environment_vars"},next:{title:"heft.json",permalink:"/zh-cn/pages/configs/heft_json"}},l={},u=[{value:"Template",id:"template",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:u},f="wrapper";function g(t){var e=t.components,r=(0,a.Z)(t,s);return(0,o.kt)(f,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/api-extractor-task.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/pages/intro/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts"},"ApiExtractorPlugin"))))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Heft \u6784\u5efa\u7cfb\u7edf\u4e2d API Extractor \u7684\u914d\u7f6e\u9879\n * \u8fd9\u4e2a\u53ef\u9009\u7684\u6587\u4ef6\u5b9a\u4e49\u4e86 Heft \u7684\u8c03\u7528\u65b9\u5f0f\uff0c\u4e3b\u8981\u7531 API Extractor \u7684\u914d\u7f6e\u6587\u4ef6 "api-extractor.json" \u63a7\u5236\u3002\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/api-extractor-task.schema.json"\n\n  /**\n   * \u53ef\u9009\u5730\u6307\u5b9a\u53e6\u4e00\u4e2a\u7528\u4e8e\u7ee7\u627f\u914d\u7f6e\u7684 JSON \u914d\u7f6e\u6587\u4ef6\u3002\n   * \u8fd9\u662f\u591a\u9879\u76ee\u4e4b\u95f4\u5171\u4eab\u914d\u7f6e\u7684\u4e00\u79cd\u65b9\u6cd5\u3002\n   */\n  // "extends": "base-project/config/api-extractor-task.json",\n\n  /**\n   * \u5982\u679c\u8bbe\u7f6e\u4e3a "true"\uff0c\u5219\u4f7f\u7528\u9879\u76ee\u7684 TypeScript \u7f16\u8bd1\u5668\u7248\u672c\u8fdb\u884c API Extractor\n   * \u5206\u6790\u3002API Extractor \u5185 TypeScript \u7f16\u8bd1\u5668\u901a\u5e38\u53ef\u4ee5\u6b63\u786e\u5730\u5206\u6790\u7531\u65e7\u7248\u672c\u8bd1\u5668\u751f\u6210\n   * \u7684\u7c7b\u578b\uff0c\u4f46\u662f\u5f15\u7528\u9879\u76ee\u7684\u7f16\u8bd1\u5668\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002\n   * \u5982\u679c\u5728\u4f7f\u7528 API Extractor \u7684\u5185\u7f6e\u7f16\u8bd1\u5668\u65f6\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u5c06\u6b64\u9009\u9879\u8bbe\u7f6e\u4e3a "true"\u3002\n   *\n   * \u5b83\u5bf9\u5e94\u4e8e API Extractor CLI \u4e2d "--typescript-compiler-folder" \u548c\n   * "IExtractorInvokeOptions.typescriptCompilerFolder" \u5b57\u6bb5\u3002\u8be5\u5b57\u6bb5\u9ed8\u8ba4\u503c\u662ffalse\u3002\n   */\n  // "useProjectTypescriptVersion": true\n}\n')),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/pages/tasks/api-extractor"},"api-extractor")," task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor")," \u5b98\u7f51")))}g.isMDXComponent=!0}}]);