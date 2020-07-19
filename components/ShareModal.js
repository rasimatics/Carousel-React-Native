import React  from 'react';
import {  StyleSheet,TouchableOpacity,Text } from 'react-native';
import Modal from 'react-native-modal';



export default function ShareModal({ isModalVisible, toggleModal }) {

    return (
        <Modal onBackdropPress={()=>toggleModal('share')} style={styles.modal} isVisible={isModalVisible}>
            <TouchableOpacity style={styles.shareButton}><Text></Text></TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        position:'absolute',
        width:'75%',
        height:'15%',
        top:'40%',
        padding:10,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf: 'center',
        backgroundColor: '#21254D',
        borderRadius:3,
    },
    
    shareButton:{
        backgroundColor:"yellow",
        width:'100%',
        height:'60%',
        position:'absolute',
        top:12,
        borderRadius:3,
    }
});
