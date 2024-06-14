import React, { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import { AuthContext } from '../Context/AuthContext';

export default function Cadastro() {

    const { setCadastro, setLogado } = useContext(AuthContext);

    const [nome, setNome] = useState("");
    const [contato, setContato] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Cadastrar() {
        if (nome != "" && telefone != "" && email != "" && senha != "")
            setCadastro(false);
        setLogado(false);
    }
    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }

    return (
        <ScrollView contentContainerStyle={css.container}>
            <View style={css.header}></View>
            <View style={css.info} >
                <TouchableOpacity onPress={Voltar} style={css.Voltar}>
                    <MaterialCommunityIcons name="arrow-left" size={30} />
                </TouchableOpacity>
                <Image source={require("../../assets/cadastro1.png")} style={css.logo} />
            </View>
            <View style={css.box}>
                <View style={css.caixa}>
                    <Text style={css.text} >Nome:</Text>
                </View>
                <TextInput style={css.input}
                    onChangeText={(digitado) => setNome(digitado)}
                    value={nome} TextInput={nome}
                />
                <View style={css.caixa}>
                    <Text style={css.text} >Contato:</Text>
                </View>
                <TextInput style={css.input}
                    onChangeText={(digitado) => setContato(digitado)}
                    value={contato} TextInput={contato}
                />
                <View style={css.caixa}>
                    <Text style={css.text} >Cpf:</Text>
                </View>
                <TextInput style={css.input}
                    onChangeText={(digitado) => setCpf(digitado)}
                    value={cpf} TextInput={cpf}
                />                  
                <View style={css.caixa}>
                    <Text style={css.text} >Email:</Text>
                </View>
                <TextInput style={css.input}
                    onChangeText={(digitado) => setCep(digitado)}
                    value={email} TextInput={email}
                />
                <View style={css.caixa}>
                    <Text style={css.text} >Senha:</Text>
                </View>
                <TextInput style={css.input}
                    secureTextEntry={true}
                />
                <View style={css.caixa}>
                    <Text style={css.text} >Confirmar Senha:</Text>
                </View>
                <TextInput style={css.input}
                    onChangeText={(digitado) => setSenha(digitado)}
                    value={senha} TextInput={senha}
                    secureTextEntry={true}
                />                    
                <View style={css.box2}>                      
                <TouchableOpacity style={css.btn} onPress={Cadastrar}>
                    <Text style={css.texto}>Cadastrar</Text>
                </TouchableOpacity>
                </View>          
            </View>             
            <View style={css.footer}></View> 
        </ScrollView>
    )
}

const css = StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: " #F4F4F4",
        alignItems: "center",      
    },
    titulo: {
        fontWeight: "500",
        fontSize: 20,
        color: "white",
        marginTop: 100,
        marginLeft: 10,
        marginBottom: 35
    },
    input: {
        width: "75%",
        backgroundColor: "#E4EDDF",
        paddingLeft: 5,
        height: 50,
        borderColor: "#5C0505",
        borderRadius: 5,
        marginTop: 2
    },
    btn: {    
        width: "75%",
        backgroundColor: "#ACC5A0",
        height: 50,
        borderRadius: 5,      
    },
    texto: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        top: 10
    },
    box: {
        alignItems: "center",
        width: "100%",
        height: 230,
        marginTop: 5,
    },
    caixa: {
        width: "85%",
        alignItems: "flex-start",
        marginLeft: 45,
        marginTop:5
    },
    text: {
        color: "black",
        fontSize: 15
    },
    logo: {
        width: "75%",
        height: 130,
        resizeMode: "contain",
        marginTop: 15,
        marginLeft: 5
    },
    footer: {
        width: "100%",
        height: 70,
        backgroundColor: "#ACC5A0",
        position: "absolute",
        bottom: 0
    },
    box2: {
        width:"100%",
        marginTop:20,  
        alignItems:"center"
    },
    header: {
        width: "100%",
        height: 100,
        backgroundColor: "#ACC5A0",
    },
    Voltar: {
        marginLeft: 8,
        width: "10%",
        marginTop: 25
    },
    info: {
        flexDirection: "row",
        width: "100%"
    }
})