import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guides',
  description: 'My documentation for my apps, themes, and other thingies',
  themeConfig: {
    logo: '/images/logos/header-sm.webp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/asboy2035' }
    ],

    search: {
      provider: 'local'
    }
  }
})
