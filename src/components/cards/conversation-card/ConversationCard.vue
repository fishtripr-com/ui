<template>
  <div class="conversation-card bordered my-5 py-5 px-5 flex-row" @click="onClick">

    <div class="avatar">
      <avatar :image="avatar"/>
    </div>

    <template v-if="!loading">
      <div class="user flex-row-ctr">
        <p class="txt-4 bold mx-5">{{ userName }}</p>
      </div>

      <div class="message flex-row-ctr">
        <p class="txt-5 pl-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error inventore...
        </p>
      </div>
    </template>

    <p v-else>Loading...</p>

  </div>
</template>

<script>
import Avatar from '../../avatar'

export default {
  name: 'conversation-card',
  components: { Avatar },
  props: {
    avatar: { type: String, default: '' },
    userName: { type: String, default: '' },
    loading: { type: Boolean, default: false }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.conversation-card { cursor: pointer }
</style>
