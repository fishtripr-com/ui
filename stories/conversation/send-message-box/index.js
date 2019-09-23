import { storiesOf } from '@storybook/vue'

storiesOf('Conversation/Conversation Send Message Box', module).add(
  'Default',
  () => ({
    template: `<conversation-send-message-box/>`,
  }),
)
