import React, { useState } from "react";
import Slider from 'react-slick';
import Header from '../reusable-components/header';
import Dropdown from "../reusable-components/dropdown";
import Footer from "../reusable-components/footer";
import Testimonial from "../reusable-components/testimonial";

export default function Home() {
    const [selectedData, setSelectedData] = useState({});

    const handleDropdownChange = (dropdownId, selectedItem) => {
        setSelectedData(prevData => ({
            ...prevData,
            [dropdownId]: selectedItem
        }));
    };

    const dropdowns = [
        {
            id: 1, data: [
                { id: 0, label: "Male" },
                { id: 1, label: "Female" },
                { id: 2, label: "Transgender" }
            ], placeholder: "Gender"
        },
        {
            id: 2, data: [
                { id: 0, label: "Walking" },
                { id: 1, label: "running" },
                { id: 2, label: "dancing" },
                { id: 3, label: "swimming" },
                { id: 4, label: "yoga" },
                { id: 5, label: "gardening" }
            ], placeholder: "Activity"
        }
    ];


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
            <main className="home">
                <div className="section section1 section-banner" id="section1">
                    <div className="container">
                        <div className="row center-xs start-sm">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="sec1-left-content">
                                    <h1 className="gradient-text">Perfect Workout</h1>
                                    <h1 className="stroke-text">For Your Body</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim reiciendis id sunt sequi, at quas quasi officiis obcaecati laborum, similique illum commodi temporibus dolores.</p>
                                    <button className="gradient-button">Lets Train</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-8 col-sm-6 col-md-6 col-lg-6">
                                <div className="sec1-card">
                                    <div className="card-img">
                                        <img src="/public/images/sec1-cardImg.png" alt="" />
                                    </div>
                                    <Slider {...settings} slidesToScroll={1}>
                                        <div>
                                            <div className="card-box">
                                                <h3>Health</h3>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card-box">
                                                <h3>Fitness</h3>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card-box">
                                                <h3>Workout</h3>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card-box">
                                                <h3>Walking</h3>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card-box">
                                                <h3>running</h3>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card-box">
                                                <h3>dancing</h3>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="card-box">
                                                <h3>yoga</h3>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="section section2" id="section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-7">
                                <div className="sec2-left-column">
                                    <span className="gradient-text">WHO WE ARE</span>
                                    <h1 className="gradient-text">Give a Shape</h1>
                                    <h1 className="stroke-text">Your Body</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reiciendis id aut doloribus voluptates officia quidem temporibus? Reiciendis quos voluptates eos quod omnis dolorum molestias consequatur soluta cum! Sequi, odit!</p>
                                    <div className="sec2-card">
                                        <div className="card-box">
                                            <div className="img"><img src="/public/svg/sec2-card-glove.svg" alt="glove" /></div>
                                            <div>
                                                <h3>FULL-BODY STRENGTH</h3>
                                                <p>Train with the best experts in bodybuilding field.</p>
                                            </div>
                                        </div>
                                        <div className="card-box">
                                            <div className="img"><img src="/public/svg/sec2-card-bike.svg" alt="bike" /></div>
                                            <div>
                                                <h3>LEAN MACHINES</h3>
                                                <p>Train with the best experts in bodybuilding field.</p>
                                            </div>
                                        </div>
                                        <div className="card-box">
                                            <div className="img"><img src="/public/svg/sec2-card-strength.svg" alt="strength" /></div>
                                            <div>
                                                <h3>TRAIN BOXING</h3>
                                                <p>Train with the best experts in bodybuilding field. Train with the best experts in bodybuilding field.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                                <div className="sec2-right-column">
                                    <div className="sec2-img-bc"><img src="/public/images/sec2-img1.png" alt="sec2Img1" /></div>
                                    <div className="sec2-img-btn"><button className="gradient-button">FREE CONSULTATION</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="row sec2-row2">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                                <div className="sec2-right-column flex-start">
                                    <div className="sec2-img-bc"><img src="/public/images/sec2-img2.png" alt="sec2Img1" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-7">
                                <div className="sec2-left-column">
                                    <span className="gradient-text">WHY CHOOSE US</span>
                                    <h1 className="stroke-text">WE ALWAYS PROVIDE</h1>
                                    <h1 className="gradient-text">BEST FITNESS SERVICE FOR 25 YEARS</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat consequuntur sunt nam, nobis quidem quibusdam, aspernatur suscipit consequatur aut architecto ex eos illum molestiae molestias perspiciatis inventore. Iste illum dolores sapiente, unde sequi cupiditate repellendus blanditiis distinctio a id.</p>

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
                    </div>
                </div>
                <div className="section section3" id="section3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <span className="gradient-text">FIND YOUR EXPERIENCE</span>
                                <div className="grad-stroke-font">
                                    <h1 className="gradient-text">NEW EXCLUSIVE</h1>
                                    <h1 className="stroke-text">WORKOUTS</h1>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <Slider {...settings}>
                                    <div>
                                        <div className="workout">
                                            <div className="sec2-img-bc"><img src="/public/images/sec3-sl-img-1.png" alt="sec2Img1" /></div>
                                            <h1 className="stroke-text">01</h1>
                                            <h2>CARDIO TRAINING</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <h1 className="stroke-text">02</h1>
                                            <h2>BODY BUILDING</h2>
                                            <img src="/public/images/sec3-sl-img-2.png" alt="sec2Img1" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <img src="/public/images/sec3-sl-img-3.png" alt="sec2Img1" />
                                            <h1 className="stroke-text">03</h1>
                                            <h2>BOXING COURSE</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                        <div className="sec2-img-bc"><img src="/public/images/sec3-sl-img-1.png" alt="sec2Img1" /></ div>
                                            <h1 className="stroke-text">04</h1>
                                            <h2>FITNESS CLASS</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <h1 className="stroke-text">05</h1>
                                            <h2>PHYSOCOLOGY</h2>
                                            <img src="/public/images/sec3-sl-img-2.png" alt="sec2Img1" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <img src="/public/images/sec3-sl-img-3.png" alt="sec2Img1" />
                                            <h1 className="stroke-text">06</h1>
                                            <h2>BOXING COURSE</h2>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section4" id="section4">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="sec4-left-column">
                                    <span className="gradient-text">OUR SERVICES</span>
                                    <div className="grad-stroke-font flex-center">
                                        <h1 className="stroke-text">TEAM OF</h1>
                                        <h1 className="gradient-text">NATURAL FITNEZZ</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="services">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-3 col-md-3">
                                            <div className="service-box">
                                                <div className="sec2-img-bc"><img src="/public/images/service-img-1.png" alt="service-img-1" /></div>
                                                <h1>INDOOR</h1>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-3 col-md-3">
                                            <div className="service-box">
                                                <img src="/public/images/service-img-2.png" alt="service-img-2" />
                                                <h1>OUTDOOR</h1>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-3 col-md-3">
                                            <div className="service-box">
                                                <img src="/public/images/service-img-3.png" alt="service-img-3" />
                                                <h1>ONLINE</h1>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-3 col-md-3">
                                            <div className="service-box">
                                                <img src="/public/images/service-img-4.png" alt="service-img-4" />
                                                <h1>OFFLINE</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section5" id="section5">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="sec5-left-column">
                                    <span className="gradient-text">BMI CALCULATOR</span>
                                    <div className="grad-stroke-font flex-center">
                                        <h1 className="stroke-text">CALCULATE YOUR</h1>
                                        <h1 className="gradient-text">IDEAL WEIGHT</h1>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam impedit voluptatibus non temporibus ea possimus nemo eveniet excepturi totam in?</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <input type='number' placeholder="Height/Cm" min="0" max="999" pattern="[0-9]*" maxLength="3" />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <input type='number' placeholder="Weight/Kg" />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <input type='number' placeholder="Age" />
                                        </div>
                                    </div>
                                    {dropdowns.map((dropdown) => (
                                        <div className="col-xs-6 col-sm-4 col-md-4">
                                            <div className="calculate-box">
                                                <Dropdown
                                                    key={dropdown.id}
                                                    data={dropdown.data}
                                                    placeholder={dropdown.placeholder}
                                                    onSelectChange={(selectedItem) => handleDropdownChange(dropdown.id, selectedItem)}
                                                />
                                                <p>Selected Data: {selectedData[dropdown.id] ? selectedData[dropdown.id].label : "None"}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-xs-6 col-sm-4 col-md-4">
                                        <div className="calculate-box">
                                            <button className="gradient-button">CALCULATE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section6" id="section6">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="sec6-left-column">
                                    <span className="gradient-text">SOMETHING ABOUT US</span>
                                    <div className="grad-stroke-font flex-center">
                                        <h1 className="stroke-text">OUR</h1>
                                        <h1 className="gradient-text">ACHIEVEMENTS</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="service-box">
                                            <div className="sec2-img-bc"><img src="/public/images/ach-img-1.png" alt="ach-img-1" /></div>
                                            <h2>HOW TO KEEP YOUR BODY HEALTHY IN OVER THE FESTIVAL</h2>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="service-box sb-2">
                                            <div className="sec2-img-bc" style={{ marginBottom: '2rem' }}><img src="/public/images/ach-img-2.png" alt="ach-img-2" /></div>
                                            <h2>BOOST YOUR FITNESS</h2>
                                        </div>
                                        <div className="service-box">
                                            <div className="sec2-img-bc"><img src="/public/images/ach-img-3.png" alt="ach-img-3" /></div>
                                            <h2>HOW TO BUILD YOUR BODY</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <button className="gradient-button">View All</button>
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