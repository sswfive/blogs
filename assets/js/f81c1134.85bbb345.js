"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/py-coding-standards","metadata":{"permalink":"/blog/py-coding-standards","source":"@site/blog/python/Python\u4e2d\u7684\u90a3\u4e9b\u7f16\u7801\u89c4\u8303.md","title":"Python\u4e2d\u7684\u90a3\u4e9b\u7f16\u7801\u89c4\u8303","description":"1. \u6211\u4eec\u4e5f\u8bb8\u90fd\u77e5\u9053\uff0c\u597d\u7684\u53d8\u91cf\u540d\u548c\u6ce8\u91ca\u5176\u5b9e\u5e76\u975e\u4e3a\u8ba1\u7b97\u673a\u800c\u5199\uff0c\u800c\u662f\u4e3a\u9605\u8bfb\u8005\u6216\u7ef4\u62a4\u8005\u800c\u5199\u3002","date":"2024-06-28T23:16:29.000Z","tags":[{"inline":true,"label":"python","permalink":"/blog/tags/python"}],"readingTime":6.41,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"/py-coding-standards","title":"Python\u4e2d\u7684\u90a3\u4e9b\u7f16\u7801\u89c4\u8303","date":"2024-06-28T23:16:29.000Z","tags":["python"],"keywords":["python"]},"unlisted":false,"nextItem":{"title":"Hello Python","permalink":"/blog/hello-python"}},"content":"\x3c!-- truncate --\x3e\\n\\n:::tip \u89c2\u70b9\\n\\n\\t1. \u6211\u4eec\u4e5f\u8bb8\u90fd\u77e5\u9053\uff0c\u597d\u7684\u53d8\u91cf\u540d\u548c\u6ce8\u91ca\u5176\u5b9e\u5e76\u975e\u4e3a\u8ba1\u7b97\u673a\u800c\u5199\uff0c\u800c\u662f\u4e3a\u9605\u8bfb\u8005\u6216\u7ef4\u62a4\u8005\u800c\u5199\u3002\\n\\t1. \u5bf9\u4e8e\u4e0b\u5217\u4ecb\u7ecd\u7684\u89c4\u8303\u53ca\u5efa\u8bae\uff0c\u9664\u4e86\u81ea\u8eab\u8bad\u7ec3\u5f62\u6210\u4e60\u60ef\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u793e\u533a\u91cc\u63d0\u4f9b\u7684\u76f8\u5173\u5de5\u5177\uff08\u5982ruff\uff09\u6765\u63d0\u9ad8\u6548\u7387\u3002\\n:::\\n\\n\\n\\n## \u5173\u4e8e\u53d8\u91cf\u7684\u547d\u540d\\n\\n> \u7a0b\u5e8f\u4e2d\uff0c\u6570\u636e\u90fd\u662f\u4e34\u65f6\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\uff0c\u4e3a\u4e86\u66f4\u5feb\u901f\u67e5\u627e\u6216\u4f7f\u7528\u8fd9\u4e2a\u6570\u636e\uff0c\u901a\u5e38\u628a\u8fd9\u4e2a\u6570\u636e\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u4e4b\u540e\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\uff0c\u8fd9\u4e2a\u540d\u79f0\u5c31\u662f\u53d8\u91cf\uff0c \u7b80\u8a00\u4e4b\uff0c\u53d8\u91cf\u5c31\u662f\u7528\u6765\u6807\u8bb0\u6570\u636e\u5728\u5185\u5b58\u4e2d\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002\\n\\n\u5728\u4e3b\u6d41\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u53d8\u91cf\u547d\u540d\u98ce\u683c\u4e3b\u8981\u5206\u4e3a\u9a7c\u5cf0\u547d\u540d\u6d3e\uff08CameCase\uff09\u548c\u86c7\u5f62\u547d\u540d\u6d3e\uff08snake_case\uff09\uff0c\u5176\u4e2d\u9a7c\u5cf0\u53c8\u5206\u4e3a\u5927\u9a7c\u5cf0\uff08CameCase\uff09\u548c\u5c0f\u9a7c\u5cf0\uff08cameCase\uff09,\u5728Python\u4e2d\uff0c\u5927\u9a7c\u5cf0\u548c\u86c7\u5f62\u547d\u540d\u4e24\u79cd\u98ce\u683c\u5728\u4e0d\u540c\u573a\u666f\u4e2d\u5e94\u7528\u7684\u90fd\u6bd4\u8f83\u9891\u7e41\uff0c\u5927\u9a7c\u5cf0\u547d\u540d\u4e3b\u8981\u5e94\u7528\u5728\u7c7b\u540d\u7684\u5b9a\u4e49\u4e0a\uff0c\u5176\u4ed6\u573a\u666f\u7edd\u5927\u90e8\u5206\u90fd\u662f\u4f7f\u7528\u86c7\u5f62\u547d\u540d\uff0c \u5982\uff1a\\n\\n- **\u666e\u901a\u53d8\u91cf\u540d**\uff1a\u53d8\u91cf\u540d\uff0c\u8981\u5168\u90e8\u5c0f\u5199\uff0c\u591a\u4e2a\u8bcd\u901a\u8fc7\u4e0b\u5212\u7ebf\u8fde\u63a5,\u5373\u86c7\u5f62\u547d\u540d\uff1b\\n- **\u5e38\u91cf\u540d**\uff1a\u8981\u5168\u90e8\u5927\u5199\uff0c\u591a\u4e2a\u8bcd\u901a\u8fc7\u4e0b\u5212\u7ebf\u8fde\u63a5\uff1b\\n- **\u51fd\u6570(\u6216\u65b9\u6cd5)\u540d**\uff1a\u8981\u5168\u90e8\u5c0f\u5199\uff0c\u591a\u4e2a\u8bcd\u901a\u8fc7\u4e0b\u5212\u7ebf\u8fde\u63a5\uff1b\\n- **\u7c7b\u540d**\uff1a\u8981\u4ee5\u9a7c\u5cf0\u5f62\u5f0f\u547d\u540d\uff0c\u5373\u5355\u8bcd\u9996\u5b57\u6bcd\u5927\u5199\uff0c\u591a\u4e2a\u8bcd\u7684\u8bdd\uff0c\u6bcf\u4e2a\u8bcd\u9996\u5b57\u6bcd\u5927\u5199\u7136\u540e\u76f4\u63a5\u62fc\u63a5;\\n- **\u7c7b\u7684\u79c1\u6709\u53d8\u91cf\u540d**: \u53d8\u91cf\u540d\u524d\u9700\u8981\u52a02\u4e2a\u4e0b\u5212\u7ebf\uff1b\\n\\n| **Type**                   | **Public**         | **Internal**                                                 |\\n| -------------------------- | ------------------ | ------------------------------------------------------------ |\\n| Modules                    | lower_with_under   | _lower_with_under                                            |\\n| Packages                   | lower_with_under   |                                                              |\\n| Classes                    | CapWords           | _CapWords                                                    |\\n| Exceptions                 | CapWords           |                                                              |\\n| Functions                  | lower_with_under() | _lower_with_under()                                          |\\n| Global/Class Constants     | CAPS_WITH_UNDER    | _CAPS_WITH_UNDER                                             |\\n| Global/Class Variables     | lower_with_under   | _lower_with_under                                            |\\n| Instance Variables         | lower_with_under   | _lower_with_under (protected) or __lower_with_under (private) |\\n| Method Names               | lower_with_under() | _lower_with_under() (protected) or __lower_with_under() (private) |\\n| Function/Method Parameters | lower_with_under   |                                                              |\\n| Local Variables            | lower_with_under   |                                                              |\\n\\n### \u4e00\u4e9b\u597d\u7684\u5b9e\u8df5\\n\\n- \u9075\u5faaPEP 8\u539f\u5219\uff08Python\u5b98\u65b9\u5236\u5b9a\u7684\u7f16\u7801\u98ce\u683c\u6307\u5357\u548c\u5efa\u8bae\uff09\uff1b\\n- \u547d\u540d\u9700\u8981\u505a\u5230\u540d\u5982\u5176\u610f\uff0c\u4e0d\u8981\u541d\u556c\u540d\u5b57\u7684\u957f\u5ea6\uff0c\u4f46\u9664\u4e86\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\uff0c\u53d8\u91cf\u540d\u4e00\u822c\u4e0d\u5efa\u8bae\u8d85\u8fc74\u4e2a\u5355\u8bcd;\\n- \u53d8\u91cf\u7684\u63cf\u8ff0\u6027\u8981\u5f3a\uff0c\u6bd4\u5982\uff1a\u51ac\u5929\u7684\u6885\u82b1\u6bd4\u82b1\u7684\u63cf\u8ff0\u6027\u66f4\u5f3a\uff1b\\n- \u5f53\u547d\u540d\u4e0e\u5173\u952e\u5b57\u51b2\u7a81\u65f6\uff0c\u5728\u53d8\u91cf\u672b\u5c3e\u52a0\u4e0b\u5212\u7ebf\uff0c\u6bd4\u5982\uff1aclass_;\\n\\n```python\\n# (bad) \u63cf\u8ff0\u6027\u5f31\u7684\u540d\u5b57\uff0c\u770b\u4e0d\u61c2\u5728\u505a\u4ec0\u4e48\\nvalue = process(s.strip())\\n# (good) \u63cf\u8ff0\u6027\u5f3a\u7684\u540d\u5b57\uff0c\u5c1d\u8bd5\u4ece\u7528\u6237\u8f93\u5165\u91cc\u89e3\u6790\u4e00\u4e2a\u7528\u6237\u540d\\nusername = extract_username(input_string.strip())\\n\\n# (good) \u914d\u5408\u5e03\u5c14\u503c\u7c7b\u578b\u7684\u53d8\u91cf\u540d\\nis_superuser\\nhas_errors\\nallow_enmpy\\n\\n# (good) \u5339\u914dint/float\u7c7b\u578b\u7684\u53d8\u91cf\u540d\\nport\u3001age  # \u91ca\u4e49\u4e3a\u6570\u5b57\u7684\u6240\u6709\u5355\u8bcd\\nuser_id, host_id  # \u4f7f\u7528_id\u7ed3\u5c3e\u7684\u5355\u8bcd\\nlength_of_usernmae\u3001max_length\u3001users_count # \u4f7f\u7528\u4ee5length/count\u5f00\u5934\u6216\u7ed3\u5c3e\u7684\u5355\u8bcd\\n\\n# \u4e0d\u5efa\u8bae\u62ff\u4e00\u4e2a\u540d\u8bcd\u7684\u590d\u6570\u5f62\u5f0f\u4f5c\u4e3aint\u7c7b\u578b\u7684\u53d8\u91cf\u540d\uff1b\\n```\\n\\n\\n\\n## \u5173\u4e8e\u6ce8\u91ca\u7684\u4f7f\u7528\\n\\nPython\u4e2d\u7684\u6ce8\u91ca\u4e3b\u8981\u5206\u4e3a\u4ee5`#`\u5f00\u5934\u7684\u5355\u884c\u6ce8\u91ca\u3001\u548c\u4ee5\u4e09\u8fde\u5b57\u7b26\u4e32\uff08`\\"\\"\\"...\\"\\"\\"`\uff09\u8868\u793a\u7684\u591a\u884c\u6ce8\u91ca\u6216\u6587\u6863\u6ce8\u91ca\u3002\\n\\n- \u4ee3\u7801\u5757\u6ce8\u91ca\uff0c\u5728\u4ee3\u7801\u5757\u4e0a\u4e00\u884c\u7684\u76f8\u540c\u7f29\u8fdb\u5904\u4ee5 # \u5f00\u59cb\u4e66\u5199\u6ce8\u91ca\uff1b\u4ee3\u7801\u5757\u6ce8\u91ca\u6700\u9700\u8981\u5199\u6ce8\u91ca\u7684\u5730\u65b9\u662f\u4ee3\u7801\u4e2d\u90a3\u4e9b\u6280\u5de7\u6027\u7684\u90e8\u5206\uff1b\u5bf9\u4e8e\u590d\u6742\u7684\u64cd\u4f5c\uff0c\u5e94\u8be5\u5728\u5176\u64cd\u4f5c\u5f00\u59cb\u4e4b\u524d\u5199\u4e0a\u82e5\u5e72\u884c\u6ce8\u91ca\uff0c\u5bf9\u4e8e\u4e0d\u662f\u4e00\u76ee\u4e86\u7136\u7684\u4ee3\u7801\uff0c\u5e94\u8be5\u5728\u5176\u884c\u5c3e\u6dfb\u52a0\u6ce8\u91ca\uff1b\\n- \u4ee3\u7801\u884c\u6ce8\u91ca\uff0c\u5728\u4ee3\u7801\u884c\u7684\u5c3e\u90e8\u8ddf2\u4e2a\u7a7a\u683c\uff0c\u7136\u540e\u4ee5 # \u5f00\u59cb\u4e66\u5199\u6ce8\u91ca\uff0c\u884c\u6ce8\u91ca\u5c3d\u91cf\u5c11\u5199\uff1b\\n- TODO\u6ce8\u91ca\u5e94\u8be5\u5728\u6240\u6709\u5f00\u5934\u5904\u5305\u542b\u201cTODO\u201d\u5b57\u7b26\u4e32\uff0c\u7d27\u8ddf\u7740\u7528\u62ec\u53f7\u62ec\u8d77\u6765\u4f60\u7684\u540d\u5b57\uff0cemail\u5730\u5740\u6216\u5176\u4ed6\u6807\u8bc6\u7b26\uff0c\u7136\u540e\u662f\u4e00\u4e2a\u53ef\u9009\u7684\u5192\u53f7\uff1b\\n- \u5bf9\u4e8eTODO\u6ce8\u91ca\u7684\u76ee\u7684\u662f\u7528\u6765\u8868\u793a\u201c\u5c06\u6765\u505a\u67d0\u4ef6\u4e8b\u201d\uff0c\u5efa\u8bae\u6dfb\u52a0\u6307\u5b9a\u7684\u65e5\u671f\uff1b\\n- \u82f1\u6587\u6ce8\u91ca\u5f00\u5934\u8981\u5927\u5199\uff0c\u7ed3\u5c3e\u8981\u5199\u6807\u70b9\u7b26\u53f7\uff0c\u907f\u514d\u8bed\u6cd5\u9519\u8bef\u548c\u903b\u8f91\u9519\u8bef\uff0c\u4e2d\u6587\u6ce8\u91ca\u4e5f\u662f\u76f8\u540c\u8981\u6c42\uff1b\\n- \u6539\u52a8\u4ee3\u7801\u903b\u8f91\u65f6\uff0c\u4e00\u5b9a\u8981\u53ca\u65f6\u66f4\u65b0\u76f8\u5173\u7684\u6ce8\u91ca\uff1b\\n\\n```python\\n# TODO(ssw@gmail.com): Use a \\"*\\" here for string repetition.\\n\\n# TODO(Luke) Change this to use relations.\\n```\\n\\n\\n\\n## \u5173\u4e8e\u5bfc\u5305\u7684\u89c4\u8303\\n\\n\u5728\u5bfc\u5305\u65f6\uff0c\u5bfc\u5165\u7684\u5185\u5bb9\u603b\u5e94\u8be5\u653e\u5728\u6587\u4ef6\u9876\u90e8, \u4f4d\u4e8e\u6a21\u5757\u6ce8\u91ca\u548c\u6587\u6863\u5b57\u7b26\u4e32\u4e4b\u540e,\u6a21\u5757\u5168\u5c40\u53d8\u91cf\u548c\u5e38\u91cf\u4e4b\u524d. \u5bfc\u5165\u5e94\u8be5\u6309\u7167\u4ece\u6700\u901a\u7528\u5230\u6700\u4e0d\u901a\u7528\u7684\u987a\u5e8f\u5206\u7ec4: \\n\\n1. \u6807\u51c6\u5e93\u5bfc\u5165\\n2. \u7b2c\u4e09\u65b9\u5e93\u5bfc\u5165\\n3. \u5e94\u7528\u7a0b\u5e8f\u6307\u5b9a\u5bfc\u5165\\n\\n### \u4e00\u4e9b\u597d\u7684\u5b9e\u8df5\\n\\n- \u5f53\u4f7f\u7528 import xxx\u65f6\uff0c \u901a\u5e38\u5efa\u8bae\u6bcf\u884cimport\u53ea\u5bfc\u5165\u4e00\u4e2a\u5bf9\u8c61\uff1b\\n- \u5f53\u4f7f\u7528from xxx import xxx\u65f6\uff0cimport\u540e\u9762\u8ddf\u7740\u7684\u5bf9\u8c61\u8981\u662f\u4e00\u4e2apackage(\u5305\u5bf9\u5e94\u4ee3\u7801\u76ee\u5f55)\u6216\u8005module(\u6a21\u5757\u5bf9\u5e94\u4ee3\u7801\u6587\u4ef6)\uff0c\u4e0d\u8981\u662f\u4e00\u4e2a\u7c7b\u6216\u8005\u4e00\u4e2a\u51fd\u6570\uff0c\\n- \u5f53\u4f7f\u7528from xxx import xxx\u65f6\uff0c\u539f\u5219\u4e0a\u5efa\u8bae\u4e00\u884c\u5bfc\u5165\u4e00\u4e2a\u5305\uff0c\u82e5\u5b9e\u5728\u60f3\u8981\u5728\u4e00\u884c\u5bfc\u5165\u591a\u4e2a\u5305\uff0c\u5efa\u8bae\u4f7f\u7528\uff08\uff09\u62ec\u53f7\u62ec\u8d77\u6765\uff1b\\n- \u5f53\u5bfc\u5165\u7684\u5305\u540d\u8f83\u957f\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528as \u8fdb\u884c\u5c40\u90e8\u91cd\u547d\u540d\uff1b\\n- \u5728\u5de5\u7a0b\u5f00\u53d1\u4e0a\uff0c\u5efa\u8bae\u5f15\u5165\u683c\u5f0f\u5316\u5de5\u5177\u8fdb\u884c\u4f18\u5316\uff0c\u5f53\u4e0b\u5f00\u6e90\u7684\u8fd9\u7c7b\u5de5\u5177\u592a\u591a\u592a\u591a\u4e86\uff0c\u5982isort\u3001black\uff0cruff\uff08\u5185\u7f6e\u4e86\u524d\u4e24\u79cd\uff09;\\n\\n\\n\\n## \u5173\u4e8e\u7f29\u8fdb\u548c\u6362\u884c\\n\\n- \u5728python\u4e2d\uff0c\u901a\u5e38\u4f7f\u7528\u56db\u4e2a\u7a7a\u683c\u3001\u62161\u4e2atab\u952e\u5b9e\u73b0\u7f29\u8fdb\u3002\u4f46\u975e\u5e38\u4e0d\u5efa\u8baeTab\u548c\u7a7a\u683c\u6df7\u5408\u4f7f\u7528\uff1b\\n- \u4e00\u822c\u901a\u8fc7\u4ee3\u7801\u903b\u8f91\u62c6\u5206\u7b49\u624b\u6bb5\u6765\u63a7\u5236\u6bcf\u884c\u7684\u6700\u5927\u957f\u5ea6\u4e0d\u8d85\u8fc7120\u4e2a\u5b57\u7b26\uff0c\u4f46\u6709\u4e9b\u65f6\u5019\u5355\u884c\u4ee3\u7801\u8fd8\u662f\u4e0d\u53ef\u907f\u514d\u7684\u4f1a\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u901a\u8fc7\u6362\u884c\u6765\u89e3\u51b3\u95ee\u9898\u4e86\uff1a\\n  - \u7b2c\u4e00\u79cd\uff0c\u901a\u8fc7\u5c0f\u62ec\u53f7\u8fdb\u884c\u5c01\u88c5\uff0c\u6b64\u65f6\u867d\u7136\u8de8\u884c\uff0c\u4f46\u662f\u4ecd\u5904\u4e8e\u4e00\u4e2a\u903b\u8f91\u5f15\u7528\u4e4b\u4e0b\u3002\u6bd4\u5982\u51fd\u6570\u53c2\u6570\u5217\u8868\u7684\u573a\u666f\u3001\u8fc7\u957f\u7684\u8fd0\u7b97\u8bed\u53e5\u573a\u666f\\n    \u7b2c\u4e8c\u79cd\uff0c\u76f4\u63a5\u901a\u8fc7\u6362\u884c\u7b26()\u5b9e\u73b0\uff1b\\n\\n\\n\\n## \u5173\u4e8e\u7a7a\u884c\u548c\u7a7a\u683c\\n\\n- \u7a7a\u884c\u89c4\u8303\\n    - \u5168\u5c40\u7684(\u6587\u4ef6\u7ea7\u522b\u7684)\u7c7b\u548c\u5168\u5c40\u7684\u51fd\u6570\u4e0a\u65b9\u8981\u6709\u4e24\u4e2a\u7a7a\u884c\\n    - \u7c7b\u4e2d\u7684\u51fd\u6570\u4e0a\u65b9\u8981\u6709\u4e00\u4e2a\u7a7a\u884c\\n    - \u51fd\u6570\u5185\u90e8\u4e0d\u540c\u610f\u7fa4\u7684\u4ee3\u7801\u5757\u4e4b\u524d\u8981\u6709\u4e00\u4e2a\u7a7a\u884c\\n    - \u4e0d\u8981\u628a\u591a\u884c\u8bed\u53e5\u5408\u5e76\u4e3a\u4e00\u884c(\u5373\u4e0d\u8981\u4f7f\u7528\u5206\u53f7\u5206\u9694\u591a\u6761\u8bed\u53e5)\\n    - \u5f53\u4f7f\u7528\u63a7\u5236\u8bed\u53e5if/while/for\u65f6\uff0c\u5373\u4f7f\u6267\u884c\u8bed\u53e5\u53ea\u6709\u4e00\u884c\u547d\u4ee4\uff0c\u4e5f\u9700\u8981\u53e6\u8d77\u4e00\u884c\\n    - \u4ee3\u7801\u6587\u4ef6\u5c3e\u90e8\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u7a7a\u884c\\n- \u7a7a\u683c\u89c4\u8303\\n    - \u51fd\u6570\u7684\u53c2\u6570\u4e4b\u95f4\u8981\u6709\u4e00\u4e2a\u7a7a\u683c\\n    - \u5217\u8868\u3001\u5143\u7ec4\u3001\u5b57\u5178\u7684\u5143\u7d20\u4e4b\u95f4\u8981\u6709\u4e00\u4e2a\u7a7a\u683c\\n    - \u5b57\u5178\u7684\u5192\u53f7\u4e4b\u540e\u8981\u6709\u4e00\u4e2a\u7a7a\u683c\\n    - \u4f7f\u7528#\u6ce8\u91ca\u7684\u8bdd\uff0c#\u540e\u8981\u6709\u4e00\u4e2a\u7a7a\u683c\\n    - \u64cd\u4f5c\u7b26(\u4f8b\u5982+\uff0c-\uff0c*\uff0c/\uff0c&\uff0c|\uff0c=\uff0c==\uff0c!=)\u4e24\u8fb9\u90fd\u8981\u6709\u4e00\u4e2a\u7a7a\u683c\uff0c\u4e0d\u8fc7\u62ec\u53f7(\u5305\u62ec\u5c0f\u62ec\u53f7\u3001\u4e2d\u62ec\u53f7\u548c\u5927\u62ec\u53f7)\u5185\u7684\u4e24\u7aef\u4e0d\u9700\u8981\u7a7a\u683c\\n\\n\\n\\n## \u5173\u4e8e\u7c7b\u6216\u51fd\u6570\uff08\u65b9\u6cd5\uff09\u7684\u6ce8\u91ca\\n\\n\u901a\u5e38\u4f7f\u7528\u4e09\u4e2a\u53cc\u5f15\u53f7\u5f00\u59cb\uff0c\u4e09\u4e2a\u53cc\u5f15\u53f7\u7ed3\u5c3e\u6765\u5b9e\u73b0\u6587\u6863\u6ce8\u91ca\uff1b\\n\\n1. \u9996\u5148\u7528\u4e00\u53e5\u8bdd\u7b80\u5355\u8bf4\u660e\u8fd9\u4e2a\u51fd\u6570\u662f\u505a\u4ec0\u4e48\uff0c\u7136\u540e\u8ddf\u4e00\u6bb5\u8bdd\u6765\u8be6\u7ec6\u89e3\u91ca\uff1b\\n2. \u518d\u5f80\u540e\u5c31\u662f\u53c2\u6570\u5217\u8868\u3001\u53c2\u6570\u683c\u5f0f\u3001\u8fd4\u56de\u503c\u683c\u5f0f\u7684\u63cf\u8ff0\uff1b\\n\\n**\u793a\u4f8b\uff1a**\\n\\n```python\\nclass SampleClass(object):\\n    \\"\\"\\"Summary of class here.\\n\\n    Longer class information....\\n    Longer class information....\\n\\n    Attributes:\\n        likes_spam: A boolean indicating if we like SPAM or not.\\n        eggs: An integer count of the eggs we have laid.\\n    \\"\\"\\"\\n\\n    def __init__(self, likes_spam=False):\\n        \\"\\"\\"Inits SampleClass with blah.\\"\\"\\"\\n        self.likes_spam = likes_spam\\n        self.eggs = 0\\n\\n    def public_method(self):\\n        \\"\\"\\"Performs operation blah.\\"\\"\\"\\n        if i & (i-1) == 0:        # true iff i is a power of 2\\n```"},{"id":"/hello-python","metadata":{"permalink":"/blog/hello-python","source":"@site/blog/python/Python\u4e4b\u7985.md","title":"Hello Python","description":"\u6211\u6709\u4e00\u4e2a\u68a6\u60f3\uff0c\u6211\u5199\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u50cf\u8bd7\u6b4c\u4e00\u6837\u4f18\u7f8e\u3002\u6211\u6709\u4e00\u4e2a\u68a6\u60f3\uff0c\u6211\u505a\u7684\u8bbe\u8ba1\uff0c\u80fd\u6070\u5230\u597d\u5904\uff0c\u65e2\u4e0d\u8fc7\u5ea6\uff0c\u4e5f\u65e0\u4e0d\u8db3\u3002\u8fd9\u79cd\u5e26\u6709\u4e00\u70b9\u6d01\u7656\u7684\u5b8c\u7f8e\u4e3b\u4e49\u5c31\u50cf\u4e00\u628a\u8fbe\u6469\u514b\u5229\u65af\u4e4b\u5251\uff0c\u65f6\u523b\u63d0\u9192\u6211\uff0c\u4e0d\u80fd\u5c06\u5c31\u3001\u4e0d\u80fd\u59a5\u534f\u3002   ---\u6458\u81ea\u300a\u4ee3\u7801\u7cbe\u8fdb\u4e4b\u8def\uff1a\u4ece\u7801\u519c\u5230\u5de5\u5320\u300b","date":"2024-06-28T20:00:00.000Z","tags":[{"inline":true,"label":"Python","permalink":"/blog/tags/python"}],"readingTime":0.84,"hasTruncateMarker":true,"authors":[{"name":"PyShen","title":"\u5168\u6808 typescripter / \u521a\u6bd5\u4e1a\u7684\u5b66\u751f","url":"https://github.com/sswfive","email":"sswss5@aliyun.com","socials":{"x":"https://x.com/sswfive","github":"https://github.com/sswfive"},"key":"PyShen","page":null}],"frontMatter":{"slug":"/hello-python","title":"Hello Python","date":"2024-06-28T20:00:00.000Z","authors":"PyShen","tags":["Python"],"keywords":["Python"]},"unlisted":false,"prevItem":{"title":"Python\u4e2d\u7684\u90a3\u4e9b\u7f16\u7801\u89c4\u8303","permalink":"/blog/py-coding-standards"},"nextItem":{"title":"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72","permalink":"/blog/use-github-action-to-auto-deploy"}},"content":"\x3c!-- truncate --\x3e\\r\\n\\r\\n:::tip \u60f3\u6cd5\\r\\n\u6211\u6709\u4e00\u4e2a\u68a6\u60f3\uff0c\u6211\u5199\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u50cf\u8bd7\u6b4c\u4e00\u6837\u4f18\u7f8e\u3002\u6211\u6709\u4e00\u4e2a\u68a6\u60f3\uff0c\u6211\u505a\u7684\u8bbe\u8ba1\uff0c\u80fd\u6070\u5230\u597d\u5904\uff0c\u65e2\u4e0d\u8fc7\u5ea6\uff0c\u4e5f\u65e0\u4e0d\u8db3\u3002\u8fd9\u79cd\u5e26\u6709\u4e00\u70b9\u6d01\u7656\u7684\u5b8c\u7f8e\u4e3b\u4e49\u5c31\u50cf\u4e00\u628a\u8fbe\u6469\u514b\u5229\u65af\u4e4b\u5251\uff0c\u65f6\u523b\u63d0\u9192\u6211\uff0c\u4e0d\u80fd\u5c06\u5c31\u3001\u4e0d\u80fd\u59a5\u534f\u3002   ---\u6458\u81ea\u300a\u4ee3\u7801\u7cbe\u8fdb\u4e4b\u8def\uff1a\u4ece\u7801\u519c\u5230\u5de5\u5320\u300b\\r\\n:::\\r\\n\\r\\n\\r\\n## Python\u4e4b\u7985\\r\\n\\r\\n```python\\r\\n\\r\\nimport this\\r\\n\\r\\nThe Zen of Python, by Tim Peters\\r\\n\\r\\nBeautiful is better than ugly.\\r\\nExplicit is better than implicit.\\r\\nSimple is better than complex.\\r\\nComplex is better than complicated.\\r\\nFlat is better than nested.\\r\\nSparse is better than dense.\\r\\nReadability counts.\\r\\nSpecial cases aren\'t special enough to break the rules.\\r\\nAlthough practicality beats purity.\\r\\nErrors should never pass silently.\\r\\nUnless explicitly silenced.\\r\\nIn the face of ambiguity, refuse the temptation to guess.\\r\\nThere should be one-- and preferably only one --obvious way to do it.\\r\\nAlthough that way may not be obvious at first unless you\'re Dutch.\\r\\nNow is better than never.\\r\\nAlthough never is often better than *right* now.\\r\\nIf the implementation is hard to explain, it\'s a bad idea.\\r\\nIf the implementation is easy to explain, it may be a good idea.\\r\\nNamespaces are one honking great idea -- let\'s do more of those!\\r\\n```"},{"id":"/use-github-action-to-auto-deploy","metadata":{"permalink":"/blog/use-github-action-to-auto-deploy","source":"@site/blog/python/\u4f7f\u7528GithubAction\u81ea\u52a8\u5316\u90e8\u7f72.md","title":"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72","description":"\u5982\u679c\u6709\u5199\u8fc7\u9879\u76ee\u7684\u7ecf\u5386\uff0c\u5c31\u514d\u4e0d\u4e86\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u7136\u540e\u8f93\u5165\u542f\u52a8\u547d\u4ee4\u7684\u6b65\u9aa4\u3002\u4f46\u662f\u6709\u7684\u9879\u76ee\u5f80\u5f80\u9700\u8981\u7ecf\u5e38\u6027\u7684\u6539\u52a8\uff0c\u5982\u679c\u8fd8\u662f\u7167\u7740\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u7684\u8bdd\u3002\u5148\u4e0d\u8bf4\u8fd9\u6837\u64cd\u4f5c\u7684\u6548\u7387\uff0c\u64cd\u4f5c\u4e2a\u51e0\u6b21\u5c31\u60f3\u7f62\u5de5\u4e86\u3002\u5e76\u4e14\u4e0a\u9762\u8fd9\u6837\u64cd\u4f5c\u7684\u5f80\u5f80\u5bb9\u6613\u8bef\u64cd\u4f5c\u3002\u800c Github Actions \u6b63\u662f\u8be5\u95ee\u9898\u7684\u826f\u836f\u3002","date":"2022-05-11T00:00:00.000Z","tags":[{"inline":true,"label":"github","permalink":"/blog/tags/github"},{"inline":true,"label":"git","permalink":"/blog/tags/git"}],"readingTime":4.7,"hasTruncateMarker":true,"authors":[{"name":"PyShen","title":"\u5168\u6808 typescripter / \u521a\u6bd5\u4e1a\u7684\u5b66\u751f","url":"https://github.com/sswfive","email":"sswss5@aliyun.com","socials":{"x":"https://x.com/sswfive","github":"https://github.com/sswfive"},"key":"PyShen","page":null}],"frontMatter":{"slug":"/use-github-action-to-auto-deploy","title":"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72","date":"2022-05-11T00:00:00.000Z","authors":["PyShen"],"tags":["github","git"],"keywords":["github","git"]},"unlisted":false,"prevItem":{"title":"Hello Python","permalink":"/blog/hello-python"}},"content":"\u5982\u679c\u6709\u5199\u8fc7\u9879\u76ee\u7684\u7ecf\u5386\uff0c\u5c31\u514d\u4e0d\u4e86\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u7136\u540e\u8f93\u5165\u542f\u52a8\u547d\u4ee4\u7684\u6b65\u9aa4\u3002\u4f46\u662f\u6709\u7684\u9879\u76ee\u5f80\u5f80\u9700\u8981\u7ecf\u5e38\u6027\u7684\u6539\u52a8\uff0c\u5982\u679c\u8fd8\u662f\u7167\u7740\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u7684\u8bdd\u3002\u5148\u4e0d\u8bf4\u8fd9\u6837\u64cd\u4f5c\u7684\u6548\u7387\uff0c\u64cd\u4f5c\u4e2a\u51e0\u6b21\u5c31\u60f3\u7f62\u5de5\u4e86\u3002\u5e76\u4e14\u4e0a\u9762\u8fd9\u6837\u64cd\u4f5c\u7684\u5f80\u5f80\u5bb9\u6613\u8bef\u64cd\u4f5c\u3002\u800c Github Actions \u6b63\u662f\u8be5\u95ee\u9898\u7684\u826f\u836f\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u4ecb\u7ecd\\n\\nGithub Actions \u662f Github \u63d0\u4f9b\u7684\u514d\u8d39\u81ea\u52a8\u5316\u6784\u5efa\u5b9e\u73b0\uff0c\u7279\u522b\u9002\u7528\u4e8e\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u4ea4\u4ed8\u7684\u573a\u666f\uff0c\u5b83\u5177\u5907\u81ea\u52a8\u5316\u5b8c\u6210\u8bb8\u591a\u4e0d\u540c\u4efb\u52a1\u7684\u80fd\u529b\uff0c\u4f8b\u5982\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u7b49\u7b49\u3002\\n\\n## \u6982\u5ff5\\n\\n\u5728\u8fdb\u884c\u64cd\u4f5c\u524d\uff0c\u5148\u5bf9 Github Actions \u57fa\u7840\u77e5\u8bc6\u8fdb\u884c\u8865\u5145\uff0c\u5177\u4f53\u53ef\u67e5\u770b [GitHub Actions \u5165\u95e8\u6559\u7a0b \u962e\u4e00\u5cf0](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)\\n\\n\u53ef\u4ee5\u5728 [GitHub Marketplace \xb7 Actions to improve your workflow](https://github.com/marketplace?type=actions) \u4e2d\u627e\u5230\u6240\u6709\u7684 Actions\u3002\\n\\n## \u5b9e\u4f8b\uff1a\u5c06 VIte \u9879\u76ee\u53d1\u5e03\u5230 GitHub Pages\\n\\n\u7b2c\u4e00\u6b65\uff1a\u521b\u5efa\u4e00\u4e2a Vite \u5de5\u7a0b\uff0c\u53ef\u5728[\u5b98\u7f51](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)\u4e2d\u67e5\u770b\u5982\u4f55\u5b89\u88c5\\n\\n```\\npnpm create vite\\n```\\n\\n\u9009\u62e9\u5bf9\u5e94\u7684\u9879\u76ee\u540d\uff08vite-project\uff09\u4e0e\u6a21\u677f\uff08vue-ts\uff09\\n\\n\u7b2c\u4e8c\u6b65\uff1a\u6253\u5f00`package.json`\u6587\u4ef6\uff0c\u52a0\u4e00\u4e2a`homepage`\u5b57\u6bb5\uff0c\u8868\u793a\u8be5\u5e94\u7528\u53d1\u5e03\u540e\u7684\u6839\u76ee\u5f55\uff08\u53c2\u89c1[\u5b98\u65b9\u6587\u6863](https://create-react-app.dev/docs/deployment#building-for-relative-paths)\uff09\u3002\\n\\n```\\n\\"homepage\\": \\"https://[username].github.io/vite-project\\",\\n```\\n\\n\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u5c06`[username]`\u66ff\u6362\u6210\u4f60\u7684 GitHub \u7528\u6237\u540d\u3002\\n\\n\u7b2c\u4e09\u6b65\uff1a\u5728\u8fd9\u4e2a\u4ed3\u5e93\u7684`.github/workflows`\u76ee\u5f55\uff0c\u751f\u6210\u4e00\u4e2a workflow \u6587\u4ef6\uff0c\u540d\u5b57\u53ef\u4ee5\u968f\u4fbf\u53d6\uff0c\u8fd9\u4e2a\u793a\u4f8b\u662f`ci.yml`\u3002\\n\\nworkflow \u6587\u4ef6\u5982\u4e0b\\n\\n```yml\\nname: Build and Deploy\\non:\\n  push:\\n    branches:\\n      - master\\njobs:\\n  build-and-deploy:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - name: Checkout\\n        uses: actions/checkout@v3\\n\\n      - name: Install and Build\\n        run: |\\n          yarn install\\n          yarn run build\\n\\n      - name: Deploy\\n        uses: peaceiris/actions-gh-pages@v3\\n        with:\\n          personal_token: ${{ secrets.ACCESS_TOKEN }}\\n          publish_dir: ./dist\\n```\\n\\n\u4e0a\u9762\u8fd9\u4e2a workflow \u6587\u4ef6\u7684\u8981\u70b9\u5982\u4e0b\\n\\n1. \u6574\u4e2a\u6d41\u7a0b\u5728`master`\u5206\u652f\u53d1\u751f`push`\u4e8b\u4ef6\u65f6\u89e6\u53d1\u3002\\n2. \u53ea\u6709\u4e00\u4e2a`job`\uff0c\u8fd0\u884c\u5728\u865a\u62df\u673a\u73af\u5883`ubuntu-latest`\u3002\\n3. \u7b2c\u4e00\u6b65\u662f\u83b7\u53d6\u6e90\u7801\uff0c\u4f7f\u7528\u7684 action \u662f`actions/checkout`\u3002\\n4. \u7b2c\u4e8c\u6b65\u662f\u5b89\u88c5\u4f9d\u8d56\u4e0e\u6784\u5efa\uff0c`yarn install`\u548c`yarn run build`\\n5. \u7b2c\u4e09\u6b65\u662f\u90e8\u7f72\u5230 Github Page \u4e0a\uff0c\u4f7f\u7528\u7684 action \u662f [peaceiris/actions-gh-pages@v3](https://github.com/marketplace/actions/github-pages-action)\u3002\u5176\u4e2d\u9700\u8981\u8bbe\u7f6e secrets.ACCESS_TOKEN\\n\\n\u7b2c\u56db\u6b65\uff1a\u5c06\u9879\u76ee\u4e0a\u4f20\u7f6e Github \u4ed3\u5e93\u4e2d\uff0c\\n\\n\u8be5 peaceiris/actions-gh-pages \u652f\u6301\u4e09\u79cd Token\uff0c\u8fd9\u91cc\u4f7f\u7528 personal_token\uff0c\u5176\u751f\u6210\u6559\u7a0b\u5728[\u5b98\u65b9\u6587\u6863](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)\u4e2d\u6709\u8be6\u7ec6\u56fe\u6587\uff0c\u8fd9\u91cc\u5c31\u4e0d\u8d34\u5176\u751f\u6210\u7684\u56fe\u4e86\u3002**\u4e0d\u8fc7\u8bb0\u5f97\u6743\u9650\u8fc7\u671f\u4ee5\u53ca\u52fe\u9009\u4e0a workflow**\\n\\n:::tip Tip\\n\\ntoken \u53ea\u4f1a\u5728\u751f\u6210\u7684\u65f6\u5019\u663e\u793a\u4e00\u6b21\uff0c\u5982\u9700\u8981\u518d\u6b21\u663e\u793a\uff0c\u5219\u53ef\u4ee5\u70b9\u51fb\uff0c\u4f46\u4f7f\u7528\u6b64\u4ee4\u724c\u7684\u4efb\u4f55\u811a\u672c\u6216\u5e94\u7528\u7a0b\u5e8f\u90fd\u9700\u8981\u66f4\u65b0\uff01\\n\\n:::\\n\\n\u7136\u540e\u5728**Settings -> Secrets -> Actions \u4e2d New repository secret**\u4e2d\u4fbf\u53ef\u6dfb\u52a0 secret\u3002\\n\\n![image-20220511122017247](https://img.kuizuo.cn/image-20220511122017247.png)\\n\\n\u8fd9\u65f6\u5019\u53ea\u8981\u4e00\u8c03\u7528 git push\uff0c\u5c31\u4f1a\u89e6\u53d1\u5bf9\u5e94\u7684 workflows \u6587\u4ef6\u914d\u7f6e\u3002\u70b9\u51fb Actions \u4fbf\u53ef\u770b\u5230 jobs \u5de5\u4f5c\u3002\\n\\n![image-20220511122420135](https://img.kuizuo.cn/image-20220511122420135.png)\\n\\n\u6b64\u65f6\u8bbf\u95eehttps://kuizuo.github.io/vite-project\u5c31\u53ef\u5448\u73b0vite\u9879\u76ee\uff08\u4e0d\u8fc7\u6211\u5df2\u7ecf\u628a\u4ed3\u5e93\u7ed9\u5173\u95ed\u4e86\uff09\uff0c\u4f46\u8fdb\u5165\u4f1a\u767d\u5c4f\uff0c\u63a7\u5236\u53f0\u63d0\u793a\\n\\n![image-20220511122914534](https://img.kuizuo.cn/image-20220511122914534.png)\\n\\n\u5f88\u663e\u7136\uff0c\u9700\u8981\u9759\u6001\u8d44\u6e90\u8bf7\u6c42\u7684\u8def\u5f84\u9519\u4e86\uff0c\u6b63\u786e\u7684\u5e94\u8be5\u662fhttps://kuizuo.github.io/vite-project/assets/index.2435d274.js\uff0c\u6839\u636eVite\u4e2d\u7684[\u6784\u5efa\u751f\u4ea7\u7248\u672c](https://www.vitejs.net/guide/build.html#public-base-path) \u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570 `--base=/vite-project/`\\n\\n\u7a0d\u52a0\u64cd\u4f5c\u5728 Install and Build \u52a0\u4e0a base \u53c2\u6570\\n\\n```\\n      - name: Install and Build\\n        run: |\\n          yarn install\\n          yarn run build --base=/vite-project/\\n```\\n\\ngit push \u540e\uff0c\u7a0d\u7b49\u7247\u523b\u518d\u6b21\u8bbf\u95ee\u4fbf\u53ef\u5f97\u5230\u5982\u4e0b\u9875\u9762\\n\\n![image-20220511125536189](https://img.kuizuo.cn/image-20220511125536189.png)\\n\\n## FTP\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a\\n\\n\u90a3\u4e48\u73b0\u5728\u5728 Github Page \u4e0a\u642d\u5efa\u597d\u4e86\uff0c\u4f46\u8fd8\u8981\u5c06\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u8fd8\u53ef\u4ee5\u901a\u8fc7 FTP \u534f\u8bae\u6dfb\u52a0\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u8fd9\u91cc\u6211\u5c31\u4ee5\u6211\u7684\u535a\u5ba2\u4e3a\u4f8b\u3002\\n\\n\u5728\u670d\u52a1\u5668\u4e2d\u5f00\u542f FTP\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u7528\u6237\u540d,\u5bc6\u7801\u4ee5\u53ca\u6839\u76ee\u5f55(\u8fd9\u91cc\u6211\u95ee\u9009\u62e9\u4e3a\u9879\u76ee\u76ee\u5f55)\\n\\nworkflow \u8981\u505a\u7684\u5c31\u662f\u65b0\u5efa\u4e00\u4e2a steps\uff0c\u8fd9\u91cc\u9009\u7528 [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)\uff0c\u4ee5\u4e0b\u662f\u6211\u7684\u5b8c\u6574\u914d\u7f6e\u5185\u5bb9\\n\\n```yml\\nname: FTP Deploy\\n\\non: [push]\\n\\njobs:\\n  build-and-deploy:\\n    runs-on: ubuntu-latest\\n\\n    steps:\\n      - name: Checkout\\n        uses: actions/checkout@v3\\n\\n      - name: Use Node.js 16\\n        uses: actions/setup-node@v3\\n        with:\\n          node-version: \'16.x\'\\n\\n      - name: Build Project\\n        run: |\\n          yarn install\\n          yarn run build\\n\\n      - name: FTP Deploy\\n        uses: SamKirkland/FTP-Deploy-Action@4.0.0\\n        with:\\n          server: ${{ secrets.ftp_server }}\\n          username: ${{ secrets.ftp_user }}\\n          password: ${{ secrets.ftp_pwd }}\\n          local-dir: ./build/\\n          server-dir: ./\\n```\\n\\n\u76f8\u4fe1\u7b2c\u4e00\u4e2a\u5b9e\u4f8b\u4e2d\u7684 workflow \u5e94\u8be5\u5df2\u7ecf\u660e\u767d\u4e86\uff0c\u5176\u4e2d ftp_server\uff0cftp_user\uff0cftp_pwd \u90fd\u662f\u79c1\u5bc6\u4fe1\u606f\uff0c\u6240\u4ee5\u9700\u8981 New repository secret \u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u53d8\u91cf\u3002\\n\\n\u4f46\u7531\u4e8e build \u4e0b\u5b58\u5728\u5927\u91cf\u6587\u4ef6\u5939\u4e0e\u6587\u4ef6\uff0c\u6240\u4ee5 FTP \u901f\u5ea6\u4e0a\u4f20\u901f\u5ea6\u582a\u5fe7\uff0c\u6700\u7ec8\u8017\u65f6 17 minutes 38.4 seconds\u3002\u8fd9\u91cc\u53ea\u662f\u4f5c\u4e3a FTP \u6f14\u793a\u3002\\n\\n## SCP\u53d1\u5e03\u5230\u81ea\u6709\u670d\u52a1\u5668\u4e0a\\n\\nFTP \u4f20\u8f93\u6587\u4ef6\u7740\u5b9e\u8fc7\u6162\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7 SCP \u7684\u65b9\u5f0f\u6765\u4f20\u8f93\u6587\u4ef6\uff0c\u8fd9\u91cc\u7528\u5230\u4e86[ssh deploy \xb7 Actions](https://github.com/marketplace/actions/ssh-deploy)\uff0c\u4ee5\u4e0b\u662f\u793a\u4f8b\\n\\n```yaml\\nname: ci\\n\\non:\\n  push:\\n    branches:\\n      - main\\n\\njobs:\\n  build-and-deploy:\\n    runs-on: ubuntu-latest\\n\\n    steps:\\n      - name: Checkout\\n        uses: actions/checkout@v3\\n\\n      - name: Use Node.js 16\\n        uses: actions/setup-node@v3\\n        with:\\n          node-version: \'16.x\'\\n\\n      - name: Build Project\\n        run: |\\n          yarn install\\n          yarn run build\\n\\n      - name: SSH Deploy\\n        uses: easingthemes/ssh-deploy@v2.2.11\\n        env:\\n          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}\\n          ARGS: \'-avzr --delete\'\\n          SOURCE: \'build\'\\n          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}\\n          REMOTE_USER: \'root\'\\n          TARGET: \'/www/wwwroot/blog\'\\n```\\n\\n\u5176\u4e2d **PRIVATE_KEY** \u4e3a\u670d\u52a1\u5668SSH\u767b\u5f55\u7684\u79c1\u94a5\uff0c**REMOTE_HOST** \u5c31\u662f\u670d\u52a1\u5668\u7684ip\u5730\u5740\u3002\u5f53\u7136\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e5f\u90fd\u4f5c\u4e3a\u79c1\u5bc6\u4fe1\u606f\uff0c\u4e5f\u662f\u8981\u901a\u8fc7New repository secret\u6765\u8bbe\u7f6e\u7684\u3002\\n\\n## \u603b\u7ed3\\n\\n\u4ece\u4e0a\u9762\u7684\u6f14\u793a\u4fbf\u53ef\u770b\u51fa Github Actions \u7684\u5f3a\u5927\uff0c\u4f46\u5176\u5b9e\u6211\u633a\u65e9\u4e4b\u524d\u5c31\u4e86\u89e3\u5230\u5b83\u80fd\u505a\u8fd9\u4e9b\u4e8b\u60c5\uff0c\u4f46\u8fdf\u8fdf\u6ca1\u6709\u52a8\u624b\u5c1d\u8bd5\u4e00\u756a\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u81ea\u52a8\u5316\u64cd\u4f5c\u7528\u4eba\u5de5\u4e5f\u662f\u80fd\u5b8c\u6210\u7684\u3002\u4e5f\u8bb8\u5f53\u65f6\u7684\u6211\u8ba4\u4e3a\uff0c\u7528\u4eba\u5de5\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u8fdc\u6bd4\u81ea\u52a8\u5316\u64cd\u4f5c\u7684\u5b66\u4e60\u65f6\u95f4\u6765\u7684\u957f\uff0c\u53ef\u53c8\u968f\u7740\u81ea\u5df1\u7684\u4e2a\u4eba\u5e94\u7528\u589e\u52a0\uff0c\u6bcf\u6b21\u90fd\u9700\u8981\u624b\u52a8\u53d1\u5e03\uff0c\u800c\u6b64\u65f6\u524d\u8005\u7684\u65f6\u95f4\u5df2\u8fdc\u8fdc\u5927\u4e8e\u540e\u8005\uff0c\u6240\u4ee5\u624d\u4f1a\u60f3\u53bb\u5b66\u4e60\u3002\\n\\n\u660e\u77e5\u8be5\u6280\u672f\u662f\u4e00\u5b9a\u4f1a\u63a5\u89e6\u7684\uff0c\u4e3a\u4f55\u4e0d\u8d81\u73b0\u5728\u53bb\u4e86\u89e3\u5b66\u4e60\u5462\uff1f"}]}}')}}]);