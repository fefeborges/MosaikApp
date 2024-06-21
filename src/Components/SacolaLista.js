import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';


export default function SacolaLista() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={css.container}>
      <View style={css.container2}>
        <View style={css.boxcheckbox}>
          <Checkbox.Android
            uncheckedColor='#62735B'
            color='#62735B'
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Image source={require('../../assets/vestido caju.jpg')} style={css.imagem} />
        <View style={css.info}>
          <View style={css.boxtitulo}>
            <Text style={css.titulo}>Vestido Estampado Floresta de Caju</Text>
          </View>
          <View style={css.info2}>
            <View style={css.boxtamanho}>
              <Text style={css.tamanho}>P</Text>
            </View>
            <View style={css.boxquantidade}>
              <Text style={css.quantidade}>1 unid.</Text>
            </View>
          </View>
          <View style={css.boxpreco}>
            <Text style={css.preco}>R$629.00</Text>
          </View>
        </View>
      </View>
      <View style={css.container2}>
        <View style={css.boxcheckbox}>
          <Checkbox.Android
            uncheckedColor='#62735B'
            color='#62735B'
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <Image source={require('../../assets/kimono2.jpg')} style={css.imagem} />
        <View style={css.info}>
          <View style={css.boxtitulo}>
            <Text style={css.titulo}>Kimono Blazer Estampado Miranda</Text>
          </View>
          <View style={css.info2}>
            <View style={css.boxtamanho}>
              <Text style={css.tamanho}>M</Text>
            </View>
            <View style={css.boxquantidade}>
              <Text style={css.quantidade}>2 unid.</Text>
            </View>
          </View>
          <View style={css.boxpreco}>
            <Text style={css.preco}>R$996.00</Text>
          </View>
        </View>
      </View>
    </View>

  )
}
const css = StyleSheet.create({
  container2: {
    flexGrow: 1,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'flex-end',
    marginTop: 25,
    alignSelf: 'flex-end'
  },
  imagem: {
    width: 140,
    height: 160,
  },
  info: {
    flexDirection: 'column',
    width: '70%'
  },
  info2: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10
  },
  tamanho: {
    width: '100%',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5
  },
  boxtamanho: {
    borderRadius: 50,
    backgroundColor: 'white',
    height: 35,
    width: 35,
    borderWidth: 1,
    textAlign: 'center',
    marginLeft: 10
  },
  quantidade: {
    width: '100%',
    fontSize: 10,
    marginLeft: 3,
    marginTop: 10
  },
  boxquantidade: {
    borderRadius: 50,
    backgroundColor: 'white',
    height: 35,
    width: 35,
    borderWidth: 1,
    textAlign: 'center',
    marginLeft: 15
  },
  boxpreco: {
    marginLeft: 15,
    marginTop: 45
  },
  preco: {
    fontWeight: 'bold',
    color: '#465340',
    fontSize: 15
  },
  boxtitulo: {
    marginLeft: 10
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'normal'
  },
  boxcheckbox: {
    flexDirection: 'row',
    alignItems: 'center'

  }
})