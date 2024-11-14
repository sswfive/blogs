import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  skill: [
    'skill/introduction',
    {
      label: '编程语言',
      type: 'category',
      link: { type: 'generated-index' },
      items:[
        {
          label: 'Python',
          type: 'category',
          link: { type: 'generated-index' },
          items:[
            'skill/codelang/python/env-package-selection',
          ],
        }
      ]
    },
    {
      label: '云原生技术',
      type: 'category',
      link: { type: 'generated-index' },
      items:[
        'skill/cloudnative/ktconnect-usage'
      ]
    },
    

  ],
  python: [
    'python/introduction',
    'python/hello-python',
    'python/py-coding-standards',
  ],
  tools: [
    'tools/introduction',
    {
      label: 'Plugins',
      type: 'category',
      link: {
        type: 'doc',
        id: 'tools/plugins/plugins-guide',
      },
      items: [
        'tools/plugins/chrome-plugins',
        'tools/plugins/vscode-plugins'
      ]
    },
    ],
}

module.exports = sidebars
