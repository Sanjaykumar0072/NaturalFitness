import { Component } from 'react';
import videoData from '../../../public/json/yt_embed.json';

class VideoPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVideoUrl: 'https://www.youtube.com/embed/9hQZCiZ21fk',
      mainVideoTitle: 'House Flood Animation',
      currentVideo: null,
    };
  }

  handleVideoClick = (video) => {
    this.setState({
      mainVideoUrl: video.url,
      mainVideoTitle: video.title,
      currentVideo: video,
    });
  };

  render() {
    const { mainVideoUrl, mainVideoTitle, currentVideo } = this.state;

    return (
        <>
        <div className="container videoplaylist">
            <div className="main-video-container">
            <iframe
                src={`${mainVideoUrl}?controls=1&autoplay=0&mute=0&modestbranding=1&showinfo=0"`}
                className="main-video"
                title={mainVideoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            {/* <img className='playbutton' src="/svg/videoplaybutton.svg" alt=">" /> */}
            <h3 className="main-vid-title">{mainVideoTitle}</h3>
            </div>
            <div className="video-list-container">
            {videoData.map((video,index) => (
                <div
                className= {currentVideo === video ? 'list active' : 'list'}
                key={video.id} // Change this to match your video data property
                onClick={() => this.handleVideoClick(video,index)}
                >
                <img
                    src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`} // Change this to match your video ID property
                    alt={video.title}
                    className="list-video-thumbnail"
                />
                <h3 className="list-title">{video.title}</h3>
                <div className="list-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>7-Arrow Up</title><g id="_7-Arrow_Up" data-name="7-Arrow Up"><path d="M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z" fill="#fff" /></g></svg></div>
                </div>
            ))}
            </div>
        </div>
      </>
    );
  }
}

export default VideoPlaylist;
