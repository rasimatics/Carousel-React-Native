import React from 'react';
import { StyleSheet, Image, View, Text, ImageBackground, TouchableHighlight } from 'react-native';

export default function Card({ item, width, height, id }) {
    return (
        <View>
            <TouchableHighlight>
                    <ImageBackground
                        source={item}
                        resizeMode="cover"
                        blurRadius={3}
                        style={{ width: width, height: height }} >
                        <Image source={item} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>{id+1}</Text>
                        </View>
                    </ImageBackground>
            </TouchableHighlight>
        </View >
    );
}

const styles = StyleSheet.create({
    image: {
        width: '80%',
        height: "40%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "35%",
        borderRadius:5,
    },
    textContainer: {
        backgroundColor:'yellow',
        padding:10,
        width: '80%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:10,
        borderTopEndRadius:0,
        borderTopStartRadius:0,
    },
    text:{
        fontSize:30,
        textAlign:'center',
    }
});
