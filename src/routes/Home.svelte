<div class="card-container">
      <Card style="width: 360px;">
        <PrimaryAction on:click={() => clicked++}>
          <Media class="card-media-16x9" aspectRatio="16x9"></Media>
          <Content class="mdc-typography--body2">
            <h2 class="mdc-typography--headline6" style="margin: 0;">A card with media.</h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">And a subtitle.</h3>
            It's all in this card. It's a veritable smorgasbord of card features.
          </Content>
        </PrimaryAction>
        <Actions>
          <ActionButtons>
            <Button on:click={() => clicked++}>
              <Label>Action</Label>
            </Button>
            <Button on:click={() => clicked++}>
              <Label>Another</Label>
            </Button>
          </ActionButtons>
          <ActionIcons>
            <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
              <Icon class="material-icons" on>favorite</Icon>
              <Icon class="material-icons">favorite_border</Icon>
            </IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="Share">share</IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="More options">more_vert</IconButton>
          </ActionIcons>
        </Actions>
      </Card>
    </div>

    <div>
    <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
      <!-- Notice that the `tab` property is required! -->
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>

    <div style="margin-top: 15px;">
      Programmatically select:
      {#each ['Home', 'Merchandise', 'About Us'] as tab}
        <Button on:click={() => active = tab}><Label>{tab}</Label></Button>
      {/each}
    </div>

    <pre class="status">Selected: {active}</pre>
  </div>

<script>
  import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
  import Button, {Label} from '@smui/button';
  import IconButton, {Icon} from '@smui/icon-button';
  import List, {Item, Text} from '@smui/list';
  import Tab from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  let active = 'Home';
  let clicked = 0;
</script>