const currentTask = process.env.npm_lifecycle_event;//gives the name of the current task(dev/build)
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');
const postCSSPlugins=[
	require('postcss-import'),
	require('postcss-mixins'),
	require('postcss-simple-vars'),
	require('postcss-nested'),	
	require('autoprefixer')
];
class TaskAfterCompilation{
	apply(compiler){
		compiler.hooks.done.tap('Copy Images....',function(){
			fse.copySync('./app/assets/images','./dist/assets/images');
		});
	}
}

let cssConfig = { 
				test:/\.css$/i,
				use:[
					'css-loader?url=false',
					{
						loader:'postcss-loader',
						options:{
							plugins:postCSSPlugins
						}
					}
				],
			}
 let config ={
	entry: './app/assets/scripts/app.js',
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:"./app/index.html"
		})
	],
	module:{
		rules:[
			cssConfig
		]
	}
}
if(currentTask == "dev"){
	config.output ={
		filename:"app.bundled.js",
		path:path.resolve(__dirname,"app"),
	};
	config.devServer={
			before:function(app,server){
			server._watch('./app/**/*.html')
	},
	contentBase:path.join(__dirname,"app"),
	hot:true,
	port:8000,
	host:'0.0.0.0'
	};
	config.mode ="development";
	cssConfig.use.unshift('style-loader');

}
if(currentTask =="build"){
	config.output ={
		filename:"[name].[chunkhash].js",
		chunkFilename:"[name].[chunkhash].js",
		path:path.resolve(__dirname,"dist"),
	};
	config.mode ="production";
	config.optimization ={ 				//This code is used to split the js files (readymade code and our own code)
		splitChunks:{
			chunks:"all"
		}
	};
	config.plugins.push(
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename:'styles.[chunkhash].css'
		}),
		new TaskAfterCompilation()
	);
	cssConfig.use.unshift(MiniCssExtractPlugin.loader);//build ke time pe loader load use karega
	postCSSPlugins.push(require('cssnano'));
}
module.exports = config;
//webpack build file hamesha minified hi dega
//browser files ko cache karta hai
//1.app.bundle.js ye files vendor jaisa kaam karta hai
//uske baad hum filename use karenge jisme hamara code and vendor alag rahega
//new npm install clean-webpack-plugin --save -dev(browser vo file ko bar bar download na kare)
//cssnano is used for minified css

