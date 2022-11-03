import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import { store } from "./store/store";
import { Provider } from "react-redux";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Home">
					<Drawer.Screen name="Home" component={HomeScreen} />
					<Drawer.Screen name="Login" component={LoginScreen} />
					<Drawer.Screen name="Registration" component={RegistrationScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
