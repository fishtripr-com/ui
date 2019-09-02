import { storiesOf } from '@storybook/vue'

import './navigation/index'
import './navbar/index'
import './experience/short-experience-preview/index'
import './offer/offerCard'

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
        theme="dark"
          avatar="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
          user-first-name="Max"
          user-role="Fishing Guide"
          />
      </div>`
  )
  .add(
    'Experience Card',
    () =>
      `<experience-card
      image="https://picsum.photos/200/300"
      title = "Experience Three Fishing Adventures in Dalarna"
      hat = "Approx. 6 Days | From €560"
    >
      <template #type>
        <text-type-bloc
          className = "guide_hosting"
          textType = "Guide & Host"
          text = "Nigeria"
          uppercase
        />
      </template>
    </experience-card>`
  )
  .add(
    'Partner Card',
    () =>
      `<partner-card
      imageUrl="https://picsum.photos/200/300"
      title = "Emilio e Giorgio"
    >
      <template #type>
        <text-type-bloc
        className="guide"
        textType="Guide"
        text="Belgium"
        separator="|"
        />
      </template>
    </partner-card>`
  );;
storiesOf("Text Type bloc", module)
  .add("Light", () =>
    `<text-type-bloc
        className="guide_hosting"
        textType="Guide & Host"
        text="Nigeria"
        />`
  )
  .add("Light & Uppercase", () =>
    `<text-type-bloc
        className="guide_hosting"
        textType="Guide & Host"
        text="Nigeria"
        uppercase
        />`
  )
  .add("Light with other separator", () =>
    `<text-type-bloc
        className="guide"
        textType="Guide"
        text="Belgium"
        separator="|"
        />`
  )
  .add("Dark",
    () =>
      `<div style="background-color: #5F5F5F; height: 50px">
          <text-type-bloc
            className="guide_hosting"
            textType="Guide & Host"
            text="Nigeria"
            dark
            />
        </div>`
  );

storiesOf("Check Box Card", module)
  .add('Unchecked', () =>
    `<check-box-card
      title="People are eyeing this experience."
      text="€370.00"
      subtitle="12 others are looking at it for these dates."
      subtext="Now"
    />`
  )
  .add('Disabled', () =>
    `<check-box-card
      title="People are eyeing this experience."
      text="€370.00"
      subtitle="12 others are looking at it for these dates."
      subtext="Now"
      disabled
    />`
  )
  .add('Checked', () =>
    `<check-box-card
      checked
      title="People are eyeing this experience."
      text="€370.00"
      subtitle="12 others are looking at it for these dates."
      subtext="Now"
    />`
  )
  .add('Checked without additionnal text', () =>
    `<check-box-card
      checked
      title="People are eyeing this experience."
      text="Free"
    />`
  )
  .add('Unchecked without additionnal text', () =>
    `<check-box-card
      title="People are eyeing this experience."
      text="Free"
    />`
  );


storiesOf("Tip Card", module)
  .add("Default", () =>
    `<tip-card
      image="https://picsum.photos/200/300"
      title="People are eyeing this experience."
      text="12 others are looking at it for these dates."
    />`
  );

storiesOf("Marketing Thumb", module)
  .add("Basic", () =>
    `<marketing-thumb
      image="https://picsum.photos/65/65"
      title="Search and compare"
      text="hundreds of fishing experiences around the world handpicked by Fishtripr."
      />`
  );

