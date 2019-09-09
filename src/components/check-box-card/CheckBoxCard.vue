<template>
  <div
    class="check-box-card"
    :class="{ 'disabled': disabled }"
    @click="onClick"
    >
    <div
      :class="[
        'wrapper',
        { 'checked': checked }
      ]"
      >

      <div class="radio">
        <div class="bullet" v-if="checked"/>
      </div>

      <div class="body">

        <div class="row">
          <p class="title">{{ title }}</p>
          <p v-if="subtitle" class="text">{{ subtitle }}</p>
        </div>

        <div class="row">
          <p class="title">{{ text }}</p>
          <p v-if="subtext" class="text">{{ subtext }}</p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'check-box-card',
  props: {
    checked: { type: Boolean, default: false },
    title: { type: String },
    text: { type: String },
    subtitle: { type: String },
    subtext: { type: String },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    onClick() {
      !this.disabled && this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/index";

.check-box-card {
  display: flex;
  max-width: 100%;
  min-width: 320px;
  box-sizing: border-box;
  border: $border-card solid transparent;
  cursor: pointer;

  &.disabled { opacity: 0.4 }

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
    }

    .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border: 2px solid $color-border;
      border-radius: 50%;

      .bullet {
        background-color: $seafoam-blue;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .body {
      display: flex;
      flex-direction: row;
      padding-left: $space-s;
      width: 100%;
      justify-content: space-between;

      .row {
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
}
</style>
