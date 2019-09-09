import { storiesOf } from '@storybook/vue';

storiesOf('Experience/Short Experience Preview', module)
  .add(
    'Default',
    () =>
      `<div style="width:350px;">
        <short-experience-preview
          title="Fishing with father and son"
          country="Belgium"
          image="https://picsum.photos/200/300"
          is-listed
        />
      </div>`
  )
