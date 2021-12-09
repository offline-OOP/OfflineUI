import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {WARNING, SUCCESS, DANGER}  from '../../colors/colors';

export const StatusScheme : ColorSchemeManager = new ColorSchemeManager(SUCCESS);
StatusScheme.write(SUCCESS, 'text-success');
StatusScheme.write(WARNING, 'text-warning');
StatusScheme.write(DANGER, 'text-danger');
StatusScheme.write(SUCCESS, 'bg-success', 'point');
StatusScheme.write(WARNING, 'bg-warning', 'point');
StatusScheme.write(DANGER, 'bg-danger', 'point');

export default StatusScheme;
