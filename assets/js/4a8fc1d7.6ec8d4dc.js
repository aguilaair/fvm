(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(93)),o={id:"basic_commands",title:"Basic Commands",sidebar_position:0},s={unversionedId:"guides/basic_commands",id:"guides/basic_commands",isDocsHomePage:!1,title:"Basic Commands",description:"Use",source:"@site/docs/guides/basic_commands.md",sourceDirName:"guides",slug:"/guides/basic_commands",permalink:"/docs/guides/basic_commands",editUrl:"https://github.com/leoafarias/fvm/edit/master/doc/docs/guides/basic_commands.md",version:"current",sidebarPosition:0,frontMatter:{id:"basic_commands",title:"Basic Commands",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/getting_started/configuration"},next:{title:"Running Flutter",permalink:"/docs/guides/running_flutter"}},l=[{value:"Use",id:"use",children:[]},{value:"Install",id:"install",children:[]},{value:"Remove",id:"remove",children:[]},{value:"List",id:"list",children:[]},{value:"Releases",id:"releases",children:[]},{value:"Doctor",id:"doctor",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"use"},"Use"),Object(i.b)("p",null,"Sets Flutter SDK Version you would like to use in a project.If version does not exist it will ask if you want to install. If you are starting a new project and plan on using fvm flutter create you wil have to use the --force flag"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Usage:\n    fvm use {version}\n\nOption:\n    -h, --help     Print this usage information.\n    -f, --force    Skips Flutter project checks.\n    -p, --pin      Pins latest release channel instead of channel itself.\n        --flavor   Sets version for a project flavor\n")),Object(i.b)("p",null,"If you are starting a new project and plan on using ",Object(i.b)("inlineCode",{parentName:"p"},"fvm flutter create")," you wil have to use the ",Object(i.b)("inlineCode",{parentName:"p"},"--force")," flag"),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"Installs Flutter SDK Version. Gives you the ability to install Flutter releases or channels."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Usage:\n    fvm install - # Installs version found in project config\n    fvm install {version} - # Installs specific version\n\nOption:\n    -h, --help          Print this usage information.\n    -s, --skip-setup    Skips Flutter setup after install\n")),Object(i.b)("h2",{id:"remove"},"Remove"),Object(i.b)("p",null,"Removes Flutter SDK Version. Will impact any projects that depend on that version of the SDK."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Usage:\n    fvm remove {version}\n\nOption:\n    -h, --help     Print this usage information.\n        --force    Skips version global check.\n")),Object(i.b)("h2",{id:"list"},"List"),Object(i.b)("p",null,"Lists installed Flutter SDK Versions. Will also print the cache directory used by FVM."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Usage:\n    fvm list\n\nOption:\n    -h, --help     Print this usage information.\n")),Object(i.b)("h2",{id:"releases"},"Releases"),Object(i.b)("p",null,"View all Flutter SDK releases available for install."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Usage:\n    fvm releases\n\nOption:\n    -h, --help     Print this usage information.\n")),Object(i.b)("h2",{id:"doctor"},"Doctor"),Object(i.b)("p",null,"Shows information about environment, and project configuration."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Usage:\n    fvm doctor\n\nOption:\n    -h, --help     Print this usage information.\n")))}u.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return t?a.a.createElement(m,s(s({ref:n},c),{},{components:t})):a.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);