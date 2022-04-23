import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Texto from '../../components/Texto';
import Topo from '../../components/Topo';
import useTexts from '../../hooks/useTexts';
import Detalhes from './components/Details';
import Item from './components/Item';
const ImgHeaderCesta = require('../../assets/topo.png');

export default function Cesta() {
  const route = useRoute();
  const { topoCesta, tituloItens }: any = useTexts();
  const { details, items, producer }: any = route.params;

  return <>
    <FlatList
      data={items}
      renderItem={Item}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={() => {
        return <>
          <Topo title={topoCesta} image={ImgHeaderCesta} height={250} />
          <View style={styles.cesta}>
            <Detalhes {...details} producer={producer} />
            <Texto style={styles.title}>{tituloItens}</Texto>
          </View>
        </>
      }}
      style={styles.lista}
    />
  </>
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
