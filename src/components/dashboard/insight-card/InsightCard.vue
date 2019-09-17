<template>
  <div class="insight-card">
    <div class="main-data">
      <span class="summary-value txt-2 bold">{{ mainData }}</span>
      <span v-if="withStar" class="star txt-2">&#9733;</span>
    </div>
    <div class="main-description">
      <p class="text txt-5">{{ mainDescription }}</p>
    </div>
    <div
      v-if="additionnalDescription"
      class="additionnal-description"
      >
      <p class="subtext txt-5 semibold">{{ additionnalDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'insight-card',
  props: {
    mainData: { type: String, required: true },
    mainDescription: { type: String, required: true },
    additionnalDescription: { type: String },
    withStar: { type: Boolean, default: false }
  },
  methods: {
    // subtextModifier(){
    //   return `${this.subtext} ${this.averageValue ? ` - ${this.averageValue}` : ""}`
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/default";

.insight-card {
  // display: flex;
  // flex-flow: column wrap;
  // font-family: $font-family;
  // color: $color-text;
  // font-size: $font-size-xs;
  // font-weight: $normal;
  // width: 50%;

  .main-data {
    // display: flex;
    // flex-flow: row nowrap;
    // align-items: flex-start;
    // font-weight: $bold;
    // font-size: $font-size-xl;

    .star {
      // margin-left: $space-xxxs;
      // font-size: $font-size-s;
    }
  }

}
</style>

