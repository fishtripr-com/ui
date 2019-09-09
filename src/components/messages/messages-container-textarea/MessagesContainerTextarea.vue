<template>
  <div class="send-message-container">
    <el-form>
      <el-input
        class="inputArea"
        v-model="message"
        :rows="2"
        :disabled="isLoading"
        size="mini"
        id="chat-textarea-container"
        resize="none"
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
        <el-button class="button" type="text" @click="sendMessage">Send</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { responsiveHandler } from "../../../mixins/responsiveHandler";
import { Form, Input, Button } from "element-ui";

export default {
  name: "send-message-container",
  mixins: [responsiveHandler],
  props: {
    isLoading: { type: Boolean, default: false }
  },
  components: {
    "el-form": Form,
    "el-input": Input,
    "el-button": Button
  },
  data() {
    return {
      message: "",
      observe: null
    };
  },

  methods: {
    sendMessage() {
      if (this.message.length && !this.isLoading) {
        this.$emit("newMessage", this.message);
      }
    },
    initEventListener() {
      const textAreaElement = document.getElementById(
        "chat-textarea-container"
      );
      const resize = () => {
        textAreaElement.style.height = "auto";
        textAreaElement.style.height =
          textAreaElement.scrollHeight < 100
            ? `${textAreaElement.scrollHeight}px`
            : "100px";
      };
      const delayedResize = () => {
        window.setTimeout(resize, 0);
      };
      this.observe(textAreaElement, "change", resize);
      this.observe(textAreaElement, "cut", delayedResize);
      this.observe(textAreaElement, "paste", delayedResize);
      this.observe(textAreaElement, "drop", delayedResize);
      this.observe(textAreaElement, "keydown", delayedResize);

      textAreaElement.focus();
      textAreaElement.select();
      resize();
    },
    onDocumentClicked() {
      this.$emit("documentClicked");
    }
  },
  watch: {
    isLoading(newValue) {
      if (!newValue) {
        this.message = "";
      }
    }
  },
  mounted() {
    if (window.attachEvent) {
      this.observe = (element, event, handler) => {
        element.attachEvent(`on${event}`, handler);
      };
    } else {
      this.observe = (element, event, handler) => {
        element.addEventListener(event, handler, false);
      };
    }
    this.initEventListener();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/index";
@import "../../../../node_modules/element-ui/lib/theme-chalk/input.css";

.send-message-container {
  .inputArea {
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .btn-group {
    display: flex;
    justify-content: space-between;

    .more {
      transform: scale(1.3);
      color: $color-primary;
    }

    .button {
      margin-right: $space-xs;
      color: $color-primary;
    }
  }
}
</style>
