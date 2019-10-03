<template>
  <button
    class="base-button"
    :class="buttonClasses"
    :style="buttonStyle"
    @click="onClick"
  >
    <div v-if="isLoading || $slots.icon" class="icon-wrapper">
      <loader v-if="isLoading" :mode="loaderMode" size="xs"/>
      <slot v-else-if="$slots.icon" name="icon"/>
    </div>
    <p class="text">
      {{ label }}
    </p>
  </button>
</template>

<script>
import { COLORS } from '@fishtripr/constants'
import Loader from '../loaders/DefaultLoader'

export default {
  name: 'base-button',
  components: { Loader },
  props: {
    label: { type: String, default: '' },
    type: {
      type: String,
      default: 'default',
      validator: value => {
        return [
          'default',
          'primary',
          'premium',
          'success',
          'danger',
          'info',
          'warning',
          'text',
        ].includes(value)
      },
    },
    size: {
      type: String,
      default: 'm',
      validator: value => ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'].includes(value),
    },
    isLoading: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    radiusless: { type: Boolean, default: false },
  },
  computed: {
    buttonStyle() {
      switch (this.type) {
        case 'default':
          return {
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }
        case 'primary':
          return {
            backgroundColor: COLORS.PRIMARY.GREEN,
            borderColor: COLORS.PRIMARY.GREEN,
            color: COLORS.BACKGROUND.WHITE
          }
        case 'premium':
          return {
            backgroundColor: COLORS.PRIMARY.PURPLE,
            borderColor: COLORS.PRIMARY.PURPLE,
            color: COLORS.BACKGROUND.WHITE
          }
        case 'success':
          return {
            backgroundColor: COLORS.STATE.SUCCESS,
            borderColor: COLORS.STATE.SUCCESS,
            color: COLORS.BACKGROUND.WHITE
          }
        case 'danger':
          return {
            backgroundColor: COLORS.STATE.DANGER,
            borderColor: COLORS.STATE.DANGER,
            color: COLORS.BACKGROUND.WHITE
          }
        case 'info':
          return {
            backgroundColor: COLORS.STATE.INFO,
            borderColor: COLORS.STATE.INFO,
            color: COLORS.BACKGROUND.WHITE
          }
        case 'warning':
          return {
            backgroundColor: COLORS.STATE.WARNING,
            borderColor: COLORS.STATE.WARNING,
            color: COLORS.BACKGROUND.WHITE
          }
        case 'text':
          return {
            backgroundColor: 'transparent',
            border: 'none',
          }
      }
    },
    buttonSizeClasses() {
      switch (this.size) {
        case 'xxs':
          return {
            'xxs': true,
            'txt-6': true,
            'px-3': true,
            'py-1': true
          }
        case 'xs':
          return {
            'xs': true,
            'txt-5': true,
            'px-5': true,
            'py-2': true
          }
        case 's':
          return {
            's': true,
            'txt-4': true,
            'px-6': true,
            'py-3': true
          }
        case 'm':
          return {
            'm': true,
            'txt-3': true,
            'px-6': true,
            'py-3': true
          }
        case 'l':
          return {
            'l': true,
            'txt-2': true,
            'px-7': true,
            'py-4': true
          }
        case 'xl':
          return {
            'xl': true,
            'txt-2': true,
            'px-8': true,
            'py-5': true
          }
        case 'xxl':
          return {
            'xxl': true,
            'txt-1': true,
            'px-10': true,
            'py-6': true
          }
      }
    },
    buttonClasses() {
      return {
        ...this.buttonSizeClasses,
        disabled: this.isDisabled,
        radiusless: this.radiusless
      }
    },
    loaderMode() {
      return this.type === 'default' || this.type === 'text'
        ? 'black'
        : 'white'
    }
  },
  methods: {
    onClick() {
      if (!this.isLoading && !this.isDisabled) {
        this.$emit('click')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/default';

.base-button {
  border-style: solid;
  border-radius: 4px;
  font-weight: $fw-l;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  background-color: transparent;

  .icon-wrapper {
    position: relative;
    height: 100%;
    min-height: 1px;
    width: 10px;

    .default-loader {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: -15px;
    }
  }

  &.xxs {
    .icon-wrapper {
      .default-loader {
        left: -8px;
        transform: scale(0.7)
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    filter: grayscale(45%);
    opacity: 0.7;
  }

  &.radiusless {
    border-radius: 0;
  }
}
</style>
