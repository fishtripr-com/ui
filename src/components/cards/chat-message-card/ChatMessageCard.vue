<template functionnal>
  <div class="chat-message-card">

    <div class="avatar-container">
      <avatar 
        :image="avatar"
        size="s"
       />
    </div>

    <div class="body">

      <p class="header">
        <span class="nameAction">{{ messageHeader }}</span>
        <span class="time">{{ messageTime }}</span>
      </p>

      <div class="content">
        <slot name="body"/>
      </div>

    </div>

  </div>
</template>

<script>
import Avatar from '../../avatar/Avatar'

export default {
  name: 'chat-message-card',
  components: { Avatar },
  props: {
    avatar: { type: String },
    messageHeader: { type: String },
    messageTime: { type: String }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/main";

.chat-message-card {
  display: flex;
  font-family: 'Montserrat', sans-serif !important;
  padding: .6rem 1.2rem;

  &:hover {
    background-color: #f4f5fa;
  }

  .avatar-container {
    margin-right: 10px;
  }

  .body { 
    width: 100%;
    overflow-x: hidden;

    .header {
      margin: 0;
      line-height: 1.4rem;

      .nameAction {
        font-weight: 700;
        font-size: $font-size-m;

        @media #{$small-and-down} {
          font-size: $font-size-s;
        }
      }

      .time {
        font-size: $font-size-s;
        color: #898ea2;

        @media #{$small-and-down} {
          font-size: $font-size-xs;
        }
      }
    }

    .content {
      width: 100%;
      padding: .6rem 0;
    }
  }
}
</style>
