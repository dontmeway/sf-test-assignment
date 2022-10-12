import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import svgr from 'vite-plugin-svgr'

const rootPath = __dirname

const basePath = path.resolve(rootPath, './src')
const srcDirs = fs
  .readdirSync(basePath)
  .filter((name) => fs.lstatSync(path.join(basePath, name)).isDirectory())

const srcAliases = srcDirs.reduce<Record<string, string>>(
  (acc, name) => ({
    ...acc,
    [`@/${name}`]: `${path.resolve(rootPath, 'src')}/${name}`,
  }),
  {}
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      ...srcAliases,
    },
  },
})
