import {
  ColorSchemeManager,
  ACCENT,
} from '../../utils/ColorSchemeManager';

export const SwitcherScheme: ColorSchemeManager = new ColorSchemeManager(ACCENT);
SwitcherScheme.write(ACCENT, 'text-accent', 'active');
SwitcherScheme.write(ACCENT, 'text-secondary', 'not-active');

export default SwitcherScheme;
