import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Star from './Star';

export default function Stars({
    quantidade,
    editavel = true,
    grande = false,
}: any) {

    const [currentStar, setCurrentStar] = useState(quantidade);

    const RenderStars = () => {
        const listStars = [];
        for (let i = 0; i < 5; i++) {
            listStars.push(
                <Star
                    key={i}
                    onPress={() => setCurrentStar(i + 1)}
                    disabled={!editavel}
                    preenchida={i < currentStar}
                    grande={grande}
                />
            );
        }
        return listStars;
    }

    const styles = stylesFunc(grande);

    return <View style={styles.starsContainer}>
        {RenderStars()}
    </View>
};

const stylesFunc = (grande: boolean) => StyleSheet.create({
    starsContainer: {
        flexDirection: 'row'
    },
});

