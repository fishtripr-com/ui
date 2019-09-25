import { storiesOf } from '@storybook/vue'

import data from '../_utils/mockData'

storiesOf('Modal', module).add('Default', () => ({
  name: 'modal-story',
  data() {
    return {
      showModal: false,
      imgUrl: data.modal.image,
    }
  },
  template: `<div>
                <button @click="showModal = true">Show Modal</button>
                <basic-modal v-if="showModal" @close="showModal = false">
                  <template #body>
                  <img :src="imgUrl" style="{  object-fit: contain;
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;}"/>
                  </template>
                </basic-modal>
            </div>`,
}))
