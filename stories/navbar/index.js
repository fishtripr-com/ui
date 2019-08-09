import { storiesOf } from '@storybook/vue';

storiesOf('Navbar', module)
  .add(
    'Light',
    () =>
    `<navbar 
      theme="light"
      logoUrl="https://picsum.photos/150/80">

        <template #body>
          <navigation
            :items="[{id:0, 'path':'/aaa', 'label':'Home'},
              {id:1, 'path':'/bbb', 'label':'About'},
              {id:2, 'path':'/ccc', 'label':'Contact'},
              {id:3, 'path':'/ddd', 'label':'Information'}]"
          />
        </template>

        <template #actions>
          <user-navbar-card
            avatar="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
            user-first-name="Max"
            user-role="Fishing Guide"
          />
        </template>

      </navbar>`
  )
  // .add('Navbar Dark', () =>
  //   `<navbar 
  //   theme="dark"
  //     logo="https://s3.eu-west-3.amazonaws.com/fishtripr-prod-offer-pics/images/logos/fishtripr-manager-only-manager-logo_white.png">
  //       <template #body>
  //       <navigation-menu 
  //       isSmallScreenMode
  //       :list="[{id:0, 'path':'/aaa', 'label':'Home'},
  //         {id:1, 'path':'/bbb', 'label':'About'},
  //         {id:2, 'path':'/ccc', 'label':'Contact'},
  //         {id:3, 'path':'/ddd', 'label':'Information'}]"
  //     />
  //     </template>
  //       <template #action>
  //         <user-navbar-card
  //           avatar="https://s.gravatar.com/avatar/a3895a2d6f26155968be47fc03dddc40?s=80"
  //           user-first-name="Max"
  //           user-role="Fishing Guide"
  //         />
  //       </template>
  //     </navbar>`
  // );
 
