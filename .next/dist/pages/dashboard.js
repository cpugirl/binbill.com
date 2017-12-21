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
				className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "container-fluid",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "container",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "row",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-4 col-lg-4 text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, _react2.default.createElement("img", { src: "/static/images/group-15.svg", alt: "On Boarding", className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "content text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "title",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, "Smart Safe"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "description",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, "Securely store all your important bills, documents, licenses etc., in your eHome."))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-4 col-lg-4 text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement("img", { src: "/static/images/group-16.png", alt: "On Boarding", className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "content",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "title",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, "Feel Empowered"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "description",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, "Connect with over 100 brands, for product information, or any other enquiry."))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-4 col-lg-4 text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement("img", { src: "/static/images/group-46.svg", alt: "On Boarding", className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "content",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "title",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, "Easy Communication"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "description",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, "Over 88,000 authorised service centers at your disposal, across 40+ cities.")))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "row",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-4 col-lg-4 text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement("img", { src: "/static/images/group-24.png", alt: "On Boarding", className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "content",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "title",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, "Stay updated"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "description",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, "Track expenses, taxes paid, or get monthly expense statements."))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-4 col-lg-4 text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement("img", { src: "/static/images/group-47.png", alt: "On Boarding", className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "content",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "title",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, "Timely renewals"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "description",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, "Get timely reminders for insurance, warranty claims or emi payments."))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-4 col-lg-4 text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, _react2.default.createElement("img", { src: "/static/images/group-12.png", alt: "On Boarding", className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "content",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 107
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "title",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, "Product Card"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "description",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, "Never miss out any information of the product in your sight.")))))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "container-fluid about",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 356
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "container",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 357
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "row about-item",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 358
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-6 text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 359
				}
			}, _react2.default.createElement("img", { src: "/static/images/group-29.svg", className: "jsx-2038365326" + " " + "about-image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 360
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-6",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 362
				}
			}, _react2.default.createElement("h3", {
				className: "jsx-2038365326" + " " + "title2",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 363
				}
			}, "What is BinBill?"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "main-border",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 364
				}
			}), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "description2",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 365
				}
			}, _react2.default.createElement("p", {
				className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 366
				}
			}, "While clicking a selfie one day, we thought how easy our lives have become, with the advent of smart phones. At the same time, we found one of us struggling with pile of bills, and hassling his way to his desk with huge files, filled with nothing but bills/invoice. The realisation that stuck us at that time, led to the formation of what we today call as BinBill."), _react2.default.createElement("p", {
				className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 375
				}
			}, "Apart from becoming a part and parcel of shopping tours for many, BinBill has helped multiple individuals with their eased out after sales communication. Brand communication is yet another feature that BinBill application has provided to the users, which allows them to communicate with brands for various information related to the products. Product card enables user to stay updated with all the information related to their products, be it the date of manufacturing or purchase, we have it all. The feature loved the most by all the users, is the eHome, their virtual safe for securely storing all their bills and important documents."), _react2.default.createElement("p", {
				className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 388
				}
			}, "Never miss out on any bill, or let after sales communication give you stress. Just use BinBill!")))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "row about-item",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 395
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-6 text-center about-item-2-image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 396
				}
			}, _react2.default.createElement("img", { src: "/static/images/group-33.png", className: "jsx-2038365326" + " " + "about-image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 397
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-6 about-item-2-content",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 399
				}
			}, _react2.default.createElement("h3", {
				className: "jsx-2038365326" + " " + "title2",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 400
				}
			}, "Filling the Gap"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "main-border",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 401
				}
			}), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "description2",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 402
				}
			}, _react2.default.createElement("p", {
				className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 403
				}
			}, "No more of running here and there for exercising your rights as a consumer. Use BinBill, and fill in all the gaps, connect with brands, get product info, timely reminders, hassle free after sales services, and access your bills/important documents anytime/anywhere."), _react2.default.createElement("p", {
				className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 410
				}
			}, "Where there is a bill, there is BinBill!")))))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "container",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 416
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "row",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 417
				}
			}, _react2.default.createElement("h3", {
				className: "jsx-2038365326" + " " + "orange-heading",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 418
				}
			}, "Consumer Awareness"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "main-border2",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 419
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "row",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 421
				}
			}, _react2.default.createElement("p", {
				className: "jsx-2038365326" + " " + "blog-head-description",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 422
				}
			}, "It is our endeavour to keep our customer updated with the current affairs of Indian economic system, be it related to GST, or consumer rights.communication give you stress. Just use BinBill!")), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "know-more-wrapper",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 429
				}
			}, _react2.default.createElement("a", { href: "/blog", className: "jsx-2038365326" + " " + "know-more",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 430
				}
			}, "Know More"))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "container testimonials-carousel-heading",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 435
				}
			}, _react2.default.createElement("h3", {
				className: "jsx-2038365326" + " " + "orange-heading",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 436
				}
			}, "Our users love us!"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "main-border2",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 437
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "testimonials-container",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 439
				}
			}, isOnBrowser && _react2.default.createElement(_social2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 440
				}
			})), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "container-fluid playstore-section",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 442
				}
			}, _react2.default.createElement("div", {
				style: { backgroundImage: "url('/static/images/app-download-back.svg')" },
				className: "jsx-2038365326" + " " + "playstore-section-bg",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 443
				}
			}), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "container",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 447
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "row",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 448
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-5 text-center",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 449
				}
			}, _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "device-images-container",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 450
				}
			}, _react2.default.createElement("img", {
				src: "/static/images/i-phone-7-mockup@3x.png",
				alt: "iPhone Image",
				className: "jsx-2038365326" + " " + "device-image iphone-image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 451
				}
			}), _react2.default.createElement("img", {
				src: "/static/images/google-pixel-really-blue@3x.png",
				alt: "Android Image",
				className: "jsx-2038365326" + " " + "device-image android-image",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 456
				}
			}))), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "col-md-7 download-app-details",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 463
				}
			}, _react2.default.createElement("p", {
				className: "jsx-2038365326" + " " + "title2 title2-small download-app-heading",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 464
				}
			}, "Download the BinBill App"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "main-border",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 467
				}
			}), _react2.default.createElement("span", {
				className: "jsx-2038365326" + " " + "download-app-desc",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 468
				}
			}, "Never miss out on any bill, or let after sales communication give you stress. Just use BinBill!"), _react2.default.createElement("div", {
				className: "jsx-2038365326" + " " + "playstore-badge",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 472
				}
			}, _react2.default.createElement("a", { href: "http://play.google.com/store/apps/details?id=com.bin.binbillcustomer", className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 473
				}
			}, _react2.default.createElement("img", { src: "/static/images/playstore-badge.png", alt: "Play Store Badge", className: "jsx-2038365326",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 474
				}
			}), " ")))))), _react2.default.createElement(_style2.default, {
				styleId: "2038365326",
				css: ".image.jsx-2038365326{margin-top:50px;}.title.jsx-2038365326{font-family:Quicksand;font-size:24px;font-weight:bold;text-align:center;color:#ff732e;}.title2.jsx-2038365326{font-family:Quicksand;font-size:48px;font-weight:bold;text-align:left;color:#ffffff;margin-bottom:10px;}.title2-small.jsx-2038365326{font-size:36px;}.description.jsx-2038365326{font-family:Quicksand;font-size:18px;color:#4a4a4a;margin-top:15px;}.description2.jsx-2038365326{font-family:OpenSans;font-size:14px;line-height:1.71;text-align:left;color:#ffffff;margin-top:10px;}.content.jsx-2038365326{margin-top:35px;padding-bottom:20px;}.about.jsx-2038365326{background:url(\"/static/images/group-48.svg\") no-repeat;background-size:cover;margin-bottom:90px;margin-top:50px;}.about-item.jsx-2038365326{overflow:hidden;margin-bottom:50px;padding:40px 0;}.about-image.jsx-2038365326{width:100%;max-width:400px;padding:20px;}.about-item-2-image.jsx-2038365326{float:right;}.about-item-2-content.jsx-2038365326{float:left;}.main-border.jsx-2038365326{width:79px;height:5px;border-radius:2.5px;background-color:#ffffff;margin-bottom:30px;}.main-border2.jsx-2038365326{width:47px;height:5px;border-radius:2.5px;margin-top:5px;background-image:linear-gradient(266deg,#ff802e,#ff652e);}.orange-heading.jsx-2038365326{font-family:Quicksand;font-size:36px;font-weight:bold;text-align:left;color:#ff732e;margin:0;}.blog-head-description.jsx-2038365326{font-family:Quicksand;font-size:14px;font-weight:500;text-align:left;color:#4a4a4a;margin:20px auto 35px !important;}.dashboard-blog-item.jsx-2038365326{display:block;margin-bottom:35px;}.dashboard-blog-image.jsx-2038365326{width:100%;height:230px;overflow:hidden;background-repeat:no-repeat;background-size:cover;}.dashboard-blog-title.jsx-2038365326{margin-top:10px;font-family:Quicksand;font-size:20px;font-weight:bold;text-align:left;color:#4a4a4a;height:50px;overflow:hidden;}.know-more-wrapper.jsx-2038365326{text-align:right;}.know-more.jsx-2038365326{display:inline-block;padding:10px 35px;width:170px;border-radius:26px;background-image:-webkit-linear-gradient(190deg,#ff802e,#ff652e);background-image:-o-linear-gradient(190deg,#ff802e,#ff652e);background-image:linear-gradient(260deg,#ff802e,#ff652e);font-family:Quicksand,sans-serif;font-size:16px;font-weight:500;text-align:center;color:#ffffff;text-decoration:none;}.know-more.jsx-2038365326:hover{background-image:linear-gradient(260deg,#ff652e,#ff802e);color:#ffffff;}.testimonials-carousel-heading.jsx-2038365326{margin-top:60px;}.testimonials-container.jsx-2038365326{margin:30px 0;}.playstore-section.jsx-2038365326{position:relative;padding-bottom:30px;}.device-images-container.jsx-2038365326{display:inline-block;position:relative;height:560px;max-width:360px;width:100%;}.device-image.jsx-2038365326{position:absolute;bottom:0;}.iphone-image.jsx-2038365326{right:0;width:48%;}.android-image.jsx-2038365326{left:0;width:58%;}.playstore-section-bg.jsx-2038365326{background-repeat:no-repeat;position:absolute;bottom:0;width:100%;left:0;height:450px;}.playstore-badge.jsx-2038365326{width:280px;margin-top:20px;}.playstore-badge.jsx-2038365326 img.jsx-2038365326{width:100%;}.download-app-details.jsx-2038365326{margin-top:200px;}.download-app-desc.jsx-2038365326{color:#fff;font-size:20px;}@media only screen and (max-width:768px){.about.jsx-2038365326{background:url(\"/static/images/group-34.svg\") no-repeat;background-size:100% 100%;}.about-image.jsx-2038365326{margin-bottom:45px;}.title2.jsx-2038365326{font-size:25px;text-align:center;}.main-border.jsx-2038365326{width:47px;height:3px;border-radius:2.5px;background-color:#ffffff;margin-top:10px;top:50%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);position:relative;}.description2.jsx-2038365326{width:100%;max-width:320px;font-size:14px;margin:20px auto 50px;text-align:center;}.main-border2.jsx-2038365326{margin:10px auto;}.about-item-2-image.jsx-2038365326{float:none;}.about-item-2-content.jsx-2038365326{float:none;}.orange-heading.jsx-2038365326{font-size:20px;text-align:center;}.blog-head-description.jsx-2038365326{text-align:center;}.know-more-wrapper.jsx-2038365326{text-align:center;}.playstore-section-bg.jsx-2038365326{height:450px;}.download-app-details.jsx-2038365326{margin-top:50px !important;text-align:center;}.playstore-badge.jsx-2038365326{margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpZUssQUFHc0IsQUFJTSxBQVFBLEFBU1AsQUFJTyxBQU9ELEFBU0wsQUFLd0MsQUFPeEMsQUFNTCxBQU1DLEFBSUQsQUFJQSxBQVFBLEFBUVcsQUFVQSxBQVNSLEFBS0gsQUFRSyxBQVdDLEFBSUksQUFnQnNDLEFBSzNDLEFBSUYsQUFJSSxBQUtHLEFBUUgsQUFLVixBQUtELEFBS3FCLEFBU2hCLEFBS0QsQUFHTSxBQUdOLEFBTThDLEFBSXJDLEFBR0osQUFJSixBQVdBLEFBT00sQUFHTixBQUdBLEFBR0ksQUFJRyxBQUdBLEFBR0wsQUFHYyxBQUlmLE9BckZILENBTEEsR0E1SE0sQUFVakIsQUFJWSxBQVFBLEFBZ0NFLEFBOEZkLEFBTWdCLEFBaUJILEFBV0ssQUFVakIsQUFHQSxDQTdMRCxBQXlJaUIsQUF3RWhCLENBUEEsQ0EvSm1CLEFBcURwQixDQTVJQSxBQTZNb0IsQUErQkEsQ0FqUXBCLEFBeUNxQixBQVlELEFBb0VHLEFBb0N2QixDQXpCQSxBQXlEQSxBQXFCQSxBQXNDQyxDQW5Gb0IsQUFhWCxBQU1WLEFBNkVDLEFBR0EsQ0F6Q0EsRUEvTGUsQUF3R0csQUFrQ0EsQ0F0S0gsQUFRQSxBQWFBLEFBaURLLEFBUUEsQUFPTCxBQVVBLEFBb0lNLEVBckhMLEVBb0dqQixDQTFKYyxBQXVIZCxBQStEaUIsQUE0QkcsQ0E3RUQsQUFVbkIsS0E5RkEsQUFzSEMsQUErQkEsRUE1TWUsQ0FyQkUsQUFTbEIsQ0FyQ2tCLEFBUUEsQUFhSCxBQWdFRyxBQVVELENBc0JELEFBNENoQixDQTdCYSxBQWtDQyxDQTlHZCxBQXNENkIsRUF4Q0gsQUFRVixBQXFKVyxBQVdILEdBNEJ2QixDQTdFUyxJQTNJVixDQTVCaUIsQUErR0csQ0FrQ0gsQ0ExSUEsQUFtRUEsQUFzQkMsQ0FySEMsQUFRRixBQTZFQSxDQXdHTCxDQXJKVyxBQTZLSyxDQXZJZ0MsQUFvRTdDLE9BNEZLLEVBaERaLENBeEtSLEFBZ0RvQixBQTZKRixDQXJISyxBQXlEWCxDQTFJRyxBQW1FQSxDQXZGQSxBQTZFQSxBQWdDRSxBQWVtRCxDQWNwRSxDQWxKZSxDQThMRCxLQXRKTSxDQStIcEIsR0E4Q0MsQUF5QkEsQ0FqTmdCLEFBbUVpQixBQW1JeEIsQ0ExTlUsQUE2RVYsRUFyRlYsQUFxRUEsQUFnRGUsQUF5RWYsSUFqRkEsQ0FzSFcsRUE3SVgsSUE5Q2lCLEVBWGpCLENBeUZhLEFBOEdlLEdBM041QixTQThHaUIsQ0E5RWpCLENBb0NBLEVBbUJBLFlBd0JBLE9BWStELHVEQWlHM0MsS0FoR3dDLGFBaUczRCw0Q0FoR2tDLGlDQUNuQixlQUNDLGdCQUNFLGtCQUNKLGNBQ08scUJBQ3RCIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wcml0YW0vRG9jdW1lbnRzL2JpbmJpbGwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU29jaWFsIGZyb20gXCIuLi9jb21wb25lbnRzL3NvY2lhbFwiO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZT17XG5cdFx0XHRpc09uQnJvd3NlcjogZmFsc2Vcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpc09uQnJvd3NlcjogdHJ1ZVxuXHRcdH0pXG5cdH1cblx0Ly8gcmVuZGVyQmxvZ3MoKSB7XG5cdC8vIFx0Y29uc3QgYmxvZ3MgPSB0aGlzLnByb3BzID8gdGhpcy5wcm9wcy5ibG9ncy5zbGljZSgwLCAzKSA6IFtdO1xuXG5cdC8vIFx0cmV0dXJuIGJsb2dzLm1hcChibG9nID0+IChcblx0Ly8gXHRcdDxhXG5cdC8vIFx0XHRcdGtleT17YmxvZy5pZH1cblx0Ly8gXHRcdFx0aHJlZj17YC9ibG9nLyR7YmxvZy5pZH1gfVxuXHQvLyBcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tNCBkYXNoYm9hcmQtYmxvZy1pdGVtXCJcblx0Ly8gXHRcdD5cblx0Ly8gXHRcdFx0PGRpdlxuXHQvLyBcdFx0XHRcdGNsYXNzTmFtZT1cImRhc2hib2FyZC1ibG9nLWltYWdlXCJcblx0Ly8gXHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtibG9nLmltYWdlfSlgIH19XG5cdC8vIFx0XHRcdC8+XG5cdC8vIFx0XHRcdDxoNCBjbGFzc05hbWU9XCJkYXNoYm9hcmQtYmxvZy10aXRsZVwiPntibG9nLnRpdGxlfTwvaDQ+XG5cdC8vIFx0XHQ8L2E+XG5cdC8vIFx0KSk7XG5cdC8vIH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtpc09uQnJvd3Nlcn09dGhpcy5zdGF0ZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaW1hZ2VzL2dyb3VwLTE1LnN2ZycgYWx0PVwiT24gQm9hcmRpbmdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNtYXJ0IFNhZmU8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U2VjdXJlbHkgc3RvcmUgYWxsIHlvdXIgaW1wb3J0YW50IGJpbGxzLCBkb2N1bWVudHMsIGxpY2Vuc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBldGMuLCBpbiB5b3VyIGVIb21lLlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ltYWdlcy9ncm91cC0xNi5wbmcnIGFsdD1cIk9uIEJvYXJkaW5nXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5GZWVsIEVtcG93ZXJlZDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDb25uZWN0IHdpdGggb3ZlciAxMDAgYnJhbmRzLCBmb3IgcHJvZHVjdCBpbmZvcm1hdGlvbiwgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGFueSBvdGhlciBlbnF1aXJ5LlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ltYWdlcy9ncm91cC00Ni5zdmcnIGFsdD1cIk9uIEJvYXJkaW5nXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5FYXN5IENvbW11bmljYXRpb248L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0T3ZlciA4OCwwMDAgYXV0aG9yaXNlZCBzZXJ2aWNlIGNlbnRlcnMgYXQgeW91ciBkaXNwb3NhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjcm9zcyA0MCsgY2l0aWVzLlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ltYWdlcy9ncm91cC0yNC5wbmcnIGFsdD1cIk9uIEJvYXJkaW5nXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5TdGF5IHVwZGF0ZWQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VHJhY2sgZXhwZW5zZXMsIHRheGVzIHBhaWQsIG9yIGdldCBtb250aGx5IGV4cGVuc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1sZy00IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaW1hZ2VzL2dyb3VwLTQ3LnBuZycgYWx0PVwiT24gQm9hcmRpbmdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRpbWVseSByZW5ld2FsczwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRHZXQgdGltZWx5IHJlbWluZGVycyBmb3IgaW5zdXJhbmNlLCB3YXJyYW50eSBjbGFpbXMgb3IgZW1pXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLWxnLTQgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pbWFnZXMvZ3JvdXAtMTIucG5nJyBhbHQ9XCJPbiBCb2FyZGluZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+UHJvZHVjdCBDYXJkPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5ldmVyIG1pc3Mgb3V0IGFueSBpbmZvcm1hdGlvbiBvZiB0aGUgcHJvZHVjdCBpbiB5b3VyIHNpZ2h0LlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGxldGUtZWxsaXBzZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1lbGxpcHNlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLXJpZ2h0XCIvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCBpcyBCaW5CaWxsP1xuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdoaWxlIGNsaWNraW5nIGEgc2VsZmllIG9uZSBkYXksIHdlIHRob3VnaHQgaG93IGVhc3kgb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpdmVzIGhhdmUgYmVjb21lLCB3aXRoIHRoZSBhZHZlbnQgb2Ygc21hcnQgcGhvbmVzLiBBdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZSB0aW1lLCB3ZSBmb3VuZCBvbmUgb2YgdXMgc3RydWdnbGluZyB3aXRoIHBpbGUgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmlsbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBoYXNzbGluZyBoaXMgd2F5IHRvIGhpcyBkZXNrIHdpdGggaHVnZSBmaWxlcywgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggbm90aGluZyBidXQgYmlsbHMvaW52b2ljZS4gVGhlIHJlYWxpc2F0aW9uIHRoYXQgc3R1Y2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXMgYXQgdGhhdCB0aW1lLCBsZWQgdG8gdGhlIGZvcm1hdGlvbiBvZiB3aGF0IHdlIHRvZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwgYXMgQmluQmlsbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBcGFydCBmcm9tIGJlY29taW5nIGEgcGFydCBhbmQgcGFyY2VsIG9mIHNob3BwaW5nIHRvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBtYW55LCBCaW5CaWxsIGhhcyBoZWxwZWQgbXVsdGlwbGUgaW5kaXZpZHVhbHMgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVpciBlYXNlZCBvdXQgYWZ0ZXIgc2FsZXMgY29tbXVuaWNhdGlvbi4gQnJhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbXVuaWNhdGlvbiBpcyB5ZXQgYW5vdGhlciBmZWF0dXJlIHRoYXQgQmluQmlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbiBoYXMgcHJvdmlkZWQgdG8gdGhlIHVzZXJzLCB3aGljaCBhbGxvd3MgdGhlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0byBjb21tdW5pY2F0ZSB3aXRoIGJyYW5kcyBmb3IgdmFyaW91cyBpbmZvcm1hdGlvbiByZWxhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHRoZSBwcm9kdWN0cy4gUHJvZHVjdCBjYXJkIGVuYWJsZXMgdXNlciB0byBzdGF5IHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBhbGwgdGhlIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gdGhlaXIgcHJvZHVjdHMsIGJlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBkYXRlIG9mIG1hbnVmYWN0dXJpbmcgb3IgcHVyY2hhc2UsIHdlIGhhdmUgaXQgYWxsLiBUaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSBsb3ZlZCB0aGUgbW9zdCBieSBhbGwgdGhlIHVzZXJzLCBpcyB0aGUgZUhvbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWlyIHZpcnR1YWwgc2FmZSBmb3Igc2VjdXJlbHkgc3RvcmluZyBhbGwgdGhlaXIgYmlsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGltcG9ydGFudCBkb2N1bWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTmV2ZXIgbWlzcyBvdXQgb24gYW55IGJpbGwsIG9yIGxldCBhZnRlciBzYWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tdW5pY2F0aW9uIGdpdmUgeW91IHN0cmVzcy4gSnVzdCB1c2UgQmluQmlsbCFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgY2xhc3NOYW1lPVwiZG93bmxvYWQtbW9kYWxcIiBzdHlsZT17e2hlaWdodDogJzMyMHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgaXRlbSBhdXRoLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIEFwcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXtlID0+IHRoaXMucHJvcHMudXBkYXRlTW9kYWxPcGVuU3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMuaXNEb3dubG9hZE1vZGFsT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgQXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbW92ZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMucHJvcHMudXBkYXRlTW9kYWxPcGVuU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdyZW1vdmUnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxci1jb2RlLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicXItY29kZS1jYXB0aW9uXCI+U2NhbiB0aGlzIFFSIENvZGUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkIHRoZSBhcHA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JiX3FyY29kZX0gYWx0PVwiQmluQmlsbCBRUiBDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInFyLWNvZGUtaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLXJvd1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5PUjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLXJvd1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZC1tZXNzYWdlLWJvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBjYW4gc2VuZCB5b3UgYW4gU01TIHdpdGggYSBwbGF5c3RvcmUgbGluayB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQgdGhlIGFwcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vYmlsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lucHV0W25hbWU9bXNnbW9iaWxlXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaG9uZVV0aWwgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gcGhvbmVVdGlsLmlzVmFsaWROdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVVdGlsLnBhcnNlKG1vYmlsZUlucHV0LnZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0lOJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9iaWxlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRJc1ZhbGlkUGhvbmVOdW1iZXIodmFsaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaENvbnRhY3RVcygnJywgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlSW5wdXQudmFsdWUudHJpbSgpLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQaG9uZU51bWJlcignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZU1vZGFsT3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRJc1ZhbGlkUGhvbmVOdW1iZXIodmFsaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBjbGFzc05hbWU9XCJtb2JpbGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTW9iaWxlIE5vLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J21zZ21vYmlsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyF0aGlzLnByb3BzLmlzVmFsaWRNc2dNb2JpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gdGhpcy5wcm9wcy51cGRhdGVQaG9uZU51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLm1zZ01vYmlsZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb250YWN0LXVzLWJ1dHRvblwiIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWVsbGlwc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsbGluZyB0aGUgR2FwXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvcmRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gbW9yZSBvZiBydW5uaW5nIGhlcmUgYW5kIHRoZXJlIGZvciBleGVyY2lzaW5nIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRzIGFzIGEgY29uc3VtZXIuIFVzZSBCaW5CaWxsLCBhbmQgZmlsbCBpbiBhbGwgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdhcHMsIGNvbm5lY3Qgd2l0aCBicmFuZHMsIGdldCBwcm9kdWN0IGluZm8sIHRpbWVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW1pbmRlcnMsIGhhc3NsZSBmcmVlIGFmdGVyIHNhbGVzIHNlcnZpY2VzLCBhbmQgYWNjZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgYmlsbHMvaW1wb3J0YW50IGRvY3VtZW50cyBhbnl0aW1lL2FueXdoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdoZXJlIHRoZXJlIGlzIGEgYmlsbCwgdGhlcmUgaXMgQmluQmlsbCFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXJBcHBJbWFnZX0gYWx0PVwiVXNlciBBcHAgQ29ubmVjdGl2aXR5XCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWxlZnRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhd2Vzb21lLWNvbnRlbnQgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ29uc3VtZXIgQXdhcmVuZXNzXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJvcmRlciBjb2wtbGctMSBjb2wtbWQtMiBjb2wtc20tMiBsZWZ0XCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaGVhZC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIEl0IGlzIG91ciBlbmRlYXZvdXIgdG8ga2VlcCBvdXIgY3VzdG9tZXIgdXBkYXRlZCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgYWZmYWlycyBvZiBJbmRpYW4gZWNvbm9taWMgc3lzdGVtLCBiZSBpdCByZWxhdGVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgR1NULCBvciBjb25zdW1lciByaWdodHMuY29tbXVuaWNhdGlvbiBnaXZlIHlvdSBzdHJlc3MuIEp1c3RcbiAgICAgICAgICAgICAgICAgICAgICB1c2UgQmluQmlsbCFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIVE1MKGJsb2dJbWFnZSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIVE1MKGJsb2dCb2R5KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidWkgaXRlbSBrbm93LW1vcmVcIiB0bz0nL2Jsb2cnPlxuICAgICAgICAgICAgICAgICAgICBLbm93IE1vcmVcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBPdXIgdXNlcnMgbG92ZSB1cyFcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29jaWFsLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxDYXJvdXNlbC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheXN0b3JlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2aWNlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YW5kcm9pZEltYWdlfSBhbHQ9XCJBbmRyb2lkIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5kcm9pZC1pbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpcGhvbmVJbWFnZX0gYWx0PVwiaVBob25lIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXBob25lLWltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIHRoZSBCaW5CaWxsIEFwcFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2YWlsLWFuZHJvaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldmVyIG1pc3Mgb3V0IG9uIGFueSBiaWxsLCBvciBsZXQgYWZ0ZXIgc2FsZXMgY29tbXVuaWNhdGlvbiBnaXZlIHlvdSBzdHJlc3MuIEp1c3QgdXNlIEJpbkJpbGwhXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheXN0b3JlLWJhZGdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmJpbi5iaW5iaWxsY3VzdG9tZXJcIj48aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwbGF5c3RvcmVCYWRnZUltYWdlfSBhbHQ9XCJQbGF5IFN0b3JlIEJhZGdlXCIvPiA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cblx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtdXMtZm9ybS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXJcIi8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3VcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgaGVyZSB0byBwcm92aWRlIHlvdSBtb3JlIGluZm9ybWF0aW9uLCBhbnN3ZXIgYW55XG4gICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zIHlvdSBtYXkgaGF2ZSBhbmRcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdGUgYVxuICAgICAgICAgICAgICAgICAgICAgIG1vcmUgZWZmZWN0aXZlIHNvbHV0aW9uIHRvIHlvdXIgbmVlZHMuIEdldCBpbiB0b3VjaCFcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Q29udGFjdFVzIHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiovfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYWJvdXRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgYWJvdXQtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaW1hZ2VzL2dyb3VwLTI5LnN2ZycgY2xhc3NOYW1lPVwiYWJvdXQtaW1hZ2VcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZTJcIj5XaGF0IGlzIEJpbkJpbGw/PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFdoaWxlIGNsaWNraW5nIGEgc2VsZmllIG9uZSBkYXksIHdlIHRob3VnaHQgaG93IGVhc3kgb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXZlcyBoYXZlIGJlY29tZSwgd2l0aCB0aGUgYWR2ZW50IG9mIHNtYXJ0IHBob25lcy4gQXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1lIHRpbWUsIHdlIGZvdW5kIG9uZSBvZiB1cyBzdHJ1Z2dsaW5nIHdpdGggcGlsZSBvZiBiaWxscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBoYXNzbGluZyBoaXMgd2F5IHRvIGhpcyBkZXNrIHdpdGggaHVnZSBmaWxlcywgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoIG5vdGhpbmcgYnV0IGJpbGxzL2ludm9pY2UuIFRoZSByZWFsaXNhdGlvbiB0aGF0IHN0dWNrXG4gICAgICAgICAgICAgICAgICAgICAgICB1cyBhdCB0aGF0IHRpbWUsIGxlZCB0byB0aGUgZm9ybWF0aW9uIG9mIHdoYXQgd2UgdG9kYXkgY2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgYXMgQmluQmlsbC5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0QXBhcnQgZnJvbSBiZWNvbWluZyBhIHBhcnQgYW5kIHBhcmNlbCBvZiBzaG9wcGluZyB0b3VycyBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbnksIEJpbkJpbGwgaGFzIGhlbHBlZCBtdWx0aXBsZSBpbmRpdmlkdWFscyB3aXRoIHRoZWlyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlZCBvdXQgYWZ0ZXIgc2FsZXMgY29tbXVuaWNhdGlvbi4gQnJhbmQgY29tbXVuaWNhdGlvbiBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgeWV0IGFub3RoZXIgZmVhdHVyZSB0aGF0IEJpbkJpbGwgYXBwbGljYXRpb24gaGFzIHByb3ZpZGVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUgdXNlcnMsIHdoaWNoIGFsbG93cyB0aGVtIHRvIGNvbW11bmljYXRlIHdpdGggYnJhbmRzIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaW91cyBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZSBwcm9kdWN0cy4gUHJvZHVjdCBjYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVzIHVzZXIgdG8gc3RheSB1cGRhdGVkIHdpdGggYWxsIHRoZSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZCB0byB0aGVpciBwcm9kdWN0cywgYmUgaXQgdGhlIGRhdGUgb2YgbWFudWZhY3R1cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgb3IgcHVyY2hhc2UsIHdlIGhhdmUgaXQgYWxsLiBUaGUgZmVhdHVyZSBsb3ZlZCB0aGUgbW9zdCBieVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsIHRoZSB1c2VycywgaXMgdGhlIGVIb21lLCB0aGVpciB2aXJ0dWFsIHNhZmUgZm9yIHNlY3VyZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yaW5nIGFsbCB0aGVpciBiaWxscyBhbmQgaW1wb3J0YW50IGRvY3VtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0TmV2ZXIgbWlzcyBvdXQgb24gYW55IGJpbGwsIG9yIGxldCBhZnRlciBzYWxlcyBjb21tdW5pY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBnaXZlIHlvdSBzdHJlc3MuIEp1c3QgdXNlIEJpbkJpbGwhXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgYWJvdXQtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHRleHQtY2VudGVyIGFib3V0LWl0ZW0tMi1pbWFnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ltYWdlcy9ncm91cC0zMy5wbmcnIGNsYXNzTmFtZT1cImFib3V0LWltYWdlXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgYWJvdXQtaXRlbS0yLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidGl0bGUyXCI+RmlsbGluZyB0aGUgR2FwPC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5vIG1vcmUgb2YgcnVubmluZyBoZXJlIGFuZCB0aGVyZSBmb3IgZXhlcmNpc2luZyB5b3VyIHJpZ2h0c1xuICAgICAgICAgICAgICAgICAgICAgICAgYXMgYSBjb25zdW1lci4gVXNlIEJpbkJpbGwsIGFuZCBmaWxsIGluIGFsbCB0aGUgZ2FwcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Qgd2l0aCBicmFuZHMsIGdldCBwcm9kdWN0IGluZm8sIHRpbWVseSByZW1pbmRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNzbGUgZnJlZSBhZnRlciBzYWxlcyBzZXJ2aWNlcywgYW5kIGFjY2VzcyB5b3VyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaWxscy9pbXBvcnRhbnQgZG9jdW1lbnRzIGFueXRpbWUvYW55d2hlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+V2hlcmUgdGhlcmUgaXMgYSBiaWxsLCB0aGVyZSBpcyBCaW5CaWxsITwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJvcmFuZ2UtaGVhZGluZ1wiPkNvbnN1bWVyIEF3YXJlbmVzczwvaDM+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyMlwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJsb2ctaGVhZC1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRJdCBpcyBvdXIgZW5kZWF2b3VyIHRvIGtlZXAgb3VyIGN1c3RvbWVyIHVwZGF0ZWQgd2l0aCB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgYWZmYWlycyBvZiBJbmRpYW4gZWNvbm9taWMgc3lzdGVtLCBiZSBpdCByZWxhdGVkIHRvIEdTVCwgb3JcbiAgICAgICAgICAgICAgICAgIGNvbnN1bWVyIHJpZ2h0cy5jb21tdW5pY2F0aW9uIGdpdmUgeW91IHN0cmVzcy4gSnVzdCB1c2UgQmluQmlsbCFcbiAgICAgICAgICAgICAgICA8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3RoaXMucmVuZGVyQmxvZ3MoKX08L2Rpdj4gKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrbm93LW1vcmUtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwia25vdy1tb3JlXCIgaHJlZj1cIi9ibG9nXCI+XG5cdFx0XHRcdFx0XHRcdEtub3cgTW9yZVxuICAgICAgICAgICAgICAgIDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRlc3RpbW9uaWFscy1jYXJvdXNlbC1oZWFkaW5nXCI+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm9yYW5nZS1oZWFkaW5nXCI+T3VyIHVzZXJzIGxvdmUgdXMhPC9oMz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9yZGVyMlwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFscy1jb250YWluZXJcIj5cblx0XHRcdFx0e2lzT25Ccm93c2VyICYmXHQ8U29jaWFsIC8+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcGxheXN0b3JlLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwbGF5c3RvcmUtc2VjdGlvbi1iZ1wiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9zdGF0aWMvaW1hZ2VzL2FwcC1kb3dubG9hZC1iYWNrLnN2ZycpYCB9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldmljZS1pbWFnZXMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz0nL3N0YXRpYy9pbWFnZXMvaS1waG9uZS03LW1vY2t1cEAzeC5wbmcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cImlQaG9uZSBJbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRldmljZS1pbWFnZSBpcGhvbmUtaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPScvc3RhdGljL2ltYWdlcy9nb29nbGUtcGl4ZWwtcmVhbGx5LWJsdWVAM3gucG5nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJBbmRyb2lkIEltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZGV2aWNlLWltYWdlIGFuZHJvaWQtaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTcgZG93bmxvYWQtYXBwLWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZTIgdGl0bGUyLXNtYWxsIGRvd25sb2FkLWFwcC1oZWFkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHREb3dubG9hZCB0aGUgQmluQmlsbCBBcHBcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3JkZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvd25sb2FkLWFwcC1kZXNjXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHROZXZlciBtaXNzIG91dCBvbiBhbnkgYmlsbCwgb3IgbGV0IGFmdGVyIHNhbGVzIGNvbW11bmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBnaXZlIHlvdSBzdHJlc3MuIEp1c3QgdXNlIEJpbkJpbGwhXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsYXlzdG9yZS1iYWRnZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5iaW4uYmluYmlsbGN1c3RvbWVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ltYWdlcy9wbGF5c3RvcmUtYmFkZ2UucG5nJyBhbHQ9XCJQbGF5IFN0b3JlIEJhZGdlXCIgLz57XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHQuaW1hZ2Uge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC50aXRsZSB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmY3MzJlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQudGl0bGUyIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogUXVpY2tzYW5kO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNDhweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC50aXRsZTItc21hbGwge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzZweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LmRlc2NyaXB0aW9uIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogUXVpY2tzYW5kO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRjb2xvcjogIzRhNGE0YTtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQuZGVzY3JpcHRpb24yIHtcblx0XHRcdFx0XHRmb250LWZhbWlseTogT3BlblNhbnM7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjcxO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LmNvbnRlbnQge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDM1cHg7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5hYm91dCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKFwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtNDguc3ZnXCIpIG5vLXJlcGVhdDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDkwcHg7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LmFib3V0LWl0ZW0ge1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNTBweDtcblx0XHRcdFx0XHRwYWRkaW5nOiA0MHB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5hYm91dC1pbWFnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQuYWJvdXQtaXRlbS0yLWltYWdlIHtcblx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5hYm91dC1pdGVtLTItY29udGVudCB7XG5cdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5tYWluLWJvcmRlciB7XG5cdFx0XHRcdFx0d2lkdGg6IDc5cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiA1cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMi41cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQubWFpbi1ib3JkZXIyIHtcblx0XHRcdFx0XHR3aWR0aDogNDdweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDVweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyLjVweDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI2NmRlZywgI2ZmODAyZSwgI2ZmNjUyZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5vcmFuZ2UtaGVhZGluZyB7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcblx0XHRcdFx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRjb2xvcjogI2ZmNzMyZTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5ibG9nLWhlYWQtZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRcdC8qIHdpZHRoOiAxMTYzcHg7ICovXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdGNvbG9yOiAjNGE0YTRhO1xuXHRcdFx0XHRcdG1hcmdpbjogMjBweCBhdXRvIDM1cHggIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LmRhc2hib2FyZC1ibG9nLWl0ZW0ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5kYXNoYm9hcmQtYmxvZy1pbWFnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMzBweDtcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LmRhc2hib2FyZC1ibG9nLXRpdGxlIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0Y29sb3I6ICM0YTRhNGE7XG5cdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5rbm93LW1vcmUtd3JhcHBlciB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5rbm93LW1vcmUge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4IDM1cHg7XG5cdFx0XHRcdFx0d2lkdGg6IDE3MHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDI2cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTkwZGVnLCAjZmY4MDJlLCAjZmY2NTJlKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoMTkwZGVnLCAjZmY4MDJlLCAjZmY2NTJlKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjYwZGVnLCAjZmY4MDJlLCAjZmY2NTJlKTtcblx0XHRcdFx0XHRmb250LWZhbWlseTogUXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5rbm93LW1vcmU6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNjBkZWcsICNmZjY1MmUsICNmZjgwMmUpO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHQudGVzdGltb25pYWxzLWNhcm91c2VsLWhlYWRpbmcge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDYwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC50ZXN0aW1vbmlhbHMtY29udGFpbmVyIHtcblx0XHRcdFx0XHRtYXJnaW46IDMwcHggMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LnBsYXlzdG9yZS1zZWN0aW9uIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDMwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5kZXZpY2UtaW1hZ2VzLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRoZWlnaHQ6IDU2MHB4O1xuXHRcdFx0XHRcdG1heC13aWR0aDogMzYwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5kZXZpY2UtaW1hZ2Uge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5pcGhvbmUtaW1hZ2Uge1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdHdpZHRoOiA0OCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5hbmRyb2lkLWltYWdlIHtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHdpZHRoOiA1OCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5wbGF5c3RvcmUtc2VjdGlvbi1iZyB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0aGVpZ2h0OiA0NTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0LnBsYXlzdG9yZS1iYWRnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDI4MHB4O1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC5wbGF5c3RvcmUtYmFkZ2UgaW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZG93bmxvYWQtYXBwLWRldGFpbHMge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDIwMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5kb3dubG9hZC1hcHAtZGVzYyB7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHQvKiBGb3IgbW9iaWxlIHBob25lczogKi9cblx0XHRcdFx0XHQuYWJvdXQge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKFwiL3N0YXRpYy9pbWFnZXMvZ3JvdXAtMzQuc3ZnXCIpIG5vLXJlcGVhdDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYWJvdXQtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNDVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnRpdGxlMiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI1cHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5tYWluLWJvcmRlciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNDdweDtcblx0XHRcdFx0XHRcdGhlaWdodDogM3B4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMi41cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5kZXNjcmlwdGlvbjIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDMyMHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMHB4IGF1dG8gNTBweDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm1haW4tYm9yZGVyMiB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDEwcHggYXV0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmFib3V0LWl0ZW0tMi1pbWFnZSB7XG5cdFx0XHRcdFx0XHRmbG9hdDogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmFib3V0LWl0ZW0tMi1jb250ZW50IHtcblx0XHRcdFx0XHRcdGZsb2F0OiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQub3JhbmdlLWhlYWRpbmcge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYmxvZy1oZWFkLWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmtub3ctbW9yZS13cmFwcGVyIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnBsYXlzdG9yZS1zZWN0aW9uLWJnIHtcblx0XHRcdFx0XHRcdGhlaWdodDogNDUwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5kb3dubG9hZC1hcHAtZGV0YWlscyB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wbGF5c3RvcmUtYmFkZ2Uge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IE1haW47Il19 */\n/*@ sourceURL=pages/dashboard.js */"
			}));
		}
	}]);

	return Main;
}(_react.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNvY2lhbCIsIk1haW4iLCJwcm9wcyIsInN0YXRlIiwiaXNPbkJyb3dzZXIiLCJzZXRTdGF0ZSIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFFYjsrQkFDTDs7ZUFBQSxBQUFZLE9BQU87c0NBQUE7O2dJQUFBLEFBQ1osQUFDTjs7UUFBQSxBQUFLO2dCQUZhLEFBRWxCLEFBQVcsQUFDRztBQURILEFBQ1Y7U0FFRDs7Ozs7c0NBQ21CLEFBQ25CO1FBQUEsQUFBSztpQkFBTCxBQUFjLEFBQ0EsQUFFZDtBQUhjLEFBQ2I7QUFHRjtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzJCQUNTO09BQUEsQUFDRCxjQUFhLEtBRFosQUFDaUIsTUFEakIsQUFDRCxBQUVQOzswQkFDQyxjQUFBO2VBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBO3dDQUFBLEFBQWU7O2VBQWY7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTt3Q0FBQSxBQUFlOztlQUFmO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7d0NBQUEsQUFBZTs7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBO3dDQUFBLEFBQWU7O2VBQWY7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTt3Q0FBQSxBQUFlOztlQUFmO2lCQUFBLEFBQ0M7QUFERDtBQUFBLDZDQUNNLEtBQUwsQUFBUywrQkFBOEIsS0FBdkMsQUFBMkMsMEJBQTNDOztlQUFBO2lCQUZGLEFBQ0MsQUFDQyxBQUVEO0FBRkM7d0JBRUQs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aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTt3Q0FBQSxBQUFjOztlQUFkO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQTt3Q0FBQSxBQUFlOztlQUFmO2lCQWhaRixBQThZQyxBQUVDLEFBRUQ7QUFGQztBQUFBLHdCQUVELGNBQUE7d0NBQUEsQUFBZTs7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxxQ0FDZ0IsQUFBQzs7ZUFBRDtpQkFuWmpCLEFBa1pDLEFBQ2dCLEFBRWhCO0FBRmdCO0FBQUEsSUFBQSxvQkFFaEIsY0FBQTt3Q0FBQSxBQUFlOztlQUFmO2lCQUFBLEFBQ0M7QUFERDtBQUFBO1dBR1MsRUFBRSxpQkFGVixBQUVRO3dDQUZSLEFBQ1c7O2VBRFg7aUJBREQsQUFDQyxBQUlBO0FBSkE7QUFFQyx1QkFFRCxjQUFBO3dDQUFBLEFBQWU7O2VBQWY7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTt3Q0FBQSxBQUFlOztlQUFmO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7d0NBQUEsQUFBZTs7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBO3dDQUFBLEFBQWU7O2VBQWY7aUJBQUEsQUFDQztBQUREO0FBQUE7U0FDQyxBQUNLLEFBQ0o7U0FGRCxBQUVLO3dDQUZMLEFBR1c7O2VBSFg7aUJBREQsQUFDQyxBQUtBO0FBTEE7QUFDQztTQUlELEFBQ0ssQUFDSjtTQUZELEFBRUs7d0NBRkwsQUFHVzs7ZUFIWDtpQkFSSCxBQUNDLEFBQ0MsQUFNQyxBQU9GO0FBUEU7QUFDQyx5QkFNSCxjQUFBO3dDQUFBLEFBQWU7O2VBQWY7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTt3Q0FBQSxBQUFhOztlQUFiO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFHQTt3Q0FBQSxBQUFlOztlQUFmO2lCQUpELEFBSUMsQUFDQTtBQURBO0FBQUEsdUJBQ0EsY0FBQTt3Q0FBQSxBQUFnQjs7ZUFBaEI7aUJBQUE7QUFBQTtBQUFBLE1BTEQsQUFLQyxBQUlBLG9IQUFBLGNBQUE7d0NBQUEsQUFBZTs7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBLE9BQUcsTUFBSCxBQUFRLG1GQUFSOztlQUFBO2lCQUFBLEFBQ0M7QUFERDs2Q0FDTSxLQUFMLEFBQVMsc0NBQXFDLEtBQTlDLEFBQWtELCtCQUFsRDs7ZUFBQTtpQkFERCxBQUNDLEFBQXdFO0FBQXhFO09BcmJQLEFBcVpDLEFBS0MsQUFDQyxBQWVDLEFBU0MsQUFDQzthQXBiTjtTQURELEFBQ0MsQUF3dEJEO0FBeHRCQzs7Ozs7QUFqQ2dCLEEsQUE0dkJuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJkYXNoYm9hcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcHJpdGFtL0RvY3VtZW50cy9iaW5iaWxsIn0=