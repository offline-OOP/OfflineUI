import {
    ColorSchemeManager,
    ACCENT,
    GRAY
} from "../../utils/ColorSchemeManager";


export const ChipScheme = new ColorSchemeManager(ACCENT)
ChipScheme.write(ACCENT, 'bg-accent text-white', 'wrapper')
ChipScheme.write(ACCENT, 'bg-white text-accent', 'icon')
ChipScheme.write(GRAY, 'bg-gray text-white', 'wrapper')
ChipScheme.write(GRAY, 'bg-white text-gray', 'icon')
