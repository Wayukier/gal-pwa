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
            <Text style={styles.header}>NÚMERO{'\n'}DE{'\n'}PESSOAS</Text>
  <Text style={styles.description}>Refere-se à quantas pessoas estarão hospedadas no mesmo quarto? {'\n'}{'\n'}Por Favor, selecione uma opção</Text>
            <View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                        <View style={styles.retangulo2}>
                            <Text style={styles.escolhas}>2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.retangulo2}>
                            <Text style={styles.escolhas}>3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.retangulo2}>
                            <Text style={styles.escolhas}>4</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.retangulo2}>
                <TouchableOpacity onPress={() => ir('teste3')}>
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
    backgroundColor: "#F7B500",
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
    flexDirection: "column",
    justifyContent: "space-evenly",
    // marginTop: -50 a a
  },
  escolhas: {
    fontSize: 13,
    textAlign: "center",
    padding: 10,
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
    marginBottom: 10
  },
  input: {
      justifyContent: "center",
      textAlign: "center",
      padding: 10
  }
});

export default pp;
