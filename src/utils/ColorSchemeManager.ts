export const ACCENT = 'accent';
export const WHITE = 'white';
export const INFO = 'info';
export const WARNING = 'warning';
export const DANGER = 'danger';
export const GRAY = 'gray';
export const SUCCESS = 'success';

const DEFAULT_ELEM = 'default';

interface SchemeItem {
  [index: string]: string
}

interface Scheme {
  [index: string]: SchemeItem
}

export class ColorSchemeManager {
  private readonly scheme: Scheme;

  private color: string | null;

  constructor(defaultColor: string | null = null) {
    this.scheme = {};
    this.color = null;

    if (defaultColor)
      this.setColor(defaultColor);
  }

  setColor(color: string) {
    this.color = color;
  }

  write(color: string, tws: string, el: string = DEFAULT_ELEM) {
    if (!this.scheme.hasOwnProperty(color))
      this.scheme[color] = {};

    this.scheme[color][el] = tws;
  }

  read(el: string = DEFAULT_ELEM) : string {
    if (this.color) return this.scheme[this.color][el];

    throw new Error('color not set');
  }

  get colors() : Array<string> {
    return Object.keys(this.scheme);
  }

  get validator() : Function {
    const { colors } = this;
    return (value: string) => colors.indexOf(value) !== -1;
  }

  get prop() : { type: object, validator: Function } {
    const { validator } = this;

    return {
      type: String,
      validator,
    };
  }
}

export default ColorSchemeManager;
