import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  skill: [
    'skill/introduction',
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
        'tools/chrome-plugins',
        'tools/vscode-plugins'
      ]
    },
    'tools/chrome-plugins',
    'tools/vscode-plugins'
    ],
}

module.exports = sidebars
