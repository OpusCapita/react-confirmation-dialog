# react-confirmation-dialog

### Description
A modal popup dialog component with yes/no and an optional third, middle button.

### Installation
```
npm install @opuscapita/react-confirmation-dialog
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-confirmation-dialog)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name                | Type              | Default         | Description                                           |
| ------------------------ | ----------------- | ----------------| ----------------------------------------------------- |
| id                       | string            | oc-confirm-dialog | String prefix for the HTML ID's                     |
| translations             | object of [string, element] | { ok: 'OK', cancel: 'Cancel', thirdButton: '', title: 'Title', body: 'Body' } | Translation texts |
| cancelCallback           | function          |                 | Callback to function executed on cancel button click  |
| confirmCallback          | function          |                 | Callback to function executed on confirm button click |
| okButtonDisabled         | bool              | false           | Disabled status of the confirm button                 |
| className                | string            | ''              | Optional class name for Modal                         |
| thirdButtonCallback      | function          | undefined       | Callback to function executed on middle button click  |
| thirdButtonDisabled      | bool              | false           | Disabled status of the middle button                  |
| paintConfirmButtonOrange | bool              | true            | Determines whether confirm button should be orange    |
| paintThirdButtonOrange   | bool              | false           | Determines whether middle button should be orange     |
| paintCancelButtonOrange  | bool              | false           | Determines whether cancel button should be orange     |

### Code example
```jsx
import ConfirmDialog from '@opuscapita/react-confirmation-dialog';

class ConfirmDialogView extends React.Component {
  constructor() {
    this.state = {
      showConfirmationDialog: false;
    }
  }

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
          localizationTexts={{
            title: 'Confirmation',
            body: 'Are you sure you want to do this?',
          }}
          cancelCallback={this.hideConfirmDialog}
          confirmCallback={this.confirmAction}
        />
    );
  }
}
```
