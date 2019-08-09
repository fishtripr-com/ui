<template>
  <div :class="['navbar', theme]">

    <div class="wrapper">

      <div 
        :class="['logo', theme]"
        @click="logoClicked" 
        >
        <img class="image" :src="logoUrl" alt="logo" />
      </div>

      <div :class="['body', theme]">

        <slot name="body"/>

      </div>

      <div class="actions">

        <slot name="actions"/>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    theme: {
      type: String,
      default: 'light',
      validator: value => ['dark', 'premium', 'light'].includes(value)
    },
    logoUrl: { type: String },
    mobile: { type: Boolean, default: false }
  },
 
  methods: {
    logoClicked() {
      this.$emit('click')
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/style/main";

.navbar {
  width: 100%;
  height: $height-navbar;

  &.light {
    background-color: $color-background-light;
    color: $color-text;
  }
  &.dark {
    background-color: $color-background-dark;
    color: $white;
  }
  &.premium {
    background-color: $color-background-premium;
    color: $white;
  }

  .wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;

    .logo {
      width: 100px;
      height: 50px;
      max-height: 50px;
      overflow: hidden;
      margin-right: 20px;

      .image {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 100%;
        min-height: 100%;
        max-height: 100%;
        object-fit: contain;
        opacity: 0.5;
      }
    }

    .body {
      flex-grow: 1;
    }
    .actions {
      margin-left: 20px;
    }

  }
}
</style>