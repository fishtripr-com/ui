<template>
  <div class="conversation-card" @click="onClick">

    <div class="avatar-container">
      <avatar :image="image"/>
    </div>

    <template v-if="!loading">
      <div class="first">
        <p class="txt-4 bold">
          {{ userName }}
        </p>
        <p class="txt-5 light">
          {{ time }}
        </p>
      </div>

      <div class="second">
        <p class="txt-4">
          {{ lastMessage }}
        </p>
        <p class="txt-5 light">
          {{ additionnalInfo }}
        </p>
      </div>

      <div class="third">
        <p class="txt-4">
          {{ price }}
        </p>
        <p
          class="txt-5 bold"
          :class="statusClass"
          >
          {{ status }}
        </p>
      </div>
    </template>

    <p v-else>Loading...</p>

  </div>
</template>

<script>
import Avatar from '../avatar'

export default {
  name: 'conversation-card',
  components: { Avatar },
  props: {
    image: { type: String, default: '' },
    userName: { type: String, default: '' },
    time: { type: String, default: '' },
    lastMessage: { type: String, default: '' },
    additionnalInfo: { type: String, default: '' },
    price: { type: String, default: '' },
    status: { type: String, default: 'Pending' },
    statusClass: {
      type: String,
      default: 'black',
      validator: value => ['success', 'warning', 'black'].includes(value)
    },
    loading: { type: Boolean, default: false },
    read: { type: Boolean, default: false }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/default";

.conversation-card {
  display: flex;
  align-items: center;
  border: 1px solid map-get($colors, 'border');
  padding: map-get($spacers, 5);
  cursor: pointer;

  .avatar-container { margin-right: map-get($spacers, 5) }
  .first { flex-grow: 0.3 }
  .second { flex-grow: 1 }
  .third { flex-grow: 0.15 }
}
</style>
