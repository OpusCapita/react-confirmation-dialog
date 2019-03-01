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
  padding: ${theme.gutterWidth} ${doubleGutterWidth} ${doubleGutterWidth} ${doubleGutterWidth};
  display:flex;
  justify-content: flex-end;
`;

const ButtonContainer = styled.div`

`;
const FooterContent = styled.div`
  flex: 1;
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
      footerContent,
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Modal
          id={id}
          dialogClassName={className}
          enforceFocus={false}
          show
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Header>
            <Primitive.Title id={`${id}-title`}>
              {translations.title}
            </Primitive.Title>
          </Header>
          <Body id={`${id}-body`} className="modal-body">
          {translations.body}
          </Body>
          <Footer>
            {footerContent && <FooterContent>{footerContent}</FooterContent>}
            <ButtonContainer>
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
            </ButtonContainer>
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
  footerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
  footerContent: undefined,
};
