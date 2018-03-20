import React from 'react';
import { ConfirmDialog } from '../../src/index';

export default class ConfirmDialogView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmationDialog: true,
      showFirstDialog: true,
    };
  }

  getAppropriateDialog = () => (
    this.state.showFirstDialog ?
      this.getFirstDialog() :
      this.getSecondDialog()
  )

  getFirstDialog = () => (
    <ConfirmDialog
      titleText="Confirmation"
      bodyText="Do you want to show another dialog?"
      okButtonText="OK"
      cancelButtonText="Cancel"
      cancelCallback={this.hideConfirmDialog}
      confirmCallback={this.switchDialogs}
    />
  )

  getSecondDialog = () => (
    <ConfirmDialog
      titleText="Validation errors"
      bodyText="Cancel is deliberately orange. There's no confirmation button."
      okButtonDisabled
      thirdButtonText="Open previous dialog"
      cancelButtonText="Cancel"
      cancelCallback={this.hideConfirmDialog}
      thirdButtonCallback={this.switchDialogs}
      paintCancelButtonOrange
    />
  )

  switchDialogs = () => {
    if (this.state.showFirstDialog) {
      this.setState({ showFirstDialog: false });
      this.setState({ showSecondDialog: true });
    } else {
      this.setState({ showFirstDialog: true });
      this.setState({ showSecondDialog: false });
    }
  }

  hideConfirmDialog = () => {
    this.setState({
      showConfirmationDialog: false,
    });
  }

  render() {
    return (
      <div>
        { this.state.showConfirmationDialog && this.getAppropriateDialog() }
      </div>
    );
  }
}

