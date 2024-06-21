import React from 'react'
import { View, StyleSheet, FlatList, Text, TextInput, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Produto from '../Components/Produto';

export default function Pecas() {

    const[produtos, setProdutos] = useState([]);
    const [error, setError] = useState(false);
    const [busca, setBusca] = useState("");

    async function getProdutos()
    {
      await fetch('http://10.133.22.24:5251/api/Produto/GetAllProdutos', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => setProdutos(json))
    .catch(err => setError(true))
}
  
  useEffect(() => {
    getProdutos();
  }, []);


    return (
      <View style={css.container}>
        <View style={css.info}>
          <Text style={css.titulo}>Só na FARM</Text>
          <View style={css.boxpesquisa}>
              <TextInput style={css.pesquisa} placeholder='Buscar' placeholderTextColor={'#ACC5A0'}  
              TextInput={busca} onChangeText={ (digitado) => setBusca(digitado)}/>
              
            </View>
          </View>
          <View style={css.boxfiltros}>
              <Text style={css.filtros}>filtros</Text>
              <MaterialCommunityIcons style={css.filtroicon} name="sort-variant" color={'#5E5E5E'} size={22} />
          </View>
        { produtos ?
        <FlatList
        style={css.lista}
          data={produtos}
          renderItem={ ({item}) => <Produto titulo={item.nomeProduto} imagem={item.fotoProduto} preco={item.precoProduto} />}
          keyExtractor={(item) => item.produtoId}
          columnWrapperStyle={{
            justifyContent: "space-between",
            width: "50%",
            padding: 10,
            gap: 20
            }} numColumns={2} /> 
        :
          <Text style={css.text}>Carregando produtos...</Text>
        }
      </View>
    )
  }
  const css = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: '#F4F4F4',
        marginBottom: 20
    },
    titulo: {
        fontSize: 25,
        fontWeight: '300',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        width: '40%',
        color: '#465340'
    },
    boxfiltros: {
        height: 34,
        width: 100,
        width: '25%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1.5,
        marginLeft: 10,
        flexDirection: 'row',
        marginBottom: 10,
        borderColor: "#465340"
    },
    filtros: {
        paddingLeft: 10,
        marginTop: 6,
        color: '#465340',
        marginRight: 20,
    },
    filtroicon: {
      marginTop: 5
    }, 
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    pesquisa: {
      fontWeight: 'bold',
      fontSize: 16
    },
    boxpesquisa: {
      width: '44%',
      height: 20,
      marginRight: 30,
      marginTop: 17,
      borderBottomColor: '#ACC5A0',
      borderBottomWidth: 2,
    },
    lista: {
      marginBottom: 50
    },
    pesquisaicon: {
      marginLeft: 30
    }
  })