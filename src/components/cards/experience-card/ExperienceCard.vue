<template functionnal>
  <div class="experience-card" @click="onClick">
    <template v-if="!isLoading">
      <div class="wrapper-img">
        <img :src="image" />
      </div>

      <div class="body">
        <div>
          <slot name="type" />
        </div>

        <p class="title">{{ truncate(title) }}</p>

        <p class="hat">{{ hat }}</p>
      </div>
    </template>

    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'experience-card',
  props: {
    isLoading: { type: Boolean },
    image: { type: String },
    title: { type: String },
    hat: { type: String },
  },
  computed: {},
  methods: {
    onClick() {
      this.$emit('click')
    },
    truncate(title) {
      if (title.length > 50) {
        return title.slice(0, 50 - 3) + '...'
      }
      return title
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/main';

.experience-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e5ec;
  max-width: 350px;
  min-width: 350px;
  max-height: 400px;
  min-height: 400px;
  background-color: $white;
  cursor: pointer;
  margin: 0;
  padding: 0;

  .wrapper-img {
    img {
      height: 250px;
      width: 350px;
      object-fit: cover;
    }
  }

  .body {
    flex: 1;
    height: 100%;
    min-height: 100%;
    font-family: 'Montserrat', sans-serif !important;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: $space-m;

    .title {
      font-weight: $bold;
      margin: 0;
      font-size: $font-size-l;
      line-height: $line-height-m;
    }
    .hat {
      font-size: $font-size-m;
      line-height: $line-height-m;
      margin: 0;
      color: #898ea2;
    }
  }
}
</style>
