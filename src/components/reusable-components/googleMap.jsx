import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  };

  static propTypes = {
    config: PropTypes.object.isRequired,
  };

  static defaultProps = {
    config: {},
  };

  componentDidMount() {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps API is not loaded.');
      return;
    }
    
    if (!this.props.config) {
      console.error('Map configuration is missing.');
      return;
    }

    this.map = this.createMap();
    this.marker = this.createMarkers();
  };

  createMap = () => {
    const { config } = this.props;
    const mapCanvas = this.mapRef.current;

    if (config.type === 'street') {
      return new window.google.maps.StreetViewPanorama(mapCanvas, config.mapOptions);
    } else {
      return new window.google.maps.Map(mapCanvas, config.mapOptions);
    }
  };

  createMarkers = () => {
    const { config } = this.props;
    const { locations, allowClusters } = config;

    if (!locations || !Array.isArray(locations)) {
      console.error('Invalid or missing locations data.');
      return;
    }

    if (allowClusters) {
      const markers = locations.map((location) => {
        const marker = new window.google.maps.Marker({ position: location });
        this.createInfoWindow(marker, location);
        return marker;
      });

      new window.MarkerClusterer(this.map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
      });
    } else {
      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: location,
          map: this.map,
          title: location.infoWindowContent.title || ''
        });
        this.createInfoWindow(marker, location);
      });
    }
  };

  createInfoWindow = (marker, location) => {
    const { title, text, imgUrl } = location.infoWindowContent;

    const infoWindowTemplate = `
      <div class="info-window" style="background-image: url(${imgUrl})"}>
        <h4>${title}</h4>
        <p>${text}</p>
      </div>
    `;

    const infoWindow = new window.google.maps.InfoWindow({
      content: infoWindowTemplate
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  };

  render() {
    return (
      <div className="google-map" ref={this.mapRef}>
        LOADING MAP...
      </div>
    );
  };
}

export default GoogleMap;
