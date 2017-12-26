import React, { Component } from "react";
import Head from "next/head";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props ? this.props.activeIndex : 0,
      isMobileMenuVisible: false
    };
  }
  render() {
    const { activeIndex, isMobileMenuVisible } = this.state;
    return (
      <div>
        <Head>
          <title>BinBill</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link href="/static/bootstrap/bootstrap.min.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            href="/static/bootstrap/bootstrap-theme.min.css"
            rel="stylesheet"
          />
          <link href="/static/quicksand/Quicksand.min.css" rel="stylesheet" />
        </Head>
        <header className={[activeIndex !== 1 ? "no-blog" : "blog"]}>
          <div className="circles right-circles" />
          <div className="circles left-circles" />
          <nav
            className="navbar navbar-default"
            ref="navbar"
            id="navbar"
            role="navigation"
          >
            <div className="container navbar-inner">
              <div className="logo-wrapper">
                <a href="/" className="logo">
                  <img
                    src="/static/images/logo.svg"
                    alt="logo"
                    className="logo-image"
                  />
                </a>
              </div>
              <div className={isMobileMenuVisible ? "mobile-menu-visible" : ""}>
                <div
                  onClick={this.toggleMobileMenu}
                  className="header-menu-body-overlay"
                >
                  <div className="header-menu">
                    <a
                      className={activeIndex === 0 ? "item active" : "item"}
                      onClick={e => this.props.changActiveIndex(0)}
                      href="/"
                      id={`link-index-0`}
                    >
                      Home
                    </a>
                    <a
                      className={activeIndex === 1 ? "item active" : "item"}
                      onClick={e => this.props.changActiveIndex(1)}
                      href="/blog"
                      id={`link-index-1`}
                    >
                      Blog
                    </a>
                    <a
                      className={activeIndex === 2 ? "item active" : "item"}
                      onClick={e => this.props.changActiveIndex(2)}
                      href="/faq"
                      id={`link-index-2`}
                    >
                      FAQ's
                    </a>
                    <a
                      className={activeIndex === 3 ? "item active" : "item"}
                      onClick={e => this.props.changActiveIndex(3)}
                      href="/about"
                      id={`link-index-3`}
                      style={{ display: "none" }}
                    >
                      About Us
                    </a>
                    <a
                      className={activeIndex === 4 ? "item active" : "item"}
                      onClick={e => this.props.changActiveIndex(4)}
                      href="/terms"
                      id={`link-index-4`}
                      style={{ display: "none" }}
                    >
                      Terms
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.bin.binbillcustomer"
                target="_blank"
              >
                <button className="ui item auth-item">Download App</button>
              </a>
              <div style={{ display: "none" }}>
                {/* <Modal
									className="download-modal"
									style={{ height: "320px" }}
									trigger={
										<button className="ui item auth-item">Download App</button>
									}
									onOpen={e => this.props.updateModalOpenState(true)}
									open={this.props.isDownloadModalOpen}
								>
									<Modal.Header>
										<div className="content-header">
											<p className="title-main">Download App</p>
											<a
												className="remove-icon"
												onClick={e => this.props.updateModalOpenState(false)}
											>
												<Icon name="remove" />
											</a>
										</div>
									</Modal.Header>
									<Modal.Content>
										<div className="qr-code-block">
											<p className="qr-code-caption">
												Scan this QR Code to download the app
                    </p>
											<img
												src={bb_qrcode}
												alt="BinBill QR Code"
												className="qr-code-image"
											/>
										</div>
										<div className="or-content">
											<div className="vertical-row" />
											<p>OR</p>
											<div className="vertical-row" />
										</div>
										<div className="send-message-bock">
											<p>
												We can send you an SMS with a playstore link to download
                      the app
                    </p>
											<Form
												onSubmit={e => {
													e.preventDefault();
													const mobileInput = document.querySelector(
														"input[name=msgmobile]"
													);
													let valid = false;
													try {
														const phoneUtil = PhoneNumberUtil.getInstance();
														valid = phoneUtil.isValidNumber(
															phoneUtil.parse(mobileInput.value.trim(), "IN")
														);
													} catch (e) {
														valid = false;
													}
													if (valid) {
														console.log(mobileInput.value);
														this.props.setIsValidPhoneNumber(valid);
														this.props.dispatchContactUs(
															"",
															"",
															mobileInput.value.trim(),
															""
														);
														mobileInput.value = "";
														this.props.updatePhoneNumber("");
														this.props.updateModalOpenState(false);
													} else {
														this.props.setIsValidPhoneNumber(valid);
													}
												}}
											>
												<Form.Input
													className="mobile-text"
													placeholder="Mobile No."
													name="msgmobile"
													type="tel"
													required
													error={!this.props.isValidMsgMobile}
													onChange={e =>
														this.props.updatePhoneNumber(e.target.value)
													}
													value={this.props.msgMobile}
												/>
												<Button className="contact-us-button" type="submit">
													Send
                      </Button>
											</Form>
										</div>
									</Modal.Content>
								</Modal> */}
              </div>
              <div
                onClick={this.toggleMobileMenu}
                className="mobile-menu-icon-wrapper"
              >
                <i className="fa fa-bars mobile-menu-icon" aria-hidden="true" />
              </div>
            </div>
          </nav>
          <div className="header-bottom container" hidden={activeIndex === 1}>
            <div className="row">
              <div className="col-sm-6">
                <p className="header-para">
                  Build your eHome, and enjoy hassle free bill management
                </p>
              </div>
              <div className="col-sm-6 header-mobile-img-container">
                <img
                  className="header-mobile-img"
                  src="/static/images/phone-3-x-132-d-989-c.png"
                />
                {/* <Slider {...settings}
                                    className="mobile-image-slider">
                              <img className="header-mobile-img-1"
                                   src={phoneImage} alt="Phone Image"/>
                              <img className="header-mobile-img-2"
                                   src={phoneImage2} alt="Phone Image"/>
                              <img className="header-mobile-img-3"
                                   src={phoneImage3} alt="Phone Image"/>
                            </Slider> */}
              </div>
            </div>
          </div>
          <style jsx global>
            {`
              .root {
                background-color: rgba(236, 242, 245, 0.49);
              }
            `}
          </style>
          <style jsx>
            {`
              .navbar-default {
                background: none !important;
                border: none !important;
                box-shadow: none !important;
                z-index: 1111111111111;
                height: 90px;
              }

              .navbar-fixed-top {
                -webkit-backdrop-filter: blur(7px) !important;
                backdrop-filter: blur(7px) !important;
                background-color: rgba(255, 255, 255, 0.95) !important;
                box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1) !important;
              }

              .navbar-fixed-top:after {
                filter: blur(7px);
                -moz-filter: blur(7px);
                -webkit-filter: blur(7px);
                -o-filter: blur(7px);
              }

              header {
                position: relative;
              }

              header.no-blog {
                max-width: 100%;
                width: 100%;
                background: url("/static/images/rectangle-5.svg") no-repeat;
                background-position: right bottom;
                background-size: cover;
              }

              header.blog {
                max-width: 100%;
                width: 100%;
                height: 90px;
                background: url(/static/images/main-hero-bg.svg) no-repeat;
                background-size: cover;
              }

              .navbar-inner {
                height: 100%;
                display: flex;
                align-items: center;
              }

              .logo-wrapper {
                flex: 1;
              }

              .logo {
                width: 160px;
                height: 40px;
                display: block;
              }

              .logo-image {
                width: 100%;
              }

              .header-menu {
                font-family: "montserrat-regular", "sans-serif", "serif" !important;
                font-size: 1.4rem !important;
              }

              .header-menu .item {
                color: rgba(255, 255, 255, 0.6) !important;
                margin: 0 25px;
              }

              .header-menu .item:hover {
                color: rgba(255, 85, 0, 1) !important;
              }

              .header-menu .active {
                color: rgba(255, 255, 255, 1) !important;
              }

              header nav.navbar-fixed-top .header-menu .item {
                color: #cdcdcd !important;
              }

              header nav.navbar-fixed-top .header-menu .active {
                color: rgba(255, 85, 0, 1) !important;
              }

              header nav .auth-item {
                color: rgba(255, 255, 255, 1) !important;
                background: linear-gradient(
                  260deg,
                  #ff622e,
                  #ff822e
                ) !important;
                box-shadow: 0 5px 15px 0 rgba(180, 75, 35, 0.35) !important;
                text-align: center;
                padding: 15px 35px !important;
                border-radius: 100px !important;
                font-family: "montserrat-bold", "sans-serif", "serif" !important;
                margin: 0 25px;
                border-style: solid;
                border-color: #ff822e;
              }

              header nav.navbar-fixed-top .auth-item {
                color: rgba(255, 255, 255, 0.8) !important;
              }

              .mobile-menu-icon-wrapper {
                width: 18px;
                height: 18px;
                cursor: pointer;
                display: none;
              }

              .mobile-menu-icon {
                font-size: 20px !important;
                color: #fff;
              }

              .navbar-fixed-top .mobile-menu-icon {
                color: #399fe5;
              }

              @media only screen and (max-width: 768px) {
                .logo {
                  width: 80px;
                  height: 20px;
                }
                .mobile-menu-icon-wrapper {
                  display: block;
                }
                .mobile-menu-visible .header-menu-body-overlay {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: rgba(0, 0, 0, 0.5);
                }
                .header-menu {
                  position: fixed;
                  width: 280px;
                  height: 100%;
                  background: #fff;
                  top: 0;
                  right: 0;
                  padding: 30px 10px;
                  transform: translateX(100%);
                  transition: 0.3s;
                }
                .mobile-menu-visible .header-menu {
                  transform: translateX(0);
                }
                .header-menu .item {
                  color: #cdcdcd !important;
                  display: block;
                  margin-bottom: 25px;
                }
                .header-menu .active {
                  color: rgba(255, 85, 0, 1) !important;
                }
              }

              .ui.modal > .header {
                padding: 10px !important;
              }

              .download-modal > .content {
                height: 70% !important;
                display: flex !important;
              }

              .ui.modal .content-header {
                margin: 0 auto !important;
                padding: 0 !important;
              }

              .ui.modal .qr-code-block {
                width: 48%;
                font-family: Quicksand, sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                text-align: center;
                color: #3b3b3b;
              }

              .ui.modal .or-content {
                width: 4%;
              }

              .ui.modal .or-content p {
                margin: 0 auto;
                padding: 7px;
                font-family: Quicksand, sans-serif;
                font-size: 0.75rem;
                font-weight: 500;
                text-align: left;
                color: #9c9c9c;
              }

              .ui.modal .or-content .vertical-row {
                width: 1px;
                height: 90px;
                border: solid 1px #eaeaea;
                margin: 0 auto;
              }

              .ui.modal .send-message-bock {
                width: 48%;
              }

              .ui.modal .send-message-bock p {
                width: 85%;
                margin: 0 auto;
                font-family: Quicksand, sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                text-align: center;
                color: #3b3b3b;
              }

              .ui.modal .send-message-bock .mobile-text {
                width: 75%;
                margin: 30px auto 15px;
                border-radius: 4px;
                background-color: #ffffff;
                border: solid 1px #cdcdcd;
              }

              .ui.modal .contact-us-button {
                width: 75%;
                margin: 15px 50px;
                border-radius: 44px;
                background-image: linear-gradient(259deg, #ff622e, #ff822e);
                box-shadow: 0 5px 15px 0 rgba(180, 75, 35, 0.35);
                font-family: Montserrat, sans-serif;
                font-size: 1rem;
                font-weight: bold;
                letter-spacing: 0.5px;
                text-align: center;
                color: #ffffff;
              }

              .ui.modal .contact-us-button:hover {
                border-radius: 44px;
                background-image: linear-gradient(259deg, #ff822e, #ff622e);
                box-shadow: 0 5px 15px 0 rgba(180, 75, 35, 0.35);
                font-family: Montserrat, sans-serif;
                font-size: 1rem;
                font-weight: bold;
                letter-spacing: 0.5px;
                text-align: center;
                color: #ffffff;
              }

              .ui.modal .qr-code-image {
                width: 40% !important;
                margin: 0 0 0 7.5%;
              }

              .ui.modal .qr-code-caption {
                padding: 0.7rem 1.5rem !important;
              }

              .ui.modal .content-header .main-border {
                width: 100px;
                height: 5px;
                background-color: #009ee5;
                border: solid #009ee5;
                margin-bottom: 5px !important;
              }

              .ui.modal .content-header .title-main {
                font-family: Quicksand, serif;
                font-size: 2.875rem;
                font-weight: 500;
                color: #009ee5;
                display: inline;
              }

              .ui.modal .remove-icon {
                float: right;
              }

              .ui.modal .remove-icon i {
                color: #d8d8d8;
              }

              .header-bottom {
                margin-top: 60px;
                position: relative;
              }

              .circles {
                position: absolute;
                width: 188px;
                height: 231px;
                bottom: 0;
                right: 0;
              }

              .right-circles {
                background: url("/static/images/group.svg") no-repeat;
                background-size: contain;
              }

              .left-circles {
                background: url("/static/images/group-2.svg") no-repeat;
                background-size: contain;
                right: auto;
                left: 0;
              }

              .header-para {
                font-family: Quicksand, serif;
                font-weight: 500;
                font-size: 36px;
                text-align: left;
                color: #ffffff;
                display: inline-flex;
                padding: 90px 0 50px;
                max-width: 400px;
              }

              .header-mobile-img-container {
                text-align: right;
              }

              .header-mobile-img {
                width: 100%;
                max-width: 390px;
              }

              .mobile-image-slider {
                margin: 0 56px;
                width: 277px;
                height: 498px;
                object-fit: contain;
              }

              .mobile-image-slider img {
                margin-top: 26px;
              }

              @media only screen and (max-width: 420px) {
                .header-bottom {
                  margin-top: 0px;
                }
                .header-para {
                  padding: 0 0 50px;
                  text-align: center;
                  font-size: 18px;
                  max-width: 300px;
                  display: block;
                  margin: auto;
                }
                .header-mobile-img-container {
                  text-align: center;
                }
              }
            `}
          </style>
        </header>
      </div>
    );
  }
}

export default Header;
