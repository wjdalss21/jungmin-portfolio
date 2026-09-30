// GitHub Pages는 SPA 라우팅을 모르므로 404.html로 index.html을 복제해 딥링크를 살린다
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
