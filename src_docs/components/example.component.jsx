import React from 'react';
import { Button } from 'react-bootstrap';
import ConfirmDialog from '../../src/index';

const firstDialogTranslations = {
  title: 'Confirmation',
  body: 'Do you want to show another dialog?',
  ok: 'OK',
  cancel: 'Cancel',
};

const secondDialogTranslations = {
  title: 'Validation errors',
  body: 'Cancel is deliberately orange. There\'s no confirmation button.',
  thirdButton: 'Open previous dialog',
  cancel: 'Cancel',
};

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showFirst: false,
      showSecond: false,
    };
  }

  getFirstDialog = () => (
    <ConfirmDialog
      id="first-dialog"
      translations={firstDialogTranslations}
      cancelCallback={this.hideDialogs}
      confirmCallback={this.switchDialogs}
    />
  )

  getSecondDialog = () => (
    <ConfirmDialog
      id="second-dialog"
      translations={secondDialogTranslations}
      okButtonDisabled
      cancelCallback={this.hideDialogs}
      thirdButtonCallback={this.switchDialogs}
      paintCancelButtonOrange
    />
  )

  switchDialogs = () => {
    this.setState({
      showFirst: this.state.showSecond,
      showSecond: this.state.showFirst,
    });
  }

  hideDialogs = () => {
    this.setState({
      showFirst: false,
      showSecond: false,
    });
  }

  showDialog = () => {
    this.setState({
      showFirst: true,
      showSecond: false,
    });
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        { this.state.showFirst && this.getFirstDialog() }
        { this.state.showSecond && this.getSecondDialog() }
        <Button onClick={this.showDialog}>Show dialog</Button>
      </div>
    );
  }
}
