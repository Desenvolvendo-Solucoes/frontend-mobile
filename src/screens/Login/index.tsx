import React, { useState } from "react";
import { Button, Image, Pressable, Text, View, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import { CheckBox } from 'react-native-elements'
import Loading from "../../components/Loading";

import { useNavigation } from '@react-navigation/native';
import { PropsStack } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>()
  const [senha, setSenha] = useState<string>()
  const [isChecked, setIsChecked] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<PropsStack>>();


  const loading = () => {
    <Loading />
    navigation.navigate('HoleriteTabs');
  };

  const resetPassword = () => {
    navigation.navigate('EsqueceuSenha');
  };

  const primeiroAcesso = () => {
    navigation.navigate('PrimeiroAcesso');
  };

  return (
    <View className="flex flex-1 justify-center items-center p-6" >
      <Image className="w-48 h-16 mb-8" source={require('../../../assets/loginImage.png')} resizeMode="stretch" />
      <Input value={email} setValue={setEmail} placeholder="Entre com o seu E-mail" />
      <Input value={senha} setValue={setSenha} placeholder="Senha" password />
      <TouchableOpacity 
        className="relative self-end  mr-10 mb-4"
        onPress={resetPassword}
      >
        <Text>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        className={`w-80 h-14 ${isChecked === true ? 'bg-primary':'bg-slate-700'} rounded-full flex justify-center items-center mb-5`}
        onPress={loading}
        disabled={isChecked === true ? false : true}
        >
        <Text className='text-white text-[15px]'>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      className='w-80 h-14 bg-white rounded-full flex justify-center items-center border border-primary mb-2'
      onPress={primeiroAcesso}
      >
        <Text className='text-primary text-[15px]'>Meu Primeiro Acesso</Text>
      </TouchableOpacity>

      <View>
        <CheckBox
          checked={isChecked}
          title={
            <Text>
              Aceito os termos e politicas de privacidade.
            </Text>
          }
          onPress={() => setIsChecked(!isChecked)}
          checkedColor="#00266F"
          containerStyle={{
            backgroundColor: "transparent",
            borderColor: "transparent",
          }}
          textStyle={{
            color: "#414141",
          }}
        />
      </View>


    </View>
  )
}

export default Login