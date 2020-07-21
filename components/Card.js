import React from 'react';
import { StyleSheet, Image, View, Text, ImageBackground, TouchableHighlight,TouchableOpacity } from 'react-native';

export default function Card({ item, width, height, id, navigation }) {
    const myId = id +1 // for starting from 1
    return (
        <View>
            <TouchableHighlight>
                <ImageBackground
                    source={item}
                    resizeMode="cover"
                    blurRadius={3}
                    style={{ width: width, height: height }} >
                    <TouchableOpacity onPress={()=>navigation.navigate('CardDetails',{id:myId})}>
                        <Image source={item} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>{myId}</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </TouchableHighlight>
        </View >
    );
}

const styles = StyleSheet.create({
    image: {
        width: '80%',
        height: "50%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "37%",
        borderRadius: 5,
    },
    textContainer: {
        backgroundColor: 'yellow',
        padding: 10,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
    }
});
