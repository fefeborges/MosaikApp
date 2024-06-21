import React, { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Image, ScrollView, Modal} from 'react-native'
import { AuthContext } from '../Context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function Cadastro() {

    const { setCadastro, setLogado } = useContext(AuthContext);

    const [nome, setNome] = useState("");
    const [contato, setContato] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cadastrado, setCadastrado] = useState("");
    const [campo, setCampo] = useState("");
    const [incorreto, setIncorreto] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState(false);

    async function CadastrarCliente() {
        if(nome && email && contato && senha && cpf && email) {       
        await fetch('http://10.133.22.24:5251/api/Cliente/InsertCliente', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nomeCliente: nome,
                telefoneCliente : contato,
                emailCliente : email,
                cpfCliente : cpf,                
                senhaCliente: senha
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.clienteId != 0)
                {
                    setCadastrado(true);
                    setNome();
                    setContato();
                    setCpf();
                    setEmail();
                    setSenha();
                    setConfirmarSenha();                                          
                }
            })
            .catch(err => console.log(err))
        }
        else{
            setCampo(true);
        }
    }

    const handleSubmit = () => {
        if (!nome || !email || !contato || !senha || !cpf || !email) {
            setCampo(true);
            return;
        }
        if (senha != confirmarSenha) {
            setIncorreto(true);
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

    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }

    return (

            <ScrollView contentContainerStyle={css.container}>
                <LinearGradient
                    colors={['#6A7E60', '#D8F2CD']}
                    style={css.header}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1.2, y: 0.5 }}>
                </LinearGradient>
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
                        onChangeText={(digitado) => setEmail(digitado)}
                        value={email} TextInput={email}
                    />
                    <View style={css.caixa}>
                        <Text style={css.text} >Senha:</Text>
                    </View>
                    <TextInput style={css.input}
                        onChangeText={(digitado) => setSenha(digitado)}
                        value={senha} TextInput={senha}
                        secureTextEntry={true}
                    />
                    <View style={css.caixa}>
                        <Text style={css.text} >Confirmar Senha:</Text>
                    </View>
                    <TextInput style={css.input}
                        onChangeText={(digitado) => setConfirmarSenha(digitado)}
                        value={confirmarSenha} TextInput={confirmarSenha}
                        secureTextEntry={true}
                    />
                    <View style={css.box2}>
                        <TouchableOpacity style={css.btn} >
                            <Text style={css.texto} onPress={() => { CadastrarCliente(), handleSubmit} }>Cadastrar</Text>                        
                        </TouchableOpacity>
                    </View>
                </View>
                
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
                            <Text style={css.modalTitle}>As senhas não coincidem!</Text>
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
                                <Text style={css.modalButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={css.footer}></View>
            </ScrollView >
            
            
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
        backgroundColor: "#7F9375",
        height: 50,
        borderRadius: 5,
        marginBottom: 15
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
        marginTop: 5,
    },
    caixa: {
        width: "85%",
        alignItems: "flex-start",
        marginLeft: 45,
        marginTop: 5
    },
    text: {
        color: "black",
        fontSize: 15
    },
    logo: {
        width: "75%",
        height: 130,
        resizeMode: "contain",
        marginTop: 120,
        marginLeft: 5
    },
    box2: {
        width: "100%",
        marginTop: 20,
        alignItems: "center"
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
    footer: {
        width: "100%",
        height: 70,
        backgroundColor: "#6C7C64",
        bottom: 0
    },
    Voltar: {
        marginLeft: 8,
        width: "10%",
        marginTop: 100
    },
    info: {
        flexDirection: "row",
        width: "100%"
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
})