import React, { useState } from 'react';
import { StyleSheet, FlatList, Dimensions, View } from 'react-native';
import Card from './Card'

export default function Home(props) {

  const { navigation } = props

  const [selected, setSelected] = useState(0)
  const { width, height } = Dimensions.get('window');
  const sources = [
    require('../images/1.jpeg'),
    require('../images/2.jpeg'),
    require('../images/3.jpeg'),
    require('../images/4.jpeg'),
    require('../images/5.jpeg'),
  ]

  const changePosition = (e) => {
    const offset = e.nativeEvent.contentOffset.x
    const index = Math.ceil(offset / width)
    setSelected(index)
  };



  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={changePosition}
        onMomentumScrollBegin={changePosition}
        data={sources}
        renderItem={({ item,index }) => {
          return <Card key={index} id={index} item={item} width={width} height={height} navigation={navigation}/>
        }}
      />

      <View style={styles.balls}>
        {sources.map((source, index) =>
          <View style={[styles.ball, index === selected && { opacity: 0.3, width: 13, height: 13 }]}></View>)
        }
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balls: {
    position: "absolute",
    flexDirection: 'row',
    bottom: '10%',
    alignItems: 'center',
  },
  ball: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 5,
  }
});
