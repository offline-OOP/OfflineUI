import {
  ColorSchemeManager,
  WHITE,
} from '../../utils/ColorSchemeManager';

export const MapControllerScheme: ColorSchemeManager = new ColorSchemeManager(WHITE);
MapControllerScheme.write(WHITE, 'text-black');

export default MapControllerScheme;
