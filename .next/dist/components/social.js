"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactSlick = require("react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/pritam/Documents/binbill/components/social.js";


var testimonials = [{
    id: 1,
    image: "static/images/Pulkit agarwal.jpg",
    text: "Although I still manage my bills in a file and folder manner, I\n    have started my transition to digitise my bill management process.\n    BinBill has played a significant role in it, and has amazing\n    features. I can easily categorise my bills under various\n    categories, access them anywhere for reference, and even I have\n    got my Aadhaar card stored in it.",
    author: "Pulkit, Faridabad"
}, {
    id: 2,
    image: "/static/images/Shivam Tiwari.jpg",
    text: "I have to travel a lot on behalf of my organisation, and before\n    BinBill, submitting bills for reimbursement was a big hassle.\n    Everytime I use to be back, I had a separate file for bills. With\n    BinBill, it has been eased to an extent where I can manage my\n    bills at just a click.",
    author: "Shivam, Gurugram"
}, {
    id: 3,
    image: "/static/images/Varun Singh.jpg",
    text: "Managing bills was a big hassle before BinBill. I had to maintain\n    a log of bills, manually categorise them, punch holes in them and\n    then arrange them in a file. BinBill allows me to do everything\n    digitally, now I don\u2019t have to any of the above, BinBill takes\n    care of it for me. I just need to click a picture, and upload it.",
    author: "Sagar Sharma, Freelancer"
}, {
    id: 4,
    image: "/static/images/default_male.png",
    text: "Until I was denied the warranty on a newly purchased Samsung\n    phone, I didn\u2019t realise the importance of a bill. I\u2019m bad with\n    managing my things, and was really out of idea how can I manage my\n    bills. Before it turned into a nightmare for me, my friend\n    introduced me to BinBill. Since then, managing bills have been\n    easy.",
    author: "Varun, Hyderabad"
}];

var SocialCarousel = function (_Component) {
    (0, _inherits3.default)(SocialCarousel, _Component);

    function SocialCarousel() {
        (0, _classCallCheck3.default)(this, SocialCarousel);

        return (0, _possibleConstructorReturn3.default)(this, (SocialCarousel.__proto__ || (0, _getPrototypeOf2.default)(SocialCarousel)).apply(this, arguments));
    }

    (0, _createClass3.default)(SocialCarousel, [{
        key: "render",
        value: function render() {
            var settings = {
                dots: false,
                arrows: true,
                infinite: true,
                centerMode: true,
                centerPadding: "0",
                speed: 1000,
                slidesToShow: 3,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true,
                responsive: [{ breakpoint: 420, settings: { slidesToShow: 1 } }, { breakpoint: 769, settings: { slidesToShow: 2 } }, { breakpoint: 1024, settings: { slidesToShow: 3 } }]
            };
            return _react2.default.createElement(_reactSlick2.default, (0, _extends3.default)({}, settings, { className: "main-gallery", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), testimonials.map(function (testimonial, index) {
                return _react2.default.createElement("div", { key: index, className: "jsx-579654560" + " " + "testimonial-wrapper",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                }, _react2.default.createElement("div", {
                    className: "jsx-579654560" + " " + "testimonial",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }, _react2.default.createElement("div", {
                    className: "jsx-579654560" + " " + "testimonial-inner",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, _react2.default.createElement("div", {
                    style: { backgroundImage: "url(\"" + testimonial.image + "\")" },
                    className: "jsx-579654560" + " " + "testimonial-avatar",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                }), _react2.default.createElement("p", {
                    className: "jsx-579654560" + " " + "testimonial-text",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                    }
                }, testimonial.text), _react2.default.createElement("p", {
                    className: "jsx-579654560" + " " + "testimonial-author",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                    }
                }, testimonial.author))));
            }), _react2.default.createElement(_style2.default, {
                styleId: "579654560",
                css: ".testimonial-wrapper{padding:10px;}.testimonial{margin:auto;max-width:520px;height:320px;position:relative;text-align:center;border-radius:5px;background-image:linear-gradient(116deg,#3023ae,#c86dd7);box-shadow:1px 2px 4px 0 rgba(0,0,0,0.39);text-align:center;margin-top:60px;}.testimonial-avatar{width:115px;height:115px;display:inline-block;background-color:#ff7c5a;background-repeat:no-repeat;background-size:cover;background-position:center center;border-radius:60px;position:relative;top:-60px;border:1px solid #3023ae;}.testimonial-text{position:relative;top:-30px;color:#fff;font-family:Quicksand;font-weight:500;color:14px;width:100%;padding:0 20px;}.testimonial-author{position:absolute;bottom:40px;color:#fff;font-family:Quicksand;font-weight:500;font-size:18px;width:100%;padding:0 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc29jaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGWSxBQUU4QixBQUdELEFBWUEsQUFjTSxBQVdBLFlBcENGLEFBWUgsQ0FmZixLQTZCWSxBQVdFLE9BeEJTLEdBWlIsQUEwQkYsRUFXQSxTQVZXLEVBMUJKLEFBcUNJLEtBekJHLGFBWFAsRUEwQkYsRUFXQSxRQXpCWSxNQVhWLEFBMEJQLEVBV0ksU0FWSixNQVdBLENBckNnRCxJQVdyQyxBQWdCUCxNQVdBLFNBVmpCLE1BV0EsQ0EzQm9DLCtCQVhXLEdBWTFCLG1CQUNELGtCQUNSLEVBYlEsUUFjTyxVQWJULGVBY2xCLENBYkEiLCJmaWxlIjoiY29tcG9uZW50cy9zb2NpYWwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcHJpdGFtL0RvY3VtZW50cy9iaW5iaWxsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcblxuY29uc3QgdGVzdGltb25pYWxzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGltYWdlOiBgc3RhdGljL2ltYWdlcy9QdWxraXQgYWdhcndhbC5qcGdgLFxuICAgICAgICB0ZXh0OiBgQWx0aG91Z2ggSSBzdGlsbCBtYW5hZ2UgbXkgYmlsbHMgaW4gYSBmaWxlIGFuZCBmb2xkZXIgbWFubmVyLCBJXG4gICAgaGF2ZSBzdGFydGVkIG15IHRyYW5zaXRpb24gdG8gZGlnaXRpc2UgbXkgYmlsbCBtYW5hZ2VtZW50IHByb2Nlc3MuXG4gICAgQmluQmlsbCBoYXMgcGxheWVkIGEgc2lnbmlmaWNhbnQgcm9sZSBpbiBpdCwgYW5kIGhhcyBhbWF6aW5nXG4gICAgZmVhdHVyZXMuIEkgY2FuIGVhc2lseSBjYXRlZ29yaXNlIG15IGJpbGxzIHVuZGVyIHZhcmlvdXNcbiAgICBjYXRlZ29yaWVzLCBhY2Nlc3MgdGhlbSBhbnl3aGVyZSBmb3IgcmVmZXJlbmNlLCBhbmQgZXZlbiBJIGhhdmVcbiAgICBnb3QgbXkgQWFkaGFhciBjYXJkIHN0b3JlZCBpbiBpdC5gLFxuICAgICAgICBhdXRob3I6IGBQdWxraXQsIEZhcmlkYWJhZGBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGltYWdlOiBgL3N0YXRpYy9pbWFnZXMvU2hpdmFtIFRpd2FyaS5qcGdgLFxuICAgICAgICB0ZXh0OiBgSSBoYXZlIHRvIHRyYXZlbCBhIGxvdCBvbiBiZWhhbGYgb2YgbXkgb3JnYW5pc2F0aW9uLCBhbmQgYmVmb3JlXG4gICAgQmluQmlsbCwgc3VibWl0dGluZyBiaWxscyBmb3IgcmVpbWJ1cnNlbWVudCB3YXMgYSBiaWcgaGFzc2xlLlxuICAgIEV2ZXJ5dGltZSBJIHVzZSB0byBiZSBiYWNrLCBJIGhhZCBhIHNlcGFyYXRlIGZpbGUgZm9yIGJpbGxzLiBXaXRoXG4gICAgQmluQmlsbCwgaXQgaGFzIGJlZW4gZWFzZWQgdG8gYW4gZXh0ZW50IHdoZXJlIEkgY2FuIG1hbmFnZSBteVxuICAgIGJpbGxzIGF0IGp1c3QgYSBjbGljay5gLFxuICAgICAgICBhdXRob3I6IGBTaGl2YW0sIEd1cnVncmFtYFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1hZ2U6IGAvc3RhdGljL2ltYWdlcy9WYXJ1biBTaW5naC5qcGdgLFxuICAgICAgICB0ZXh0OiBgTWFuYWdpbmcgYmlsbHMgd2FzIGEgYmlnIGhhc3NsZSBiZWZvcmUgQmluQmlsbC4gSSBoYWQgdG8gbWFpbnRhaW5cbiAgICBhIGxvZyBvZiBiaWxscywgbWFudWFsbHkgY2F0ZWdvcmlzZSB0aGVtLCBwdW5jaCBob2xlcyBpbiB0aGVtIGFuZFxuICAgIHRoZW4gYXJyYW5nZSB0aGVtIGluIGEgZmlsZS4gQmluQmlsbCBhbGxvd3MgbWUgdG8gZG8gZXZlcnl0aGluZ1xuICAgIGRpZ2l0YWxseSwgbm93IEkgZG9u4oCZdCBoYXZlIHRvIGFueSBvZiB0aGUgYWJvdmUsIEJpbkJpbGwgdGFrZXNcbiAgICBjYXJlIG9mIGl0IGZvciBtZS4gSSBqdXN0IG5lZWQgdG8gY2xpY2sgYSBwaWN0dXJlLCBhbmQgdXBsb2FkIGl0LmAsXG4gICAgICAgIGF1dGhvcjogYFNhZ2FyIFNoYXJtYSwgRnJlZWxhbmNlcmBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGltYWdlOiBgL3N0YXRpYy9pbWFnZXMvZGVmYXVsdF9tYWxlLnBuZ2AsXG4gICAgICAgIHRleHQ6IGBVbnRpbCBJIHdhcyBkZW5pZWQgdGhlIHdhcnJhbnR5IG9uIGEgbmV3bHkgcHVyY2hhc2VkIFNhbXN1bmdcbiAgICBwaG9uZSwgSSBkaWRu4oCZdCByZWFsaXNlIHRoZSBpbXBvcnRhbmNlIG9mIGEgYmlsbC4gSeKAmW0gYmFkIHdpdGhcbiAgICBtYW5hZ2luZyBteSB0aGluZ3MsIGFuZCB3YXMgcmVhbGx5IG91dCBvZiBpZGVhIGhvdyBjYW4gSSBtYW5hZ2UgbXlcbiAgICBiaWxscy4gQmVmb3JlIGl0IHR1cm5lZCBpbnRvIGEgbmlnaHRtYXJlIGZvciBtZSwgbXkgZnJpZW5kXG4gICAgaW50cm9kdWNlZCBtZSB0byBCaW5CaWxsLiBTaW5jZSB0aGVuLCBtYW5hZ2luZyBiaWxscyBoYXZlIGJlZW5cbiAgICBlYXN5LmAsXG4gICAgICAgIGF1dGhvcjogYFZhcnVuLCBIeWRlcmFiYWRgXG4gICAgfVxuXTtcbmNsYXNzIFNvY2lhbENhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjBcIixcbiAgICAgICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7IGJyZWFrcG9pbnQ6IDQyMCwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiAxIH0gfSxcbiAgICAgICAgICAgICAgICB7IGJyZWFrcG9pbnQ6IDc2OSwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiAyIH0gfSxcbiAgICAgICAgICAgICAgICB7IGJyZWFrcG9pbnQ6IDEwMjQsIHNldHRpbmdzOiB7IHNsaWRlc1RvU2hvdzogMyB9IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSBjbGFzc05hbWU9XCJtYWluLWdhbGxlcnlcIj5cbiAgICAgICAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWwsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC1hdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHt0ZXN0aW1vbmlhbC5pbWFnZX1cIilgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsLXRleHRcIj57dGVzdGltb25pYWwudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsLWF1dGhvclwiPnt0ZXN0aW1vbmlhbC5hdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgYC50ZXN0aW1vbmlhbC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50ZXN0aW1vbmlhbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTE2ZGVnLCAjMzAyM2FlLCAjYzg2ZGQ3KTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zOSk7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRlc3RpbW9uaWFsLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdjNWE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAtNjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzAyM2FlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAudGVzdGltb25pYWwtdGV4dCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAxNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnRlc3RpbW9uaWFsLWF1dGhvciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxDYXJvdXNlbDtcbm1vZHVsZS5leHBvcnRzPVNvY2lhbENhcm91c2VsO1xuIl19 */\n/*@ sourceURL=components/social.js */"
            }));
        }
    }]);

    return SocialCarousel;
}(_react.Component);

exports.default = SocialCarousel;

module.exports = SocialCarousel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc29jaWFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2xpZGVyIiwidGVzdGltb25pYWxzIiwiaWQiLCJpbWFnZSIsInRleHQiLCJhdXRob3IiLCJTb2NpYWxDYXJvdXNlbCIsInNldHRpbmdzIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsImZvY3VzT25TZWxlY3QiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm1hcCIsInRlc3RpbW9uaWFsIiwiaW5kZXgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07UUFDRixBQUNRLEFBQ0o7V0FGSixBQUdJO1VBSEosQUFTSTtZQVZhLEFBQ2pCO0FBQUEsQUFDSSxDQUZhO1FBWWpCLEFBQ1EsQUFDSjtXQUZKLEFBR0k7VUFISixBQVFJO1lBcEJhLEFBWWpCO0FBQUEsQUFDSTtRQVNKLEFBQ1EsQUFDSjtXQUZKLEFBR0k7VUFISixBQVFJO1lBOUJhLEFBc0JqQjtBQUFBLEFBQ0k7UUFTSixBQUNRLEFBQ0o7V0FGSixBQUdJO1VBSEosQUFTSTtZQXpDUixBQUFxQixBQWdDakI7QUFBQSxBQUNJOztJQVdGLEE7Ozs7Ozs7Ozs7O2lDQUNPLEFBQ0w7Z0JBQU07c0JBQVcsQUFDUCxBQUNOO3dCQUZhLEFBRUwsQUFDUjswQkFIYSxBQUdILEFBQ1Y7NEJBSmEsQUFJRCxBQUNaOytCQUxhLEFBS0UsQUFDZjt1QkFOYSxBQU1OLEFBQ1A7OEJBUGEsQUFPQyxBQUNkOytCQVJhLEFBUUUsQUFDZjswQkFUYSxBQVNILEFBQ1Y7K0JBVmEsQUFVRSxBQUNmOzhCQVhhLEFBV0MsQUFDZDs0QkFBWSxDQUNSLEVBQUUsWUFBRixBQUFjLEtBQUssVUFBVSxFQUFFLGNBRHZCLEFBQ1IsQUFBNkIsQUFBZ0IsT0FDN0MsRUFBRSxZQUFGLEFBQWMsS0FBSyxVQUFVLEVBQUUsY0FGdkIsQUFFUixBQUE2QixBQUFnQixPQUM3QyxFQUFFLFlBQUYsQUFBYyxNQUFNLFVBQVUsRUFBRSxjQWZ4QyxBQUFpQixBQVlELEFBR1IsQUFBOEIsQUFBZ0IsQUFHdEQ7QUFsQmlCLEFBQ2I7bUNBa0JBLEFBQUMsK0RBQUQsQUFBWSxZQUFVLFdBQXRCLEFBQWdDOzhCQUFoQztnQ0FBQSxBQUNLO0FBREw7Y0FBQSxlQUNLLEFBQWEsSUFBSSxVQUFBLEFBQUMsYUFBRCxBQUFhLE9BQWI7dUNBQ2QsY0FBQSxTQUFLLEtBQUwsQUFBVSwwQ0FBVixBQUEyQjs7a0NBQTNCO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxjQUFBO3VEQUFBLEFBQWU7O2tDQUFmO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUE7dURBQUEsQUFBZTs7a0NBQWY7b0NBQUEsQUFDSTtBQURKO0FBQUE7MkJBR2UsRUFBRSw0QkFBeUIsWUFBekIsQUFBcUMsUUFGbEQsQUFFVzt1REFGWCxBQUNjOztrQ0FEZDtvQ0FESixBQUNJLEFBSUE7QUFKQTtBQUVJLG9DQUVKLGNBQUE7dURBQUEsQUFBYTs7a0NBQWI7b0NBQUEsQUFBaUM7QUFBakM7QUFBQSwrQkFMSixBQUtJLEFBQTZDLEFBQzdDLHVCQUFBLGNBQUE7dURBQUEsQUFBYTs7a0NBQWI7b0NBQUEsQUFBbUM7QUFBbkM7QUFBQSwrQkFURSxBQUNkLEFBQ0ksQUFDSSxBQU1JLEFBQStDO0FBVm5FLEFBQ0s7eUJBREw7cUJBREosQUFDSSxBQXdFUDtBQXhFTzs7Ozs7QUFyQmlCLEEsQUFnRzdCOztrQkFBQSxBQUFlOztBQUNmLE9BQUEsQUFBTyxVQUFQLEFBQWUiLCJmaWxlIjoic29jaWFsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ByaXRhbS9Eb2N1bWVudHMvYmluYmlsbCJ9