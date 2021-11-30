import { ACCENT, ColorSchemeManager, INFO } from '../../utils/ColorSchemeManager';

export const StepperScheme: ColorSchemeManager = new ColorSchemeManager(INFO);
StepperScheme.write(INFO, 'border-info');
StepperScheme.write(ACCENT, 'border-accent');

export default StepperScheme;
