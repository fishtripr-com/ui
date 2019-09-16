<template>
  <header class="mobile-dashboard-header">
    <p>{{ this.formatNumber() }}</p>
    <span>{{ text }}</span>
  </header>
</template>

<script>
export default {
  name: "mobile-dashboard-header",
  props: {
    text: { type: String, default: "" },
    revenue: { type: Number, default: "0" },
    currency: { type: String, default: "EUR" }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/main";

.mobile-dashboard-header {
  display: flex;
  flex-flow: column;
  font-family: $font-family;
  font-size: $font-size-xs;
  font-weight: $semibold;
  color: $watermelon;

  .wrapper {
    display: flex;
    flex-direction: row;
    font-size: $font-size-xl;
    font-weight: $bold;
    color: $charcoal-grey;
    margin-top: $space-xxs;
  }

  p {
    margin: 0;
  }
}
</style>
