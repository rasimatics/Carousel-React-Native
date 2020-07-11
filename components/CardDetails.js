import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';

export default function CardDetails(props) {
	const panelRef = useRef(null);

	const [isModalVisible, setModalVisible] = useState(false);

	return (

		<View style={{ flex: 1 }}>
			{/* Main content */}

			<TouchableOpacity style={styles.menu} onPress={() => setModalVisible(true)}>
				<Icon name="menu" size={25} color="#fff" />
			</TouchableOpacity>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
	},
	menu: {
		padding: 10,
		backgroundColor: '#21254D',
		width: 45,
		borderRadius: 30,
		position: 'absolute',
		right: 12,
		bottom: 12,
	}
});
