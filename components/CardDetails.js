import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function CardDetails(props) {
    return (
        <View style={styles.container}>
          <TouchableHighlight><Text>{props.route.params.id}</Text></TouchableHighlight>
        </View >
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:50,
    },
});
