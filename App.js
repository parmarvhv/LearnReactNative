/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
} from 'react-native';

//import PlaceInput from './src/components/PlaceInput/PlaceInput';
import ListItem from './src/components/ListItem/ListItem';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component<{}> {

  state = {
    placeName: '',
    places: []
  }

  handlePlaceAdded = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  handlePlaceDeleted = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      };
    });
  }

  handlePlaceSubmitted = () => {
      if (this.state.placeName.trim() === '') {
            return;
        }
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        };
    });
  };

  handlePlaceNameChanged = value => {
    this.setState({
      placeName: value
    });
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <PlaceInput />
  //       <PlaceList 
  //       places={this.state.places}
  //       onPlaceDeleted={this.handlePlaceDeleted}
  //        />
  //     </View>
  //   );
  // }

  render() {
    const placesOutput = this.state.places.map((place, index) => (
        //<Text key={index}>{place}</Text>
        <ListItem 
          key={index}
          placeName={place}
        />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          placeholder='Awesome place'
          value={this.state.placeName} 
          onChangeText={this.handlePlaceNameChanged}
        />
        <Button 
          title='Add'
          style={styles.placeButton}
          onPress={this.handlePlaceSubmitted}
         />
        </View>
        <PlaceList places={this.state.places} /*onPlaceDeleted={this.handlePlaceDeleted}*/ />
        {/* <View style={styles.listContainer}>
            {placesOutput}
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    //borderColor: '#464646',
    //borderWidth: 1
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  },
});
