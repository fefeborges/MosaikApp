import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header'

export default function Perfil() {

    const [farm, setFarm] = useState(false);
    const [ajuda, setAjuda] = useState(false);
    return (
        <View style={css.container}>
            <Header />
            <View style={css.imagem}>
                <Image source={require("../../assets/perfil (2).png")} />
            </View>

            <View style={css.mconta}>
                <MaterialCommunityIcons style={css.icones} name="account-circle-outline" color="black" /><Text>Usuário</Text>
            </View>

            <View style={css.mconta}>
                <MaterialCommunityIcons style={css.icones} name="ticket-percent-outline" color="black" /><Text>Meus Cupons</Text>
            </View>

            <View style={css.mconta}>
                <MaterialCommunityIcons style={css.icones} name="bag-personal-outline" color="black" /><Text>Meus Pedidos</Text>
            </View>

            <View style={css.mconta}>
                <MaterialCommunityIcons style={css.icones} name="cog-outline" color="black" /><Text>Configurações</Text>
            </View>

            <Pressable style={css.mcontaDistante} onPress={() => setFarm((current) => !current)} >
                <Text style={css.contanegrito}>FARM</Text><MaterialCommunityIcons style={css.icones2} name={(farm) ? "chevron-down" : "chevron-right"} size={23} color="black" />
            </Pressable>
            {farm &&
                <>
                    <View style={css.mconta}>
                        <MaterialCommunityIcons style={css.icones} name="fruit-cherries" size={23} color="black" /><Text>Quem somos</Text>
                    </View>

                    <View style={css.mconta}>
                        <MaterialCommunityIcons style={css.icones} name="shopping-outline" size={23} color="black" /><Text>Produtos</Text>
                    </View>
                </>
            }
            <Pressable style={css.mcontaDistante} onPress={() => setAjuda((current) => !current)}>
                <Text style={css.contanegrito}>AJUDA</Text><MaterialCommunityIcons style={css.icones2} name={(ajuda) ? "chevron-down" : "chevron-right"} size={23} color="black" />
            </Pressable>

            {ajuda &&

                <View style={css.mconta}>
                    <MaterialCommunityIcons style={css.icones} name="chat-question-outline" size={23} color="black" /><Text>Perguntas frequentes</Text>
                </View>
            }
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "90%",
        display: "flex",
        alignSelf: "center",
    },
    imagem: {
        width: "95%",
        height: 250,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 10,
    },
    mconta: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20
    },
    mcontaDistante: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    contanegrito: {
        fontWeight: "bold",
        fontSize: 17,
    },
    icones: {
        fontSize: 18,
        marginRight: 10

    },
    icones2: {
        fontSize: 18,
    }
})