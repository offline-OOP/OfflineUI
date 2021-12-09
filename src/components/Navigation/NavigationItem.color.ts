import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {WHITE}  from '../../colors/colors';

export const NavigationItemScheme: ColorSchemeManager = new ColorSchemeManager(WHITE);
NavigationItemScheme.write(WHITE, 'text-black', 'icon');
NavigationItemScheme.write(WHITE, 'text-black', 'text');

export default NavigationItemScheme;
