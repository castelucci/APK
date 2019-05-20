import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
	Main: { screen: Main },
			Create: { screen: Create },
	},{navigationOptions: {
			headerStyle: {
				backgroundColor: 'rgb(205, 12, 93)'
			},
			headerTintColor: '#FFF'
		}
	}
);
