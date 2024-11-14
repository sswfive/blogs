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
      label: 'ModelOps技术',
      type: 'category',
      link: { type: 'generated-index' },
      items:[
       'skill/modelops/modelops-common-tech',
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
    {
      label: 'Python工程实践',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'python/PythonEngineerPractice/pypi-source-usage'
      ],
    }
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
