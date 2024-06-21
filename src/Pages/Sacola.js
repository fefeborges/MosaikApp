import { View, StyleSheet, FlatList, Text, Switch, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import React, { useState,useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import SacolaLista from '../../src/Components/SacolaLista';
import Header from '../Components/Header';
import { RadioButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Sacola({navigation}) {

  useEffect(() => {
    IniciarTela();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      IniciarTela();
    }, [])
  );

  function IniciarTela(){
    setPagamento(false);
    setInicio(true);
    setSucesso(false);
  } 



  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [pagamento, setPagamento] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [inicio, setInicio] = useState(true);
  const [home, setHome] = useState(true);

  const Sacola = () => {
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [nomeDestinatario, setNomeDestinatario] = useState('');
  }

  const [checked, setChecked] = React.useState('first');

  return (

    <ScrollView style={css.container}>
      {inicio &&
        <View>
          <Header />
          <SacolaLista />
          <View style={css.info}>
            <View style={css.boxembalagem}>
              <MaterialCommunityIcons name="gift-outline" size={22} style={css.icone} />
              <Text style={css.embalagem}>Embalagem para presente</Text>
              <Switch
                style={css.checkbox}
                trackColor={{ false: "#BDBDBE", true: "#BDBDBE" }}
                thumbColor={isEnabled ? "#62735B" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={css.inputboxes}>
              <View style={css.inputbox}>
                <View style={css.boxlabel} >
                  <Text style={css.label}>Calcular frete</Text>
                </View>
                <View style={css.inserir}>
                  <TextInput style={css.input} placeholder="Digite seu CEP" />
                  <TouchableOpacity style={css.botao}>
                    <Text style={css.textbotao}>Calcular</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={css.inputbox}>
                <View style={css.boxlabel}>
                  <Text style={css.label}>Aplique um cupom de desconto</Text>
                </View>
                <View style={css.inserir}>
                  <TextInput style={css.input} placeholder="Digite seu cupom" />
                  <TouchableOpacity style={css.botao}>
                    <Text style={css.textbotao}>Aplicar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={css.linha}></View>
            <View style={css.total}>
              <View style={css.info2}>
                <Text style={css.item}>Produtos</Text>
                <Text style={css.item}>R$1.625,00</Text>
              </View>
              <View style={css.info2}>
                <Text style={css.item}>Frete</Text>
                <Text style={css.item}>R$18,00</Text>
              </View>
              <View style={css.info2}>
                <Text style={css.item}>Desconto</Text>
                <Text style={css.item}>-R$246,45</Text>
              </View>
              <View style={css.info2}>
                <Text style={css.item2}>Total</Text>
                <Text style={css.item2}>R$1.396,55</Text>
              </View>
            </View>
            <TouchableOpacity style={css.botao2} onPress={() => {setPagamento(true), setInicio(false)}} >
              <Text style={css.textbotao}>Finalizar Compra</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      {pagamento &&
        <View>
          <Header />
          <ScrollView style={css.scrollViewPg}>
            <TouchableOpacity onPress={IniciarTela} style={css.VoltarPg}>
              <MaterialCommunityIcons name="arrow-left" size={30} />
            </TouchableOpacity>
            <View style={css.tituloPg}>
              <Text style={css.textTituloPg}>Complete seu endereço</Text>
              <Text style={css.linhaPg}></Text>
            </View>
            <View style={css.boxInputPg}>
              <Text style={css.textInputPg}>Destinatário</Text>
              <TextInput
                placeholder='Digite seu nome'
                style={css.inputPg}
              />
            </View>
            <View style={css.boxInputPg}>
              <Text style={css.textInputPg}>Digite seu CEP</Text>
              <TextInput
                style={css.inputPg}
                placeholder='Apenas números'
                keyboardType="number-pad"
              />
            </View>

            <View>
              <View style={css.boxInputPg}>
                <Text style={css.textInputPg}> Localização</Text>
                <TextInput
                  style={css.inputPg}
                  placeholder='Digite o nome da rua'
                />
              </View>

              <View style={css.boxInputMeioPg}>
                <TextInput
                  style={css.inputMeioPg}
                  placeholder='Digite o número'
                  keyboardType="number-pad"
                />
                <TextInput
                  style={css.inputMeioPg}
                  placeholder='Digite o bairro'
                />
              </View>
              <View style={css.boxInputPg}>
                <TextInput
                  style={css.inputPg}
                  placeholder='Informe um complemento'
                />
                <Text style={css.textOpcionalPg}>Opcional*</Text>
              </View>

            </View>

            <View style={css.tituloPg}>
              <Text style={css.textTituloPg}>Pagamento</Text>
              <Text style={css.linhaPg}></Text>
              <View style={css.boxTotalPg}>
                <Text style={css.textTotalPg}>Total</Text>
                <Text style={css.textPrecoPg}>R$ 1.396,00</Text>
              </View>
            </View>
            <View style={css.boxRadioButtonPg}>
              <View style={css.boxTextRadioPg} >
                <View style={css.textRadioPg}>
                <Image  style={css.icone } source={require("../../assets/pix.png")}></Image>
                  <Text>Pix -  5% de Desconto</Text>
                  <Text>R$ 1.326,75</Text>
                </View>
                <View style={css.textRadioPg}>
                <Image  style={css.icone } source={require("../../assets/cartaoCredito (2).png")}></Image>
                  <Text>Cartão de Crédito</Text>
                  <Text>Até 12x</Text>
                </View>
                <View style={css.textRadioPg}>
                <Image  style={css.icone } source={require("../../assets/cartaoDebito (2).png")}></Image>
                  <Text>Cartão de Débito</Text>
                  <Text>R$ 1.396,55</Text>
                </View>
              </View>
              <View style={css.boxBolinhasPg}>
                <View style={css.bolinhasPg}>
                  <RadioButton
                    color="#62735B"
                    checkedColor="#62735B"
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                  />
                </View>

                <View style={css.bolinhasPg}>
                  <RadioButton
                    color="#62735B"
                    checkedColor="#62735B"
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                  />
                </View>

                <View style={css.bolinhasPg}>
                  <RadioButton
                    color="#62735B"
                    checkedColor="#62735B"
                    style={css.bolinhas}
                    value="third"
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('third')}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity style={css.botaoPg}>
              <Text style={css.textbotaoPg} onPress={() => { setPagamento(false), setInicio(false), setSucesso(true) }}>Confirmar Pagamento</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      }
      {sucesso &&
        <View style={css.container2Pg}>
          <Text style={css.text1Pg}>Pedido realizado</Text>
          <Text style={css.text1Pg}>com sucesso!</Text>
          <Text style={css.text2Pg}>Seu pedido #286435 foi confirmado. Aguarde para mais informações do rastreamento.</Text>
          <View />
          <View>
            <Image source={require("../../assets/logo.png")} style={css.imagemPg} />
          </View>
          <TouchableOpacity style={css.btnPg} onPress={() => navigation.navigate('Início')}>
            <Text style={css.textoBtnPg}>Compre na Farm</Text>
          </TouchableOpacity>
        </View>
      }
    </ScrollView>

  )
}

const css = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  info: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 50
  },
  boxembalagem: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 10
  },
  embalagem: {
    fontSize: 15,
    marginTop: 12,
    width: '85%'
  },
  checkbox: {
    width: '5%',
    alignSelf: 'flex-end'
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    width: '62%',
    paddingLeft: 10
  },
  inputboxes: {
    width: '100%',
    alignItems: 'center',
    marginLeft: 10,
  },
  botao: {
    height: 42,
    width: '30%',
    backgroundColor: '#ACC5A0',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10
  },
  textbotao: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
  },
  label: {
    fontSize: 15,
    marginBottom: 8
  },
  inserir: {
    flexDirection: 'row',
    height: 45
  },
  inputbox: {
    marginBottom: 25,
  },
  linha: {
    borderColor: 'black',
    borderTopWidth: 1,
    width: '90%',
    alignSelf: 'center'
  },
  icone: {
    marginTop: 10,
    marginRight: 10
  },
  total: {
    height: 150,
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25
  },
  info2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  item: {
    fontSize: 15,
    marginBottom: 10
  },
  item2: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  botao2: {
    width: '60%',
    backgroundColor: '#6C7667',
    borderRadius: 10,
    height: 42,
    alignItems: 'center',
    marginLeft: 10,
    alignSelf: 'center',
    marginTop: 25
  },
  scrollViewPg: {
    marginHorizontal: 20,

},
containerPg: {
    top: 80,
    backgroundColor: "#f4f4f4",
    flexGrow: 1,
},
tituloPg: {
    padding: 20,
},
textTituloPg: {
    fontSize: 17,
    marginLeft: 16,
},
linhaPg: {
    width: "92%",
    height: 1.5,
    backgroundColor: "black",
    borderBottomWidth: 1,
    marginTop: 5,
    alignSelf: "center"
},

boxInputPg: {
    marginLeft: 35,
    marginTop: 15,
},
textInputPg: {
    color: "black"
},
inputPg: {
    backgroundColor: "white",
    width: "90%",
    height: 40,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
},
boxInputMeioPg: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginLeft: 35,
    marginTop: 20,
},
inputMeioPg: {
    backgroundColor: "white",
    width: "48%",
    height: 40,
    borderRadius: 8,
    padding: 8,
},
textOpcionalPg: {
    height: 30,
    width: "20%",
    fontSize: 12,
    top: 8,
    marginLeft: 3,
},
boxTotalPg: {
    display: "flex",
    flexDirection: "row",
    gap: 158
},
textTotalPg: {
    height: 35,
    width: "15%",
    fontSize: 15,
    top: 8,
    marginLeft: 12,
},
textPrecoPg:{
    height: 35,
    width: "26%",
    fontSize: 15,
    top: 8,
},
labelPg: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
},
radioGroupPg: {
    flexDirection: 'row',
    alignItems: 'center',
},
radioLabelPg: {
    marginLeft: 10,
},
boxRadioButtonPg: {
  flexDirection: "row",
  width: "90%",
  alignSelf: "center",
},

boxBolinhasPg: {
  width: "10%",
  color: "green",
  marginLeft: 90,
},
bolinhasPg: {
  marginBottom: 10
},
boxTextRadioPg: {
  width: "55%",
  marginLeft: 15,
  top: 4
},
textRadioPg: {
  marginBottom: 30,
  flexDirection: "row",
  gap: 10
},
icone:{
  width: "10%",
  height: 20,
},
botaoPg: {
    width: '60%',
    backgroundColor: '#6C7667',
    borderRadius: 10,
    height: 42,
    alignItems: 'center',
    marginLeft: 10,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 20
},
textbotaoPg: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
},
container2Pg: {
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
},
text1Pg: {
    fontSize: 20,
    fontWeight: "bold",
},
text2Pg: {
    width: "65%",
    textAlign: "center",
    fontSize: 15,
    marginTop: 15
},
btnPg: {
    backgroundColor: "#465340",
    width: 210,
    height: 45,
    borderRadius: 5,
},
textoBtnPg: {
    color: "white",
    fontSize: 16,
    paddingTop: 10,
    textAlign: "center"
},
imagemPg: {
    width: 250,
    height: 250,
    marginBottom: 20
},
VoltarPg: {
    marginLeft: 8,
    width: "10%",
    marginTop: 25
},
})