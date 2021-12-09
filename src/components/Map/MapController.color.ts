import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {WHITE}  from '../../colors/colors';

export const MapControllerScheme: ColorSchemeManager = new ColorSchemeManager(WHITE);
MapControllerScheme.write(WHITE, 'text-black');

export default MapControllerScheme;
