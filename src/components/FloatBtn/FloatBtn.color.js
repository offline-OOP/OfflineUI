import {
    ColorSchemeManager,
    WHITE
} from "../../utils/ColorSchemeManager";


export const FloatBtnScheme = new ColorSchemeManager(WHITE)
FloatBtnScheme.write(WHITE, 'bg-white text-black', 'default')
FloatBtnScheme.write(WHITE, 'bg-accent text-white', 'active')

