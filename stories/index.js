import { storiesOf } from '@storybook/vue';

storiesOf('Avatar', module)
  .add('with URL', () => '<avatar image="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"/>')
  .add('without URL (fallback)', () => '<avatar/>');

storiesOf('Images', module)
  .add('with URL', () => '<image-container image="https://i.ytimg.com/vi/OJcvzRnPHCI/maxresdefault.jpg" :height="80" />')
  .add('without URL', () => '<image-container/>')