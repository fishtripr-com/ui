<template>
  <div 
    :class='[
      "base-button", 
      size, 
      type, 
      { "disabled": disabled, "white": white }
    ]'  
    @click='onClick'
    >

    <span class='base-button_text'>

      <!-- <clip-loader class='base-button_loader'
                   :loading='loading'
                   :color='colorLoader'
                   size='15px'/> -->
      <div 
        v-if="loading"
        class="lds-ring"
        >
        <div></div><div></div><div></div><div></div>
      </div>

      <!-- <fly-icon v-if='(icon !== "none") && !loading'
                :icon='icon'
                :color='type === "plain" ? "#353745" : "#fff"'
                :width='15'
                :height='15'
                :class='label || $slots.default ? "base-button_loader" : "base-button_loader-alone"'/> -->

      <template v-if='label && !$slots.default'>
        {{ label }}
      </template>

      <slot v-if='!label && $slots.default'/>

    </span>

  </div>
</template>

<script>
  // import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

  export default {
    name: 'base-button',
    props: {
      label: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'primary',
        validator: value => {
          return ['text', 'plain', 'primary', 'success', 'danger', 'info', 'warning', 'premium'].includes(value)
        }
      },
      size: {
        type: String,
        default: 'custom',
        validator: value => {
          return ['s', 'm', 'custom'].includes(value)
        }
      },
      white: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        validator: value => {
          return [
            'none',
            'discover',
            'plan',
            'book',
            'mapPointer',
            'mapPointerIn',
            'user',
            'time',
            'phone',
            'quote',
            'facebook',
            'twitter',
            'instagram',
            'pinterest',
            'people',
            'chat',
            'hook',
            'fin',
            'dumbbell',
            'cross',
            'check',
            'arrowRight',
            'triangleBottom',
            'correct',
            'error',
            'padlock',
            'burgerNav'
          ].includes(value) && false
        }
      }
    },
    computed: {
      colorLoader() {
        if (this.type === 'text') {
          return '#56D2AB'
        } else if (this.type === 'plain') {
          return '#353745'
        } else {
          return 'white'
        }
      }
    },
    methods: {
      onClick() {
        if (!this.loading && !this.disabled) {
          this.$emit('click')
        }
      }
    },
    // components: {
    //   ClipLoader
    // }
  }
</script>

<style lang='scss' scoped>
@import '../../assets/style/index';

/* css loader */
.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 21px;
  height: 21px;
  margin: 2px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


@mixin type($bgc, $textColor: $white) {
  background-color: $bgc;
  color: $textColor;
  border-style: solid;
  border-width: 1px;
  border-color: $bgc;

  &:not(.disabled):hover {
    background-color: lighten( $bgc, 4% );
  }
}

.base-button {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  flex: 1;
  z-index: 10;
  border-radius: 3px;

  &.disabled {
    cursor: not-allowed;
    filter: grayscale(45%);
    opacity: 0.7;
  }

  // SIZE
  &.s {
    height: auto;
    width: initial;
    padding: 12px 22px;
      .base-button_text {
      font-size: $font-size-s;
    }
  }
  &.m {
    height: auto;
    width: initial;
    padding: 15px 25px;
      .base-button_text {
      font-size: $font-size-m;
    }
  }
  &.custom {
    padding: 0 25px;
    height: 75px;
  }

  // TYPE
  &.primary {
    @include type($color-background-primary);
  }
  &.plain {
    @include type($color-background-plain, $color-text);
    border-color: $color-text;

    &.white {
      color: $white;
      border-color: $white;
    }
  }
  &.success {
    @include type($color-background-success);
  }
  &.danger {
    @include type($color-background-danger);
  }
  &.info {
    @include type($color-background-info);
  }
  &.warning {
    @include type($color-background-warning);
  }
  &.premium {
    @include type($color-background-premium);
  }

  .base-button_text {
    display: flex;
    align-items: center;
    font-weight: 700;
    white-space: nowrap;
    font-family: $font-family;

    .base-button_loader {
      display: flex;
      margin: -2px 10px 0 -5px;
      max-height: 15px;
    }
    .base-button_loader-alone {
      display: flex;
      max-height: 15px;
    }
  }
}
</style>
