/* Importa react para identificar ao js que sera utilizado REACT  */
import React from 'react';
/* SafeAreaView - somente utilizado para IOS 
   StatusBar    - utilizado para ANDROID 
   FlatList     - para realizar a lista dos SERVIÇOS*/
import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native';
import Item from './Item';

const servicos = [
    /* SERVIÇOS QUE VEM CADASTRADOS DO BANCO DE DADOS */
    {
        id: "1",
        descricao: "Corte Masculino",
        preco: 19.9,
        tempo: 39.9,
    },
    {
        id: "2",
        descricao: "Corte Feminino",
        preco: 89.9,
        tempo: 119.9,
    },
    {
        id: "3",
        descricao: "Corte Infantil",
        preco: 9.99,
        tempo: 20.1,
    }
];

export default function Servicos() {
    /* SafeAreaView somente utilizado para IOS 
    StatusBar utilizado para ANDROID*/
    return <SafeAreaView>
        <StatusBar />
        <Text>Serviços</Text>
        <FlatList
            data={servicos}
            /* Importado a pasta ITEM referenciado aos servicos a se fazer */
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={({id}) => String(id)}
        />
    </SafeAreaView>
}