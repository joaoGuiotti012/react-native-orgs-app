import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import useProducers from '../../hooks/useProducers';
import useTexts from '../../hooks/useTexts';

import Producer from './componentes/Producer';
import Topo from './componentes/Topo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Produtores({ melhoresProdutores = true }: any) {

  const route: any = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const lista = useProducers(melhoresProdutores);
  const { tituloProdutores, mensagemCompra }: any = useTexts();

  const [showMessage, setShowMessage] = useState(false);

  const nameBuy: any = route.params?.buy?.name;
  const timeStampBuy: any = route.params?.buy?.timestamp;

  const message = mensagemCompra?.replace('$NOME', nameBuy)

  useEffect(() => {
    setShowMessage(!!nameBuy);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }, [timeStampBuy])


  const MessageBuy = () => showMessage && <Text style={styles.messageBuy}> {message} </Text>;


  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      {MessageBuy()}
      <Text style={styles.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Producer
        {...item}
        aoPressionar={() =>
          navigation.navigate('Producer', item)
        }
      />
    }
    keyExtractor={({ id }) => id}
    ListHeaderComponent={TopoLista}
    style={styles.lista} />
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  messageBuy: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26
  }
})
