import { storiesOf } from '@storybook/vue'

import data from '../../_utils/mockData/index'

storiesOf('Experience/Short Experience Preview', module).add('Default', () => ({
  data() {
    return {
      title: data.experience.title,
      cover: data.experience.cover,
      country: data.experience.country,
      city: data.experience.city,
      averageRating: data.experience.reviews_average,
    }
  },
  template: `<div style="width:350px;">
      <short-experience-preview
        :title="title"
        :country="country"
        :city="city"
        :image="cover"
        :average-rating="averageRating"
        is-listed
      />
    </div>`,
}))
