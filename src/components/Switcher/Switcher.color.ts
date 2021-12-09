import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {ACCENT }  from '../../colors/colors';


export const SwitcherScheme: ColorSchemeManager = new ColorSchemeManager(ACCENT);
SwitcherScheme.write(ACCENT, 'text-accent', 'active');
SwitcherScheme.write(ACCENT, 'text-secondary', 'not-active');

export default SwitcherScheme;
