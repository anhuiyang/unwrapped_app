import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props){
    super();
    this.state ={
      // coordinatesObject: props.currentLocation,
      markers: props.markers
    }
  }
  render() {
    return (
      <Map google={this.props.google} 
      style={{width: '97.5%', height: '100%', position: 'static'}}
      zoom={12}>
        <Marker onClick={this.onMarkerClick}
        name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeYKixkdIQmSfClYn_Djv3dUep9GIFUHE'
})(MapContainer);