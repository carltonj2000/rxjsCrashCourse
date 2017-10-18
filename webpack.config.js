const path = require('path');

const contentIn = 'build';

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, contentIn),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
}
