function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    padding: ", " ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", " ", " ", " ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
import styled, { ThemeProvider } from 'styled-components';
var Button = styled(Primitive.Button)(_templateObject(), theme.gutterWidth);
Button.displayName = 'Button';
var doubleGutterWidth = "calc(2 * " + theme.gutterWidth + ")";
var Header = styled.div(_templateObject2(), doubleGutterWidth, doubleGutterWidth, theme.gutterWidth, doubleGutterWidth);
var Body = styled.div(_templateObject3(), theme.gutterWidth, doubleGutterWidth);
var Footer = styled.div(_templateObject4(), function (props) {
  return props.isFooterEmpty ? theme.gutterWidth + " 0 0" : theme.gutterWidth + " " + doubleGutterWidth + " " + doubleGutterWidth + " " + doubleGutterWidth;
});
var FooterContent = styled.div(_templateObject5());

var ConfirmDialog =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ConfirmDialog, _React$PureComponent);

  function ConfirmDialog() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ConfirmDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        translations = _this$props.translations,
        className = _this$props.className,
        confirmCallback = _this$props.confirmCallback,
        paintConfirmButtonOrange = _this$props.paintConfirmButtonOrange,
        okButtonDisabled = _this$props.okButtonDisabled,
        thirdButtonCallback = _this$props.thirdButtonCallback,
        paintThirdButtonOrange = _this$props.paintThirdButtonOrange,
        thirdButtonDisabled = _this$props.thirdButtonDisabled,
        cancelCallback = _this$props.cancelCallback,
        paintCancelButtonOrange = _this$props.paintCancelButtonOrange,
        footerContent = _this$props.footerContent,
        modalProps = _this$props.modalProps;
    var isFooterEmpty = !footerContent && !confirmCallback && !thirdButtonCallback && !cancelCallback;
    return React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Modal // eslint-disable-next-line react/jsx-props-no-spreading
    , _extends({}, modalProps, {
      id: id,
      dialogClassName: className,
      enforceFocus: false,
      show: true,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }), React.createElement(Header, null, React.createElement(Primitive.Title, {
      id: id + "-title"
    }, translations.title)), React.createElement(Body, {
      id: id + "-body",
      className: "modal-body"
    }, translations.body), React.createElement(Footer, {
      isFooterEmpty: isFooterEmpty
    }, footerContent && React.createElement(FooterContent, null, footerContent), React.createElement("div", null, confirmCallback && React.createElement(Button, {
      id: id + "-confirm-button",
      primary: paintConfirmButtonOrange,
      disabled: okButtonDisabled,
      onClick: confirmCallback
    }, translations.ok), thirdButtonCallback && React.createElement(Button, {
      id: id + "-third-button",
      primary: paintThirdButtonOrange,
      disabled: thirdButtonDisabled,
      onClick: thirdButtonCallback
    }, translations.thirdButton), cancelCallback && React.createElement(Button, {
      id: id + "-cancel-button",
      primary: paintCancelButtonOrange,
      onClick: cancelCallback
    }, translations.cancel)))));
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
  footerContent: undefined,
  modalProps: {}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTW9kYWwiLCJQcmltaXRpdmUiLCJ0aGVtZSIsInN0eWxlZCIsIlRoZW1lUHJvdmlkZXIiLCJCdXR0b24iLCJndXR0ZXJXaWR0aCIsImRpc3BsYXlOYW1lIiwiZG91YmxlR3V0dGVyV2lkdGgiLCJIZWFkZXIiLCJkaXYiLCJCb2R5IiwiRm9vdGVyIiwicHJvcHMiLCJpc0Zvb3RlckVtcHR5IiwiRm9vdGVyQ29udGVudCIsIkNvbmZpcm1EaWFsb2ciLCJyZW5kZXIiLCJpZCIsInRyYW5zbGF0aW9ucyIsImNsYXNzTmFtZSIsImNvbmZpcm1DYWxsYmFjayIsInBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZSIsIm9rQnV0dG9uRGlzYWJsZWQiLCJ0aGlyZEJ1dHRvbkNhbGxiYWNrIiwicGFpbnRUaGlyZEJ1dHRvbk9yYW5nZSIsInRoaXJkQnV0dG9uRGlzYWJsZWQiLCJjYW5jZWxDYWxsYmFjayIsInBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlIiwiZm9vdGVyQ29udGVudCIsIm1vZGFsUHJvcHMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRpdGxlIiwiYm9keSIsIm9rIiwidGhpcmRCdXR0b24iLCJjYW5jZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLFlBQTFCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixpQkFBdEI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxLQUFwQixRQUFpQyxrQ0FBakM7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxhQUFqQixRQUFzQyxtQkFBdEM7QUFFQSxJQUFNQyxNQUFN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VTtBQWtCM0JYLEVBQUFBLGFBQWEsRUFBRVcsU0FsQlk7QUFtQjNCVixFQUFBQSxVQUFVLEVBQUU7QUFuQmUsQ0FBN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoUHJpbWl0aXZlLkJ1dHRvbilgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuY29uc3QgZG91YmxlR3V0dGVyV2lkdGggPSBgY2FsYygyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgJiYge1xuICAgIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9O1xuICB9XG5gO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzRm9vdGVyRW1wdHlcbiAgICA/IGAke3RoZW1lLmd1dHRlcldpZHRofSAwIDBgXG4gICAgOiBgJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH1gKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5jb25zdCBGb290ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29uZmlybUNhbGxiYWNrLFxuICAgICAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlLFxuICAgICAgb2tCdXR0b25EaXNhYmxlZCxcbiAgICAgIHRoaXJkQnV0dG9uQ2FsbGJhY2ssXG4gICAgICBwYWludFRoaXJkQnV0dG9uT3JhbmdlLFxuICAgICAgdGhpcmRCdXR0b25EaXNhYmxlZCxcbiAgICAgIGNhbmNlbENhbGxiYWNrLFxuICAgICAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2UsXG4gICAgICBmb290ZXJDb250ZW50LFxuICAgICAgbW9kYWxQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc0Zvb3RlckVtcHR5ID0gIWZvb3RlckNvbnRlbnRcbiAgICAgICYmICFjb25maXJtQ2FsbGJhY2tcbiAgICAgICYmICF0aGlyZEJ1dHRvbkNhbGxiYWNrXG4gICAgICAmJiAhY2FuY2VsQ2FsbGJhY2s7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nXG4gICAgICAgICAgey4uLm1vZGFsUHJvcHN9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIGVuZm9yY2VGb2N1cz17ZmFsc2V9XG4gICAgICAgICAgc2hvd1xuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8UHJpbWl0aXZlLlRpdGxlIGlkPXtgJHtpZH0tdGl0bGVgfT5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy50aXRsZX1cbiAgICAgICAgICAgIDwvUHJpbWl0aXZlLlRpdGxlPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgIDxCb2R5IGlkPXtgJHtpZH0tYm9keWB9IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYm9keX1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgPEZvb3RlciBpc0Zvb3RlckVtcHR5PXtpc0Zvb3RlckVtcHR5fT5cbiAgICAgICAgICAgIHtmb290ZXJDb250ZW50ICYmIDxGb290ZXJDb250ZW50Pntmb290ZXJDb250ZW50fTwvRm9vdGVyQ29udGVudD59XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7Y29uZmlybUNhbGxiYWNrICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpZD17YCR7aWR9LWNvbmZpcm0tYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q29uZmlybUJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtva0J1dHRvbkRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29uZmlybUNhbGxiYWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMub2t9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHt0aGlyZEJ1dHRvbkNhbGxiYWNrICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpZD17YCR7aWR9LXRoaXJkLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtwYWludFRoaXJkQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXJkQnV0dG9uRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlyZEJ1dHRvbkNhbGxiYWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMudGhpcmRCdXR0b259XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtjYW5jZWxDYWxsYmFjayAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1jYW5jZWwtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q2FuY2VsQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5jYW5jZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbmZpcm1EaWFsb2cucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9rOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBib2R5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHRoaXJkQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICB9KSxcbiAgY2FuY2VsQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjb25maXJtQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9rQnV0dG9uRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB0aGlyZEJ1dHRvbkNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGhpcmRCdXR0b25EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRUaGlyZEJ1dHRvbk9yYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZvb3RlckNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIG1vZGFsUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG59O1xuXG5Db25maXJtRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6ICdvYy1jb25maXJtLWRpYWxvZycsXG4gIHRyYW5zbGF0aW9uczoge1xuICAgIG9rOiAnT2snLFxuICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgdGl0bGU6ICdUaXRsZScsXG4gICAgYm9keTogJ0JvZHknLFxuICAgIHRoaXJkQnV0dG9uOiAnJyxcbiAgfSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgb2tCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gIHRoaXJkQnV0dG9uQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbiAgdGhpcmRCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZTogdHJ1ZSxcbiAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2U6IGZhbHNlLFxuICBwYWludFRoaXJkQnV0dG9uT3JhbmdlOiBmYWxzZSxcbiAgY2FuY2VsQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbiAgY29uZmlybUNhbGxiYWNrOiB1bmRlZmluZWQsXG4gIGZvb3RlckNvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgbW9kYWxQcm9wczoge30sXG59O1xuIl19