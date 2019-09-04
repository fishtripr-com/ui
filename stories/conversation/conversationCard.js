import { storiesOf } from '@storybook/vue'

storiesOf('Conversation card', module)
  .add('Basic', () => `
    <conversation-card
      image="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
      user-name="Vincent Battaglia"
      time="a day ago"
      lastMessage="Hello, I would like to book your experience in Patagonia"
      additionnalInfo="1 guest - 19 June, 2019 - €33.00"
      price="€33.00"
      status="Accepted"
      statusClass="success"
    />
  `)
  .add('Loading mode', () => `
    <conversation-card loading/>
  `)
