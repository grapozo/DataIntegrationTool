const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// If no env variable is set, this fallbacks to "production"
	mode: process.env.NODE_ENV,
	entry: {
		main: './src/index.tsx',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: path.join(__dirname, 'src'),
				use: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	plugins: [
		// Handles HTML files and injects the bundles.
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './public/index.html',
		}),
	],
};
