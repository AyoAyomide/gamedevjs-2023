import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig((command, mode) => {
  console.log(command);
  if (command === 'serve') {
    return {
    }
  } else {
    return {
      base: '/gamedevjs-2023',
      plugins: [
        viteStaticCopy({
          targets: [
            {
              src: 'src/sounds/*',
              dest: 'src/sounds'
            },
          ]
        })
      ]
    }
  }
})