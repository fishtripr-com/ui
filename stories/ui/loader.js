import { storiesOf } from '@storybook/vue'

storiesOf('UI/Loader/Default', module)
.add(
  'Primary',
  () => ({
    template: `<default-loader/>`,
  })
)
.add(
  'Premium',
  () => ({
    template: `<default-loader mode="premium"/>`,
  })
)
