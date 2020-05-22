import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
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

const FooterContent = styled.div`
  background: #f0f0f0;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 0 1rem;
`;

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
  );

  getSecondDialog = () => (
    <ConfirmDialog
      id="second-dialog"
      translations={secondDialogTranslations}
      okButtonDisabled
      cancelCallback={this.hideDialogs}
      thirdButtonCallback={this.switchDialogs}
      paintCancelButtonOrange
      footerContent={<FooterContent>Some extra content via footerContent prop</FooterContent>}
    />
  );

  switchDialogs = () => {
    this.setState((prevState) => ({
      showFirst: prevState.showSecond,
      showSecond: prevState.showFirst,
    }));
  };

  hideDialogs = () => {
    this.setState({
      showFirst: false,
      showSecond: false,
    });
  };

  showDialog = () => {
    this.setState({
      showFirst: true,
      showSecond: false,
    });
  };

  render() {
    const {
      showFirst,
      showSecond,
    } = this.state;
    return (
      <div style={{ padding: '20px' }}>
        {showFirst && this.getFirstDialog()}
        {showSecond && this.getSecondDialog()}
        <Button onClick={this.showDialog}>Show dialog</Button>
      </div>
    );
  }
}
