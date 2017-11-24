import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

export default function ConfirmDialog(props) {
  return (
    <div id="oc-confirm-dialog" >
      <Modal show>
        <Modal.Header>
          <Modal.Title>{props.titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="oc-confirm-dialog-body">
          {props.bodyText}
        </Modal.Body>
        <Modal.Footer>
          <Button id="confirm-button" bsStyle="primary" onClick={props.confirmCallback}>
            {props.okButtonText}
          </Button>
          {props.thirdButtonCallback && <Button id="third-button" onClick={props.thirdButtonCallback}>
            {props.thirdButtonText}
          </Button>
          }
          <Button id="cancel-button" onClick={props.cancelCallback}>
            {props.cancelButtonText}
          </Button>
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
  cancelCallback: PropTypes.func.isRequired,
  confirmCallback: PropTypes.func.isRequired,
  thirdButtonCallback: PropTypes.func,
  okButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  cancelButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  thirdButtonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

ConfirmDialog.defaultProps = {
  thirdButtonCallback: undefined,
  thirdButtonText: undefined,
};
