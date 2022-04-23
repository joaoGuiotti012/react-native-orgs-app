import React, { useMemo } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Stars from '../../../components/Stars/Stars';

const distanceEmMetros = (distance: any) => {
    return `${distance}m`;
}

export default function Producer({ name, image, distance, stars, aoPressionar }: any) {
    const distanceTexto = useMemo(
        () => distanceEmMetros(distance), 
        [distance]
    );

    return <TouchableOpacity 
            style={estilos.cartao}
            onPress={aoPressionar}
        >
        <Image source={image} style={estilos.image} accessibilityLabel={name} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.name}>{ name }</Text>
                <Stars 
                    quantidade={stars}
                />
            </View>
            <Text style={estilos.distance}>{ distanceTexto }</Text>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",

        // Android
        elevation: 4,

        // iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    },
});
