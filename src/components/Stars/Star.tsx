import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

const grayStarIcon: any = require('../../assets/estrelaCinza.png');
const starIcon: any = require('../../assets/estrela.png');

export default function Star({
    onPress,
    disabled,
    preenchida,
    grande = false,
}: any) {

    const styles = stylesFunc(grande);

    const getImage = () => {
        if (preenchida)
            return starIcon;
        return grayStarIcon;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
        >
            <Image source={getImage()} style={styles.star} />
        </TouchableOpacity>
    )
};


const stylesFunc = (grande: boolean) => StyleSheet.create({
    star: {
        width: grande ? 36 : 14,
        height: grande ? 36 : 14,
        marginRight: 2
    }
})