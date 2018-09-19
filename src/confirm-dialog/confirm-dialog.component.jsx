import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
import { ThemeProvider } from 'styled-components';

const Button = Primitive.Button.extend`
  margin-left: ${theme.gutterWidth};
`;
Button.displayName = 'Button';

const Footer = Primitive.Block.extend`
  text-align: right;
`;

export default function ConfirmDialog(props) {
  return (
    <ThemeProvider theme={theme}>
      <div id="oc-confirm-dialog" >
        <Modal
          dialogClassName={props.modalClassName}
          enforceFocus={false}
          show
        >
          <Primitive.Block>
            <Primitive.Subtitle>{props.titleText}</Primitive.Subtitle>
          </Primitive.Block>
          <Primitive.Block id="oc-confirm-dialog-body">
            {props.bodyText}
          </Primitive.Block>
          <Footer>
            {props.confirmCallback &&
              <Button
                id="dialog-confirm-button"
                primary={props.paintConfirmButtonOrange}
                disabled={props.okButtonDisabled}
                onClick={props.confirmCallback}
              >
                {props.okButtonText}
              </Button>
            }
            {props.thirdButtonCallback &&
              <Button
                id="dialog-third-button"
                primary={props.paintThirdButtonOrange}
                disabled={props.thirdButtonDisabled}
                onClick={props.thirdButtonCallback}
              >
                {props.thirdButtonText}
              </Button>
            }
            {props.cancelCallback && <Button
              id="dialog-cancel-button"
              primary={props.paintCancelButtonOrange}
              onClick={props.cancelCallback}
            >
              {props.cancelButtonText}
            </Button>}
          </Footer>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

ConfirmDialog.propTypes = {
  titleText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  bodyText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  cancelCallback: PropTypes.func,
  confirmCallback: PropTypes.func,
  okButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  cancelButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  modalClassName: PropTypes.string,
  okButtonDisabled: PropTypes.bool,
  thirdButtonCallback: PropTypes.func,
  thirdButtonDisabled: PropTypes.bool,
  thirdButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  paintConfirmButtonOrange: PropTypes.bool,
  paintCancelButtonOrange: PropTypes.bool,
  paintThirdButtonOrange: PropTypes.bool,
};

ConfirmDialog.defaultProps = {
  modalClassName: '',
  okButtonDisabled: false,
  thirdButtonCallback: undefined,
  thirdButtonDisabled: false,
  thirdButtonText: undefined,
  paintConfirmButtonOrange: true,
  paintCancelButtonOrange: false,
  paintThirdButtonOrange: false,
  cancelCallback: undefined,
  confirmCallback: undefined,
  okButtonText: undefined,
  cancelButtonText: undefined,
};
