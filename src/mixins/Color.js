export default {

  name: "Color",

  data: () => ({
    _scheme: null
  }),

  methods: {
    getScheme (elem = null) {
      return elem? this._scheme.read(elem): this._scheme.read()
    },

    initScheme (scheme) {
      scheme.setColor(this.color)
      this._scheme = scheme
    }
  }
}
