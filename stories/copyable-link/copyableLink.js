import { storiesOf } from '@storybook/vue'

storiesOf("Copyable Link", module)
  .add("Basic", () => ({
    template: `<copyable-link
      label="Payment link"
      link="https://www.example.com/title/experience/fishing/isgoodtt0068646/?ref_=ttls_li_tt"
    />`
  })
)
