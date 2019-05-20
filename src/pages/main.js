import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';
import { bold } from 'ansi-colors';

export default class Home extends Component {
	static navigationOptions = {
		title: 'APKTESTE'
	};

	state = {
		docs: []
	};

	componentDidMount() {
		this.loadLinks();
	}

	loadLinks = async () => {
		try {
			const response = await api.get('/clientes');

			const { docs } = response.data;

			this.setState({ docs });
		} catch (error) {
			console.log(error);
		}
	};

	renderItem = ({ item }) => {
		return (
			<View style={styles.productContainer}>
				<Text style={styles.productTitle}>Nome: {item.nomeDoClientes}</Text>
				<Text style={styles.productDescription}>Estabelecimento: {item.nomeDoEstabelecimento}</Text>
				<Text style={styles.productDescription}>Descrição: {item.descricao}</Text>
				<TouchableOpacity style = {styles.apagar}
            onPress ={() => {
              Alert.alert(
                'Apagar',`Deseja deletetar o cliente ${item.nomeDoClientes}?`,
                [{text: "Sim", onPress: async () => {
                            await api.delete(`/clientes/${item._id}`)
                                .then(res => {
                                    Alert.alert(
                                        'Resultado: ',
																				'Exclusão realizada com sucesso, o registro não podera mais ser acessado'
                                )})
                                .catch(err => {Alert.alert(
                                        'Resultado: ',
                                        'Erro desconhecido o registro selecionado não foi apagado'
                                )})
                }},{text: "Não", onPress: async () => {console.log(")!");}}],
                { cancelable: true });}}>
						<Text style = {styles.productButton}>Excluir</Text></TouchableOpacity>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
			 <TouchableOpacity style = {styles.createe}
          onPress ={() => {this.props.navigation.navigate("create");}}>
					<Text style = {styles.textcreate}>Criar</Text></TouchableOpacity>
				<FlatList
					contentContainerStyle={styles.list}
					data={this.state.docs}
					keyExtractor={(item) => item._id}
					renderItem={this.renderItem}
					onEndReachedThreshold = {0.2}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: "#fafafa",
	},
	list: {
		padding: 20
	},
	
	apagar:{        
		height: 30,
			borderRadius: 5,
			backgroundColor: "rgb(199, 6, 87)",
			justifyContent: "center",
			alignItems: "center",
			marginLeft: 160,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 5 },
			shadowOpacity: 0.4,
			shadowRadius: 5,
			elevation: 1

},
	createe:{
		height: 40,
		borderRadius: 5,
		backgroundColor: "rgb(205, 12, 93)",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 80,
		margin: 10,
		marginRight: 80
	},
	textcreate:{
		color: "white",
		fontSize: 18
	},
	productContainer: {
    backgroundColor: "#FFF",
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
		marginBottom: 20,
		
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.8,
		shadowRadius: 5,
		elevation: 5,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24
	},
	productButton: {
		height: 42,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#333",
		backgroundColor: "transparent",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10
	},
	productButtonText: {
		fontSize: 16,
		color: "#333",
		fontWeight: "bold"
	}
});
