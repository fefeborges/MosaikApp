import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { Login, error, setCadastro } = useContext(AuthContext);

    function RealizaLogin() {
       Login( email, senha );
    }
    function Cadastrar() {
        setCadastro( true );
    }

    return (
        <ScrollView contentContainerStyle={css.container}>
            <View style={css.header}></View>
            <View style={css.boxlogo}>
                <Image source={require("../../assets/login1.png")} style={css.logo} />
            </View>
            <View style={css.caixaemail}>
                <Text style={css.text} >Email:</Text>
            </View>
            <TextInput
                inputMode="email"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
                placeholderTextColor="white"
            />
            <View style={css.caixasenha}>
                <Text style={css.text} >Senha:</Text>
            </View>
            <TextInput
                inputMode="text"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
                placeholderTextColor="white"
            />
            <View style={css.forgot}>
                <Text style={css.forgotText}>Esqueceu a senha?</Text>
            </View>
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>Login</Text>
            </TouchableOpacity>
            <View style={css.boxCadastro}>
                <Text style={css.TextCadastro}>Não é cadastrado?</Text>

                <TouchableOpacity style={css.btnCadastro} onPress={Cadastrar}>
                    <Text style={css.TextCadastrobtn}>Cadastrar!</Text>
                </TouchableOpacity>
            </View>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                </View>
            }
            <View style={css.footer}></View>
        </ScrollView>
        
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",    
        alignItems: "center",
        backgroundColor: " #F4F4F4"
    },
    header: {
        width: "100%",
        height: 100,
        backgroundColor: "#ACC5A0",
    },
    boxlogo:{
        width: "100%",
        height: 200,
        alignItems:"center",
        marginTop:30,
    },
    logo: {
        width: "38%",
        height: 200,
        resizeMode: "contain",
        marginLeft:5
    },
    input: {
        width: "75%",
        height: 50,
        borderRadius: 5,
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#E4EDDF",
        color: "white"
    },
    forgot: {
        width: "90%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#465340",
        fontSize: 15,
        marginRight:30,
        fontWeight: "bold"
    },
    btnLogin: {
        width: "75%",
        height: 50,
        borderRadius: 5,
        marginTop: 45,
        backgroundColor: "#ACC5A0"
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    boxCadastro:{
        width:"100%",
        flexDirection:"row"

    },
    TextCadastro: {
       color:"#465340",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        marginLeft:55
    },
    TextCadastrobtn:{
        color:"#465340",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        marginLeft:108,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    },
    caixaemail:{
        width: "90%",
        alignItems: "flex-start",
        marginLeft: 65,
        marginBottom:5,
    },
    caixasenha:{
        width: "90%",
        alignItems: "flex-start",
        marginLeft: 65,
        marginBottom:5,
        marginTop:20
    },
    text:{
        color:"black",
        fontSize:15
    },
    footer: {
        width: "100%",
        height: 70,
        backgroundColor: "#ACC5A0",
        position: 'absolute',
        bottom:0
    },
});