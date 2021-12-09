import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {ACCENT}  from '../../colors/colors';

export const PageScheme: ColorSchemeManager = new ColorSchemeManager(ACCENT);
PageScheme.write(ACCENT, 'text-accent');

export default PageScheme;
