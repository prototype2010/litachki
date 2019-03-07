const
    webpack = require('webpack'),
    webappWebpackPlugin = require('webapp-webpack-plugin'),
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    uglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    production = process.argv.indexOf('-p') !== -1,
    path = require('path'),
    assetsDirName = 'assets',
    bundleDirName = 'bundle',
    bundlePath = `../${assetsDirName}/${bundleDirName}`;


function getEntryPath(modulePath, moduleName) {
    return path.resolve(__dirname, `${modulePath}/${moduleName}/${moduleName}`);
}

console.log(`${production ? '[PRODUCTION' : '[DEVELOPMENT'} BUILD]`);

module.exports = {
    entry: {
        'index': getEntryPath('pages', 'index')
    },
    output: {
        publicPath: `${bundlePath}/`,
        path: path.resolve(__dirname, bundlePath),
        filename: '[name].js'
    },
    devtool: production ? false : 'inline-cheap-module-source-map',
    module: {
        rules: [

            // JS
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
            },

            // SCSS
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },

            // Resources
            {
                test: /.(jpe?g|png|svg|gif|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                //include: /(images|fonts)/,
                // exclude: /(node_modules)/,
                // use: [{loader: 'file-loader?name=[name].[ext]'}],
                // foo.css?inline
                oneOf: [
                    {
                        resourceQuery: /inline-css/,
                        use: 'url-loader'
                        //use: [{loader: 'url-loader'}],
                    },
                    {
                        resourceQuery: /inline-js/,
                        use: 'svg-inline-loader'
                        //use: [{loader: 'svg-inline-loader'}]
                    },
                    {
                        resourceQuery: /external/,
                        use: 'file-loader?name=[name].[ext]'
                        //use: [{loader: 'file-loader?name=[name].[ext]'}]
                    }
                ]
            },

            // Localization
            // {
            //     test: /\.po$/,
            //     loader: 'file-loader?name=./languages/[name].mo!po2mo-loader'
            // },

            // PUG to HTML
            {
                test: /\.pug$/,
                use: [
                    {loader: "file-loader?name=../../[name].html"},
                    {loader: "extract-loader"},
                    {loader: "html-loader?attrs=img:src!false"},
                    {loader: "pug-html-loader"}
                ]
            }

        ]
    },

    plugins: [
        new webpack.DefinePlugin({'process.env':{'NODE_ENV' : production ? `"productionuction"` : `""`}}),
        new miniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webappWebpackPlugin({
            logo: `./resources/images/favicon.svg`,
            prefix: `../bundle/favicon`,
            inject: false,
            favicons: {
                appName: 'eValuator',
                //appDescription: 'eValuator',
                //developerName: 'Me',
                //developerURL: null, // prevent retrieving from the nearest package.json
                background: '#fff',
                theme_color: '#282828',
                icons: {
                    coast: false,
                    yandex: false
                }
            }
        }),
        new cleanWebpackPlugin([bundleDirName],{
            root: path.resolve(__dirname, `../${assetsDirName}`),
            verbose: true
        }),
    ],
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                parallel: true,
                sourceMap: false,
                // extractComments: /@(?:license)/i
                extractComments: (node, comment) => {
                    console.log('comment', String(comment).search(/@(?:license)/i));
                    /*console.log(comment); */
                    return String(comment).search(/@(?:license)/i) !== -1;
                }
            })
        ]
    }
};