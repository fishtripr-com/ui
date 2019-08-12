<template>
  <div :class="['navbar', theme]">
    <div :class="['wrapper', theme]">
      <div :class="['logo', theme, deviceSize < deviceSizes.l ? 'mobile': '']" @click="logoClicked">
        <img class="image" :src="logoUrl" alt="logo" />
      </div>

      <div :class="['body', theme, deviceSize < deviceSizes.l ? 'mobile': '']">
        <slot name="body" :theme="theme" />
      </div>

      <div :class="['actions', theme]">
        <slot name="actions" :theme="theme" />
      </div>

    </div>

  </div>
</template>

<script>
import { responsiveHandler } from "../../mixins/responsiveHandler";

export default {
  name: "navbar",
  mixins: [responsiveHandler],
  props: {
    theme: {
      type: String,
      default: 'light',
      validator: value => ['dark', 'premium', 'light'].includes(value)
    },
    logoUrl: { type: String }
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
      }
    }

    .body {
      flex-grow: 1;

      &.light {
        border-left: 1px solid $steel;
      }
      &.dark {
        border-left: 1px solid $steel;
      }
      &.premium {
        border-left: 1px solid #958ce4;
      }

      &.mobile {
        // order: 3;
        position: absolute;

        top: $height-navbar + 8px;
        left: 0;
        width: 100%;
        height: 100%;
        border-left: 0;

        &.light {
          border-top: 1px solid $steel;
        }
        &.dark {
          border-top: 1px solid $steel;
        }
        &.premium {
          border-top: 1px solid #958ce4;
        }
      }
    }
    .actions {
      margin-left: 20px;
    }

  }
}
</style>