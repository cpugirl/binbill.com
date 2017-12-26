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

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/pritam/Documents/binbill/pages/dashboard.js";


var Main = function (_Component) {
  (0, _inherits3.default)(Main, _Component);

  function Main(props) {
    (0, _classCallCheck3.default)(this, Main);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));

    _this.state = {
      isOnBrowser: false
    };
    return _this;
  }

  (0, _createClass3.default)(Main, [{
    key: "componentDidMount",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isOnBrowser: true
                });
                console.log("data", this.props.blogData);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "renderBlogs",
    value: function renderBlogs() {
      var blogs = this.props ? this.props.blogData.slice(0, 3) : [];

      return blogs.map(function (blog) {
        return _react2.default.createElement("a", {
          key: blog.id,
          href: "/blog/" + blog.id,
          className: "col-sm-4 dashboard-blog-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, _react2.default.createElement("div", {
          className: "dashboard-blog-image",
          style: { backgroundImage: "url(" + blog.image + ")" },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }), _react2.default.createElement("h4", { className: "dashboard-blog-title", __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, blog.title.rendered));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isOnBrowser = this.state.isOnBrowser;

      var renderSocial = null;
      if (isOnBrowser) {
        var Social = require("../components/social");
        renderSocial = _react2.default.createElement(Social, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        });
      }

      return _react2.default.createElement("div", {
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-15.svg", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Smart Safe"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Securely store all your important bills, documents, licenses etc., in your eHome."))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-16.png", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Feel Empowered"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Connect with over 100 brands, for product information, or any other enquiry."))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-46.svg", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Easy Communication"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Over 88,000 authorised service centers at your disposal, across 40+ cities.")))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-24.png", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Stay updated"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Track expenses, taxes paid, or get monthly expense statements."))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-47.png", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Timely renewals"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Get timely reminders for insurance, warranty claims or emi payments."))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-12.png", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Product Card"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "Never miss out any information of the product in your sight.")))))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container-fluid about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row about-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-6 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, _react2.default.createElement("img", {
        src: "/static/images/group-29.svg",
        className: "jsx-2594712439" + " " + "about-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2594712439" + " " + "title2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, "What is BinBill?"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, _react2.default.createElement("p", {
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, "BinBill is an application to keeps all your bills, invoices and documents at one place. BinBill app has helped individuals ease out after sales and brand communication by allowing them to communicate with brands for various information and products. Product card enables the users to stay updated with all the products relevant information like date of manufacturing or purchase. The one of the most loved features by the users is the eHome, a virtual safe for securely storing bills and important documents.")))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row about-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-6 text-center about-item-2-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, _react2.default.createElement("img", {
        src: "/static/images/group-33.png",
        className: "jsx-2594712439" + " " + "about-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-6 about-item-2-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2594712439" + " " + "title2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, "Filling the Gap"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, _react2.default.createElement("p", {
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, "Now, you don\u2019t have to search for bills, simply download the BinBill app, fill the gaps, connect with brands, get product info, timely reminders, and hassle-free after-sales services and access your bills anytime and anywhere."), _react2.default.createElement("p", {
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, "Where there is a bill, there is BinBill!")))))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2594712439" + " " + "orange-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, "Consumer Awareness"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, _react2.default.createElement("p", {
        className: "jsx-2594712439" + " " + "blog-head-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, "It is our endeavour to keep our customer updated with the current affairs of Indian economic system, be it related to GST, or consumer rights.communication give you stress. Just use BinBill!")), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, this.renderBlogs()), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "know-more-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, _react2.default.createElement("a", { href: "/blog", className: "jsx-2594712439" + " " + "know-more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, "Know More"))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container testimonials-carousel-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2594712439" + " " + "orange-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, "Our users love us!"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "testimonials-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, renderSocial), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container-fluid playstore-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, _react2.default.createElement("div", {
        style: {
          backgroundImage: "url('/static/images/app-download-back.svg')"
        },
        className: "jsx-2594712439" + " " + "playstore-section-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "device-images-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      }, _react2.default.createElement("img", {
        src: "/static/images/i-phone-7-mockup@3x.png",
        alt: "iPhone Image",
        className: "jsx-2594712439" + " " + "device-image iphone-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }), _react2.default.createElement("img", {
        src: "/static/images/google-pixel-really-blue@3x.png",
        alt: "Android Image",
        className: "jsx-2594712439" + " " + "device-image android-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-7 download-app-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, _react2.default.createElement("p", {
        className: "jsx-2594712439" + " " + "title2 title2-small download-app-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, "Download the BinBill App"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }), _react2.default.createElement("span", {
        className: "jsx-2594712439" + " " + "download-app-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, "Never miss out on any bill, or let after sales communication give you stress. Just use BinBill!"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "playstore-badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        }
      }, _react2.default.createElement("a", { href: "http://play.google.com/store/apps/details?id=com.bin.binbillcustomer", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        }
      }, _react2.default.createElement("img", {
        src: "/static/images/playstore-badge.png",
        alt: "Play Store Badge",
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      }), " ")))))), _react2.default.createElement(_style2.default, {
        styleId: "2594712439",
        css: ".image.jsx-2594712439{margin-top:50px;}.title.jsx-2594712439{font-family:Quicksand;font-size:24px;font-weight:bold;text-align:center;color:#ff732e;}.title2.jsx-2594712439{font-family:Quicksand;font-size:48px;font-weight:bold;text-align:left;color:#ffffff;margin-bottom:10px;}.title2-small.jsx-2594712439{font-size:36px;}.description.jsx-2594712439{font-family:Quicksand;font-size:18px;color:#4a4a4a;margin-top:15px;}.description2.jsx-2594712439{font-family:OpenSans;font-size:16px;line-height:1.71;text-align:left;color:#ffffff;margin-top:10px;}.content.jsx-2594712439{margin-top:35px;padding-bottom:20px;}.about.jsx-2594712439{background:url(\"/static/images/group-48.svg\") no-repeat;background-size:cover;margin-bottom:90px;margin-top:50px;}.about-item.jsx-2594712439{overflow:hidden;margin-bottom:50px;padding:40px 0;}.about-image.jsx-2594712439{width:100%;max-width:400px;padding:20px;}.about-item-2-image.jsx-2594712439{float:right;}.about-item-2-content.jsx-2594712439{float:left;}.main-border.jsx-2594712439{width:79px;height:5px;border-radius:2.5px;background-color:#ffffff;margin-bottom:30px;}.main-border2.jsx-2594712439{width:47px;height:5px;border-radius:2.5px;margin-top:5px;background-image:linear-gradient(266deg,#ff802e,#ff652e);}.orange-heading.jsx-2594712439{font-family:Quicksand;font-size:36px;font-weight:bold;text-align:left;color:#ff732e;margin:0;}.blog-head-description.jsx-2594712439{font-family:Quicksand;font-size:14px;font-weight:500;text-align:left;color:#4a4a4a;margin:20px auto 35px !important;}.dashboard-blog-item.jsx-2594712439{display:block;margin-bottom:35px;}.dashboard-blog-image.jsx-2594712439{width:100%;height:230px;overflow:hidden;background-repeat:no-repeat;background-size:cover;}.dashboard-blog-title.jsx-2594712439{margin-top:10px;font-family:Quicksand;font-size:20px;font-weight:bold;text-align:left;color:#4a4a4a;height:50px;overflow:hidden;}.know-more-wrapper.jsx-2594712439{text-align:right;}.know-more.jsx-2594712439{display:inline-block;padding:10px 35px;width:170px;border-radius:26px;background-image:-webkit-linear-gradient( 190deg, #ff802e, #ff652e );background-image:-o-linear-gradient(190deg,#ff802e,#ff652e);background-image:linear-gradient(260deg,#ff802e,#ff652e);font-family:Quicksand,sans-serif;font-size:16px;font-weight:500;text-align:center;color:#ffffff;text-decoration:none;}.know-more.jsx-2594712439:hover{background-image:linear-gradient(260deg,#ff652e,#ff802e);color:#ffffff;}.testimonials-carousel-heading.jsx-2594712439{margin-top:60px;}.testimonials-container.jsx-2594712439{margin:30px 0;}.playstore-section.jsx-2594712439{position:relative;padding-bottom:30px;}.device-images-container.jsx-2594712439{display:inline-block;position:relative;height:560px;max-width:360px;width:100%;}.device-image.jsx-2594712439{position:absolute;bottom:0;}.iphone-image.jsx-2594712439{right:0;width:48%;}.android-image.jsx-2594712439{left:0;width:58%;}.playstore-section-bg.jsx-2594712439{background-repeat:no-repeat;position:absolute;bottom:0;width:100%;left:0;height:450px;}.playstore-badge.jsx-2594712439{width:280px;margin-top:20px;}.playstore-badge.jsx-2594712439 img.jsx-2594712439{width:100%;}.download-app-details.jsx-2594712439{margin-top:200px;}.download-app-desc.jsx-2594712439{color:#fff;font-size:20px;}@media only screen and (max-width:768px){.about.jsx-2594712439{background:url(\"/static/images/group-34.svg\") no-repeat;background-size:100% 100%;}.about-image.jsx-2594712439{margin-bottom:45px;}.title2.jsx-2594712439{font-size:25px;text-align:center;}.main-border.jsx-2594712439{width:47px;height:3px;border-radius:2.5px;background-color:#ffffff;margin-top:10px;top:50%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);position:relative;}.description2.jsx-2594712439{width:100%;max-width:320px;font-size:16px;margin:20px auto 50px;text-align:center;}.main-border2.jsx-2594712439{margin:10px auto;}.about-item-2-image.jsx-2594712439{float:none;}.about-item-2-content.jsx-2594712439{float:none;}.orange-heading.jsx-2594712439{font-size:20px;text-align:center;}.blog-head-description.jsx-2594712439{text-align:center;}.know-more-wrapper.jsx-2594712439{text-align:center;}.playstore-section-bg.jsx-2594712439{height:450px;}.download-app-details.jsx-2594712439{margin-top:50px !important;text-align:center;}.playstore-badge.jsx-2594712439{margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtZVcsQUFHK0IsQUFJTSxBQVFBLEFBU1AsQUFJTyxBQU9ELEFBU0wsQUFLd0MsQUFPeEMsQUFNTCxBQU1DLEFBSUQsQUFJQSxBQVFBLEFBUVcsQUFVQSxBQVNSLEFBS0gsQUFRSyxBQVdDLEFBSUksQUFvQnNDLEFBSzNDLEFBSUYsQUFJSSxBQUtHLEFBUUgsQUFLVixBQUtELEFBS3FCLEFBU2hCLEFBS0QsQUFHTSxBQUdOLEFBTStDLEFBSXJDLEFBR0osQUFJSixBQVdBLEFBT00sQUFHTixBQUdBLEFBR0ksQUFJRyxBQUdBLEFBR0wsQUFHYyxBQUlmLE9BckZKLENBTEEsR0FoSU0sQUFVbEIsQUFJYSxBQVFBLEFBZ0NFLEFBa0dmLEFBTWlCLEFBaUJGLEFBV0ssQUFVbEIsQUFHQSxDQWpNRixBQTZJa0IsQUF3RWhCLENBUEEsQ0FuS21CLEFBeURyQixDQWhKQSxBQWlOc0IsQUErQkEsQ0FyUXRCLEFBeUNzQixBQVlELEFBb0VHLEFBd0N4QixDQTdCQSxBQTZEQSxBQXFCQSxBQXNDRSxDQW5Gb0IsQUFhWCxBQU1YLEFBNkVFLEFBR0EsQ0F6Q0EsRUFuTWUsQUF3R0csQUFzQ0EsQ0ExS0gsQUFRQSxBQWFBLEFBaURLLEFBUUEsQUFPTCxBQVVBLEFBd0lPLEVBekhOLEVBd0dsQixDQTlKZSxBQTJIZixBQStEbUIsQUE0QkcsQ0E3RUYsQUFVcEIsS0FsR0EsQUEwSEUsQUErQkEsRUFoTmUsQ0FyQkUsQUFTbkIsQ0FyQ21CLEFBUUEsQUFhSCxBQWdFRyxBQVVELENBc0JELEFBZ0RqQixDQWpDYyxBQXNDQyxDQWxIZixBQXNEOEIsRUF4Q0gsQUFRVixBQXlKWSxBQVdILEdBNEJ4QixDQTdFUyxJQS9JWCxDQTVCa0IsQUErR0csQ0FzQ0gsQ0E5SUEsQUFtRUEsQUFzQkMsQ0FySEMsQUFRRixBQTZFQSxDQTRHTCxDQXpKVyxBQWlMTSxDQTNJK0IsQUF3RTdDLE9BNEZNLEVBaERiLENBNUtULEFBZ0RxQixBQWlLRCxDQXpISSxBQTZEWCxDQTlJRyxBQW1FQSxDQXZGQSxBQTZFQSxBQWdDRSxBQW1CZixDQWNILENBdEpnQixDQWtNRCxLQTFKTSxDQW1JckIsR0E4Q0UsQUF5QkEsQ0FyTmdCLEFBbUVpQixBQXVJdkIsQ0E5TlMsQUE2RVYsRUFyRlgsQUFxRUEsQUFnRGdCLEFBNkVoQixJQXJGQSxDQTBIYSxFQWpKYixJQTlDa0IsRUFYbEIsQ0F5RmMsQUFrSGdCLEdBL045QixTQThHa0IsQ0E5RWxCLENBb0NBLEVBbUJBLFlBd0JBLFdBZ0JnRSxtREFpRzFDLFNBaEd1QyxTQWlHM0QsZ0RBaEdrQyxpQ0FDbkIsZUFDQyxnQkFDRSxrQkFDSixjQUNPLHFCQUN2QiIsImZpbGUiOiJwYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcHJpdGFtL0RvY3VtZW50cy9iaW5iaWxsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPbkJyb3dzZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT25Ccm93c2VyOiB0cnVlXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsdGhpcy5wcm9wcy5ibG9nRGF0YSk7XG4gIH1cbiAgcmVuZGVyQmxvZ3MoKSB7XG4gIFx0Y29uc3QgYmxvZ3MgPSB0aGlzLnByb3BzID8gdGhpcy5wcm9wcy5ibG9nRGF0YS5zbGljZSgwLCAzKSA6IFtdO1xuXG4gIFx0cmV0dXJuIGJsb2dzLm1hcChibG9nID0+IChcbiAgXHRcdDxhXG4gIFx0XHRcdGtleT17YmxvZy5pZH1cbiAgXHRcdFx0aHJlZj17YC9ibG9nLyR7YmxvZy5pZH1gfVxuICBcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tNCBkYXNoYm9hcmQtYmxvZy1pdGVtXCJcbiAgXHRcdD5cbiAgXHRcdFx0PGRpdlxuICBcdFx0XHRcdGNsYXNzTmFtZT1cImRhc2hib2FyZC1ibG9nLWltYWdlXCJcbiAgXHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtibG9nLmltYWdlfSlgIH19XG4gIFx0XHRcdC8+XG4gIFx0XHRcdDxoNCBjbGFzc05hbWU9XCJkYXNoYm9hcmQtYmxvZy10aXRsZVwiPntibG9nLnRpdGxlLnJlbmRlcmVkfTwvaDQ+XG4gIFx0XHQ8L2E+XG4gIFx0KSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzT25Ccm93c2VyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCByZW5kZXJTb2NpYWw9bnVsbDtcbiAgICBpZihpc09uQnJvd3Nlcil7XG4gICAgICBjb25zdCBTb2NpYWwgPXJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3NvY2lhbFwiKTtcbiAgICAgIHJlbmRlclNvY2lhbD08U29jaWFsLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dyb3VwLTE1LnN2Z1wiIGFsdD1cIk9uIEJvYXJkaW5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5TbWFydCBTYWZlPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIFNlY3VyZWx5IHN0b3JlIGFsbCB5b3VyIGltcG9ydGFudCBiaWxscywgZG9jdW1lbnRzLCBsaWNlbnNlc1xuICAgICAgICAgICAgICAgICAgICBldGMuLCBpbiB5b3VyIGVIb21lLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9ncm91cC0xNi5wbmdcIiBhbHQ9XCJPbiBCb2FyZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RmVlbCBFbXBvd2VyZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB3aXRoIG92ZXIgMTAwIGJyYW5kcywgZm9yIHByb2R1Y3QgaW5mb3JtYXRpb24sIG9yXG4gICAgICAgICAgICAgICAgICAgIGFueSBvdGhlciBlbnF1aXJ5LlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9ncm91cC00Ni5zdmdcIiBhbHQ9XCJPbiBCb2FyZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RWFzeSBDb21tdW5pY2F0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIE92ZXIgODgsMDAwIGF1dGhvcmlzZWQgc2VydmljZSBjZW50ZXJzIGF0IHlvdXIgZGlzcG9zYWwsXG4gICAgICAgICAgICAgICAgICAgIGFjcm9zcyA0MCsgY2l0aWVzLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9ncm91cC0yNC5wbmdcIiBhbHQ9XCJPbiBCb2FyZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+U3RheSB1cGRhdGVkPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrIGV4cGVuc2VzLCB0YXhlcyBwYWlkLCBvciBnZXQgbW9udGhseSBleHBlbnNlXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudHMuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dyb3VwLTQ3LnBuZ1wiIGFsdD1cIk9uIEJvYXJkaW5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5UaW1lbHkgcmVuZXdhbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgR2V0IHRpbWVseSByZW1pbmRlcnMgZm9yIGluc3VyYW5jZSwgd2FycmFudHkgY2xhaW1zIG9yIGVtaVxuICAgICAgICAgICAgICAgICAgICBwYXltZW50cy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtMTIucG5nXCIgYWx0PVwiT24gQm9hcmRpbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlByb2R1Y3QgQ2FyZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBOZXZlciBtaXNzIG91dCBhbnkgaW5mb3JtYXRpb24gb2YgdGhlIHByb2R1Y3QgaW4geW91ciBzaWdodC5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGxldGUtZWxsaXBzZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1lbGxpcHNlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLXJpZ2h0XCIvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBpcyBCaW5CaWxsP1xuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdoaWxlIGNsaWNraW5nIGEgc2VsZmllIG9uZSBkYXksIHdlIHRob3VnaHQgaG93IGVhc3kgb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpdmVzIGhhdmUgYmVjb21lLCB3aXRoIHRoZSBhZHZlbnQgb2Ygc21hcnQgcGhvbmVzLiBBdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZSB0aW1lLCB3ZSBmb3VuZCBvbmUgb2YgdXMgc3RydWdnbGluZyB3aXRoIHBpbGUgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmlsbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBoYXNzbGluZyBoaXMgd2F5IHRvIGhpcyBkZXNrIHdpdGggaHVnZSBmaWxlcywgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggbm90aGluZyBidXQgYmlsbHMvaW52b2ljZS4gVGhlIHJlYWxpc2F0aW9uIHRoYXQgc3R1Y2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXMgYXQgdGhhdCB0aW1lLCBsZWQgdG8gdGhlIGZvcm1hdGlvbiBvZiB3aGF0IHdlIHRvZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwgYXMgQmluQmlsbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBcGFydCBmcm9tIGJlY29taW5nIGEgcGFydCBhbmQgcGFyY2VsIG9mIHNob3BwaW5nIHRvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBtYW55LCBCaW5CaWxsIGhhcyBoZWxwZWQgbXVsdGlwbGUgaW5kaXZpZHVhbHMgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVpciBlYXNlZCBvdXQgYWZ0ZXIgc2FsZXMgY29tbXVuaWNhdGlvbi4gQnJhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbXVuaWNhdGlvbiBpcyB5ZXQgYW5vdGhlciBmZWF0dXJlIHRoYXQgQmluQmlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbiBoYXMgcHJvdmlkZWQgdG8gdGhlIHVzZXJzLCB3aGljaCBhbGxvd3MgdGhlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0byBjb21tdW5pY2F0ZSB3aXRoIGJyYW5kcyBmb3IgdmFyaW91cyBpbmZvcm1hdGlvbiByZWxhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHRoZSBwcm9kdWN0cy4gUHJvZHVjdCBjYXJkIGVuYWJsZXMgdXNlciB0byBzdGF5IHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBhbGwgdGhlIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gdGhlaXIgcHJvZHVjdHMsIGJlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBkYXRlIG9mIG1hbnVmYWN0dXJpbmcgb3IgcHVyY2hhc2UsIHdlIGhhdmUgaXQgYWxsLiBUaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSBsb3ZlZCB0aGUgbW9zdCBieSBhbGwgdGhlIHVzZXJzLCBpcyB0aGUgZUhvbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWlyIHZpcnR1YWwgc2FmZSBmb3Igc2VjdXJlbHkgc3RvcmluZyBhbGwgdGhlaXIgYmlsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGltcG9ydGFudCBkb2N1bWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTmV2ZXIgbWlzcyBvdXQgb24gYW55IGJpbGwsIG9yIGxldCBhZnRlciBzYWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tdW5pY2F0aW9uIGdpdmUgeW91IHN0cmVzcy4gSnVzdCB1c2UgQmluQmlsbCFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgY2xhc3NOYW1lPVwiZG93bmxvYWQtbW9kYWxcIiBzdHlsZT17e2hlaWdodDogJzMyMHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgaXRlbSBhdXRoLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIEFwcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXtlID0+IHRoaXMucHJvcHMudXBkYXRlTW9kYWxPcGVuU3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMuaXNEb3dubG9hZE1vZGFsT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgQXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbW92ZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMudXBkYXRlTW9kYWxPcGVuU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdyZW1vdmUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxci1jb2RlLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicXItY29kZS1jYXB0aW9uXCI+U2NhbiB0aGlzIFFSIENvZGUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkIHRoZSBhcHA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JiX3FyY29kZX0gYWx0PVwiQmluQmlsbCBRUiBDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInFyLWNvZGUtaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLXJvd1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5PUjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLXJvd1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZC1tZXNzYWdlLWJvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBjYW4gc2VuZCB5b3UgYW4gU01TIHdpdGggYSBwbGF5c3RvcmUgbGluayB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQgdGhlIGFwcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vYmlsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lucHV0W25hbWU9bXNnbW9iaWxlXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaG9uZVV0aWwgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gcGhvbmVVdGlsLmlzVmFsaWROdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVVdGlsLnBhcnNlKG1vYmlsZUlucHV0LnZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0lOJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9iaWxlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRJc1ZhbGlkUGhvbmVOdW1iZXIodmFsaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaENvbnRhY3RVcygnJywgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlSW5wdXQudmFsdWUudHJpbSgpLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQaG9uZU51bWJlcignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZU1vZGFsT3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRJc1ZhbGlkUGhvbmVOdW1iZXIodmFsaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBjbGFzc05hbWU9XCJtb2JpbGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTW9iaWxlIE5vLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J21zZ21vYmlsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyF0aGlzLnByb3BzLmlzVmFsaWRNc2dNb2JpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5wcm9wcy51cGRhdGVQaG9uZU51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLm1zZ01vYmlsZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb250YWN0LXVzLWJ1dHRvblwiIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWVsbGlwc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsbGluZyB0aGUgR2FwXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvcmRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gbW9yZSBvZiBydW5uaW5nIGhlcmUgYW5kIHRoZXJlIGZvciBleGVyY2lzaW5nIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRzIGFzIGEgY29uc3VtZXIuIFVzZSBCaW5CaWxsLCBhbmQgZmlsbCBpbiBhbGwgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhcHMsIGNvbm5lY3Qgd2l0aCBicmFuZHMsIGdldCBwcm9kdWN0IGluZm8sIHRpbWVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1pbmRlcnMsIGhhc3NsZSBmcmVlIGFmdGVyIHNhbGVzIHNlcnZpY2VzLCBhbmQgYWNjZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgYmlsbHMvaW1wb3J0YW50IGRvY3VtZW50cyBhbnl0aW1lL2FueXdoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdoZXJlIHRoZXJlIGlzIGEgYmlsbCwgdGhlcmUgaXMgQmluQmlsbCFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXJBcHBJbWFnZX0gYWx0PVwiVXNlciBBcHAgQ29ubmVjdGl2aXR5XCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWxlZnRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhd2Vzb21lLWNvbnRlbnQgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ29uc3VtZXIgQXdhcmVuZXNzXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvcmRlciBjb2wtbGctMSBjb2wtbWQtMiBjb2wtc20tMiBsZWZ0XCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaGVhZC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIEl0IGlzIG91ciBlbmRlYXZvdXIgdG8ga2VlcCBvdXIgY3VzdG9tZXIgdXBkYXRlZCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgYWZmYWlycyBvZiBJbmRpYW4gZWNvbm9taWMgc3lzdGVtLCBiZSBpdCByZWxhdGVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgR1NULCBvciBjb25zdW1lciByaWdodHMuY29tbXVuaWNhdGlvbiBnaXZlIHlvdSBzdHJlc3MuIEp1c3RcbiAgICAgICAgICAgICAgICAgICAgICB1c2UgQmluQmlsbCFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIVE1MKGJsb2dJbWFnZSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIVE1MKGJsb2dCb2R5KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidWkgaXRlbSBrbm93LW1vcmVcIiB0bz0nL2Jsb2cnPlxuICAgICAgICAgICAgICAgICAgICBLbm93IE1vcmVcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBPdXIgdXNlcnMgbG92ZSB1cyFcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29jaWFsLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxDYXJvdXNlbC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheXN0b3JlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2aWNlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YW5kcm9pZEltYWdlfSBhbHQ9XCJBbmRyb2lkIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5kcm9pZC1pbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpcGhvbmVJbWFnZX0gYWx0PVwiaVBob25lIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXBob25lLWltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIHRoZSBCaW5CaWxsIEFwcFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2YWlsLWFuZHJvaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldmVyIG1pc3Mgb3V0IG9uIGFueSBiaWxsLCBvciBsZXQgYWZ0ZXIgc2FsZXMgY29tbXVuaWNhdGlvbiBnaXZlIHlvdSBzdHJlc3MuIEp1c3QgdXNlIEJpbkJpbGwhXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheXN0b3JlLWJhZGdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmJpbi5iaW5iaWxsY3VzdG9tZXJcIj48aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwbGF5c3RvcmVCYWRnZUltYWdlfSBhbHQ9XCJQbGF5IFN0b3JlIEJhZGdlXCIvPiA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdXMtZm9ybS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXJcIi8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3VcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgaGVyZSB0byBwcm92aWRlIHlvdSBtb3JlIGluZm9ybWF0aW9uLCBhbnN3ZXIgYW55XG4gICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zIHlvdSBtYXkgaGF2ZSBhbmRcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdGUgYVxuICAgICAgICAgICAgICAgICAgICAgIG1vcmUgZWZmZWN0aXZlIHNvbHV0aW9uIHRvIHlvdXIgbmVlZHMuIEdldCBpbiB0b3VjaCFcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Q29udGFjdFVzIHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYWJvdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWJvdXQtaXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtMjkuc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0LWltYWdlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZTJcIj5XaGF0IGlzIEJpbkJpbGw/PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uMlwiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEJpbkJpbGwgaXMgYW4gYXBwbGljYXRpb24gdG8ga2VlcHMgYWxsIHlvdXIgYmlsbHMsIGludm9pY2VzXG4gICAgICAgICAgICAgICAgICAgIGFuZCBkb2N1bWVudHMgYXQgb25lIHBsYWNlLiBCaW5CaWxsIGFwcCBoYXMgaGVscGVkXG4gICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWxzIGVhc2Ugb3V0IGFmdGVyIHNhbGVzIGFuZCBicmFuZCBjb21tdW5pY2F0aW9uIGJ5XG4gICAgICAgICAgICAgICAgICAgIGFsbG93aW5nIHRoZW0gdG8gY29tbXVuaWNhdGUgd2l0aCBicmFuZHMgZm9yIHZhcmlvdXNcbiAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24gYW5kIHByb2R1Y3RzLiBQcm9kdWN0IGNhcmQgZW5hYmxlcyB0aGUgdXNlcnMgdG9cbiAgICAgICAgICAgICAgICAgICAgc3RheSB1cGRhdGVkIHdpdGggYWxsIHRoZSBwcm9kdWN0cyByZWxldmFudCBpbmZvcm1hdGlvbiBsaWtlXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgb2YgbWFudWZhY3R1cmluZyBvciBwdXJjaGFzZS4gVGhlIG9uZSBvZiB0aGUgbW9zdCBsb3ZlZFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyBieSB0aGUgdXNlcnMgaXMgdGhlIGVIb21lLCBhIHZpcnR1YWwgc2FmZSBmb3JcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJlbHkgc3RvcmluZyBiaWxscyBhbmQgaW1wb3J0YW50IGRvY3VtZW50cy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFib3V0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiB0ZXh0LWNlbnRlciBhYm91dC1pdGVtLTItaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9ncm91cC0zMy5wbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJvdXQtaW1hZ2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGFib3V0LWl0ZW0tMi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlMlwiPkZpbGxpbmcgdGhlIEdhcDwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvcmRlclwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbjJcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0Tm93LCB5b3UgZG9u4oCZdCBoYXZlIHRvIHNlYXJjaCBmb3IgYmlsbHMsIHNpbXBseSBkb3dubG9hZCB0aGUgQmluQmlsbCBhcHAsIGZpbGwgdGhlIGdhcHMsIGNvbm5lY3Qgd2l0aCBicmFuZHMsIGdldCBwcm9kdWN0IGluZm8sIHRpbWVseSByZW1pbmRlcnMsIGFuZCBoYXNzbGUtZnJlZSBhZnRlci1zYWxlcyBzZXJ2aWNlcyBhbmQgYWNjZXNzIHlvdXIgYmlsbHMgYW55dGltZSBhbmQgYW55d2hlcmUuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5XaGVyZSB0aGVyZSBpcyBhIGJpbGwsIHRoZXJlIGlzIEJpbkJpbGwhPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm9yYW5nZS1oZWFkaW5nXCI+Q29uc3VtZXIgQXdhcmVuZXNzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXIyXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvZy1oZWFkLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIEl0IGlzIG91ciBlbmRlYXZvdXIgdG8ga2VlcCBvdXIgY3VzdG9tZXIgdXBkYXRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgIGFmZmFpcnMgb2YgSW5kaWFuIGVjb25vbWljIHN5c3RlbSwgYmUgaXQgcmVsYXRlZCB0byBHU1QsIG9yXG4gICAgICAgICAgICAgIGNvbnN1bWVyIHJpZ2h0cy5jb21tdW5pY2F0aW9uIGdpdmUgeW91IHN0cmVzcy4gSnVzdCB1c2UgQmluQmlsbCFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPnt0aGlzLnJlbmRlckJsb2dzKCl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrbm93LW1vcmUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwia25vdy1tb3JlXCIgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgIEtub3cgTW9yZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGVzdGltb25pYWxzLWNhcm91c2VsLWhlYWRpbmdcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwib3JhbmdlLWhlYWRpbmdcIj5PdXIgdXNlcnMgbG92ZSB1cyE8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXIyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtyZW5kZXJTb2NpYWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwbGF5c3RvcmUtc2VjdGlvblwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXlzdG9yZS1zZWN0aW9uLWJnXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnL3N0YXRpYy9pbWFnZXMvYXBwLWRvd25sb2FkLWJhY2suc3ZnJylgXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmljZS1pbWFnZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ktcGhvbmUtNy1tb2NrdXBAM3gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiaVBob25lIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV2aWNlLWltYWdlIGlwaG9uZS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9nb29nbGUtcGl4ZWwtcmVhbGx5LWJsdWVAM3gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQW5kcm9pZCBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldmljZS1pbWFnZSBhbmRyb2lkLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03IGRvd25sb2FkLWFwcC1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUyIHRpdGxlMi1zbWFsbCBkb3dubG9hZC1hcHAtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgRG93bmxvYWQgdGhlIEJpbkJpbGwgQXBwXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvd25sb2FkLWFwcC1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICBOZXZlciBtaXNzIG91dCBvbiBhbnkgYmlsbCwgb3IgbGV0IGFmdGVyIHNhbGVzIGNvbW11bmljYXRpb25cbiAgICAgICAgICAgICAgICAgIGdpdmUgeW91IHN0cmVzcy4gSnVzdCB1c2UgQmluQmlsbCFcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5c3RvcmUtYmFkZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYmluLmJpbmJpbGxjdXN0b21lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvcGxheXN0b3JlLWJhZGdlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGxheSBTdG9yZSBCYWRnZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmNzMyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlMiB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGUyLXNtYWxsIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24yIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtNDguc3ZnXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFib3V0LWl0ZW0ge1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hYm91dC1pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWJvdXQtaXRlbS0yLWltYWdlIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWJvdXQtaXRlbS0yLWNvbnRlbnQge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tYm9yZGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDc5cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tYm9yZGVyMiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0N3B4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI2NmRlZywgI2ZmODAyZSwgI2ZmNjUyZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmFuZ2UtaGVhZGluZyB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmY3MzJlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibG9nLWhlYWQtZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAvKiB3aWR0aDogMTE2M3B4OyAqL1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXNoYm9hcmQtYmxvZy1pdGVtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXNoYm9hcmQtYmxvZy1pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGFzaGJvYXJkLWJsb2ctdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua25vdy1tb3JlLXdyYXBwZXIge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmtub3ctbW9yZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzNXB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgIDE5MGRlZyxcbiAgICAgICAgICAgICAgICAjZmY4MDJlLFxuICAgICAgICAgICAgICAgICNmZjY1MmVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KDE5MGRlZywgI2ZmODAyZSwgI2ZmNjUyZSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNjBkZWcsICNmZjgwMmUsICNmZjY1MmUpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmtub3ctbW9yZTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNjBkZWcsICNmZjY1MmUsICNmZjgwMmUpO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRlc3RpbW9uaWFscy1jYXJvdXNlbC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRlc3RpbW9uaWFscy1jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBsYXlzdG9yZS1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRldmljZS1pbWFnZXMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTYwcHg7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGV2aWNlLWltYWdlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pcGhvbmUtaW1hZ2Uge1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFuZHJvaWQtaW1hZ2Uge1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogNTglO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGxheXN0b3JlLXNlY3Rpb24tYmcge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wbGF5c3RvcmUtYmFkZ2Uge1xuICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wbGF5c3RvcmUtYmFkZ2UgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG93bmxvYWQtYXBwLWRldGFpbHMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb3dubG9hZC1hcHAtZGVzYyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICAgICAgICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9zdGF0aWMvaW1hZ2VzL2dyb3VwLTM0LnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFib3V0LWltYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50aXRsZTIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1haW4tYm9yZGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZGVzY3JpcHRpb24yIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byA1MHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWFpbi1ib3JkZXIyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYWJvdXQtaXRlbS0yLWltYWdlIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYWJvdXQtaXRlbS0yLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vcmFuZ2UtaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYmxvZy1oZWFkLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmtub3ctbW9yZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBsYXlzdG9yZS1zZWN0aW9uLWJnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb3dubG9hZC1hcHAtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheXN0b3JlLWJhZGdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\n/*@ sourceURL=pages/dashboard.js */"
      }));
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1haW4iLCJwcm9wcyIsInN0YXRlIiwiaXNPbkJyb3dzZXIiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJibG9nRGF0YSIsImJsb2dzIiwic2xpY2UiLCJtYXAiLCJibG9nIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsInRpdGxlIiwicmVuZGVyZWQiLCJyZW5kZXJTb2NpYWwiLCJTb2NpYWwiLCJyZXF1aXJlIiwicmVuZGVyQmxvZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFJVixBO2dDQUVKOztnQkFBQSxBQUFZLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO21CQUZZLEFBRWpCLEFBQWEsQUFDRTtBQURGLEFBQ1g7V0FFSDs7Ozs7Ozs7OzttQkFFQztxQkFBQSxBQUFLOytCQUFMLEFBQWMsQUFDQyxBQUVmO0FBSGMsQUFDWjt3QkFFRixBQUFRLElBQVIsQUFBWSxRQUFPLEtBQUEsQUFBSyxNQUF4QixBQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUVsQixBQUNiO1VBQU0sUUFBUSxLQUFBLEFBQUssUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsTUFBcEIsQUFBMEIsR0FBdkMsQUFBYSxBQUE2QixLQUF4RCxBQUE2RCxBQUU3RDs7bUJBQU8sQUFBTSxJQUFJLGdCQUFBOytCQUNoQixjQUFBO2VBQ00sS0FETixBQUNXLEFBQ1Y7MkJBQWUsS0FGaEIsQUFFcUIsQUFDcEI7cUJBSEQsQUFHVzs7c0JBSFg7d0JBQUEsQUFLQztBQUxEO0FBQ0MsU0FERDtxQkFLQyxBQUNXLEFBQ1Y7aUJBQU8sRUFBRSwwQkFBd0IsS0FBeEIsQUFBNkIsUUFGdkMsQUFFUTs7c0JBRlI7d0JBTEQsQUFLQyxBQUlBO0FBSkE7QUFD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