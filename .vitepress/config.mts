import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Guides',
  titleTemplate: ':title - Guides',
  description: 'My documentation for my apps, themes, and other thingies',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/webp', href: '/images/logos/header-sm.webp' }],
  ],

  markdown: {
    theme: { light: 'vitesse-light', dark: 'aurora-x' },
  },

  themeConfig: {
    logo: '/images/logos/header-sm.webp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Apps', link: '/apps', activeMatch: '/apps/' },
      { text: 'Themes', link: '/themes', activeMatch: '/themes/' },
      { text: 'Misc', link: '/misc', activeMatch: '/misc/' },
      { text: 'GitHub', link: '/github', activeMatch: '/github' },

      {
        text: 'External',
        items: [
          { text: 'Main Site', link: 'https://a35.dev' },
          { text: 'Email', link: 'mailto:ash@a35.dev' },
          { text: 'GitHub', link: 'https://l.a35.dev/gh' },
          { text: 'Instagram', link: 'https://l.a35.dev/in' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },
  },
})
