<template>
  <div class="dashboard-summary">
    <div class="container">
      <span class="summary-value">{{ summaryValue }}</span>
      <div v-if="star" class="star">&#9733;</div>
    </div>
    <p class="text">{{ text }}</p>
    <p class="subtext">{{ subtextModifier() }}</p>
  </div>
</template>

<script>
export default {
  name: "dashboard-summary",
  props: {
    summaryValue: { type: String, default: '' },
    star: { type: Boolean, default: false },
    averageValue: { type: String, default: '' },
    text: { type: String, default: '' },
    subtext: { type: String, default: '' }
  },
  methods: {
    subtextModifier(){
      return `${this.subtext} ${this.averageValue ? ` - ${this.averageValue}` : ""}`
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/index";

.dashboard-summary {
  display: flex;
  flex-flow: column wrap;
  font-family: $font-family;
  color: $color-text;
  font-size: $font-size-xs;
  font-weight: $normal;
  width: 50%;

  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    font-weight: $bold;
    font-size: $font-size-xl;

    .star {
      margin-left: $space-xxxs;
      font-size: $font-size-s;
    }
  }

  .text {
    margin-top: $space-xxs;
  }

  .subtext {
    font-weight: $semibold;
    display: flex;
    flex-flow: row;
    margin-top: $space-xxxs;
    line-height: $line-height-xxs;
  }
}
</style>

