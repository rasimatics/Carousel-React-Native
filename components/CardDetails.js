import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity,TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import TextCard from './TextCard'
import ShareModal from './ShareModal';
import IconA from 'react-native-vector-icons/Entypo'
import IconB from 'react-native-vector-icons/MaterialIcons'
import SettingsModal from './SettingsModal';


export default function CardDetails(props) {

	const { navigation } = props

	const [isModalVisible, setModalVisible] = useState(false);
	const [isModalVisible2, setModalVisible2] = useState(false);
	const [isModalVisible3, setModalVisible3] = useState(false);

	// setting modal state
	const [arabic, setArabic] = useState(16)
	const [trans, setTrans] = useState(16)
	const [translate, setTranslate] = useState(16)

	// datas
	const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


	// menu button bottom modal
	const toggleModal = (type => {
		if (type == 'menu')
			setModalVisible(!isModalVisible);
		else if (type == 'share')
			setModalVisible2(!isModalVisible2);
		else
			setModalVisible3(!isModalVisible3);

	})

	const changeSize = (name, type) => {
		if (name == 'arabic') {
			if (type == 'inc') {
				setArabic((prev) => prev + 2)
			}
			else
				setArabic((prev) => prev - 2)
		}

		else if (name == 'trans') {
			if (type == 'inc') {
				setTrans((prev) => prev + 2)
			}
			else
				setTrans((prev) => prev - 2)
		}
		// name == 'translate'
		else {
			if (type == 'inc') {
				setTranslate((prev) => prev + 2)
			}
			else
				setTranslate((prev) => prev - 2)
		}
	}

	let flatlist = useRef(null)

	const scroll = (index) => {
		flatlist.scrollToIndex({ animated: true, index: index })
		setModalVisible(false)
	}

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={{ display: 'flex', flexDirection: 'row' }}>
					<IconA name="share" style={styles.icon} size={25} color={'#fff'} onPress={() => toggleModal('share')} />
					<IconB name="settings" style={styles.icon} size={25} color={'#fff'} onPress={() => toggleModal('settings')} />
				</View>
			)
		})
	})

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				ref={(ref) => flatlist = ref}
				showsHorizontalScrollIndicator={false}
				horizontal
				pagingEnabled
				data={data}
				renderItem={({ item, index }) => {
					return (<TextCard key={index} item={item} index={index} />)
				}}
			/>

			<TouchableHighlight style={styles.menu} onPress={() => toggleModal('menu')}>
				<Icon name="menu" size={27} color={'#fff'} />
			</TouchableHighlight>

			<Modal onBackdropPress={() => toggleModal('menu')} style={styles.modal} isVisible={isModalVisible}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{data.map((item, index) => (

						<TouchableOpacity key={index} onPress={() => scroll(index)} style={styles.listitem} >
							<Text>{item}</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</Modal>

			<ShareModal isModalVisible={isModalVisible2} toggleModal={toggleModal} />
			<SettingsModal isModalVisible={isModalVisible3} toggleModal={toggleModal} changeSize={changeSize} arabic={arabic} trans={trans} translate={translate} />
		</View>
	);
}

const styles = StyleSheet.create({
	menu: {
		position: 'absolute',
		bottom: 15,
		right: 15,
		padding: 15,
		backgroundColor: '#21254D',
		borderRadius: 30,
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
		height: 130,
		width: 130,
		backgroundColor: '#9b9b9b',
	},
	icon: {
		padding: 15,
	}
});
