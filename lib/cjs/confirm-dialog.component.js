'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ' ', ' ', ';\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ';\n'], ['\n  padding: ', ' ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  text-align: right;\n  padding: ', ' ', ' ', ' ', ';\n'], ['\n  text-align: right;\n  padding: ', ' ', ' ', ' ', ';\n']);

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

var Footer = _styledComponents2.default.div(_templateObject4, _ocCmCommonLayouts.theme.gutterWidth, doubleGutterWidth, doubleGutterWidth, doubleGutterWidth);

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
  confirmCallback: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIlByaW1pdGl2ZSIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJkaXNwbGF5TmFtZSIsImRvdWJsZUd1dHRlcldpZHRoIiwiSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiQm9keSIsIkZvb3RlciIsIkNvbmZpcm1EaWFsb2ciLCJyZW5kZXIiLCJwcm9wcyIsImlkIiwidHJhbnNsYXRpb25zIiwiY2xhc3NOYW1lIiwiY29uZmlybUNhbGxiYWNrIiwicGFpbnRDb25maXJtQnV0dG9uT3JhbmdlIiwib2tCdXR0b25EaXNhYmxlZCIsInRoaXJkQnV0dG9uQ2FsbGJhY2siLCJwYWludFRoaXJkQnV0dG9uT3JhbmdlIiwidGhpcmRCdXR0b25EaXNhYmxlZCIsImNhbmNlbENhbGxiYWNrIiwicGFpbnRDYW5jZWxCdXR0b25PcmFuZ2UiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRpdGxlIiwiYm9keSIsIm9rIiwidGhpcmRCdXR0b24iLCJjYW5jZWwiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsZ0NBQU9DLDZCQUFVRCxNQUFqQixDQUFULGtCQUNXRSx5QkFBTUMsV0FEakIsQ0FBTjtBQUdBSCxPQUFPSSxXQUFQLEdBQXFCLFFBQXJCOztBQUVBLElBQU1DLGtDQUFnQ0gseUJBQU1DLFdBQXRDLE1BQU47O0FBRUEsSUFBTUcsU0FBU0MsMkJBQU9DLEdBQWhCLG1CQUNPSCxpQkFEUCxFQUM0QkEsaUJBRDVCLEVBQ2lESCx5QkFBTUMsV0FEdkQsRUFDc0VFLGlCQUR0RSxDQUFOOztBQUlBLElBQU1JLE9BQU9GLDJCQUFPQyxHQUFkLG1CQUNPTix5QkFBTUMsV0FEYixFQUM0QkUsaUJBRDVCLENBQU47O0FBSUEsSUFBTUssU0FBU0gsMkJBQU9DLEdBQWhCLG1CQUVPTix5QkFBTUMsV0FGYixFQUU0QkUsaUJBRjVCLEVBRWlEQSxpQkFGakQsRUFFc0VBLGlCQUZ0RSxDQUFOOztJQUtxQk0sYTs7Ozs7Ozs7OzBCQUNuQkMsTSxxQkFBUztBQUFBLGlCQWFILEtBQUtDLEtBYkY7QUFBQSxRQUVMQyxFQUZLLFVBRUxBLEVBRks7QUFBQSxRQUdMQyxZQUhLLFVBR0xBLFlBSEs7QUFBQSxRQUlMQyxTQUpLLFVBSUxBLFNBSks7QUFBQSxRQUtMQyxlQUxLLFVBS0xBLGVBTEs7QUFBQSxRQU1MQyx3QkFOSyxVQU1MQSx3QkFOSztBQUFBLFFBT0xDLGdCQVBLLFVBT0xBLGdCQVBLO0FBQUEsUUFRTEMsbUJBUkssVUFRTEEsbUJBUks7QUFBQSxRQVNMQyxzQkFUSyxVQVNMQSxzQkFUSztBQUFBLFFBVUxDLG1CQVZLLFVBVUxBLG1CQVZLO0FBQUEsUUFXTEMsY0FYSyxVQVdMQSxjQVhLO0FBQUEsUUFZTEMsdUJBWkssVUFZTEEsdUJBWks7O0FBY1AsV0FDRTtBQUFDLHFDQUFEO0FBQUEsUUFBZSxPQUFPdEIsd0JBQXRCO0FBQ0U7QUFBQyw2QkFBRDtBQUFBO0FBQ0UsY0FBSVksRUFETjtBQUVFLDJCQUFpQkUsU0FGbkI7QUFHRSx3QkFBYyxLQUhoQjtBQUlFLG9CQUpGO0FBS0UsaUJBQU8sRUFBRVMsU0FBUyxNQUFYLEVBQW1CQyxZQUFZLFFBQS9CO0FBTFQ7QUFPRTtBQUFDLGdCQUFEO0FBQUE7QUFDRTtBQUFDLHdDQUFELENBQVcsS0FBWDtBQUFBLGNBQWlCLElBQU9aLEVBQVAsV0FBakI7QUFDR0MseUJBQWFZO0FBRGhCO0FBREYsU0FQRjtBQVlFO0FBQUMsY0FBRDtBQUFBLFlBQU0sSUFBT2IsRUFBUCxVQUFOLEVBQXdCLFdBQVUsWUFBbEM7QUFDR0MsdUJBQWFhO0FBRGhCLFNBWkY7QUFlRTtBQUFDLGdCQUFEO0FBQUE7QUFDR1gsNkJBQ0M7QUFBQyxrQkFBRDtBQUFBO0FBQ0Usa0JBQU9ILEVBQVAsb0JBREY7QUFFRSx1QkFBU0ksd0JBRlg7QUFHRSx3QkFBVUMsZ0JBSFo7QUFJRSx1QkFBU0Y7QUFKWDtBQU1HRix5QkFBYWM7QUFOaEIsV0FGSjtBQVdHVCxpQ0FDQztBQUFDLGtCQUFEO0FBQUE7QUFDRSxrQkFBT04sRUFBUCxrQkFERjtBQUVFLHVCQUFTTyxzQkFGWDtBQUdFLHdCQUFVQyxtQkFIWjtBQUlFLHVCQUFTRjtBQUpYO0FBTUdMLHlCQUFhZTtBQU5oQixXQVpKO0FBcUJHUCw0QkFDQztBQUFDLGtCQUFEO0FBQUE7QUFDRSxrQkFBT1QsRUFBUCxtQkFERjtBQUVFLHVCQUFTVSx1QkFGWDtBQUdFLHVCQUFTRDtBQUhYO0FBS0dSLHlCQUFhZ0I7QUFMaEI7QUF0Qko7QUFmRjtBQURGLEtBREY7QUFrREQsRzs7O0VBakV3Q0MsZ0JBQU1DLGE7O2tCQUE1QnRCLGE7OztBQXdGckJBLGNBQWN1QixZQUFkLEdBQTZCO0FBQzNCcEIsTUFBSSxtQkFEdUI7QUFFM0JDLGdCQUFjO0FBQ1pjLFFBQUksSUFEUTtBQUVaRSxZQUFRLFFBRkk7QUFHWkosV0FBTyxPQUhLO0FBSVpDLFVBQU0sTUFKTTtBQUtaRSxpQkFBYTtBQUxELEdBRmE7QUFTM0JkLGFBQVcsRUFUZ0I7QUFVM0JHLG9CQUFrQixLQVZTO0FBVzNCQyx1QkFBcUJlLFNBWE07QUFZM0JiLHVCQUFxQixLQVpNO0FBYTNCSiw0QkFBMEIsSUFiQztBQWMzQk0sMkJBQXlCLEtBZEU7QUFlM0JILDBCQUF3QixLQWZHO0FBZ0IzQkUsa0JBQWdCWSxTQWhCVztBQWlCM0JsQixtQkFBaUJrQjtBQWpCVSxDQUE3QiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoUHJpbWl0aXZlLkJ1dHRvbilgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuY29uc3QgZG91YmxlR3V0dGVyV2lkdGggPSBgY2FsYygyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtRGlhbG9nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbmZpcm1DYWxsYmFjayxcbiAgICAgIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZSxcbiAgICAgIG9rQnV0dG9uRGlzYWJsZWQsXG4gICAgICB0aGlyZEJ1dHRvbkNhbGxiYWNrLFxuICAgICAgcGFpbnRUaGlyZEJ1dHRvbk9yYW5nZSxcbiAgICAgIHRoaXJkQnV0dG9uRGlzYWJsZWQsXG4gICAgICBjYW5jZWxDYWxsYmFjayxcbiAgICAgIHBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgZW5mb3JjZUZvY3VzPXtmYWxzZX1cbiAgICAgICAgICBzaG93XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgIDxQcmltaXRpdmUuVGl0bGUgaWQ9e2Ake2lkfS10aXRsZWB9PlxuICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLnRpdGxlfVxuICAgICAgICAgICAgPC9QcmltaXRpdmUuVGl0bGU+XG4gICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgPEJvZHkgaWQ9e2Ake2lkfS1ib2R5YH0gY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5ib2R5fVxuICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgICAge2NvbmZpcm1DYWxsYmFjayAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb25maXJtLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRDb25maXJtQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtva0J1dHRvbkRpc2FibGVkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbmZpcm1DYWxsYmFja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMub2t9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3RoaXJkQnV0dG9uQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPXtgJHtpZH0tdGhpcmQtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtwYWludFRoaXJkQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlyZEJ1dHRvbkRpc2FibGVkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXJkQnV0dG9uQ2FsbGJhY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLnRoaXJkQnV0dG9ufVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtjYW5jZWxDYWxsYmFjayAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1jYW5jZWwtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtwYWludENhbmNlbEJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxDYWxsYmFja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuY2FuY2VsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db25maXJtRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvazogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBjYW5jZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgYm9keTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB0aGlyZEJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgfSksXG4gIGNhbmNlbENhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY29uZmlybUNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBva0J1dHRvbkRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGhpcmRCdXR0b25DYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIHRoaXJkQnV0dG9uRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBwYWludENvbmZpcm1CdXR0b25PcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBwYWludENhbmNlbEJ1dHRvbk9yYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBhaW50VGhpcmRCdXR0b25PcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29uZmlybURpYWxvZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkOiAnb2MtY29uZmlybS1kaWFsb2cnLFxuICB0cmFuc2xhdGlvbnM6IHtcbiAgICBvazogJ09rJyxcbiAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgIHRpdGxlOiAnVGl0bGUnLFxuICAgIGJvZHk6ICdCb2R5JyxcbiAgICB0aGlyZEJ1dHRvbjogJycsXG4gIH0sXG4gIGNsYXNzTmFtZTogJycsXG4gIG9rQnV0dG9uRGlzYWJsZWQ6IGZhbHNlLFxuICB0aGlyZEJ1dHRvbkNhbGxiYWNrOiB1bmRlZmluZWQsXG4gIHRoaXJkQnV0dG9uRGlzYWJsZWQ6IGZhbHNlLFxuICBwYWludENvbmZpcm1CdXR0b25PcmFuZ2U6IHRydWUsXG4gIHBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlOiBmYWxzZSxcbiAgcGFpbnRUaGlyZEJ1dHRvbk9yYW5nZTogZmFsc2UsXG4gIGNhbmNlbENhbGxiYWNrOiB1bmRlZmluZWQsXG4gIGNvbmZpcm1DYWxsYmFjazogdW5kZWZpbmVkLFxufTtcbiJdfQ==