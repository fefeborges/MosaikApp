import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function Sacola() {

  const[sacola, setSacola] = useState([]);

  return (
    <View style={css.container}>
        { sacola ?
        <FlatList
        data={sacola}
        renderItem={ ({item}) => <CarrinhoLista select={item.select} imagem={item.imagem} titulo={item.titulo} tamanho={item.tamanho} quantidade={item.quantidade} preco={item.preco} />}
        keyExtractor={(item) => item.id}
      />
      :
        <Text style={css.text}>Carregando produtos...</Text>
      }
    </View>
  )
}

const css = StyleSheet.create({ 
    container: {
        flexGrow: 1
    }
})