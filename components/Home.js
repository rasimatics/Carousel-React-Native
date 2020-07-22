import React, { useState } from 'react';
import { StyleSheet, FlatList, Dimensions, View } from 'react-native';
import Card from './Card'

export default function Home(props) {

  const { navigation } = props

  const [selected, setSelected] = useState(0)
  const { width, height } = Dimensions.get('window');

  const sources = [
    {"id":"1", "image":require('../images/1.jpeg')},
    {"id":"2", "image":require('../images/2.jpeg')},
    {"id":"3", "image":require('../images/3.jpeg')},
    {"id":"4", "image":require('../images/4.jpeg')},
    {"id":"5", "image":require('../images/5.jpeg')},
  ]

  const changePosition = (e) => {
    const offset = e.nativeEvent.contentOffset.x
    const index = Math.ceil(offset / width)
    setSelected(index)
  };


  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1}}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={changePosition}
        onMomentumScrollBegin={changePosition}
        data={sources}
        renderItem={({ item,index }) => {
          return <Card id={index} item={item['image']} width={width} height={height} navigation={navigation}/>
        }}
      />

      <View style={styles.balls}>
        {sources.map((source, index) =>
          <View style={[styles.ball, index === selected && { opacity: 0.3, width: 8, height: 8 }]}></View>)
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
    width: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 5,
  }
});
