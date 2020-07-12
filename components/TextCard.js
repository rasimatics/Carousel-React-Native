import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function Card({ index, item }) {
    const { width, height } = Dimensions.get('window')
    return (
        <View key={index}>
            <View  style={{width:width,height:height}}>
                <Text style={{color:'#000',fontSize:30}}>{item}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // mainitems:{
    // 	backgroundColor:'red',
    // 	padding:50,
    // 	alignSelf:'center'
    // },
});
