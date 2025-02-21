import React, { Component } from "react";
import Header from "../reusable-components/header";
import Footer from "../reusable-components/footer";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const failedToaster = () => toast.error('Required field is empty');
const successToaster = () => toast.success("Thanks for reaching out! We'll reply soon.🔥");
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

    componentDidMount() {
        emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
    }

    doSubmit = (e) => {
        e.preventDefault();

        const inputsFilled = this.inputRefs.slice(0, 3).every(ref => ref.current.value.trim() !== '');

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
                                            <p>Want to turn your fitness dreams into reality? Reach out, and let&rsquo;s craft your personalized path to strength and wellness together!</p>
                                            <ul>
                                                <li>
                                                    <strong>adress</strong>
                                                    <p><a rel="noreferrer" target='_blank' href="https://maps.app.goo.gl/HdzL66Jsp3WcNKNx7">SPR Sports Academy , Nolambur, Chennai.<br />(Near Phoenix Badminton Academy)</a></p>
                                                </li>
                                                <li>
                                                    <strong>Mobile</strong>
                                                    <p><a href="tel: +918667256186">+91 8667256186</a></p>
                                                </li>
                                                <li>
                                                    <strong>schedule</strong>
                                                    <p>Mon - Sat</p>
                                                    <p>Sun Holiday</p>
                                                </li>
                                                <li>
                                                    <strong>social media</strong>
                                                    <div className="socialIcons">
                                                        <a rel="noreferrer" target='_blank' href="https://www.facebook.com/naturalfitnezz.naturalfitnezz" className="icon fb">
                                                            {/* <img className="" src="/svg/fb.svg" alt="fb" /> */}
                                                            <svg width="25" height="25" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.889 0.485045H5.923C5.42986 0.457045 4.93644 0.53517 4.47607 0.714148C4.0157 0.893125 3.59908 1.16879 3.25434 1.52253C2.90961 1.87627 2.64478 2.29986 2.47773 2.76469C2.31068 3.22952 2.2453 3.72479 2.286 4.21705V5.93705H0.309C0.227048 5.93705 0.148452 5.9696 0.0905037 6.02755C0.032555 6.0855 0 6.16409 0 6.24605V8.73905C0 8.821 0.032555 8.89959 0.0905037 8.95754C0.148452 9.01549 0.227048 9.04805 0.309 9.04805H2.286V15.338C2.286 15.42 2.31856 15.4986 2.3765 15.5565C2.43445 15.6145 2.51305 15.647 2.595 15.647H5.174C5.25595 15.647 5.33455 15.6145 5.3925 15.5565C5.45044 15.4986 5.483 15.42 5.483 15.338V9.04905H7.795C7.83558 9.04905 7.87576 9.04105 7.91325 9.02552C7.95074 9.01 7.9848 8.98724 8.0135 8.95854C8.04219 8.92985 8.06495 8.89578 8.08048 8.85829C8.09601 8.8208 8.104 8.78062 8.104 8.74005V6.24705C8.104 6.20647 8.09601 6.16629 8.08048 6.1288C8.06495 6.09131 8.04219 6.05724 8.0135 6.02855C7.9848 5.99986 7.95074 5.97709 7.91325 5.96157C7.87576 5.94604 7.83558 5.93805 7.795 5.93805H5.484V4.47905C5.484 3.77905 5.651 3.42205 6.564 3.42205H7.889C7.97095 3.42205 8.04955 3.38949 8.1075 3.33154C8.16545 3.27359 8.198 3.195 8.198 3.11305V0.797045C8.1984 0.756215 8.1907 0.715711 8.17535 0.677874C8.16 0.640038 8.1373 0.605619 8.10856 0.576607C8.07983 0.547595 8.04563 0.524566 8.00795 0.50885C7.97026 0.493134 7.92983 0.485043 7.889 0.485045Z" fill="#009DEB" />
                                                            </svg>

                                                        </a>
                                                        <a rel="noreferrer" target='_blank' href="https://x.com/Natural_fitnezz/" className="icon x">
                                                            {/* <img className="" src="/svg/x.svg" alt="x" /> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25">
                                                                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" fill='#009DEB' />
                                                            </svg>

                                                        </a>
                                                        <a rel="noreferrer" target='_blank' href="https://www.instagram.com/natural_fitnezz_" className="icon instagram">
                                                            {/* <img className="" src="/svg/instagram.svg" alt="instagram" /> */}
                                                            <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.425 0.484863H4.738C3.48149 0.485128 2.27651 0.984394 1.38802 1.87288C0.499531 2.76137 0.000265115 3.96635 0 5.22286L0 10.9089C-2.79785e-08 12.1656 0.499149 13.3708 1.38767 14.2595C2.27619 15.1482 3.48131 15.6476 4.738 15.6479H10.424C11.6807 15.6476 12.8858 15.1482 13.7743 14.2595C14.6629 13.3708 15.162 12.1656 15.162 10.9089V5.22286C15.1617 3.96652 14.6626 2.7617 13.7743 1.87324C12.8861 0.984776 11.6813 0.485393 10.425 0.484863ZM13.742 10.9099C13.7409 11.7893 13.3911 12.6323 12.7693 13.2542C12.1475 13.876 11.3044 14.2258 10.425 14.2269H4.738C3.8586 14.2258 3.01552 13.876 2.3937 13.2542C1.77187 12.6323 1.42206 11.7893 1.421 10.9099V5.22286C1.42232 4.34364 1.77225 3.50082 2.39405 2.87921C3.01585 2.25759 3.85877 1.90792 4.738 1.90686H10.424C11.3034 1.90792 12.1465 2.25773 12.7683 2.87956C13.3901 3.50139 13.7399 4.34447 13.741 5.22386L13.742 10.9099Z" fill="#009DEB" />
                                                                <path d="M7.58202 4.27588C6.83223 4.27588 6.09927 4.49822 5.47584 4.91478C4.85242 5.33134 4.36652 5.9234 4.07959 6.61612C3.79266 7.30883 3.71758 8.07109 3.86386 8.80647C4.01014 9.54185 4.37119 10.2173 4.90137 10.7475C5.43155 11.2777 6.10704 11.6388 6.84242 11.785C7.5778 11.9313 8.34006 11.8562 9.03278 11.5693C9.72549 11.2824 10.3176 10.7965 10.7341 10.173C11.1507 9.54962 11.373 8.81667 11.373 8.06688C11.373 7.06144 10.9736 6.09718 10.2627 5.38623C9.55171 4.67528 8.58745 4.27588 7.58202 4.27588ZM7.58202 10.4359C7.11347 10.4359 6.65545 10.2969 6.26587 10.0366C5.87629 9.77633 5.57264 9.40633 5.39334 8.97345C5.21404 8.54057 5.16712 8.06425 5.25853 7.60471C5.34994 7.14516 5.57556 6.72305 5.90688 6.39174C6.23819 6.06043 6.6603 5.8348 7.11984 5.74339C7.57938 5.65198 8.05571 5.6989 8.48859 5.8782C8.92146 6.05751 9.29146 6.36115 9.55177 6.75073C9.81208 7.14031 9.95102 7.59834 9.95102 8.06688C9.94996 8.69485 9.70003 9.2968 9.25598 9.74084C8.81194 10.1849 8.20999 10.4348 7.58202 10.4359Z" fill="#009DEB" />
                                                                <path d="M11.6569 4.49584C11.9358 4.49584 12.1619 4.26974 12.1619 3.99084C12.1619 3.71194 11.9358 3.48584 11.6569 3.48584C11.378 3.48584 11.1519 3.71194 11.1519 3.99084C11.1519 4.26974 11.378 4.49584 11.6569 4.49584Z" fill="#009DEB" />
                                                            </svg>

                                                        </a>
                                                        <a rel="noreferrer" target='_blank' href="https://www.threads.net/@natural_fitnezz_" className="icon thread">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25" height="25">
                                                                <path
                                                                    d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"
                                                                    fill="#009DEB"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </aside>
                                        <form onSubmit={this.doSubmit} >
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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.381133705492!2d80.1691405!3d13.075014499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611ea62a0f5b%3A0xf577de79ad1f8acc!2sSPR%20SPORTS%20ACADEMY!5e0!3m2!1sen!2sin!4v1728997186189!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <Toaster
                                    toastOptions={{
                                        className: '',
                                        duration: 3000,
                                        style: {
                                            background: '#2b2833',
                                            color: '#c9ac8c',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            maxWidth: '500px',
                                            margin: '0 auto',
                                        }
                                    }}
                                />
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