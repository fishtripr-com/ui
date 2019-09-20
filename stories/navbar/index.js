import { storiesOf } from '@storybook/vue'

storiesOf('Navbar', module)
  .add(
    'Light',
    () =>
      `<navbar 
      theme="light"
      logoUrl="https://picsum.photos/150/80">

        <template #body="{theme}">
          <navigation
            :theme="theme"
            :items="[{id:0, 'path':'/aaa', 'label':'Home'},
              {id:1, 'path':'/bbb', 'label':'About'},
              {id:2, 'path':'/ccc', 'label':'Contact'},
              {id:3, 'path':'/ddd', 'label':'Information'}]"
          />
        </template>

        <template #actions="{theme}">
          <user-navbar-card
            :theme="theme"
            avatar="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
            user-first-name="Max"
            user-role="Fishing Guide"
          />
        </template>

      </navbar>`,
  )
  .add(
    'Dark',
    () =>
      `<navbar 
      theme="dark"
      logoUrl="https://picsum.photos/150/80">

        <template #body="{theme}">
          <navigation
            :theme="theme"
            :items="[{id:0, 'path':'/aaa', 'label':'Home'},
              {id:1, 'path':'/bbb', 'label':'About'},
              {id:2, 'path':'/ccc', 'label':'Contact'},
              {id:3, 'path':'/ddd', 'label':'Information'}]"
          />
        </template>

        <template #actions="{theme}">
          <user-navbar-card
            :theme="theme"
            avatar="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
            user-first-name="Max"
            user-role="Fishing Guide"
          />
        </template>

      </navbar>`,
  )
  .add(
    'Premium',
    () =>
      `<navbar 
      theme="premium"
      logoUrl="https://picsum.photos/150/80">

        <template #body="{theme}">
          <navigation
            :theme="theme"
            :items="[{id:0, 'path':'/aaa', 'label':'Home'},
              {id:1, 'path':'/bbb', 'label':'About'},
              {id:2, 'path':'/ccc', 'label':'Contact'},
              {id:3, 'path':'/ddd', 'label':'Information'}]"
          />
        </template>

        <template #actions="{theme}">
          <user-navbar-card
            :theme="theme"
            avatar="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
            user-first-name="Max"
            user-role="Fishing Guide"
          />
        </template>

      </navbar>`,
  )
