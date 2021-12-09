import ColorSchemeManager from '../../colors/ColorSchemeManager';
import { ACCENT, WHITE } from '../../colors/colors';

export const BtnScheme: ColorSchemeManager = new ColorSchemeManager(ACCENT);
BtnScheme.write(ACCENT, 'border-accent bg-accent text-white', 'default');
BtnScheme.write(WHITE, 'border-white bg-white text-black', 'default');
BtnScheme.write(ACCENT, 'border-accent bg-transparent text-accent', 'outlined');
BtnScheme.write(WHITE, 'border-white bg-transparent text-white', 'outlined');

export default BtnScheme;
