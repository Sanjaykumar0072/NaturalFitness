import React from "react";
import Slider from 'react-slick';
import Header from "../reusable-components/header";
import Footer from "../reusable-components/footer";
import Testimonial from "../reusable-components/testimonial";

export default function About() {

    var settings = {
        lazyLoad: 'ondemand',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <>
            <Header />
            <main className="about">
                <div className="section-banner section section1" id="section1">
                    <div className="container">
                        <div className="row center-xs center-sm">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="sec1-left-content abt-banner-left">
                                    <h1 className="gradient-text">Perfect Workout</h1>
                                    <span>Home About</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="section section2" id="section2">
                    <div className="container">
                        <div className="row sec2-row-1">
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                <div className="sec2-right-column">
                                    <div className="sec2-img-bc left"><img src="/public/images/about-sec2-img1.png" alt="sec2Img1" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                                <div className="sec2-left-column">
                                    <span className="gradient-text">WHO WE ARE</span>
                                    <h1 className="gradient-text">WELCOME TO Fitness name</h1>
                                    <p>This also meant we needed to provide a learning environment run by
                                        experienced and successful coaches. However, our most important goal
                                        was to create a welcoming atmosphere and community in which
                                        everyone feels a sense of belonging.
                                    </p>
                                    <div className="abt-box">
                                        <h4>PROFESSIONAL TRAINER</h4>
                                        <p>Duis bonorum theophrastus ad sea. In tation ea affert sadipscing soluta
                                            usu, et eos legimus expetenda consectetuer, nec ad tation doctus.
                                        </p>
                                    </div>
                                    <div className="abt-box">
                                        <h4>MULTIPLE CLASSES</h4>
                                        <p>Duis bonorum theophrastus ad sea. In tation ea affert sadipscing soluta
                                            usu, et eos legimus expetenda consectetuer, nec ad tation doctus.
                                        </p>
                                    </div>
                                    <div className="abt-box">
                                        <h4>EQUIPMENT</h4>
                                        <p>Duis bonorum theophrastus ad sea. In tation ea affert sadipscing soluta
                                            usu, et eos legimus expetenda consectetuer, nec ad tation doctus.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row center-xs sec2-row3">
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <h1>10</h1>
                                <p>Training Programs</p>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <h1>22</h1>
                                <p>Expert Trainer</p>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <h1>87</h1>
                                <p>Total Branch</p>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-3">
                                <h1>650+</h1>
                                <p>Happy Clinets</p>
                            </div>
                        </div>
                        <div className="row sec2-row-2">
                            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                                <div className="sec2-left-column">
                                    <span className="gradient-text">WHO WE ARE</span>
                                    <h1 className="gradient-text">WE CAN GIVE YOU MORE THAN OTHERS</h1>
                                    <p>This also meant we needed to provide a learning environment run by
                                        experienced and successful coaches. However, our most important goal
                                        was to create a welcoming atmosphere and community in which
                                        everyone feels a sense of belonging.This also meant we needed to provide a
                                        learning environment run by experienced and successful coaches.
                                        However, our most important goal was to create a welcoming
                                        atmosphere and community in which  everyone feels a sense of belonging.
                                    </p>
                                    <div className="sec2-img-btn"><button className="gradient-button">FREE CONSULTATION</button></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                <div className="sec2-right-column">
                                    <div className="sec2-img-bc"><img src="/public/images/about-sec2-img2.png" alt="sec2Img1" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section3" id="section3">
                    <div className="container">
                        <div className="row">
                            <h1 className="gradient-text center">OUR GALLERY</h1>
                            <div className="img-flex-group">
                                <img  src="/public/images/abt-gallery-1.png" alt="abt-gallery-1" />
                                <img src="/public/images/abt-gallery-2.png" alt="abt-gallery-2" />
                                <img src="/public/images/abt-gallery-3.png" alt="abt-gallery-3" />
                                <img src="/public/images/abt-gallery-4.png" alt="abt-gallery-4" />
                                <img src="/public/images/abt-gallery-5.png" alt="abt-gallery-5" />
                                <img src="/public/images/abt-gallery-6.png" alt="abt-gallery-6" />
                                <img src="/public/images/abt-gallery-7.png" alt="abt-gallery-7" />
                                <img src="/public/images/abt-gallery-8.png" alt="abt-gallery-8" />
                            </div>

                        </div>
                    </div>
                </div>
                <Testimonial />
            </main>
            <Footer />
        </>
    )
}