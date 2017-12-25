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

var _social = require("../components/social");

var _social2 = _interopRequireDefault(_social);

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
    value: function componentDidMount() {
      this.setState({
        isOnBrowser: true
      });
    }
    // renderBlogs() {
    // 	const blogs = this.props ? this.props.blogs.slice(0, 3) : [];

    // 	return blogs.map(blog => (
    // 		<a
    // 			key={blog.id}
    // 			href={`/blog/${blog.id}`}
    // 			className="col-sm-4 dashboard-blog-item"
    // 		>
    // 			<div
    // 				className="dashboard-blog-image"
    // 				style={{ backgroundImage: `url(${blog.image})` }}
    // 			/>
    // 			<h4 className="dashboard-blog-title">{blog.title}</h4>
    // 		</a>
    // 	));
    // }

  }, {
    key: "render",
    value: function render() {
      var isOnBrowser = this.state.isOnBrowser;

      return _react2.default.createElement("div", {
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-15.svg", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Smart Safe"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Securely store all your important bills, documents, licenses etc., in your eHome."))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-16.png", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Feel Empowered"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Connect with over 100 brands, for product information, or any other enquiry."))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-46.svg", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Easy Communication"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Over 88,000 authorised service centers at your disposal, across 40+ cities.")))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-24.png", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Stay updated"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Track expenses, taxes paid, or get monthly expense statements."))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-47.png", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Timely renewals"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Get timely reminders for insurance, warranty claims or emi payments."))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-4 col-lg-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement("img", { src: "/static/images/group-12.png", alt: "On Boarding", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Product Card"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Never miss out any information of the product in your sight.")))))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container-fluid about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row about-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-6 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, _react2.default.createElement("img", {
        src: "/static/images/group-29.svg",
        className: "jsx-2594712439" + " " + "about-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2594712439" + " " + "title2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, "What is BinBill?"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, _react2.default.createElement("p", {
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, "BinBill is an application to keeps all your bills, invoices and documents at one place. BinBill app has helped individuals ease out after sales and brand communication by allowing them to communicate with brands for various information and products. Product card enables the users to stay updated with all the products relevant information like date of manufacturing or purchase. The one of the most loved features by the users is the eHome, a virtual safe for securely storing bills and important documents.")))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row about-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-6 text-center about-item-2-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }, _react2.default.createElement("img", {
        src: "/static/images/group-33.png",
        className: "jsx-2594712439" + " " + "about-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-6 about-item-2-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2594712439" + " " + "title2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, "Filling the Gap"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "description2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, _react2.default.createElement("p", {
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, "Now, you don\u2019t have to search for bills, simply download the BinBill app, fill the gaps, connect with brands, get product info, timely reminders, and hassle-free after-sales services and access your bills anytime and anywhere."), _react2.default.createElement("p", {
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }, "Where there is a bill, there is BinBill!")))))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2594712439" + " " + "orange-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, "Consumer Awareness"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, _react2.default.createElement("p", {
        className: "jsx-2594712439" + " " + "blog-head-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, "It is our endeavour to keep our customer updated with the current affairs of Indian economic system, be it related to GST, or consumer rights.communication give you stress. Just use BinBill!")), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "know-more-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, _react2.default.createElement("a", { href: "/blog", className: "jsx-2594712439" + " " + "know-more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      }, "Know More"))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container testimonials-carousel-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2594712439" + " " + "orange-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, "Our users love us!"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "testimonials-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container-fluid playstore-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }, _react2.default.createElement("div", {
        style: {
          backgroundImage: "url('/static/images/app-download-back.svg')"
        },
        className: "jsx-2594712439" + " " + "playstore-section-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "device-images-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, _react2.default.createElement("img", {
        src: "/static/images/i-phone-7-mockup@3x.png",
        alt: "iPhone Image",
        className: "jsx-2594712439" + " " + "device-image iphone-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }), _react2.default.createElement("img", {
        src: "/static/images/google-pixel-really-blue@3x.png",
        alt: "Android Image",
        className: "jsx-2594712439" + " " + "device-image android-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }))), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "col-md-7 download-app-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }, _react2.default.createElement("p", {
        className: "jsx-2594712439" + " " + "title2 title2-small download-app-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        }
      }, "Download the BinBill App"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "main-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }), _react2.default.createElement("span", {
        className: "jsx-2594712439" + " " + "download-app-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }, "Never miss out on any bill, or let after sales communication give you stress. Just use BinBill!"), _react2.default.createElement("div", {
        className: "jsx-2594712439" + " " + "playstore-badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, _react2.default.createElement("a", { href: "http://play.google.com/store/apps/details?id=com.bin.binbillcustomer", className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, _react2.default.createElement("img", {
        src: "/static/images/playstore-badge.png",
        alt: "Play Store Badge",
        className: "jsx-2594712439",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }), " ")))))), _react2.default.createElement(_style2.default, {
        styleId: "2594712439",
        css: ".image.jsx-2594712439{margin-top:50px;}.title.jsx-2594712439{font-family:Quicksand;font-size:24px;font-weight:bold;text-align:center;color:#ff732e;}.title2.jsx-2594712439{font-family:Quicksand;font-size:48px;font-weight:bold;text-align:left;color:#ffffff;margin-bottom:10px;}.title2-small.jsx-2594712439{font-size:36px;}.description.jsx-2594712439{font-family:Quicksand;font-size:18px;color:#4a4a4a;margin-top:15px;}.description2.jsx-2594712439{font-family:OpenSans;font-size:16px;line-height:1.71;text-align:left;color:#ffffff;margin-top:10px;}.content.jsx-2594712439{margin-top:35px;padding-bottom:20px;}.about.jsx-2594712439{background:url(\"/static/images/group-48.svg\") no-repeat;background-size:cover;margin-bottom:90px;margin-top:50px;}.about-item.jsx-2594712439{overflow:hidden;margin-bottom:50px;padding:40px 0;}.about-image.jsx-2594712439{width:100%;max-width:400px;padding:20px;}.about-item-2-image.jsx-2594712439{float:right;}.about-item-2-content.jsx-2594712439{float:left;}.main-border.jsx-2594712439{width:79px;height:5px;border-radius:2.5px;background-color:#ffffff;margin-bottom:30px;}.main-border2.jsx-2594712439{width:47px;height:5px;border-radius:2.5px;margin-top:5px;background-image:linear-gradient(266deg,#ff802e,#ff652e);}.orange-heading.jsx-2594712439{font-family:Quicksand;font-size:36px;font-weight:bold;text-align:left;color:#ff732e;margin:0;}.blog-head-description.jsx-2594712439{font-family:Quicksand;font-size:14px;font-weight:500;text-align:left;color:#4a4a4a;margin:20px auto 35px !important;}.dashboard-blog-item.jsx-2594712439{display:block;margin-bottom:35px;}.dashboard-blog-image.jsx-2594712439{width:100%;height:230px;overflow:hidden;background-repeat:no-repeat;background-size:cover;}.dashboard-blog-title.jsx-2594712439{margin-top:10px;font-family:Quicksand;font-size:20px;font-weight:bold;text-align:left;color:#4a4a4a;height:50px;overflow:hidden;}.know-more-wrapper.jsx-2594712439{text-align:right;}.know-more.jsx-2594712439{display:inline-block;padding:10px 35px;width:170px;border-radius:26px;background-image:-webkit-linear-gradient( 190deg, #ff802e, #ff652e );background-image:-o-linear-gradient(190deg,#ff802e,#ff652e);background-image:linear-gradient(260deg,#ff802e,#ff652e);font-family:Quicksand,sans-serif;font-size:16px;font-weight:500;text-align:center;color:#ffffff;text-decoration:none;}.know-more.jsx-2594712439:hover{background-image:linear-gradient(260deg,#ff652e,#ff802e);color:#ffffff;}.testimonials-carousel-heading.jsx-2594712439{margin-top:60px;}.testimonials-container.jsx-2594712439{margin:30px 0;}.playstore-section.jsx-2594712439{position:relative;padding-bottom:30px;}.device-images-container.jsx-2594712439{display:inline-block;position:relative;height:560px;max-width:360px;width:100%;}.device-image.jsx-2594712439{position:absolute;bottom:0;}.iphone-image.jsx-2594712439{right:0;width:48%;}.android-image.jsx-2594712439{left:0;width:58%;}.playstore-section-bg.jsx-2594712439{background-repeat:no-repeat;position:absolute;bottom:0;width:100%;left:0;height:450px;}.playstore-badge.jsx-2594712439{width:280px;margin-top:20px;}.playstore-badge.jsx-2594712439 img.jsx-2594712439{width:100%;}.download-app-details.jsx-2594712439{margin-top:200px;}.download-app-desc.jsx-2594712439{color:#fff;font-size:20px;}@media only screen and (max-width:768px){.about.jsx-2594712439{background:url(\"/static/images/group-34.svg\") no-repeat;background-size:100% 100%;}.about-image.jsx-2594712439{margin-bottom:45px;}.title2.jsx-2594712439{font-size:25px;text-align:center;}.main-border.jsx-2594712439{width:47px;height:3px;border-radius:2.5px;background-color:#ffffff;margin-top:10px;top:50%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);position:relative;}.description2.jsx-2594712439{width:100%;max-width:320px;font-size:16px;margin:20px auto 50px;text-align:center;}.main-border2.jsx-2594712439{margin:10px auto;}.about-item-2-image.jsx-2594712439{float:none;}.about-item-2-content.jsx-2594712439{float:none;}.orange-heading.jsx-2594712439{font-size:20px;text-align:center;}.blog-head-description.jsx-2594712439{text-align:center;}.know-more-wrapper.jsx-2594712439{text-align:center;}.playstore-section-bg.jsx-2594712439{height:450px;}.download-app-details.jsx-2594712439{margin-top:50px !important;text-align:center;}.playstore-badge.jsx-2594712439{margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5ZFcsQUFHK0IsQUFJTSxBQVFBLEFBU1AsQUFJTyxBQU9ELEFBU0wsQUFLd0MsQUFPeEMsQUFNTCxBQU1DLEFBSUQsQUFJQSxBQVFBLEFBUVcsQUFVQSxBQVNSLEFBS0gsQUFRSyxBQVdDLEFBSUksQUFvQnNDLEFBSzNDLEFBSUYsQUFJSSxBQUtHLEFBUUgsQUFLVixBQUtELEFBS3FCLEFBU2hCLEFBS0QsQUFHTSxBQUdOLEFBTStDLEFBSXJDLEFBR0osQUFJSixBQVdBLEFBT00sQUFHTixBQUdBLEFBR0ksQUFJRyxBQUdBLEFBR0wsQUFHYyxBQUlmLE9BckZKLENBTEEsR0FoSU0sQUFVbEIsQUFJYSxBQVFBLEFBZ0NFLEFBa0dmLEFBTWlCLEFBaUJGLEFBV0ssQUFVbEIsQUFHQSxDQWpNRixBQTZJa0IsQUF3RWhCLENBUEEsQ0FuS21CLEFBeURyQixDQWhKQSxBQWlOc0IsQUErQkEsQ0FyUXRCLEFBeUNzQixBQVlELEFBb0VHLEFBd0N4QixDQTdCQSxBQTZEQSxBQXFCQSxBQXNDRSxDQW5Gb0IsQUFhWCxBQU1YLEFBNkVFLEFBR0EsQ0F6Q0EsRUFuTWUsQUF3R0csQUFzQ0EsQ0ExS0gsQUFRQSxBQWFBLEFBaURLLEFBUUEsQUFPTCxBQVVBLEFBd0lPLEVBekhOLEVBd0dsQixDQTlKZSxBQTJIZixBQStEbUIsQUE0QkcsQ0E3RUYsQUFVcEIsS0FsR0EsQUEwSEUsQUErQkEsRUFoTmUsQ0FyQkUsQUFTbkIsQ0FyQ21CLEFBUUEsQUFhSCxBQWdFRyxBQVVELENBc0JELEFBZ0RqQixDQWpDYyxBQXNDQyxDQWxIZixBQXNEOEIsRUF4Q0gsQUFRVixBQXlKWSxBQVdILEdBNEJ4QixDQTdFUyxJQS9JWCxDQTVCa0IsQUErR0csQ0FzQ0gsQ0E5SUEsQUFtRUEsQUFzQkMsQ0FySEMsQUFRRixBQTZFQSxDQTRHTCxDQXpKVyxBQWlMTSxDQTNJK0IsQUF3RTdDLE9BNEZNLEVBaERiLENBNUtULEFBZ0RxQixBQWlLRCxDQXpISSxBQTZEWCxDQTlJRyxBQW1FQSxDQXZGQSxBQTZFQSxBQWdDRSxBQW1CZixDQWNILENBdEpnQixDQWtNRCxLQTFKTSxDQW1JckIsR0E4Q0UsQUF5QkEsQ0FyTmdCLEFBbUVpQixBQXVJdkIsQ0E5TlMsQUE2RVYsRUFyRlgsQUFxRUEsQUFnRGdCLEFBNkVoQixJQXJGQSxDQTBIYSxFQWpKYixJQTlDa0IsRUFYbEIsQ0F5RmMsQUFrSGdCLEdBL045QixTQThHa0IsQ0E5RWxCLENBb0NBLEVBbUJBLFlBd0JBLFdBZ0JnRSxtREFpRzFDLFNBaEd1QyxTQWlHM0QsZ0RBaEdrQyxpQ0FDbkIsZUFDQyxnQkFDRSxrQkFDSixjQUNPLHFCQUN2QiIsImZpbGUiOiJwYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcHJpdGFtL0RvY3VtZW50cy9iaW5iaWxsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNvY2lhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zb2NpYWxcIjtcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09uQnJvd3NlcjogZmFsc2VcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPbkJyb3dzZXI6IHRydWVcbiAgICB9KTtcbiAgfVxuICAvLyByZW5kZXJCbG9ncygpIHtcbiAgLy8gXHRjb25zdCBibG9ncyA9IHRoaXMucHJvcHMgPyB0aGlzLnByb3BzLmJsb2dzLnNsaWNlKDAsIDMpIDogW107XG5cbiAgLy8gXHRyZXR1cm4gYmxvZ3MubWFwKGJsb2cgPT4gKFxuICAvLyBcdFx0PGFcbiAgLy8gXHRcdFx0a2V5PXtibG9nLmlkfVxuICAvLyBcdFx0XHRocmVmPXtgL2Jsb2cvJHtibG9nLmlkfWB9XG4gIC8vIFx0XHRcdGNsYXNzTmFtZT1cImNvbC1zbS00IGRhc2hib2FyZC1ibG9nLWl0ZW1cIlxuICAvLyBcdFx0PlxuICAvLyBcdFx0XHQ8ZGl2XG4gIC8vIFx0XHRcdFx0Y2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJsb2ctaW1hZ2VcIlxuICAvLyBcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2Jsb2cuaW1hZ2V9KWAgfX1cbiAgLy8gXHRcdFx0Lz5cbiAgLy8gXHRcdFx0PGg0IGNsYXNzTmFtZT1cImRhc2hib2FyZC1ibG9nLXRpdGxlXCI+e2Jsb2cudGl0bGV9PC9oND5cbiAgLy8gXHRcdDwvYT5cbiAgLy8gXHQpKTtcbiAgLy8gfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc09uQnJvd3NlciB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9ncm91cC0xNS5zdmdcIiBhbHQ9XCJPbiBCb2FyZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+U21hcnQgU2FmZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBTZWN1cmVseSBzdG9yZSBhbGwgeW91ciBpbXBvcnRhbnQgYmlsbHMsIGRvY3VtZW50cywgbGljZW5zZXNcbiAgICAgICAgICAgICAgICAgICAgZXRjLiwgaW4geW91ciBlSG9tZS5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtMTYucG5nXCIgYWx0PVwiT24gQm9hcmRpbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkZlZWwgRW1wb3dlcmVkPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbm5lY3Qgd2l0aCBvdmVyIDEwMCBicmFuZHMsIGZvciBwcm9kdWN0IGluZm9ybWF0aW9uLCBvclxuICAgICAgICAgICAgICAgICAgICBhbnkgb3RoZXIgZW5xdWlyeS5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtNDYuc3ZnXCIgYWx0PVwiT24gQm9hcmRpbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVhc3kgQ29tbXVuaWNhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBPdmVyIDg4LDAwMCBhdXRob3Jpc2VkIHNlcnZpY2UgY2VudGVycyBhdCB5b3VyIGRpc3Bvc2FsLFxuICAgICAgICAgICAgICAgICAgICBhY3Jvc3MgNDArIGNpdGllcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtMjQucG5nXCIgYWx0PVwiT24gQm9hcmRpbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0YXkgdXBkYXRlZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBUcmFjayBleHBlbnNlcywgdGF4ZXMgcGFpZCwgb3IgZ2V0IG1vbnRobHkgZXhwZW5zZVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9ncm91cC00Ny5wbmdcIiBhbHQ9XCJPbiBCb2FyZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+VGltZWx5IHJlbmV3YWxzPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEdldCB0aW1lbHkgcmVtaW5kZXJzIGZvciBpbnN1cmFuY2UsIHdhcnJhbnR5IGNsYWltcyBvciBlbWlcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudHMuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dyb3VwLTEyLnBuZ1wiIGFsdD1cIk9uIEJvYXJkaW5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Qcm9kdWN0IENhcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgTmV2ZXIgbWlzcyBvdXQgYW55IGluZm9ybWF0aW9uIG9mIHRoZSBwcm9kdWN0IGluIHlvdXIgc2lnaHQuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYWluLWRhc2hib2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBsZXRlLWVsbGlwc2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtZWxsaXBzZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1yaWdodFwiLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQgaXMgQmluQmlsbD9cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBXaGlsZSBjbGlja2luZyBhIHNlbGZpZSBvbmUgZGF5LCB3ZSB0aG91Z2h0IGhvdyBlYXN5IG91clxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaXZlcyBoYXZlIGJlY29tZSwgd2l0aCB0aGUgYWR2ZW50IG9mIHNtYXJ0IHBob25lcy4gQXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWUgdGltZSwgd2UgZm91bmQgb25lIG9mIHVzIHN0cnVnZ2xpbmcgd2l0aCBwaWxlIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJpbGxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaGFzc2xpbmcgaGlzIHdheSB0byBoaXMgZGVzayB3aXRoIGh1Z2UgZmlsZXMsIGZpbGxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIG5vdGhpbmcgYnV0IGJpbGxzL2ludm9pY2UuIFRoZSByZWFsaXNhdGlvbiB0aGF0IHN0dWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzIGF0IHRoYXQgdGltZSwgbGVkIHRvIHRoZSBmb3JtYXRpb24gb2Ygd2hhdCB3ZSB0b2RheVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsIGFzIEJpbkJpbGwuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQXBhcnQgZnJvbSBiZWNvbWluZyBhIHBhcnQgYW5kIHBhcmNlbCBvZiBzaG9wcGluZyB0b3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgbWFueSwgQmluQmlsbCBoYXMgaGVscGVkIG11bHRpcGxlIGluZGl2aWR1YWxzIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlaXIgZWFzZWQgb3V0IGFmdGVyIHNhbGVzIGNvbW11bmljYXRpb24uIEJyYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW11bmljYXRpb24gaXMgeWV0IGFub3RoZXIgZmVhdHVyZSB0aGF0IEJpbkJpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24gaGFzIHByb3ZpZGVkIHRvIHRoZSB1c2Vycywgd2hpY2ggYWxsb3dzIHRoZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gY29tbXVuaWNhdGUgd2l0aCBicmFuZHMgZm9yIHZhcmlvdXMgaW5mb3JtYXRpb24gcmVsYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0byB0aGUgcHJvZHVjdHMuIFByb2R1Y3QgY2FyZCBlbmFibGVzIHVzZXIgdG8gc3RheSB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggYWxsIHRoZSBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZWlyIHByb2R1Y3RzLCBiZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZGF0ZSBvZiBtYW51ZmFjdHVyaW5nIG9yIHB1cmNoYXNlLCB3ZSBoYXZlIGl0IGFsbC4gVGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUgbG92ZWQgdGhlIG1vc3QgYnkgYWxsIHRoZSB1c2VycywgaXMgdGhlIGVIb21lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVpciB2aXJ0dWFsIHNhZmUgZm9yIHNlY3VyZWx5IHN0b3JpbmcgYWxsIHRoZWlyIGJpbGxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpbXBvcnRhbnQgZG9jdW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5ldmVyIG1pc3Mgb3V0IG9uIGFueSBiaWxsLCBvciBsZXQgYWZ0ZXIgc2FsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbXVuaWNhdGlvbiBnaXZlIHlvdSBzdHJlc3MuIEp1c3QgdXNlIEJpbkJpbGwhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGNsYXNzTmFtZT1cImRvd25sb2FkLW1vZGFsXCIgc3R5bGU9e3toZWlnaHQ6ICczMjBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGl0ZW0gYXV0aC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBBcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17ZSA9PiB0aGlzLnByb3BzLnVwZGF0ZU1vZGFsT3BlblN0YXRlKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLmlzRG93bmxvYWRNb2RhbE9wZW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIEFwcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZW1vdmUtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLnByb3BzLnVwZGF0ZU1vZGFsT3BlblN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ncmVtb3ZlJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXItY29kZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInFyLWNvZGUtY2FwdGlvblwiPlNjYW4gdGhpcyBRUiBDb2RlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZCB0aGUgYXBwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYl9xcmNvZGV9IGFsdD1cIkJpbkJpbGwgUVIgQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxci1jb2RlLWltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1yb3dcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T1I8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1yb3dcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmQtbWVzc2FnZS1ib2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgY2FuIHNlbmQgeW91IGFuIFNNUyB3aXRoIGEgcGxheXN0b3JlIGxpbmsgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkIHRoZSBhcHA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2JpbGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnB1dFtuYW1lPW1zZ21vYmlsZV0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGhvbmVVdGlsID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHBob25lVXRpbC5pc1ZhbGlkTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lVXRpbC5wYXJzZShtb2JpbGVJbnB1dC52YWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJTicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vYmlsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0SXNWYWxpZFBob25lTnVtYmVyKHZhbGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hDb250YWN0VXMoJycsICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZUlucHV0LnZhbHVlLnRyaW0oKSwgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlUGhvbmVOdW1iZXIoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVNb2RhbE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0SXNWYWxpZFBob25lTnVtYmVyKHZhbGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgY2xhc3NOYW1lPVwibW9iaWxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J01vYmlsZSBOby4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdtc2dtb2JpbGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXshdGhpcy5wcm9wcy5pc1ZhbGlkTXNnTW9iaWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IHRoaXMucHJvcHMudXBkYXRlUGhvbmVOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5tc2dNb2JpbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY29udGFjdC11cy1idXR0b25cIiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1lbGxpcHNlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGxpbmcgdGhlIEdhcFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5vIG1vcmUgb2YgcnVubmluZyBoZXJlIGFuZCB0aGVyZSBmb3IgZXhlcmNpc2luZyB5b3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0cyBhcyBhIGNvbnN1bWVyLiBVc2UgQmluQmlsbCwgYW5kIGZpbGwgaW4gYWxsIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBnYXBzLCBjb25uZWN0IHdpdGggYnJhbmRzLCBnZXQgcHJvZHVjdCBpbmZvLCB0aW1lbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtaW5kZXJzLCBoYXNzbGUgZnJlZSBhZnRlciBzYWxlcyBzZXJ2aWNlcywgYW5kIGFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyIGJpbGxzL2ltcG9ydGFudCBkb2N1bWVudHMgYW55dGltZS9hbnl3aGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVyZSB0aGVyZSBpcyBhIGJpbGwsIHRoZXJlIGlzIEJpbkJpbGwhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyQXBwSW1hZ2V9IGFsdD1cIlVzZXIgQXBwIENvbm5lY3Rpdml0eVwiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1sZWZ0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWRhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXdlc29tZS1jb250ZW50IGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgIENvbnN1bWVyIEF3YXJlbmVzc1xuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXIgY29sLWxnLTEgY29sLW1kLTIgY29sLXNtLTIgbGVmdFwiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWhlYWQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICBJdCBpcyBvdXIgZW5kZWF2b3VyIHRvIGtlZXAgb3VyIGN1c3RvbWVyIHVwZGF0ZWQgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50IGFmZmFpcnMgb2YgSW5kaWFuIGVjb25vbWljIHN5c3RlbSwgYmUgaXQgcmVsYXRlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgIEdTVCwgb3IgY29uc3VtZXIgcmlnaHRzLmNvbW11bmljYXRpb24gZ2l2ZSB5b3Ugc3RyZXNzLiBKdXN0XG4gICAgICAgICAgICAgICAgICAgICAgdXNlIEJpbkJpbGwhXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nSW1hZ2UpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nQm9keSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInVpIGl0ZW0ga25vdy1tb3JlXCIgdG89Jy9ibG9nJz5cbiAgICAgICAgICAgICAgICAgICAgS25vdyBNb3JlXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1jYXJvdXNlbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgT3VyIHVzZXJzIGxvdmUgdXMhXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvcmRlclwiLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsQ2Fyb3VzZWwvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlzdG9yZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmljZS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2FuZHJvaWRJbWFnZX0gYWx0PVwiQW5kcm9pZCBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuZHJvaWQtaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXBob25lSW1hZ2V9IGFsdD1cImlQaG9uZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlwaG9uZS1pbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCB0aGUgQmluQmlsbCBBcHBcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvcmRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmFpbC1hbmRyb2lkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBOZXZlciBtaXNzIG91dCBvbiBhbnkgYmlsbCwgb3IgbGV0IGFmdGVyIHNhbGVzIGNvbW11bmljYXRpb24gZ2l2ZSB5b3Ugc3RyZXNzLiBKdXN0IHVzZSBCaW5CaWxsIVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlzdG9yZS1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5iaW4uYmluYmlsbGN1c3RvbWVyXCI+PGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGxheXN0b3JlQmFkZ2VJbWFnZX0gYWx0PVwiUGxheSBTdG9yZSBCYWRnZVwiLz4gPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXVzLWZvcm0tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgV2Ugd291bGQgbG92ZSB0byBoZWFyIGZyb20geW91XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIGhlcmUgdG8gcHJvdmlkZSB5b3UgbW9yZSBpbmZvcm1hdGlvbiwgYW5zd2VyIGFueVxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucyB5b3UgbWF5IGhhdmUgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlIGFcbiAgICAgICAgICAgICAgICAgICAgICBtb3JlIGVmZmVjdGl2ZSBzb2x1dGlvbiB0byB5b3VyIG5lZWRzLiBHZXQgaW4gdG91Y2ghXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPENvbnRhY3RVcyBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGFib3V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFib3V0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dyb3VwLTI5LnN2Z1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYm91dC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUyXCI+V2hhdCBpcyBCaW5CaWxsPzwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvcmRlclwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbjJcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBCaW5CaWxsIGlzIGFuIGFwcGxpY2F0aW9uIHRvIGtlZXBzIGFsbCB5b3VyIGJpbGxzLCBpbnZvaWNlc1xuICAgICAgICAgICAgICAgICAgICBhbmQgZG9jdW1lbnRzIGF0IG9uZSBwbGFjZS4gQmluQmlsbCBhcHAgaGFzIGhlbHBlZFxuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFscyBlYXNlIG91dCBhZnRlciBzYWxlcyBhbmQgYnJhbmQgY29tbXVuaWNhdGlvbiBieVxuICAgICAgICAgICAgICAgICAgICBhbGxvd2luZyB0aGVtIHRvIGNvbW11bmljYXRlIHdpdGggYnJhbmRzIGZvciB2YXJpb3VzXG4gICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIGFuZCBwcm9kdWN0cy4gUHJvZHVjdCBjYXJkIGVuYWJsZXMgdGhlIHVzZXJzIHRvXG4gICAgICAgICAgICAgICAgICAgIHN0YXkgdXBkYXRlZCB3aXRoIGFsbCB0aGUgcHJvZHVjdHMgcmVsZXZhbnQgaW5mb3JtYXRpb24gbGlrZVxuICAgICAgICAgICAgICAgICAgICBkYXRlIG9mIG1hbnVmYWN0dXJpbmcgb3IgcHVyY2hhc2UuIFRoZSBvbmUgb2YgdGhlIG1vc3QgbG92ZWRcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMgYnkgdGhlIHVzZXJzIGlzIHRoZSBlSG9tZSwgYSB2aXJ0dWFsIHNhZmUgZm9yXG4gICAgICAgICAgICAgICAgICAgIHNlY3VyZWx5IHN0b3JpbmcgYmlsbHMgYW5kIGltcG9ydGFudCBkb2N1bWVudHMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhYm91dC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgdGV4dC1jZW50ZXIgYWJvdXQtaXRlbS0yLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtMzMucG5nXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0LWltYWdlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBhYm91dC1pdGVtLTItY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZTJcIj5GaWxsaW5nIHRoZSBHYXA8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24yXCI+XG4gICAgICAgICAgICAgICAgICA8cD5cblx0XHRcdFx0XHRcdFx0XHRcdE5vdywgeW91IGRvbuKAmXQgaGF2ZSB0byBzZWFyY2ggZm9yIGJpbGxzLCBzaW1wbHkgZG93bmxvYWQgdGhlIEJpbkJpbGwgYXBwLCBmaWxsIHRoZSBnYXBzLCBjb25uZWN0IHdpdGggYnJhbmRzLCBnZXQgcHJvZHVjdCBpbmZvLCB0aW1lbHkgcmVtaW5kZXJzLCBhbmQgaGFzc2xlLWZyZWUgYWZ0ZXItc2FsZXMgc2VydmljZXMgYW5kIGFjY2VzcyB5b3VyIGJpbGxzIGFueXRpbWUgYW5kIGFueXdoZXJlLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+V2hlcmUgdGhlcmUgaXMgYSBiaWxsLCB0aGVyZSBpcyBCaW5CaWxsITwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJvcmFuZ2UtaGVhZGluZ1wiPkNvbnN1bWVyIEF3YXJlbmVzczwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyMlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2ctaGVhZC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICBJdCBpcyBvdXIgZW5kZWF2b3VyIHRvIGtlZXAgb3VyIGN1c3RvbWVyIHVwZGF0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICBhZmZhaXJzIG9mIEluZGlhbiBlY29ub21pYyBzeXN0ZW0sIGJlIGl0IHJlbGF0ZWQgdG8gR1NULCBvclxuICAgICAgICAgICAgICBjb25zdW1lciByaWdodHMuY29tbXVuaWNhdGlvbiBnaXZlIHlvdSBzdHJlc3MuIEp1c3QgdXNlIEJpbkJpbGwhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3RoaXMucmVuZGVyQmxvZ3MoKX08L2Rpdj4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrbm93LW1vcmUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwia25vdy1tb3JlXCIgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgIEtub3cgTW9yZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGVzdGltb25pYWxzLWNhcm91c2VsLWhlYWRpbmdcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwib3JhbmdlLWhlYWRpbmdcIj5PdXIgdXNlcnMgbG92ZSB1cyE8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXIyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHsvKiB7aXNPbkJyb3dzZXIgJiZcdDxTb2NpYWwgLz59ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcGxheXN0b3JlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5c3RvcmUtc2VjdGlvbi1iZ1wiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9zdGF0aWMvaW1hZ2VzL2FwcC1kb3dubG9hZC1iYWNrLnN2ZycpYFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXZpY2UtaW1hZ2VzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9pLXBob25lLTctbW9ja3VwQDN4LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImlQaG9uZSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldmljZS1pbWFnZSBpcGhvbmUtaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ29vZ2xlLXBpeGVsLXJlYWxseS1ibHVlQDN4LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkFuZHJvaWQgSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXZpY2UtaW1hZ2UgYW5kcm9pZC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNyBkb3dubG9hZC1hcHAtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlMiB0aXRsZTItc21hbGwgZG93bmxvYWQtYXBwLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgIERvd25sb2FkIHRoZSBCaW5CaWxsIEFwcFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3dubG9hZC1hcHAtZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgTmV2ZXIgbWlzcyBvdXQgb24gYW55IGJpbGwsIG9yIGxldCBhZnRlciBzYWxlcyBjb21tdW5pY2F0aW9uXG4gICAgICAgICAgICAgICAgICBnaXZlIHlvdSBzdHJlc3MuIEp1c3QgdXNlIEJpbkJpbGwhXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheXN0b3JlLWJhZGdlXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmJpbi5iaW5iaWxsY3VzdG9tZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3BsYXlzdG9yZS1iYWRnZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBsYXkgU3RvcmUgQmFkZ2VcIlxuICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZjczMmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZTIge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlMi1zbWFsbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uMiB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9zdGF0aWMvaW1hZ2VzL2dyb3VwLTQ4LnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hYm91dC1pdGVtIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWJvdXQtaW1hZ2Uge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFib3V0LWl0ZW0tMi1pbWFnZSB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFib3V0LWl0ZW0tMi1jb250ZW50IHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYWluLWJvcmRlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3OXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYWluLWJvcmRlcjIge1xuICAgICAgICAgICAgICB3aWR0aDogNDdweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNjZkZWcsICNmZjgwMmUsICNmZjY1MmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3JhbmdlLWhlYWRpbmcge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmNzMyZTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvZy1oZWFkLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgLyogd2lkdGg6IDExNjNweDsgKi9cbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGFzaGJvYXJkLWJsb2ctaXRlbSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGFzaGJvYXJkLWJsb2ctaW1hZ2Uge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRhc2hib2FyZC1ibG9nLXRpdGxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgY29sb3I6ICM0YTRhNGE7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmtub3ctbW9yZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rbm93LW1vcmUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAxOTBkZWcsXG4gICAgICAgICAgICAgICAgI2ZmODAyZSxcbiAgICAgICAgICAgICAgICAjZmY2NTJlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgxOTBkZWcsICNmZjgwMmUsICNmZjY1MmUpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjYwZGVnLCAjZmY4MDJlLCAjZmY2NTJlKTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rbm93LW1vcmU6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjYwZGVnLCAjZmY2NTJlLCAjZmY4MDJlKTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXN0aW1vbmlhbHMtY2Fyb3VzZWwtaGVhZGluZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZXN0aW1vbmlhbHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wbGF5c3RvcmUtc2VjdGlvbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXZpY2UtaW1hZ2VzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU2MHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRldmljZS1pbWFnZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXBob25lLWltYWdlIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hbmRyb2lkLWltYWdlIHtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDU4JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBsYXlzdG9yZS1zZWN0aW9uLWJnIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGxheXN0b3JlLWJhZGdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGxheXN0b3JlLWJhZGdlIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvd25sb2FkLWFwcC1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG93bmxvYWQtYXBwLWRlc2Mge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgICAgICAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvc3RhdGljL2ltYWdlcy9ncm91cC0zNC5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hYm91dC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGl0bGUyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tYWluLWJvcmRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uMiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gNTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1haW4tYm9yZGVyMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFib3V0LWl0ZW0tMi1pbWFnZSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFib3V0LWl0ZW0tMi1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub3JhbmdlLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJsb2ctaGVhZC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5rbm93LW1vcmUtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5c3RvcmUtc2VjdGlvbi1iZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZG93bmxvYWQtYXBwLWRldGFpbHMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBsYXlzdG9yZS1iYWRnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXX0= */\n/*@ sourceURL=pages/dashboard.js */"
      }));
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNvY2lhbCIsIk1haW4iLCJwcm9wcyIsInN0YXRlIiwiaXNPbkJyb3dzZXIiLCJzZXRTdGF0ZSIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTtnQ0FDSjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSzttQkFGWSxBQUVqQixBQUFhLEFBQ0U7QUFERixBQUNYO1dBRUg7Ozs7O3dDQUNtQixBQUNsQjtXQUFBLEFBQUs7cUJBQUwsQUFBYyxBQUNDLEFBRWhCO0FBSGUsQUFDWjtBQUdKO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBQ1M7VUFBQSxBQUNDLGNBQWdCLEtBRGpCLEFBQ3NCLE1BRHRCLEFBQ0MsQUFFUjs7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLCtCQUE4QixLQUF2QyxBQUEyQywwQkFBM0M7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVG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LEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFuWUosQUFpWUUsQUFFRSxBQUVGO0FBRkU7QUFBQTs0Q0FFRixBQUFlOztvQkFBZjtzQkFyWUYsQUFxWUUsQUFHQTtBQUhBO0FBQUEsMEJBR0EsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQTs7MkJBQ0UsQUFFUztBQUFBLEFBQ0w7NENBSEosQUFDWTs7b0JBRFo7c0JBREYsQUFDRSxBQU1BO0FBTkE7QUFFRSwwQkFJRixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBO2FBQ0UsQUFDTSxBQUNKO2FBRkYsQUFFTTs0Q0FGTixBQUdZOztvQkFIWjtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUNFO2FBSUYsQUFDTSxBQUNKO2FBRkYsQUFFTTs0Q0FGTixBQUdZOztvQkFIWjtzQkFSTixBQUNFLEFBQ0UsQUFNRSxBQU9KO0FBUEk7QUFDRSw0QkFNTixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUdBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs0Q0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFJQSxvSEFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVEsbUZBQVI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7YUFDRSxBQUNNLEFBQ0o7YUFGRixBQUVNO21CQUZOOztvQkFBQTtzQkFERixBQUNFLEFBR0c7QUFISDtBQUNFLFVBM2FoQixBQXdZRSxBQU9FLEFBQ0UsQUFlRSxBQVNFLEFBQ0U7aUJBemFaO2FBREYsQUFDRSxBQW90Qkg7QUFwdEJHOzs7OztBQWpDYSxBLEFBdXZCbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ByaXRhbS9Eb2N1bWVudHMvYmluYmlsbCJ9