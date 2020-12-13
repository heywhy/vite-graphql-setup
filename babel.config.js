module.exports = {
  env: {
    test: {
      sourceType: 'module',
      presets: [
        [
          '@babel/preset-env',
          { targets: { node: 'current', esmodules: true } },
        ],
        '@babel/preset-typescript',
      ],
    },
  },
}
