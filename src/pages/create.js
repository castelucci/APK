import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../services/api";

export default class CadastroLinks extends Component {
  state = {
    nomeDoClientes: "",
    nomeDoEstabelecimento: "",
    descricao: "",
    enderoco: ""
  };

  handleSubmit = async () => {
    const response = await api.post("clientes", {
     nomeDoClientes: this.state.nomeDoClientes,
      nomeDoEstabelecimento: this.state.nomeDoEstabelecimento,
      descricao: this.state.descricao,
      enderoco: this.state.enderoco
    });

    this.props.navigation.navigate("main");
  };

  render(props) {
    console.log(this.props);

    return (
      <View style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome do Cliente"
          placeholderTextColor="#999"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={this.state.nomeDoClientes}
          onChangeText={text => this.setState({nomeDoClientes: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Nome do Estabelecimento"
          placeholderTextColor="#999"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={this.state.nomeDoEstabelecimento}
          onChangeText={text => this.setState({ nomeDoEstabelecimento: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Descrição"
          placeholderTextColor="#999"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={this.state.descricao}
          onChangeText={text => this.setState({ descricao: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Endereço"
          placeholderTextColor="#999"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={this.state.endereco}
          onChangeText={text => this.setState({ endereco: text })}
        />

        <TouchableOpacity
          style={styles.productButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.productButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
    paddingTop: 70
  },
  inputText: {
    height: 42,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 30,
    paddingLeft: 15
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    backgroundColor: "#5C87A7",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1
  },
  productButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    color: "#f1f1f1"
  }
});