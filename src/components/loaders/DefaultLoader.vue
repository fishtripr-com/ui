<template>
  <div class="default-loader">
    <div class="spinner" :class="size">
      <div :class="mode" v-for="i in 12" :key="i" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'default-loader',
  props: {
    mode: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'premium', 'white', 'black'].includes(value),
    },
    size: {
      type: String,
      default: 'm',
      validator: value => ['xs', 's', 'm', 'l', 'xl'].includes(value),
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/default';
@keyframes spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.default-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    &.xs {
      transform: scale(0.25);
    }
    &.s {
      transform: scale(0.5);
    }
    &.m {
      transform: scale(0.75);
    }
    &.l {
      transform: scale(1);
    }
    &.xl {
      transform: scale(1.25);
    }

    div {
      transform-origin: 32px 32px;
      animation: spinner 1.2s linear infinite;

      &:after {
        content: ' ';
        display: block;
        position: absolute;
        top: 3px;
        left: 29px;
        width: 3px;
        height: 14px;
        border-radius: 50%;
      }

      &.primary:after {
        background: map-get($colors, 'primary');
      }
      &.premium:after {
        background: map-get($colors, 'premium');
      }
      &.white:after {
        background: map-get($colors, 'text-white');
      }
      &.black:after {
        background: map-get($colors, 'text');
      }

      &:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
      }
      &:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
      }
      &:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
      }
      &:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
      }
      &:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
      }
      &:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
      }
      &:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
      }
      &:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
      }
      &:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
      }
      &:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
      }
      &:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
      }
      &:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
      }
    }
  }
}
</style>
