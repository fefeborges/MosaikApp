import { View, Text, Image, StyleSheet } from 'react-native'

export default function Produto({select, imagem, titulo, tamanho, quantidade, preco}) {
  return (
    <View style={css.container}>
      <View style={css.select}>{select}</View>
      <Text style={css.titulo}>{titulo}</Text>
      <Image source={{uri: imagem}} style={css.imagem}/>
      <View style={css.tamanho}>{tamanho}</View>
      <View style={css.quantidade}>{quantidade}</View>
      <Text style={css.preco}>R${preco}</Text>
    </View>
  )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1
    }
})