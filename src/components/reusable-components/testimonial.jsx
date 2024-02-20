import React from "react";
import Slider from 'react-slick';

export default function Testimonial() {
    var settings = {
        lazyLoad: 'ondemand',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
            <div className="section testmonial" id="testmonial">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-6">
                            <div className="sec2-img-bc"><img src="/public/images/testimonial-img-1.png" alt="testimonial-img-1" /></div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-7 col-lg-6">
                            <div className="sec6-left-column">
                                <span className="gradient-text">TESTIMONIAL</span>
                                <div className="grad-stroke-font flex-center">
                                    <h1 className="stroke-text">WHAT OUR</h1>
                                    <h1 className="gradient-text">CLIENTS SAY</h1>
                                </div>
                            </div>
                            <Slider {...settings}>
                                <div>
                                    <div className="feedback">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, optio ullam? Sed libero adipisci vitae eos fugit. Aliquam, nihil consequuntur!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet ab impedit cupiditate. Dolores nulla natus quod esse praesentium provident.</p>
                                        <h3><span>Rose</span> - Paris</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="feedback">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nobis?</p>
                                        <h3><span>Jack</span> - Paris</h3>
                                    </div>
                                </div>
                                <div>
                                    <div className="feedback">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem assumenda inventore non obcaecati eaque, suscipit perferendis quisquam, id ex fugit rem minus facilis <quidem className="lorem15"></quidem></p>
                                        <h3><span>John</span> - Italy</h3>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}