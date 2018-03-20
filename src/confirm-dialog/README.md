Back to [react-confirmation-dialog](../../README.md)

# ConfirmDialog

### Description

A modal popup dialog component with yes/no and an optional third, middle button.

### Dependencies

react-bootstrap

### Initialization

N/A

#### ConfirmDialog

Name | Type | Default | Description
--- | --- | --- | ---
titleText | [element, string] | required | Title to be displayed on top of dialog
bodyText | [element, string] | required | Dialog message to be displayed
cancelCallback | function | required | Callback to function executed on cancel button click
confirmCallback | function | required | Callback to function executed on confirm button click
okButtonText | [element, string] | required | Text to be displayed on the confirm button
okButtonDisabled | bool | false | Disabled status of the confirm button
cancelButtonText | [element, string] | required | Text to be displayed on the cancel button
modalClassName | string | '' | Optional class name for Modal
thirdButtonCallback | function | undefined | Callback to function executed on middle button click
thirdButtonDisabled | bool | false | Disabled status of the middle button
thirdButtonText | [element, string] | undefined | Text to be displayed on the middle button
paintConfirmButtonOrange | bool | true | Determines whether confirm button should be orange
paintThirdButtonOrange | bool | false | Determines whether middle button should be orange
paintCancelButtonOrange | bool | false | Determines whether cancel button should be orange

### Code example

```jsx
import { ConfirmDialog } from '@opuscapita/react-confirmation-dialog';

class ConfirmDialogView extends React.Component {
  constructor() {
    this.state = {
      showConfirmationDialog: false;
    }
  }

  doSomethingElse = () => {}

  hideConfirmDialog = () => {
    this.setState({
      showConfirmationDialog: false
    });
  }

  showConfirmDialog = () => {
    this.setState({
      showConfirmationDialog: true
    });
  }

  render() {
    return (
        this.state.showConfirmationDialog &&
        <ConfirmDialog
          titleText={'Confirmation'}
          bodyText={'Are you certain?'}
          cancelCallback={this.hideConfirmDialog}
          confirmCallback={this.confirmAction}
          thirdButtonCallback={this.doSomethingElse}
          okButtonText={'Yes'}
          cancelButtonText={'No'}
          thirdButtonText={'Perhaps'}
        />
    );
  }
}
```

