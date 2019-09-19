import { storiesOf } from '@storybook/vue'

storiesOf('Conversation', module).add(
  'Receiver Header',
  () =>
    `<conversation-receiver-header
      userName="Michael"
      onlineStatus
    />`,
)
