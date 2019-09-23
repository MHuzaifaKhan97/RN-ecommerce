import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    ToastAndroid
  } from 'react-native';
  
import MapView from 'react-native-maps';
// import Polyline from '@mapbox/polyline';
import ConfigApp from '../config';

var { width, height } = Dimensions.get('window')

export default class LocationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:ConfigApp.lat,
      cordLongitude:ConfigApp.long
    };

    // this.mergeLot = this.mergeLot.bind(this);

  }

  static navigationOptions = {
    title: 'Location of Our Store',
    headerLeft: null
  };

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //      (position) => {
  //        this.setState({
  //          latitude: position.coords.latitude,
  //          longitude: position.coords.longitude,
  //          error: null,
  //        });
  //        this.mergeLot();
  //      },
  //      (error) => this.setState({ error: error.message }),
  //      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
  //    );

  //  }

  // mergeLot(){
  //   if (this.state.latitude != null && this.state.longitude!=null)
  //    {
  //      let concatLot = this.state.latitude +","+this.state.longitude
  //      this.setState({
  //        concat: concatLot
  //      }, () => {
  //        this.getDirections(concatLot, "26.6438,84.9040");
  //      });
  //    }

  //  }

  //  async getDirections(startLoc, destinationLoc) {

  //        try {
  //            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
  //            let respJson = await resp.json();
  //            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
  //            let coords = points.map((point, index) => {
  //                return  {
  //                    latitude : point[0],
  //                    longitude : point[1]
  //                }
  //            })
  //            this.setState({coords: coords})
  //            this.setState({x: "true"})
  //            return coords
  //        } catch(error) {
  //          console.log('masuk fungsi')
  //            this.setState({x: "error"})
  //           //  console.error(error)
  //            return error
  //        }
  //    }

  loaded(){
    // ToastAndroid.show("Loaded", ToastAndroid.SHORT)
  }

  render() {

    return (
      <MapView style={styles.map} initialRegion={{
       latitude:ConfigApp.lat,
       longitude:ConfigApp.long,
       latitudeDelta: 1,
       longitudeDelta: 1
      }} onMapReady={this.loaded} lo showsCompass={true} loadingEnabled={true} liteMode={true} >

      </MapView>
    );
  } 
}
  
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
  },
mapcontainer: {
    flex: 1,
    width: width,
    height: height,
  },
});
  