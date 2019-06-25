import { storiesOf } from '@storybook/vue';

storiesOf('Avatar', module)
  .add('with URL', () => '<avatar image="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"/>')
  .add('without URL (fallback)', () => '<avatar/>')
  .add('Size xxs', () => '<avatar size="xxs"/>')
  .add('Size xs', () => '<avatar size="xs"/>')
  .add('Size s', () => '<avatar size="s"/>')
  .add('Size m', () => '<avatar size="m"/>')
  .add('Size l', () => '<avatar size="l"/>')
  .add('Size xl', () => '<avatar size="xl"/>')
  .add('Size xxl', () => '<avatar size="xxl"/>');

storiesOf('Images', module)
  .add('with URL', () => '<image-container image="https://i.ytimg.com/vi/OJcvzRnPHCI/maxresdefault.jpg" :height="80" />')
  .add('without URL', () => '<image-container/>');

storiesOf('Conversation card', module)
  .add('Basic', () => '<conversation-card image="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80" user-name="Vincent Battaglia" />')
  .add('Loading mode', () => '<conversation-card :loading="true"/>');

storiesOf('Loader', module)
  .add('Basic', () => '<fishtripr-loader/>');

storiesOf('Offer Card', module)
  .add(
    'Basic', 
    () => {
      `<offer-card
        picture="https://i.ytimg.com/vi/OJcvzRnPHCI/maxresdefault.jpg"
        title="An unforgettable father-and-son fishing experience in Jura"
        hat="1 Guest - Jun 07, 2019 - €200"
        status="Pending"
        mode="warning"
        />`
    });
