const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    })
  })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

module.exports = {
  entry: [
    './src/js/index.js',
	'./src/scss/banner.scss',
	'./src/scss/style.scss',
	'./src/scss/color.scss',
    './src/scss/home/home.scss',
	'./src/scss/home-menu.scss',
	'./src/scss/home/home-service.scss',
    './src/scss/home/home-city.scss',
    './src/scss/home/home-history.scss',
    './src/scss/home/home-partner.scss',
    './src/scss/home/home-contacts.scss',
	'./src/scss/font.scss',
    './src/scss/menu.scss',
    './src/scss/form.scss',
    './src/scss/modal.scss',
    './src/scss/home-social.scss',
    './src/scss/btn.scss',
    './src/scss/helper.scss',
    './src/scss/footer.scss',
    './src/scss/tabs.scss'
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true,
                url: false
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/includes'),
        use: ['raw-loader']
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/main.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([{
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/img',
        to: './img'
      },
      {
        from: './src/uploads',
        to: './uploads'
      }
    ]),
  ].concat(htmlPlugins)
};