"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/pritam/Documents/binbill/components/header.js";


var Header = function (_Component) {
	(0, _inherits3.default)(Header, _Component);

	function Header(props) {
		(0, _classCallCheck3.default)(this, Header);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

		_this.state = {
			activeIndex: _this.props ? _this.props.activeIndex : 0,
			isMobileMenuVisible: false
		};
		return _this;
	}

	(0, _createClass3.default)(Header, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    activeIndex = _state.activeIndex,
			    isMobileMenuVisible = _state.isMobileMenuVisible;

			return _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement("title", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, "BinBill"), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", key: "viewport", __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}), _react2.default.createElement("link", { href: "/static/bootstrap/bootstrap.min.css", rel: "stylesheet", __source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}), _react2.default.createElement("link", { href: "/static/bootstrap/bootstrap-theme.min.css", rel: "stylesheet", __source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}), _react2.default.createElement("link", { href: "/static/quicksand/Quicksand.min.css", rel: "stylesheet", __source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			})), _react2.default.createElement("header", {
				className: "jsx-634001748" + " " + ([activeIndex !== 1 ? "no-blog" : "blog"] || ""),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + "circles right-circles",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}), _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + "circles left-circles",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}), _react2.default.createElement("nav", {
				ref: "navbar",
				id: "navbar",
				role: "navigation",
				className: "jsx-634001748" + " " + "navbar navbar-default",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + "container navbar-inner",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + "logo-wrapper",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement("a", { href: "/", className: "jsx-634001748" + " " + "logo",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement("img", { src: "/static/images/logo.svg", alt: "logo", className: "jsx-634001748" + " " + "logo-image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}))), _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + ((isMobileMenuVisible ? "mobile-menu-visible" : "") || ""),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement("div", {
				onClick: this.toggleMobileMenu,
				className: "jsx-634001748" + " " + "header-menu-body-overlay",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + "header-menu",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement("a", {
				onClick: function onClick(e) {
					return _this2.props.changActiveIndex(0);
				},
				href: "/",
				id: "link-index-0",
				className: "jsx-634001748" + " " + ((activeIndex === 0 ? "item active" : "item") || ""),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, "Home"), _react2.default.createElement("a", {
				onClick: function onClick(e) {
					return _this2.props.changActiveIndex(1);
				},
				href: "/blog",
				id: "link-index-1",
				className: "jsx-634001748" + " " + ((activeIndex === 1 ? "item active" : "item") || ""),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, "Blog"), _react2.default.createElement("a", {
				onClick: function onClick(e) {
					return _this2.props.changActiveIndex(2);
				},
				href: "/faq",
				id: "link-index-2",
				className: "jsx-634001748" + " " + ((activeIndex === 2 ? "item active" : "item") || ""),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, "FAQ's"), _react2.default.createElement("a", {
				onClick: function onClick(e) {
					return _this2.props.changActiveIndex(3);
				},
				href: "/about",
				id: "link-index-3",
				style: { display: "none" },
				className: "jsx-634001748" + " " + ((activeIndex === 3 ? "item active" : "item") || ""),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, "About Us"), _react2.default.createElement("a", {
				onClick: function onClick(e) {
					return _this2.props.changActiveIndex(4);
				},
				href: "/terms",
				id: "link-index-4",
				style: { display: "none" },
				className: "jsx-634001748" + " " + ((activeIndex === 4 ? "item active" : "item") || ""),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, "Terms")))), _react2.default.createElement("a", {
				href: "https://play.google.com/store/apps/details?id=com.bin.binbillcustomer",
				target: "_blank",
				className: "jsx-634001748",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, _react2.default.createElement("button", {
				className: "jsx-634001748" + " " + "ui item auth-item",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, "Download App")), _react2.default.createElement("div", { style: { display: "none" }, className: "jsx-634001748",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}), _react2.default.createElement("div", {
				onClick: this.toggleMobileMenu,
				className: "jsx-634001748" + " " + "mobile-menu-icon-wrapper",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 199
				}
			}, _react2.default.createElement("i", { "aria-hidden": "true", className: "jsx-634001748" + " " + "fa fa-bars mobile-menu-icon",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			})))), _react2.default.createElement("div", {
				hidden: activeIndex === 1,
				className: "jsx-634001748" + " " + "header-bottom container",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 207
				}
			}, _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + "row",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 211
				}
			}, _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + "col-sm-6",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 212
				}
			}, _react2.default.createElement("p", {
				className: "jsx-634001748" + " " + "header-para",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 213
				}
			}, "Build your eHome, and enjoy hassle free bill management")), _react2.default.createElement("div", {
				className: "jsx-634001748" + " " + "col-sm-6 header-mobile-img-container",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 217
				}
			}, _react2.default.createElement("img", { src: "/static/images/phone-3-x-132-d-989-c.png", className: "jsx-634001748" + " " + "header-mobile-img",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 218
				}
			})))), _react2.default.createElement(_style2.default, {
				styleId: "634001748",
				css: ".navbar-default.jsx-634001748{background:none !important;border:none !important;box-shadow:none !important;z-index:1111111111111;height:90px;}.navbar-fixed-top.jsx-634001748{-webkit-backdrop-filter:blur(7px) !important;-webkit-backdrop-filter:blur(7px) !important;backdrop-filter:blur(7px) !important;background-color:rgba(255,255,255,0.95) !important;box-shadow:0 1px 10px 0 rgba(0,0,0,0.1) !important;}.navbar-fixed-top.jsx-634001748:after{-webkit-filter:blur(7px);filter:blur(7px);-moz-filter:blur(7px);-webkit-filter:blur(7px);-o-filter:blur(7px);}header.jsx-634001748{position:relative;}header.no-blog.jsx-634001748{max-width:100%;width:100%;background:url(\"/static/images/rectangle-5.svg\") no-repeat;background-position:right bottom;background-size:cover;}header.blog.jsx-634001748{max-width:100%;width:100%;height:90px;background:url(/static/images/main-hero-bg.svg) no-repeat;background-size:cover;}.navbar-inner.jsx-634001748{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.logo-wrapper.jsx-634001748{-webkit-flex:1;-ms-flex:1;flex:1;}.logo.jsx-634001748{width:160px;height:40px;display:block;}.logo-image.jsx-634001748{width:100%;}.header-menu.jsx-634001748{font-family:\"montserrat-regular\",\"sans-serif\",\"serif\" !important;font-size:1.4rem !important;}.header-menu.jsx-634001748 .item.jsx-634001748{color:rgba(255,255,255,0.6) !important;margin:0 25px;}.header-menu.jsx-634001748 .item.jsx-634001748:hover{color:rgba(255,85,0,1) !important;}.header-menu.jsx-634001748 .active.jsx-634001748{color:rgba(255,255,255,1) !important;}header.jsx-634001748 nav.navbar-fixed-top.jsx-634001748 .header-menu.jsx-634001748 .item.jsx-634001748{color:#cdcdcd !important;}header.jsx-634001748 nav.navbar-fixed-top.jsx-634001748 .header-menu.jsx-634001748 .active.jsx-634001748{color:rgba(255,85,0,1) !important;}header.jsx-634001748 nav.jsx-634001748 .auth-item.jsx-634001748{color:rgba(255,255,255,1) !important;background:linear-gradient(260deg,#ff622e,#ff822e) !important;box-shadow:0 5px 15px 0 rgba(180,75,35,0.35) !important;text-align:center;padding:15px 35px !important;border-radius:100px !important;font-family:\"montserrat-bold\",\"sans-serif\",\"serif\" !important;margin:0 25px;border-style:solid;border-color:#ff822e;}header.jsx-634001748 nav.navbar-fixed-top.jsx-634001748 .auth-item.jsx-634001748{color:rgba(255,255,255,0.8) !important;}.mobile-menu-icon-wrapper.jsx-634001748{width:18px;height:18px;cursor:pointer;display:none;}.mobile-menu-icon.jsx-634001748{font-size:20px !important;color:#fff;}.navbar-fixed-top.jsx-634001748 .mobile-menu-icon.jsx-634001748{color:#399fe5;}@media only screen and (max-width:768px){.logo.jsx-634001748{width:80px;height:20px;}.mobile-menu-icon-wrapper.jsx-634001748{display:block;}.mobile-menu-visible.jsx-634001748 .header-menu-body-overlay.jsx-634001748{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);}.header-menu.jsx-634001748{position:fixed;width:280px;height:100%;background:#fff;top:0;right:0;padding:30px 10px;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:0.3s;transition:0.3s;}.mobile-menu-visible.jsx-634001748 .header-menu.jsx-634001748{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.header-menu.jsx-634001748 .item.jsx-634001748{color:#cdcdcd !important;display:block;margin-bottom:25px;}.header-menu.jsx-634001748 .active.jsx-634001748{color:rgba(255,85,0,1) !important;}}.ui.modal.jsx-634001748>.header.jsx-634001748{padding:10px !important;}.download-modal.jsx-634001748>.content.jsx-634001748{height:70% !important;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}.ui.modal.jsx-634001748 .content-header.jsx-634001748{margin:0 auto !important;padding:0 !important;}.ui.modal.jsx-634001748 .qr-code-block.jsx-634001748{width:48%;font-family:Quicksand,sans-serif;font-size:0.875rem;font-weight:500;text-align:center;color:#3b3b3b;}.ui.modal.jsx-634001748 .or-content.jsx-634001748{width:4%;}.ui.modal.jsx-634001748 .or-content.jsx-634001748 p.jsx-634001748{margin:0 auto;padding:7px;font-family:Quicksand,sans-serif;font-size:0.75rem;font-weight:500;text-align:left;color:#9c9c9c;}.ui.modal.jsx-634001748 .or-content.jsx-634001748 .vertical-row.jsx-634001748{width:1px;height:90px;border:solid 1px #eaeaea;margin:0 auto;}.ui.modal.jsx-634001748 .send-message-bock.jsx-634001748{width:48%;}.ui.modal.jsx-634001748 .send-message-bock.jsx-634001748 p.jsx-634001748{width:85%;margin:0 auto;font-family:Quicksand,sans-serif;font-size:0.875rem;font-weight:500;text-align:center;color:#3b3b3b;}.ui.modal.jsx-634001748 .send-message-bock.jsx-634001748 .mobile-text.jsx-634001748{width:75%;margin:30px auto 15px;border-radius:4px;background-color:#ffffff;border:solid 1px #cdcdcd;}.ui.modal.jsx-634001748 .contact-us-button.jsx-634001748{width:75%;margin:15px 50px;border-radius:44px;background-image:linear-gradient(259deg,#ff622e,#ff822e);box-shadow:0 5px 15px 0 rgba(180,75,35,0.35);font-family:Montserrat,sans-serif;font-size:1rem;font-weight:bold;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;text-align:center;color:#ffffff;}.ui.modal.jsx-634001748 .contact-us-button.jsx-634001748:hover{border-radius:44px;background-image:linear-gradient(259deg,#ff822e,#ff622e);box-shadow:0 5px 15px 0 rgba(180,75,35,0.35);font-family:Montserrat,sans-serif;font-size:1rem;font-weight:bold;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;text-align:center;color:#ffffff;}.ui.modal.jsx-634001748 .qr-code-image.jsx-634001748{width:40% !important;margin:0 0 0 7.5%;}.ui.modal.jsx-634001748 .qr-code-caption.jsx-634001748{padding:0.7rem 1.5rem !important;}.ui.modal.jsx-634001748 .content-header.jsx-634001748 .main-border.jsx-634001748{width:100px;height:5px;background-color:#009ee5;border:solid #009ee5;margin-bottom:5px !important;}.ui.modal.jsx-634001748 .content-header.jsx-634001748 .title-main.jsx-634001748{font-family:Quicksand,serif;font-size:2.875rem;font-weight:500;color:#009ee5;display:inline;}.ui.modal.jsx-634001748 .remove-icon.jsx-634001748{float:right;}.ui.modal.jsx-634001748 .remove-icon.jsx-634001748 i.jsx-634001748{color:#d8d8d8;}.header-bottom.jsx-634001748{margin-top:60px;position:relative;}.circles.jsx-634001748{position:absolute;width:188px;height:231px;bottom:0;right:0;}.right-circles.jsx-634001748{background:url(\"/static/images/group.svg\") no-repeat;background-size:contain;}.left-circles.jsx-634001748{background:url(\"/static/images/group-2.svg\") no-repeat;background-size:contain;right:auto;left:0;}.header-para.jsx-634001748{font-family:Quicksand,serif;font-weight:500;font-size:36px;text-align:left;color:#ffffff;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;padding:90px 0 50px;max-width:400px;}.header-mobile-img-container.jsx-634001748{text-align:right;}.header-mobile-img.jsx-634001748{width:100%;max-width:390px;}.mobile-image-slider.jsx-634001748{margin:0 56px;width:277px;height:498px;object-fit:contain;}.mobile-image-slider.jsx-634001748 img.jsx-634001748{margin-top:26px;}@media only screen and (max-width:420px){.header-bottom.jsx-634001748{margin-top:0px;}.header-para.jsx-634001748{padding:0 0 50px;text-align:center;font-size:18px;max-width:300px;display:block;margin:auto;}.header-mobile-img-container.jsx-634001748{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVPTyxBQUdpQyxBQVFrQixBQU81QixBQU9DLEFBSUgsQUFRQSxBQVFILEFBTUwsQUFJSyxBQU1ELEFBSXdELEFBS3pCLEFBS0wsQUFJRyxBQUlmLEFBSVksQUFJRyxBQWFFLEFBSS9CLEFBT2UsQUFLWixBQUtGLEFBSUcsQUFHQyxBQVFBLEFBV1MsQUFHQyxBQUtZLEFBS2QsQUFJRixBQUtHLEFBS2YsQUFTRCxBQUlLLEFBVUosQUFPQSxBQUlBLEFBVUEsQUFRQSxBQWNTLEFBWUUsQUFLWSxBQUlyQixBQVFpQixBQVFqQixBQUlFLEFBSUUsQUFLRSxBQVFtQyxBQUtFLEFBTzFCLEFBV1osQUFJTixBQUtHLEFBT0UsQUFLQSxBQUdFLEFBUUMsU0F6S3BCLENBVG1DLEFBdUJ0QixBQU9iLEFBSWUsQUFVUSxBQVFMLENBektsQixBQStDYSxBQWlCQyxBQTRNRyxDQTVSSCxBQVVELEFBa05ELEFBZ0JaLEVBaktBLEFBU0MsQUE4RFksQUE4RmIsQUFpRGEsQ0FqVEQsQUFRQSxBQStGSixBQVFNLEFBOE1iLENBekRrQixBQW9EbkIsQ0FoQkEsQUF3Qm9CLENBcFVwQixBQTZRYSxBQStEWixDQWpIMkQsRUEvR25ELEFBMkhVLENBeEZNLEFBa0NDLENBN0ZWLEFBaUJmLEFBNEl5QixDQWxOWCxBQTRHZixBQWlEbUMsQ0FsSW5DLEFBdUVnQixBQW1CTSxDQS9Jc0MsQUFRL0MsQUE2RUQsQUE2RXVCLEFBK0lyQixDQTVVVSxBQTBJVixBQTBGTSxBQW1HcEIsQ0FwTWEsQUEySU8sQUF5Q0gsRUFuQkgsRUF4RUssQ0E1S25CLEFBa05BLENBMUxBLEFBWUEsQUF3RUMsQUFtSUQsQ0E0RGlCLEVBL1FqQixBQVlpRSxBQXlCakUsQ0E3RTJELEFBa0IzRCxBQXFEYyxDQXhDQyxBQWtDZixBQStCYyxBQU9JLEFBYUcsQUFzR3JCLEFBK0VvQixHQTlURyxDQWlLSCxBQXFIVixDQW1CTSxDQWhUc0IsQ0FtS3RDLEFBMEQ0RCxDQTdCN0MsQUF1RUUsQ0FQSyxFQXZRTSxBQTRORixBQStIUixDQWhQbEIsQUF5QmdDLENBaUt2QixDQWxPVCxBQXVPeUIsRUEvSmpCLEFBb0tpQixFQTdGTCxDQTFEbkIsQUFxTEQsQ0FoSm1CLEFBMkhGLENBbEJqQixDQTFKVSxBQTREVixDQXhCaUIsQ0ErRkYsQ0FoUVcsQ0E4Q0csQ0ErUmIsR0EvTUksQUEySFUsTUEzQ0osQUE0RlgsQ0F0R0UsQUE4QmdDLENBaFAxQixBQTZMTixBQWtGRCxBQTJCaEIsQ0F0S0MsQUE0Q2tCLENBK0hQLENBNkNFLElBMU1iLENBeEhpQyxDQWVkLENBb0dTLEVBOUhSLEFBMFNBLENBVGIsRUE3RlcsQUE2RG5CLEFBNkVDLENBaFNELEFBaUlpQixHQTNKTSxBQThJUixDQWdJZixDQXpDQSxDQXZRYSxBQXNGK0MsQ0FzSTVELEdBT2lELE1BcE5qRCxBQStLZSxDQWJmLEFBa0NlLENBbE5mLE9BeUJ1QixBQVN2QixHQTZNb0MsRUFqRHBDLENBcUJBLEdBOU11RCxhQXFCdkQsQUF3SUEsUUFpRW9DLE9BN0lqQixBQTBKSCxlQUNFLEdBMUpZLEtBakZ5QixDQWtDdkQsQ0FvR2tCLEVBd0ZGLEtBY00sSUFzRUQsTUFuRkgsS0E3SWMsU0FpT2YsR0FuRkssTUF6RnJCLE9BNktELEVBblRBLElBa0ZpRSx1REEwSjlDLE9BekpKLFdBMEpBLEdBekpLLE1BNElELEtBY25CLFFBekpzQixLQTRJUCxjQUNmLEVBNUlBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ByaXRhbS9Eb2N1bWVudHMvYmluYmlsbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVJbmRleDogdGhpcy5wcm9wcyA/IHRoaXMucHJvcHMuYWN0aXZlSW5kZXggOiAwLFxuICAgICAgaXNNb2JpbGVNZW51VmlzaWJsZTogZmFsc2VcbiAgICB9O1xuICB9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGFjdGl2ZUluZGV4LCBpc01vYmlsZU1lbnVWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+QmluQmlsbDwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiBrZXk9XCJ2aWV3cG9ydFwiIC8+XG5cdFx0XHRcdFx0PGxpbmsgaHJlZj1cIi9zdGF0aWMvYm9vdHN0cmFwL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHRcdFx0PGxpbmsgaHJlZj1cIi9zdGF0aWMvYm9vdHN0cmFwL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHRcdFx0PGxpbmsgaHJlZj1cIi9zdGF0aWMvcXVpY2tzYW5kL1F1aWNrc2FuZC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGhlYWRlciBjbGFzc05hbWU9e1thY3RpdmVJbmRleCAhPT0gMSA/IFwibm8tYmxvZ1wiIDogXCJibG9nXCJdfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZXMgcmlnaHQtY2lyY2xlc1wiIC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaXJjbGVzIGxlZnQtY2lyY2xlc1wiIC8+XG5cdFx0XHRcdFx0PG5hdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0XCJcblx0XHRcdFx0XHRcdHJlZj1cIm5hdmJhclwiXG5cdFx0XHRcdFx0XHRpZD1cIm5hdmJhclwiXG5cdFx0XHRcdFx0XHRyb2xlPVwibmF2aWdhdGlvblwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbmF2YmFyLWlubmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsb2dvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pbWFnZXMvbG9nby5zdmcnIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJsb2dvLWltYWdlXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2EgXHQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17aXNNb2JpbGVNZW51VmlzaWJsZSA/IFwibW9iaWxlLW1lbnUtdmlzaWJsZVwiIDogXCJcIn0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy50b2dnbGVNb2JpbGVNZW51fVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGVyLW1lbnUtYm9keS1vdmVybGF5XCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4ID09PSAwID8gXCJpdGVtIGFjdGl2ZVwiIDogXCJpdGVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiB0aGlzLnByb3BzLmNoYW5nQWN0aXZlSW5kZXgoMCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIi9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgbGluay1pbmRleC0wYH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEhvbWVcbiAgICAgICAgICAgICAgICAgIDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXggPT09IDEgPyBcIml0ZW0gYWN0aXZlXCIgOiBcIml0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMuY2hhbmdBY3RpdmVJbmRleCgxKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiL2Jsb2dcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgbGluay1pbmRleC0xYH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEJsb2dcbiAgICAgICAgICAgICAgICAgIDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXggPT09IDIgPyBcIml0ZW0gYWN0aXZlXCIgOiBcIml0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMuY2hhbmdBY3RpdmVJbmRleCgyKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiL2ZhcVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BsaW5rLWluZGV4LTJgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RkFRJ3NcbiAgICAgICAgICAgICAgICAgIDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXggPT09IDMgPyBcIml0ZW0gYWN0aXZlXCIgOiBcIml0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMuY2hhbmdBY3RpdmVJbmRleCgzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiL2Fib3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17YGxpbmstaW5kZXgtM2B9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFib3V0IFVzXG4gICAgICAgICAgICAgICAgICA8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4ID09PSA0ID8gXCJpdGVtIGFjdGl2ZVwiIDogXCJpdGVtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiB0aGlzLnByb3BzLmNoYW5nQWN0aXZlSW5kZXgoNCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIi90ZXJtc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BsaW5rLWluZGV4LTRgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRUZXJtc1xuICAgICAgICAgICAgICAgICAgPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmJpbi5iaW5iaWxsY3VzdG9tZXJcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGl0ZW0gYXV0aC1pdGVtXCI+RG93bmxvYWQgQXBwPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHR7LyogPE1vZGFsXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkb3dubG9hZC1tb2RhbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6IFwiMzIwcHhcIiB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlcj17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidWkgaXRlbSBhdXRoLWl0ZW1cIj5Eb3dubG9hZCBBcHA8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uT3Blbj17ZSA9PiB0aGlzLnByb3BzLnVwZGF0ZU1vZGFsT3BlblN0YXRlKHRydWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b3Blbj17dGhpcy5wcm9wcy5pc0Rvd25sb2FkTW9kYWxPcGVufVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxNb2RhbC5IZWFkZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZS1tYWluXCI+RG93bmxvYWQgQXBwPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZW1vdmUtaWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMudXBkYXRlTW9kYWxPcGVuU3RhdGUoZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uIG5hbWU9XCJyZW1vdmVcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNb2RhbC5Db250ZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInFyLWNvZGUtYmxvY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJxci1jb2RlLWNhcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNjYW4gdGhpcyBRUiBDb2RlIHRvIGRvd25sb2FkIHRoZSBhcHBcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YmJfcXJjb2RlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQmluQmlsbCBRUiBDb2RlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInFyLWNvZGUtaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9yLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLXJvd1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+T1I8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1yb3dcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZW5kLW1lc3NhZ2UtYm9ja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0V2UgY2FuIHNlbmQgeW91IGFuIFNNUyB3aXRoIGEgcGxheXN0b3JlIGxpbmsgdG8gZG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgICB0aGUgYXBwXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IG1vYmlsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcImlucHV0W25hbWU9bXNnbW9iaWxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCB2YWxpZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBob25lVXRpbCA9IFBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkID0gcGhvbmVVdGlsLmlzVmFsaWROdW1iZXIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwaG9uZVV0aWwucGFyc2UobW9iaWxlSW5wdXQudmFsdWUudHJpbSgpLCBcIklOXCIpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHZhbGlkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobW9iaWxlSW5wdXQudmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuc2V0SXNWYWxpZFBob25lTnVtYmVyKHZhbGlkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoQ29udGFjdFVzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2JpbGVJbnB1dC52YWx1ZS50cmltKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2JpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy51cGRhdGVQaG9uZU51bWJlcihcIlwiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnVwZGF0ZU1vZGFsT3BlblN0YXRlKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnNldElzVmFsaWRQaG9uZU51bWJlcih2YWxpZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm0uSW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibW9iaWxlLXRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIk1vYmlsZSBOby5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibXNnbW9iaWxlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRlbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yPXshdGhpcy5wcm9wcy5pc1ZhbGlkTXNnTW9iaWxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudXBkYXRlUGhvbmVOdW1iZXIoZS50YXJnZXQudmFsdWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMubXNnTW9iaWxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiY29udGFjdC11cy1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNlbmRcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Nb2RhbC5Db250ZW50PlxuXHRcdFx0XHRcdFx0XHRcdDwvTW9kYWw+ICovfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9iaWxlTWVudX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1pY29uLXdyYXBwZXJcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyBtb2JpbGUtbWVudS1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJoZWFkZXItYm90dG9tIGNvbnRhaW5lclwiXG5cdFx0XHRcdFx0XHRoaWRkZW49e2FjdGl2ZUluZGV4ID09PSAxfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXItcGFyYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0QnVpbGQgeW91ciBlSG9tZSwgYW5kIGVuam95IGhhc3NsZSBmcmVlIGJpbGwgbWFuYWdlbWVudFxuICAgICAgICAgICAgICA8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGhlYWRlci1tb2JpbGUtaW1nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaGVhZGVyLW1vYmlsZS1pbWdcIiBzcmM9Jy9zdGF0aWMvaW1hZ2VzL3Bob25lLTMteC0xMzItZC05ODktYy5wbmcnIC8+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxTbGlkZXIgey4uLnNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLWltYWdlLXNsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkZXItbW9iaWxlLWltZy0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaG9uZUltYWdlfSBhbHQ9XCJQaG9uZSBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZGVyLW1vYmlsZS1pbWctMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGhvbmVJbWFnZTJ9IGFsdD1cIlBob25lIEltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkZXItbW9iaWxlLWltZy0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaG9uZUltYWdlM30gYWx0PVwiUGhvbmUgSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+ICovfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5uYXZiYXItZGVmYXVsdCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdFx0XHR6LWluZGV4OiAxMTExMTExMTExMTExO1xuXHRcdFx0XHRcdGhlaWdodDogOTBweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5uYXZiYXItZml4ZWQtdG9wIHtcblx0XHRcdFx0XHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCkgIWltcG9ydGFudDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm5hdmJhci1maXhlZC10b3A6YWZ0ZXIge1xuXHRcdFx0XHRcdGZpbHRlcjogYmx1cig3cHgpO1xuXHRcdFx0XHRcdC1tb3otZmlsdGVyOiBibHVyKDdweCk7XG5cdFx0XHRcdFx0LXdlYmtpdC1maWx0ZXI6IGJsdXIoN3B4KTtcblx0XHRcdFx0XHQtby1maWx0ZXI6IGJsdXIoN3B4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGhlYWRlciB7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aGVhZGVyLm5vLWJsb2cge1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCIvc3RhdGljL2ltYWdlcy9yZWN0YW5nbGUtNS5zdmdcIikgbm8tcmVwZWF0O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aGVhZGVyLmJsb2cge1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDkwcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL21haW4taGVyby1iZy5zdmcpIG5vLXJlcGVhdDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm5hdmJhci1pbm5lciB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5sb2dvLXdyYXBwZXIge1xuXHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubG9nbyB7XG5cdFx0XHRcdFx0d2lkdGg6IDE2MHB4O1xuXHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5sb2dvLWltYWdlIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5oZWFkZXItbWVudSB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwibW9udHNlcnJhdC1yZWd1bGFyXCIsIFwic2Fucy1zZXJpZlwiLCBcInNlcmlmXCIgIWltcG9ydGFudDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmhlYWRlci1tZW51IC5pdGVtIHtcblx0XHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDI1cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaGVhZGVyLW1lbnUgLml0ZW06aG92ZXIge1xuXHRcdFx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgODUsIDAsIDEpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaGVhZGVyLW1lbnUgLmFjdGl2ZSB7XG5cdFx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGhlYWRlciBuYXYubmF2YmFyLWZpeGVkLXRvcCAuaGVhZGVyLW1lbnUgLml0ZW0ge1xuXHRcdFx0XHRcdGNvbG9yOiAjY2RjZGNkICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoZWFkZXIgbmF2Lm5hdmJhci1maXhlZC10b3AgLmhlYWRlci1tZW51IC5hY3RpdmUge1xuXHRcdFx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgODUsIDAsIDEpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoZWFkZXIgbmF2IC5hdXRoLWl0ZW0ge1xuXHRcdFx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2MGRlZywgI2ZmNjIyZSwgI2ZmODIyZSkgIWltcG9ydGFudDtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDVweCAxNXB4IDAgcmdiYSgxODAsIDc1LCAzNSwgMC4zNSkgIWltcG9ydGFudDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogMTVweCAzNXB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJtb250c2VycmF0LWJvbGRcIiwgXCJzYW5zLXNlcmlmXCIsIFwic2VyaWZcIiAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAyNXB4O1xuXHRcdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZmY4MjJlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aGVhZGVyIG5hdi5uYXZiYXItZml4ZWQtdG9wIC5hdXRoLWl0ZW0ge1xuXHRcdFx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tb2JpbGUtbWVudS1pY29uLXdyYXBwZXIge1xuXHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tb2JpbGUtbWVudS1pY29uIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5uYXZiYXItZml4ZWQtdG9wIC5tb2JpbGUtbWVudS1pY29uIHtcblx0XHRcdFx0XHRjb2xvcjogIzM5OWZlNTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHQubG9nbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogODBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm1vYmlsZS1tZW51LWljb24td3JhcHBlciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm1vYmlsZS1tZW51LXZpc2libGUgLmhlYWRlci1tZW51LWJvZHktb3ZlcmxheSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5oZWFkZXItbWVudSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjgwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzMHB4IDEwcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjNzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubW9iaWxlLW1lbnUtdmlzaWJsZSAuaGVhZGVyLW1lbnUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaGVhZGVyLW1lbnUgLml0ZW0ge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNjZGNkY2QgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmhlYWRlci1tZW51IC5hY3RpdmUge1xuXHRcdFx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCA4NSwgMCwgMSkgIWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudWkubW9kYWwgPiAuaGVhZGVyIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZG93bmxvYWQtbW9kYWwgPiAuY29udGVudCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudWkubW9kYWwgLmNvbnRlbnQtaGVhZGVyIHtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC51aS5tb2RhbCAucXItY29kZS1ibG9jayB7XG5cdFx0XHRcdFx0d2lkdGg6IDQ4JTtcblx0XHRcdFx0XHRmb250LWZhbWlseTogUXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44NzVyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0Y29sb3I6ICMzYjNiM2I7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudWkubW9kYWwgLm9yLWNvbnRlbnQge1xuXHRcdFx0XHRcdHdpZHRoOiA0JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC51aS5tb2RhbCAub3ItY29udGVudCBwIHtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRwYWRkaW5nOiA3cHg7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZCwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDAuNzVyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdGNvbG9yOiAjOWM5YzljO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnVpLm1vZGFsIC5vci1jb250ZW50IC52ZXJ0aWNhbC1yb3cge1xuXHRcdFx0XHRcdHdpZHRoOiAxcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiA5MHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogc29saWQgMXB4ICNlYWVhZWE7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudWkubW9kYWwgLnNlbmQtbWVzc2FnZS1ib2NrIHtcblx0XHRcdFx0XHR3aWR0aDogNDglO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnVpLm1vZGFsIC5zZW5kLW1lc3NhZ2UtYm9jayBwIHtcblx0XHRcdFx0XHR3aWR0aDogODUlO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRjb2xvcjogIzNiM2IzYjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC51aS5tb2RhbCAuc2VuZC1tZXNzYWdlLWJvY2sgLm1vYmlsZS10ZXh0IHtcblx0XHRcdFx0XHR3aWR0aDogNzUlO1xuXHRcdFx0XHRcdG1hcmdpbjogMzBweCBhdXRvIDE1cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0Ym9yZGVyOiBzb2xpZCAxcHggI2NkY2RjZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC51aS5tb2RhbCAuY29udGFjdC11cy1idXR0b24ge1xuXHRcdFx0XHRcdHdpZHRoOiA3NSU7XG5cdFx0XHRcdFx0bWFyZ2luOiAxNXB4IDUwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNDRweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjU5ZGVnLCAjZmY2MjJlLCAjZmY4MjJlKTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDVweCAxNXB4IDAgcmdiYSgxODAsIDc1LCAzNSwgMC4zNSk7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudWkubW9kYWwgLmNvbnRhY3QtdXMtYnV0dG9uOmhvdmVyIHtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0NHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNTlkZWcsICNmZjgyMmUsICNmZjYyMmUpO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNXB4IDE1cHggMCByZ2JhKDE4MCwgNzUsIDM1LCAwLjM1KTtcblx0XHRcdFx0XHRmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC51aS5tb2RhbCAucXItY29kZS1pbWFnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDQwJSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDAgNy41JTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC51aS5tb2RhbCAucXItY29kZS1jYXB0aW9uIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjdyZW0gMS41cmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudWkubW9kYWwgLmNvbnRlbnQtaGVhZGVyIC5tYWluLWJvcmRlciB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogNXB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDllZTU7XG5cdFx0XHRcdFx0Ym9yZGVyOiBzb2xpZCAjMDA5ZWU1O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnVpLm1vZGFsIC5jb250ZW50LWhlYWRlciAudGl0bGUtbWFpbiB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZCwgc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyLjg3NXJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMDA5ZWU1O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC51aS5tb2RhbCAucmVtb3ZlLWljb24ge1xuXHRcdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC51aS5tb2RhbCAucmVtb3ZlLWljb24gaSB7XG5cdFx0XHRcdFx0Y29sb3I6ICNkOGQ4ZDg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaGVhZGVyLWJvdHRvbSB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogNjBweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2lyY2xlcyB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHdpZHRoOiAxODhweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIzMXB4O1xuXHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yaWdodC1jaXJjbGVzIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCIvc3RhdGljL2ltYWdlcy9ncm91cC5zdmdcIikgbm8tcmVwZWF0O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5sZWZ0LWNpcmNsZXMge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybChcIi9zdGF0aWMvaW1hZ2VzL2dyb3VwLTIuc3ZnXCIpIG5vLXJlcGVhdDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHRcdFx0cmlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5oZWFkZXItcGFyYSB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZCwgc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0XHRwYWRkaW5nOiA5MHB4IDAgNTBweDtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmhlYWRlci1tb2JpbGUtaW1nLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaGVhZGVyLW1vYmlsZS1pbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1heC13aWR0aDogMzkwcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubW9iaWxlLWltYWdlLXNsaWRlciB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDU2cHg7XG5cdFx0XHRcdFx0d2lkdGg6IDI3N3B4O1xuXHRcdFx0XHRcdGhlaWdodDogNDk4cHg7XG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tb2JpbGUtaW1hZ2Utc2xpZGVyIGltZyB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMjZweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcblx0XHRcdFx0XHQuaGVhZGVyLWJvdHRvbSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5oZWFkZXItcGFyYSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgNTBweDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmhlYWRlci1tb2JpbGUtaW1nLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=components/header.js */"
			})));
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIkhlYWRlciIsInByb3BzIiwic3RhdGUiLCJhY3RpdmVJbmRleCIsImlzTW9iaWxlTWVudVZpc2libGUiLCJ0b2dnbGVNb2JpbGVNZW51IiwiY2hhbmdBY3RpdmVJbmRleCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7Ozs7Ozs7SSxBQUVEO2lDQUNMOztpQkFBQSxBQUFZLE9BQU87c0NBQUE7O29JQUFBLEFBQ1YsQUFDTjs7UUFBQSxBQUFLO2dCQUNVLE1BQUEsQUFBSyxRQUFRLE1BQUEsQUFBSyxNQUFsQixBQUF3QixjQUQxQixBQUN3QyxBQUNuRDt3QkFKYyxBQUVoQixBQUFhLEFBRVU7QUFGVixBQUNYO1NBR0g7Ozs7OzJCQUNPO2dCQUFBOztnQkFDcUMsS0FEckMsQUFDMEM7T0FEMUMsQUFDQSxxQkFEQSxBQUNBO09BREEsQUFDYSw2QkFEYixBQUNhLEFBQ3JCOzswQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxvREFBTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4Qix5Q0FBd0MsS0FBdEUsQUFBMEU7ZUFBMUU7aUJBRkQsQUFFQyxBQUNBO0FBREE7K0NBQ00sTUFBTixBQUFXLHVDQUFzQyxLQUFqRCxBQUFxRDtlQUFyRDtpQkFIRCxBQUdDLEFBQ0E7QUFEQTsrQ0FDTSxNQUFOLEFBQVcsNkNBQTRDLEtBQXZELEFBQTJEO2VBQTNEO2lCQUpELEFBSUMsQUFDQTtBQURBOytDQUNNLE1BQU4sQUFBVyx1Q0FBc0MsS0FBakQsQUFBcUQ7ZUFBckQ7aUJBTkYs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Q0FBQSxBQUFrQjs7ZUFBbEI7aUJBQUE7QUFBQTtBQUFBLE1BdkVGLEFBbUVDLEFBSUMsQUFFRCx5REFBSyxPQUFPLEVBQUUsU0FBZCxBQUFZLEFBQVcscUJBQXZCOztlQUFBO2lCQXpFRCxBQXlFQyxBQThGQTtBQTlGQTt1QkE4RkEsY0FBQTthQUNVLEtBRFYsQUFDZTt1Q0FEZixBQUVXOztlQUZYO2lCQUFBLEFBSUM7QUFKRDtBQUNDLDJDQUcyQyxlQUEzQyxBQUF1RCwyQ0FBdkQsQUFBYTs7ZUFBYjtpQkFwTEosQUFHQyxBQU1DLEFBdUtDLEFBSUMsQUFJSDtBQUpHOzBCQUlILGNBQUE7WUFFUyxnQkFGVCxBQUV5Qjt1Q0FGekIsQUFDVzs7ZUFEWDtpQkFBQSxBQUlDO0FBSkQ7QUFFQyxzQkFFQSxjQUFBO3VDQUFBLEFBQWU7O2VBQWY7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTt1Q0FBQSxBQUFlOztlQUFmO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7dUNBQUEsQUFBYTs7ZUFBYjtpQkFBQTtBQUFBO0FBQUEsTUFGRixBQUNDLEFBQ0MsQUFJRCw2RUFBQSxjQUFBO3VDQUFBLEFBQWU7O2VBQWY7aUJBQUEsQUFDQztBQUREO0FBQUEsNkNBQ29DLEtBQW5DLEFBQXVDLCtFQUF2QyxBQUFlOztlQUFmO2lCQW5NSixBQXdMQyxBQUlDLEFBTUMsQUFDQztBQUFBOzthQW5NSjtTQVRGLEFBQ0MsQUFRQyxBQTZqQkY7QUE3akJFOzs7OztBQW5CaUIsQSxBQW1sQnJCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wcml0YW0vRG9jdW1lbnRzL2JpbmJpbGwifQ==