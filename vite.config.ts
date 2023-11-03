import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

dotenv.config()

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	css: {
		modules: {
			localsConvention: 'camelCase',
			generateScopedName: '[local]--[hash:base64:5]'
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/styles/variables/variables.scss";`
			}
		}
	},
	plugins: [react(), tsconfigPaths()],
	server: {
		port: 3000
	}
})
