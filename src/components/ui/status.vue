<template>
  <div class="status">
    <template v-for="(label, index) in data">
      <div
        class="step"
        :class="{
          active: isStepActive(index + 1),
          premium: premium,
        }"
        :key="`div-icon-${index}`"
      >
        <div class="image-container">
          <img :src="checkIcon" alt="icon" class="image" />
        </div>
        <p
          class="text txt-5 ml-2 semibold"
          :class="isStepActive(index + 1) ? 'normal' : 'light'"
        >
          {{ label }}
        </p>
      </div>

      <div
        v-if="index + 1 != data.length"
        class="separator"
        :class="{
          active: isStepActive(index + 1),
          premium: premium,
        }"
        :key="`div-separator-${index}`"
      >
        &nbsp;
      </div>
    </template>
  </div>
</template>

<script>
import { COLORS, IMG } from '@fishtripr/constants'

export default {
  name: 'status',
  props: {
    data: { type: Array, required: true },
    actualStatus: { type: Number, default: 0 },
    premium: { type: Boolean, default: false },
  },
  computed: {
    checkIcon() {
      return IMG.ICON.CHECKED_LIGHT
    },
  },
  methods: {
    isStepActive(stepIndex) {
      return this.actualStatus >= stepIndex
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/default';

.status {
  display: flex;
  flex-direction: column;

  .step {
    display: flex;
    align-items: center;

    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border-radius: 100%;
      background-color: map-get($colors, 'text-lighter');

      .image {
        width: 12px;
        height: 12px;
        object-fit: contain;
      }
    }

    &.active {
      .image-container {
        background-color: map-get($colors, 'primary');
      }

      &.premium {
        .image-container {
          background-color: map-get($colors, 'premium');
        }
      }
    }
  }
  .separator {
    margin: 0;
    margin-left: 10px;
    border-left: 2px solid map-get($colors, 'text-lighter');

    &.active {
      border-left: 2px solid map-get($colors, 'primary');
      &.premium {
        border-left: 2px solid map-get($colors, 'premium');
      }
    }
  }
}
</style>
