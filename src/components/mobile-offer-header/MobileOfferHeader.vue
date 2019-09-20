<template>
  <header class="mobile-offer-header">
    <p class="txt-5 semibold danger">
      {{ text.toUpperCase() }}
    </p>
    <p class="title-5 bold">
      {{ name }}
    </p>
  </header>
</template>

<script>
export default {
  name: 'mobile-offer-header',
  props: {
    text: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  computed: {
    name() {
      return `${this.firstNameFormatted(
        this.firstName,
      )} ${this.lastNameFormatted(this.lastName)}`
    },
  },
  methods: {
    firstNameFormatted(value) {
      return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
    },
    lastNameFormatted(value) {
      return `${value.charAt(0).toUpperCase()}.`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/default';
</style>
