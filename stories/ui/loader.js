import { storiesOf } from '@storybook/vue'

storiesOf('UI/Loader/Mode', module)
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

storiesOf('UI/Loader/Sizes', module)
.add(
  'Extra small',
  () => ({
    template: `<default-loader size="xs"/>`,
  })
)
.add(
  'Small',
  () => ({
    template: `<default-loader size="s"/>`,
  })
)
.add(
  'Medium (default)',
  () => ({
    template: `<default-loader/>`,
  })
)
.add(
  'Large',
  () => ({
    template: `<default-loader size="l"/>`,
  })
)
.add(
  'Extra large',
  () => ({
    template: `<default-loader size="xl"/>`,
  })
)
