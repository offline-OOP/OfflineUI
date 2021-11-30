import {
  ColorSchemeManager,
  ACCENT,
} from '../../utils/ColorSchemeManager';

export const AvatarScheme: ColorSchemeManager = new ColorSchemeManager(ACCENT);
AvatarScheme.write(ACCENT, 'text-accent');

export default AvatarScheme;
