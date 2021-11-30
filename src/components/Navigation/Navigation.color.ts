import {
  ColorSchemeManager,
  WHITE,
} from '../../utils/ColorSchemeManager';

export const NavigationScheme: ColorSchemeManager = new ColorSchemeManager(WHITE);
NavigationScheme.write(WHITE, 'bg-white');

export default NavigationScheme;
