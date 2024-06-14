import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Produto({ titulo, imagem, preco }) {
    return (
        <View style={css.container}>
            <View style={css.boximagem}>
                <Image source={{ uri: imagem }} style={css.imagem}/>
            </View>
            <View style={css.info}>
                <View style={css.boxtitulo}>
                    <Text style={css.titulo}>{titulo}</Text>
                    <Text style={css.preco}>R${preco}</Text>
                </View>
                <TouchableOpacity style={css.boxcarrinho}>
                    <MaterialCommunityIcons style={css.carrinho} name="bag-personal-outline" color={'black'} size={35} />
                </TouchableOpacity> 
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 300,
        backgroundColor: '#FFFFFF'
    },
    boxtitulo: {
        width: "65%",
        display: "flex",
        textAlign: 'center',
        alignItems: "center",
        paddingLeft: 5,
    },
    titulo: {
        fontSize: 14,
        alignSelf: 'flex-start',
        marginLeft: 7,
    },
    preco: {
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft: 7,
        color: '#465340',
        fontWeight: 'bold'
    },
    boxcarrinho: {
        height: 40,
        width: "25%",
        width: 45,
        backgroundColor: "#ACC5A0",
        borderRadius: 50,
        justifyContent: 'center',
        marginRight: 10,
    },
    carrinho: {
        alignSelf: 'center',
        fontSize: 30,
    },
    info: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    imagem: {
        height: 200,
        width: 160,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 15
    }
})