import {
    ColorSchemeManager,
    SUCCESS, WARNING, DANGER
} from "../../utils/ColorSchemeManager";


export const StatusScheme = new ColorSchemeManager(SUCCESS)
StatusScheme.write(SUCCESS, 'text-success')
StatusScheme.write(WARNING, 'text-warning')
StatusScheme.write(DANGER, 'text-danger')
StatusScheme.write(SUCCESS, 'bg-success', 'point')
StatusScheme.write(WARNING, 'bg-warning', 'point')
StatusScheme.write(DANGER, 'bg-danger', 'point')
