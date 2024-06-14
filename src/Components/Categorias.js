import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriasLista from './CategoriasLista';

export default function Categorias() {


  const data1 = [
    {
      id: 1,
      nome: "Vestido",
      img: require('../../assets/vestidofarm.jpg')
    },
    {
      id: 2,
      nome: "T-shirt",
      img: require('../../assets/t-shirt.jpeg')
    },
    {
      id: 3,
      nome: "Macacão",
      img: require('../../assets/macacao.jpeg')
    },
    {
      id: 4,
      nome: "Saia",
      img: require('../../assets/saia.jpeg')
    },
    {
      id: 5,
      nome: "Acessório",
      img: require('../../assets/acessorio.jpeg')
    },
    {
      id: 6,
      nome: "Body",
      img: require('../../assets/body.jpeg')
    },
    {
      id: 7,
      nome: "Praia",
      img: require('../../assets/praia.jpeg')
    },
    {
      id: 8,
      nome: "Camisa",
      img: require('../../assets/camisa.jpeg')
    }
  ];

  const data2 = [
    {
      id: 1,
      nome: "Calça",
      img: require('../../assets/calça.jpeg')
    },
    {
      id: 2,
      nome: "Kimono",
      img: require('../../assets/kimono.jpeg')
    },
    {
      id: 3,
      nome: "Short",
      img: require('../../assets/short.jpeg')
    },
    {
      id: 4,
      nome: "Top",
      img: require('../../assets/top.jpeg')
    },
    {
      id: 5,
      nome: "Casaco",
      img: require('../../assets/casaco.jpeg')
    },
    {
      id: 6,
      nome: "Mochila",
      img: require('../../assets/mochila.jpeg')
    },
    {
      id: 7,
      nome: "Blusa",
      img: require('../../assets/blusa.jpeg')
    },
    {
      id: 8,
      nome: "Conjuntos",
      img: require('../../assets/conjuntos.jpeg'),
    }
  ];

  const banner = [
    require('../../assets/vestidofarm.jpg'),
   require('../../assets/valelaranja.png'), 
   require('../../assets/vestidofarm.jpg'),  
];



  return (      
    <View style={css.container}>
      <View style={css.banner}>
            <FlatList
                horizontal={true}
                data={banner}
                renderItem={({ item }) => (
                    <Image source={item} style={ [ style=css.imagem, { width: 415, height: 200 }]} />
                )}
            />
        </View>

      
      <View style={css.flatList}>
      <Text style={css.texto}>Categorias</Text>
        <FlatList
          data={data1}
          renderItem={({ item }) => <CategoriasLista 
                                    imagem={item.img}
                                    nome={item.nome}/>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 10, height: 120, gap: 20, width: data1.length * 112 }}
        />
      </View>
      <View style={css.flatList}>
        <FlatList
          data={data2}
          renderItem={({ item }) => <CategoriasLista
                                      imagem={item.img}  
                                      nome={item.nome}/>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 10, height: 120, gap: 20, width: data2.length * 112 }}
        />
      </View>
    </View>

  )
}
const css = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    marginTop: 90,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    bottom: 20
  },
  imagem: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  flatList: {
    width: "98%",
    height: 130,
    marginTop: 50,
  },
  banner: {
    width: "100%",
    heigth: 200
},
})