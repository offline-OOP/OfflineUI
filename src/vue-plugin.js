import { version } from '../package.json';
import Btn from './components/Btn/Btn.js';
import FloatBtn from "./components/FloatBtn/FloatBtn.vue";

function install (app) {
  app.component(Btn.name, Btn)
  app.component(FloatBtn.name, FloatBtn)
}

export {
  version,
  Btn,
  FloatBtn,
  install
}
