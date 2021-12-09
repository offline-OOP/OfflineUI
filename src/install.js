/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */
function install(api) {
  api.render('./quasar/Templates');

  api.onExitLog('Thanks for installing offline-ui.');
}

module.exports = install;
