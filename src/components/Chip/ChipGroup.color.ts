import {
  ColorSchemeManager,
  GRAY,
} from '../../utils/ColorSchemeManager';

export const ChipGroupScheme: ColorSchemeManager = new ColorSchemeManager(GRAY);
ChipGroupScheme.write(GRAY, 'text-gray');

export default ChipGroupScheme;
