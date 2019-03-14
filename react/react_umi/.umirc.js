export default {
  targets: {
    ie: 11,
  },
  theme: './src/theme.js',
  history: 'hash',
  define: {
    "process.env.USE_COMMA": 'local',
  },
  hash: true, 
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true, 
        dva: true,
        dynamicImport: false,
        disableCSSSourceMap: true,
        routes: {
          exclude: [
            /models\//,
            /components\//,
            /services\//,
            /utils\.(j)s?$/,
          ],
        },
      },
    ],
  ],
};

