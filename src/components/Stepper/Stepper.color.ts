import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {ACCENT, INFO }  from '../../colors/colors';

export const StepperScheme: ColorSchemeManager = new ColorSchemeManager(INFO);
StepperScheme.write(INFO, 'border-info');
StepperScheme.write(ACCENT, 'border-accent');

export default StepperScheme;
