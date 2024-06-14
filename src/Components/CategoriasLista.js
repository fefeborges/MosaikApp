import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CategoriasLista({imagem, nome}) {
    return(
        <View style={css.container}>
            <Image source={imagem} style={css.imagem}/>
            <Text style={css.nome}>{nome}</Text>
        </View>
    )
}
const css = StyleSheet.create({
    container:{
        textAlign:"center",
    },
    nome: {
        color: "black",
        textAlign:"center",
    },
    imagem: {
        width: 80,
        height: 80,
        resizeMode: "cover",
        borderRadius: 100
      },
})