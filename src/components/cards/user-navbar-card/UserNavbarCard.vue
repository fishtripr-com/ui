<template functionnal>
  <div class="user-navbar-card">
    <div :class="['avatar-container', size, {'clickable':isClickable}]">
      <avatar :size="size" :image="avatar" hasBorder />
    </div>
    <div class="body">
      <p class="header">
        <span class="user-name">{{ userFirstName }}</span>
        <span class="user-role">({{ userRole.toUpperCase() }})</span>
      </p>
    </div>
  </div>
</template>

<script>
import Avatar from "../../avatar/Avatar";
export default {
  name: "user-navbar-card",
  components: { Avatar },
  props: {
    avatar: { type: String },
    userFirstName: { type: String },
    userRole: { type: String },
    isClickable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "s"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/main";

.user-navbar-card {
  display: flex;
  font-family: "Montserrat", sans-serif !important;
  // padding: 0.6rem 1.2rem;
  align-items: center;

  .avatar-container {
    margin-right: 10px;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }

  .body {
    width: 100%;
    overflow-x: hidden;

    .header {
      margin: 0;
      line-height: 1.4rem;

      .user-name {
        font-weight: 700;
        font-size: 0.9rem;
        color: #f8f7fb;
      }

      .user-role {
        font-size: 0.8rem;
        font-weight: 700;
        color: #958ce4;
        margin-left: 5px;
      }
    }
  }
}
</style>
