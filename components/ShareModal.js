import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';



export default function ShareModal({ isModalVisible, toggleModal }) {

    return (
        <Modal onBackdropPress={toggleModal} style={styles.modal} isVisible={isModalVisible}>
            <View><Text style={{color:"#fff"}}>Hello World</Text></View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        position:'absolute',
        width:'80%',
        height:'15%',
        top:'40%',
        padding:10,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf: 'center',
        backgroundColor: '#21254D',
    },
});
