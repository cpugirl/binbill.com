import React, { Component } from "react";
import Social from "../components/social";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnBrowser: false
    };
  }
  componentDidMount() {
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
  render() {
    const { isOnBrowser } = this.state;

    return (
      <div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4 text-center">
                <div className="image">
                  <img src="/static/images/group-15.svg" alt="On Boarding" />
                </div>
                <div className="content text-center">
                  <div className="title">Smart Safe</div>
                  <div className="description">
                    Securely store all your important bills, documents, licenses
                    etc., in your eHome.
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 text-center">
                <div className="image">
                  <img src="/static/images/group-16.png" alt="On Boarding" />
                </div>
                <div className="content">
                  <div className="title">Feel Empowered</div>
                  <div className="description">
                    Connect with over 100 brands, for product information, or
                    any other enquiry.
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 text-center">
                <div className="image">
                  <img src="/static/images/group-46.svg" alt="On Boarding" />
                </div>
                <div className="content">
                  <div className="title">Easy Communication</div>
                  <div className="description">
                    Over 88,000 authorised service centers at your disposal,
                    across 40+ cities.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-4 text-center">
                <div className="image">
                  <img src="/static/images/group-24.png" alt="On Boarding" />
                </div>
                <div className="content">
                  <div className="title">Stay updated</div>
                  <div className="description">
                    Track expenses, taxes paid, or get monthly expense
                    statements.
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 text-center">
                <div className="image">
                  <img src="/static/images/group-47.png" alt="On Boarding" />
                </div>
                <div className="content">
                  <div className="title">Timely renewals</div>
                  <div className="description">
                    Get timely reminders for insurance, warranty claims or emi
                    payments.
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 text-center">
                <div className="image">
                  <img src="/static/images/group-12.png" alt="On Boarding" />
                </div>
                <div className="content">
                  <div className="title">Product Card</div>
                  <div className="description">
                    Never miss out any information of the product in your sight.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="main-dashboard">
              <div className="complete-ellipse">
                <div className="left-ellipse">
                  <div className="group-right"/>
                  <div className="col-md-6 image"/>
                  <div className="col-md-6">
                    <div className="content">
                      <div className="title">
                        What is BinBill?
                      </div>
                      <div className="main-border"/>
                      <div className="description">
                        <p>
                          While clicking a selfie one day, we thought how easy our
                          lives have become, with the advent of smart phones. At the
                          same time, we found one of us struggling with pile of
                          bills,
                          and hassling his way to his desk with huge files, filled
                          with nothing but bills/invoice. The realisation that stuck
                          us at that time, led to the formation of what we today
                          call as BinBill.
                        </p>
                        <p>
                          Apart from becoming a part and parcel of shopping tours
                          for many, BinBill has helped multiple individuals with
                          their eased out after sales communication. Brand
                          communication is yet another feature that BinBill
                          application has provided to the users, which allows them
                          to communicate with brands for various information related
                          to the products. Product card enables user to stay updated
                          with all the information related to their products, be it
                          the date of manufacturing or purchase, we have it all. The
                          feature loved the most by all the users, is the eHome,
                          their virtual safe for securely storing all their bills
                          and important documents.
                        </p>
                        <p>
                          Never miss out on any bill, or let after sales
                          communication give you stress. Just use BinBill!
                        </p>
                      </div>
                      <Modal className="download-modal" style={{height: '320px'}}
                             trigger={
                               <button className="ui item auth-item">
                                 Download App
                               </button>}
                             onOpen={e => this.props.updateModalOpenState(true)}
                             open={this.props.isDownloadModalOpen}>
                        <Modal.Header>
                          <div className="content-header">
                            <p className="title-main">
                              Download App
                            </p>
                            <a className="remove-icon"
                               onClick={e => this.props.updateModalOpenState(
                                   false)}>
                              <Icon name='remove'/>
                            </a>
                          </div>
                        </Modal.Header>
                        <Modal.Content>
                          <div className="qr-code-block">
                            <p className="qr-code-caption">Scan this QR Code to
                              download the app</p>
                            <img src={bb_qrcode} alt="BinBill QR Code"
                                 className="qr-code-image"/>
                          </div>
                          <div className="or-content">
                            <div className="vertical-row"/>
                            <p>OR</p>
                            <div className="vertical-row"/>
                          </div>
                          <div className="send-message-bock">
                            <p>We can send you an SMS with a playstore link to
                              download the app</p>
                            <Form
                                onSubmit={e => {
                                  e.preventDefault();
                                  const mobileInput = document.querySelector(
                                      'input[name=msgmobile]');
                                  let valid = false;
                                  try {
                                    const phoneUtil = PhoneNumberUtil.getInstance();
                                    valid = phoneUtil.isValidNumber(
                                        phoneUtil.parse(mobileInput.value.trim(),
                                            'IN'));
                                  } catch (e) {
                                    valid = false;
                                  }
                                  if (valid) {
                                    console.log(mobileInput.value);
                                    this.props.setIsValidPhoneNumber(valid);
                                    this.props.dispatchContactUs('', '',
                                        mobileInput.value.trim(), '');
                                    mobileInput.value = '';
                                    this.props.updatePhoneNumber('');
                                    this.props.updateModalOpenState(false);
                                  } else {
                                    this.props.setIsValidPhoneNumber(valid);
                                  }
                                }}>
                              <Form.Input className="mobile-text"
                                          placeholder='Mobile No.'
                                          name='msgmobile'
                                          type="tel" required
                                          error={!this.props.isValidMsgMobile}
                                          onChange={
                                            e => this.props.updatePhoneNumber(
                                                e.target.value)}
                                          value={this.props.msgMobile}/>
                              <Button className="contact-us-button" type='submit'>
                                Send
                              </Button>
                            </Form>
                          </div>
                        </Modal.Content>
                      </Modal>
                    </div>
                  </div>
                </div>
                <div className="right-ellipse">
                  <div className="col-md-6">
                    <div className="content">
                      <div className="title">
                        Filling the Gap
                      </div>
                      <div className="main-border"/>
                      <div className="description">
                        <p>
                          No more of running here and there for exercising your
                          rights as a consumer. Use BinBill, and fill in all the
                          gaps, connect with brands, get product info, timely
                          reminders, hassle free after sales services, and access
                          your bills/important documents anytime/anywhere.
                        </p>
                        <p>
                          Where there is a bill, there is BinBill!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 image">
                    <img src={userAppImage} alt="User App Connectivity"/>
                  </div>
                  <div className="group-left"/>
                </div>
              </div>
              <div className="main-dashboard">
                <div className="awesome-content container">
                  <div className="row">
                    <p className="title-main">
                      Consumer Awareness
                    </p>
                  </div>
                  <div className="row">
                    <div className="main-border col-lg-1 col-md-2 col-sm-2 left"/>
                  </div>
                  <div className="row">
                    <div className="blog-head-description">
                      It is our endeavour to keep our customer updated with the
                      current affairs of Indian economic system, be it related to
                      GST, or consumer rights.communication give you stress. Just
                      use BinBill!
                    </div>
                  </div>
                  <div className="row">
                    {renderHTML(blogImage)}
                  </div>
                  <div className="row">
                    {renderHTML(blogBody)}
                  </div>
                  <Link className="ui item know-more" to='/blog'>
                    Know More
                  </Link>
                </div>
              </div>
              <div className="social-carousel">
                <div className="container-fluid">
                  <div className="container">
                    <p className="title-main">
                      Our users love us!
                    </p>
                    <div className="main-border"/>
                  </div>
    
                  <div className='social-container'>
                    <SocialCarousel/>
                  </div>
                </div>
              </div>
              <div className="playstore-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-2"/>
                    <div className="col-md-4">
                      <div className="device-image">
                        <img src={androidImage} alt="Android Image"
                             className="android-image"/>
                        <img src={iphoneImage} alt="iPhone Image"
                             className="iphone-image"/>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <p className="title-main">
                        Download the BinBill App
                      </p>
                      <div className="main-border"/>
                      <span className="avail-android">
                        Never miss out on any bill, or let after sales communication give you stress. Just use BinBill!
                      </span>
                      <div className="playstore-badge">
                        <a href="http://play.google.com/store/apps/details?id=com.bin.binbillcustomer"><img
                            src={playstoreBadgeImage} alt="Play Store Badge"/> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          {/*<div className="contact-us-form-section">
                <div className="container">
                  <div className="row">
                    <div className="main-border"/>
                  </div>
                  <div className="row">
                    <p className="title-main">
                      We would love to hear from you
                    </p>
                  </div>
                  <div className="row">
                    <p className="section-main">
                      We are here to provide you more information, answer any
                      questions you may have and
                      create a
                      more effective solution to your needs. Get in touch!
                    </p>
                  </div>
                  <ContactUs style={{display: "none"}}/>
                </div>
              </div>*/}
        </div>
        <div className="container-fluid about">
          <div className="container">
            <div className="row about-item">
              <div className="col-md-6 text-center">
                <img
                  src="/static/images/group-29.svg"
                  className="about-image"
                />
              </div>
              <div className="col-md-6">
                <h3 className="title2">What is BinBill?</h3>
                <div className="main-border" />
                <div className="description2">
                  <p>
                    BinBill is an application to keeps all your bills, invoices
                    and documents at one place. BinBill app has helped
                    individuals ease out after sales and brand communication by
                    allowing them to communicate with brands for various
                    information and products. Product card enables the users to
                    stay updated with all the products relevant information like
                    date of manufacturing or purchase. The one of the most loved
                    features by the users is the eHome, a virtual safe for
                    securely storing bills and important documents.
                  </p>
                </div>
              </div>
            </div>
            <div className="row about-item">
              <div className="col-md-6 text-center about-item-2-image">
                <img
                  src="/static/images/group-33.png"
                  className="about-image"
                />
              </div>
              <div className="col-md-6 about-item-2-content">
                <h3 className="title2">Filling the Gap</h3>
                <div className="main-border" />
                <div className="description2">
                  <p>
									Now, you don’t have to search for bills, simply download the BinBill app, fill the gaps, connect with brands, get product info, timely reminders, and hassle-free after-sales services and access your bills anytime and anywhere.
                  </p>
                  <p>Where there is a bill, there is BinBill!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h3 className="orange-heading">Consumer Awareness</h3>
            <div className="main-border2" />
          </div>
          <div className="row">
            <p className="blog-head-description">
              It is our endeavour to keep our customer updated with the current
              affairs of Indian economic system, be it related to GST, or
              consumer rights.communication give you stress. Just use BinBill!
            </p>
          </div>
          {/* <div className="row">{this.renderBlogs()}</div> */}
          <div className="know-more-wrapper">
            <a className="know-more" href="/blog">
              Know More
            </a>
          </div>
        </div>
        <div className="container testimonials-carousel-heading">
          <h3 className="orange-heading">Our users love us!</h3>
          <div className="main-border2" />
        </div>
        <div className="testimonials-container">
          {/* {isOnBrowser &&	<Social />} */}
        </div>
        <div className="container-fluid playstore-section">
          <div
            className="playstore-section-bg"
            style={{
              backgroundImage: `url('/static/images/app-download-back.svg')`
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-md-5 text-center">
                <div className="device-images-container">
                  <img
                    src="/static/images/i-phone-7-mockup@3x.png"
                    alt="iPhone Image"
                    className="device-image iphone-image"
                  />
                  <img
                    src="/static/images/google-pixel-really-blue@3x.png"
                    alt="Android Image"
                    className="device-image android-image"
                  />
                </div>
              </div>
              <div className="col-md-7 download-app-details">
                <p className="title2 title2-small download-app-heading">
                  Download the BinBill App
                </p>
                <div className="main-border" />
                <span className="download-app-desc">
                  Never miss out on any bill, or let after sales communication
                  give you stress. Just use BinBill!
                </span>
                <div className="playstore-badge">
                  <a href="http://play.google.com/store/apps/details?id=com.bin.binbillcustomer">
                    <img
                      src="/static/images/playstore-badge.png"
                      alt="Play Store Badge"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .image {
              margin-top: 50px;
            }

            .title {
              font-family: Quicksand;
              font-size: 24px;
              font-weight: bold;
              text-align: center;
              color: #ff732e;
            }

            .title2 {
              font-family: Quicksand;
              font-size: 48px;
              font-weight: bold;
              text-align: left;
              color: #ffffff;
              margin-bottom: 10px;
            }

            .title2-small {
              font-size: 36px;
            }

            .description {
              font-family: Quicksand;
              font-size: 18px;
              color: #4a4a4a;
              margin-top: 15px;
            }

            .description2 {
              font-family: OpenSans;
              font-size: 16px;
              line-height: 1.71;
              text-align: left;
              color: #ffffff;
              margin-top: 10px;
            }

            .content {
              margin-top: 35px;
              padding-bottom: 20px;
            }

            .about {
              background: url("/static/images/group-48.svg") no-repeat;
              background-size: cover;
              margin-bottom: 90px;
              margin-top: 50px;
            }

            .about-item {
              overflow: hidden;
              margin-bottom: 50px;
              padding: 40px 0;
            }

            .about-image {
              width: 100%;
              max-width: 400px;
              padding: 20px;
            }

            .about-item-2-image {
              float: right;
            }

            .about-item-2-content {
              float: left;
            }

            .main-border {
              width: 79px;
              height: 5px;
              border-radius: 2.5px;
              background-color: #ffffff;
              margin-bottom: 30px;
            }

            .main-border2 {
              width: 47px;
              height: 5px;
              border-radius: 2.5px;
              margin-top: 5px;
              background-image: linear-gradient(266deg, #ff802e, #ff652e);
            }

            .orange-heading {
              font-family: Quicksand;
              font-size: 36px;
              font-weight: bold;
              text-align: left;
              color: #ff732e;
              margin: 0;
            }

            .blog-head-description {
              /* width: 1163px; */
              font-family: Quicksand;
              font-size: 14px;
              font-weight: 500;
              text-align: left;
              color: #4a4a4a;
              margin: 20px auto 35px !important;
            }

            .dashboard-blog-item {
              display: block;
              margin-bottom: 35px;
            }

            .dashboard-blog-image {
              width: 100%;
              height: 230px;
              overflow: hidden;
              background-repeat: no-repeat;
              background-size: cover;
            }

            .dashboard-blog-title {
              margin-top: 10px;
              font-family: Quicksand;
              font-size: 20px;
              font-weight: bold;
              text-align: left;
              color: #4a4a4a;
              height: 50px;
              overflow: hidden;
            }

            .know-more-wrapper {
              text-align: right;
            }

            .know-more {
              display: inline-block;
              padding: 10px 35px;
              width: 170px;
              border-radius: 26px;
              background-image: -webkit-linear-gradient(
                190deg,
                #ff802e,
                #ff652e
              );
              background-image: -o-linear-gradient(190deg, #ff802e, #ff652e);
              background-image: linear-gradient(260deg, #ff802e, #ff652e);
              font-family: Quicksand, sans-serif;
              font-size: 16px;
              font-weight: 500;
              text-align: center;
              color: #ffffff;
              text-decoration: none;
            }

            .know-more:hover {
              background-image: linear-gradient(260deg, #ff652e, #ff802e);
              color: #ffffff;
            }

            .testimonials-carousel-heading {
              margin-top: 60px;
            }

            .testimonials-container {
              margin: 30px 0;
            }

            .playstore-section {
              position: relative;
              padding-bottom: 30px;
            }

            .device-images-container {
              display: inline-block;
              position: relative;
              height: 560px;
              max-width: 360px;
              width: 100%;
            }

            .device-image {
              position: absolute;
              bottom: 0;
            }

            .iphone-image {
              right: 0;
              width: 48%;
            }

            .android-image {
              left: 0;
              width: 58%;
            }

            .playstore-section-bg {
              background-repeat: no-repeat;
              position: absolute;
              bottom: 0;
              width: 100%;
              left: 0;
              height: 450px;
            }

            .playstore-badge {
              width: 280px;
              margin-top: 20px;
            }

            .playstore-badge img {
              width: 100%;
            }
            .download-app-details {
              margin-top: 200px;
            }
            .download-app-desc {
              color: #fff;
              font-size: 20px;
            }
            @media only screen and (max-width: 768px) {
              /* For mobile phones: */
              .about {
                background: url("/static/images/group-34.svg") no-repeat;
                background-size: 100% 100%;
              }
              .about-image {
                margin-bottom: 45px;
              }
              .title2 {
                font-size: 25px;
                text-align: center;
              }
              .main-border {
                width: 47px;
                height: 3px;
                border-radius: 2.5px;
                background-color: #ffffff;
                margin-top: 10px;
                top: 50%;
                left: 50%;
                transform: translate(-50%);
                position: relative;
              }
              .description2 {
                width: 100%;
                max-width: 320px;
                font-size: 16px;
                margin: 20px auto 50px;
                text-align: center;
              }
              .main-border2 {
                margin: 10px auto;
              }
              .about-item-2-image {
                float: none;
              }
              .about-item-2-content {
                float: none;
              }
              .orange-heading {
                font-size: 20px;
                text-align: center;
              }
              .blog-head-description {
                text-align: center;
              }
              .know-more-wrapper {
                text-align: center;
              }
              .playstore-section-bg {
                height: 450px;
              }
              .download-app-details {
                margin-top: 50px !important;
                text-align: center;
              }
              .playstore-badge {
                margin: auto;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
export default Main;
