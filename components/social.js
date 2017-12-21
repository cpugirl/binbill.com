import React, { Component } from "react";
import Slider from "react-slick";

const testimonials = [
    {
        id: 1,
        image: `static/images/Pulkit agarwal.jpg`,
        text: `Although I still manage my bills in a file and folder manner, I
    have started my transition to digitise my bill management process.
    BinBill has played a significant role in it, and has amazing
    features. I can easily categorise my bills under various
    categories, access them anywhere for reference, and even I have
    got my Aadhaar card stored in it.`,
        author: `Pulkit, Faridabad`
    },
    {
        id: 2,
        image: `/static/images/Shivam Tiwari.jpg`,
        text: `I have to travel a lot on behalf of my organisation, and before
    BinBill, submitting bills for reimbursement was a big hassle.
    Everytime I use to be back, I had a separate file for bills. With
    BinBill, it has been eased to an extent where I can manage my
    bills at just a click.`,
        author: `Shivam, Gurugram`
    },
    {
        id: 3,
        image: `/static/images/Varun Singh.jpg`,
        text: `Managing bills was a big hassle before BinBill. I had to maintain
    a log of bills, manually categorise them, punch holes in them and
    then arrange them in a file. BinBill allows me to do everything
    digitally, now I don’t have to any of the above, BinBill takes
    care of it for me. I just need to click a picture, and upload it.`,
        author: `Sagar Sharma, Freelancer`
    },
    {
        id: 4,
        image: `/static/images/default_male.png`,
        text: `Until I was denied the warranty on a newly purchased Samsung
    phone, I didn’t realise the importance of a bill. I’m bad with
    managing my things, and was really out of idea how can I manage my
    bills. Before it turned into a nightmare for me, my friend
    introduced me to BinBill. Since then, managing bills have been
    easy.`,
        author: `Varun, Hyderabad`
    }
];
class SocialCarousel extends Component {
    render() {
        const settings = {
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
            responsive: [
                { breakpoint: 420, settings: { slidesToShow: 1 } },
                { breakpoint: 769, settings: { slidesToShow: 2 } },
                { breakpoint: 1024, settings: { slidesToShow: 3 } }
            ]
        };
        return (
            <Slider {...settings} className="main-gallery">
                {testimonials.map((testimonial,index) => (
                    <div key={index} className="testimonial-wrapper">
                        <div className="testimonial">
                            <div className="testimonial-inner">
                                <div
                                    className="testimonial-avatar"
                                    style={{ backgroundImage: `url("${testimonial.image}")` }}
                                />
                                <p className="testimonial-text">{testimonial.text}</p>
                                <p className="testimonial-author">{testimonial.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <style jsx>
            {
            `.testimonial-wrapper {
                padding: 10px;
              }
              .testimonial {
                margin: auto;
                max-width: 520px;
                height: 320px;
                position: relative;
                text-align: center;
                border-radius: 5px;
                background-image: linear-gradient(116deg, #3023ae, #c86dd7);
                box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.39);
                text-align: center;
                margin-top: 60px;
              }
              .testimonial-avatar {
                width: 115px;
                height: 115px;
                display: inline-block;
                background-color: #ff7c5a;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                border-radius: 60px;
                position: relative;
                top: -60px;
                border: 1px solid #3023ae;
              }
              
              .testimonial-text {
                position: relative;
                top: -30px;
                color: #fff;
                font-family: Quicksand;
                font-weight: 500;
                color: 14px;
                width: 100%;
                padding: 0 20px;
              }
              
              .testimonial-author {
                position: absolute;
                bottom: 40px;
                color: #fff;
                font-family: Quicksand;
                font-weight: 500;
                font-size: 18px;
                width: 100%;
                padding: 0 20px;
              }
              `
                    }
                </style>
            </Slider>
        );
    }
}

export default SocialCarousel;
