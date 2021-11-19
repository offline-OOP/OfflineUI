import {ACCENT, ColorSchemeManager, INFO} from "../../utils/ColorSchemeManager";

export const StepScheme = new ColorSchemeManager(INFO)
StepScheme.write(INFO, 'border-info text-info bg-transparent checked:border-info checked:text-info checked:bg-info')
StepScheme.write(ACCENT, 'border-accent text-accent bg-transparent checked:border-accent checked:text-accent checked:bg-accent')
