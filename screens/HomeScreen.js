import React from "react";
import { View, Text, Button } from "react-native";
import { signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      const response = await signOut;
      console.log(response);
      navigation.navigate("Auth");
    } catch (error) {
      alert("Erro ao deslogar usuário:", error);
    }
  };

  return (
    <View>
      <Text>Bem-vindo à tela Home!</Text>
      <Button title="Sair da Conta" onPress={handleSignOut} />
    </View>
  );
};

export default HomeScreen;