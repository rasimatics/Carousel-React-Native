import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function CardDetails() {

    return (
        <View style={styles.container}>
          <TouchableHighlight><Text>{}</Text></TouchableHighlight>
        </View >
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:50,
    },
});
