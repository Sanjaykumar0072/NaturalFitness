import { useState } from 'react';
import Slider from 'react-slick';

export default function Testimonial() {

    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

    var settings = {
        lazyLoad: 'ondemand',
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false, // Don't show dots
        autoplaySpeed: 10000,
        pauseOnHover: true,
        pauseOnFocus: true,

        afterChange: (current) => setCurrentSlide(current), // Update current slide index

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true // Enable dots on smaller screens if needed
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
        ]
    };

    // Testimonial data including image sources
    const testimonials = [
        {
            feedback: "Thank you for the amazing program! I could feel a noticeable difference in my body before and after completing it. The flexibility of the program allowed me to work out at my convenience, making it easy to stay consistent. I also appreciated how approachable and supportive the trainers were in addressing my doubts and correcting my form. Thank you once again for this wonderful initiative—I’m looking forward to more programs in the future!",
            name: "Karthik",
            location: "Chennai",
            imgSrc: "/images/testimonial/t_3.jpeg"
        },
        {
            feedback: "I am so happy to be proud of myself that a dramatic change in my body coach thanks for the support and the motivation that you gave to me. I am really proud of you coach even though you are my classmates the way you thought me and the motivation you gave me love you coach. Seriously I never expected such change in me and I believe that only are mental strength is more important to each one of us. The challenge was very good it was my first challenge ever in life which I took. It proved me that and I am very happy thank you coach for your immense support",
            name: "Clarance",
            location: "Chennai",
            imgSrc: "/images/testimonial/t_2.jpeg"
        },
        {
            feedback: "The expertise of the trainers at Natural Fitnezz is unmatched. They genuinely care about your progress, providing personalized guidance and motivation in every session. Their dedication and knowledge make a huge difference, and each workout leaves me feeling more energized, confident, and stronger. I highly recommend them to anyone serious about fitness!",
            name: "Gowtham",
            location: "Chennai",
            imgSrc: "/images/testimonial/t_1.jpeg"
        },
        {
            feedback: "I had gained lot of muscle strength. My flexibility was improved a lot. I felt energetic throughout the day after my workouts. Couple of days was really hectic after tough workouts, I was not able to walk or lift my hands.. but at the end it was all worth. I had a great body transformation during this challenge. Thanks to Naveen",
            name: "AISWARYA",
            location: "Chennai",
            imgSrc: "/images/testimonial/t_4.jpeg"
        },
        {
            feedback: "The training sessions at Natural Fitnezz are absolutely amazing! The trainer is highly knowledgeable, motivating, and genuinely invested in every client’s progress. Each session is well-structured, challenging, and designed to push limits while ensuring proper form and technique. I've seen incredible results, feeling stronger and more confident every day. The positive energy and encouragement make all the difference. I highly recommend it to anyone serious about achieving their fitness goals!",
            name: "Madhan",
            location: "Chennai",
            imgSrc: "/images/testimonial/t_5.jpeg"
        }, 
        {
            feedback: "When I joined your class I was over weight and I would feel heavy too. From wearing xs I started wearing xl, but today when recently I decided to get an outfit I was surprised to see that I have moved to size S, I felt really light and confident too. It wouldn't have happened without your support and training. Thank you for understanding my mental health and knowing that I'm a stress eater you gradually helped me to come out of it too. I know this is not the end and it's just a beginning for a healthy lifestyle. Thanks a ton!",
            name: "Purnashree",
            location: "Chennai",
            imgSrc: "/images/testimonial/t_6.jpeg"
        },
    ];

    return (
        <>
            <div className="section testmonial" id="testmonial">
                <div className="container">
                    <div className="row">
                        {/* Image column */}
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 test-img">
                            <div className="sec2-img-bc">
                                {/* Display the image corresponding to the current feedback */}
                                <img src={testimonials[currentSlide].imgSrc} alt={`testimonial-img-${currentSlide + 1}`} />
                            </div>
                        </div>

                        {/* Feedback content column */}
                        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                            <div className="sec6-left-column">
                                <span className="gradient-text">TESTIMONIAL</span>
                                <div className="grad-stroke-font flex-center">
                                    <h1 className="stroke-text">What Our</h1>
                                    <h1 className="gradient-text">Clients Are Saying</h1>
                                </div>
                                {/* Feedback Slider */}
                                <Slider {...settings}>
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="feedback">
                                            <p>{testimonial.feedback}</p>
                                            <h3>
                                                <span>{testimonial.name}</span> - {testimonial.location}
                                            </h3>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
