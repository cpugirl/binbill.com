import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Collapsible from "react-collapsible";
class Faq extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="container">
          <div className="content-header">
            <div className="row">
              <p className="title-main">FAQ's</p>
            </div>
            <div className="row">
              <div className="main-border left" />
            </div>
            <div className="row">
              <div className="col-md-12 test">
                <Collapsible trigger="What is BinBill?">
                  <p>
                    BinBill is an application that manages your bills, analyzing
                    expense and one can avail after-sales benefits at one place.
                    It converts your ordinary bills into smart bills and stores
                    them safely in the eHome virtual home.
                  </p>
                </Collapsible>
                <Collapsible trigger="Who can all use BinBill?">
                  <p>
                    It is everyone and especially for those who cannot manage
                    their expenses and bills. It declutters individual’s lives
                    around bills and documents. It's for all and for free.
                  </p>
                </Collapsible>
                <Collapsible trigger="What is eHome and how do I create it?">
                  <p>
                    eHome is a virtual home in the BinBill account, where all
                    your bills and documents are stored under clearly defined
                    categories of Electricals and Electronics, Automobiles,
                    Furniture Fittings and Utensils, Fashion and Fashion
                    Accessories, Healthcare and Medical, Household Expenses,
                    Travel and Dine out, and Services. Under the Personal
                    Catalogue, you can store any other important document
                    besides bills.
                  </p>
                </Collapsible>
                <Collapsible trigger="What all can I upload in BinBill?">
                  <p>
                    You can upload as per your convenience, there is no
                    restriction. Any type of a bill or a document can be
                    uploaded at BinBill, which can be useful for future
                    communication or expense tracking. The more you upload, the
                    more value we add to your eHome.
                  </p>
                </Collapsible>
                <Collapsible trigger="How do I upload a bill?">
                  <p>
                    Launch the application on your phone and tap on the Upload
                    Doc button. Using the scanner through our application, fit
                    the bill/document being scanned in the edges as marked on
                    the screen and tap on the camera button. Alternately, you
                    can upload the bills or documents directly from your phone
                    gallery or on the website. Just click on "upload" tab in the
                    App or log into www.binbill.com. For the best experience, we
                    suggest using our Mobile App.
                  </p>
                </Collapsible>
                <Collapsible trigger="How does BinBill add value to my bills?">
                  <p>
                    BinBill not only captures important details in the bill like
                    product information, manufacturer’s details, the amount
                    spent etc., but also integrates relevant information from
                    its existing database such as authorized service centres,
                    customer care details, warranty information etc. This way
                    BinBill converts ordinary bills into smart bills and sort
                    out the bills for the users, based on the categories. The
                    users can search, download, and share bills and bill’s
                    information. For example, it notifies the users about the
                    vehicle pollution checkup or an upcoming vehicle service.{" "}
                  </p>
                </Collapsible>
                <Collapsible trigger="How does BinBill help me in after sales service?">
                  <p>
                  BinBill helps you with all the manufacturer’s details and authorized service centre of your product, which will help you in getting things sorted.
                  </p>
                </Collapsible>
                <Collapsible trigger="Is uploading the documents to BinBill secure?">
                  <p>
                  Yes, all your bills/documents are safe and secure.
                  </p>
                </Collapsible>
                <Collapsible trigger="For, how long do my bills stay in the BinBill?">
                  <p>
                  For as long as you wish, your bills will be available in your BinBill Account.
                  </p>
                </Collapsible>
                <Collapsible trigger="How do I find stored bills on BinBill?">
                  <p>
                  Use the search bar in the app or web, type the name of seller or products and you will be directed to the page to locate the bill. If still cannot find sorted bills, feel free to write us at support@binbill.com
                  </p>
                </Collapsible>
                <Collapsible trigger="I’m new to BinBill, how do I start my journey?">
                  <p>
                  The first step is to register your own e-Home, which is free of cost. Start uploading bills or documents and leave rest to us for creating your beautiful eHome.
                  </p>
                </Collapsible>
                <Collapsible trigger="Can I save bills to my phone, from BinBill?">
                  <p>
                  We have made sure, that life of our users is easy and hassle-free. The users can download the bills directly to their phones, anytime.
                  </p>
                </Collapsible>
                <Collapsible trigger="Can I access BinBill through my Desktop/Laptop?">
                  <p>
                  Yes. Visit our website www.binbill.com.
                  </p>
                </Collapsible>
                <Collapsible trigger="Do I need to pay anything to enjoy these services?">
                  <p>
                  We are absolutely free.
                  </p>
                </Collapsible>
                
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />
        <style jsx global>
          {`
            .test {
              border: 1px solid #ececec !important;
              border-radius: 3px;
              padding-right: 0px;
              padding-left: 0px;
            }
            .Collapsible {
              background:white;
              border: 1px solid #ececec !important;
            }
            .Collapsible .Collapsible__trigger {
              height: auto;
              font-family: Quicksand, sans-serif !important;
              font-size: 2rem !important;
              font-weight: 500;
              text-align: left;
              opacity: 0.6;
              line-height: 2;
              color: #3b3b3b !important;
              background-color: #fff !important;
              padding-left: 15px;
            }
            .Collapsible__contentInner {
              background-color: #f7f7f7;
              padding-left: 15px;
              border: solid 1px #e6e6e6;
              font-size: 1.6rem !important;
              line-height: 1.39;
              letter-spacing: 0.3px;
              font-family: Quicksand, sans-serif !important;
              font-weight: 500;
              text-align: left;
              color: #3b3b3b !important;
            }
          `}
        </style>
        <style jsx>
          {`
            .Collapsible .Collapsible__trigger .is-open {
              background-color: red !important;
            }
            .title-main {
              font-family: Quicksand, serif;
              font-size: 2.875rem;
              font-weight: 500;
              color: #ff732e;
            }
            .implementation {
            }
            .faqs {
              padding: 100px 10px;
            }

            .faqs p {
              margin: 0 auto;
            }

            .faqs .row {
              margin: 0 auto;
            }

            .faqs .ui.styled.accordion .title {
              height: auto;
              font-family: Quicksand, sans-serif !important;
              font-size: 1.5rem !important;
              font-weight: 500;
              text-align: left;
              opacity: 0.6;
              color: #3b3b3b !important;
              background-color: #ffffff !important;
              border: solid 1px #ececec !important;
            }

            .faqs .ui.styled.accordion .title:hover {
              opacity: 0.9;
            }

            .faqs .ui.styled.accordion .active.title {
              font-family: Quicksand, sans-serif !important;
              font-size: 1.5rem !important;
              font-weight: 500;
              text-align: left;
              opacity: 1;
              color: #3b3b3b !important;
              background-color: #ffffff !important;
              border: solid 1px #ececec !important;
            }

            .faqs .ui.styled.accordion .content {
              background-color: #f8f8f8;
              border: solid 1px #e6e6e6;
              font-family: Quicksand, sans-serif !important;
              font-size: 1.125rem !important;
              font-weight: 500;
              line-height: 1.39;
              letter-spacing: 0.3px;
              text-align: left;
              color: #3b3b3b !important;
            }

            .content-header .main-border {
              width: 100px;
              height: 5px;
              background-color: #ff732e;
              border: solid #ff732e;
              margin-bottom: 20px;
            }
            .content-section {
              padding: 0px;
            }
            @media only screen and (max-width: 768px) {
              .content {
                float: none;
              }
              .faqs .ui.styled.accordion .content {
                padding-left: 30px;
                /* margin-left: 25px; */
              }
              .faqs .ui.styled.accordion .title {
                line-height: 1.2;
                /* margin-left: 25px; */
                padding-left: 30px;
              }

              .faqs .ui.styled.accordion .title i {
                line-height: 1.2;
                margin-left: -25px;
                padding-left: 10px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
export default Faq;
