import ColorSchemeManager from '../../colors/ColorSchemeManager';
import {ACCENT, INFO }  from '../../colors/colors';


export const StepScheme: ColorSchemeManager = new ColorSchemeManager(INFO);
StepScheme.write(INFO, 'border-info text-info bg-transparent checked:border-info checked:text-info checked:bg-info');
StepScheme.write(ACCENT, 'border-accent text-accent bg-transparent checked:border-accent checked:text-accent checked:bg-accent');

export default StepScheme;
