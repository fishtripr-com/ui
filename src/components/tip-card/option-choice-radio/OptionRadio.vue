<template>
  <div class="option-radio" @click="onClick">
    <div :class="['wrapper',{'checked': checked}]">
      <div :class="['radio-container',{'checked': checked}]"></div>
      <div class="body-container">
        <div class="body">
          <p class="title">{{ title1 }}</p>
          <p v-if="text1" class="text">{{ text1 }}</p>
        </div>
        <div class="body">
          <p class="title">{{ title2 }}</p>
          <p v-if="text2" class="text">{{ text2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "option-radio",
  props: {
    checked: { type: Boolean, default: false },
    title1: { type: String, default: "" },
    text1: { type: String },
    title2: { type: String, default: "" },
    text2: { type: String }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/index";

.option-radio {
  display: flex;
  max-width: 700px;
  min-width: 335px;
  box-sizing: border-box;
  border: $border-card solid transparent;

  .wrapper {
    display: flex;
    min-height: 60px;
    flex-direction: row;
    width: 100%;
    padding: $space-m;
    border: 1px solid $color-border;
    border-radius: 5px;

    &.checked {
      border: 1px solid $seafoam-blue;
      color: $seafoam-blue;
    }

    .radio-container {
      width: 35px;
      height: 35px;
      border: 2px solid $color-border;
      border-radius: 50%;

      &.checked {
        border: 12px solid $seafoam-blue;

        &:hover {
          border: 12px solid $seafoam-blue;
        }
      }
    }
    .radio-container:hover {
      border: 2px solid $seafoam-blue;
    }

    .body-container {
      display: flex;
      flex-direction: row;
      padding-left: $space-s;
      width: 100%;
      justify-content: space-between;
    }
    .body {
      display: flex;
      justify-content: center;
      padding-left: $space-s;
      flex-direction: column;

      .title {
        font-size: $font-size-m;
        font-weight: $semibold;
      }
      .text {
        font-size: $font-size-xs;
        font-weight: $normal;
        padding-top: $space-xs;
      }
    }
  }
}
</style>