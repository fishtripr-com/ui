<template>
  <div class="copyable-link">
    <header class="wrapper">
      <span class="header-text">{{ label }}</span>
      <span class="copy-button" @click.stop.prevent="copyLink">Copy</span>
    </header>
    <a class="link" :href="link">{{ link }}</a>
    <input type="hidden" id="linkToCopy" :value="link" />
  </div>
</template>

<script>
export default {
  name: "copyable-link",
  props: {
    label: { type: String, required: true },
    link: { type: String, required: true }
  },
  methods: {
    copyLink() {
      let textToCopy = document.querySelector("#linkToCopy");
      textToCopy.setAttribute("type", "text");
      textToCopy.select();
      document.execCommand("copy");
      textToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/main";

.copyable-link {
  display: flex;
  flex-direction: column;
  font-family: $font-family;
  font-size: $font-size-s;

  .wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: $space-m;
    font-weight: $semibold;
    color: $color-text;

    .copy-button {
      color: $color-text-info;
    }
  }
}
</style>
