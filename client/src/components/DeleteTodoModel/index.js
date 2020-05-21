import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default (props) => (
  <Modal
    // what do you want this button to look like 
    trigger={<Button color='red' content='Delete' size='small' />}
    // a simple modal with limited functionality
    basic

  >
    <Header icon='archive' content='Delete this Todo' />
    <Modal.Content>
      <p>Are you sure you want to delete this todo?</p>
      <p>{props.text}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button fluid negative>
        <Icon name='remove'/> Are you sure you want to delete
      </Button>
    </Modal.Actions>
  </Modal>
);
