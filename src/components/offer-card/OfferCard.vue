<template functionnal>
  <div
    class="offer-card"
    @click="onClick"
    >

    <template v-if="!isLoading">
      <div class="img">
        <img :src="image"/>
      </div>

      <div class="body">
        <p class="title">
          {{ truncate(title) }}
        </p>

        <p class="hat">
          {{ hat }}
        </p>

        <p class="status" :class="mode">
          {{ status }}
        </p>

      </div>

      <div class="arrow">
        <img
          class="image"
          :src="arrowIcon"
          />
      </div>
    </template>

    <p v-else>Loading...</p>

  </div>
</template>

<script>
import { IMG } from '@fishtripr/constants'
import { responsiveHandler } from '../../mixins/responsiveHandler'

export default {
  name: 'offer-card',
  mixins: [ responsiveHandler ],
  props: {
    isLoading: { type: Boolean },
    image: { type: String },
    title: { type: String },
    hat: { type: String },
    status: { type: String },
    mode: { type: String },
  },
  computed: {
    arrowIcon() {
      return IMG.ICON.ARROW_RIGHT
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
    truncate(title) {
      const charLimit = this.deviceSize === this.deviceSizes.s ? 20 : 50
      if (title.length > charLimit) {
        return title.slice(0, charLimit - 3).trim() + "...";
      }
      return title;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/index";

.offer-card {
  display: flex;
  align-items: center;
  border: 1px solid #E4E5EC;
  width: 100%;
  cursor: pointer;
  background-color: white;
  height: 70px;
  flex-direction: row;

  .img {
    width: 100px;
    height: 70px;
    padding: 0.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .body {
    flex: 1;
    height: 100%;
    font-family: 'Montserrat', sans-serif !important;
    max-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
      font-weight: $bold;
      margin: 0;
      font-size: $font-size-xs;
      line-height: $line-height-xs;
    }
    .hat {
      font-size: $font-size-xs;
      line-height: $line-height-xs;
      margin: 0;
      color: #898EA2;
    }
    .status {
      font-size: $font-size-xs;
      font-weight: $semibold;
      line-height: $line-height-xs;
      margin: 0;

      &.success {
        color: #30DEA0
      }
      &.danger {
        color: #FF4961
      }
      &.warning {
        color: #FFC06A
      }
      &.info {
        color: #1E9FF2
      }
    }
  }

  .arrow {
    display: flex;
    width: 20px;
    margin-right: 20px;

    .image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
