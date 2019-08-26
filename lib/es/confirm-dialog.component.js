var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ' ', ' ', ';\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  && {\n    padding: ', ' ', ';\n  }\n'], ['\n  && {\n    padding: ', ' ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  padding: ', ';\n  display: flex;\n  justify-content: flex-end;\n'], ['\n  padding: ', ';\n  display: flex;\n  justify-content: flex-end;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  flex: 1;\n'], ['\n  flex: 1;\n']);

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

var Footer = styled.div(_templateObject4, function (props) {
  return props.isFooterEmpty ? theme.gutterWidth + ' 0 0' : theme.gutterWidth + ' ' + doubleGutterWidth + ' ' + doubleGutterWidth + ' ' + doubleGutterWidth;
});

var FooterContent = styled.div(_templateObject5);

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
        paintCancelButtonOrange = _props.paintCancelButtonOrange,
        footerContent = _props.footerContent;

    var isFooterEmpty = !footerContent && !confirmCallback && !thirdButtonCallback && !cancelCallback;
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
          { isFooterEmpty: isFooterEmpty },
          footerContent && React.createElement(
            FooterContent,
            null,
            footerContent
          ),
          React.createElement(
            'div',
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
  confirmCallback: undefined,
  footerContent: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTW9kYWwiLCJQcmltaXRpdmUiLCJ0aGVtZSIsInN0eWxlZCIsIlRoZW1lUHJvdmlkZXIiLCJCdXR0b24iLCJndXR0ZXJXaWR0aCIsImRpc3BsYXlOYW1lIiwiZG91YmxlR3V0dGVyV2lkdGgiLCJIZWFkZXIiLCJkaXYiLCJCb2R5IiwiRm9vdGVyIiwicHJvcHMiLCJpc0Zvb3RlckVtcHR5IiwiRm9vdGVyQ29udGVudCIsIkNvbmZpcm1EaWFsb2ciLCJyZW5kZXIiLCJpZCIsInRyYW5zbGF0aW9ucyIsImNsYXNzTmFtZSIsImNvbmZpcm1DYWxsYmFjayIsInBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZSIsIm9rQnV0dG9uRGlzYWJsZWQiLCJ0aGlyZEJ1dHRvbkNhbGxiYWNrIiwicGFpbnRUaGlyZEJ1dHRvbk9yYW5nZSIsInRoaXJkQnV0dG9uRGlzYWJsZWQiLCJjYW5jZWxDYWxsYmFjayIsInBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlIiwiZm9vdGVyQ29udGVudCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidGl0bGUiLCJib2R5Iiwib2siLCJ0aGlyZEJ1dHRvbiIsImNhbmNlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsWUFBMUI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGlCQUF0QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLEtBQXBCLFFBQWlDLGtDQUFqQztBQUNBLE9BQU9DLE1BQVAsSUFBaUJDLGFBQWpCLFFBQXNDLG1CQUF0Qzs7QUFFQSxJQUFNQyxTQUFTRixPQUFPRixVQUFVSSxNQUFqQixDQUFULGtCQUNXSCxNQUFNSSxXQURqQixDQUFOO0FBR0FE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R0FBNkI7QUFDM0JwQixNQUFJLG1CQUR1QjtBQUUzQkMsZ0JBQWM7QUFDWmUsUUFBSSxJQURRO0FBRVpFLFlBQVEsUUFGSTtBQUdaSixXQUFPLE9BSEs7QUFJWkMsVUFBTSxNQUpNO0FBS1pFLGlCQUFhO0FBTEQsR0FGYTtBQVMzQmYsYUFBVyxFQVRnQjtBQVUzQkcsb0JBQWtCLEtBVlM7QUFXM0JDLHVCQUFxQmUsU0FYTTtBQVkzQmIsdUJBQXFCLEtBWk07QUFhM0JKLDRCQUEwQixJQWJDO0FBYzNCTSwyQkFBeUIsS0FkRTtBQWUzQkgsMEJBQXdCLEtBZkc7QUFnQjNCRSxrQkFBZ0JZLFNBaEJXO0FBaUIzQmxCLG1CQUFpQmtCLFNBakJVO0FBa0IzQlYsaUJBQWVVO0FBbEJZLENBQTdCIiwiZmlsZSI6ImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IFByaW1pdGl2ZSwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChQcmltaXRpdmUuQnV0dG9uKWBcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuXG5jb25zdCBkb3VibGVHdXR0ZXJXaWR0aCA9IGBjYWxjKDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSlgO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke2RvdWJsZUd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofSAke3RoZW1lLmd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxuICAmJiB7XG4gICAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG4gIH1cbmA7XG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gKHByb3BzLmlzRm9vdGVyRW1wdHlcbiAgICA/IGAke3RoZW1lLmd1dHRlcldpZHRofSAwIDBgXG4gICAgOiBgJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH1gKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5jb25zdCBGb290ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29uZmlybUNhbGxiYWNrLFxuICAgICAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlLFxuICAgICAgb2tCdXR0b25EaXNhYmxlZCxcbiAgICAgIHRoaXJkQnV0dG9uQ2FsbGJhY2ssXG4gICAgICBwYWludFRoaXJkQnV0dG9uT3JhbmdlLFxuICAgICAgdGhpcmRCdXR0b25EaXNhYmxlZCxcbiAgICAgIGNhbmNlbENhbGxiYWNrLFxuICAgICAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2UsXG4gICAgICBmb290ZXJDb250ZW50LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzRm9vdGVyRW1wdHkgPVxuICAgICAgIWZvb3RlckNvbnRlbnQgJiYgIWNvbmZpcm1DYWxsYmFjayAmJiAhdGhpcmRCdXR0b25DYWxsYmFjayAmJiAhY2FuY2VsQ2FsbGJhY2s7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBkaWFsb2dDbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBlbmZvcmNlRm9jdXM9e2ZhbHNlfVxuICAgICAgICAgIHNob3dcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgPFByaW1pdGl2ZS5UaXRsZSBpZD17YCR7aWR9LXRpdGxlYH0+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMudGl0bGV9XG4gICAgICAgICAgICA8L1ByaW1pdGl2ZS5UaXRsZT5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICA8Qm9keSBpZD17YCR7aWR9LWJvZHlgfSBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zLmJvZHl9XG4gICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgIDxGb290ZXIgaXNGb290ZXJFbXB0eT17aXNGb290ZXJFbXB0eX0+XG4gICAgICAgICAgICB7Zm9vdGVyQ29udGVudCAmJiA8Rm9vdGVyQ29udGVudD57Zm9vdGVyQ29udGVudH08L0Zvb3RlckNvbnRlbnQ+fVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2NvbmZpcm1DYWxsYmFjayAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb25maXJtLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRDb25maXJtQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtva0J1dHRvbkRpc2FibGVkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbmZpcm1DYWxsYmFja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMub2t9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHt0aGlyZEJ1dHRvbkNhbGxiYWNrICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD17YCR7aWR9LXRoaXJkLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRUaGlyZEJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcmRCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlyZEJ1dHRvbkNhbGxiYWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy50aGlyZEJ1dHRvbn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge2NhbmNlbENhbGxiYWNrICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD17YCR7aWR9LWNhbmNlbC1idXR0b25gfVxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q2FuY2VsQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbENhbGxiYWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5jYW5jZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuQ29uZmlybURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGJvZHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgdGhpcmRCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH0pLFxuICBjYW5jZWxDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbmZpcm1DYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb2tCdXR0b25EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRoaXJkQnV0dG9uQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0aGlyZEJ1dHRvbkRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBwYWludFRoaXJkQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZm9vdGVyQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbn07XG5cbkNvbmZpcm1EaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICBpZDogJ29jLWNvbmZpcm0tZGlhbG9nJyxcbiAgdHJhbnNsYXRpb25zOiB7XG4gICAgb2s6ICdPaycsXG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICB0aXRsZTogJ1RpdGxlJyxcbiAgICBib2R5OiAnQm9keScsXG4gICAgdGhpcmRCdXR0b246ICcnLFxuICB9LFxuICBjbGFzc05hbWU6ICcnLFxuICBva0J1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgdGhpcmRCdXR0b25DYWxsYmFjazogdW5kZWZpbmVkLFxuICB0aGlyZEJ1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlOiB0cnVlLFxuICBwYWludENhbmNlbEJ1dHRvbk9yYW5nZTogZmFsc2UsXG4gIHBhaW50VGhpcmRCdXR0b25PcmFuZ2U6IGZhbHNlLFxuICBjYW5jZWxDYWxsYmFjazogdW5kZWZpbmVkLFxuICBjb25maXJtQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbiAgZm9vdGVyQ29udGVudDogdW5kZWZpbmVkLFxufTtcbiJdfQ==