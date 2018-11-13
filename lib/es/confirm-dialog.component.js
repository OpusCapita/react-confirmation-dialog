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
          { id: id + '-body' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTW9kYWwiLCJQcmltaXRpdmUiLCJ0aGVtZSIsInN0eWxlZCIsIlRoZW1lUHJvdmlkZXIiLCJCdXR0b24iLCJndXR0ZXJXaWR0aCIsImRpc3BsYXlOYW1lIiwiZG91YmxlR3V0dGVyV2lkdGgiLCJIZWFkZXIiLCJkaXYiLCJCb2R5IiwiRm9vdGVyIiwiQ29uZmlybURpYWxvZyIsInJlbmRlciIsInByb3BzIiwiaWQiLCJ0cmFuc2xhdGlvbnMiLCJjbGFzc05hbWUiLCJjb25maXJtQ2FsbGJhY2siLCJwYWludENvbmZpcm1CdXR0b25PcmFuZ2UiLCJva0J1dHRvbkRpc2FibGVkIiwidGhpcmRCdXR0b25DYWxsYmFjayIsInBhaW50VGhpcmRCdXR0b25PcmFuZ2UiLCJ0aGlyZEJ1dHRvbkRpc2FibGVkIiwiY2FuY2VsQ2FsbGJhY2siLCJwYWludENhbmNlbEJ1dHRvbk9yYW5nZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidGl0bGUiLCJib2R5Iiwib2siLCJ0aGlyZEJ1dHRvbiIsImNhbmNlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsaUJBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsS0FBcEIsUUFBaUMsa0NBQWpDO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsUUFBc0MsbUJBQXRDOztBQUVBLElBQU1DLFNBQVNGLE9BQU9GLFVBQVVJLE1BQWpCLENBQVQsa0JBQ1dILE1BQU1JLFdBRGpCLENBQU47QUFHQUQsT0FBT0UsV0FBUCxHQUFxQixRQUFyQjs7QUFFQSxJQUFNQyxrQ0FBZ0NOLE1BQU1J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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFByaW1pdGl2ZSwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChQcmltaXRpdmUuQnV0dG9uKWBcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuXG5jb25zdCBkb3VibGVHdXR0ZXJXaWR0aCA9IGBjYWxjKDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSlgO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke2RvdWJsZUd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofSAke3RoZW1lLmd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29uZmlybUNhbGxiYWNrLFxuICAgICAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlLFxuICAgICAgb2tCdXR0b25EaXNhYmxlZCxcbiAgICAgIHRoaXJkQnV0dG9uQ2FsbGJhY2ssXG4gICAgICBwYWludFRoaXJkQnV0dG9uT3JhbmdlLFxuICAgICAgdGhpcmRCdXR0b25EaXNhYmxlZCxcbiAgICAgIGNhbmNlbENhbGxiYWNrLFxuICAgICAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBkaWFsb2dDbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBlbmZvcmNlRm9jdXM9e2ZhbHNlfVxuICAgICAgICAgIHNob3dcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgPFByaW1pdGl2ZS5UaXRsZSBpZD17YCR7aWR9LXRpdGxlYH0+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMudGl0bGV9XG4gICAgICAgICAgICA8L1ByaW1pdGl2ZS5UaXRsZT5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICA8Qm9keSBpZD17YCR7aWR9LWJvZHlgfT5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYm9keX1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIHtjb25maXJtQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0tY29uZmlybS1idXR0b25gfVxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q29uZmlybUJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17b2tCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25maXJtQ2FsbGJhY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLm9rfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHt0aGlyZEJ1dHRvbkNhbGxiYWNrICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD17YCR7aWR9LXRoaXJkLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRUaGlyZEJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcmRCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlyZEJ1dHRvbkNhbGxiYWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy50aGlyZEJ1dHRvbn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Y2FuY2VsQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0tY2FuY2VsLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRDYW5jZWxCdXR0b25PcmFuZ2V9XG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQ2FsbGJhY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLmNhbmNlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuQ29uZmlybURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGJvZHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgdGhpcmRCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH0pLFxuICBjYW5jZWxDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbmZpcm1DYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb2tCdXR0b25EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRoaXJkQnV0dG9uQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0aGlyZEJ1dHRvbkRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBwYWludFRoaXJkQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbmZpcm1EaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICBpZDogJ29jLWNvbmZpcm0tZGlhbG9nJyxcbiAgdHJhbnNsYXRpb25zOiB7XG4gICAgb2s6ICdPaycsXG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICB0aXRsZTogJ1RpdGxlJyxcbiAgICBib2R5OiAnQm9keScsXG4gICAgdGhpcmRCdXR0b246ICcnLFxuICB9LFxuICBjbGFzc05hbWU6ICcnLFxuICBva0J1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgdGhpcmRCdXR0b25DYWxsYmFjazogdW5kZWZpbmVkLFxuICB0aGlyZEJ1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlOiB0cnVlLFxuICBwYWludENhbmNlbEJ1dHRvbk9yYW5nZTogZmFsc2UsXG4gIHBhaW50VGhpcmRCdXR0b25PcmFuZ2U6IGZhbHNlLFxuICBjYW5jZWxDYWxsYmFjazogdW5kZWZpbmVkLFxuICBjb25maXJtQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbn07XG4iXX0=