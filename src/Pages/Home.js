import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Stories from '../Components/Stories';


export default function Home() {
  
  const banner = [
    require('../../assets/vestidofarm.jpg'),
   require('../../assets/vestidofarm.jpg'), 
   require('../../assets/vestidofarm.jpg'),  
];

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
    <View style={css.container}>
      {produtos ?
        <>
          <Stories produtos={produtos} />
          <FlatList
            data={produtos}
            renderItem={({ item }) => <Produto title={item.title} price={item.price} image={item.image} description={item.description} category={item.category} rating={item.rating} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ height: (produtos.length * 600) + 110 }}
          />
        </>
        :
        <Text style={css.text}>Carregando produtos...</Text>
      }
    </View>
     
     

    </ScrollView>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    flexGrow: 1,
  },
  text: {
    
    color: "black"
  },
  vales: {
    top: 100,
    width: "90%",
    height: 500,   
  },
  boxTextVale:{
    alignSelf: "center",
    marginLeft: 35,
  },
  textvale:{
    fontSize: 16,
    top: 200,
  },
  boxImagem:{
    height:200,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 35,
    gap: 10,
    top: 230,
  },
  imagem: {
    width: 100,
    height: 160,
    borderRadius: 20,
  }
})