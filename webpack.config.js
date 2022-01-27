const HtmlWebpackPlugin = require('html-webpack-plugin')

const PORT = process.env.PORT || 3000

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true, // 최적화 옵션 여부
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // 템플릿 지정
    }),
  ],
  devServer: {
    host: 'localhost',
    port: PORT,
    open: true, // 서버 실행 시 브라우저 자동 실행 여부
  },
}
