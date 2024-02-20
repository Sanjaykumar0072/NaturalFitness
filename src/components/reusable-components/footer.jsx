import React from "react";
import Slider from 'react-slick';

export default function Footer() {


    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    speed: 8000,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    speed: 25000,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    speed: 22000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 18000,
                }
            }
        ]
    };

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row center-xs start-sm start-md start-lg">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <div className="footer-col-1">
                                <div className="footer-logo">
                                    <img src="/public/svg/logo.svg" alt="Logo" />
                                </div>
                                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cumque corrupti suscipit porro vel totam.</p>
                                <table className="contact">
                                    <tbody>
                                        <tr>
                                            <td><img src="/public/svg/map.svg" alt="map" /></td>
                                            <td>Chennai, TamilNadu</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/public/svg/mail.svg" alt="mail" /></td>
                                            <td>naturalfitnezz@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/public/svg/phone.svg" alt="phone" /></td>
                                            <td>+91 0000 000 000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-xs-5 col-sm-2 col-md-4 col-lg-2">
                            <div className="links">
                                <h2>Links</h2>
                                <ul>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Trainers</li>
                                    <li>Achievements</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-7 col-sm-3 col-md-4 col-lg-3">
                            <div className="schedules">
                                <h2>Schedules</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Monday</td>
                                            <td>9.00-5.00</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday</td>
                                            <td>9.00-5.00</td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <td>9.00-5.00</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday</td>
                                            <td>9.00-5.00</td>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <td>9.00-5.00</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday</td>
                                            <td>9.00-5.00</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td>9.00-5.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-4 col-lg-3">
                            <div className="newsletter">
                                <h2>Newsletter</h2>
                                <p>Sign up for latest updates and offers</p>
                                <form action="" method="" onSubmit="" target="popupwindow">
                                    <input name="email" className="email" placeholder="name@mail.com" />
                                    <button type="submit"></button>
                                </form>
                                <div className="socialIcons">
                                    <div className="icon">
                                        <img src="/public/svg/fb.svg" alt="fb" />
                                    </div>
                                    <div className="icon">
                                        <img src="/public/svg/x.svg" alt="x" />
                                    </div>
                                    <div className="icon">
                                        <img src="/public/svg/instagram.svg" alt="instagram" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row center-xs">
                        <div className="col-xs-12 col-sm-12 col-md-12 slider-column">
                            <h2>Instagram</h2>
                            <Slider {...settings}>
                                <img src='https://randomwordgenerator.com/img/picture-generator/tree-736885_640.jpg' alt='Image1' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/54e4d6414852a514f1dc8460962e33791c3ad6e04e5074417d2c7ed09048c7_640.jpg' alt='Image2' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/57e6d3404f56af14f1dc8460962e33791c3ad6e04e507440762a7cd49e45c4_640.jpg' alt='Image3' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/53e2d6444f5bae14f1dc8460962e33791c3ad6e04e507440742e7bd0944dc0_640.jpg' alt='Image4' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/5ee3dc4a4a4faa0df7c5d57bc32f3e7b1d3ac3e456597641702c7cd291_640.jpg' alt='Image5' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/54e6d4424c55ab14f1dc8460962e33791c3ad6e04e5074417d2e72d6914ac3_640.jpg' alt='Image6' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/55e5d4434852aa14f1dc8460962e33791c3ad6e04e5074417d2d73d29f49c6_640.jpg' alt='Image7' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/woman-covered-with-red-mesh-3141954.jpg' alt='Image8' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/5ee4d1404a4faa0df7c5d57bc32f3e7b1d3ac3e45659784f70267edc94_640.jpg' alt='Image9' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/54e3d5434b56b10ff3d8992cc12c30771037dbf85254794e722a7dd2954f_640.jpg' alt='Image10' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/55e6d5444254af14f1dc8460962e33791c3ad6e04e50744075277cdc964fc0_640.jpg' alt='Image11' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/52e8d0454a50a814f1dc8460962e33791c3ad6e04e507441722872d7944dcc_640.jpg' alt='Image12' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/52e2dc424857b10ff3d8992cc12c30771037dbf85254784c772d7cd19e49_640.jpg' alt='Image13' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/55e0d5464d53ab14f1dc8460962e33791c3ad6e04e507749742c78d6924ec4_640.jpg' alt='Image14' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/55e1d4414b53a914f1dc8460962e33791c3ad6e04e507440772d7cdd904bc0_640.jpg' alt='Image15' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/54e1d4424d5bae14f1dc8460962e33791c3ad6e04e507441722a72dc9f4ecd_640.jpg' alt='Image16' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/54e1d4424d5bae14f1dc8460962e33791c3ad6e04e507441722a72dc9f4ecd_640.jpg' alt='Image17' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/52e9d2474f53aa14f1dc8460962e33791c3ad6e04e5074417c2e7dd19e49c6_640.jpg' alt='Image18' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/51e1dd4b4a52b10ff3d8992cc12c30771037dbf85254784a742e73d69545_640.jpg' alt='Image19' />
                                <img src='https://randomwordgenerator.com/img/picture-generator/57e5d04a4a52ac14f1dc8460962e33791c3ad6e04e507440762e79d7924ac5_640.jpg' alt='Image20' />
                            </Slider>
                        </div>
                    </div>
                    <div className="row center-xs">
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <p className="copyright">Copyright © 2024 - Sanjay kumar</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}