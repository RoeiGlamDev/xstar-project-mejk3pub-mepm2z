```javascript
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'autoprefixer': {},
    'cssnano': {
      preset: 'default',
    },
    'postcss-custom-properties': {
      preserve: true,
    },
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-properties': true,
        'nesting-rules': true,
      },
    },
    'postcss-3d-transform': {},
  },
};
```