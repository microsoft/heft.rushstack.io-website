"use strict";(self.webpackChunkheft_rushstack_io=self.webpackChunkheft_rushstack_io||[]).push([[8115],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var i=n(9122),r=n(2501),s=(n(6393),n(158)),a=["components"],o={title:"Heft \u547d\u4ee4\u884c"},l=void 0,p={unversionedId:"pages/intro/cli",id:"version-0.50.0/pages/intro/cli",title:"Heft \u547d\u4ee4\u884c",description:"heft",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.50.0/pages/intro/cli.md",sourceDirName:"pages/intro",slug:"/pages/intro/cli",permalink:"/zh-cn/0.50.0/pages/intro/cli",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/heft.rushstack.io/versioned_docs/version-0.50.0/pages/intro/cli.md",tags:[],version:"0.50.0",frontMatter:{title:"Heft \u547d\u4ee4\u884c"},sidebar:"docsSidebar",previous:{title:"\u4f7f\u7528 rig",permalink:"/zh-cn/0.50.0/pages/intro/rig_packages"},next:{title:"\u5f00\u59cb\u4f7f\u7528 Heft",permalink:"/zh-cn/0.50.0/pages/tutorials/getting_started"}},c={},u=[{value:"heft",id:"heft",level:2},{value:"heft clean",id:"heft-clean",level:2},{value:"heft build",id:"heft-build",level:2},{value:"heft start",id:"heft-start",level:2},{value:"heft test",id:"heft-test",level:2}],d={toc:u},h="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)(h,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"heft"},"heft"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'usage: heft [-h] [--unmanaged] [-d] [--plugin PATH] <command> ...\n\nHeft is a pluggable build system designed for web projects.\n\nPositional arguments:\n  <command>\n    clean        Clean the project\n    build        Build the project.\n    start        Run the local server for the current project\n    test         Build the project and run tests.\n\nOptional arguments:\n  -h, --help     Show this help message and exit.\n  --unmanaged    Disables the Heft version selector: When Heft is invoked via\n                 the shell path, normally it will examine the project\'s\n                 package.json dependencies and try to use the locally\n                 installed version of Heft. Specify "--unmanaged" to force\n                 the invoked version of Heft to be used. This is useful for\n                 example if you want to test a different version of Heft.\n  -d, --debug    Show the full call stack if an error occurs while executing\n                 the tool\n  --plugin PATH  Used to specify Heft plugins.\n\nFor detailed help about a specific command, use: heft <command> -h\n\n')),(0,s.kt)("h2",{id:"heft-clean"},"heft clean"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"usage: heft clean [-h] [-v] [--clear-cache]\n\nOptional arguments:\n  -h, --help     Show this help message and exit.\n  -v, --verbose  If specified, log information useful for debugging.\n  --clear-cache  If this flag is provided, the compiler cache will also be\n                 cleared. This isn't dangerous, but may lead to longer\n                 compile times\n")),(0,s.kt)("h2",{id:"heft-build"},"heft build"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"usage: heft build [-h] [-v] [--production] [--locale LOCALE] [-l]\n                  [--typescript-max-write-parallelism PARALLEILSM]\n                  [--max-old-space-size SIZE] [--watch] [--clean]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -v, --verbose         If specified, log information useful for debugging.\n  --production          If specified, build ship/production output\n  --locale LOCALE       Only build the specified locale, if applicable.\n  -l, --lite            Perform a minimal build, skipping optional steps like\n                        linting.\n  --typescript-max-write-parallelism PARALLEILSM\n                        Set this to change the maximum write parallelism.\n                        This parameter overrides what is set in typescript.\n                        json. The default is 50.\n  --max-old-space-size SIZE\n                        Used to specify the max old space size.\n  --watch               If provided, run tests in watch mode.\n  --clean               If specified, clean the package before building.\n")),(0,s.kt)("h2",{id:"heft-start"},"heft start"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"usage: heft start [-h] [-v] [--production] [--locale LOCALE] [-l]\n                  [--typescript-max-write-parallelism PARALLEILSM]\n                  [--max-old-space-size SIZE] [--clean]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -v, --verbose         If specified, log information useful for debugging.\n  --production          If specified, build ship/production output\n  --locale LOCALE       Only build the specified locale, if applicable.\n  -l, --lite            Perform a minimal build, skipping optional steps like\n                        linting.\n  --typescript-max-write-parallelism PARALLEILSM\n                        Set this to change the maximum write parallelism.\n                        This parameter overrides what is set in typescript.\n                        json. The default is 50.\n  --max-old-space-size SIZE\n                        Used to specify the max old space size.\n  --clean               If specified, clean the package before starting the\n                        development server.\n")),(0,s.kt)("h2",{id:"heft-test"},"heft test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'usage: heft test [-h] [-v] [--production] [--locale LOCALE] [-l]\n                 [--typescript-max-write-parallelism PARALLEILSM]\n                 [--max-old-space-size SIZE] [--watch] [--clean] [--no-test]\n                 [--no-build] [-u] [--find-related-tests SOURCE_FILE]\n                 [--silent] [-t REGEXP] [--test-path-pattern REGEXP]\n                 [--test-timeout-ms INTEGER] [--debug-heft-reporter]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -v, --verbose         If specified, log information useful for debugging.\n  --production          If specified, build ship/production output\n  --locale LOCALE       Only build the specified locale, if applicable.\n  -l, --lite            Perform a minimal build, skipping optional steps like\n                        linting.\n  --typescript-max-write-parallelism PARALLEILSM\n                        Set this to change the maximum write parallelism.\n                        This parameter overrides what is set in typescript.\n                        json. The default is 50.\n  --max-old-space-size SIZE\n                        Used to specify the max old space size.\n  --watch               If provided, run tests in watch mode.\n  --clean               If specified, clean the package before building.\n  --no-test             If specified, run the build without testing.\n  --no-build            If provided, only run tests. Do not build first.\n  -u, --update-snapshots\n                        Update Jest snapshots while running the tests. This\n                        corresponds to the "--updateSnapshots" parameter in\n                        Jest\n  --find-related-tests SOURCE_FILE\n                        Find and run the tests that cover a space separated\n                        list of source files that were passed in as arguments.\n                         This corresponds to the "--findRelatedTests"\n                        parameter in Jest\'s documentation.\n  --silent              Prevent tests from printing messages through the\n                        console. This corresponds to the "--silent" parameter\n                        in Jest\'s documentation.\n  -t REGEXP, --test-name-pattern REGEXP\n                        Run only tests with a name that matches a regular\n                        expression. The REGEXP is matched against the full\n                        name, which is a combination of the test name and all\n                        its surrounding describe blocks. This corresponds to\n                        the "--testNamePattern" parameter in Jest\'s\n                        documentation.\n  --test-path-pattern REGEXP\n                        Run only tests with a source file path that matches a\n                        regular expression. On Windows you will need to use\n                        "/" instead of "" This corresponds to the\n                        "--testPathPattern" parameter in Jest\'s documentation.\n  --test-timeout-ms INTEGER\n                        Change the default timeout for tests; if a test\n                        doesn\'t complete within this many milliseconds, it\n                        will fail. Individual tests can override the default.\n                        If unspecified, the default is normally 5000 ms. This\n                        corresponds to the "--testTimeout" parameter in\n                        Jest\'s documentation.\n  --debug-heft-reporter\n                        Normally Heft installs a custom Jest reporter so that\n                        test results are presented consistently with other\n                        task logging. If you suspect a problem with the\n                        HeftJestReporter, specify "--debug-heft-reporter" to\n                        temporarily disable it so that you can compare with\n                        how Jest\'s default reporter would have presented it.\n                        Include this output in your bug report. Do not use\n                        "--debug-heft-reporter" in production.\n')))}f.isMDXComponent=!0}}]);