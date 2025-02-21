import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import Header from '../reusable-components/header';
import Footer from "../reusable-components/footer";
import Testimonial from "../reusable-components/testimonial";
import Calculator from "../reusable-components/fitnessCalculator";
import KeyMetrics from '../reusable-components/keyMetrics';

export default function Home() {
    var settings = {
        lazyLoad: 'ondemand',
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,

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

    // const blogPosts = [
    //     { id: 1, title: "How to Start Yoga", slug: "how-to-start-yoga", bannerImage: "/images/ach-img-1.png", content: "Yoga is a great way to improve flexibility and reduce stress. [Insert full blog content here that is more than 200 words] ..." },
    //     { id: 2, title: "10 Fitness Tips", slug: "10-fitness-tips", bannerImage: "/images/ach-img-2.png", content: "To stay fit, remember to exercise regularly and eat a balanced diet. [Insert full blog content here that is more than 200 words] ..." },
    //     { id: 3, title: "Healthy Eating", slug: "healthy-eating", bannerImage: "/images/ach-img-3.png", content: "Healthy eating is key to a long and vibrant life. [Insert full blog content here that is more than 200 words] ..." }
    // ];

    // const getExcerpt = (content, length = 200) => {
    //     return content.split(" ").slice(0, length).join(" ") + "...";
    // };

    return (
        <>
            <Header />
            <main className="home">
                <div className="section section1 section-banner" id="section1">
                    <div className="container">
                        <div className="row center-xs start-sm">
                            <div className="col-xs-12 col-sm-9">
                                <div className="sec1-left-content">
                                    <h1 className="gradient-text">Empower Your Fitness</h1>
                                    <h1 className="stroke-text">Elevate Your Life</h1>
                                    <p>Transform your body and elevate your well-being with expertly designed workouts tailored to your unique needs. Whether you&apos;re just starting your fitness journey or looking to push your limits, we provide the guidance and motivation you need to succeed.</p>
                                    <NavLink to="/contact" className="nav-links gradient-button">Start Your Journey</NavLink>
                                    {/* <SignUpForm /> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-8 col-sm-6 col-md-6 col-lg-6">
                                <div className="sec1-card">
                                    <div className="card-img">
                                        <img src="/images/sec1-cardImg.png" alt="" />
                                    </div>
                                    <Slider {...settings} slidesToScroll={1} autoPlaySpeed={5000} className='card-container'>
                                        <div>
                                            <span className="card-box">
                                                <h3>Health</h3>
                                                <p>&quot;Your health is an investment, not an expense. Discover tips healthier.&quot;</p>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="card-box">
                                                <h3>Fitness</h3>
                                                <p>&quot;Strong today, stronger tomorrow. Achieve with our fitness plans.&quot;</p>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="card-box">
                                                <h3>Workout</h3>
                                                <p>&quot;Push yourself, because no one else is going to do it for you.&quot;</p>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="card-box">
                                                <h3>Walking</h3>
                                                <p>&quot;Every step is progress. Every step counts.&quot;</p>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="card-box">
                                                <h3>running</h3>
                                                <p>&quot;Run your own race. Lace-up and get moving.&quot;</p>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="card-box">
                                                <h3>dancing</h3>
                                                <p>&quot;Dance like everyone&apos;s watching your strength grows with each move.&quot;</p>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="card-box">
                                                <h3>yoga</h3>
                                                <p>&quot;Inhale strength, exhale stress and connect with your inner self.&quot;</p>
                                            </span>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="section section2" id="section2">
                    <div className="container">
                        <div className="row middle-sm">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-7">
                                <div className="sec2-left-column">
                                    <span className="gradient-text">WHO WE ARE</span>
                                    <h1 className="gradient-text">Sculpt Your Dream</h1>
                                    <h1 className="stroke-text">Physique</h1>
                                    <p>We are dedicated to helping you shape your body and achieve your fitness goals. Our expert team is here to guide you every step of the way, ensuring that you reach new heights in your fitness journey.</p>
                                    <div className="sec2-card">
                                        <div className="card-box">
                                            <div className="img"><img src="/svg/sec2-card-glove.svg" alt="glove" /></div>
                                            <div>
                                                <h3>FULL-BODY STRENGTH</h3>
                                                <p>Build unparalleled strength with guidance from top professionals.</p>
                                            </div>
                                        </div>
                                        <div className="card-box">
                                            <div className="img"><img src="/svg/sec2-card-bike.svg" alt="bike" /></div>
                                            <div>
                                                <h3>DIET and NUTRITIONS</h3>
                                                <p>Our team of expert nutritionists is here to provide personalized guidance to help you achieve optimal health.</p>
                                            </div>
                                        </div>
                                        <div className="card-box">
                                            <div className="img"><img src="/svg/sec2-card-strength.svg" alt="strength" /></div>
                                            <div>
                                                <h3>Running & Mobility Improvement</h3>
                                                <p>Enhance your running performance and boost your mobility with expert guidance tailored to your needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                                <div className="sec2-right-column">
                                    <div className="sce2-right-inner">
                                        <div className="sec2-img-bc"><img src="/images/sec2-img1.png" alt="sec2Img1" /></div>
                                        <div className="sec2-img-btn">
                                            <button className="gradient-button">
                                                <a rel="noreferrer" target="_blank" href="https://wa.me/+918667256186?text=Hello%2C%20I%27m%20interested%20in%20a%20fitness%20consultation.%20Can%20we%20schedule%20a%20session%3F">FREE CONSULTATION</a>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row middle-sm sec2-row2">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                                <div className="sec2-right-column grid-start">
                                    <div className="sec2-img-bc"><img src="/images/sec2-img2.png" alt="sec2Img1" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-7 grid grid-end">
                                <div className="sec2-left-column">
                                    <span className="gradient-text">Why Choose Us?</span>
                                    <h1 className="stroke-text">Delivering Excellence</h1>
                                    <h1 className="gradient-text">Four Years of Fitness Excellence</h1>
                                    <p>For the past four years, we&apos;ve been dedicated to transforming lives through fitness. Our expert team has successfully supported over 350 individuals in reaching their health and wellness goals, offering personalized guidance and proven strategies to help each client achieve lasting results. Join us on your fitness journey!</p>

                                </div>
                            </div>
                        </div>
                        <KeyMetrics />
                    </div>
                </div>
                <Testimonial />
                <div className="section section3" id="section3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <span className="gradient-text">FIND YOUR EXPERIENCE</span>
                                <div className="grad-stroke-font">
                                    <h1 className="gradient-text">NEW EXCLUSIVE</h1>
                                    <h1 className="stroke-text">Training Programs</h1>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <Slider {...settings} slidesToScroll={1}>
                                    <div>
                                        <div className="workout">
                                            <div className="sec2-img-bc">
                                                <img src="https://ironbullstrength.com/cdn/shop/articles/powerlifting-fix-your-weaknesses_520x500_9ea7eac2-4536-4103-ab44-f278f0a92b4e.webp?v=1691094542" alt="sec2Img1" />
                                            </div>
                                            <h1 className="stroke-text">01</h1>
                                            <h2>Strength Training</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <h1 className="stroke-text">02</h1>
                                            <h2>Cardiovascular</h2>
                                            <img src="https://www.nordictrack.co.uk/learn/wp-content/uploads/2019/09/Cardio-training-the-ideal-duration3.jpeg" alt="sec2Img1" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <img src="https://hips.hearstapps.com/hmg-prod/images/reformer-pilates-66f567e60ed64.jpg" alt="sec2Img1" />
                                            <h1 className="stroke-text">03</h1>
                                            <h2>Yoga and Pilates</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <h1 className="stroke-text">04</h1>
                                            <h2>Functional Training</h2>
                                            <img src="https://ssfei.in/img/classes/personal-trainer.jpg" alt="sec2Img1" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <img src="https://www.shutterstock.com/image-photo/serious-young-black-man-doing-600nw-2432719441.jpg" alt="sec2Img1" />
                                            <h1 className="stroke-text">05</h1>
                                            <h2>Flexibility and Stretching</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <h1 className="stroke-text">06</h1>
                                            <h2>RUNNING</h2>
                                            <img src="https://img.redbull.com/images/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/04/19/14810946-3c3d-4284-98d3-6135705a572b/courtney-atkinson" alt="sec2Img1" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <img src="https://sweat440.com/wp-content/uploads/2022/09/hiit-workout.jpg" alt="sec2Img1" />
                                            <h1 className="stroke-text">07</h1>
                                            <h2>Circuit Training</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <h1 className="stroke-text">08</h1>
                                            <h2>Endurance Training</h2>
                                            <img src="https://hips.hearstapps.com/hmg-prod/images/body-builder-training-in-industrial-urban-gym-royalty-free-image-1643036272.jpg" alt="sec2Img1" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <img src="https://barbellpilates.com/wp-content/uploads/2021/06/2019.03.10-Trish-DaCosta-Scripps-Pier-11.jpg" alt="sec2Img1" />
                                            <h1 className="stroke-text">09</h1>
                                            <h2>Recovery Workouts</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="workout">
                                            <h1 className="stroke-text">10</h1>
                                            <h2>Balance Training</h2>
                                            <img src="https://mantracare.org/wp-content/uploads/2022/10/Improve-Balance-460.jpg" alt="sec2Img1" />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section5" id="section5">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="sec5-left-column">
                                    <span className="gradient-text">Fitness Calculators</span>
                                    <div className="grad-stroke-font flex-center">
                                        <h1 className="stroke-text">Determine Your</h1>
                                        <h1 className="gradient-text">Ideal Health Metrics</h1>
                                    </div>
                                    <p>Explore our range of fitness calculators to assess your health and wellness goals. Our tools provide precise measurements to help you understand your body’s needs, track your progress, and achieve optimal fitness outcomes.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <Calculator />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="section section6" id="section6">
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
                                        {blogPosts.slice(0, 1).map(post => (
                                            <div className="service-box" key={post.id}>
                                                <div className="sec2-img-bc">
                                                    <img src={post.bannerImage} alt={post.slug} />
                                                </div>
                                                <Link className='content-heading' to={`/blog/${post.slug}`}>
                                                    <h2>{post.title.toUpperCase()}</h2>
                                                    <p>{getExcerpt(post.content, 10)}</p>
                                                    <button>Read More</button>
                                                </ Link>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        {blogPosts.slice(1).map(post => (
                                            <div className="service-box small-box" key={post.id}>
                                                <div
                                                    className="sec2-img-bc"
                                                    style={{ marginBottom: post.id === 2 ? '2rem' : '0' }}
                                                >
                                                    <img src={post.bannerImage} alt={post.slug} />
                                                </div>
                                                <Link className='content-heading' to={`/blog/${post.slug}`}>
                                                    <h2>{post.title.toUpperCase()}</h2>
                                                    <p>{getExcerpt(post.content, 10)}</p>
                                                    <button>Read More</button>
                                                </ Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <button className="gradient-button">View All</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>
            <Footer />
        </>
    )
}
























