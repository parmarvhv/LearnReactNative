import React, { Component } from 'react';
import {
TextInput,
Button,
StyleSheet,
View
} from 'react-native';

// export default class PlaceInput extends Component<{}> {
//     state = {
//         placeName: '',
//         places: []
//       }

//       handlePlaceSubmitted = () => {
//         if (this.state.placeName.trim() === '') {
//           return;
//         }
//         this.setState(prevState => {
//           return {
//             places: prevState.places.concat(prevState.placeName)
//           };
//         });
//       };

//       handlePlaceNameChanged = value => {
//         this.setState({
//           placeName: value
//         });
//       }
    
//       render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.inputContainer}>
//                     <TextInput 
//                         style={styles.placeInput}
//                         placeholder='Awesome place'
//                         value={this.state.placeName} 
//                         onChangeText={this.handlePlaceNameChanged}
//                     />
//                     <Button 
//                         title='Add'
//                         style={styles.placeButton}
//                         onPress={this.handlePlaceSubmitted}
//                     />
//                 </View>
//             </View>
//         );
//       }
// }

const placeInput = (props) => (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.placeInput}
                placeholder='Awesome place'
                value={props.placeName} 
                onChangeText={props.handlePlaceNameChanged}
            />
            <Button 
                title='Add'
                style={styles.placeButton}
                onPress={props.handlePlaceSubmitted}
            />
        </View>
    </View>
);

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
    },
    placeButton: {
      width: '30%'
    },
    listContainer: {
      width: '100%'
    },
  });

export default placeInput;
