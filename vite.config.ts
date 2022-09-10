import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetWind(),
        presetAttributify({}),
        presetIcons({}),
        presetWebFonts({
          provider: 'google', // default provider
          fonts: {
            // these will extend the default theme
            sans: 'Roboto',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            // custom ones
            lobster: 'Lobster',
            lato: [
              {
                name: 'Lato',
                weights: ['400', '700'],
                italic: true,
              },
              {
                name: 'sans-serif',
                provider: 'none',
              },
            ],
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
