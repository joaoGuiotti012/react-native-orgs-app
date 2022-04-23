import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Texto from './Texto';
const ALTURA_PADRAO = 270;
const ImagemTopo = require('../assets/produtores/farmPicture.jpg');

export default function Topo({ title, image = ImagemTopo, height = ALTURA_PADRAO }: any) {
  const navigation = useNavigation();
  const styles = funcaoEstilos(height);
  return <>
    <Image
      style={styles.headerImage}
      source={image}
    />
    <LinearGradient colors={['#000', '#fff0']}>
      <View style={styles.header}></View>
      <Texto style={styles.title}>{title}</Texto>
      <TouchableOpacity
        onPress={() => { navigation.goBack() }}
        style={styles.backButton}>
        <Icon
          name="arrow-back-outline"
          color="#FFF"
          size={28}
        />
      </TouchableOpacity>
    </LinearGradient>
  </>;
}

const funcaoEstilos = (height: any) => StyleSheet.create({
  header: {
    width: "100%",
    height: height,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 2,
    color: "#FFF",
    fontWeight: "bold",
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    padding: 17,
  },
  headerImage: {
    position: 'absolute',
    width: '100%',
    height: height
  }
});
