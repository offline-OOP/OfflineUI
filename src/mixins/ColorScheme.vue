<script>
const scheme = null;

export default {
  name: 'ColorScheme',

  data: () => ({
    scheme,
  }),

  methods: {
    getScheme(elem = null) {
      return elem ? this.scheme.read(elem) : this.scheme.read();
    },

    initScheme(defaultScheme) {
      if (this.color) defaultScheme.setColor(this.color);

      this.scheme = defaultScheme;
    },
  },
};
</script>
