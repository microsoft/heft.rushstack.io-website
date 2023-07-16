"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[3252],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||_[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(9122),a=n(2501),i=(n(6393),n(158)),o=["components"],l={title:"\u73af\u5883\u53d8\u91cf"},s=void 0,p={unversionedId:"pages/configs/environment_vars",id:"pages/configs/environment_vars",title:"\u73af\u5883\u53d8\u91cf",description:"Heft \u7684\u884c\u4e3a\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u63cf\u8ff0\u7684 shell \u73af\u5883\u53d8\u91cf\u8fdb\u884c\u81ea\u5b9a\u4e49\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/environment_vars.md",sourceDirName:"pages/configs",slug:"/pages/configs/environment_vars",permalink:"/zh-cn/pages/configs/environment_vars",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/configs/environment_vars.md",tags:[],version:"current",frontMatter:{title:"\u73af\u5883\u53d8\u91cf"},sidebar:"docsSidebar",previous:{title:"Webpack plugins",permalink:"/zh-cn/pages/plugins/webpack"},next:{title:"api-extractor-task.json",permalink:"/zh-cn/pages/configs/api-extractor-task_json"}},c={},u=[{value:"HEFT_JEST_DETECT_OPEN_HANDLES",id:"heft_jest_detect_open_handles",level:2},{value:"HEFT_JEST_DISABLE_CODE_COVERAGE",id:"heft_jest_disable_code_coverage",level:2},{value:"HEFT_JEST_MAX_WORKERS",id:"heft_jest_max_workers",level:2},{value:"HEFT_JEST_TEST_TIMEOUT_MS",id:"heft_jest_test_timeout_ms",level:2},{value:"RUSHSTACK_FILE_ERROR_BASE_FOLDER",id:"rushstack_file_error_base_folder",level:2},{value:"WEBPACK_DEV_SERVER",id:"webpack_dev_server",level:2}],_={toc:u},d="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Heft \u7684\u884c\u4e3a\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u63cf\u8ff0\u7684 shell \u73af\u5883\u53d8\u91cf\u8fdb\u884c\u81ea\u5b9a\u4e49\uff1a"),(0,i.kt)("h2",{id:"heft_jest_detect_open_handles"},"HEFT_JEST_DETECT_OPEN_HANDLES"),(0,i.kt)("p",null,"\u6b64\u73af\u5883\u53d8\u91cf\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"--detect-open-handles")," \u53c2\u6570\u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u6307\u5b9a\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"heft_jest_disable_code_coverage"},"HEFT_JEST_DISABLE_CODE_COVERAGE"),(0,i.kt)("p",null,"\u6b64\u73af\u5883\u53d8\u91cf\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-code-coverage")," \u53c2\u6570\u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u6307\u5b9a\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"heft_jest_max_workers"},"HEFT_JEST_MAX_WORKERS"),(0,i.kt)("p",null,"\u6b64\u73af\u5883\u53d8\u91cf\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"--max-workers")," \u53c2\u6570\u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u6307\u5b9a\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"heft_jest_test_timeout_ms"},"HEFT_JEST_TEST_TIMEOUT_MS"),(0,i.kt)("p",null,"\u6b64\u73af\u5883\u53d8\u91cf\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"--test-timeout-ms")," \u53c2\u6570\u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u6307\u5b9a\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"rushstack_file_error_base_folder"},"RUSHSTACK_FILE_ERROR_BASE_FOLDER"),(0,i.kt)("p",null,"\u5728\u6253\u5370\u8bca\u65ad\u4fe1\u606f\uff08\u4f8b\u5982\u9519\u8bef\u6216\u8b66\u544a\uff09\u65f6\u63a7\u5236\u5982\u4f55\u663e\u793a\u6e90\u6587\u4ef6\u8def\u5f84\u3002"),(0,i.kt)("p",null,"\u53ef\u80fd\u7684\u503c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"(\u7edd\u5bf9\u8def\u5f84)")),"\uff1a\u6253\u5370\u7684\u8def\u5f84\u5c06\u76f8\u5bf9\u4e8e\u6307\u5b9a\u7684\u7edd\u5bf9\u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{PROJECT_FOLDER}"),"\uff1a\u4e00\u4e2a\u7279\u6b8a\u7684\u6807\u8bb0\uff0c\u8868\u793a\u6253\u5370\u7684\u8def\u5f84\u5c06\u76f8\u5bf9\u4e8e\u5305\u542b ",(0,i.kt)("strong",{parentName:"li"},"package.json")," \u7684\u9879\u76ee\u6587\u4ef6\u5939"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ABSOLUTE_PATH}"),"\uff1a\u4e00\u4e2a\u7279\u6b8a\u7684\u6807\u8bb0\uff0c\u8868\u793a\u6253\u5370\u7684\u8def\u5f84\u5e94\u8be5\u662f\u7edd\u5bf9\u8def\u5f84")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"{PROJECT_FOLDER}"),"\uff0c\u4f46\u662f\u5f53 Rush \u8c03\u7528\u5982 Heft \u8fd9\u6837\u7684\u547d\u4ee4\u65f6\uff0c\u5b83\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"RUSHSTACK_FILE_ERROR_BASE_FOLDER")," \u8bbe\u7f6e\u4e3a\u5305\u542b ",(0,i.kt)("strong",{parentName:"p"},"rush.json")," \u7684\u6839\u6587\u4ef6\u5939\u7684\u8def\u5f84\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"RUSHSTACK_FILE_ERROR_BASE_FOLDER")," \u529f\u80fd\u7531\u901a\u7528\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://api.rushstack.io/pages/node-core-library.fileerror/"},"FileError")," API \u6765\u5b9e\u73b0\uff0c\u8be5 API \u6765\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/node-core-library"),"\u3002")),(0,i.kt)("h2",{id:"webpack_dev_server"},"WEBPACK_DEV_SERVER"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-webpack4-plugin")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-webpack5-plugin")," \u5728\u542f\u52a8 Webpack \u65f6\u4f1a\u5bfb\u627e\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server")," \u7684 NPM \u5305\u3002\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"WEBPACK_DEV_SERVER")," \u73af\u5883\u53d8\u91cf\u6765\u914d\u7f6e\u4e0d\u540c\u7684 NPM \u5305\u540d\u79f0\uff0c\u6bd4\u5982\u8fd9\u4e2a\u5305\u7684\u79c1\u6709\u5206\u652f\u3002"))}k.isMDXComponent=!0}}]);