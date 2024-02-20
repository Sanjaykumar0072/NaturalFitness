import React, { Component } from "react";
import Header from "../reusable-components/header";
import Footer from "../reusable-components/footer";
import GoogleMap from "../reusable-components/googleMap";

// const streetViewConfig = {
//     type: 'street',
//     mapOptions: {
//         position: {
//             lat: 41.8916,
//             lng: -87.6079
//         },
//         pov: {
//             heading: 200,
//             pitch: 0
//         },
//         scrollwheel: false
//     }
// };

const mapViewConfig = {
    mapOptions: {
        center: {
            lat: 13.084,
            lng: 80.245,
        },
        zoom: 13,
        streetViewControl: true,
        scrollwheel: true
    },
    type: 'map',
    allowClusters: false,
    locations: [
        {
            lat: 13.084,
            lng: 80.195,
            infoWindowContent: {
                title: 'Blocksera Technologies',
                text: 'The new Willis Tower will provide one of the most compelling and dynamic work, dining, shopping and entertainment environments available in any city.',
                imgUrl: 'http://static.thousandwonders.net/Willis.Tower.original.1014.jpg'
            }
        }
    ]
};

class Contact extends Component {
    constructor(props) {
        super(props);

        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];

        this.state = {
            loading: false
        };
    }

    // componentDidMount() {
    //     emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
    // }

    doSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting by default

        // let userCaptcha = document.getElementById('user_captcha_input').value;
        const inputsFilled = this.inputRefs.slice(0, 3).every(ref => ref.current.value.trim() !== '');

        // if (validateCaptcha(userCaptcha) && inputsFilled) {
        if (inputsFilled) {
            this.handleSubmit();
        } else {
            failedToaster();
        }
    };


    handleSubmit = async (e) => {
        // Prevent form submission if it's triggered by an event
        if (e) {
            e.preventDefault();
        }

        const serviceId = import.meta.env.VITE_SERVICEID;
        const templateId = import.meta.env.VITE_TEMPLATEID;

        try {
            this.setState({ loading: true });

            await emailjs.send(serviceId, templateId, {
                from_name: this.inputRefs[0].current.value,
                from_email: this.inputRefs[1].current.value,
                from_number: this.inputRefs[2].current.value,
                from_message: this.inputRefs[3].current.value
            });

            // Clear the input fields
            this.inputRefs.forEach(ref => ref.current.value = '');

            // document.getElementById('user_captcha_input').value = '';

            // loadCaptchaEnginge(6);
            successToaster();
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                <Header />
                <main className="contact">
                    <div className="section-banner section section1" id="section1">
                        <div className="container">
                            <div className="row center-xs center-sm">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="sec1-left-content abt-banner-left">
                                        <h1 className="gradient-text">CONTACT US</h1>
                                        <span>Home Contact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="section2 section" id="section2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 colmd-12 col-lg-12">
                                    <div className="contact-form">
                                        <aside>
                                            <h1 className="gradient-text">GET IN TOUCH</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eos ipsa blanditiis ea delectus dolores?</p>
                                            <ul>
                                                <li>
                                                    <strong>adress</strong>
                                                    <p>chennai, TamilNadu, India</p>
                                                </li>
                                                <li>
                                                    <strong>Mobile</strong>
                                                    <p>+91 0000 000 000</p>
                                                    <p>+91 0000 000 000</p>
                                                </li>
                                                <li>
                                                    <strong>schedule</strong>
                                                    <p>Mon - Sat 9.00 - 21.00</p>
                                                    <p>Sun 10.00 - 17.00</p>
                                                </li>
                                                <li>
                                                    <strong>schedule</strong>
                                                    <div className="socialIcons">
                                                        <img src="/public/svg/fb.svg" alt="fb" />
                                                        <img src="/public/svg/x.svg" alt="x" />
                                                        <img src="/public/svg/instagram.svg" alt="instagram" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </aside>
                                        <form>
                                            <h1 className="gradient-text">Enquiry Form</h1>
                                            <input ref={this.inputRefs[0]} type="text" placeholder="Name" name="name" size="30" required />
                                            <input ref={this.inputRefs[1]} type="email" placeholder="name@mail.com" name="email" size="30" required />
                                            <input ref={this.inputRefs[2]} type="number" placeholder="+91 0000 000 000" name="number" required />
                                            <textarea ref={this.inputRefs[3]} name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                                            <button
                                                className={`btn ${loading ? 'loading' : ''}`}
                                                disabled={loading}
                                                onClick={(e) => this.doSubmit(e)}
                                            >
                                                {loading ? 'Please Wait..' : 'Send Message'}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section section3" id="section3" >
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 colmd-12 col-lg-12">
                                    <div className="google-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282463.9019412266!2d79.91599416228338!3d13.04724152222191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e239e3034f%3A0x6536308a813a6dd2!2sBlocksera%20Technologies!5e0!3m2!1sen!2sin!4v1708417108987!5m2!1sen!2sin" width="600" height="450" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 colmd-12 col-lg-12">
                                    <div className="google-map">
                                        <div className="flexbox">
                                            <div className="map-container u-vr">
                                                <GoogleMap config={mapViewConfig} />
                                            </div>
                                            {/* <div className="map-container">
                                                <GoogleMap config={streetViewConfig} />
                                            </div> */}
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
}

export default Contact;