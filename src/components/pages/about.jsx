import Header from "../reusable-components/header";
import Footer from "../reusable-components/footer";
import GalleryModal from "../reusable-components/galleryModal";
import KeyMetrics from "../reusable-components/keyMetrics";

export default function About() {

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
                        <div className="row middle-xs sec2-row-1">
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                <div className="sec2-right-column">
                                    <div className="sec2-img-bc left"><img src="/images/about-sec2-img1.png" alt="sec2Img1" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 sec2-left-main">
                                <div className="sec2-left-column">
                                    <span className="gradient-text">WHO WE ARE</span>
                                    <h1 className="gradient-text">WELCOME TO Natural FitneZZ!</h1>
                                    <p>We are a dedicated fitness studio with a mission to create a healthier society. Since our inception, we have had the honor of training over 600 individuals, guiding each one towards their personal wellness goals.
                                        <br /><br />
                                        At Natural Fitnezz, we offer a blend of innovative yoga practices and comprehensive fitness programs designed to support and inspire. Our commitment is to foster a vibrant and supportive community where everyone can thrive, whether you&apos;re an experienced athlete or just starting your fitness journey.
                                        <br /><br />
                                        Join us at Natural Fitnezz and be a part of our growing community. Together, we&apos;ll work towards achieving a healthier, happier you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <KeyMetrics />
                        <div className="row middle-xs sec2-row-2">
                            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                                <div className="sec2-left-column">
                                    <span className="gradient-text">WHO WE ARE</span>
                                    <h1 className="gradient-text">Meet the Natural Fitnezz Team</h1>
                                    <p>At Natural Fitnezz, we’re proud to introduce a team of dedicated professionals who are passionate about guiding you on your fitness journey. Each team member brings a wealth of knowledge in holistic health, yoga, and fitness training, ensuring that every session is not only effective but also tailored to your unique needs. With a shared commitment to fostering a supportive and inclusive environment, our team is here to help you grow, challenge yourself, and achieve your wellness goals—naturally and sustainably. Let’s embark on this journey together!</p>
                                    <div className="sec2-img-btn">
                                        <GalleryModal
                                            imgSrc="/certificates"
                                            totalImages={6}
                                            buttonTitle="View Certificate"
                                            buttonClass="gradient-button"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                <div className="sec2-right-column">
                                    <div className="sec2-img-bc"><img src="/images/about-sec2-img2.png" alt="sec2Img1" /></div>
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
                                <img src="/images/abt-gallery-1.png" alt="abt-gallery-1" />
                                <img src="/images/abt-gallery-2.png" alt="abt-gallery-2" />
                                <img src="/images/abt-gallery-3.png" alt="abt-gallery-3" />
                                <img src="/images/abt-gallery-4.png" alt="abt-gallery-4" />
                                <img src="/images/abt-gallery-5.png" alt="abt-gallery-5" />
                                <img src="/images/abt-gallery-6.png" alt="abt-gallery-6" />
                                <img src="/images/abt-gallery-7.png" alt="abt-gallery-7" />
                                <img src="/images/abt-gallery-8.png" alt="abt-gallery-8" />
                            </div>

                        </div>
                    </div>
                </div>
                {/* <Testimonial /> */}
            </main>
            <Footer />
        </>
    )
}