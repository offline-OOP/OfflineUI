<script>
import oneOfArray from "../utils/validators/oneOfArray";
import colors from "./colors";

export default {
  name: 'ColorScheme',

  props: {
    color: {
      type: String,
      validator: oneOfArray(colors)
    }
  },

  watch: {
    color: 'initScheme'
  },

  computed: {
    getScheme: ({color, scheme}) => (elem) => elem && color? scheme.read(elem): scheme.read()
  },

  methods: {
    initScheme() {
      if (this.color)
        this.scheme.setColor(this.color);
    },
  },

  created() {
    this.initScheme()
  }
};
</script>
