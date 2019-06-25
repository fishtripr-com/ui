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
          {{ title }}
        </p>

        <p class="hat">
          {{ hat }}
        </p>

        <p class="status" :class="mode">
          {{ status }}
        </p>

      </div>

      <div class="arrow">
        <fly-icon icon="arrowRight" color="#898EA2"/>
      </div>
    </template>
    
    <p v-else>Loading...</p>

  </div>
</template>

<script>
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
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.offer-card {
  display: flex;
  align-items: center;
  border: 1px solid #E4E5EC;
  width: 100%;
  height: 100px;
  max-height: 100px;
  cursor: pointer;
  background-color: white;

  .img {
    width: 110px;
    height: 70px;
    padding: 0.8rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .body {
    flex: 1;
    height: 100%;
    max-height: 80px;
    font-family: 'Montserrat', sans-serif !important;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
      font-weight: 700;
      margin: 0;
      font-size: .9rem;
      line-height: 1.4rem;
    }
    .hat {
      font-size: 14px;
      line-height: 16px;
      margin: 0;
      color: #898EA2;
    }
    .status {
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
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
  }
}
</style>