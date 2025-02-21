import Header from "../reusable-components/header";
import Footer from "../reusable-components/footer";
// import VideoPlaylist from "../reusable-components/videoPlaylist";
import { useEffect, useState } from "react";
import Trainers from "../reusable-components/trianers";

export default function Services() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderDesktopLayout = () => (
        <div className="services-flex-group">
            <div className="service-item-img">
                <img src="/images/workout-img-1.png" alt="image" />
            </div>
            <div className="service-item">
                <div>
                    <h2>YOGA</h2>
                    <h4 className="gradient-text">TRAINING</h4>
                </div>
                <p>Enhance flexibility and mental clarity through mindful movements and breathing techniques.</p>
            </div>
            <div className="service-item-img">
                <img src="/images/workout-img-2.png" alt="image" />
            </div>
            <div className="service-item">
                <div>
                    <h2>WEIGHT LOSS</h2>
                    <h4 className="gradient-text">TRAINING</h4>
                </div>
                <p>Achieve sustainable fat loss with personalized workout plans and balanced nutrition guidance.</p>
            </div>
            <div className="service-item">
                <div>
                    <h2>CROSSFIT</h2>
                    <h4 className="gradient-text">TRAINING</h4>
                </div>
                <p>Build strength and endurance with high-intensity functional workouts and diverse exercises.</p>
            </div>
            <div className="service-item-img">
                <img src="/images/workout-img-3.png" alt="image" />
            </div>
            <div className="service-item">
                <div>
                    <h2>Weight Gain</h2>
                    <h4 className="gradient-text">TRAINING</h4>
                </div>
                <p>Gain healthy muscle mass through tailored strength training and calorie-focused nutrition plans.</p>
            </div>
            <div className="service-item-img">
                <img src="/images/workout-img-4.png" alt="image" />
            </div>
        </div>
    );

    const renderMobileLayout = () => (
        <div className="services-flex-group">
            <div className="service-item-img">
                <img src="/images/workout-img-1.png" alt="image" />
            </div>
            <div className="service-item">
                <div>
                    <h2>YOGA</h2>
                    <h4 className="gradient-text">TRAINING</h4>
                </div>
                <p>Enhance flexibility and mental clarity through mindful movements and breathing techniques.</p>
            </div>
            <div className="service-item">
                <div>
                    <h2>WEIGHT LOSS</h2>
                    <h4 className="gradient-text">TRAINING</h4>
                </div>
                <p>Achieve sustainable fat loss with personalized workout plans and balanced nutrition guidance.</p>
            </div>
            <div className="service-item-img">
                <img src="/images/workout-img-2.png" alt="image" />
            </div>
            <div className="service-item-img">
                <img src="/images/workout-img-3.png" alt="image" />
            </div>
            <div className="service-item">
                <div>
                    <h2>CROSSFIT</h2>
                    <h4 className="gradient-text">TRAINING</h4>
                </div>
                <p>Build strength and endurance with high-intensity functional workouts and diverse exercises.</p>
            </div>
            <div className="service-item">
                <div>
                    <h2>Weight Gain</h2>
                    <h4 className="gradient-text">TRAINING</h4>
                </div>
                <p>Gain healthy muscle mass through tailored strength training and calorie-focused nutrition plans.</p>
            </div>
            <div className="service-item-img">
                <img src="/images/workout-img-4.png" alt="image" />
            </div>
        </div>
    );

    const batches = {
        offline: [
            { batch: "Batch 1", days: "Mon, Tue, Thur, Fri", time: "5:30 am - 6:30 am" },
            { batch: "Batch 2", days: "Mon, Tue, Thur, Fri", time: "6:30 am - 7:30 am" },
            { batch: "Batch 3", days: "Mon, Tue, Thur, Fri", time: "9:30 am - 10:30 am" },
            { batch: "Batch 4", days: "Mon, Tue, Thur, Fri", time: "7:30 pm - 8:30 pm" },
            { batch: "Batch 5", days: "Mon, Tue, Thur, Fri", time: "8:30 pm - 9:30 pm" }
        ],
        Online: [
            { batch: "Batch 1", days: "Mon, Tue, Thur, Fri", time: "5:30 am - 6:30 am" },
            { batch: "Batch 2", days: "Mon, Tue, Thur, Fri", time: "7:40 am - 8:40 am" },
            { batch: "Batch 3", days: "Mon, Tue, Thur, Fri", time: "8:15 pm - 9:15 pm" },
        ]
    };

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

                <div className="section section2" id="section2">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <h3 className="gradient-text">FIND YOUR EXERCISE</h3>
                                <div className="sec2-main-heading">
                                    <div className="grad-stroke-font">
                                        <h1 className="gradient-text">OUR SERVICES</h1>
                                        <h1 className="stroke-text">WORKOUTS</h1>
                                    </div>
                                    <button className="gradient-button"><a className="nav-links" href="#">More Classes</a></button>
                                </div>
                                {windowWidth < 727 ? renderMobileLayout() : renderDesktopLayout()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="section section3" id="section3">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="sec2-main-heading">
                                    <h3 className="gradient-text">VIDEOS</h3>
                                    <h1 className="gradient-text">OUR WORKSHOP</h1>
                                    <div className="gradient-button"><a className="nav-links" href="#">Expand all Course <img width={15} height={15} src="/svg/expand.svg" alt="Go" /></a></div>
                                </div>
                                <VideoPlaylist />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="section section4" id="section4">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="sec4-left-column">
                                    <span className="gradient-text">OUR TRAINERS</span>
                                    <div className="grad-stroke-font flex-center">
                                        <h1 className="stroke-text">TEAM OF</h1>
                                        <h1 className="gradient-text">EXPERT COACHES</h1>
                                    </div>
                                </div>
                            </div>
                            <Trainers />
                        </div>
                    </div>
                </div>
                <div className="section section5" id="section5">
                    <div className="container-fluid">
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <span className="gradient-text">TIME TABLE</span>
                                <h1 className="gradient-text">CLASS SCHEDULE</h1>
                                <div className="timetable-container">
                                    <table className="timetable" style={{ border: '1px solid rgb(116 116 116)' }}>
                                        <thead>
                                            <tr>
                                                <th className="time-header">Class Type</th>
                                                <th>Batch</th>
                                                <th>Days</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(batches).map(([type, batchList]) => (
                                                batchList.map((batch, index) => (
                                                    <tr key={`${type}-${index}`} className={type.toLowerCase()} style={type.toLocaleLowerCase() === "online" && index === 0 ? { borderTop: "2px solid #fff" } : {}} >
                                                        {index === 0 && <td className="time" rowSpan={batchList.length}>{type.charAt(0).toUpperCase() + type.slice(1)}</td>}
                                                        <td>{batch.batch}</td>
                                                        <td>{batch.days}</td>
                                                        <td>{batch.time}</td>
                                                    </tr>
                                                ))
                                            ))}
                                        </tbody>
                                    </table>
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
