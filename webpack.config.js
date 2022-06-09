const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // If no env variable is set, this fallbacks to "production"
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/index.tsx'
  },
  module: {
    rules: [
      /**
       * Handles tsx files using babel loader.
       */
      {
        test: /\.ts[x]?$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader'
      },
      /**
       * Handles scss files using sass-loader,
       * allows css-loader to modularize it and
       * then injects it into the DOM with style-loader.
       */
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      /**
       * Handles .svg files as React Components.
       */
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  plugins: [
    /**
     * Handles HTML files and injects the script bundles.
     */
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
};
