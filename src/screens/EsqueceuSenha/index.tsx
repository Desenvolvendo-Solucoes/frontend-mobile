import React, { useState } from "react";
import { Text, TouchableOpacity, View, } from "react-native";
import SvgUri from 'react-native-svg-uri';

import { useNavigation } from '@react-navigation/native';
import { PropsStack } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//COMPONENTS

import Input from "../../components/Input";


const EsqueceuSenha: React.FC = () => {
  const [matricula, setMatricula] = useState<string>()
  const navigation = useNavigation<NativeStackNavigationProp<PropsStack>>();
  const size = 25


  const voltar = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="flex flex-1 justify-center items-center  p-6" >
      <View className="absolute left-5 top-20"> 
      <TouchableOpacity 
      className="bg-white p-2 rounded-full shadow-md shadow-black"
      onPress={voltar}
      >                 
        <SvgUri
        width={size}
        height={size}
        source={require('../../../assets/BtnVoltar.svg')}
      />
      </TouchableOpacity>
      </View>
      <View className="items-start mt-16">
        <Text className="text-primary font-bold text-2xl mt-14">Resetar Senha</Text>
        <Text className="text-subtitulo mt-2 mb-10" >Insira sua Matrícula para enviarmos um código vinculado ao seu e-mail.</Text>
      </View>
      <View className="mt-24">
      <Input value={matricula} setValue={setMatricula} placeholder="Matrícula" />
      </View>
      <TouchableOpacity 
      className="justify-center w-80 h-14 bg-primary rounded-full mt-2 items-center"
      onPress={()=>{ navigation.navigate('EnviarCod')}}>
        <Text className="text-white font-bold">Avançar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EsqueceuSenha