import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled(Primitive.Button)`
  margin-left: ${theme.gutterWidth};
`;
Button.displayName = 'Button';

const doubleGutterWidth = `calc(2 * ${theme.gutterWidth})`;

const Header = styled.div`
  padding: ${doubleGutterWidth} ${doubleGutterWidth} ${theme.gutterWidth} ${doubleGutterWidth};
`;

const Body = styled.div`
  padding: ${theme.gutterWidth} ${doubleGutterWidth};
`;

const Footer = styled.div`
  text-align: right;
  padding: ${theme.gutterWidth} ${doubleGutterWidth} ${doubleGutterWidth} ${doubleGutterWidth};
`;

export default class ConfirmDialog extends React.PureComponent {
  render() {
    const {
      id,
      translations,
      className,
      confirmCallback,
      paintConfirmButtonOrange,
      okButtonDisabled,
      thirdButtonCallback,
      paintThirdButtonOrange,
      thirdButtonDisabled,
      cancelCallback,
      paintCancelButtonOrange,
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Modal
          id={id}
          dialogClassName={className}
          enforceFocus={false}
          show
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Header>
            <Primitive.Title id={`${id}-title`}>
              {translations.title}
            </Primitive.Title>
          </Header>
          <Body id={`${id}-body`}>
            {translations.body}
          </Body>
          <Footer>
            {confirmCallback &&
              <Button
                id={`${id}-confirm-button`}
                primary={paintConfirmButtonOrange}
                disabled={okButtonDisabled}
                onClick={confirmCallback}
              >
                {translations.ok}
              </Button>
            }
            {thirdButtonCallback &&
              <Button
                id={`${id}-third-button`}
                primary={paintThirdButtonOrange}
                disabled={thirdButtonDisabled}
                onClick={thirdButtonCallback}
              >
                {translations.thirdButton}
              </Button>
            }
            {cancelCallback &&
              <Button
                id={`${id}-cancel-button`}
                primary={paintCancelButtonOrange}
                onClick={cancelCallback}
              >
                {translations.cancel}
              </Button>}
          </Footer>
        </Modal>
      </ThemeProvider>
    );
  }
}

ConfirmDialog.propTypes = {
  id: PropTypes.string,
  translations: PropTypes.shape({
    ok: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    cancel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    thirdButton: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  cancelCallback: PropTypes.func,
  confirmCallback: PropTypes.func,
  className: PropTypes.string,
  okButtonDisabled: PropTypes.bool,
  thirdButtonCallback: PropTypes.func,
  thirdButtonDisabled: PropTypes.bool,
  paintConfirmButtonOrange: PropTypes.bool,
  paintCancelButtonOrange: PropTypes.bool,
  paintThirdButtonOrange: PropTypes.bool,
};

ConfirmDialog.defaultProps = {
  id: 'oc-confirm-dialog',
  translations: {
    ok: 'Ok',
    cancel: 'Cancel',
    title: 'Title',
    body: 'Body',
    thirdButton: '',
  },
  className: '',
  okButtonDisabled: false,
  thirdButtonCallback: undefined,
  thirdButtonDisabled: false,
  paintConfirmButtonOrange: true,
  paintCancelButtonOrange: false,
  paintThirdButtonOrange: false,
  cancelCallback: undefined,
  confirmCallback: undefined,
};
