import { storiesOf } from '@storybook/vue';

storiesOf("Conversation", module)
  .add("Textarea", () =>
    `<send-message-textarea
      />`
  );
