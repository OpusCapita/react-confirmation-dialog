'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ' ', ' ', ';\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ';\n'], ['\n  padding: ', ' ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  padding: ', ' ', ' ', ' ', ';\n  display:flex;\n  justify-content: flex-end;\n'], ['\n  padding: ', ' ', ' ', ' ', ';\n  display:flex;\n  justify-content: flex-end;\n']),
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

var Footer = _styledComponents2.default.div(_templateObject4, _ocCmCommonLayouts.theme.gutterWidth, doubleGutterWidth, doubleGutterWidth, doubleGutterWidth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIlByaW1pdGl2ZSIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJkaXNwbGF5TmFtZSIsImRvdWJsZUd1dHRlcldpZHRoIiwiSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiQm9keSIsIkZvb3RlciIsIkZvb3RlckNvbnRlbnQiLCJDb25maXJtRGlhbG9nIiwicmVuZGVyIiwicHJvcHMiLCJpZCIsInRyYW5zbGF0aW9ucyIsImNsYXNzTmFtZSIsImNvbmZpcm1DYWxsYmFjayIsInBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZSIsIm9rQnV0dG9uRGlzYWJsZWQiLCJ0aGlyZEJ1dHRvbkNhbGxiYWNrIiwicGFpbnRUaGlyZEJ1dHRvbk9yYW5nZSIsInRoaXJkQnV0dG9uRGlzYWJsZWQiLCJjYW5jZWxDYWxsYmFjayIsInBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlIiwiZm9vdGVyQ29udGVudCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidGl0bGUiLCJib2R5Iiwib2siLCJ0aGlyZEJ1dHRvbiIsImNhbmNlbCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsZ0NBQU9DLDZCQUFVRCxNQUFqQixDQUFULGtCQUNXRSx5QkFBTUMsV0FEakIsQ0FBTjtBQUdBSCxPQUFPSSxXQUFQLEdBQXFCLFFBQXJCOztBQUVBLElBQU1DLGtDQUFnQ0gseUJBQU1DLFdBQXRDLE1BQU47O0FBRUEsSUFBTUcsU0FBU0MsMkJBQU9DLEdBQWhCLG1CQUNPSCxpQkFEUCxFQUM0QkEsaUJBRDVCLEVBQ2lESCx5QkFBTUMsV0FEdkQsRUFDc0VFLGlCQUR0RSxDQUFOOztBQUlBLElBQU1JLE9BQU9GLDJC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QlksQ0FBN0IiLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKFByaW1pdGl2ZS5CdXR0b24pYFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5cbmNvbnN0IGRvdWJsZUd1dHRlcldpZHRoID0gYGNhbGMoMiAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KWA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6ICR7ZG91YmxlR3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IEZvb3RlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybURpYWxvZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb25maXJtQ2FsbGJhY2ssXG4gICAgICBwYWludENvbmZpcm1CdXR0b25PcmFuZ2UsXG4gICAgICBva0J1dHRvbkRpc2FibGVkLFxuICAgICAgdGhpcmRCdXR0b25DYWxsYmFjayxcbiAgICAgIHBhaW50VGhpcmRCdXR0b25PcmFuZ2UsXG4gICAgICB0aGlyZEJ1dHRvbkRpc2FibGVkLFxuICAgICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgICBwYWludENhbmNlbEJ1dHRvbk9yYW5nZSxcbiAgICAgIGZvb3RlckNvbnRlbnQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBkaWFsb2dDbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBlbmZvcmNlRm9jdXM9e2ZhbHNlfVxuICAgICAgICAgIHNob3dcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgPFByaW1pdGl2ZS5UaXRsZSBpZD17YCR7aWR9LXRpdGxlYH0+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMudGl0bGV9XG4gICAgICAgICAgICA8L1ByaW1pdGl2ZS5UaXRsZT5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICA8Qm9keSBpZD17YCR7aWR9LWJvZHlgfSBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zLmJvZHl9XG4gICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgIDxGb290ZXI+XG4gICAgICAgICAgICB7Zm9vdGVyQ29udGVudCAmJiA8Rm9vdGVyQ29udGVudD57Zm9vdGVyQ29udGVudH08L0Zvb3RlckNvbnRlbnQ+fVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2NvbmZpcm1DYWxsYmFjayAmJlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb25maXJtLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRDb25maXJtQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtva0J1dHRvbkRpc2FibGVkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbmZpcm1DYWxsYmFja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMub2t9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHt0aGlyZEJ1dHRvbkNhbGxiYWNrICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD17YCR7aWR9LXRoaXJkLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cGFpbnRUaGlyZEJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcmRCdXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlyZEJ1dHRvbkNhbGxiYWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy50aGlyZEJ1dHRvbn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge2NhbmNlbENhbGxiYWNrICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpZD17YCR7aWR9LWNhbmNlbC1idXR0b25gfVxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q2FuY2VsQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbENhbGxiYWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5jYW5jZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuQ29uZmlybURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGJvZHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgdGhpcmRCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIH0pLFxuICBjYW5jZWxDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbmZpcm1DYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb2tCdXR0b25EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRoaXJkQnV0dG9uQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0aGlyZEJ1dHRvbkRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBwYWludFRoaXJkQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZm9vdGVyQ29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbn07XG5cbkNvbmZpcm1EaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICBpZDogJ29jLWNvbmZpcm0tZGlhbG9nJyxcbiAgdHJhbnNsYXRpb25zOiB7XG4gICAgb2s6ICdPaycsXG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICB0aXRsZTogJ1RpdGxlJyxcbiAgICBib2R5OiAnQm9keScsXG4gICAgdGhpcmRCdXR0b246ICcnLFxuICB9LFxuICBjbGFzc05hbWU6ICcnLFxuICBva0J1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgdGhpcmRCdXR0b25DYWxsYmFjazogdW5kZWZpbmVkLFxuICB0aGlyZEJ1dHRvbkRpc2FibGVkOiBmYWxzZSxcbiAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlOiB0cnVlLFxuICBwYWludENhbmNlbEJ1dHRvbk9yYW5nZTogZmFsc2UsXG4gIHBhaW50VGhpcmRCdXR0b25PcmFuZ2U6IGZhbHNlLFxuICBjYW5jZWxDYWxsYmFjazogdW5kZWZpbmVkLFxuICBjb25maXJtQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbiAgZm9vdGVyQ29udGVudDogdW5kZWZpbmVkLFxufTtcbiJdfQ==