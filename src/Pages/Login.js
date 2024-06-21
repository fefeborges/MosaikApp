import { View, Text, TextInput,Keyboard, TouchableOpacity, StyleSheet, ScrollView, Image, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cadastrado, setCadastrado] = useState("");
    const [campo, setCampo] = useState("");
    const { Login, error, setCadastro, incorreto, setIncorreto } = useContext(AuthContext);

    const handleSubmit = () => {
        Keyboard.dismiss();
        if (!email || !senha) {
            setCampo(true);
            return;
        }        
    };

    const alertCadastrado = () => {
        setCadastrado(false);
    };

    const alertCampo = () => {
        setCampo(false);
    };

    const alertIncorreto = () => {
        setIncorreto(false);
    };

    function RealizaLogin() {
        Login(email, senha);    
    }
    function Cadastrar() {
        setCadastro(true);
    }

    return (
        <ScrollView contentContainerStyle={css.container}>
             <LinearGradient
                    colors={['#6A7E60', '#D8F2CD']}
                    style={css.header}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1.2, y: 0.5 }}>
                </LinearGradient>
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
            <TouchableOpacity style={css.btnLogin} >
                <Text style={css.btnLoginText} onPress={() => { RealizaLogin() , handleSubmit()}}>Login</Text>               
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={campo}
                onRequestClose={alertCampo}>
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                        <Text style={css.modalTitle}>Preencha todos os campos!</Text>
                        <Text style={css.modalMessage}>Tente Novamente</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertCampo}>
                            <Text style={css.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={incorreto}
                onRequestClose={alertIncorreto}>
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                        <Text style={css.modalTitle}>Senha ou email incorreto!</Text>
                        <Text style={css.modalMessage}>Tente Novamente</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertIncorreto}>
                            <Text style={css.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={cadastrado}
                onRequestClose={alertCadastrado}>
                <View style={css.modalContainer}>
                    <View style={css.modalContent}>
                        <Text style={css.modalTitle}>Cadastro realizado com sucesso!</Text>
                        <Text style={css.modalMessage}>Seja bem-vindo(a)</Text>
                        <TouchableOpacity style={css.modalButton} onPress={alertCadastrado}>
                            <Text style={css.modalButtonText} >OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        height: 85,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: 20,
        position: "absolute",  
        top:0,      
    },
    boxlogo: {
        width: "100%",
        height: 200,
        alignItems: "center",
        marginTop: 90,
    },
    logo: {
        width: "38%",
        height: 200,
        marginTop: 20,
        resizeMode: "contain",
        marginLeft: 5
    },
    input: {
        width: "75%",
        height: 50,
        borderRadius: 5,
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#E4EDDF",
        color: "black"
    },
    forgot: {
        width: "90%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#465340",
        fontSize: 15,
        marginRight: 30,
        fontWeight: "bold"
    },
    btnLogin: {
        width: "75%",
        height: 50,
        borderRadius: 5,
        marginTop: 45,
        backgroundColor: "#7F9375"
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    boxCadastro: {
        width: "100%",
        flexDirection: "row"

    },
    TextCadastro: {
        color: "#465340",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        marginLeft: 55
    },
    TextCadastrobtn: {
        color: "#465340",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        marginLeft: 108,
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
    caixaemail: {
        width: "90%",
        alignItems: "flex-start",
        marginLeft: 65,
        marginBottom: 5,
    },
    caixasenha: {
        width: "90%",
        alignItems: "flex-start",
        marginLeft: 65,
        marginBottom: 5,
        marginTop: 20
    },
    text: {
        color: "black",
        fontSize: 15
    },
    footer: {
        width: "100%",
        height: 70,
        backgroundColor: "#6C7C64",
        position: 'absolute',
        bottom: 0
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: 300,
        height: 200,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    modalMessage: {
        fontSize: 18,
        marginTop: 15
    },
    modalButtonText: {
        color: "#ACC5A0",
        textAlign: 'right',
        fontSize: 20,
        marginTop: 30
    }
});