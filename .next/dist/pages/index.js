"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _header = require("../components/header");

var _header2 = _interopRequireDefault(_header);

var _footer = require("../components/footer");

var _footer2 = _interopRequireDefault(_footer);

var _dashboard = require("./dashboard");

var _dashboard2 = _interopRequireDefault(_dashboard);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/pritam/Documents/binbill/pages/index.js?entry";


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "root", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_dashboard2.default, { blogData: this.props.blogData, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement(_footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios2.default.get('http://52.66.79.240/wp-json/wp/v2/posts/');

              case 2:
                res = _context.sent;
                return _context.abrupt("return", { blogData: res.data });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiRm9vdGVyIiwiTWFpbiIsImF4aW9zIiwiSW5kZXgiLCJwcm9wcyIsImJsb2dEYXRhIiwicmVxIiwiZ2V0IiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPOzs7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7Ozs2QkFLSyxBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLHFDQUFLLFVBQVUsS0FBQSxBQUFLLE1BQXJCLEFBQTJCO29CQUEzQjtzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFKSixBQUNFLEFBR0UsQUFJTDtBQUpLO0FBQUE7Ozs7OztZLEFBVHlCLFdBQUEsQTs7Ozs7Ozt1QkFDWCxnQkFBQSxBQUFNLElBQU4sQUFBVSxBOzttQkFBdEI7QTtpREFDQyxFQUFFLFVBQVMsSUFBWCxBQUFlLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFITixBLEFBaUJwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9wcml0YW0vRG9jdW1lbnRzL2JpbmJpbGwifQ==