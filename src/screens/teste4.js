import React, { useState } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const pp = () => {
  navigation = useNavigation()
  const ir = (destino) => {
    return (
      navigation.navigate(destino)
    );
  };
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
            <Text style={styles.header}>PONTOS{'\n'}DO{'\n'}ALL INCLUSIVE</Text>
            <Text style={styles.description}>Refere-se à quantos pontos são destinados ao All Inclusive diário?{'\n'}{'\n'}O padrão são 2506 pontos. Deseja alterar?</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => ir('teste5')}>
                    <View style={styles.retangulo}>
                        <Text style={styles.escolhas}>SIM</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ir('teste6')}>
                    <View style={styles.retangulo}>
                        <Text style={styles.escolhas}>NÃO</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.description}>Não é recomendado alterar. Visto que, retirará a precisão da simulação</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7B500",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-evenly"
  },
  header: {
    fontSize: 30,
    // marginBottom: -90,
    textAlign: "center",
    // marginTop: -50
  },
  description: {
    padding: 30,
    fontSize: 15,
    textAlign: "center",
    // marginTop: -100
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // marginTop: -50
  },
  escolhas: {
    fontSize: 13,
    textAlign: "center",
    padding: 2
  },
  retangulo: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 15,
    minWidth: 100
  },
});

export default pp;
