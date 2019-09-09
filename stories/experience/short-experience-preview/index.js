import { storiesOf } from '@storybook/vue';

storiesOf('Experience/Short Experience Preview', module)
  .add(
    'Default',
    () => ({
      data() {
        return {
          title: "Fishing with father and son"
        }
      },
      template: `<div style="width:350px;">
      <short-experience-preview
        :title="title"
        country="Belgium"
        image="https://picsum.photos/200/300"
        is-listed
      />
    </div>`
    })
  )
