import { defineConfig } from 'umi';
import routes from './routes'
import theme from './theme'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  theme,
  mock:{},
});
