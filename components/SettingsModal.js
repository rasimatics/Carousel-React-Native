import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo'


export default function SettingsModal({ isModalVisible, toggleModal, arabic, trans, translate, changeSize }) {

    return (
        <Modal onBackdropPress={()=>toggleModal('settings')} style={styles.modal} isVisible={isModalVisible}>
            <View style={styles.container}>
                <Icon name='minus' style={styles.minus} size={35} onPress={()=>changeSize('arabic','dec')}/>
                <View>
                    <Text style={styles.number}>{arabic}</Text>
                    <Text style={styles.innerText}>Ərəb dili</Text>
                </View>
                <Icon name='plus' style={styles.plus} size={35} onPress={()=>changeSize('arabic','inc')}/>
            </View>

            <View style={styles.container}>
                <Icon name='minus' style={styles.minus} size={35} onPress={()=>changeSize('trans','dec')}/>
                <View>
                    <Text style={styles.number}>{trans}</Text>
                    <Text style={styles.innerText}>Transkripsiya</Text>
                </View>
                <Icon name='plus' style={styles.plus} size={35} onPress={()=>changeSize('trans','inc')}/>
            </View>

            <View style={[styles.container,{borderBottomWidth:0}]}>
                <Icon name='minus' style={styles.minus} size={35} onPress={()=>changeSize('translate','dec')}/>
                <View>
                    <Text style={styles.number}>{translate}</Text>
                    <Text style={styles.innerText}>Təccümə</Text>
                </View>
                <Icon name='plus' style={styles.plus} size={35} onPress={()=>changeSize('translate','inc')}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        width: '70%',
        height: '35%',
        top: '12%',
        right: 10,
        margin: 0,
        backgroundColor: '#fff',
    },
    container: {
        position: 'relative',
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#BABABA',
        borderBottomWidth: 1,
    },

    minus: {
        position: 'absolute',
        left: 10,
    },

    plus: {
        position: 'absolute',
        right: 10,
    },

    number: {
        alignSelf: 'center',
    },

    innerText: {
        alignSelf: 'center',
    }
});
