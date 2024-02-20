import React, { useState } from "react";
import Header from "../reusable-components/header";
import Footer from "../reusable-components/footer";
import Dropdown from "../reusable-components/dropdown";

export default function Services() {
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
    return (
        <>
            <Header />
            <main className="services">
                <div className="section section1 section-banner" id="section1">
                    <div className="container">
                        <div className="row center-xs center-sm">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="sec1-left-content abt-banner-left">
                                    <h1 className="gradient-text">Perfect Workout</h1>
                                    <span>Home Services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="section section3" id="section3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <span className="gradient-text">FIND YOUR EXPERIENCE</span>
                                <div className="grad-stroke-font"><h1 className="gradient-text">NEW EXCLUSIVE</h1>
                                    <h1 className="stroke-text">WORKOUTS</h1></div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="workouts">
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
                                            <h1 className="stroke-text">04</h1>
                                            <h2>SELF DEFENCE</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <img src="/public/images/sec3-sl-img-1.png" alt="sec2Img1" />
                                            <h1 className="stroke-text">05</h1>
                                            <h2>FITNESS CLASS</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <h1 className="stroke-text">06</h1>
                                            <h2>PHYSOCOLOGY</h2>
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
                                    <span className="gradient-text small-title">BMI CALCULATOR</span>
                                    <div className="grad-stroke-font flex-center">
                                        <h1 className="stroke-text">CALCULATE</h1>
                                        <h1 className="gradient-text">YOUR IDEAL WEIGHT</h1>
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
                <div className="section section4" id="section4">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <span className="gradient-text">TIPS AND TRICKS</span>
                                <h1 className="gradient-text">HOW TO ACHIEVE YOUR GOALS</h1>

                                <div className="services-flex-group">
                                    <div className="services-img">
                                        <img src="/public/images/services-sec3-img1.png" alt="" />
                                        <h3>SELECT GOALS</h3>
                                        <p>Duis bonorum theophrastus ad sea.
                                            In tation ea affert sadipscing soluta
                                            usu, et eos legimus expetenda.
                                        </p>
                                    </div>
                                    <div className="services-img">
                                        <img src="/public/images/services-sec3-img2.png" alt="" />
                                        <h3>TRAINING PLAN</h3>
                                        <p>Duis bonorum theophrastus ad sea.
                                            In tation ea affert sadipscing soluta
                                            usu, et eos legimus expetenda.
                                        </p>
                                    </div>
                                    <div className="services-img">
                                        <img src="/public/images/services-sec3-img3.png" alt="" />
                                        <h3>HARD WORKING</h3>
                                        <p>Duis bonorum theophrastus ad sea.
                                            In tation ea affert sadipscing soluta
                                            usu, et eos legimus expetenda.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}