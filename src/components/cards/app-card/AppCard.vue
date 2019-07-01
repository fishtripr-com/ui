<template>
  <div 
    class="app-card"
    @click="onClick">

    <div class="wrapper">

      <div class="image-container">
        <image-container 
          :img="image"
          :height="100"
          />
      </div>
      
      <div class="header-container">
        <p class="title">
          {{ title }}
        </p>
        <img 
          v-if="icon"
          :src="iconSVG" 
          alt="icon check" 
          class="icon"
          >
      </div>

      <p class="description">
        {{ description }}
      </p>

      <p 
        v-if="status"
        class="status"
        :class="statusMode"
        >
        {{ status }}
      </p>

    </div>

  </div>
</template>

<script>
import ImageContainer from '../../image-container'

export default {
  name: 'app-card',
  components: { ImageContainer },
  props: {
    id: { type: String },
    image: { type: String },
    title: { type: String },
    description: { type: String },
    status: { type: String },
    statusMode: { type: String },
    icon: { type: String }
  },
  computed: {
    iconSVG() {
      if (this.icon === 'check') {
        return 'https://fishtripr-prod-offer-pics.s3.eu-west-3.amazonaws.com/images/icons/success.svg' 
      } else {
        return 'https://fishtripr-prod-offer-pics.s3.eu-west-3.amazonaws.com/images/icons/padlock.svg'
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-card {
  display: flex;
  width: 300px;
  box-sizing: border-box;
  border: 5px solid transparent;

  .wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    padding: 20px 20px 50px 20px;
    border: 1px solid #E4E5EC;
    cursor: pointer;

    .image-container {
      width: 45px;
    }

    .header-container {
      display: flex;
      .title {
        font-size: 16px;
        font-weight: 700;
      }
      .icon {
        margin-left: 10px;
      }
    }

    .description {
      font-size: 16px;
      font-weight: 500;
      color: #898EA2;
      margin: 0;
      margin-bottom: 5px;
    }

    .status {
      position: absolute;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      bottom: 10px;

      &.success {
        color: #30DEA0;
      }
      &.comming-soon {
        color: #666EE8;
      }
    }

  }
}
</style>