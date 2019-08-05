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

export default {
  name: 'offer-card',
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
      if (title.length > 50) {
        return title.slice(0, 50 - 3) + "...";
      }
      return title;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/index";

.offer-card {
  display: flex;
  align-items: center;
  border: 1px solid #E4E5EC;
  width: 100%;
  cursor: pointer;
  background-color: white;
  height: 70px;
  flex-direction: row;

  @media #{$small-and-down} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
    height: 177px;
  }

  .img {
    width: 100px;
    height: 70px;
    padding: 0.6rem;

    @media #{$small-and-down} {
      width: 100px;
      height: 100px;
    }

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

    @media #{$small-and-down} {
      padding: 0.6rem;
    }

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
    width: 45px;
    
    @media #{$small-and-down} {
      display: none;
    }
  }
}
</style>