<template>
  <div class="conversation-send-message-box">
    <!-- <el-form> -->
      <el-input
        v-model="message"
        :rows="2"
        :disabled="isLoading"
        size="mini"
        id="textarea-element"
        resize="none"
        style="box-shadow: 0 1px 5px 0 rgba(0,0,0,.1)"
        type="textarea"
      />

      <div class="btn-group">
        <div>
          <el-button
            v-if="deviceSize < deviceSizes.l"
            icon="el-icon-tickets"
            type="text"
            class="more"
            @click="onDocumentClicked"
          />
        </div>
        <el-button type="text" :disabled="isLoading" @click="sendMessage">
          Send
        </el-button>
      </div>
    <!-- </el-form> -->
  </div>
</template>

<script>
// import { ElButton, ElForm, ElInput } from 'element-ui'
import { responsiveHandler } from '../../../mixins/responsiveHandler'

export default {
  name: 'conversation-send-message-box',
  mixins: [responsiveHandler],
  // components: { ElButton, ElForm, ElInput },
  props: {
    isLoading: { type: Boolean, default: false },
  },
  data() {
    return {
      message: '',
      observe: null,
    }
  },
  methods: {
    sendMessage() {
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
    onDocumentClicked() {
      this.$emit('documentClicked')
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
.conversation-send-message-box {
  .btn-group {
    display: flex;
    justify-content: space-between;

    .more {
      transform: scale(1.3);
    }
  }
}

</style>
