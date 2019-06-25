<template functionnal>
  <div 
    class="offer-card" 
    @click="onClick"
    >

    <template v-if="!isLoading">
      <div class="img">
        <fly-image :img="image" :height='70'/>
      </div>

      <div class="body">

        <fly-text size="s" weight="bold">
          {{ title }}
        </fly-text>

        <fly-text size="xs">
          {{ hat }}
        </fly-text>

        <fly-text
          :type="mode"
          size='xs'
          weight='semibold'
          >
          {{ status }}
        </fly-text>

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
  max-height: 80px;
  cursor: pointer;
  background-color: white;

  .img {
    width: 100px;
    padding: 0.8rem;
  }

  .body {
    flex: 1;
    padding: 0.8rem 0;
  }

  .arrow {
    width: 45px;
  }
}
</style>