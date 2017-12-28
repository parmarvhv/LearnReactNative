import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity>
        <View 
            style={styles.list}
            onPress={props.onItemPressed}
        >
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    list: {
        width: '100%',
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#eee'
    },
});

export default listItem;
