import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Header({ texto, cor, }) {

    return (
        <View>
            <LinearGradient
                colors={['#6A7E60', '#D8F2CD']}
                style={css.header}
                start={{ x: 0, y: 1 }}
                end={{ x: 1.2, y: 0.5 }}>
            </LinearGradient>
            {!texto && <Image style={css.logo} source={require("../../assets/logofarm.png")} />}
        </View>
    )
}

const css = StyleSheet.create({
    header: {
        width: "100%",
        height: 85,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: 20,
        position: "absolute",  
        top:0,      
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 5
    },
})