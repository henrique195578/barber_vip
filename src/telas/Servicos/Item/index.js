import React from "react";
import { Text } from "react-native";


export default function Item({descricao,preco, tempo }){
return <>
    <Text>{descricao}</Text>
    <Text>{preco}</Text>
    <Text>{tempo}</Text>
</>
}