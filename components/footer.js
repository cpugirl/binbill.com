import React, { Component } from "react";

class Footer extends Component {
  render() {
    const d = new Date();
    const year = d.getFullYear();

    return (
      <footer>
        <div className="mobile">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 footer-logo">
                <img
                  src="/static/images/logo-492817-e-5.svg"
                  alt="footerlogo"
                />
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1" />
              <div className="col-lg-3 col-md-3 col-sm-3 layer">
                <p className="title">Contact</p>
                <p>
                  <a href="mailto:support@binbill.com">support@binbill.com</a>
                </p>
                <p>
                  <a href="tel:+91-124-4343177">+91-124-4343177</a>
                </p>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1" />
              <div className="col-lg-5 col-md-5 col-sm-5 message">
                <p className="title">We would love to hear from you</p>
                <p>
                  We are here to provide you more information, answer any
                  questions you may have and create a more effective solution to
                  your needs. Get in touch!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 footer-nav">
                <ul>
                  <li>
                    <a className="item footer-link" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="item footer-link" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li style={{ display: "none" }}>
                    <a className="item footer-link" href="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="item footer-link" href="/faq">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a className="item footer-link" href="/term">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a className="item footer-link" href="/privacy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1" />
              <div className="col-lg-3 col-md-3 col-sm-3 address">
                <p className="title">Address</p>
                <p>
                  Bin Bill Services Private Limited 350, 3rd Floor, Tower B2,
                  Spaze IT Park, Sector 49, Sohna Road, Gurgaon - 18, Haryana,
                  India
                </p>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1" />
              <div className="col-lg-5 col-md-5 col-sm-5 message">
                {/* <Modal className="footer-modal" style={{ height: '300px' }}
									trigger={
										<button className="ui item auth-item">
											Send Message
                              </button>}
									onOpen={e => this.props.updateMessageModalOpenState(
										true)}
									open={this.props.isMessageModalOpen}>
									<Modal.Header>
										<div className="footer-content-header">
											<p className="title-main">
												Send Message
                            </p>
											<a className="remove-icon"
												onClick={e => this.props.updateMessageModalOpenState(
													false)}>
												<Icon name='remove' />
											</a>
										</div>
									</Modal.Header>
									<Modal.Content>
										<Form onSubmit={e => {
											e.preventDefault();

											const nameInput = document.querySelector(
												'input[name=userName]');
											const emailInput = document.querySelector(
												'input[name=email]');
											const mobileInput = document.querySelector(
												'input[name=mobile]');
											const descriptionInput = document.querySelector(
												'textarea[name=description]');
											let valid = false;
											try {
												const phoneUtil = PhoneNumberUtil.getInstance();
												valid = phoneUtil.isValidNumber(
													phoneUtil.parse(mobileInput.value.trim(), 'IN'));
											} catch (e) {
												valid = false;
											}
											if (valid) {
												this.props.setIsValidPhoneNumber(valid);
												this.props.dispatchContactUs(nameInput.value.trim(),
													emailInput.value.trim(), mobileInput.value.trim(),
													descriptionInput.value.trim());
												nameInput.value = '';
												emailInput.value = '';
												mobileInput.value = '';
												descriptionInput.value = '';
												this.props.updatePhoneNumber('');
												this.props.updateMessageModalOpenState(false);
											} else {
												this.props.setIsValidPhoneNumber(valid);
											}
										}}>
											<Form.Group widths="equal">
												<Form.Input className="name-text" placeholder='Name'
													name='userName' />
												<Form.Input className="email-text"
													placeholder='Email Address' name='email'
													type="email" />
												<Form.Input className="mobile-text"
													placeholder='Mobile No.' name='mobile'
													type="tel" required
													error={!this.props.isValidPhoneNumber}
													onChange={e => this.props.updatePhoneNumber(
														e.target.value)}
													value={this.props.mobile} />
											</Form.Group>
											<Form.TextArea className="description-text"
												placeholder='Your Message'
												name='description' required />
											<Button className="footer-contact-us-button"
												type='submit'>
												Send Message
                            </Button>
										</Form>
									</Modal.Content>
								</Modal> */}
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 footer-nav" />
            </div>
          </div>
          <hr />
          <div className="container bottom-footer">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p className="copyright pull-left">
                  © BIN BILL SERVICES PRIVATE LIMITED, {year}. ALL RIGHTS
                  RESERVED
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2" />
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-3">
                <a href="https://www.facebook.com/binbill.ehome/?ref=br_rs">
                  <img
                    src="/static/images/facebook.svg"
                    alt="Facebook logo"
                    className="facebook-logo"
                  />
                </a>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-3">
                <a href="https://twitter.com/binbill_ehome">
                  <img
                    src="/static/images/twitter.svg"
                    alt="Twitter logo"
                    className="twitter-logo"
                  />
                </a>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-3">
                <a href="https://www.instagram.com/binbill_your_ehome/?hl=en">
                  <img
                    src="/static/images/instagram.svg"
                    alt="Instagram logo"
                    className="insta-logo"
                  />
                </a>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-3">
                <a href="https://www.linkedin.com/company/13320885/">
                  <img
                    src="/static/images/fill-88.svg"
                    alt="Linked In logo"
                    className="in-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="We-would-love-to-hea ">
                  We would love to hear from you
                </div>
              </div>
              <div className="col-xs-12">
                <div className="We-are-here-to-provi">
                  We are here to provide you more information, answer any
                  questions you may have and create a more effective solution to
                  your needs. Get in touch!
                </div>
              </div>
              <div className="col-xs-6 message">
                {/* <Modal className="footer-modal" style={{ height: '300px' }}
									trigger={
										<button className="ui item auth-item">
											Send Message
                              </button>}
									onOpen={e => this.props.updateMessageModalOpenState(
										true)}
									open={this.props.isMessageModalOpen}>
									<Modal.Header>
										<div className="footer-content-header">
											<p className="title-main">
												Send Message
                            </p>
											<a className="remove-icon"
												onClick={e => this.props.updateMessageModalOpenState(
													false)}>
												<Icon name='remove' />
											</a>
										</div>
									</Modal.Header>
									<Modal.Content>
										<Form onSubmit={e => {
											e.preventDefault();

											const nameInput = document.querySelector(
												'input[name=userName]');
											const emailInput = document.querySelector(
												'input[name=email]');
											const mobileInput = document.querySelector(
												'input[name=mobile]');
											const descriptionInput = document.querySelector(
												'textarea[name=description]');
											let valid = false;
											try {
												const phoneUtil = PhoneNumberUtil.getInstance();
												valid = phoneUtil.isValidNumber(
													phoneUtil.parse(mobileInput.value.trim(), 'IN'));
											} catch (e) {
												valid = false;
											}
											if (valid) {
												this.props.setIsValidPhoneNumber(valid);
												this.props.dispatchContactUs(nameInput.value.trim(),
													emailInput.value.trim(), mobileInput.value.trim(),
													descriptionInput.value.trim());
												nameInput.value = '';
												emailInput.value = '';
												mobileInput.value = '';
												descriptionInput.value = '';
												this.props.updatePhoneNumber('');
												this.props.updateMessageModalOpenState(false);
											} else {
												this.props.setIsValidPhoneNumber(valid);
											}
										}}>
											<Form.Group widths="equal">
												<Form.Input className="name-text" placeholder='Name'
													name='userName' />
												<Form.Input className="email-text"
													placeholder='Email Address' name='email'
													type="email" />
												<Form.Input className="mobile-text"
													placeholder='Mobile No.' name='mobile'
													type="tel" required
													error={!this.props.isValidPhoneNumber}
													onChange={e => this.props.updatePhoneNumber(
														e.target.value)}
													value={this.props.mobile} />
											</Form.Group>
											<Form.TextArea className="description-text"
												placeholder='Your Message'
												name='description' required />
											<Button className="footer-contact-us-button"
												type='submit'>
												Send Message
                            </Button>
										</Form>
									</Modal.Content>
								</Modal> */}
              </div>
              <div className="col-xs-6" />
            </div>
          </div>
          <div className="container-fluid Line-Copy" />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 footer-logo">
                <img
                  src="/static/images/logo-492817-e-5.svg"
                  alt="footerlogo"
                />
              </div>
              <div className="col-xs-12 footer-nav">
                <ul>
                  <li>
                    <a className="item footer-link" to="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="item footer-link" to="/blog">
                      Blog
                    </a>
                  </li>
                  <li style={{ display: "none" }}>
                    <a className="item footer-link" to="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="item footer-link" to="/faq">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a className="item footer-link" to="/terms">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a className="item footer-link" to="/privacy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid Line-Copy" />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 layer">
                <p className="title">Contact</p>
                <p>
                  <a href="mailto:support@binbill.com">support@binbill.com</a>
                </p>
                <p>
                  <a href="tel:+91-124-4343177">+91-124-4343177</a>
                </p>
              </div>
              <div className="col-xs-12 address">
                <p className="title">Address</p>
                <p>
                  Bin Bill Services Private Limited 350, 3rd Floor, Tower B2,
                  Spaze IT Park, Sector 49, Sohna Road, Gurgaon - 18, Haryana,
                  India
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid Line-Copy" />
          <div className="container">
            <div className="row">
              <div className="text-center col-xs-3">
                <a href="https://www.facebook.com/binbill.ehome/?ref=br_rs">
                  <img
                    src="/static/images/facebook.svg"
                    alt="Facebook logo"
                    className="facebook-logo"
                  />
                </a>
              </div>
              <div className="text-center col-xs-3">
                <a href="https://twitter.com/binbill_ehome">
                  <img
                    src="/static/images/twitter.svg"
                    alt="Twitter logo"
                    className="twitter-logo"
                  />
                </a>
              </div>
              <div className="text-center col-xs-3">
                <a href="https://www.instagram.com/binbill_your_ehome/?hl=en">
                  <img
                    src="/static/images/instagram.svg"
                    alt="Instagram logo"
                    className="insta-logo"
                  />
                </a>
              </div>
              <div className="text-center col-xs-3">
                <a href="https://www.linkedin.com/company/13320885/">
                  <img
                    src="/static/images/fill-88.svg"
                    alt="Linked In logo"
                    className="in-logo"
                  />
                </a>
              </div>
              <div className="col-xs-12 text-center">
                <p className="copyright">
                  © BIN BILL SERVICES PRIVATE LIMITED, {year}. ALL RIGHTS
                  RESERVED
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid space" />
        </div>
        <style jsx>
          {`
            footer {
              width: 100%;
              background-color: #424b4f;
              border: solid 1px rgba(255, 255, 255, 0.13);
            }

            footer .footer-logo img {
              max-width: 100%;
            }

            footer .layer p {
              font-family: Quicksand, sans-serif;
              opacity: 0.75;
              font-size: 14px;
              font-weight: 500;
              text-align: left;
              color: #ffffff;
              margin: 0 auto;
            }

            footer .layer .title {
              font-family: Quicksand, sans-serif;
              opacity: 1;
              font-size: 24px;
              font-weight: 500;
              text-align: left;
              color: #ffffff;
              margin-bottom: 10px;
            }

            footer .address p {
              font-family: Quicksand, sans-serif;
              opacity: 0.75;
              font-size: 14px;
              font-weight: 500;
              text-align: left;
              color: #ffffff;
              margin: 0 auto;
            }

            footer .address .title {
              font-family: Quicksand, sans-serif;
              opacity: 1;
              font-size: 24px;
              font-weight: 500;
              text-align: left;
              color: #ffffff;
              margin-bottom: 10px;
            }

            footer .message p {
              font-family: Quicksand, sans-serif;
              opacity: 0.75;
              font-size: 14px;
              font-weight: 500;
              text-align: left;
              color: #ffffff;
              margin: 10px 0 0 5px;
              width: 315px;
              height: 90px;
            }

            footer .message .title {
              font-family: Quicksand, sans-serif;
              height: 30px;
              opacity: 1;
              font-size: 24px;
              font-weight: 500;
              text-align: left;
              color: #ffffff;
              width: 100%;
              margin: 0 auto;
            }

            footer hr {
              border: solid 1px rgba(255, 255, 255, 0.13);
            }

            footer .container {
              padding-top: 50px;
            }

            footer .layer {
              font-family: Quicksand, sans-serif;
              font-size: 1.5rem;
              font-weight: 500;
              letter-spacing: 0.3px;
              text-align: left;
              color: #ffffff;
            }

            footer .layer p {
              margin: 0 auto;
            }

            footer .address {
              font-family: Quicksand, sans-serif;
              font-size: 1rem;
              line-height: 1.38;
              letter-spacing: 0.3px;
              text-align: left;
              color: rgba(255, 255, 255, 0.6);
            }

            footer .footer-nav {
              padding-right: 0 !important;
            }

            footer .footer-nav ul {
              padding-left: 0;
              margin-bottom: 0;
              list-style: none;
              text-align: left;
            }

            footer .footer-nav li {
              margin: 0 auto;
              padding-top: 5px;
            }

            footer .layer a {
              color: rgba(255, 255, 255, 1);
              padding: 10px 0;
            }

            footer .layer a:hover {
              color: #337ab7;
              padding: 10px 0;
            }

            footer .footer-nav li a {
              color: rgba(255, 255, 255, 1);
              padding: 10px 0;
            }

            footer .footer-nav li a:hover {
              color: #337ab7;
              padding: 10px 0;
            }

            footer .bottom-footer {
              padding-top: 0;
              padding-bottom: 20px;
            }

            footer .copyright {
              font-family: Quicksand, sans-serif;
              font-size: 1.2rem;
              font-weight: 500;
              text-align: left;
              color: rgba(255, 255, 255, 0.3);
              padding-top: 5px;
              margin: 0 auto;
            }

            footer .auth-item {
              color: rgba(255, 255, 255, 1) !important;
              background: linear-gradient(260deg, #ff622e, #ff822e) !important;
              box-shadow: 0 5px 15px 0 rgba(180, 75, 35, 0.35) !important;
              text-align: center;
              padding: 10px 35px !important;
              margin-top: 20px;
              border-radius: 100px !important;
              font-family: "montserrat-bold", "sans-serif", "serif" !important;
              border: none;
              float: left;
            }
            @media only screen and (min-width: 1200px) {
              .footer-modal {
                width: 617px !important;
                margin: -120px 0 0 -410px !important;
                left: 60% !important;
                z-index: 11111111111;
              }
            }

            .ui.modal > .header {
              padding: 10px !important;
            }

            .footer-modal > .content {
              height: 60% !important;
              display: flex !important;
              padding: 1.5rem 1.5rem 0.05rem !important;
            }

            .footer-modal .footer-content-header {
              margin: 0 auto !important;
              padding: 0 0.75rem !important;
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

            .footer-modal .footer-contact-us-button {
              width: 28%;
              margin: 0 0 0 35% !important;
              border-radius: 44px !important;
              background: linear-gradient(259deg, #ff622e, #ff822e) !important;
              box-shadow: 0 5px 15px 0 rgba(180, 75, 35, 0.35) !important;
              font-family: Montserrat, sans-serif !important;
              font-size: 1rem !important;
              font-weight: bold !important;
              letter-spacing: 0.5px;
              text-align: center;
              color: #ffffff !important;
            }

            .ui.modal .footer-contact-us-button:hover {
              border-radius: 44px;
              background: linear-gradient(259deg, #ff822e, #ff622e);
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

            .ui.modal .footer-content-header .main-border {
              width: 100px;
              height: 5px;
              background-color: #009ee5;
              border: solid #009ee5;
              margin-bottom: 5px !important;
            }

            .ui.modal .footer-content-header .title-main {
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
            .laptop {
              display: none;
              background-color: #424b4f;
            }
            @media only screen and (max-width: 768px) {
              /* For mobile phones: */
              .footer-modal {
                height: 440px !important;
              }
              .mobile {
                display: none;
              }
              .laptop {
                display: block;
              }
              .Line-Copy {
                width: 100%;
                height: 3px;
                border: solid 1px #68727b;
                margin-top: 31px;
              }
              .We-would-love-to-hea {
                width: 269px;
                height: 60px;
                font-family: Quicksand;
                font-size: 24px;
                font-weight: bold;
                text-align: left;
                color: #ffffff;
                margin-left: 28px;
                line-height: 1.3;
              }
              .We-are-here-to-provi {
                width: 269px;
                height: 60px;
                font-family: Quicksand;
                font-size: 12px;
                text-align: left;
                color: #ffffff;
                margin-left: 28px;
                margin-top: 18px;
              }
              footer .auth-item {
                color: rgba(255, 255, 255, 1) !important;
                background: linear-gradient(
                  260deg,
                  #ff622e,
                  #ff822e
                ) !important;
                box-shadow: 0 5px 15px 0 rgba(180, 75, 35, 0.35) !important;
                text-align: center;
                padding: 7px 15px !important;
                font-size: 12px;
                margin-left: 28px;
                margin-top: 25px;
                border-radius: 100px !important;
                font-family: "montserrat-bold", "sans-serif", "serif" !important;
                border: none;
                float: left;
              }
              .footer-logo {
                margin-left: 27px;
              }
              .footer-nav {
                font-family: Quicksand;
                font-size: 14px;
                font-weight: bold;
                text-align: left;
                margin-left: 27px;
                margin-top: 48px;
                line-height: 2;
              }
              footer .layer {
                margin-left: 27px;
              }
              .address {
                width: 253px;
                margin-left: 27px;
                margin-top: 24px;
              }
              footer .copyright {
                text-align: center;
                margin-top: 21px !important;
                margin-bottom: 21px !important;
                font-size: 12px;
                margin-left: 7px;
              }
              .space {
                height: 40px;
                background-color: white;
              }
            }
          `}
        </style>
      </footer>
    );
  }
}

export default Footer;
