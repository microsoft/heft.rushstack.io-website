"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[4926],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(6393);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=s,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var r=n(9122),s=n(2501),o=(n(6393),n(158)),a=["components"],i={title:"node-service.json"},l=void 0,c={unversionedId:"pages/configs/node-service_json",id:"pages/configs/node-service_json",title:"node-service.json",description:"|                                           |                                                                                                                  |",source:"@site/docs/pages/configs/node-service_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/node-service_json",permalink:"/pages/configs/node-service_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/configs/node-service_json.md",tags:[],version:"current",frontMatter:{title:"node-service.json"},sidebar:"docsSidebar",previous:{title:"heft.json",permalink:"/pages/configs/heft_json"},next:{title:"rig.json",permalink:"/pages/configs/rig_json"}},p={},f=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],u={toc:f},m="wrapper";function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/node-service.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/intro/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/NodeServicePlugin.ts"},"NodeServicePlugin"))))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures "heft start" to launch a shell command such as a Node.js service.\n * Heft will watch for changes and restart the service process whenever it gets rebuilt.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/node-service.schema.json"\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/serve-command.json",\n\n  /**\n   * Specifies the name of a "scripts" command from the project\'s package.json file.\n   * When "heft start" is invoked, it will use this shell command to launch the\n   * service process.\n   *\n   * Default value: "serve"\n   */\n  // "commandName": "serve",\n\n  /**\n   * If false, then an error is reported if the "scripts" command is not found in the\n   * project\'s package.json.  If true, then no action will be taken.\n   *\n   * Default value: false\n   */\n  // "ignoreMissingScript": false,\n\n  /**\n   * Customizes the number of milliseconds to wait before restarting the child process,\n   * as measured from when the previous process exited.  If this interval is too small, then\n   * the new process may start while the developer is still saving changes, or while\n   * other monitoring processes are still holding OS locks.\n   *\n   * Default value: 2000\n   */\n  // "waitBeforeRestartMs": 2000,\n\n  /**\n   * Customizes the number of milliseconds to wait for the child process to be terminated (SIGTERM)\n   * before forcibly killing it.\n   *\n   * Default value: 2000\n   */\n  // "waitForTerminateMs": 2000,\n\n  /**\n   * Customizes the number of milliseconds to wait for the child process to be killed (SIGKILL)\n   * before giving up and abandoning it.\n   *\n   * Default value: 2000\n   */\n  // "waitForKillMs": 2000\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages/tasks/node-service"},"node-service")," task")))}d.isMDXComponent=!0}}]);