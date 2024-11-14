"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[840],{8742:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var t=s(6920),i=s(6070),r=s(7092);const o={slug:"/use-github-action-to-auto-deploy",title:"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72",date:new Date("2022-05-11T00:00:00.000Z"),authors:["PyShen"],tags:["github","git"],keywords:["github","git"]},l=void 0,c={authorsImageUrls:[void 0]},a=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u5b9e\u4f8b\uff1a\u5c06 VIte \u9879\u76ee\u53d1\u5e03\u5230 GitHub Pages",id:"\u5b9e\u4f8b\u5c06-vite-\u9879\u76ee\u53d1\u5e03\u5230-github-pages",level:2},{value:"FTP\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a",id:"ftp\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a",level:2},{value:"SCP\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a",id:"scp\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5982\u679c\u6709\u5199\u8fc7\u9879\u76ee\u7684\u7ecf\u5386\uff0c\u5c31\u514d\u4e0d\u4e86\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u7136\u540e\u8f93\u5165\u542f\u52a8\u547d\u4ee4\u7684\u6b65\u9aa4\u3002\u4f46\u662f\u6709\u7684\u9879\u76ee\u5f80\u5f80\u9700\u8981\u7ecf\u5e38\u6027\u7684\u6539\u52a8\uff0c\u5982\u679c\u8fd8\u662f\u7167\u7740\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u7684\u8bdd\u3002\u5148\u4e0d\u8bf4\u8fd9\u6837\u64cd\u4f5c\u7684\u6548\u7387\uff0c\u64cd\u4f5c\u4e2a\u51e0\u6b21\u5c31\u60f3\u7f62\u5de5\u4e86\u3002\u5e76\u4e14\u4e0a\u9762\u8fd9\u6837\u64cd\u4f5c\u7684\u5f80\u5f80\u5bb9\u6613\u8bef\u64cd\u4f5c\u3002\u800c Github Actions \u6b63\u662f\u8be5\u95ee\u9898\u7684\u826f\u836f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.p,{children:"Github Actions \u662f Github \u63d0\u4f9b\u7684\u514d\u8d39\u81ea\u52a8\u5316\u6784\u5efa\u5b9e\u73b0\uff0c\u7279\u522b\u9002\u7528\u4e8e\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u4ea4\u4ed8\u7684\u573a\u666f\uff0c\u5b83\u5177\u5907\u81ea\u52a8\u5316\u5b8c\u6210\u8bb8\u591a\u4e0d\u540c\u4efb\u52a1\u7684\u80fd\u529b\uff0c\u4f8b\u5982\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u7b49\u7b49\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8fdb\u884c\u64cd\u4f5c\u524d\uff0c\u5148\u5bf9 Github Actions \u57fa\u7840\u77e5\u8bc6\u8fdb\u884c\u8865\u5145\uff0c\u5177\u4f53\u53ef\u67e5\u770b ",(0,i.jsx)(n.a,{href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",children:"GitHub Actions \u5165\u95e8\u6559\u7a0b \u962e\u4e00\u5cf0"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.a,{href:"https://github.com/marketplace?type=actions",children:"GitHub Marketplace \xb7 Actions to improve your workflow"})," \u4e2d\u627e\u5230\u6240\u6709\u7684 Actions\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b9e\u4f8b\u5c06-vite-\u9879\u76ee\u53d1\u5e03\u5230-github-pages",children:"\u5b9e\u4f8b\uff1a\u5c06 VIte \u9879\u76ee\u53d1\u5e03\u5230 GitHub Pages"}),"\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b65\uff1a\u521b\u5efa\u4e00\u4e2a Vite \u5de5\u7a0b\uff0c\u53ef\u5728",(0,i.jsx)(n.a,{href:"https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project",children:"\u5b98\u7f51"}),"\u4e2d\u67e5\u770b\u5982\u4f55\u5b89\u88c5"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pnpm create vite\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u9009\u62e9\u5bf9\u5e94\u7684\u9879\u76ee\u540d\uff08vite-project\uff09\u4e0e\u6a21\u677f\uff08vue-ts\uff09"}),"\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e8c\u6b65\uff1a\u6253\u5f00",(0,i.jsx)(n.code,{children:"package.json"}),"\u6587\u4ef6\uff0c\u52a0\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"homepage"}),"\u5b57\u6bb5\uff0c\u8868\u793a\u8be5\u5e94\u7528\u53d1\u5e03\u540e\u7684\u6839\u76ee\u5f55\uff08\u53c2\u89c1",(0,i.jsx)(n.a,{href:"https://create-react-app.dev/docs/deployment#building-for-relative-paths",children:"\u5b98\u65b9\u6587\u6863"}),"\uff09\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"homepage": "https://[username].github.io/vite-project",\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u5c06",(0,i.jsx)(n.code,{children:"[username]"}),"\u66ff\u6362\u6210\u4f60\u7684 GitHub \u7528\u6237\u540d\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7b2c\u4e09\u6b65\uff1a\u5728\u8fd9\u4e2a\u4ed3\u5e93\u7684",(0,i.jsx)(n.code,{children:".github/workflows"}),"\u76ee\u5f55\uff0c\u751f\u6210\u4e00\u4e2a workflow \u6587\u4ef6\uff0c\u540d\u5b57\u53ef\u4ee5\u968f\u4fbf\u53d6\uff0c\u8fd9\u4e2a\u793a\u4f8b\u662f",(0,i.jsx)(n.code,{children:"ci.yml"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"workflow \u6587\u4ef6\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"name: Build and Deploy\non:\n  push:\n    branches:\n      - master\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Install and Build\n        run: |\n          yarn install\n          yarn run build\n\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          personal_token: ${{ secrets.ACCESS_TOKEN }}\n          publish_dir: ./dist\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u8fd9\u4e2a workflow \u6587\u4ef6\u7684\u8981\u70b9\u5982\u4e0b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6574\u4e2a\u6d41\u7a0b\u5728",(0,i.jsx)(n.code,{children:"master"}),"\u5206\u652f\u53d1\u751f",(0,i.jsx)(n.code,{children:"push"}),"\u4e8b\u4ef6\u65f6\u89e6\u53d1\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53ea\u6709\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"job"}),"\uff0c\u8fd0\u884c\u5728\u865a\u62df\u673a\u73af\u5883",(0,i.jsx)(n.code,{children:"ubuntu-latest"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7b2c\u4e00\u6b65\u662f\u83b7\u53d6\u6e90\u7801\uff0c\u4f7f\u7528\u7684 action \u662f",(0,i.jsx)(n.code,{children:"actions/checkout"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7b2c\u4e8c\u6b65\u662f\u5b89\u88c5\u4f9d\u8d56\u4e0e\u6784\u5efa\uff0c",(0,i.jsx)(n.code,{children:"yarn install"}),"\u548c",(0,i.jsx)(n.code,{children:"yarn run build"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u7b2c\u4e09\u6b65\u662f\u90e8\u7f72\u5230 Github Page \u4e0a\uff0c\u4f7f\u7528\u7684 action \u662f ",(0,i.jsx)(n.a,{href:"https://github.com/marketplace/actions/github-pages-action",children:"peaceiris/actions-gh-pages@v3"}),"\u3002\u5176\u4e2d\u9700\u8981\u8bbe\u7f6e secrets.ACCESS_TOKEN"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7b2c\u56db\u6b65\uff1a\u5c06\u9879\u76ee\u4e0a\u4f20\u7f6e Github \u4ed3\u5e93\u4e2d\uff0c"}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5 peaceiris/actions-gh-pages \u652f\u6301\u4e09\u79cd Token\uff0c\u8fd9\u91cc\u4f7f\u7528 personal_token\uff0c\u5176\u751f\u6210\u6559\u7a0b\u5728",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",children:"\u5b98\u65b9\u6587\u6863"}),"\u4e2d\u6709\u8be6\u7ec6\u56fe\u6587\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8d34\u5176\u751f\u6210\u7684\u56fe\u4e86\u3002",(0,i.jsx)(n.strong,{children:"\u4e0d\u8fc7\u8bb0\u5f97\u6743\u9650\u8fc7\u671f\u4ee5\u53ca\u52fe\u9009\u4e0a workflow"})]}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,i.jsx)(n.p,{children:"token \u53ea\u4f1a\u5728\u751f\u6210\u7684\u65f6\u5019\u663e\u793a\u4e00\u6b21\uff0c\u5982\u9700\u8981\u518d\u6b21\u663e\u793a\uff0c\u5219\u53ef\u4ee5\u70b9\u51fb\uff0c\u4f46\u4f7f\u7528\u6b64\u4ee4\u724c\u7684\u4efb\u4f55\u811a\u672c\u6216\u5e94\u7528\u7a0b\u5e8f\u90fd\u9700\u8981\u66f4\u65b0\uff01"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u5728",(0,i.jsx)(n.strong,{children:"Settings -> Secrets -> Actions \u4e2d New repository secret"}),"\u4e2d\u4fbf\u53ef\u6dfb\u52a0 secret\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220511122017247.png",alt:"image-20220511122017247"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u65f6\u5019\u53ea\u8981\u4e00\u8c03\u7528 git push\uff0c\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684 workflows \u6587\u4ef6\u914d\u7f6e\u3002\u70b9\u51fb Actions \u4fbf\u53ef\u770b\u5230 jobs \u5de5\u4f5c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220511122420135.png",alt:"image-20220511122420135"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6b64\u65f6\u8bbf\u95ee",(0,i.jsx)(n.a,{href:"https://kuizuo.github.io/vite-project%E5%B0%B1%E5%8F%AF%E5%91%88%E7%8E%B0vite%E9%A1%B9%E7%9B%AE%EF%BC%88%E4%B8%8D%E8%BF%87%E6%88%91%E5%B7%B2%E7%BB%8F%E6%8A%8A%E4%BB%93%E5%BA%93%E7%BB%99%E5%85%B3%E9%97%AD%E4%BA%86%EF%BC%89%EF%BC%8C%E4%BD%86%E8%BF%9B%E5%85%A5%E4%BC%9A%E7%99%BD%E5%B1%8F%EF%BC%8C%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%8F%90%E7%A4%BA",children:"https://kuizuo.github.io/vite-project\u5c31\u53ef\u5448\u73b0vite\u9879\u76ee\uff08\u4e0d\u8fc7\u6211\u5df2\u7ecf\u628a\u4ed3\u5e93\u7ed9\u5173\u95ed\u4e86\uff09\uff0c\u4f46\u8fdb\u5165\u4f1a\u767d\u5c4f\uff0c\u63a7\u5236\u53f0\u63d0\u793a"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220511122914534.png",alt:"image-20220511122914534"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f88\u663e\u7136\uff0c\u9700\u8981\u9759\u6001\u8d44\u6e90\u8bf7\u6c42\u7684\u8def\u5f84\u9519\u4e86\uff0c\u6b63\u786e\u7684\u5e94\u8be5\u662f",(0,i.jsx)(n.a,{href:"https://kuizuo.github.io/vite-project/assets/index.2435d274.js%EF%BC%8C%E6%A0%B9%E6%8D%AEVite%E4%B8%AD%E7%9A%84%5B%E6%9E%84%E5%BB%BA%E7%94%9F%E4%BA%A7%E7%89%88%E6%9C%AC",children:"https://kuizuo.github.io/vite-project/assets/index.2435d274.js\uff0c\u6839\u636eVite\u4e2d\u7684[\u6784\u5efa\u751f\u4ea7\u7248\u672c"}),"](",(0,i.jsx)(n.a,{href:"https://www.vitejs.net/guide/build.html#public-base-path",children:"https://www.vitejs.net/guide/build.html#public-base-path"}),") \u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570 ",(0,i.jsx)(n.code,{children:"--base=/vite-project/"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7a0d\u52a0\u64cd\u4f5c\u5728 Install and Build \u52a0\u4e0a base \u53c2\u6570"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      - name: Install and Build\n        run: |\n          yarn install\n          yarn run build --base=/vite-project/\n"})}),"\n",(0,i.jsx)(n.p,{children:"git push \u540e\uff0c\u7a0d\u7b49\u7247\u523b\u518d\u6b21\u8bbf\u95ee\u4fbf\u53ef\u5f97\u5230\u5982\u4e0b\u9875\u9762"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220511125536189.png",alt:"image-20220511125536189"})}),"\n",(0,i.jsx)(n.h2,{id:"ftp\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a",children:"FTP\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\u73b0\u5728\u5728 Github Page \u4e0a\u642d\u5efa\u597d\u4e86\uff0c\u4f46\u8fd8\u8981\u5c06\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u8fd8\u53ef\u4ee5\u901a\u8fc7 FTP \u534f\u8bae\u6dfb\u52a0\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u8fd9\u91cc\u6211\u5c31\u4ee5\u6211\u7684\u535a\u5ba2\u4e3a\u4f8b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u670d\u52a1\u5668\u4e2d\u5f00\u542f FTP\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u7528\u6237\u540d,\u5bc6\u7801\u4ee5\u53ca\u6839\u76ee\u5f55(\u8fd9\u91cc\u6211\u95ee\u9009\u62e9\u4e3a\u9879\u76ee\u76ee\u5f55)"}),"\n",(0,i.jsxs)(n.p,{children:["workflow \u8981\u505a\u7684\u5c31\u662f\u65b0\u5efa\u4e00\u4e2a steps\uff0c\u8fd9\u91cc\u9009\u7528 ",(0,i.jsx)(n.a,{href:"https://github.com/SamKirkland/FTP-Deploy-Action",children:"FTP-Deploy-Action"}),"\uff0c\u4ee5\u4e0b\u662f\u6211\u7684\u5b8c\u6574\u914d\u7f6e\u5185\u5bb9"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"name: FTP Deploy\n\non: [push]\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Use Node.js 16\n        uses: actions/setup-node@v3\n        with:\n          node-version: '16.x'\n\n      - name: Build Project\n        run: |\n          yarn install\n          yarn run build\n\n      - name: FTP Deploy\n        uses: SamKirkland/FTP-Deploy-Action@4.0.0\n        with:\n          server: ${{ secrets.ftp_server }}\n          username: ${{ secrets.ftp_user }}\n          password: ${{ secrets.ftp_pwd }}\n          local-dir: ./build/\n          server-dir: ./\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u76f8\u4fe1\u7b2c\u4e00\u4e2a\u5b9e\u4f8b\u4e2d\u7684 workflow \u5e94\u8be5\u5df2\u7ecf\u660e\u767d\u4e86\uff0c\u5176\u4e2d ftp_server\uff0cftp_user\uff0cftp_pwd \u90fd\u662f\u79c1\u5bc6\u4fe1\u606f\uff0c\u6240\u4ee5\u9700\u8981 New repository secret \u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u7531\u4e8e build \u4e0b\u5b58\u5728\u5927\u91cf\u6587\u4ef6\u5939\u4e0e\u6587\u4ef6\uff0c\u6240\u4ee5 FTP \u901f\u5ea6\u4e0a\u4f20\u901f\u5ea6\u582a\u5fe7\uff0c\u6700\u7ec8\u8017\u65f6 17 minutes 38.4 seconds\u3002\u8fd9\u91cc\u53ea\u662f\u4f5c\u4e3a FTP \u6f14\u793a\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"scp\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a",children:"SCP\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a"}),"\n",(0,i.jsxs)(n.p,{children:["FTP \u4f20\u8f93\u6587\u4ef6\u7740\u5b9e\u8fc7\u6162\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7 SCP \u7684\u65b9\u5f0f\u6765\u4f20\u8f93\u6587\u4ef6\uff0c\u8fd9\u91cc\u7528\u5230\u4e86",(0,i.jsx)(n.a,{href:"https://github.com/marketplace/actions/ssh-deploy",children:"ssh deploy \xb7 Actions"}),"\uff0c\u4ee5\u4e0b\u662f\u793a\u4f8b"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name: ci\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Use Node.js 16\n        uses: actions/setup-node@v3\n        with:\n          node-version: '16.x'\n\n      - name: Build Project\n        run: |\n          yarn install\n          yarn run build\n\n      - name: SSH Deploy\n        uses: easingthemes/ssh-deploy@v2.2.11\n        env:\n          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}\n          ARGS: '-avzr --delete'\n          SOURCE: 'build'\n          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}\n          REMOTE_USER: 'root'\n          TARGET: '/www/wwwroot/blog'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,i.jsx)(n.strong,{children:"PRIVATE_KEY"})," \u4e3a\u670d\u52a1\u5668SSH\u767b\u5f55\u7684\u79c1\u94a5\uff0c",(0,i.jsx)(n.strong,{children:"REMOTE_HOST"})," \u5c31\u662f\u670d\u52a1\u5668\u7684ip\u5730\u5740\u3002\u5f53\u7136\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e5f\u90fd\u4f5c\u4e3a\u79c1\u5bc6\u4fe1\u606f\uff0c\u4e5f\u662f\u8981\u901a\u8fc7New repository secret\u6765\u8bbe\u7f6e\u7684\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u4e0a\u9762\u7684\u6f14\u793a\u4fbf\u53ef\u770b\u51fa Github Actions \u7684\u5f3a\u5927\uff0c\u4f46\u5176\u5b9e\u6211\u633a\u65e9\u4e4b\u524d\u5c31\u4e86\u89e3\u5230\u5b83\u80fd\u505a\u8fd9\u4e9b\u4e8b\u60c5\uff0c\u4f46\u8fdf\u8fdf\u6ca1\u6709\u52a8\u624b\u5c1d\u8bd5\u4e00\u756a\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u81ea\u52a8\u5316\u64cd\u4f5c\u7528\u4eba\u5de5\u4e5f\u662f\u80fd\u5b8c\u6210\u7684\u3002\u4e5f\u8bb8\u5f53\u65f6\u7684\u6211\u8ba4\u4e3a\uff0c\u7528\u4eba\u5de5\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u8fdc\u6bd4\u81ea\u52a8\u5316\u64cd\u4f5c\u7684\u5b66\u4e60\u65f6\u95f4\u6765\u7684\u957f\uff0c\u53ef\u53c8\u968f\u7740\u81ea\u5df1\u7684\u4e2a\u4eba\u5e94\u7528\u589e\u52a0\uff0c\u6bcf\u6b21\u90fd\u9700\u8981\u624b\u52a8\u53d1\u5e03\uff0c\u800c\u6b64\u65f6\u524d\u8005\u7684\u65f6\u95f4\u5df2\u8fdc\u8fdc\u5927\u4e8e\u540e\u8005\uff0c\u6240\u4ee5\u624d\u4f1a\u60f3\u53bb\u5b66\u4e60\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u660e\u77e5\u8be5\u6280\u672f\u662f\u4e00\u5b9a\u4f1a\u63a5\u89e6\u7684\uff0c\u4e3a\u4f55\u4e0d\u8d81\u73b0\u5728\u53bb\u4e86\u89e3\u5b66\u4e60\u5462\uff1f"})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7092:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(758);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},6920:e=>{e.exports=JSON.parse('{"permalink":"/blog/use-github-action-to-auto-deploy","source":"@site/blog/python/\u4f7f\u7528GithubAction\u81ea\u52a8\u5316\u90e8\u7f72.md","title":"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72","description":"\u5982\u679c\u6709\u5199\u8fc7\u9879\u76ee\u7684\u7ecf\u5386\uff0c\u5c31\u514d\u4e0d\u4e86\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u7136\u540e\u8f93\u5165\u542f\u52a8\u547d\u4ee4\u7684\u6b65\u9aa4\u3002\u4f46\u662f\u6709\u7684\u9879\u76ee\u5f80\u5f80\u9700\u8981\u7ecf\u5e38\u6027\u7684\u6539\u52a8\uff0c\u5982\u679c\u8fd8\u662f\u7167\u7740\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u7684\u8bdd\u3002\u5148\u4e0d\u8bf4\u8fd9\u6837\u64cd\u4f5c\u7684\u6548\u7387\uff0c\u64cd\u4f5c\u4e2a\u51e0\u6b21\u5c31\u60f3\u7f62\u5de5\u4e86\u3002\u5e76\u4e14\u4e0a\u9762\u8fd9\u6837\u64cd\u4f5c\u7684\u5f80\u5f80\u5bb9\u6613\u8bef\u64cd\u4f5c\u3002\u800c Github Actions \u6b63\u662f\u8be5\u95ee\u9898\u7684\u826f\u836f\u3002","date":"2022-05-11T00:00:00.000Z","tags":[{"inline":true,"label":"github","permalink":"/blog/tags/github"},{"inline":true,"label":"git","permalink":"/blog/tags/git"}],"readingTime":4.7,"hasTruncateMarker":true,"authors":[{"name":"PyShen","title":"\u5168\u6808 typescripter / \u521a\u6bd5\u4e1a\u7684\u5b66\u751f","url":"https://github.com/sswfive","email":"sswss5@aliyun.com","socials":{"x":"https://x.com/sswfive","github":"https://github.com/sswfive"},"key":"PyShen","page":null}],"frontMatter":{"slug":"/use-github-action-to-auto-deploy","title":"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72","date":"2022-05-11T00:00:00.000Z","authors":["PyShen"],"tags":["github","git"],"keywords":["github","git"]},"unlisted":false,"prevItem":{"title":"Hello Python","permalink":"/blog/hello-python"}}')}}]);