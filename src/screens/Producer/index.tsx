import React from 'react'
import { useRoute } from '@react-navigation/native'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Cesta from './components/Cesta';
import Topo from '../../components/Topo';
import useTexts from '../../hooks/useTexts';
const ImageCesta = require('../../assets/topo.png');

export default function Producer() {
    const route = useRoute();
    const { tituloProdutor, tituloCestas }: any = useTexts();
    const { name, image, cestas } = route.params as any;

    const TopoLista = () => {
        return <>
            <Topo title={tituloProdutor} height={150} />
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={image} style={styles.produtorImage} />
                    <Text style={styles.produtor}>{name}</Text>
                </View>

                <View style={styles.cartTitleContainer}>
                    <Text style={styles.cestas}> {tituloCestas} </Text>
                    <Icon name='basket-outline' size={24} color={'#464646'} />
                </View>
            </View>
        </>;
    }

    return <FlatList
        ListHeaderComponent={TopoLista}
        data={cestas}
        renderItem={({ item }) => <Cesta {...item} producer={{ name, image }} />}
        style={styles.list}
    />
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ffffff',
    },
    container: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 18,
        lineHeight: 26,
        fontWeight: 'bold',
        letterSpacing: 1

    },
    cartTitleContainer: {
        marginTop: 32,
        flex: 1 ,
        width: '100%',
        flexDirection: 'row'
    }
});

