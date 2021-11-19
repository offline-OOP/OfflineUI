import {
    ColorSchemeManager,
    ACCENT, SUCCESS, INFO, GRAY
} from "../../utils/ColorSchemeManager";


export const MapMarkerScheme = new ColorSchemeManager(INFO)
MapMarkerScheme.write(ACCENT, 'bg-accent', 'marker')
MapMarkerScheme.write(SUCCESS, 'bg-success', 'marker')
MapMarkerScheme.write(INFO, 'bg-info', 'marker')
MapMarkerScheme.write(GRAY, 'bg-gray', 'marker')
MapMarkerScheme.write(ACCENT, 'text-accent', 'icon')
MapMarkerScheme.write(SUCCESS, 'text-success', 'icon')
MapMarkerScheme.write(INFO, 'text-info', 'icon')
MapMarkerScheme.write(GRAY, 'text-gray', 'icon')
