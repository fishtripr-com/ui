import { storiesOf } from '@storybook/vue';

storiesOf('Offer card', module)
  .add(
    'Default',
    () =>
      `<offer-card
        image="https://picsum.photos/200/300"
        title="An unforgettable father-and-son fishing experience in Jura"
        hat="1 Guest - Jun 07, 2019 - €200"
        status="Pending"
        mode="warning"
        />`
  );

