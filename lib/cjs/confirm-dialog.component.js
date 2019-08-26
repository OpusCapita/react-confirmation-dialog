'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ' ', ' ', ';\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  && {\n    padding: ', ' ', ';\n  }\n'], ['\n  && {\n    padding: ', ' ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  padding: ', ';\n  display: flex;\n  justify-content: flex-end;\n'], ['\n  padding: ', ';\n  display: flex;\n  justify-content: flex-end;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  flex: 1;\n'], ['\n  flex: 1;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactBootstrap = require('react-bootstrap');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Button = (0, _styledComponents2.default)(_ocCmCommonLayouts.Primitive.Button)(_templateObject, _ocCmCommonLayouts.theme.gutterWidth);
Button.displayName = 'Button';

var doubleGutterWidth = 'calc(2 * ' + _ocCmCommonLayouts.theme.gutterWidth + ')';

var Header = _styledComponents2.default.div(_templateObject2, doubleGutterWidth, doubleGutterWidth, _ocCmCommonLayouts.theme.gutterWidth, doubleGutterWidth);

var Body = _styledComponents2.default.div(_templateObject3, _ocCmCommonLayouts.theme.gutterWidth, doubleGutterWidth);

var Footer = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.isFooterEmpty ? _ocCmCommonLayouts.theme.gutterWidth + ' 0 0' : _ocCmCommonLayouts.theme.gutterWidth + ' ' + doubleGutterWidth + ' ' + doubleGutterWidth + ' ' + doubleGutterWidth;
});

var FooterContent = _styledComponents2.default.div(_templateObject5);

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
    return _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: _ocCmCommonLayouts.theme },
      _react2.default.createElement(
        _reactBootstrap.Modal,
        {
          id: id,
          dialogClassName: className,
          enforceFocus: false,
          show: true,
          style: { display: 'flex', alignItems: 'center' }
        },
        _react2.default.createElement(
          Header,
          null,
          _react2.default.createElement(
            _ocCmCommonLayouts.Primitive.Title,
            { id: id + '-title' },
            translations.title
          )
        ),
        _react2.default.createElement(
          Body,
          { id: id + '-body', className: 'modal-body' },
          translations.body
        ),
        _react2.default.createElement(
          Footer,
          { isFooterEmpty: isFooterEmpty },
          footerContent && _react2.default.createElement(
            FooterContent,
            null,
            footerContent
          ),
          _react2.default.createElement(
            'div',
            null,
            confirmCallback && _react2.default.createElement(
              Button,
              {
                id: id + '-confirm-button',
                primary: paintConfirmButtonOrange,
                disabled: okButtonDisabled,
                onClick: confirmCallback
              },
              translations.ok
            ),
            thirdButtonCallback && _react2.default.createElement(
              Button,
              {
                id: id + '-third-button',
                primary: paintThirdButtonOrange,
                disabled: thirdButtonDisabled,
                onClick: thirdButtonCallback
              },
              translations.thirdButton
            ),
            cancelCallback && _react2.default.createElement(
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
}(_react2.default.PureComponent);

exports.default = ConfirmDialog;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIlByaW1pdGl2ZSIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJkaXNwbGF5TmFtZSIsImRvdWJsZUd1dHRlcldpZHRoIiwiSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiQm9keSIsIkZvb3RlciIsInByb3BzIiwiaXNGb290ZXJFbXB0eSIsIkZvb3RlckNvbnRlbnQiLCJDb25maXJtRGlhbG9nIiwicmVuZGVyIiwiaWQiLCJ0cmFuc2xhdGlvbnMiLCJjbGFzc05hbWUiLCJjb25maXJtQ2FsbGJhY2siLCJwYWludENvbmZpcm1CdXR0b25PcmFuZ2UiLCJva0J1dHRvbkRpc2FibGVkIiwidGhpcmRCdXR0b25DYWxsYmFjayIsInBhaW50VGhpcmRCdXR0b25PcmFuZ2UiLCJ0aGlyZEJ1dHRvbkRpc2FibGVkIiwiY2FuY2VsQ2FsbGJhY2siLCJwYWludENhbmNlbEJ1dHRvbk9yYW5nZSIsImZvb3RlckNvbnRlbnQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRpdGxlIiwiYm9keSIsIm9rIiwidGhpcmRCdXR0b24iLCJjYW5jZWwiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLGdDQUFPQyw2QkFBVUQsTUFBakIsQ0FBVCxrQkFDV0UseUJBQU1DLFdBRGpCLENBQU47QUFHQUgsT0FBT0ksV0FBUCxHQUFxQixRQUFyQjs7QUFFQSxJQUFNQyxrQ0FBZ0NILHlCQUFNQyxXQUF0QyxNQUFOOztBQUVBLElBQU1HLFNBQVNDLDJCQUFPQyxHQUFoQixtQkFDT0gsaUJBRFAsRUFDNEJBLGlCQUQ1QixFQUNpREgseUJBQU1DLFdBRHZELEVBQ3NFRSxpQkFEdEUsQ0FBTjs7QUFJQSxJQUFNSSxPQUFPRiwyQkFBT0MsR0FBZCxtQkFFU04seUJBQU1DLFdBRmYsRUFFOEJFLGlCQUY5QixDQUFOOztBQU1BLElBQU1LLFNBQVNILDJCQUFPQyxHQUFoQixtQkFDTztBQUFBLFNBQVVHLE1BQU1DLGFBQU4sR0FDZFYseUJBQU1DLFdBRFEsWUFFZEQseUJBQU1DLFdBRlEsU0FFT0UsaUJBRlAsU0FFNEJBLGlCQUY1QixTQUVpREEsaUJBRjNEO0FBQUEsQ0FEUCxDQUFOOztBQVFBLElBQU1RLGdCQUFnQk4sMkJBQU9DLEdBQXZCLGtCQUFOOztJQUlxQk0sYTs7Ozs7Ozs7OzBCQUNuQkMsTSxxQkFBUztBQUFBLGlCQWNILEtBQUtKLEtBZEY7QUFBQSxRQUVMSyxFQUZLLFVBRUxBLEVBRks7QUFBQSxRQUdMQyxZQUhLLFVBR0xBLFlBSEs7QUFBQSxRQUlMQyxTQUpLLFVBSUxBLFNBSks7QUFBQSxRQUtMQyxlQUxLLFVBS0xBLGVBTEs7QUFBQSxRQU1MQyx3QkFOSyxVQU1MQSx3QkFOSztBQUFBLFFBT0xDLGdCQVBLLFVBT0xBLGdCQVBLO0FBQUEsUUFRTEMsbUJBUkssVUFRTEEsbUJBUks7QUFBQSxRQVNMQyxzQkFUSyxVQVNMQSxzQkFUSztBQUFBLFFBVUxDLG1CQVZLLFVBVUxBLG1CQVZLO0FBQUEsUUFXTEMsY0FYSyxVQVdMQSxjQVhLO0FBQUEsUUFZTEMsdUJBWkssVUFZTEEsdUJBWks7QUFBQSxRQWFMQyxhQWJLLFVBYUxBLGFBYks7O0FBZVAsUUFBTWYsZ0JBQ0osQ0FBQ2UsYUFBRCxJQUFrQixDQUFDUixlQUFuQixJQUFzQyxDQUFDRyxtQkFBdkMsSUFBOEQsQ0FBQ0csY0FEakU7QUFFQSxXQUNFO0FBQUMscUNBQUQ7QUFBQSxRQUFlLE9BQU92Qix3QkFBdEI7QUFDRTtBQUFDLDZCQUFEO0FBQUE7QUFDRSxjQUFJYyxFQUROO0FBRUUsMkJBQWlCRSxTQUZuQjtBQUdFLHdCQUFjLEtBSGhCO0FBSUUsb0JBSkY7QUFLRSxpQkFBTyxFQUFFVSxTQUFTLE1BQVgsRUFBbUJDLFlBQVksUUFBL0I7QUFMVDtBQU9FO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFO0FBQUMsd0NBQUQsQ0FBVyxLQUFYO0FBQUEsY0FBaUIsSUFBT2IsRUFBUCxXQUFqQjtBQUNHQyx5QkFBYWE7QUFEaEI7QUFERixTQVBGO0FBWUU7QUFBQyxjQUFEO0FBQUEsWUFBTSxJQUFPZCxFQUFQLFVBQU4sRUFBd0IsV0FBVSxZQUFsQztBQUNHQyx1QkFBYWM7QUFEaEIsU0FaRjtBQWVFO0FBQUMsZ0JBQUQ7QUFBQSxZQUFRLGVBQWVuQixhQUF2QjtBQUNHZSwyQkFBaUI7QUFBQyx5QkFBRDtBQUFBO0FBQWdCQTtBQUFoQixXQURwQjtBQUVFO0FBQUE7QUFBQTtBQUNHUiwrQkFDRDtBQUFDLG9CQUFEO0FBQUE7QUFDRSxvQkFBT0gsRUFBUCxvQkFERjtBQUVFLHlCQUFTSSx3QkFGWDtBQUdFLDBCQUFVQyxnQkFIWjtBQUlFLHlCQUFTRjtBQUpYO0FBTUdGLDJCQUFhZTtBQU5oQixhQUZGO0FBV0dWLG1DQUNEO0FBQUMsb0JBQUQ7QUFBQTtBQUNFLG9CQUFPTixFQUFQLGtCQURGO0FBRUUseUJBQVNPLHNCQUZYO0FBR0UsMEJBQVVDLG1CQUhaO0FBSUUseUJBQVNGO0FBSlg7QUFNR0wsMkJBQWFnQjtBQU5oQixhQVpGO0FBcUJHUiw4QkFDRDtBQUFDLG9CQUFEO0FBQUE7QUFDRSxvQkFBT1QsRUFBUCxtQkFERjtBQUVFLHlCQUFTVSx1QkFGWDtBQUdFLHlCQUFTRDtBQUhYO0FBS0dSLDJCQUFhaUI7QUFMaEI7QUF0QkY7QUFGRjtBQWZGO0FBREYsS0FERjtBQXFERCxHOzs7RUF2RXdDQyxnQkFBTUMsYTs7a0JBQTVCdEIsYTs7O0FBK0ZyQkEsY0FBY3VCLFlBQWQsR0FBNkI7QUFDM0JyQixNQUFJLG1CQUR1QjtBQUUzQkMsZ0JBQWM7QUFDWmUsUUFBSSxJQURRO0FBRVpFLFlBQVEsUUFGSTtBQUdaSixXQUFPLE9BSEs7QUFJWkMsVUFBTSxNQUpNO0FBS1pFLGlCQUFhO0FBTEQsR0FGYTtBQVMzQmYsYUFBVyxFQVRnQjtBQVUzQkcsb0JBQWtCLEtBVlM7QUFXM0JDLHVCQUFxQmdCLFNBWE07QUFZM0JkLHVCQUFxQixLQVpNO0FBYTNCSiw0QkFBMEIsSUFiQztBQWMzQk0sMkJBQXlCLEtBZEU7QUFlM0JILDBCQUF3QixLQWZHO0FBZ0IzQkUsa0JBQWdCYSxTQWhCVztBQWlCM0JuQixtQkFBaUJtQixTQWpCVTtBQWtCM0JYLGlCQUFlVztBQWxCWSxDQUE3QiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoUHJpbWl0aXZlLkJ1dHRvbilgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuY29uc3QgZG91YmxlR3V0dGVyV2lkdGggPSBgY2FsYygyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgJiYge1xuICAgIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9O1xuICB9XG5gO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3Byb3BzID0+IChwcm9wcy5pc0Zvb3RlckVtcHR5XG4gICAgPyBgJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwYFxuICAgIDogYCR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9YCl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuYDtcblxuY29uc3QgRm9vdGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtRGlhbG9nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbmZpcm1DYWxsYmFjayxcbiAgICAgIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZSxcbiAgICAgIG9rQnV0dG9uRGlzYWJsZWQsXG4gICAgICB0aGlyZEJ1dHRvbkNhbGxiYWNrLFxuICAgICAgcGFpbnRUaGlyZEJ1dHRvbk9yYW5nZSxcbiAgICAgIHRoaXJkQnV0dG9uRGlzYWJsZWQsXG4gICAgICBjYW5jZWxDYWxsYmFjayxcbiAgICAgIHBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlLFxuICAgICAgZm9vdGVyQ29udGVudCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc0Zvb3RlckVtcHR5ID1cbiAgICAgICFmb290ZXJDb250ZW50ICYmICFjb25maXJtQ2FsbGJhY2sgJiYgIXRoaXJkQnV0dG9uQ2FsbGJhY2sgJiYgIWNhbmNlbENhbGxiYWNrO1xuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgZW5mb3JjZUZvY3VzPXtmYWxzZX1cbiAgICAgICAgICBzaG93XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgIDxQcmltaXRpdmUuVGl0bGUgaWQ9e2Ake2lkfS10aXRsZWB9PlxuICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLnRpdGxlfVxuICAgICAgICAgICAgPC9QcmltaXRpdmUuVGl0bGU+XG4gICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgPEJvZHkgaWQ9e2Ake2lkfS1ib2R5YH0gY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5ib2R5fVxuICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICA8Rm9vdGVyIGlzRm9vdGVyRW1wdHk9e2lzRm9vdGVyRW1wdHl9PlxuICAgICAgICAgICAge2Zvb3RlckNvbnRlbnQgJiYgPEZvb3RlckNvbnRlbnQ+e2Zvb3RlckNvbnRlbnR9PC9Gb290ZXJDb250ZW50Pn1cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtjb25maXJtQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0tY29uZmlybS1idXR0b25gfVxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q29uZmlybUJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17b2tCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25maXJtQ2FsbGJhY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLm9rfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7dGhpcmRCdXR0b25DYWxsYmFjayAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2lkfS10aGlyZC1idXR0b25gfVxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50VGhpcmRCdXR0b25PcmFuZ2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXJkQnV0dG9uRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcmRCdXR0b25DYWxsYmFja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMudGhpcmRCdXR0b259XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtjYW5jZWxDYWxsYmFjayAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1jYW5jZWwtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtwYWludENhbmNlbEJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxDYWxsYmFja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuY2FuY2VsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbmZpcm1EaWFsb2cucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9rOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBib2R5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHRoaXJkQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICB9KSxcbiAgY2FuY2VsQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjb25maXJtQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9rQnV0dG9uRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB0aGlyZEJ1dHRvbkNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGhpcmRCdXR0b25EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRUaGlyZEJ1dHRvbk9yYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZvb3RlckNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG59O1xuXG5Db25maXJtRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6ICdvYy1jb25maXJtLWRpYWxvZycsXG4gIHRyYW5zbGF0aW9uczoge1xuICAgIG9rOiAnT2snLFxuICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgdGl0bGU6ICdUaXRsZScsXG4gICAgYm9keTogJ0JvZHknLFxuICAgIHRoaXJkQnV0dG9uOiAnJyxcbiAgfSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgb2tCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gIHRoaXJkQnV0dG9uQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbiAgdGhpcmRCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZTogdHJ1ZSxcbiAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2U6IGZhbHNlLFxuICBwYWludFRoaXJkQnV0dG9uT3JhbmdlOiBmYWxzZSxcbiAgY2FuY2VsQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbiAgY29uZmlybUNhbGxiYWNrOiB1bmRlZmluZWQsXG4gIGZvb3RlckNvbnRlbnQ6IHVuZGVmaW5lZCxcbn07XG4iXX0=