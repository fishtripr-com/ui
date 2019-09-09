<template>
  <div class="conversation-card" @click="onClick">

    <div class="avatar-container">
      <avatar :image="image" />
    </div>

    <template v-if="!loading">
      <div class="first">
        <p class="txt-4 bold">
          {{ userName }}
        </p>
        <p
          v-if="isSmallOrDown"
          class="last-message txt-5"
          >
          {{ lastMessage }}
        </p>
        <p
          class="light"
          :class="isSmallOrDown ? 'txt-6' : 'txt-5'"
          >
          <template v-if="isSmallOrDown" >
            <span class="premium">Inquiry Sent</span>
            <span class="bull">&bull;</span>
          </template>
          {{ time }}
        </p>
      </div>

      <div
        v-if="!isSmallOrDown"
        class="second"
        >
        <p class="last-message txt-4">
          {{ lastMessage }}
        </p>
        <p class="txt-5 light">
          {{ additionnalInfo }}
        </p>
      </div>

      <div
        v-if="!isSmallOrDown"
        class="third"
        >
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
import Avatar from '../../avatar'
import { responsiveHandler } from '../../../mixins/responsiveHandler'

export default {
  name: 'conversation-card',
  mixins: [ responsiveHandler ],
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
@import "../../../assets/style/default";

.conversation-card {
  display: flex;
  align-items: center;
  border: 1px solid map-get($colors, 'border');
  padding: map-get($spacers, 5);
  cursor: pointer;

  @media #{$screen-s} {
    border: none;
    padding: map-get($spacers, 3) map-get($spacers, 0);
  }

  .last-message {
    width: 100%;
    max-width: 450px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media #{$screen-s} { max-width: 200px }
  }

  .avatar-container {
    margin-right: map-get($spacers, 5);

    @media #{$screen-s} { margin-right: map-get($spacers, 4) }
  }
  .first { flex-grow: 0.3 }
  .second { flex-grow: 1 }
  .third { flex-grow: 0.15 }
}
</style>
