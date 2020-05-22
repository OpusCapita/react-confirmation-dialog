"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactBootstrap = require("react-bootstrap");

var _ocCmCommonLayouts = require("@opuscapita/oc-cm-common-layouts");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Button = (0, _styledComponents["default"])(_ocCmCommonLayouts.Primitive.Button)(_templateObject(), _ocCmCommonLayouts.theme.gutterWidth);
Button.displayName = 'Button';
var doubleGutterWidth = "calc(2 * " + _ocCmCommonLayouts.theme.gutterWidth + ")";

var Header = _styledComponents["default"].div(_templateObject2(), doubleGutterWidth, doubleGutterWidth, _ocCmCommonLayouts.theme.gutterWidth, doubleGutterWidth);

var Body = _styledComponents["default"].div(_templateObject3(), _ocCmCommonLayouts.theme.gutterWidth, doubleGutterWidth);

var Footer = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.isFooterEmpty ? _ocCmCommonLayouts.theme.gutterWidth + " 0 0" : _ocCmCommonLayouts.theme.gutterWidth + " " + doubleGutterWidth + " " + doubleGutterWidth + " " + doubleGutterWidth;
});

var FooterContent = _styledComponents["default"].div(_templateObject5());

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
    return _react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: _ocCmCommonLayouts.theme
    }, _react["default"].createElement(_reactBootstrap.Modal // eslint-disable-next-line react/jsx-props-no-spreading
    , _extends({}, modalProps, {
      id: id,
      dialogClassName: className,
      enforceFocus: false,
      show: true,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }), _react["default"].createElement(Header, null, _react["default"].createElement(_ocCmCommonLayouts.Primitive.Title, {
      id: id + "-title"
    }, translations.title)), _react["default"].createElement(Body, {
      id: id + "-body",
      className: "modal-body"
    }, translations.body), _react["default"].createElement(Footer, {
      isFooterEmpty: isFooterEmpty
    }, footerContent && _react["default"].createElement(FooterContent, null, footerContent), _react["default"].createElement("div", null, confirmCallback && _react["default"].createElement(Button, {
      id: id + "-confirm-button",
      primary: paintConfirmButtonOrange,
      disabled: okButtonDisabled,
      onClick: confirmCallback
    }, translations.ok), thirdButtonCallback && _react["default"].createElement(Button, {
      id: id + "-third-button",
      primary: paintThirdButtonOrange,
      disabled: thirdButtonDisabled,
      onClick: thirdButtonCallback
    }, translations.thirdButton), cancelCallback && _react["default"].createElement(Button, {
      id: id + "-cancel-button",
      primary: paintCancelButtonOrange,
      onClick: cancelCallback
    }, translations.cancel)))));
  };

  return ConfirmDialog;
}(_react["default"].PureComponent);

exports["default"] = ConfirmDialog;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIlByaW1pdGl2ZSIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJkaXNwbGF5TmFtZSIsImRvdWJsZUd1dHRlcldpZHRoIiwiSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiQm9keSIsIkZvb3RlciIsInByb3BzIiwiaXNGb290ZXJFbXB0eSIsIkZvb3RlckNvbnRlbnQiLCJDb25maXJtRGlhbG9nIiwicmVuZGVyIiwiaWQiLCJ0cmFuc2xhdGlvbnMiLCJjbGFzc05hbWUiLCJjb25maXJtQ2FsbGJhY2siLCJwYWludENvbmZpcm1CdXR0b25PcmFuZ2UiLCJva0J1dHRvbkRpc2FibGVkIiwidGhpcmRCdXR0b25DYWxsYmFjayIsInBhaW50VGhpcmRCdXR0b25PcmFuZ2UiLCJ0aGlyZEJ1dHRvbkRpc2FibGVkIiwiY2FuY2VsQ2FsbGJhY2siLCJwYWludENhbmNlbEJ1dHRvbk9yYW5nZSIsImZvb3RlckNvbnRlbnQiLCJtb2RhbFByb3BzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0aXRsZSIsImJvZHkiLCJvayIsInRoaXJkQnV0dG9uIiwiY2FuY2VsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGtDQUFPQyw2QkFBVUQsTUFBakIsQ0FBSCxvQkFDS0UseUJBQU1DLFdBRFgsQ0FBWjtBQUdBSCxNQUFNLENBQUNJLFdBQVAsR0FBcUIsUUFBckI7QUFFQSxJQUFNQyxpQkFBaUIsaUJBQWVILHlCQUFNQyxXQUFyQixNQUF2Qjs7QUFFQSxJQUFNRyxNQUFNLEdBQUdDLDZCQUFPQyxHQUFWLHFCQUNDSCxpQkFERCxFQUNzQkEsaUJBRHRCLEVBQzJDSCx5QkFBTUMsV0FEakQsRUFDZ0VFLGlCQURoRSxDQUFaOztBQUlBLElBQU1JLElBQUksR0FBR0YsNkJBQU9DLEdBQVYscUJBRUtOLHlCQUFNQyxXQUZYLEVBRTBCRSxpQkFGMUIsQ0FBVjs7QUFNQSxJQUFNSyxNQUFNLEdBQUdILDZCQUFPQyxHQUFWLHFCQUNDLFVBQUNHLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLGFBQU4sR0FDaEJWLHlCQUFNQyxXQURVLFlBRWhCRCx5QkFBTUMsV0FGVSxTQUVLRSxpQkFGTCxTQUUwQkEsaUJBRjFCLFNBRStDQSxpQkFGM0Q7QUFBQSxDQURELENBQVo7O0FBUUEsSUFBTVEsYUFBYSxHQUFHTiw2QkFBT0MsR0FBVixvQkFBbkI7O0lBSXFCTSxhOzs7Ozs7Ozs7OztTQUNuQkMsTSxHQUFBLGtCQUFTO0FBQUEsc0JBZUgsS0FBS0osS0FmRjtBQUFBLFFBRUxLLEVBRkssZUFFTEEsRUFGSztBQUFBLFFBR0xDLFlBSEssZUFHTEEsWUFISztBQUFBLFFBSUxDLFNBSkssZUFJTEEsU0FKSztBQUFBLFFBS0xDLGVBTEssZUFLTEEsZUFMSztBQUFBLFFBTUxDLHdCQU5LLGVBTUxBLHdCQU5LO0FBQUEsUUFPTEMsZ0JBUEssZUFPTEEsZ0JBUEs7QUFBQSxRQVFMQyxtQkFSSyxlQVFMQSxtQkFSSztBQUFBLFFBU0xDLHNCQVRLLGVBU0xBLHNCQVRLO0FBQUEsUUFVTEMsbUJBVkssZUFVTEEsbUJBVks7QUFBQSxRQVdMQyxjQVhLLGVBV0xBLGNBWEs7QUFBQSxRQVlMQyx1QkFaSyxlQVlMQSx1QkFaSztBQUFBLFFBYUxDLGFBYkssZUFhTEEsYUFiSztBQUFBLFFBY0xDLFVBZEssZUFjTEEsVUFkSztBQWdCUCxRQUFNaEIsYUFBYSxHQUFHLENBQUNlLGFBQUQsSUFDakIsQ0FBQ1IsZUFEZ0IsSUFFakIsQ0FBQ0csbUJBRmdCLElBR2pCLENBQUNHLGNBSE47QUFJQSxXQUNFLGdDQUFDLCtCQUFEO0FBQWUsTUFBQSxLQUFLLEVBQUV2QjtBQUF0QixPQUNFLGdDQUFDLHFCQUFELENBQ0U7QUFERixtQkFFTTBCLFVBRk47QUFHRSxNQUFBLEVBQUUsRUFBRVosRUFITjtBQUlFLE1BQUEsZUFBZSxFQUFFRSxTQUpuQjtBQUtFLE1BQUEsWUFBWSxFQUFFLEtBTGhCO0FBTUUsTUFBQSxJQUFJLE1BTk47QUFPRSxNQUFBLEtBQUssRUFBRTtBQUFFVyxRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsUUFBQUEsVUFBVSxFQUFFO0FBQS9CO0FBUFQsUUFTRSxnQ0FBQyxNQUFELFFBQ0UsZ0NBQUMsNEJBQUQsQ0FBVyxLQUFYO0FBQWlCLE1BQUEsRUFBRSxFQUFLZCxFQUFMO0FBQW5CLE9BQ0dDLFlBQVksQ0FBQ2MsS0FEaEIsQ0FERixDQVRGLEVBY0UsZ0NBQUMsSUFBRDtBQUFNLE1BQUEsRUFBRSxFQUFLZixFQUFMLFVBQVI7QUFBd0IsTUFBQSxTQUFTLEVBQUM7QUFBbEMsT0FDR0MsWUFBWSxDQUFDZSxJQURoQixDQWRGLEVBaUJFLGdDQUFDLE1BQUQ7QUFBUSxNQUFBLGFBQWEsRUFBRXBCO0FBQXZCLE9BQ0dlLGFBQWEsSUFBSSxnQ0FBQyxhQUFELFFBQWdCQSxhQUFoQixDQURwQixFQUVFLDZDQUNHUixlQUFlLElBQ2QsZ0NBQUMsTUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFLSCxFQUFMLG9CQURKO0FBRUUsTUFBQSxPQUFPLEVBQUVJLHdCQUZYO0FBR0UsTUFBQSxRQUFRLEVBQUVDLGdCQUhaO0FBSUUsTUFBQSxPQUFPLEVBQUVGO0FBSlgsT0FNR0YsWUFBWSxDQUFDZ0IsRUFOaEIsQ0FGSixFQVdHWCxtQkFBbUIsSUFDbEIsZ0NBQUMsTUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFLTixFQUFMLGtCQURKO0FBRUUsTUFBQSxPQUFPLEVBQUVPLHNCQUZYO0FBR0UsTUFBQSxRQUFRLEVBQUVDLG1CQUhaO0FBSUUsTUFBQSxPQUFPLEVBQUVGO0FBSlgsT0FNR0wsWUFBWSxDQUFDaUIsV0FOaEIsQ0FaSixFQXFCR1QsY0FBYyxJQUNiLGdDQUFDLE1BQUQ7QUFDRSxNQUFBLEVBQUUsRUFBS1QsRUFBTCxtQkFESjtBQUVFLE1BQUEsT0FBTyxFQUFFVSx1QkFGWDtBQUdFLE1BQUEsT0FBTyxFQUFFRDtBQUhYLE9BS0dSLFlBQVksQ0FBQ2tCLE1BTGhCLENBdEJKLENBRkYsQ0FqQkYsQ0FERixDQURGO0FBd0RELEc7OztFQTdFd0NDLGtCQUFNQyxhOzs7QUFzR2pEdkIsYUFBYSxDQUFDd0IsWUFBZCxHQUE2QjtBQUMzQnRCLEVBQUFBLEVBQUUsRUFBRSxtQkFEdUI7QUFFM0JDLEVBQUFBLFlBQVksRUFBRTtBQUNaZ0IsSUFBQUEsRUFBRSxFQUFFLElBRFE7QUFFWkUsSUFBQUEsTUFBTSxFQUFFLFFBRkk7QUFHWkosSUFBQUEsS0FBSyxFQUFFLE9BSEs7QUFJWkMsSUFBQUEsSUFBSSxFQUFFLE1BSk07QUFLWkUsSUFBQUEsV0FBVyxFQUFFO0FBTEQsR0FGYTtBQVMzQmhCLEVBQUFBLFNBQVMsRUFBRSxFQVRnQjtBQVUzQkcsRUFBQUEsZ0JBQWdCLEVBQUUsS0FWUztBQVczQkMsRUFBQUEsbUJBQW1CLEVBQUVpQixTQVhNO0FBWTNCZixFQUFBQSxtQkFBbUIsRUFBRSxLQVpNO0FBYTNCSixFQUFBQSx3QkFBd0IsRUFBRSxJQWJDO0FBYzNCTSxFQUFBQSx1QkFBdUIsRUFBRSxLQWRFO0FBZTNCSCxFQUFBQSxzQkFBc0IsRUFBRSxLQWZHO0FBZ0IzQkUsRUFBQUEsY0FBYyxFQUFFYyxTQWhCVztBQWlCM0JwQixFQUFBQSxlQUFlLEVBQUVvQixTQWpCVTtBQWtCM0JaLEVBQUFBLGFBQWEsRUFBRVksU0FsQlk7QUFtQjNCWCxFQUFBQSxVQUFVLEVBQUU7QUFuQmUsQ0FBN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoUHJpbWl0aXZlLkJ1dHRvbilgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuY29uc3QgZG91YmxlR3V0dGVyV2lkdGggPSBgY2FsYygyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgJiYge1xuICAgIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7ZG91YmxlR3V0dGVyV2lkdGh9O1xuICB9XG5gO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzRm9vdGVyRW1wdHlcbiAgICA/IGAke3RoZW1lLmd1dHRlcldpZHRofSAwIDBgXG4gICAgOiBgJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH0gJHtkb3VibGVHdXR0ZXJXaWR0aH1gKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5jb25zdCBGb290ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29uZmlybUNhbGxiYWNrLFxuICAgICAgcGFpbnRDb25maXJtQnV0dG9uT3JhbmdlLFxuICAgICAgb2tCdXR0b25EaXNhYmxlZCxcbiAgICAgIHRoaXJkQnV0dG9uQ2FsbGJhY2ssXG4gICAgICBwYWludFRoaXJkQnV0dG9uT3JhbmdlLFxuICAgICAgdGhpcmRCdXR0b25EaXNhYmxlZCxcbiAgICAgIGNhbmNlbENhbGxiYWNrLFxuICAgICAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2UsXG4gICAgICBmb290ZXJDb250ZW50LFxuICAgICAgbW9kYWxQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc0Zvb3RlckVtcHR5ID0gIWZvb3RlckNvbnRlbnRcbiAgICAgICYmICFjb25maXJtQ2FsbGJhY2tcbiAgICAgICYmICF0aGlyZEJ1dHRvbkNhbGxiYWNrXG4gICAgICAmJiAhY2FuY2VsQ2FsbGJhY2s7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nXG4gICAgICAgICAgey4uLm1vZGFsUHJvcHN9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIGVuZm9yY2VGb2N1cz17ZmFsc2V9XG4gICAgICAgICAgc2hvd1xuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8UHJpbWl0aXZlLlRpdGxlIGlkPXtgJHtpZH0tdGl0bGVgfT5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy50aXRsZX1cbiAgICAgICAgICAgIDwvUHJpbWl0aXZlLlRpdGxlPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgIDxCb2R5IGlkPXtgJHtpZH0tYm9keWB9IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYm9keX1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgPEZvb3RlciBpc0Zvb3RlckVtcHR5PXtpc0Zvb3RlckVtcHR5fT5cbiAgICAgICAgICAgIHtmb290ZXJDb250ZW50ICYmIDxGb290ZXJDb250ZW50Pntmb290ZXJDb250ZW50fTwvRm9vdGVyQ29udGVudD59XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7Y29uZmlybUNhbGxiYWNrICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpZD17YCR7aWR9LWNvbmZpcm0tYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q29uZmlybUJ1dHRvbk9yYW5nZX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtva0J1dHRvbkRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29uZmlybUNhbGxiYWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMub2t9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHt0aGlyZEJ1dHRvbkNhbGxiYWNrICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBpZD17YCR7aWR9LXRoaXJkLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtwYWludFRoaXJkQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXJkQnV0dG9uRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlyZEJ1dHRvbkNhbGxiYWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMudGhpcmRCdXR0b259XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtjYW5jZWxDYWxsYmFjayAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1jYW5jZWwtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3BhaW50Q2FuY2VsQnV0dG9uT3JhbmdlfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5jYW5jZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbmZpcm1EaWFsb2cucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9rOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGNhbmNlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICBib2R5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIHRoaXJkQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICB9KSxcbiAgY2FuY2VsQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjb25maXJtQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9rQnV0dG9uRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB0aGlyZEJ1dHRvbkNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGhpcmRCdXR0b25EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBhaW50Q2FuY2VsQnV0dG9uT3JhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFpbnRUaGlyZEJ1dHRvbk9yYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZvb3RlckNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIG1vZGFsUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG59O1xuXG5Db25maXJtRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6ICdvYy1jb25maXJtLWRpYWxvZycsXG4gIHRyYW5zbGF0aW9uczoge1xuICAgIG9rOiAnT2snLFxuICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgdGl0bGU6ICdUaXRsZScsXG4gICAgYm9keTogJ0JvZHknLFxuICAgIHRoaXJkQnV0dG9uOiAnJyxcbiAgfSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgb2tCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gIHRoaXJkQnV0dG9uQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbiAgdGhpcmRCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gIHBhaW50Q29uZmlybUJ1dHRvbk9yYW5nZTogdHJ1ZSxcbiAgcGFpbnRDYW5jZWxCdXR0b25PcmFuZ2U6IGZhbHNlLFxuICBwYWludFRoaXJkQnV0dG9uT3JhbmdlOiBmYWxzZSxcbiAgY2FuY2VsQ2FsbGJhY2s6IHVuZGVmaW5lZCxcbiAgY29uZmlybUNhbGxiYWNrOiB1bmRlZmluZWQsXG4gIGZvb3RlckNvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgbW9kYWxQcm9wczoge30sXG59O1xuIl19