import {
    ColorSchemeManager,
    WHITE
} from "../../utils/ColorSchemeManager";


export const InputScheme = new ColorSchemeManager(WHITE)
InputScheme.write(WHITE, 'bg-white', 'div')
InputScheme.write(WHITE, 'text-black', 'icon')
InputScheme.write(WHITE, 'text-black', 'input')


