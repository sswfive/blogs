"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[401],{4512:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ye});var a=t(758),s=t(8420),i=t(9302),o=t(6070),r=a.createContext(null);function c(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,o.jsx)(r.Provider,{value:t,children:n})}function l(){var e=(0,a.useContext)(r);if(null===e)throw new i.dV("DocProvider");return e}function d(){var e,n=l(),t=n.metadata,a=n.frontMatter,i=n.assets;return(0,o.jsx)(s.be,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=t(3394),m=t(5421),h=t(5247),p=t(1916);function b(e){var n=e.previous,t=e.next;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,o.jsx)(p.A,Object.assign({},n,{subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,o.jsx)(p.A,Object.assign({},t,{subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function g(){var e=l().metadata;return(0,o.jsx)(b,{previous:e.previous,next:e.next})}var x=t(2927),v=t(871),j=t(5497),f=t(7775),N=t(9439),A=t(8258);var _={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){var n=_[e.versionMetadata.banner];return(0,o.jsx)(n,Object.assign({},e))}function k(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(v.A,{to:t,onClick:a,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function B(e){var n,t=e.className,a=e.versionMetadata,s=(0,x.A)().siteConfig.title,i=(0,j.vT)({failfast:!0}).pluginId,r=(0,N.g1)(i).savePreferredVersionName,c=(0,j.HW)(i),l=c.latestDocSuggestion,d=c.latestVersionSuggestion,m=null!=l?l:(n=d).docs.find((function(e){return e.id===n.mainDocId}));return(0,o.jsxs)("div",{className:(0,u.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(C,{siteTitle:s,versionMetadata:a})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(k,{versionLabel:d.label,to:m.path,onClick:function(){return r(d.name)}})})]})}function y(e){var n=e.className,t=(0,A.r)();return t.banner?(0,o.jsx)(B,{className:n,versionMetadata:t}):null}function L(e){var n=e.className,t=(0,A.r)();return t.badge?(0,o.jsx)("span",{className:(0,u.A)(n,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var T=t(2532);const w={tags:"tags_i611",tag:"tag_V9fD"};function I(e){var n=e.tags;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.A)(w.tags,"padding--none","margin-left--sm"),children:n.map((function(e){return(0,o.jsx)("li",{className:w.tag,children:(0,o.jsx)(T.A,Object.assign({},e))},e.permalink)}))})]})}var U=t(5045);const O={iconEdit:"iconEdit_LUHf"};var M=["className"];function P(e){var n=e.className,t=(0,U.A)(e,M);return(0,o.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(O.iconEdit,n),"aria-hidden":"true"},t,{children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function E(e){var n=e.editUrl;return(0,o.jsxs)(v.A,{to:n,className:f.G.common.editThisPage,children:[(0,o.jsx)(P,{}),(0,o.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var S=t(658);function G(e){var n=e.lastUpdatedAt,t=new Date(n),a=(0,S.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,o.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function V(e){var n=e.lastUpdatedBy;return(0,o.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:n})},children:" by {user}"})}function H(e){var n=e.lastUpdatedAt,t=e.lastUpdatedBy;return(0,o.jsxs)("span",{className:f.G.common.lastUpdated,children:[(0,o.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,o.jsx)(G,{lastUpdatedAt:n}):"",byUser:t?(0,o.jsx)(V,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const W={lastUpdated:"lastUpdated_IGg4"};function F(e){var n=e.className,t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy;return(0,o.jsxs)("div",{className:(0,u.A)("row",n),children:[(0,o.jsx)("div",{className:"col",children:t&&(0,o.jsx)(E,{editUrl:t})}),(0,o.jsx)("div",{className:(0,u.A)("col",W.lastUpdated),children:(a||s)&&(0,o.jsx)(H,{lastUpdatedAt:a,lastUpdatedBy:s})})]})}function R(){var e=l().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.tags,i=s.length>0,r=!!(n||t||a);return i||r?(0,o.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(I,{tags:s})})}),r&&(0,o.jsx)(F,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var D=t(3190),z=t(5500);const q={tocCollapsibleButton:"tocCollapsibleButton_FMKe",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_R_Lg"};var Y=["collapsed"];function K(e){var n=e.collapsed,t=(0,U.A)(e,Y);return(0,o.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.A)("clean-btn",q.tocCollapsibleButton,!n&&q.tocCollapsibleButtonExpanded,t.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const Q={tocCollapsible:"tocCollapsible_zsfT",tocCollapsibleContent:"tocCollapsibleContent_PZrH",tocCollapsibleExpanded:"tocCollapsibleExpanded_WITg"};function Z(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,D.u)({initialState:!0}),r=i.collapsed,c=i.toggleCollapsed;return(0,o.jsxs)("div",{className:(0,u.A)(Q.tocCollapsible,!r&&Q.tocCollapsibleExpanded,t),children:[(0,o.jsx)(K,{collapsed:r,onClick:c}),(0,o.jsx)(D.N,{lazy:!0,className:Q.tocCollapsibleContent,collapsed:r,children:(0,o.jsx)(z.A,{toc:n,minHeadingLevel:a,maxHeadingLevel:s})})]})}const J={tocMobile:"tocMobile_cGIj"};function X(){var e=l(),n=e.toc,t=e.frontMatter;return(0,o.jsx)(Z,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,J.tocMobile)})}var $=t(2681);function ee(){var e=l(),n=e.toc,t=e.frontMatter;return(0,o.jsx)($.A,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var ne=t(5136),te=t(665);function ae(e){var n,t,a,s,i=e.children,r=(n=l(),t=n.metadata,a=n.frontMatter,s=n.contentTitle,a.hide_title||void 0!==s?null:t.title);return(0,o.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[r&&(0,o.jsx)("header",{children:(0,o.jsx)(ne.A,{as:"h1",children:r})}),(0,o.jsx)(te.A,{children:i})]})}var se=t(375),ie=t(5945),oe=t(5692);function re(e){return(0,o.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const ce={breadcrumbHomeIcon:"breadcrumbHomeIcon_gr6m"};function le(){var e=(0,oe.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(v.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(re,{className:ce.breadcrumbHomeIcon})})})}const de={breadcrumbsContainer:"breadcrumbsContainer_gyW1"};function ue(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,o.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,o.jsx)(v.A,{className:a,href:t,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:n})}):(0,o.jsx)("span",{className:a,children:n})}function me(e){var n=e.children,t=e.active,a=e.index,s=e.addMicrodata;return(0,o.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,o.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function he(){var e=(0,se.OF)(),n=(0,ie.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(f.G.docs.docBreadcrumbs,de.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,o.jsx)(le,{}),e.map((function(n,t){var a=t===e.length-1,s="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,o.jsx)(me,{active:a,index:t,addMicrodata:!!s,children:(0,o.jsx)(ue,{href:s,isLast:a,children:n.label})},t)}))]})}):null}var pe=t(5885);function be(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function ge(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function xe(){return(0,o.jsx)(pe.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function ve(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function je(){return(0,o.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var fe=t(8001);function Ne(e){var n=e.className;return(0,o.jsx)(fe.A,{type:"caution",title:(0,o.jsx)(ve,{}),className:(0,u.A)(n,f.G.common.draftBanner),children:(0,o.jsx)(je,{})})}function Ae(e){var n=e.className;return(0,o.jsx)(fe.A,{type:"caution",title:(0,o.jsx)(be,{}),className:(0,u.A)(n,f.G.common.unlistedBanner),children:(0,o.jsx)(ge,{})})}function _e(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(xe,{}),(0,o.jsx)(Ae,Object.assign({},e))]})}function Ce(e){var n=e.metadata,t=n.unlisted,a=n.frontMatter;return(0,o.jsxs)(o.Fragment,{children:[(t||a.unlisted)&&(0,o.jsx)(_e,{}),a.draft&&(0,o.jsx)(Ne,{})]})}const ke={docItemContainer:"docItemContainer_p_iJ",docItemCol:"docItemCol_U5cg"};function Be(e){var n,t,a,s,i,r,c=e.children,d=(n=l(),t=n.frontMatter,a=n.toc,s=(0,m.l)(),i=t.hide_table_of_contents,r=!i&&a.length>0,{hidden:i,mobile:r?(0,o.jsx)(X,{}):void 0,desktop:!r||"desktop"!==s&&"ssr"!==s?void 0:(0,o.jsx)(ee,{})}),h=l().metadata;return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!d.hidden&&ke.docItemCol),children:[(0,o.jsx)(Ce,{metadata:h}),(0,o.jsx)(y,{}),(0,o.jsxs)("div",{className:ke.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(he,{}),(0,o.jsx)(L,{}),d.mobile,(0,o.jsx)(ae,{children:c}),(0,o.jsx)(R,{})]}),(0,o.jsx)(g,{})]})]}),d.desktop&&(0,o.jsx)("div",{className:"col col--3",children:d.desktop})]})}function ye(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,o.jsx)(c,{content:e.content,children:(0,o.jsxs)(s.e3,{className:n,children:[(0,o.jsx)(d,{}),(0,o.jsx)(Be,{children:(0,o.jsx)(t,{})})]})})}},658:(e,n,t)=>{t.d(n,{i:()=>s});var a=t(2927);function s(e){void 0===e&&(e={});var n=(0,a.A)().i18n.currentLocale,t=function(){var e=(0,a.A)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}},6154:(e,n,t)=>{t.d(n,{A:()=>M});var a=t(5045),s=t(8654),i=t(7949),o=t(1026),r=t(7775),c=t(1739),l=t(758);const d={codeBlockContainer:"codeBlockContainer_APcc"};var u=t(6070),m=["as"];function h(e){var n=e.as,t=(0,a.A)(e,m),s=(0,o.A)(),l=(0,c.M$)(s);return(0,u.jsx)(n,Object.assign({},t,{style:l,className:(0,i.cn)(t.className,d.codeBlockContainer,r.G.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function b(e){var n=e.children,t=e.className;return(0,u.jsx)(h,{as:"pre",tabIndex:0,className:(0,i.cn)(p.codeBlockStandalone,"thin-scrollbar",t),children:(0,u.jsx)("code",{className:p.codeBlockLines,children:n})})}var g=t(8939),x=t(5886),v=t(9522),j=t(2699),f=t(5247),N=t(1702),A=t(9106),_=t(1750);const C={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function k(e){var n=e.code,t=e.className,a=(0,l.useState)(!1),s=a[0],o=a[1],r=(0,l.useRef)(void 0),c=(0,l.useCallback)((function(){(0,_.A)(n),o(!0),r.current=window.setTimeout((function(){o(!1)}),1e3)}),[n]);return(0,l.useEffect)((function(){return function(){return window.clearTimeout(r.current)}}),[]),(0,u.jsx)("button",{type:"button","aria-label":s?(0,f.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,f.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,f.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.cn)("clean-btn",t,C.copyButton,s&&C.copyButtonCopied),onClick:c,children:(0,u.jsxs)("span",{className:C.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(N.A,{className:C.copyButtonIcon}),(0,u.jsx)(A.A,{className:C.copyButtonSuccessIcon})]})})}const B={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function y(e){var n,t=e.line,a=e.classNames,s=e.showLineNumbers,o=e.getLineProps,r=e.getTokenProps;1===t.length&&"\n"===(null==(n=t[0])?void 0:n.content)&&(t[0].content="");var c=o({line:t,className:(0,i.cn)(a,s&&B.codeLine)}),l=t.map((function(e,n){return(0,u.jsx)("span",Object.assign({},r({token:e,key:n})),n)}));return(0,u.jsxs)("span",Object.assign({},c,{children:[s?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:B.codeLineNumber}),(0,u.jsx)("span",{className:B.codeLineContent,children:l})]}):l,(0,u.jsx)("br",{})]}))}var L=t(1235);const T={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function w(e){var n=e.className,t=e.onClick,a=e.isEnabled,s=(0,f.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:t,className:(0,i.cn)("clean-btn",n,a&&T.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,u.jsx)(L.A,{className:T.wordWrapButtonIcon,"aria-hidden":"true"})})}var I=t(3477);function U(e){var n,t=e.children,a=e.className,s=void 0===a?"":a,r=e.metastring,l=e.title,d=e.showLineNumbers,m=e.language,b=(0,x.p)().prism,f=b.defaultLanguage,N=b.magicComments,A=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=m?m:(0,c.Op)(s))?n:f),_=(0,o.A)(),C=(0,v.f)(),B=(0,c.wt)(r)||l,L=function(e){var n,t,a=(0,g.A)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),s=null!=(n=null==e||null==(t=e.match(a))||null==(t=t.groups)?void 0:t.icon)?n:"";return s?(0,u.jsx)(j.In,{icon:s,width:"16"}):null}(r),T=(0,c.Li)(t,{metastring:r,language:A,magicComments:N}),U=T.lineClassNames,O=T.code,M=null!=d?d:(0,c._u)(r);return(0,u.jsxs)(h,{as:"div",className:(0,i.cn)(s,A&&!s.includes("language-"+A)&&"language-"+A),children:[B&&(0,u.jsxs)("div",{className:p.codeBlockTitle,children:[L,B,(0,u.jsx)("span",{style:{flex:1,textAlign:"right"},children:A})]}),(0,u.jsxs)("div",{className:p.codeBlockContent,children:[(0,u.jsx)(I.f4,{theme:_,code:O,language:null!=A?A:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,s=e.getLineProps,o=e.getTokenProps;return(0,u.jsx)("pre",{ref:C.codeBlockRef,className:(0,i.cn)(n,p.codeBlock,"thin-scrollbar"),style:t,children:(0,u.jsx)("code",{className:(0,i.cn)(p.codeBlockLines,M&&p.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,u.jsx)(y,{line:e,getLineProps:s,getTokenProps:o,classNames:U[n],showLineNumbers:M},n)}))})})}}),(0,u.jsxs)("div",{className:p.buttonGroup,children:[(C.isEnabled||C.isCodeScrollable)&&(0,u.jsx)(w,{className:p.codeButton,onClick:function(){return C.toggle()},isEnabled:C.isEnabled}),(0,u.jsx)(k,{className:p.codeButton,code:O})]})]})]})}var O=["children"];function M(e){var n=e.children,t=(0,a.A)(e,O),i=(0,s.A)(),o=function(e){return l.Children.toArray(e).some((function(e){return(0,l.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),r="string"==typeof o?U:b;return(0,u.jsx)(r,Object.assign({},t,{children:o}),String(i))}},8712:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(871),s=t(2699),i=t(6070);function o(e){var n=e.href;if(!n)return(0,i.jsx)(a.A,Object.assign({},e));var t={"github.com":"simple-icons:github","x.com":"ri:twitter-x-fill"},o=Object.keys(t).find((function(e){return new RegExp("^https?://"+e).test(n)})),r=o?t[o]:null;return r?(0,i.jsxs)("span",{style:{display:"inline-flex",gap:"0.25rem"},children:[r&&(0,i.jsx)(s.In,{className:"a-icon",style:{alignSelf:"center"},icon:r,width:16,height:16}),(0,i.jsx)(a.A,Object.assign({},e,{className:"link"}))]}):(0,i.jsx)(a.A,Object.assign({},e,{className:"link"}))}},1916:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(871),s=t(7949),i=t(6070);function o(e){var n=e.permalink,t=e.title,o=e.subLabel,r=e.isNext;return(0,i.jsxs)(a.A,{className:(0,s.cn)("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[o&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},2681:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(5045),s=t(4457),i=t(3602),o=t(758),r=function(){var e=(0,o.useState)(0),n=e[0],t=e[1],a=(0,o.useRef)(null),r=(0,s.L)({container:a}).scrollYProgress;return(0,o.useLayoutEffect)((function(){a.current=document.getElementById("__blog-post-container")}),[]),(0,i.L)(r,"change",(function(e){t(e)})),{readPercent:(0,o.useMemo)((function(){return Math.round(100*n)}),[n])}},c=t(7949),l=t(5500),d=t(2644);const u={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs",hr:"hr_UhE0",percent:"percent_H6RK"};var m=t(6070),h=["className"],p="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function g(e){var n=e.className,t=(0,a.A)(e,h),s=r().readPercent;return(0,m.jsxs)(d.P.div,{className:(0,c.cn)(u.tableOfContents,"thin-scrollbar",n),initial:{opacity:1e-4,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:3},children:[(0,m.jsx)(l.A,Object.assign({},t,{className:"table-of-contents pl-0",linkClassName:p,linkActiveClassName:b})),(0,m.jsx)("hr",{className:u.hr}),(0,m.jsxs)("span",{className:u.percent,children:[s+"%"," "]})]})}},2532:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(871),s=t(7949);t(758);const i={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var o=t(6070);function r(e){var n=e.permalink,t=e.label,r=e.count,c=e.className;return(0,o.jsxs)(a.A,{href:n,className:(0,s.cn)(i.tag,r?i.tagWithCount:i.tagRegular,c),children:[t,r&&(0,o.jsx)("span",{children:r})]})}}}]);