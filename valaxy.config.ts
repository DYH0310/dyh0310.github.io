import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

const safelist = [
  'i-ri-user-line',
]

export default defineValaxyConfig<UserThemeConfig>({
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: false,
      title: "twilighty's blog",
      cloud: {
        enable: false,
      },
    },

    bg_image: {
      enable: true,
      url: '/images/16.jpg',
      opacity: 0.28,
    },

    say: {
      enable: false,
    },

    fireworks: {
      enable: false,
    },

    pages: [
      {
        name: 'About me',
        url: '/about/',
        icon: 'i-ri-user-line',
        color: '#f4b400',
      },
    ],

    menu: {
      custom: {
        title: 'About me',
        url: '/about/',
        icon: 'i-ri-user-line',
      },
    },

    footer: {
      since: 2026,
      cloud: {
        enable: false,
      },
      icon: {
        enable: false,
      },
    },
  },

  unocss: { safelist },
})
