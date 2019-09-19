<template functionnal>
  <div
    class="partner-card"
    :style="{ 'background-image': 'url(' + imageUrl + ')' }"
    @click="onClick"
  >
    <template v-if="!isLoading">
      <div class="body">
        <div class="type">
          <slot name="type" />
        </div>

        <p class="title">{{ title }}</p>
      </div>
    </template>

    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'partner-card',
  props: {
    isLoading: { type: Boolean },
    imageUrl: { type: String },
    title: { type: String },
  },
  computed: {},
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/main';

.partner-card {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  min-width: 350px;
  max-height: 550px;
  min-height: 550px;
  background-color: $white;
  cursor: pointer;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-size: cover;

  .body {
    font-family: 'Montserrat', sans-serif !important;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: $space-xxl $space-l $space-xl $space-xl;
    z-index: 2;
    background-size: 100% 50%;
    background: linear-gradient(
      to bottom,
      rgba(49, 49, 49, 0.027) 0%,
      rgba(22, 22, 22, 0.712) 100%
    );

    .title {
      font-weight: $bold;
      color: $white;
      margin: 0;
      padding-top: $space-s;
      font-size: $font-size-xl;
      line-height: $line-height-m;
    }
    // }
  }
}
</style>
