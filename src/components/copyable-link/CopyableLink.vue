<template>
  <div class="copyable-link">
    <header class="wrapper-header mb-5">
      <span class="header-text txt-4 semibold">{{ label }}</span>
      <span
        v-if="!isCopied"
        class="copy-button txt-4 semibold premium"
        @click.stop.prevent="copyLink"
        >
        Copy
      </span>
      <span
        v-else
        class="copy-button txt-4 semibold success"
        >
        Copied!
      </span>
    </header>
    <a
      class="link-to-copy txt-4 link-premium"
      :href="link"
      @click.stop.prevent="copyLink"
      >
      {{ link }}
    </a>
    <input type="hidden" id="linkToCopy" :value="link" />
  </div>
</template>

<script>
export default {
  name: 'copyable-link',
  props: {
    label: { type: String, required: true },
    link: { type: String, required: true }
  },
  data() {
    return {
      isCopied: false
    }
  },
  methods: {
    switchIsCopied() {
      this.isCopied = !this.isCopied
    },
    copyLink() {
      const textToCopy = document.querySelector('#linkToCopy')
      textToCopy.setAttribute('type', 'text')
      textToCopy.select()
      document.execCommand('copy')
      textToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
      this.switchIsCopied()
      setTimeout(() => {
        this.switchIsCopied()
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/default";

.copyable-link {
  display: flex;
  flex-direction: column;

  .wrapper-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .copy-button { cursor: pointer }
  }
  .link-to-copy {
    overflow-wrap: break-word;
  }
}
</style>
