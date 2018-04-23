import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

export default function ConfirmDialog(props) {
  return (
    <div id="oc-confirm-dialog" >
      <Modal
        dialogClassName={props.modalClassName}
        enforceFocus={false}
        show
      >
        <Modal.Header>
          <Modal.Title>{props.titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="oc-confirm-dialog-body">
          {props.bodyText}
        </Modal.Body>
        <Modal.Footer>
          {props.confirmCallback &&
            <Button
              id="dialog-confirm-button"
              bsStyle={props.paintConfirmButtonOrange ? 'primary' : 'default'}
              disabled={props.okButtonDisabled}
              onClick={props.confirmCallback}
            >
              {props.okButtonText}
            </Button>
          }
          {props.thirdButtonCallback &&
            <Button
              id="dialog-third-button"
              bsStyle={props.paintThirdButtonOrange ? 'primary' : 'default'}
              disabled={props.thirdButtonDisabled}
              onClick={props.thirdButtonCallback}
            >
              {props.thirdButtonText}
            </Button>
          }
          {props.cancelCallback && <Button
            id="dialog-cancel-button"
            bsStyle={props.paintCancelButtonOrange ? 'primary' : 'default'}
            onClick={props.cancelCallback}
          >
            {props.cancelButtonText}
          </Button>}
        </Modal.Footer>
      </Modal>
    </div>
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
