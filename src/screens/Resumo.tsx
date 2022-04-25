import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useTexts from '../hooks/useTexts';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const sucesso = require('../assets/animation/check-green.json');

export default function Resumo() {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const route: any = useRoute();

    const {
        mensagemCompra,
        topoCompra,
        tituloCompra,
        botaoHomeCompra,
        botaoProdutorCompra
    }: any = useTexts();

    const nameBuy: any = route.params?.buy?.name;
    const mensagemCompraCompleta = mensagemCompra?.replace('$NOME', nameBuy);

    return <View style={estilos.tela}>
        <ScrollView>
            <View style={estilos.topo}>
                <TouchableOpacity
                    style={estilos.topoVoltar}
                    onPress={() => navigation.pop()}
                >
                    <Icon
                        name="arrow-back-outline"
                        size={28}
                    />
                </TouchableOpacity>

                <Text style={estilos.topoTexto}>{topoCompra}</Text>
            </View>

            <View style={estilos.conteudo}>
                <SafeAreaView style={estilos.containerAnimation}>
                    <LottieView
                        resizeMode='contain'
                        source={sucesso}
                        style={{ width: 300 }}
                        autoSize
                        autoPlay
                        loop
                    />
                </SafeAreaView>

                <View style={estilos.textos}>
                    <Text style={estilos.titulo}>{tituloCompra}</Text>
                    <Text style={estilos.mensagem}>{mensagemCompraCompleta}</Text>

                    <TouchableOpacity
                        style={estilos.botao}
                        onPress={() =>
                            navigation.navigate('HomeScreen')
                        }
                    >
                        <Text style={estilos.textoBotao}>{botaoHomeCompra}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[estilos.botao, estilos.botaoProdutor]}
                        onPress={() => navigation.pop()}
                    >
                        <Text style={[estilos.textoBotao, estilos.textoBotaoProdutor]}>{botaoProdutorCompra}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>;
}

const estilos = StyleSheet.create({
    containerAnimation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40 
    },
    tela: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    topo: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: 58,

        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        paddingVertical: 16,
        paddingHorizontal: 40,
    },
    topoTexto: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    topoVoltar: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 16,
        top: 17,
    },
    conteudo: {
        zIndex: 0,
        marginBottom: 20
    },
    sucesso: {
        width: "100%",
        height: undefined,
        aspectRatio: 360 / 351,
    },
    textos: {
        paddingHorizontal: 16,
    },
    titulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: "#464646",
    },
    mensagem: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    botaoProdutor: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ECECEC",
    },
    textoBotaoProdutor: {
        color: "#464646",
    },
});
