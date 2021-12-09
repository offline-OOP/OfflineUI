import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {WHITE}  from '../../colors/colors';

export const FloatBtnScheme: ColorSchemeManager = new ColorSchemeManager(WHITE);
FloatBtnScheme.write(WHITE, 'bg-white text-black', 'default');
FloatBtnScheme.write(WHITE, 'bg-accent text-white', 'active');

export default FloatBtnScheme;
