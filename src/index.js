const purgecss = require('@fullhuman/postcss-purgecss');
const { plugins } = require('../postcss.config');

/** *
 * Extends quasar app by adding tailwind rules
 *
 * @param api
 * @see https://quasar.dev/app-extensions/development-guide/index-api#api-chainwebpack
 */
function setTailwind(api) {
  const purgecssPlugin = purgecss({
    content: [
      api.resolve.src('**/*.html'),
      api.resolve.src('**/*.vue'),
      api.resolve.src('**/*.color.js'),
    ],

    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  });

  const chainWebpack = (cfg, mode, { ctx }) => {
    if (ctx.prod) {
      plugins.push(purgecssPlugin);
    }

    cfg.module
      .rule('tailwind')
      .test(/\.css$/)
      .include
      .add(require.resolve('./style.css'))
      .end()
      .use('postcss')
      .loader('postcss-loader')
      .options({
        ident: 'postcss',
        plugins,
      });
  };
  const extendConf = (cfg) => {
    cfg.css.push('~quasar-app-extension-offline-ui/src/style.css');
  };

  api.chainWebpack(chainWebpack);
  api.extendQuasarConf(extendConf);
}

/***
 * Adds vuex module to work with map
 *
 * @param api
 */
function setMapModule(api) {
  const extendConf = (cfg) => {
    cfg.boot.push('~quasar-app-extension-offline-ui/src/quasar/boot/index.js')
  }

  api.extendQuasarConf(extendConf)
}

/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * @see https://quasar.dev/app-extensions/development-guide/index-api Docs
 * @see https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js API
 */
function index(api) {
  api.compatibleWith('quasar', '^1.0.0 || ^2.0.0 || ^2.0.0-beta');
  api.compatibleWith('@quasar/app', '^1.0.0 || ^2.0.0 || ^3.0.0-beta');

  setTailwind(api);
  setMapModule(api);
}

module.exports = index;
