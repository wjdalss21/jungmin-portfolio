import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 프로젝트 사이트 경로 (wjdalss21.github.io/jungmin-portfolio/)
export default defineConfig({
  base: '/jungmin-portfolio/',
  plugins: [react()],
  resolve: {
    // shadcn/ui 규약의 @/ 경로 별칭. dev와 build 모두 확실히 풀리도록 절대 경로 사용
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
