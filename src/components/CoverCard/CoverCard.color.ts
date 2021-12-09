import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {ACCENT} from '../../colors/colors';

export const CoverCardScheme: ColorSchemeManager = new ColorSchemeManager(ACCENT)
CoverCardScheme.write(ACCENT, 'text-accent')

export default CoverCardScheme
