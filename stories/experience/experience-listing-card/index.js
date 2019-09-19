import { storiesOf } from '@storybook/vue'

storiesOf('Experience/Experience listing card', module).add(
  'Default',
  () =>
    `<experience-listing-card
        image="https://picsum.photos/200/300"
        title = "Experience Three Fishing Adventures in Dalarna"
        country = "Georgia"
        isListed
      >
    </experience-listing-card>`,
)
