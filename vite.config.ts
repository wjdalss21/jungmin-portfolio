import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 프로젝트 사이트 경로 (wjdalss21.github.io/jungmin-portfolio/)
export default defineConfig({
  base: '/jungmin-portfolio/',
  plugins: [react()],
  resolve: {
    // shadcn/ui 규약의 @/ 경로 별칭 (프로젝트 루트 기준)
    alias: { '@': '/src' },
  },
})
