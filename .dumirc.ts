import { defineConfig } from 'dumi';
import path from 'path';

const repo = 'advanced-charts'

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'advanced-charts',
    logo: process.env.NODE_ENV === 'production' ? `/${repo}/logo.png` : '/logo.png'
  },
  externals: {
    openinula: 'React',
  },
  headScripts: ['https://unpkg.com/react@18.2.0/umd/react.production.min.js', 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js'],
  mfsu: false,
  // runtimePublicPath: {},
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  alias: {
    'advanced-charts': path.join(__dirname, 'advanced-charts'),
  },
  resolve: {
    atomDirs: [{ type: 'component', dir: 'advanced-charts' }],
  },
});
