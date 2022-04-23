import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Texto from '../../../components/Texto';
import useTexts from '../../../hooks/useTexts';


export default function Detalhes({ name, producer, description, price }: any) {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { botaoComprar }: any = useTexts();

  return <>
    <Texto style={styles.name}>{name}</Texto>
    <View style={styles.farm}>
      <Image source={producer.image} style={styles.farmImage} />
      <Texto style={styles.farmName}>{producer.name}</Texto>
    </View>
    <Texto style={styles.description}>{description}</Texto>
    <Texto style={styles.price}>{price}</Texto>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Resumo', { buy: { name, timestamp: + new Date() } })}
    >
      <Texto style={styles.textButton}>{botaoComprar}</Texto>
    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
})
