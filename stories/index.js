import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .add('Loading', () => '<base-button label="I\'m loading" loading/>')
  .add('Primary', () => '<base-button>Click me</base-button>')
  .add('Success', () => '<base-button type="success">Click me</base-button>')
  .add('Danger', () => '<base-button type="danger">Click me</base-button>')
  .add('Premium', () => '<base-button type="premium">Click me</base-button>')
  .add('Small', () => '<base-button size="s">Click me</base-button>')
  .add('Medium', () => '<base-button size="m">Click me</base-button>')

storiesOf('Avatar', module)
  .add('with URL', () => '<avatar image="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"/>')
  .add('without URL (fallback)', () => '<avatar/>')
  .add('Size xxs', () => '<avatar size="xxs"/>')
  .add('Size xs', () => '<avatar size="xs"/>')
  .add('Size s', () => '<avatar size="s"/>')
  .add('Size m', () => '<avatar size="m"/>')
  .add('Size l', () => '<avatar size="l"/>')
  .add('Size xl', () => '<avatar size="xl"/>')
  .add('Size xxl', () => '<avatar size="xxl"/>')
  .add('With border', () => '<avatar hasBorder size="s" image="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"/>');

storiesOf('Images', module)
  .add('with URL', () => '<image-container image="https://i.ytimg.com/vi/OJcvzRnPHCI/maxresdefault.jpg" :height="80" />')
  .add('without URL', () => '<image-container/>');

storiesOf('Conversation card', module)
  .add('Basic', () => '<conversation-card image="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80" user-name="Vincent Battaglia" />')
  .add('Loading mode', () => '<conversation-card :loading="true"/>');

storiesOf('Loader', module)
  .add('Basic', () => '<fishtripr-loader/>');

storiesOf('Cards', module)
  .add(
    'Offer Card',
    () =>
      `<offer-card
        image="https://picsum.photos/200/300"
        title="An unforgettable father-and-son fishing experience in Jura"
        hat="1 Guest - Jun 07, 2019 - €200"
        status="Pending"
        mode="warning"
        />`
  )
  .add(
    'Chat Message Card',
    () =>
      `<chat-message-card
        avatar="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
        message-header="Kevin Tassi"
        message-time="Jun 20, 6:44pm"
        />`
  )
  .add(
    'App Card',
    () =>
      `<app-card
        id="123"
        image="https://picsum.photos/200/300"
        title="My beautifull app"
        description="This is an example on description"
        status="on"
        status-mode="success"
        icon="check"
        />`
  )
  .add(
    'Employee Card',
    () =>
      `<employee-card
        first-name="Kevin"
        last-name="Tassi"
        role="Co-founder&CEO"
        />`
  )
  .add(
    'User Navbar Card',
    () =>
      `<div style="background-color: #301A87">
        <user-navbar-card
          avatar="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
          user-first-name="Max"
          user-role="Fishing Guide"
          />
      </div>`
  );
  storiesOf("Basic Elements", module)
  .add("ExperienceType", () => '<experience-type classType="guide_hosting" offer="Guide&Host" country="Nigeria" />')
  .add("PartnerType", 
      () => 
        `<div style="background-color: #5F5F5F; height: 50px">
          <partner-type classType="outfitter" partner="Outfitter" country="Belgium" 
          />
        </div>`
        );
