import { useState } from "react";
import Footer from "../reusable-components/footer";
import Header from "../reusable-components/header";
import { useEffect } from "react";


const mediaData = {
  section1: {
    title: '2023 - NATIONAL COMPETITION',
    media: [
      { type: 'image', src: '/images/gallery/2023 - NATIONAL COMPETITION/23-nc-1.jpg', alt: 'Image 1' },
      { type: 'image', src: '/images/gallery/2023 - NATIONAL COMPETITION/23-nc-2.jpg', alt: 'Image 2' },
      { type: 'image', src: '/images/gallery/2023 - NATIONAL COMPETITION/23-nc-3.jpg', alt: 'Image 3' },
      { type: 'video', src: '/images/gallery/2023 - NATIONAL COMPETITION/23-nc-4.mp4' },
    ]
  },
  section2: {
    title: '2023 - STATE COMPETITION',
    media: [
      { type: 'image', src: '/images/gallery/2023 - STATE COMPETITION/BEST TRAINER & INSTITUTION HONOR.jpeg', alt: 'Image 1' },
      { type: 'image', src: '/images/gallery/2023 - STATE COMPETITION/BEST TRAINER AWARD.jpeg', alt: 'Image 2' },
      { type: 'image', src: '/images/gallery/2023 - STATE COMPETITION/FIRST & THIRD (REVATHI & KAASI).jpeg', alt: 'Image 3' },
      { type: 'image', src: '/images/gallery/2023 - STATE COMPETITION/FOURTH & FIFTH (SHRIRAM & TEJASVIN).jpeg', alt: 'Image 4' },
      { type: 'image', src: '/images/gallery/2023 - STATE COMPETITION/INSTITUTION HONOR.jpeg', alt: 'Image 5' },
      { type: 'image', src: '/images/gallery/2023 - STATE COMPETITION/PARTICIPANTS.jpeg', alt: 'Image 6' },
      { type: 'image', src: '/images/gallery/2023 - STATE COMPETITION/THIRD ( DIVYA).jpeg', alt: 'Image 7' },
      { type: 'video', src: '/images/gallery/2023 - STATE COMPETITION/TOTAL VIDEO.mp4' },
      { type: 'image', src: '/images/gallery/2023 - STATE COMPETITION/WINNERS.jpeg', alt: 'Image 8' },
    ]
  },
  section3: {
    title: '2024 - STATE COMPETITION',
    media: [
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/2nd & 3rd ( NAVIN & KISHORE).jpeg', alt: 'Image 1' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/AWARDS.jpeg', alt: 'Image 2' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/BEST TEACHER.jpeg', alt: 'Image 3' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/CHRIS VIDEO.mp4' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/EVENT FULL VIDEO.mp4' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/FIRST(REVATHI).jpeg', alt: 'Image 4' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/GANDHIMATHI VIDEO.mp4' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/GROUP PIC.jpeg', alt: 'Image 5' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/HEMA VIDEO.mp4' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/HONOR INSTITUTION AWARD.jpeg', alt: 'Image 6' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/INSTITUTION HONOR.jpeg', alt: 'Image 7' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/MEERA VIDEO (2).mp4' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/MEERA VIDEO.mp4' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/NAVIN & KISHORE VIDEO.MP4' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/NAVIN AWARDS.jpeg', alt: 'Image 8' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/REKHA VIDEO.mp4' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/REVATHI AWARDS.jpeg', alt: 'Image 9' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/REVATHI VIDEO.mp4' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/SECOND(GANDHIMATHI).jpeg', alt: 'Image 10' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/TEAM AWARDS.jpeg', alt: 'Image 11' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/THRISHANK VIDEO.mp4' },
      { type: 'video', src: '/images/gallery/2024 - STATE COMPETITION/VANITHA VIDEO.mp4' },
      { type: 'image', src: '/images/gallery/2024 - STATE COMPETITION/GANDHIMATHI AWARDS.jpeg', alt: 'Image 12' },
    ]
  },
  section4: {
    title: '2024 - NATIONAL COMPETITION',
    media: [
      { type: 'video', src: '/images/gallery/NATIONAL COMPETITION/ARUL MOLZI VIDEO.mp4' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/AWARDS (1).jpeg', alt: 'Image 1' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/AWARDS (2).jpeg', alt: 'Image 2' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/FIRST ( REVATHI).jpeg', alt: 'Image 3' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/FIRST ( NAVIN).jpeg', alt: 'Image 4' },
      { type: 'video', src: '/images/gallery/NATIONAL COMPETITION/HEMA VIDEO (1).mp4' },
      { type: 'video', src: '/images/gallery/NATIONAL COMPETITION/HEMA VIDEO (3).mp4' },
      { type: 'video', src: '/images/gallery/NATIONAL COMPETITION/HEMA VIDEO (4).mp4' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/NAVIN JUDGE PIC 2.jpeg', alt: 'Image 5' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/NAVIN JUDGE PIC 3.jpeg', alt: 'Image 6' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/NAVIN JUDGE PIC 4.jpeg', alt: 'Image 7' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/NAVIN JUDGE PIC.jpeg', alt: 'Image 8' },
      { type: 'video', src: '/images/gallery/NATIONAL COMPETITION/NAVIN VIDEO.MP4' },
      { type: 'video', src: '/images/gallery/NATIONAL COMPETITION/NIHARIKA VIDEO.MP4' },
      { type: 'video', src: '/images/gallery/NATIONAL COMPETITION/TEJASVIN VIDEO.MP4' },
      { type: 'image', src: '/images/gallery/NATIONAL COMPETITION/THIRD (HEMA).jpeg', alt: 'Image 9' },

    ]
  },
  section5: {
    title: 'IT Company Events',
    media: [
      { type: 'video', src: '/images/gallery/IT Company Events/it-event-video-1.mp4' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-1.jpeg', alt: 'Image 1' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-2.jpeg', alt: 'Image 2' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-3.jpeg', alt: 'Image 3' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-4.jpeg', alt: 'Image 4' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-5.jpeg', alt: 'Image 5' },
      { type: 'video', src: '/images/gallery/IT Company Events/it-event-video-2.mp4' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-6.jpeg', alt: 'Image 6' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-7.jpeg', alt: 'Image 7' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-8.jpeg', alt: 'Image 8' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-9.jpeg', alt: 'Image 9' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-10.jpeg', alt: 'Image 10' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-11.jpeg', alt: 'Image 11' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-12.jpeg', alt: 'Image 12' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-13.jpeg', alt: 'Image 13' },
      { type: 'video', src: '/images/gallery/IT Company Events/it-event-video-3.mp4' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-14.jpeg', alt: 'Image 14' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-15.jpeg', alt: 'Image 15' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-16.jpeg', alt: 'Image 16' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-17.jpeg', alt: 'Image 17' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-18.jpeg', alt: 'Image 18' },
      { type: 'video', src: '/images/gallery/IT Company Events/it-event-video-4.mp4' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-19.jpeg', alt: 'Image 19' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-20.jpeg', alt: 'Image 20' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-21.jpeg', alt: 'Image 21' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-22.jpeg', alt: 'Image 22' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-23.jpeg', alt: 'Image 23' },
      { type: 'video', src: '/images/gallery/IT Company Events/it-event-video-5.mp4' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-24.jpeg', alt: 'Image 24' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-25.jpeg', alt: 'Image 25' },
      { type: 'image', src: '/images/gallery/IT Company Events/it-event-26.jpeg', alt: 'Image 26' },
      { type: 'video', src: '/images/gallery/IT Company Events/it-event-video-6.mp4' },
    ]
  },
  section6: {
    title: 'School Events',
    media: [
      { type: 'image', src: '/images/gallery/school events/school_event_1.jpeg', alt: 'Image1'},
      { type: 'image', src: '/images/gallery/school events/school_event_2.jpeg', alt: 'Image2'},
      { type: 'video', src: '/images/gallery/school events/school_event_video_1.mp4' },
      { type: 'image', src: '/images/gallery/school events/school_event_3.jpeg', alt: 'Image3'},
      { type: 'image', src: '/images/gallery/school events/school_event_4.jpeg', alt: 'Image4'},
      { type: 'video', src: '/images/gallery/school events/school_event_video_2.mp4' },
      { type: 'image', src: '/images/gallery/school events/school_event_5.jpeg', alt: 'Image5'},
      { type: 'image', src: '/images/gallery/school events/school_event_6.jpeg', alt: 'Image6'},
      { type: 'video', src: '/images/gallery/school events/school_event_video_3.mp4' },
      { type: 'image', src: '/images/gallery/school events/school_event_7.jpeg', alt: 'Image7'},
      { type: 'image', src: '/images/gallery/school events/school_event_8.jpeg', alt: 'Image8'},
      { type: 'image', src: '/images/gallery/school events/school_event_9.jpeg', alt: 'Image9'},
      { type: 'video', src: '/images/gallery/school events/school_event_video_4.mp4' },
      { type: 'image', src: '/images/gallery/school events/school_event_10.jpeg', alt: 'Image10'},
      { type: 'image', src: '/images/gallery/school events/school_event_11.jpeg', alt: 'Image11'},
      { type: 'video', src: '/images/gallery/school events/school_event_video_5.mp4' },
      { type: 'image', src: '/images/gallery/school events/school_event_12.jpeg', alt: 'Image12'},
      { type: 'video', src: '/images/gallery/school events/school_event_video_6.mp4' },
    ]
  }
};

const Achievements = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionElements = document.querySelectorAll('.gallery-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1, // Section is considered active when 50% is visible
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Header />
      <main className="gallery">
        <h1 className="gradient-text">Journey Through Fitness</h1>
        <div className="gallery-container">
          {/* Sidebar */}
          <div className="sidebar">
            <ul>
              {Object.keys(mediaData).map((sectionKey) => (
                <li key={sectionKey} className={activeSection === sectionKey ? 'active' : ''}>
                  <a href={`#${sectionKey}`}>{mediaData[sectionKey].title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Gallery Content */}
          <div className="gallery-content">
            {Object.keys(mediaData).map((sectionKey) => (
              <div key={sectionKey} id={sectionKey} className={`gallery-section ${mediaData[sectionKey].title}`}>
                <div className="media-grid">
                  {mediaData[sectionKey].media.map((media, index) => (
                    <div key={index} className="media-item">
                      {media.type === 'video' ? (
                        <video autoPlay muted loop width="300">
                          <source src={media.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img src={media.src} alt={media.alt || 'Gallery Image'} width="300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Achievements;
