"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3249],{9399:(e,n,t)=>{t.d(n,{in:()=>i,OU:()=>h,Ki:()=>p,e7:()=>l,Gx:()=>g});var a=t(758),r=t(9302),o=(t(2992),t(6070));var s=a.createContext(null);function i(e){var n=e.children,t=e.content,r=e.isBlogPostPage,i=function(e){var n=e.content,t=e.isBlogPostPage;return(0,a.useMemo)((function(){return{metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,toc:n.toc,isBlogPostPage:t}}),[n,t])}({content:t,isBlogPostPage:void 0!==r&&r});return(0,o.jsx)(s.Provider,{value:i,children:n})}function l(){var e=(0,a.useContext)(s);if(null===e)throw new r.dV("BlogPostProvider");return e}t(5692),t(2927);var c=t(5557),d=t(871),u=t(3946),m=t(5945);function g(e){var n=(0,c.zy)().pathname;return(0,a.useMemo)((function(){return e.filter((function(e){return function(e,n){return!(e.unlisted&&!(0,m.ys)(e.permalink,n))}(e,n)}))}),[e,n])}function p(e){var n=(0,u.$z)(e,(function(e){return""+new Date(e.date).getFullYear()})),t=Object.entries(n);return t.reverse(),t}function h(e){var n=e.items,t=e.ulClassName,a=e.liClassName,r=e.linkClassName,s=e.linkActiveClassName;return(0,o.jsx)("ul",{className:t,children:n.map((function(e){return(0,o.jsx)("li",{className:a,children:(0,o.jsx)(d.A,{isNavLink:!0,to:e.permalink,className:r,activeClassName:s,children:e.title})},e.permalink)}))})}},4542:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(758),r=t(3394),o=t(5247),s=t(7775),i=t(1240),l=t(2414);const c={backToTopButton:"backToTopButton_f4oz",backToTopButtonShow:"backToTopButtonShow_gAXx"};var d=t(6070);function u(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),r=t[0],o=t[1],s=(0,a.useRef)(!1),c=(0,i.gk)(),d=c.startScroll,u=c.cancelScroll;return(0,i.Mq)((function(e,t){var a=e.scrollY,r=null==t?void 0:t.scrollY;r&&(s.current?s.current=!1:a>=r?(u(),o(!1)):a<n?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,l.$)((function(e){e.location.hash&&(s.current=!0,o(!1))})),{shown:r,scrollToTop:function(){return d(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,d.jsx)("button",{"aria-label":(0,o.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.A)("clean-btn",s.G.common.backToTopButton,c.backToTopButton,n&&c.backToTopButtonShow),type:"button",onClick:t})}},658:(e,n,t)=>{t.d(n,{i:()=>r});var a=t(2927);function r(e){void 0===e&&(e={});var n=(0,a.A)().i18n.currentLocale,t=function(){var e=(0,a.A)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}},6769:(e,n,t)=>{t.d(n,{W:()=>c});var a=t(758),r=t(2927),o=["zero","one","two","few","many","other"];function s(e){return o.filter((function(n){return e.includes(n)}))}var i={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,r.A)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:s(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),i}var n,t}),[e])}function c(){var e=l();return{selectMessage:function(n,t){return function(e,n,t){var a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var r=t.select(n),o=t.pluralForms.indexOf(r);return a[Math.min(o,a.length-1)]}(t,n,e)}}}},8110:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(758),r=t(8654),o=t(6070);function s(e){var n=e.children,t=e.fallback;return(0,r.A)()?(0,o.jsx)(o.Fragment,{children:null==n?void 0:n()}):null!=t?t:null}var i=t(5886),l=t(9125),c=t(2927);function d({id:e,host:n,repo:r,repoId:s,category:i,categoryId:l,mapping:c,term:d,strict:u,reactionsEnabled:m,emitMetadata:g,inputPosition:p,theme:h,lang:b,loading:x}){const[f,v]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{f||(t.e(4827).then(t.bind(t,4827)),v(!0))}),[]),f?(0,o.jsx)("giscus-widget",{id:e,host:n,repo:r,repoid:s,category:i,categoryid:l,mapping:c,term:d,strict:u,reactionsenabled:m,emitmetadata:g,inputposition:p,theme:h,lang:b,loading:x}):null}var u={id:"comments",mapping:"title",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",lang:"zh-CN",theme:"light",darkTheme:"dark_dimmed"};function m(){var e=(0,i.p)(),n=(0,c.A)().i18n,t=Object.assign({},u,e.giscus);if(!t.repo||!t.repoId||!t.categoryId)throw new Error("You must provide `repo`, `repoId`, and `categoryId` to `themeConfig.giscus`.");return t.theme="dark"===(0,l.G)().colorMode?t.darkTheme:t.theme,t.lang=n.currentLocale,(0,o.jsx)(s,{fallback:(0,o.jsx)("div",{children:"Loading Comments..."}),children:function(){return(0,o.jsx)(d,Object.assign({},t))}})}},7893:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(5045),r=t(7949),o=t(5421),s=t(871),i=t(5247),l=t(9399),c=t(2699),d=t(5886),u=t(5136),m=t(758),g=t(6070);function p(e){var n=e.year,t=e.yearGroupHeadingClassName,a=e.children;return(0,g.jsxs)("div",{role:"group",children:[(0,g.jsx)(u.A,{as:"h3",className:t,children:n}),a]})}function h(e){var n=e.items,t=e.yearGroupHeadingClassName,a=e.ListComponent;if((0,d.p)().blog.sidebar.groupByYear){var r=(0,l.Ki)(n);return(0,g.jsx)(g.Fragment,{children:r.map((function(e){var n=e[0],r=e[1];return(0,g.jsx)(p,{year:n,yearGroupHeadingClassName:t,children:(0,g.jsx)(a,{items:r})},n)}))})}return(0,g.jsx)(a,{items:n})}const b=(0,m.memo)(h);var x=t(3394);const f={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",backButton:"backButton_MCHS"};var v=function(e){var n=e.items;return(0,g.jsx)(l.OU,{items:n,ulClassName:(0,x.A)(f.sidebarItemList,"clean-list"),liClassName:f.sidebarItem,linkClassName:f.sidebarItemLink,linkActiveClassName:f.sidebarItemLinkActive})};function j(e){var n=e.sidebar,t=(0,l.Gx)(n.items),a=(0,m.useState)(!1),o=a[0],d=a[1];return(0,g.jsx)("aside",{className:"col col--2",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},children:(0,g.jsxs)("nav",{className:(0,r.cn)(f.sidebar,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),style:{opacity:o?1:0},children:[(0,g.jsx)("div",{className:f.backButton,onClick:function(){window.history.back()},children:(0,g.jsx)(c.In,{icon:"ri:arrow-go-back-line"})}),(0,g.jsx)(s.A,{href:"/blog",className:(0,r.cn)(f.sidebarItemTitle,"margin-bottom--sm"),children:n.title}),(0,g.jsx)(b,{items:t,ListComponent:v,yearGroupHeadingClassName:f.yearGroupHeading})]})})}var k=t(360);const N={yearGroupHeading:"yearGroupHeading_fvTq"};var y=function(e){var n=e.items;return(0,g.jsx)(l.OU,{items:n,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function _(e){var n=e.sidebar,t=(0,l.Gx)(n.items);return(0,g.jsx)(b,{items:t,ListComponent:y,yearGroupHeadingClassName:N.yearGroupHeading})}function A(e){return(0,g.jsx)(k.GX,{component:_,props:e})}const T=(0,m.memo)(A);function B(e){var n=e.sidebar,t=(0,o.l)();return null!=n&&n.items.length?"mobile"===t?(0,g.jsx)(T,{sidebar:n}):(0,g.jsx)(j,{sidebar:n}):null}var P=t(3295),C=["sidebar","toc","children"];function I(e){var n=e.sidebar,t=e.toc,o=e.children,s=(0,a.A)(e,C),i=n&&n.items.length>0;return(0,g.jsx)(P.A,Object.assign({},s,{children:(0,g.jsx)("div",{className:"margin-vert--md container",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(B,{sidebar:n}),(0,g.jsx)("main",{className:(0,r.cn)("col",{"col--8":i,"col--8 col--offset-2":!i}),itemScope:!0,itemType:"http://schema.org/Blog",children:o}),t&&(0,g.jsx)("div",{className:"col col--2 px-0.5",children:t})]})})}))}},1372:(e,n,t)=>{t.d(n,{A:()=>C});var a=t(9399),r=t(7949),o=t(5692),s=t(6070);function i(e){var n,t=e.children,i=e.className,l=(0,a.e7)(),c=l.frontMatter,d=l.assets,u=(0,o.hH)().withBaseUrl,m=null!=(n=d.image)?n:c.image;return(0,s.jsxs)("article",{className:(0,r.cn)("relative px-4 pt-4 pb-3 lg:px-4",i),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{itemProp:"image",content:u(m,{absolute:!0})}),(0,s.jsx)("div",{className:"absolute inset-0 z-1 h-[224px]",children:(0,s.jsx)("div",{className:"size-full rounded-[var(--ifm-pagination-nav-border-radius)] bg-center bg-cover bg-no-repeat",style:{WebkitMaskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",maskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",backgroundImage:'url("'+m+'")'}})}),(0,s.jsx)("div",{style:{height:"120px"}})]}),t]})}var l=t(4353),c=t(665);function d(e){var n=e.children,t=e.className,o=(0,a.e7)().isBlogPostPage;return(0,s.jsx)("div",{id:o?l.LU:void 0,className:(0,r.cn)("markdown",t),itemProp:"articleBody",style:{position:"relative"},children:(0,s.jsx)(c.A,{children:n})})}var u=t(658),m=t(2699),g=t(5045),p=t(871),h=t(5247),b=(t(758),["blogPostTitle"]);function x(){return(0,s.jsx)("b",{children:(0,s.jsx)(h.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function f(e){var n=e.blogPostTitle,t=(0,g.A)(e,b);return(0,s.jsxs)(p.A,Object.assign({"aria-label":(0,h.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:n}),style:{display:"flex",alignItems:"center",gap:"0.25rem"}},t,{children:[(0,s.jsx)(x,{}),(0,s.jsx)(m.In,{icon:"ri:arrow-right-line"})]}))}var v=t(2532),j=t(6769);function k(e){var n,t=e.readingTime,a=(n=(0,j.W)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,h.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))});return(0,s.jsx)("span",{className:"truncate",children:a(t)})}function N(e){var n=e.date,t=e.formattedDate;return(0,s.jsx)("time",{dateTime:n,itemProp:"datePublished",className:"truncate",children:t})}function y(e){var n,t=e.className,o=(0,a.e7)().metadata,i=o.date,l=o.tags,c=o.readingTime,d=l.length>0,g=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,r.cn)("inline-flex flex-wrap gap-1.5 text-base","margin-bottom--md",t),children:[(0,s.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,s.jsx)(m.In,{icon:"ri:calendar-line"}),(0,s.jsx)(N,{date:i,formattedDate:(n=i,g.format(new Date(n)))})]}),d&&(0,s.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,s.jsx)(m.In,{icon:"ri:price-tag-3-line"}),(0,s.jsx)("div",{className:(0,r.cn)("truncate","inline-flex text-center"),children:l.slice(0,3).map((function(e,n){var t=e.label,a=e.description,r=e.permalink;return(0,s.jsxs)("div",{children:[0!==n&&"/",(0,s.jsx)(v.A,{label:t,permalink:r,className:"tag !border-0 px-0.5 py-0.5 text-text hover:text-link",description:a})]},r)}))})]}),void 0!==c&&(0,s.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,s.jsx)(m.In,{icon:"ri:time-line"}),(0,s.jsx)(k,{readingTime:c})]})]})}const _={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y",blogPostInfo:"blogPostInfo_k7sy",blogPostInfoTags:"blogPostInfoTags_W9UY",blogPostAuthor:"blogPostAuthor_OLeU",blogPostDetailsFull:"blogPostDetailsFull_rPUK",divider:"divider_nSib"};function A(){var e,n=(0,a.e7)(),t=n.metadata,o=n.isBlogPostPage,i=t.tags,l=t.title,c=(t.editUrl,t.hasTruncateMarker),d=t.date,g=t.readingTime,p=t.authors,h=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),b=!o&&c,x=i.length>0;p.length;return o?(0,s.jsx)("footer",{className:(0,r.cn)("row docusaurus-mt-lg",o&&_.blogPostFooterDetailsFull),children:b&&(0,s.jsx)("div",{className:(0,r.cn)("col text--right",{"col--3":x}),children:(0,s.jsx)(f,{blogPostTitle:l,to:t.permalink})})}):(0,s.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,s.jsxs)("div",{className:_.blogPostInfo,children:[d&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.In,{icon:"ri:calendar-line"}),(0,s.jsx)("time",{dateTime:d,itemProp:"datePublished",children:(e=d,h.format(new Date(e)))})]}),x&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.In,{icon:"ri:price-tag-3-line"}),(0,s.jsx)("span",{className:_.blogPostInfoTags,children:i.map((function(e){var n=e.label,t=e.permalink,a=e.description;return(0,s.jsx)(v.A,{label:n,permalink:t,description:a},t)}))})]}),g&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.In,{icon:"ri:time-line"}),(0,s.jsx)("span",{className:(0,r.cn)(_.blogPostReadTime,"blog__readingTime"),children:(0,s.jsx)(k,{readingTime:g})})]}),b&&(0,s.jsx)("div",{className:(0,r.cn)("flex flex-1 items-center justify-end gap-0.5 font-medium text-[var(--ifm-link-color)] opacity-0 transition-opacity duration-200 group-hover/blog:opacity-100",{"col--3":x}),children:(0,s.jsx)(f,{blogPostTitle:l,to:t.permalink,className:"hover:no-underline"})})]})})}const T={titleLink:"titleLink_BX2g"};function B(e){var n=e.className,t=(0,a.e7)(),o=t.metadata,i=t.isBlogPostPage,l=o.permalink,c=o.title,d=i?"h1":"h2";return(0,s.jsx)(d,{className:(0,r.cn)(T.title,n),itemProp:"headline",children:i?c:(0,s.jsx)(p.A,{itemProp:"url",to:l,className:T.titleLink,children:c})})}function P(){var e=(0,a.e7)().isBlogPostPage;return(0,s.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,s.jsx)(B,{}),e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(y,{})})]})}function C(e){var n=e.children,t=e.className,o=(0,a.e7)().isBlogPostPage?"":"group/blog rounded-md mt-0 bg-blog mb-8 shadow-blog";return(0,s.jsxs)(i,{className:(0,r.cn)(o,t),children:[(0,s.jsx)(P,{}),(0,s.jsx)(d,{children:n}),(0,s.jsx)(A,{})]})}},5621:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var a=t(9399),r=t(8420),o=t(7775),s=t(8110),i=t(7949),l=t(4542),c=t(7893),d=t(1372),u=t(6070);function m(){var e,n=(0,a.e7)(),t=n.assets,o=n.metadata,s=o.title,i=o.description,l=o.date,c=o.tags,d=o.authors,m=o.frontMatter,g=m.keywords,p=null!=(e=t.image)?e:m.image;return(0,u.jsxs)(r.be,{title:s,description:i,keywords:g,image:p,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:l}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}t(758);var g=t(5247),p=t(1916);function h(e){var n=e.nextItem,t=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,g.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(p.A,Object.assign({},t,{subLabel:(0,u.jsx)(g.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})})),n&&(0,u.jsx)(p.A,Object.assign({},n,{subLabel:(0,u.jsx)(g.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0}))]})}var b=t(2681);function x(e){var n=e.sidebar,t=e.children,r=(0,a.e7)(),o=r.metadata,i=r.toc,m=o.nextItem,g=o.prevItem,p=o.frontMatter,x=p.hide_table_of_contents,f=p.toc_min_heading_level,v=p.toc_max_heading_level,j=p.hide_comment;return(0,u.jsxs)(c.A,{sidebar:n,toc:!x&&i.length>0?(0,u.jsx)(b.A,{toc:i,minHeadingLevel:f,maxHeadingLevel:v}):void 0,children:[(0,u.jsx)(d.A,{children:t}),(m||g)&&(0,u.jsx)("div",{className:"margin-bottom--md",children:(0,u.jsx)(h,{nextItem:m,prevItem:g})}),!j&&(0,u.jsx)(s.A,{}),(0,u.jsx)(l.A,{})]})}function f(e){var n=e.content;return(0,u.jsx)(a.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(r.e3,{className:(0,i.cn)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,u.jsx)(m,{}),(0,u.jsx)(x,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},6154:(e,n,t)=>{t.d(n,{A:()=>F});var a=t(5045),r=t(8654),o=t(7949),s=t(1026),i=t(7775),l=t(1739),c=t(758);const d={codeBlockContainer:"codeBlockContainer_APcc"};var u=t(6070),m=["as"];function g(e){var n=e.as,t=(0,a.A)(e,m),r=(0,s.A)(),c=(0,l.M$)(r);return(0,u.jsx)(n,Object.assign({},t,{style:c,className:(0,o.cn)(t.className,d.codeBlockContainer,i.G.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function h(e){var n=e.children,t=e.className;return(0,u.jsx)(g,{as:"pre",tabIndex:0,className:(0,o.cn)(p.codeBlockStandalone,"thin-scrollbar",t),children:(0,u.jsx)("code",{className:p.codeBlockLines,children:n})})}var b=t(8939),x=t(5886),f=t(9522),v=t(2699),j=t(5247),k=t(1702),N=t(9106),y=t(1750);const _={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function A(e){var n=e.code,t=e.className,a=(0,c.useState)(!1),r=a[0],s=a[1],i=(0,c.useRef)(void 0),l=(0,c.useCallback)((function(){(0,y.A)(n),s(!0),i.current=window.setTimeout((function(){s(!1)}),1e3)}),[n]);return(0,c.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),(0,u.jsx)("button",{type:"button","aria-label":r?(0,j.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,j.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,j.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.cn)("clean-btn",t,_.copyButton,r&&_.copyButtonCopied),onClick:l,children:(0,u.jsxs)("span",{className:_.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(k.A,{className:_.copyButtonIcon}),(0,u.jsx)(N.A,{className:_.copyButtonSuccessIcon})]})})}const T={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function B(e){var n,t=e.line,a=e.classNames,r=e.showLineNumbers,s=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===(null==(n=t[0])?void 0:n.content)&&(t[0].content="");var l=s({line:t,className:(0,o.cn)(a,r&&T.codeLine)}),c=t.map((function(e,n){return(0,u.jsx)("span",Object.assign({},i({token:e,key:n})),n)}));return(0,u.jsxs)("span",Object.assign({},l,{children:[r?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:T.codeLineNumber}),(0,u.jsx)("span",{className:T.codeLineContent,children:c})]}):c,(0,u.jsx)("br",{})]}))}var P=t(1235);const C={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function I(e){var n=e.className,t=e.onClick,a=e.isEnabled,r=(0,j.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:t,className:(0,o.cn)("clean-btn",n,a&&C.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,u.jsx)(P.A,{className:C.wordWrapButtonIcon,"aria-hidden":"true"})})}var w=t(3477);function L(e){var n,t=e.children,a=e.className,r=void 0===a?"":a,i=e.metastring,c=e.title,d=e.showLineNumbers,m=e.language,h=(0,x.p)().prism,j=h.defaultLanguage,k=h.magicComments,N=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=m?m:(0,l.Op)(r))?n:j),y=(0,s.A)(),_=(0,f.f)(),T=(0,l.wt)(i)||c,P=function(e){var n,t,a=(0,b.A)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),r=null!=(n=null==e||null==(t=e.match(a))||null==(t=t.groups)?void 0:t.icon)?n:"";return r?(0,u.jsx)(v.In,{icon:r,width:"16"}):null}(i),C=(0,l.Li)(t,{metastring:i,language:N,magicComments:k}),L=C.lineClassNames,O=C.code,F=null!=d?d:(0,l._u)(i);return(0,u.jsxs)(g,{as:"div",className:(0,o.cn)(r,N&&!r.includes("language-"+N)&&"language-"+N),children:[T&&(0,u.jsxs)("div",{className:p.codeBlockTitle,children:[P,T,(0,u.jsx)("span",{style:{flex:1,textAlign:"right"},children:N})]}),(0,u.jsxs)("div",{className:p.codeBlockContent,children:[(0,u.jsx)(w.f4,{theme:y,code:O,language:null!=N?N:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,r=e.getLineProps,s=e.getTokenProps;return(0,u.jsx)("pre",{ref:_.codeBlockRef,className:(0,o.cn)(n,p.codeBlock,"thin-scrollbar"),style:t,children:(0,u.jsx)("code",{className:(0,o.cn)(p.codeBlockLines,F&&p.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,u.jsx)(B,{line:e,getLineProps:r,getTokenProps:s,classNames:L[n],showLineNumbers:F},n)}))})})}}),(0,u.jsxs)("div",{className:p.buttonGroup,children:[(_.isEnabled||_.isCodeScrollable)&&(0,u.jsx)(I,{className:p.codeButton,onClick:function(){return _.toggle()},isEnabled:_.isEnabled}),(0,u.jsx)(A,{className:p.codeButton,code:O})]})]})]})}var O=["children"];function F(e){var n=e.children,t=(0,a.A)(e,O),o=(0,r.A)(),s=function(e){return c.Children.toArray(e).some((function(e){return(0,c.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),i="string"==typeof s?L:h;return(0,u.jsx)(i,Object.assign({},t,{children:s}),String(o))}},8712:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(871),r=t(2699),o=t(6070);function s(e){var n=e.href;if(!n)return(0,o.jsx)(a.A,Object.assign({},e));var t={"github.com":"simple-icons:github","x.com":"ri:twitter-x-fill"},s=Object.keys(t).find((function(e){return new RegExp("^https?://"+e).test(n)})),i=s?t[s]:null;return i?(0,o.jsxs)("span",{style:{display:"inline-flex",gap:"0.25rem"},children:[i&&(0,o.jsx)(r.In,{className:"a-icon",style:{alignSelf:"center"},icon:i,width:16,height:16}),(0,o.jsx)(a.A,Object.assign({},e,{className:"link"}))]}):(0,o.jsx)(a.A,Object.assign({},e,{className:"link"}))}},1916:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(871),r=t(7949),o=t(6070);function s(e){var n=e.permalink,t=e.title,s=e.subLabel,i=e.isNext;return(0,o.jsxs)(a.A,{className:(0,r.cn)("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[s&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,o.jsx)("div",{className:"pagination-nav__label",children:t})]})}},2681:(e,n,t)=>{t.d(n,{A:()=>b});var a=t(5045),r=t(4457),o=t(3602),s=t(758),i=function(){var e=(0,s.useState)(0),n=e[0],t=e[1],a=(0,s.useRef)(null),i=(0,r.L)({container:a}).scrollYProgress;return(0,s.useLayoutEffect)((function(){a.current=document.getElementById("__blog-post-container")}),[]),(0,o.L)(i,"change",(function(e){t(e)})),{readPercent:(0,s.useMemo)((function(){return Math.round(100*n)}),[n])}},l=t(7949),c=t(5500),d=t(2644);const u={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs",hr:"hr_UhE0",percent:"percent_H6RK"};var m=t(6070),g=["className"],p="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function b(e){var n=e.className,t=(0,a.A)(e,g),r=i().readPercent;return(0,m.jsxs)(d.P.div,{className:(0,l.cn)(u.tableOfContents,"thin-scrollbar",n),initial:{opacity:1e-4,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:3},children:[(0,m.jsx)(c.A,Object.assign({},t,{className:"table-of-contents pl-0",linkClassName:p,linkActiveClassName:h})),(0,m.jsx)("hr",{className:u.hr}),(0,m.jsxs)("span",{className:u.percent,children:[r+"%"," "]})]})}},2532:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(871),r=t(7949);t(758);const o={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var s=t(6070);function i(e){var n=e.permalink,t=e.label,i=e.count,l=e.className;return(0,s.jsxs)(a.A,{href:n,className:(0,r.cn)(o.tag,i?o.tagWithCount:o.tagRegular,l),children:[t,i&&(0,s.jsx)("span",{children:i})]})}}}]);