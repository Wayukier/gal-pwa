import React, { useState } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, TextInput, Button } from 'react-native';
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
            <Text style={styles.header}>PREÇO{'\n'}DOS{'\n'}PONTOS</Text>
            <Text style={styles.description}>Você desejou alterar o preço unitário do ponto{'\n'}{'\n'}Qual o novo valor do ponto?</Text>
            <View>
                <View style={styles.ton}>
                    <View style={styles.retangulo2}>
                        <TextInput placeholder={'Insira o valor'} style={styles.input} keyboardType="numeric"></TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.retangulo2}>
                <TouchableOpacity onPress={() => ir('teste')}>
                    <Text style={styles.input}>AVANÇAR</Text>
                </TouchableOpacity>
                {/* <Button title={'AVANÇAR'}></Button> */}
            </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B5CD6D"
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-evenly"
  },
  ton: {
    paddingTop: 24,
  },
  header: {
    fontSize: 30,
    // marginBottom: -90,
    textAlign: "center",
    // marginTop: -50 a a
  },
  description: {
    padding: 30,
    fontSize: 15,
    textAlign: "center",
    // marginTop: -100 a a
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // marginTop: -50 a a
  },
  escolhas: {
    fontSize: 13,
    textAlign: "center"
  },
  retangulo: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 15,
    minWidth: 100
  },
  retangulo2: {
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 15,
    maxWidth: 200,
    width: 150,
    alignSelf: "center",
  },
  input: {
      justifyContent: "center",
      textAlign: "center",
      padding: 10
  }
});

export default pp;
