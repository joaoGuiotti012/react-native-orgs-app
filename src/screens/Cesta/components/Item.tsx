import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import Texto from '../../../components/Texto';


export default function Item({ item: { name, image } }: any) {
  return <View style={estilos.item}>
    <Image source={image} style={estilos.image} />
    <Texto style={estilos.name}>{name}</Texto>
  </View>
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
  },
});