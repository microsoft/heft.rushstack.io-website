"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[1332],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(9122),a=n(2501),o=(n(6393),n(158)),s=["components"],i={title:"node-service.json"},c=void 0,l={unversionedId:"pages/configs/node-service_json",id:"pages/configs/node-service_json",title:"node-service.json",description:"|                                           |                                                                                                                    |",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/node-service_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/node-service_json",permalink:"/zh-cn/pages/configs/node-service_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/configs/node-service_json.md",tags:[],version:"current",frontMatter:{title:"node-service.json"},sidebar:"docsSidebar",previous:{title:"heft.json",permalink:"/zh-cn/pages/configs/heft_json"},next:{title:"rig.json",permalink:"/zh-cn/pages/configs/rig_json"}},p={},u=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],f={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/node-service.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/pages/intro/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/NodeServicePlugin.ts"},"NodeServicePlugin"))))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u914d\u7f6e "heft start" \u6765\u542f\u52a8 Node.js \u670d\u52a1\n * Heft \u4f1a\u76d1\u542c\u53d8\u5316\u5e76\u5728\u91cd\u65b0\u6784\u5efa\u65f6\u91cd\u542f\u670d\u52a1\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/node-service.schema.json"\n\n  /**\n   * \u53ef\u9009\u5730\u6307\u5b9a\u53e6\u4e00\u4e2a\u7528\u4e8e\u7ee7\u627f\u914d\u7f6e\u7684 JSON \u914d\u7f6e\u6587\u4ef6\u3002\n   * \u8fd9\u662f\u591a\u9879\u76ee\u4e4b\u95f4\u5171\u4eab\u914d\u7f6e\u7684\u4e00\u79cd\u65b9\u6cd5\u3002\n   */\n  // "extends": "base-project/config/serve-command.json",\n\n  /**\n   * \u4ece\u9879\u76ee\u7684 package.json \u6587\u4ef6\u4e2d\u6307\u5b9a\u4e00\u4e2a "scripts" \u811a\u672c\u3002\n   * \u5f53 "heft start" \u88ab\u8c03\u7528\u65f6\uff0c\u5b83\u5c06\u4f7f\u7528\u8fd9\u4e2a shell \u547d\u4ee4\u6765\u542f\u52a8\u670d\u52a1\u8fdb\u7a0b\u3002\n   *\n   * \u9ed8\u8ba4\u503c\u4e3a "serve"\n   */\n  // "commandName": "serve",\n\n  /**\n   * \u5982\u679c\u662f false\uff0c\u90a3\u4e48\u5982\u679c\u5728\u9879\u76ee\u7684 package.json \u4e2d\u6ca1\u6709\u627e\u5230 "scripts" \u547d\u4ee4\uff0c\u5219\u4f1a\u9519\u8bef\u3002\n   * \u5982\u679c\u662ftrue\uff0c\u5219\u4e0d\u505a\u4efb\u4f55\u5904\u7406\u3002\n   *\n   * \u9ed8\u8ba4\u503c\u4e3a false\n   */\n  // "ignoreMissingScript": false,\n\n  /**\n   * \u81ea\u5b9a\u4e49\u9000\u51fa\u524d\u4e00\u4e2a\u8fdb\u7a0b\u5230\u91cd\u542f\u5b50\u8fdb\u7a0b\u524d\u7684\u7b49\u5f85\u65f6\u95f4\u3002\n   * \u5982\u679c\u8fd9\u4e2a\u65f6\u95f4\u95f4\u9694\u592a\u77ed\uff0c\u90a3\u4e48\u5f53\u5f00\u53d1\u8005\u4f9d\u65e7\u5904\u4e8e\u4fdd\u5b58\u6587\u4ef6\u65f6\u65b0\u8fdb\u7a0b\u542f\u52a8\uff0c\u6216\u8005\u5728\u5176\u4ed6\u76d1\u63a7\u8fdb\u7a0b\u4ecd\u5728\u6301\u6709\u64cd\u4f5c\u7cfb\u7edf\u9501\u65f6\u542f\u52a8\u3002\n   *\n   * \u9ed8\u8ba4\u503c\u4e3a 2000, \u5355\u4f4d\u4e3a\u6beb\u79d2\n   */\n  // "waitBeforeRestartMs": 2000,\n\n  /**\n   * \u81ea\u5b9a\u4e49\u5b50\u8fdb\u7a0b\u5728\u88ab\u5f3a\u5236\u6740\u6b7b\u524d\u7b49\u5f85\u7684\u65f6\u95f4(SIGTERM)\u3002\n   * \u9ed8\u8ba4\u503c\u4e3a 2000, \u5355\u4f4d\u4e3a\u6beb\u79d2\n   */\n  // "waitForTerminateMs": 2000,\n\n  /**\n   * \u81ea\u5b9a\u4e49\u5b50\u8fdb\u7a0b\u88ab\u629b\u5f03\u524d\u7684\u7b49\u5f85\u65f6\u95f4(SIGKILL)\u3002\n   * \u9ed8\u8ba4\u503c\u4e3a 2000, \u5355\u4f4d\u4e3a\u6beb\u79d2\n   */\n  // "waitForKillMs": 2000\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/pages/tasks/node-service"},"node-service")," task")))}d.isMDXComponent=!0}}]);