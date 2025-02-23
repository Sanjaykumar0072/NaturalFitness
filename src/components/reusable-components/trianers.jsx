export default function Trainers() {
    const trainers = [
        {
            name: 'Navin',
            experience: 'Founder & Lead Trainer at NF, Certified Nutritionist, Fitness Instructor, and National Champion',
            image: 'navin.jpg',
            className: '',
            links: {
                fb: '#',
                instagram: 'https://www.instagram.com/navin_nf/profilecard/?igsh=Y3pyY3hoOGptZ2Zp',
                x: '#',
            }
        },
        {
            name: 'Yuthiika',
            experience: 'Certified Yoga Instructor and Ayurveda Expert',
            image: 'trainer-img-2.png',
            className: '',
            links: {
                fb: '#',
                instagram: 'https://www.instagram.com/dr_yuthiika/profilecard/?igsh=MWJzaW1zajZtcmphbQ==',
                x: '#',
            }
        },
        {
            name: 'TEJASVIN',
            experience: 'National and State Champion and Fitness Expert',
            image: 'trainer-img-3.png',
            className: '',
            links: {
                fb: '#',
                instagram: 'https://www.instagram.com/_tejasvin_/profilecard/?igsh=MTBqNGY2MTA3Zjk0cg==',
                x: '#',
            }
        },
    ];

    return (
        <>
            <div className="trainers">
                <div className="">
                    <div className="services sec2-img-bc">
                        {trainers.map((trainer, index) => (
                            <div className="service-box" key={index}>
                                <div className={`img-container ${trainer.className}`}>
                                    <img src={`/images/${trainer.image}`} alt={`service-img-${index + 1}`} />
                                </div>
                                <div className="main">
                                    <h1>{trainer.name}</h1>
                                    <p>{trainer.experience}</p>
                                    <div className="trainer-links">
                                        {/* <a rel="noreferrer" target='_blank' href={trainer.links.fb}><img src='/svg/fb.svg' alt="fb" /></a> */}
                                        <a rel="noreferrer" target='_blank' href={trainer.links.instagram}>
                                            {/* <img src='/svg/instagram.svg' alt="instagram" /> */}
                                            <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.425 0.484863H4.738C3.48149 0.485128 2.27651 0.984394 1.38802 1.87288C0.499531 2.76137 0.000265115 3.96635 0 5.22286L0 10.9089C-2.79785e-08 12.1656 0.499149 13.3708 1.38767 14.2595C2.27619 15.1482 3.48131 15.6476 4.738 15.6479H10.424C11.6807 15.6476 12.8858 15.1482 13.7743 14.2595C14.6629 13.3708 15.162 12.1656 15.162 10.9089V5.22286C15.1617 3.96652 14.6626 2.7617 13.7743 1.87324C12.8861 0.984776 11.6813 0.485393 10.425 0.484863ZM13.742 10.9099C13.7409 11.7893 13.3911 12.6323 12.7693 13.2542C12.1475 13.876 11.3044 14.2258 10.425 14.2269H4.738C3.8586 14.2258 3.01552 13.876 2.3937 13.2542C1.77187 12.6323 1.42206 11.7893 1.421 10.9099V5.22286C1.42232 4.34364 1.77225 3.50082 2.39405 2.87921C3.01585 2.25759 3.85877 1.90792 4.738 1.90686H10.424C11.3034 1.90792 12.1465 2.25773 12.7683 2.87956C13.3901 3.50139 13.7399 4.34447 13.741 5.22386L13.742 10.9099Z" fill="#009DEB" />
                                                <path d="M7.58202 4.27588C6.83223 4.27588 6.09927 4.49822 5.47584 4.91478C4.85242 5.33134 4.36652 5.9234 4.07959 6.61612C3.79266 7.30883 3.71758 8.07109 3.86386 8.80647C4.01014 9.54185 4.37119 10.2173 4.90137 10.7475C5.43155 11.2777 6.10704 11.6388 6.84242 11.785C7.5778 11.9313 8.34006 11.8562 9.03278 11.5693C9.72549 11.2824 10.3176 10.7965 10.7341 10.173C11.1507 9.54962 11.373 8.81667 11.373 8.06688C11.373 7.06144 10.9736 6.09718 10.2627 5.38623C9.55171 4.67528 8.58745 4.27588 7.58202 4.27588ZM7.58202 10.4359C7.11347 10.4359 6.65545 10.2969 6.26587 10.0366C5.87629 9.77633 5.57264 9.40633 5.39334 8.97345C5.21404 8.54057 5.16712 8.06425 5.25853 7.60471C5.34994 7.14516 5.57556 6.72305 5.90688 6.39174C6.23819 6.06043 6.6603 5.8348 7.11984 5.74339C7.57938 5.65198 8.05571 5.6989 8.48859 5.8782C8.92146 6.05751 9.29146 6.36115 9.55177 6.75073C9.81208 7.14031 9.95102 7.59834 9.95102 8.06688C9.94996 8.69485 9.70003 9.2968 9.25598 9.74084C8.81194 10.1849 8.20999 10.4348 7.58202 10.4359Z" fill="#009DEB" />
                                                <path d="M11.6569 4.49584C11.9358 4.49584 12.1619 4.26974 12.1619 3.99084C12.1619 3.71194 11.9358 3.48584 11.6569 3.48584C11.378 3.48584 11.1519 3.71194 11.1519 3.99084C11.1519 4.26974 11.378 4.49584 11.6569 4.49584Z" fill="#009DEB" />
                                            </svg>
                                        </a>
                                        {/* <a rel="noreferrer" target='_blank' href={trainer.links.x}><img src='/svg/x.svg' alt="x" /></a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}