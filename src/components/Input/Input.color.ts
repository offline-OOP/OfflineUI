import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {WHITE}  from '../../colors/colors';

export const InputScheme: ColorSchemeManager = new ColorSchemeManager(WHITE);
InputScheme.write(WHITE, 'bg-white', 'div');
InputScheme.write(WHITE, 'text-black', 'icon');
InputScheme.write(WHITE, 'text-black', 'input');

export default InputScheme;
