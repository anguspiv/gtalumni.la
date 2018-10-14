const babelOptions = {
  presets: ['@babel/react', '@babel/env'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
  ],
};

// eslint-disable-next-line
module.exports = require('babel-jest').createTransformer(babelOptions);
