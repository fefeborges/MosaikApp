import { Image, StyleSheet, View, Text, Pressable } from 'react-native';


export default function Header({ texto, cor, }) {

    return (
        <View style={[css.header, { backgroundColor: (cor) ? cor : "rgba(172, 197, 160, 1)" }]}>
            {!texto && <Image style={css.logo} source={require("../../assets/logofarm.png")} />}
        </View>
    )
}

const css = StyleSheet.create({
    header: {
        width: "100%",
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: 20,
        position: "absolute",  
        top:0,      
    },
    logo: {
        width: 100,
        height: 80,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 15
    },
})