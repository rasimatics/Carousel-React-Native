import React, { useState } from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ModalTester() {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<View style={{ flex: 1 }}>

				<Icon style={styles.menu} name="menu" size={25} onPress={toggleModal} color={'#fff'} />
			

			<Modal onBackdropPress={toggleModal} style={styles.modal} isVisible={isModalVisible}>
				<ScrollView horizontal>
					{[...Array(10)].map((_, index) => (
						<View key={`${index}`} style={styles.listitem}>
							<Text>{`List Item ${index + 1}`}</Text>
						</View>
					))}
				</ScrollView>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	menu: {
		padding: 10,
		backgroundColor: '#21254D',
		borderRadius: 30,
		width:45,
		position:'absolute',
		bottom:15,
		right:15,
	},
	modal: {
		width: '100%',
		height: 150,
		margin: 0,
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#fff',
	},
	listitem: {
		padding: 10,
		margin: 10,
		width: 130,
		backgroundColor: '#9b9b9b',
	}
});
