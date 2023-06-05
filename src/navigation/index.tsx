import MainView from "../screens/MainView";
import PostView from "../screens/PostView";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "MainViewScreen" component={MainView} />
                <Stack.Screen name = "PostViewScreen" component={PostView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;