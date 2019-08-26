<template functionnal>
  <div :class="['user-navbar-card', theme]">
    <div :class="['avatar-container', size, {'clickable':isClickable}]">
      <avatar :class="[theme]" :size="size" :image="avatar" hasBorder />
    </div>
    <div v-if="deviceSize > deviceSizes.m" class="body">
      <p class="header">
        <span :class="['user-name', theme]">{{ userFirstName }}</span>
        <span :class="['user-role', theme]">({{ userRole.toUpperCase() }})</span>
      </p>
    </div>
  </div>
</template>

<script>
import Avatar from "../../avatar/Avatar";
import { responsiveHandler } from "../../../mixins/responsiveHandler";

export default {
  name: "user-navbar-card",
  mixins: [responsiveHandler],
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
    },
    theme: {
      type: String,
      default: "light",
      validator: value => ["light", "dark", "premium"].includes(value)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/main";

.user-navbar-card {
  display: flex;
  font-family: "Montserrat", sans-serif !important;
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

        &.light {
          color: #353745;
        }
        &.dark {
          color: $pale-grey;
        }
        &.premium {
          color: $white;
        }
      }

      .user-role {
        font-size: 0.8rem;
        font-weight: 700;
        margin-left: 5px;

        &.light {
          color: $steel;
        }
        &.dark {
          color: $steel;
        }
        &.premium {
          color: #958ce4;
        }
      }
    }
  }
}
</style>
