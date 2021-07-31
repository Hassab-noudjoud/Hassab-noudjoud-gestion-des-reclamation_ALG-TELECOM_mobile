import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDOtPgM1PPsS3ZNZEV9KYdBu0ktA77GaTE';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation'; //to use geolocalisation
export default class LocaliserPc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.location.state.latitude,
      longitude:this.props.location.state.longitude,
      latitudeDes: 36.6499974 ,
      longitudeDes: 3.1499994,
      initialPosition:{
      latitude: this.props.location.state.latitude,
      longitude:this.props.location.state.longitude,
      latitudeDelta:0.09, //height
      longitudeDelta:0.035 //width
      }
    };
  }
  ///////////////////////////
  /*-----------les fonctions-------------*/
  showIdPc = () => {
    Alert.alert(
      '' +
        this.props.location.state.tete +
        '-' +
        this.props.location.state.groupe +
        '-' +
        this.props.location.state.amorce,
      [
        {
          text: 'Ok',
        },
        {
          text: 'Voir les détails du dérangement',
          onPress: () => {
            this.props.history.push('/InfoDerang', {
              titre: this.props.location.state.titre,
            });
          },
        },
      ],
    );
  };
 
  /*----------compountDidMount--------------------- */
  componentDidMount = () => {
    console.log("in localiser"+this.state.latitude)
    //this.requestLocationPermission();
    // fetch(
    //   'http://172.20.10.11:5000/pc/localiserPc/mob/' +
    //     this.props.location.state.tete +
    //     '/' +
    //     this.props.location.state.groupe +
    //     '/' +
    //     this.props.location.state.amorce,
    // )
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     console.log(responseData);
    //     this.setState({
    //       latitudeDes: responseData.latitude,
    //       longitudeDes: responseData.longitude,
    //     });
    //     console.log('coords:');
    //     console.log(this.state.latitudeDes);
    //     console.log(this.state.longitudeDes);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  //////////////////////

  render() {
    console.log("serc alt"+this.state.initialPosition.latitude)
    console.log("serc long"+this.state.initialPosition.longitude)
    console.log("dst alt"+this.state.latitudeDes)
    console.log("dst long"+this.state.longitudeDes)
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.props.history.push('/InfoDerang', {
                titre: this.props.location.state.titre,
              });
            }}>
            <Icon name="chevron-left" color="white" size={24} />
          </TouchableOpacity>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          ref={(map) => (this._map = map)}
          initialRegion={this.state.initialPosition}
        >
          <Marker
            coordinate={{
              latitude: this.state.initialPosition.latitude,
              longitude: this.state.initialPosition.longitude,
            }}
          />

          <Marker
            coordinate={{
              latitude: this.state.latitudeDes,
              longitude: this.state.longitudeDes,
            }}
          />
          <MapViewDirections
            origin={{
              latitude: this.state.initialPosition.latitude,
              longitude: this.state.initialPosition.longitude,
            }}
            destination={{
              latitude: this.state.latitudeDes,
              longitude: this.state.longitudeDes,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            mode="DRIVING"
          />
        </MapView>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  header: {
    backgroundColor: '#27B8B8',
    elevation: 12,
    flexDirection: 'row',
    padding: '6%',

    justifyContent: 'space-between',
  },
});
