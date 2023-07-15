"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[5276],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(6393);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=s,f=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(9122),s=n(2501),a=(n(6393),n(158)),o=["components"],i={title:"Heft command line"},p=void 0,l={unversionedId:"pages/intro/cli",id:"pages/intro/cli",title:"Heft command line",description:"Heft \u57fa\u7840\u914d\u7f6e",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/intro/cli.md",sourceDirName:"pages/intro",slug:"/pages/intro/cli",permalink:"/zh-cn/pages/intro/cli",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/docs/pages/intro/cli.md",tags:[],version:"current",frontMatter:{title:"Heft command line"},sidebar:"docsSidebar",previous:{title:"Using rig packages",permalink:"/zh-cn/pages/intro/rig_packages"},next:{title:"Hello world",permalink:"/zh-cn/pages/tutorials/hello_world"}},c={},u=[{value:"Heft \u57fa\u7840\u914d\u7f6e",id:"heft-\u57fa\u7840\u914d\u7f6e",level:2},{value:"jest-plugin",id:"jest-plugin",level:2},{value:"node-service-plugin",id:"node-service-plugin",level:2},{value:"serverless-stack-plugin",id:"serverless-stack-plugin",level:2},{value:"storybook-plugin",id:"storybook-plugin",level:2},{value:"webpack5-plugin",id:"webpack5-plugin",level:2}],d={toc:u},g="wrapper";function f(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"heft-\u57fa\u7840\u914d\u7f6e"},"Heft \u57fa\u7840\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u7528\u6cd5\uff1aheft [-h] [--debug] [--unmanaged] <command> ...\n\nHeft\u662f\u4e3aWeb\u9879\u76ee\u8bbe\u8ba1\u7684\u53ef\u63d2\u5165\u6784\u5efa\u7cfb\u7edf\u3002\n\n\u4f4d\u7f6e\u53c2\u6570\uff1a\n  <command>\n    clean      \u6e05\u7406\u9879\u76ee\uff0c\u5220\u9664\u4e34\u65f6\u4efb\u52a1\u6587\u4ef6\u5939\u548c\n              \u6307\u5b9a\u7684\u6e05\u7406\u8def\u5f84\u3002\n    run        \u8fd0\u884c\u63d0\u4f9b\u7684\u4e00\u4e9bHeft\u9636\u6bb5\u3002\n    run-watch  \u4ee5\u76d1\u89c6\u6a21\u5f0f\u8fd0\u884c\u63d0\u4f9b\u7684\u4e00\u4e9bHeft\u9636\u6bb5\u3002\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help   \u663e\u793a\u6b64\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\u3002\n")),(0,a.kt)("h2",{id:"jest-plugin"},"jest-plugin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/plugins/jest"},"jest-plugin")," \u6dfb\u52a0\u4e86\u8fd9\u4e9b\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  --config RELATIVE_PATH\n                        \u4f7f\u7528\u6b64\u53c2\u6570\u6765\u63a7\u5236\u54ea\u4e2aJest\n                        \u914d\u7f6e\u6587\u4ef6\u5c06\u88ab\u7528\u6765\u8fd0\u884cJest\u6d4b\u8bd5\u3002\u5982\u679c\n                        \u6ca1\u6709\u6307\u5b9a\uff0c\u5b83\u5c06\u9ed8\u8ba4\u4e3a "config/jest.config.\n                        json"\u3002\u8fd9\u5bf9\u5e94\u4e8eJest\u6587\u6863\u4e2d\u7684 "--config" \u53c2\u6570\u3002\n  --debug-heft-reporter\n                        \u901a\u5e38\uff0cHeft\u4f1a\u5b89\u88c5\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684Jest\u62a5\u544a\u5668\uff0c\u4f7f\u5f97\n                        \u6d4b\u8bd5\u7ed3\u679c\u4e0e\u5176\u4ed6\u4efb\u52a1\u65e5\u5fd7\u7684\u5448\u73b0\u4e00\u81f4\u3002\u5982\u679c\u4f60\u6000\u7591\n                        HeftJestReporter\u5b58\u5728\u95ee\u9898\uff0c\u53ef\u4ee5\u6307\u5b9a "--debug-heft-reporter" \u6765\n                        \u4e34\u65f6\u7981\u7528\u5b83\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u4e0e\n                        Jest\u7684\u9ed8\u8ba4\u62a5\u544a\u5668\u5448\u73b0\u7684\u65b9\u5f0f\u8fdb\u884c\u6bd4\u8f83\u3002\n                        \u5728\u4f60\u7684\u9519\u8bef\u62a5\u544a\u4e2d\u5305\u542b\u6b64\u8f93\u51fa\u3002\u4e0d\u8981\u5728\n                        \u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 "--debug-heft-reporter"\u3002\n  --detect-open-handles\n                        \u5c1d\u8bd5\u6536\u96c6\u548c\u6253\u5370\u963b\u6b62\n                        Jest\u6b63\u5e38\u9000\u51fa\u7684\u6253\u5f00\u53e5\u67c4\u3002\u6b64\u9009\u9879\u6709\u4e00\n                        \u91cd\u5927\u7684\u6027\u80fd\u4ee3\u4ef7\uff0c\u53ea\u5e94\u7528\u4e8e\u8c03\u8bd5\u3002\u8fd9\u5bf9\u5e94\u4e8eJest\u7684\n                        \u6587\u6863\u4e2d\u7684 "--detectOpenHandles" \u53c2\u6570\u3002\n  --disable-code-coverage\n                        \u7981\u7528\u4efb\u4f55\u914d\u7f6e\u7684\u4ee3\u7801\u8986\u76d6\u7387\u3002\u5982\u679c\u6ca1\u6709\n                        \u914d\u7f6e\u4ee3\u7801\u8986\u76d6\u7387\uff0c\u6b64\u53c2\u6570\u65e0\u6548\u3002\n  --find-related-tests SOURCE_FILE\n                        \u67e5\u627e\u548c\u8fd0\u884c\u8986\u76d6\u4e86\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u7684\n                        \u6e90\u6587\u4ef6\u7684\u6d4b\u8bd5\u3002\u8fd9\u5bf9\u5e94\u4e8eJest\u7684\n                        \u6587\u6863\u4e2d\u7684 "--findRelatedTests" \u53c2\u6570\u3002\u8fd9\u4e2a\u53c2\u6570\u4e0e\n                        \u76d1\u89c6\u6a21\u5f0f\u4e0d\u517c\u5bb9\u3002\n  --max-workers COUNT_OR_PERCENTAGE\n                        \u4f7f\u7528\u6b64\u53c2\u6570\u6765\u63a7\u5236\u6d4b\u8bd5\u5141\u8bb8\u4f7f\u7528\u7684\n                        \u6700\u5927\u5de5\u4f5c\u8fdb\u7a0b\u6570\u3002\u6b64\u53c2\u6570\u7c7b\u4f3c\u4e8e\n                        Jest\u6587\u6863\u4e2d\u7684\u53c2\u6570\uff0c\u5e76\u53ef\u4ee5\u662f\u4e00\u4e2a\u8868\u793a\n                        \u8fd0\u884c\u6d4b\u8bd5\u65f6\u8981\u751f\u6210\u7684\u5de5\u4f5c\u8fdb\u7a0b\u6570\u91cf\u7684\u6574\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\n                        \u8868\u793a\u8981\u5229\u7528\u673a\u5668\u4e0a\u53ef\u7528CPU\u7684\u767e\u5206\u6bd4\u7684\u5b57\u7b26\u4e32\u3002\n                        \u793a\u4f8b\u503c\uff1a"3"\uff0c"25%"\u3002\n  --silent\n                        \u9632\u6b62\u6d4b\u8bd5\u901a\u8fc7\u63a7\u5236\u53f0\u6253\u5370\u4fe1\u606f\u3002\u8fd9\u5bf9\u5e94\u4e8eJest\u7684\n                        \u6587\u6863\u4e2d\u7684 "--silent" \u53c2\u6570\u3002\n  -t REGEXP, --test-name-pattern REGEXP\n                        \u53ea\u8fd0\u884c\u540d\u79f0\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6d4b\u8bd5\u3002\n                        REGEXP\u4e0e\u5b8c\u6574\u540d\u79f0\u5339\u914d\uff0c\u8fd9\u662f\u6d4b\u8bd5\u540d\u79f0\u548c\u6240\u6709\n                        \u5468\u56f4\u7684describe\u5757\u7684\u7ec4\u5408\u3002\u8fd9\u5bf9\u5e94\u4e8eJest\u7684\n                        \u6587\u6863\u4e2d\u7684 "--testNamePattern" \u53c2\u6570\u3002\n  --test-path-ignore-patterns REGEXP\n                        \u907f\u514d\u8fd0\u884c\u6e90\u6587\u4ef6\u8def\u5f84\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\n                        \u6d4b\u8bd5\u3002\u5728Windows\u4e0a\uff0c\u4f60\u9700\u8981\u4f7f\u7528 "/" \u4ee3\u66ff "\\"\u3002\u8fd9\n                        \u5bf9\u5e94\u4e8eJest\u6587\u6863\u4e2d\u7684 "--testPathIgnorePatterns"\n                        \u53c2\u6570\u3002\n  --test-path-pattern REGEXP\n                        \u53ea\u8fd0\u884c\u6e90\u6587\u4ef6\u8def\u5f84\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6d4b\u8bd5\u3002\n                        \u5728Windows\u4e0a\uff0c\u4f60\u9700\u8981\u4f7f\u7528 "/" \u4ee3\u66ff "\\"\u3002\u8fd9\u5bf9\u5e94\u4e8e\n                        Jest\u6587\u6863\u4e2d\u7684 "--testPathPattern" \u53c2\u6570\u3002\n  --test-timeout-ms TIMEOUT\n                        \u6539\u53d8\u6d4b\u8bd5\u7684\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\uff1b\u5982\u679c\u6d4b\u8bd5\n                        \u5728\u8fd9\u4e2a\u6beb\u79d2\u6570\u5185\u672a\u5b8c\u6210\uff0c\u5b83\u4f1a\u5931\u8d25\u3002\u5355\u4e2a\u6d4b\u8bd5\u53ef\u4ee5\u8986\u76d6\u9ed8\u8ba4\u503c\u3002\n                        \u5982\u679c\u672a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u503c\u901a\u5e38\u662f5000 ms\u3002\u8fd9\u5bf9\u5e94\u4e8eJest\u7684\n                        \u6587\u6863\u4e2d\u7684 "--testTimeout" \u53c2\u6570\u3002\n  -u, --update-snapshots\n                        \u5728\u8fd0\u884c\u6d4b\u8bd5\u65f6\u66f4\u65b0Jest\u5feb\u7167\u3002\u8fd9\u5bf9\u5e94\u4e8eJest\u7684\n                        "--updateSnapshots" \u53c2\u6570\u3002\n')),(0,a.kt)("h2",{id:"node-service-plugin"},"node-service-plugin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/plugins/node-service"},"node-service-plugin")," \u6dfb\u52a0\u4e86\u4ee5\u4e0b\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  --serve\n                        \u4e3a\u6d4b\u8bd5\u76ee\u7684\u542f\u52a8\u4e00\u4e2a\u672c\u5730Web\u670d\u52a1\u5668\u3002\u6b64\n                        \u53c2\u6570\u53ea\u5728watch\u6a21\u5f0f\u4e0b\u8fd0\u884c\u65f6\u53ef\u7528\u3002\n")),(0,a.kt)("h2",{id:"serverless-stack-plugin"},"serverless-stack-plugin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/plugins/serverless-stack"},"serverless-stack-plugin")," \u6dfb\u52a0\u4e86\u4ee5\u4e0b\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  --sst\n                        \u8c03\u7528SST\u540e\u5904\u7406\u3002\u9700\u8981AWS\u51ed\u8bc1\u3002\n  --sst-stage STAGE_NAME\n                        \u6307\u5b9aServerless Stack\u9636\u6bb5\uff1b\u76f8\u5f53\u4e8e\n                        "sst" CLI\u7684 "--stage" \u53c2\u6570\n')),(0,a.kt)("h2",{id:"storybook-plugin"},"storybook-plugin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/plugins/storybook"},"storybook-plugin")," \u6dfb\u52a0\u4e86\u4ee5\u4e0b\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  --storybook\n                        \u88ab"@rushstack/heft-storybook-plugin"\u5305\u4f7f\u7528\u6765\u542f\u52a8\n                        Storybook\u3002\n')),(0,a.kt)("h2",{id:"webpack5-plugin"},"webpack5-plugin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/plugins/webpack"},"webpack5-plugin")," \u6dfb\u52a0\u4e86\u4ee5\u4e0b\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  --serve\n                        \u4f7f\u7528webpack-dev-server\u542f\u52a8\u4e00\u4e2a\u672c\u5730Web\u670d\u52a1\u5668\u7528\u4e8e\u6d4b\u8bd5\u76ee\u7684\u3002\n                        \u6b64\u53c2\u6570\u53ea\u5728watch\u6a21\u5f0f\u4e0b\u8fd0\u884c\u65f6\u53ef\u7528\u3002\n")))}f.isMDXComponent=!0}}]);