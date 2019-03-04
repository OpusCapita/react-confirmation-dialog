var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ' ', ' ', ';\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ';\n'], ['\n  padding: ', ' ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ' ', ' ', ';\n  display:flex;\n  justify-content: flex-end;\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n  display:flex;\n  justify-content: flex-end;\n']),
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

var Footer = styled.div(_templateObject4, theme.gutterWidth, doubleGutterWidth, doubleGutterWidth, doubleGutterWidth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTW9kYWwiLCJQcmltaXRpdmUiLCJ0aGVtZSIsInN0eWxlZCIsIlRoZW1lUHJvdmlkZXIiLCJCdXR0b24iLCJndXR0ZXJXaWR0aCIsImRpc3BsYXlOYW1lIiwiZG91YmxlR3V0dGVyV2lkdGgiLCJIZWFkZXIiLCJkaXYiLCJCb2R5IiwiRm9vdGVyIiwiRm9vdGVyQ29udGVudCIsIkNvbmZpcm1EaWFsb2ciLCJyZW5kZXIiLCJwcm9wcyIsImlkIiwidHJhbnNsYXRpb25zIiwiY2xhc3NOYW1lIiwiY29uZmlybUNhbGxiYWNrIiwicGFpbnRDb25maXJtQnV0dG9uT3JhbmdlIiwib2tCdXR0b25EaXNhYmxlZCIsInRoaXJkQnV0dG9uQ2FsbGJhY2siLCJwYWludFRoaXJkQnV0dG9uT3JhbmdlIiwidGhpcmRCdXR0b25EaXNhYmxlZCIsImNhbmNlbENhbGxiYWNrIiwicGFpbnRDYW5jZWxCdXR0b25PcmFuZ2UiLCJmb290ZXJDb250ZW50IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0aXRsZSIsImJvZHkiLCJvayIsInRoaXJkQnV0dG9uIiwiY2FuY2VsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixZQUExQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsaUJBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsS0FBcEIsUUFBaUMsa0NBQWpDO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsUUFBc0MsbUJBQXRDOztBQUVBLElBQU1DLFNBQVNGLE9BQU9GLFVBQVVJLE1BQWpCLENBQVQsa0JBQ1dILE1BQU1JLFdBRGpCLENBQU47QUFHQUQsT0FBT0UsV0FBUCxHQUFx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QkFBcUJlLFNBWE07QUFZM0JiLHVCQUFxQixLQVpNO0FBYTNCSiw0QkFBMEIsSUFiQztBQWMzQk0sMkJBQXlCLEtBZEU7QUFlM0JILDBCQUF3QixLQWZHO0FBZ0IzQkUsa0JBQWdCWSxTQWhCVztBQWlCM0JsQixtQkFBaUJrQixTQWpCVTtBQWtCM0JWLGlCQUFlVTtBQWxCWSxDQUE3QiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoUHJpbWl0aXZlLkJ1dHRvbilgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuY29uc3QgZG91YmxlR3V0dGVyV2lkdGggPSBgY2FsYygyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofSAke2RvdWJsZUd1dHRlcldpZHRofTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuYDtcblxuY29uc3QgRm9vdGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtRGlhbG9nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbmZpcm1DYWxsYmFjayxcbiAgICAgIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZSxcbiAgICAgIG9rQnV0dG9uRGlzYWJsZWQsXG4gICAgICB0aGlyZEJ1dHRvbkNhbGxiYWNrLFxuICAgICAgcGFpbnRUaGlyZEJ1dHRvbk9yYW5nZSxcbiAgICAgIHRoaXJkQnV0dG9uRGlzYWJsZWQsXG4gICAgICBjYW5jZWxDYWxsYmFjayxcbiAgICAgIHBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlLFxuICAgICAgZm9vdGVyQ29udGVudCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIGVuZm9yY2VGb2N1cz17ZmFsc2V9XG4gICAgICAgICAgc2hvd1xuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8UHJpbWl0aXZlLlRpdGxlIGlkPXtgJHtpZH0tdGl0bGVgfT5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy50aXRsZX1cbiAgICAgICAgICAgIDwvUHJpbWl0aXZlLlRpdGxlPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgIDxCb2R5IGlkPXtgJHtpZH0tYm9keWB9IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYm9keX1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIHtmb290ZXJDb250ZW50ICYmIDxGb290ZXJDb250ZW50Pntmb290ZXJDb250ZW50fTwvRm9vdGVyQ29udGVudD59XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7Y29uZmlybUNhbGxiYWNrICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD17YCR7aWR9LWNvbmZpcm0tYnV0dG9uYH1cbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtwYWludENvbmZpcm1CdXR0b25PcmFuZ2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e29rQnV0dG9uRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29uZmlybUNhbGxiYWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5va31cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge3RoaXJkQnV0dG9uQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0tdGhpcmQtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtwYWludFRoaXJkQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlyZEJ1dHRvbkRpc2FibGVkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXJkQnV0dG9uQ2FsbGJhY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLnRoaXJkQnV0dG9ufVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7Y2FuY2VsQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0tY2FuY2VsLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRDYW5jZWxCdXR0b25PcmFuZ2V9XG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQ2FsbGJhY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLmNhbmNlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db25maXJtRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvazogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBjYW5jZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgYm9keTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB0aGlyZEJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgfSksXG4gIGNhbmNlbENhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY29uZmlybUNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBva0J1dHRvbkRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGhpcmRCdXR0b25DYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIHRoaXJkQnV0dG9uRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBwYWludENvbmZpcm1CdXR0b25PcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBwYWludENhbmNlbEJ1dHRvbk9yYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBhaW50VGhpcmRCdXR0b25PcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBmb290ZXJDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxufTtcblxuQ29uZmlybURpYWxvZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkOiAnb2MtY29uZmlybS1kaWFsb2cnLFxuICB0cmFuc2xhdGlvbnM6IHtcbiAgICBvazogJ09rJyxcbiAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgIHRpdGxlOiAnVGl0bGUnLFxuICAgIGJvZHk6ICdCb2R5JyxcbiAgICB0aGlyZEJ1dHRvbjogJycsXG4gIH0sXG4gIGNsYXNzTmFtZTogJycsXG4gIG9rQnV0dG9uRGlzYWJsZWQ6IGZhbHNlLFxuICB0aGlyZEJ1dHRvbkNhbGxiYWNrOiB1bmRlZmluZWQsXG4gIHRoaXJkQnV0dG9uRGlzYWJsZWQ6IGZhbHNlLFxuICBwYWludENvbmZpcm1CdXR0b25PcmFuZ2U6IHRydWUsXG4gIHBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlOiBmYWxzZSxcbiAgcGFpbnRUaGlyZEJ1dHRvbk9yYW5nZTogZmFsc2UsXG4gIGNhbmNlbENhbGxiYWNrOiB1bmRlZmluZWQsXG4gIGNvbmZpcm1DYWxsYmFjazogdW5kZWZpbmVkLFxuICBmb290ZXJDb250ZW50OiB1bmRlZmluZWQsXG59O1xuIl19