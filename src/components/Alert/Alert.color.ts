import {
  ColorSchemeManager,
  WARNING, INFO, DANGER,
} from '../../utils/ColorSchemeManager';

export const AlertScheme: ColorSchemeManager = new ColorSchemeManager(INFO);
AlertScheme.write(INFO, 'text-white bg-info');
AlertScheme.write(WARNING, 'text-white bg-warning');
AlertScheme.write(DANGER, 'text-white bg-danger');

export default AlertScheme;
