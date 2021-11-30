import {
  ColorSchemeManager,
  ACCENT,
} from '../../utils/ColorSchemeManager';

export const PageScheme: ColorSchemeManager = new ColorSchemeManager(ACCENT);
PageScheme.write(ACCENT, 'text-accent');

export default PageScheme;
