<template/>

<script>
const active = {
  type: Boolean,
  default: false
}

const disable = {
  type: Boolean,
  default: false
}

export default {

  name: "Active",
  props: { active, disable },

  computed: {
    state: ({disable, active}) => disable? 'disable': active?  'active': 'default'
  },

  methods: {
    setActive () {
      this.$emit('update:disable', false)
      this.$emit('update:active', true)
    },
    setDefault () {
      this.$emit('update:active', false)
      this.$emit('update:disable', false)
    },
    setDisable () {
      this.$emit('update:active', false)
      this.$emit('update:disable', true)
    }
  }
}
</script>
