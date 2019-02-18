const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: () => {
          return [
            {
              loader: ['ts-loader'],
            },
          ];
        },
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};