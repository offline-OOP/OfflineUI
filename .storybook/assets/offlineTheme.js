import { create } from '@storybook/theming';
import logo from './offline-logo.png';

export default create({
    base: 'light',

    colorPrimary: '#FF6038',
    colorSecondary: '#FFB677',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: '#C4C4C4',
    appBorderRadius: 8,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#333333',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#C4C4C4',
    barSelectedColor: '#FF6038',
    barBg: 'white',

    // Form colors
    inputBg: 'white',
    inputBorder: '#C4C4C4',
    inputTextColor: '#333333',
    inputBorderRadius: 20,

    brandTitle: 'OFFLINE.Storybook',
    brandUrl: 'https://site.artoffline.ru',
    brandImage: logo
});
