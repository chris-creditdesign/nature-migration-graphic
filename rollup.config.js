import resolve from "rollup-plugin-node-resolve"
import buble from "rollup-plugin-buble"
import uglify from "rollup-plugin-uglify"

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH

export default {
	input: "src/js/main.js",
	output: {
		file: "js/bundle.js",
		name: "app",
		format: "iife" // immediately-invoked function expression
	},
	plugins: [
		resolve(), // So Rollup can find d3
		buble({
			exclude: ["node_modules/**"]
		}),
		production && uglify() // minify but only in production
	]
}