const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcDir=path.join(__dirname,'js','js')
const destDir=path.join(__dirname,'js','dist')

function asset(file){
	return path.join(srcDir,file)
}

module.exports = {
	mode: "production",
	entry: {
		master: asset('index.js'),
	},
	output: {
		filename: 'avon-skin.min.js',
		path: destDir,
	},
	devtool:'source-map',
	plugins: [
    	new CleanWebpackPlugin(),
	]
};
