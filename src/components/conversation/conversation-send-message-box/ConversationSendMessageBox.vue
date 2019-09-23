<template>
  <form class="conversation-send-message-box">
    <textarea
      v-model="message"
      :disabled="isLoading"
      class="textarea txt-4"
      :style="style.textarea"
      id="textarea-element"
      style="box-shadow: 0 1px 5px 0 rgba(0,0,0,.1)"
    />

    <div class="action-group">
      <div class="additionnal-actions">
        <slot name="additionnal-actions" />
      </div>
      <button
        class="send-button txt-3 semibold mr-3 mt-3"
        :class="{ primary: !premium, premium }"
        :disabled="isLoading"
        @click.stop.prevent="emitMessage"
      >
        Send
      </button>
    </div>
  </form>
</template>

<script>
import { COLORS } from '@fishtripr/constants'
import { responsiveHandler } from '../../../mixins/responsiveHandler'

export default {
  name: 'conversation-send-message-box',
  mixins: [responsiveHandler],
  props: {
    isLoading: { type: Boolean, default: false },
    premium: { type: Boolean, default: false },
  },
  data() {
    return {
      message: '',
      observe: null,
      style: {
        textarea: {
          borderColor: this.premium
            ? COLORS.PRIMARY.PURPLE
            : COLORS.PRIMARY.GREEN,
        },
      },
    }
  },
  methods: {
    emitMessage() {
      if (this.message.length && !this.isLoading) {
        this.$emit('newMessage', this.message)
      }
    },
    initEventListener() {
      const textAreaElement = document.getElementById('textarea-element')
      const resize = () => {
        textAreaElement.style.height = 'auto'
        textAreaElement.style.height =
          textAreaElement.scrollHeight < 100
            ? `${textAreaElement.scrollHeight}px`
            : '100px'
      }
      const delayedResize = () => {
        window.setTimeout(resize, 0)
      }
      this.observe(textAreaElement, 'change', resize)
      this.observe(textAreaElement, 'cut', delayedResize)
      this.observe(textAreaElement, 'paste', delayedResize)
      this.observe(textAreaElement, 'drop', delayedResize)
      this.observe(textAreaElement, 'keydown', delayedResize)

      textAreaElement.focus()
      textAreaElement.select()
      resize()
    },
  },
  watch: {
    isLoading(newValue) {
      if (!newValue) {
        this.message = ''
      }
    },
  },
  mounted() {
    if (window.attachEvent) {
      this.observe = (element, event, handler) => {
        element.attachEvent(`on${event}`, handler)
      }
    } else {
      this.observe = (element, event, handler) => {
        element.addEventListener(event, handler, false)
      }
    }
    this.initEventListener()
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/default';

.conversation-send-message-box {
  display: flex;
  flex-direction: column;

  .textarea {
    outline: none;
    resize: none;
    border: {
      width: 1px;
      style: solid;
      radius: 4px;
      color: map-get($colors, 'border');
    }
  }
  .action-group {
    display: flex;
    justify-content: space-between;
  }
  .send-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
