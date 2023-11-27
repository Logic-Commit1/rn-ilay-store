module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '~/assets': './src/assets',
            '~/components': './src/components',
            '~/constants': './src/constants',
            '~/data': './src/data',
            '~/lib': './src/lib',
            '~/navigation': './src/navigation',
            '~/tabs': './src/tabs'
          }
        }
      ]
    ]
  };
};
