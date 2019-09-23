import { storiesOf } from '@storybook/vue'

storiesOf('Conversation/Conversation Send Message Box', module)
  .add('Default', () => ({
    template: `<conversation-send-message-box/>`,
  }))
  .add('Loading', () => ({
    template: `<conversation-send-message-box is-loading/>`,
  }))
  .add('Premium', () => ({
    template: `<conversation-send-message-box premium/>`,
  }))
