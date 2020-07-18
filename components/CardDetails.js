import React, { useState,useRef } from 'react';
import { Text, View, ScrollView, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import TextCard from './TextCard'


export default function ModalTester() {
	const [isModalVisible, setModalVisible] = useState(false);
	const [data, setData] = useState([1,2,3,4,5,6,7,8,9,10])

	let flatlist = useRef(null)

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const scroll = (index) => {
		flatlist.scrollToIndex({animated:true,index:index})
		setModalVisible(false)
	}

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				ref={(ref)=>flatlist = ref}
				horizontal
				pagingEnabled
				data={data}
				renderItem={({ item, index }) => {
					return (<TextCard key={index} item={item} index={index} />)
				}}
			/>


			<Icon style={styles.menu} name="menu" size={25} onPress={toggleModal} color={'#fff'} />

			<Modal onBackdropPress={toggleModal} style={styles.modal} isVisible={isModalVisible}>
				<ScrollView horizontal>
					{data.map((item, index) => (

						<TouchableOpacity key={index} onPress={()=>scroll(index)} style={styles.listitem} >
							<Text>{item}</Text>
						</TouchableOpacity>
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
		width: 45,
		position: 'absolute',
		bottom: 15,
		right: 15,
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
		height:130,
		width: 130,
		backgroundColor: '#9b9b9b',
	},
});
