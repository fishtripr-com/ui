import { storiesOf } from '@storybook/vue';

import data from '../../_utils/mockData/index'

storiesOf('Experience/Short Experience Preview', module)
  .add(
    'Default',
    () => ({
      data() {
        return {
          title: data.experience.title
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
