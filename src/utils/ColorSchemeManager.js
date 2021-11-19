export const ACCENT = 'accent'
export const WHITE = 'white'
export const INFO = 'info'
export const WARNING = 'warning'
export const DANGER = 'danger'
export const GRAY = 'gray'
export const SUCCESS = 'success'

const DEFAULT_ELEM = 'default'

export class ColorSchemeManager {

    constructor (defaultColor = null) {
        this._scheme = {}
        this._color = null
        this.setColor(defaultColor)
    }

    setColor (color) {
        this._color = color
    }
    write (color, tws, el = DEFAULT_ELEM) {
        if (this._scheme.hasOwnProperty(color))
            this._scheme[color][el] = tws
        else
            this._scheme[color] = {[el]: tws}
    }
    read (el = DEFAULT_ELEM) {
        if (this._color) {
            return this._scheme[this._color][el]
        } else {
            throw new Error('color not set')
        }
    }

    get colors () {
        return Object.keys(this._scheme)
    }

    get validator () {
        const colors = this.colors
        return (value) => colors.indexOf(value) !== -1
    }

    get prop () {

        const validator = this.validator

        return {
            type: String,
            validator: validator
        }
    }
}

export default ColorSchemeManager
