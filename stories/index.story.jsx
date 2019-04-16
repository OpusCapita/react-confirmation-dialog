import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';
// Application
import './scss/app.component.scss';
import ConfirmationDialog from '../src/confirm-dialog.component';

/* eslint-disable no-alert */
/* eslint-disable no-console */
const stories = storiesOf('@opuscapita/react-confirmation-dialog', module);

const confirmCb = () => alert('Confirm clicked');
const cancelCb = () => alert('Cancel clicked');
const thirdBtnCb = () => alert('Third button clicked');

stories.add('React Confirmation Dialog', () => {
  const translations = {
    ok: 'OK',
    cancel: 'Cancel',
    thirdButton: 'Demo',
    title: 'Title',
    body: 'Body (these can be either string or node)',
  };

  const knobs = {
    translations: object('Translations', translations),
    okButtonDisabled: boolean('Confirm disabled', false),
    thirdButtonDisabled: boolean('3rd button disabled', false),
    paintConfirmButtonOrange: boolean('Confirm as primary button', true),
    paintThirdButtonOrange: boolean('3rd button as primary button', false),
    paintCancelButtonOrange: boolean('Cancel button as primary button', false),
    footerContent: text('Footer content', undefined),
  };

  return (
    <ConfirmationDialog
      id="demo"
      confirmCallback={confirmCb}
      cancelCallback={cancelCb}
      thirdButtonCallback={thirdBtnCb}
      {...knobs}
    />
  );
});
