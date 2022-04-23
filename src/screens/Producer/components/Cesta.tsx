import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Texto from '../../../components/Texto';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Cesta({ details, items, producer }: any) {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const { name, image, description, price } = details;

    return <TouchableOpacity
        style={styles.cesta}
        onPress={() => navigation.navigate('Cesta', {
            details,
            items,
            producer
        })}>
        <View style={styles.container}>
            <Image source={image} style={styles.image} />

            <View style={styles.texts}>
                <Texto style={styles.name}>{name}</Texto>
                <Texto style={styles.description}>{description}</Texto>
                <Texto style={styles.price}>{price}</Texto>
            </View>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
    },
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
    },
    image: {
        width: 62,
        height: 62,
        borderRadius: 6,
        borderColor: '#cecece',
        borderWidth: 1
    },
    texts: {
        flex: 1,
        marginLeft: 8,
    },
    name: {
        color: '#464646',
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    description: {
        color: '#A3A3A3',
        fontSize: 14,
        lineHeight: 22,
    },
    price: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        marginTop: 4,
    }
});
