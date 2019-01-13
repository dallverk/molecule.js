const presets = [
  [
    '@babel/env',
    {
      targets: '> 0.25%, not dead',
      useBuiltIns: 'usage',
    },
  ],
  [
    '@babel/preset-react',
    {
      development: true,
    },
  ],
];

const plugins = ['lodash'];
// edit master
module.exports = { presets, plugins };
