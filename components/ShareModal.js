import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import World from 'react-native-vector-icons/AntDesign'
import Instagram from 'react-native-vector-icons/AntDesign'
import FB from 'react-native-vector-icons/Entypo'



export default function ShareModal({ isModalVisible, toggleModal }) {

    return (
        <Modal onBackdropPress={() => toggleModal('share')} style={styles.modal} isVisible={isModalVisible}>
            <TouchableOpacity style={styles.shareButton}><Text style={styles.text}>Dostlarınla paylaş</Text></TouchableOpacity>
            <View style={styles.container}>
                <World name="earth" size={32} color="#fff" />
                <FB name="facebook" size={32} color="#fff" />
                <Instagram name="instagram" size={32} color="#fff" />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        width: '75%',
        height: '20%',
        top: '40%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#21254D',
        borderRadius: 3,
    },

    shareButton: {
        backgroundColor: "yellow",
        width: '100%',
        height: '50%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        borderRadius: 3,
    },

    text: {
        fontSize: 22,
    },

    container:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        padding:10,
        justifyContent:'space-around',
    }
});
