import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Categorias from '../Components/Categorias';
import Header from '../Components/Header';


export default function Home() {
  

  const [produtos, setProdutos] = useState([]);

  async function getProdutos() {
    await fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setProdutos(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProdutos();

  }, [])

  

  return (
    <ScrollView style={css.container}>
      
     <Header/>
     <Categorias />
     
    <View style={css.vales}>
      <View style={css.boxTextVale}>
        <Text style={css.textvale}>Vale - Presentes</Text>
      </View>
        
    <View style={css.boxImagem}>
      <Image style={css.imagemvale} source={ require ("../../assets/valeazul.png")  } />
      <Image style={css.imagemvale} source={ require ("../../assets/valepassaro.png")  } />
      <Image style={css.imagemvale} source={ require ("../../assets/valelaranja.png")  } />
     </View>
     <View style={css.boxvale}>
      <Image style={css.imagemvale} source={ require ("../../assets/valeverde.png")  } />
      <Image style={css.imagemvale} source={ require ("../../assets/valebanana.png")  } />
      <Image style={css.imagemvale} source={ require ("../../assets/valevermelho.png")  } />
     </View>
    </View>
     
    </ScrollView>
  )
}
const css = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F4F4F4",
    flexGrow: 1,
  },
  text: {
    color: "black"
  },
  vales: {
    top: 150,
    width: "90%",  
  },
  boxTextVale:{
    alignSelf: "center",
    marginLeft: 35,
    top: 220,
  },
  textvale:{
    fontSize: 16,
  },
  boxImagem:{
    width: "100%",
    height: 400,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 35,
    gap: 10,
    top: 230,
  },
  boxvale:{
    width: "100%",
    height: 400,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 35,
    gap: 10,
  },
  imagemvale: {
    width: 100,
    height: 160,
    borderRadius: 20,
  }
})