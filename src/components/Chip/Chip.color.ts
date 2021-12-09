import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {ACCENT, GRAY}  from '../../colors/colors';

export const ChipScheme: ColorSchemeManager = new ColorSchemeManager(ACCENT);
ChipScheme.write(ACCENT, 'bg-accent text-white', 'wrapper');
ChipScheme.write(ACCENT, 'bg-white text-accent', 'icon');
ChipScheme.write(GRAY, 'bg-gray text-white', 'wrapper');
ChipScheme.write(GRAY, 'bg-white text-gray', 'icon');

export default ChipScheme;
