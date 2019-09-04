<template>
  <div class="messages-container-header">
    <p class="nameHeader">{{ userName }}</p>
    <div class="body">
      <span class="status">{{ statusIndicator }}</span>
      <span class="bull">|</span>
      <span class="text">Avg. response time 6 Hrs.</span>
    </div>
  </div>
</template>

<script>
import { responsiveHandler } from "../../../mixins/responsiveHandler";

export default {
  name: "messages-container-header",
  mixins: [responsiveHandler],
  props: {
    userName: { type: String, default: "" },
    onlineStatus: { type: Boolean, default: false }
  },
  computed: {
    statusIndicator() {
      return this.onlineStatus ? "Online" : "Offline";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style";

.messages-container-header {
  display: flex;
  flex-flow: column wrap;
  border: 1px solid $color-border;
  padding: $space-xs $space-xxs;
  cursor: pointer;

  .nameHeader {
    margin: 0 0 $space-xxxs 0;
    font-size: $font-size-m;
    font-weight: $semibold;
  }

  .body {
    font-size: $font-size-s;
    font-weight: $normal;
  }
}
</style>
