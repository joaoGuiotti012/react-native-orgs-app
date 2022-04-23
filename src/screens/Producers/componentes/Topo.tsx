import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useTexts from '../../../hooks/useTexts';

const logo = require('../../../assets/logo.png');

export default function Topo({ melhoresProdutores }: any) {
  const { boasVindas, legenda, legendaMelhoresProdutores }: any = useTexts();

  return <>
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{melhoresProdutores ? "" : boasVindas}</Text>
        <Text style={estilos.legenda}>{melhoresProdutores ? legendaMelhoresProdutores : legenda}</Text>
      </View>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    padding: 16,
    backgroundColor: '#F6F6F6'
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
  },
  compraMensagem: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  }
});
