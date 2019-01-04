var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ' ', ' ', ';\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ';\n'], ['\n  padding: ', ' ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  text-align: right;\n  padding: ', ' ', ' ', ' ', ';\n'], ['\n  text-align: right;\n  padding: ', ' ', ' ', ' ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
import styled, { ThemeProvider } from 'styled-components';

var Button = styled(Primitive.Button)(_templateObject, theme.gutterWidth);
Button.displayName = 'Button';

var doubleGutterWidth = 'calc(2 * ' + theme.gutterWidth + ')';

var Header = styled.div(_templateObject2, doubleGutterWidth, doubleGutterWidth, theme.gutterWidth, doubleGutterWidth);

var Body = styled.div(_templateObject3, theme.gutterWidth, doubleGutterWidth);

var Footer = styled.div(_templateObject4, theme.gutterWidth, doubleGutterWidth, doubleGutterWidth, doubleGutterWidth);

var ConfirmDialog = function (_React$PureComponent) {
  _inherits(ConfirmDialog, _React$PureComponent);

  function ConfirmDialog() {
    _classCallCheck(this, ConfirmDialog);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ConfirmDialog.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        translations = _props.translations,
        className = _props.className,
        confirmCallback = _props.confirmCallback,
        paintConfirmButtonOrange = _props.paintConfirmButtonOrange,
        okButtonDisabled = _props.okButtonDisabled,
        thirdButtonCallback = _props.thirdButtonCallback,
        paintThirdButtonOrange = _props.paintThirdButtonOrange,
        thirdButtonDisabled = _props.thirdButtonDisabled,
        cancelCallback = _props.cancelCallback,
        paintCancelButtonOrange = _props.paintCancelButtonOrange;

    return React.createElement(
      ThemeProvider,
      { theme: theme },
      React.createElement(
        Modal,
        {
          id: id,
          dialogClassName: className,
          enforceFocus: false,
          show: true,
          style: { display: 'flex', alignItems: 'center' }
        },
        React.createElement(
          Header,
          null,
          React.createElement(
            Primitive.Title,
            { id: id + '-title' },
            translations.title
          )
        ),
        React.createElement(
          Body,
          { id: id + '-body', className: 'modal-body' },
          translations.body
        ),
        React.createElement(
          Footer,
          null,
          confirmCallback && React.createElement(
            Button,
            {
              id: id + '-confirm-button',
              primary: paintConfirmButtonOrange,
              disabled: okButtonDisabled,
              onClick: confirmCallback
            },
            translations.ok
          ),
          thirdButtonCallback && React.createElement(
            Button,
            {
              id: id + '-third-button',
              primary: paintThirdButtonOrange,
              disabled: thirdButtonDisabled,
              onClick: thirdButtonCallback
            },
            translations.thirdButton
          ),
          cancelCallback && React.createElement(
            Button,
            {
              id: id + '-cancel-button',
              primary: paintCancelButtonOrange,
              onClick: cancelCallback
            },
            translations.cancel
          )
        )
      )
    );
  };

  return ConfirmDialog;
}(React.PureComponent);

export { ConfirmDialog as default };


ConfirmDialog.defaultProps = {
  id: 'oc-confirm-dialog',
  translations: {
    ok: 'Ok',
    cancel: 'Cancel',
    title: 'Title',
    body: 'Body',
    thirdButton: ''
  },
  className: '',
  okButtonDisabled: false,
  thirdButtonCallback: undefined,
  thirdButtonDisabled: false,
  paintConfirmButtonOrange: true,
  paintCancelButtonOrange: false,
  paintThirdButtonOrange: false,
  cancelCallback: undefined,
  confirmCallback: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTW9kYWwiLCJQcmltaXRpdmUiLCJ0aGVtZSIsInN0eWxlZCIsIlRoZW1lUHJvdmlkZXIiLCJCdXR0b24iLCJndXR0ZXJXaWR0aCIsImRpc3BsYXlOYW1lIiwiZG91YmxlR3V0dGVyV2lkdGgiLCJIZWFkZXIiLCJkaXYiLCJCb2R5IiwiRm9vdGVyIiwiQ29uZmlybURpYWxvZyIsInJlbmRlciIsInByb3BzIiwiaWQiLCJ0cmFuc2xhdGlvbnMiLCJjbGFzc05hbWUiLCJjb25maXJtQ2FsbGJhY2siLCJwYWludENvbmZpcm1CdXR0b25PcmFuZ2UiLCJva0J1dHRvbkRpc2FibGVkIiwidGhpcmRCdXR0b25DYWxsYmFjayIsInBhaW50VGhpcmRCdXR0b25PcmFuZ2UiLCJ0aGlyZEJ1dHRvbkRpc2FibGVkIiwiY2FuY2VsQ2FsbGJhY2siLCJwYWludENhbmNlbEJ1dHRvbk9yYW5nZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidGl0bGUiLCJib2R5Iiwib2siLCJ0aGlyZEJ1dHRvbiIsImNhbmNlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsaUJBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsS0FBcEIsUUFBaUMsa0NBQWpDO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsUUFBc0MsbUJBQXRDOztBQUVBLElBQU1DLFNBQVNGLE9BQU9GLFVBQVVJLE1BQWpCLENBQVQsa0JBQ1dILE1BQU1JLFdBRGpCLENBQU47QUFHQUQsT0FBT0UsV0FBUCxHQUFxQixRQUFyQjs7QUFFQSxJQUFNQyxrQ0FBZ0NOLE1BQU1J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cG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKFByaW1pdGl2ZS5CdXR0b24pYFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5cbmNvbnN0IGRvdWJsZUd1dHRlcldpZHRoID0gYGNhbGMoMiAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KWA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6ICR7ZG91YmxlR3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybURpYWxvZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb25maXJtQ2FsbGJhY2ssXG4gICAgICBwYWludENvbmZpcm1CdXR0b25PcmFuZ2UsXG4gICAgICBva0J1dHRvbkRpc2FibGVkLFxuICAgICAgdGhpcmRCdXR0b25DYWxsYmFjayxcbiAgICAgIHBhaW50VGhpcmRCdXR0b25PcmFuZ2UsXG4gICAgICB0aGlyZEJ1dHRvbkRpc2FibGVkLFxuICAgICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgICBwYWludENhbmNlbEJ1dHRvbk9yYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIGVuZm9yY2VGb2N1cz17ZmFsc2V9XG4gICAgICAgICAgc2hvd1xuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8UHJpbWl0aXZlLlRpdGxlIGlkPXtgJHtpZH0tdGl0bGVgfT5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy50aXRsZX1cbiAgICAgICAgICAgIDwvUHJpbWl0aXZlLlRpdGxlPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgIDxCb2R5IGlkPXtgJHtpZH0tYm9keWB9IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYm9keX1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIHtjb25maXJtQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0tY29uZmlybS1idXR0b25gfVxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q29uZmlybUJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17b2tCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25maXJtQ2FsbGJhY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLm9rfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHt0aGlyZEJ1dHRvbkNhbGxiYWNrICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD17YCR7aWR9LXRoaXJkLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRUaGlyZEJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcmRCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlyZEJ1dHRvbkNhbGxiYWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy50aGlyZEJ1dHRvbn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Y2FuY2VsQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0tY2FuY2VsLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRDYW5jZWxCdXR0b25PcmFuZ2V9XG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQ2FsbGJhY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLmNhbmNlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuQ29uZmlybURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGJvZHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgdGhpcmRCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH0pLFxuICBjYW5jZWxDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbmZpcm1DYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb2tCdXR0b25EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRoaXJkQnV0dG9uQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0aGlyZEJ1dHRvbkRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBwYWludFRoaXJkQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbmZpcm1EaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICBpZDogJ29jLWNvbmZpcm0tZGlhbG9nJyxcbiAgdHJhbnNsYXRpb25zOiB7XG4gICAgb2s6ICdPaycsXG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICB0aXRsZTogJ1RpdGxlJyxcbiAgICBib2R5OiAnQm9keScsXG4gICAgdGhpcmRCdXR0b246ICcnLFxuICB9LFxuICBjbGFzc05hbWU6ICcnLFxuICBva0J1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgdGhpcmRCdXR0b25DYWxsYmFjazogdW5kZWZpbmVkLFxuICB0aGlyZEJ1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlOiB0cnVlLFxuICBwYWludENhbmNlbEJ1dHRvbk9yYW5nZTogZmFsc2UsXG4gIHBhaW50VGhpcmRCdXR0b25PcmFuZ2U6IGZhbHNlLFxuICBjYW5jZWxDYWxsYmFjazogdW5kZWZpbmVkLFxuICBjb25maXJtQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbn07XG4iXX0=