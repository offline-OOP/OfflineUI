import {
    ColorSchemeManager,
    ACCENT
} from "../../utils/ColorSchemeManager";

export const SwitcherScheme = new ColorSchemeManager(ACCENT)
SwitcherScheme.write(ACCENT, 'text-accent', 'active')
SwitcherScheme.write(ACCENT, 'text-secondary', 'not-active')

