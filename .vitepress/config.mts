import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Guides",
  description: "My documentation for my apps, themes, and other thingies",
  themeConfig: {
    logo: "/images/logos/header-sm.webp",

    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },

      {
        text: "External",
        items: [
          { text: "Main Site", link: "https://a35.dev" },
          { text: "GitHub", link: "https://l.a35.dev/gh" },
          { text: "Email", link: "mailto:ash@a35.dev" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/asboy2035" }],

    search: {
      provider: "local",
    },
  },
})
