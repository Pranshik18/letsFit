import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreenOne from '../screens/onboarding/onboardScreen1';
import OnBoardScreenTwo from '../screens/onboarding/onBoardScreen2';
import OnBoardScreenThree from '../screens/onboarding/onboardScreen3';
import OnBoardScreenFour from '../screens/onboarding/onboardScreen4';
import { WelcomeScreen } from '../screens/welcome';

interface AppNavigatorProps {

}

const Stack = createNativeStackNavigator();

const AppNavigator = (props : AppNavigatorProps) =>{
    return(
        <NavigationContainer independent>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='welcome'>
                <Stack.Screen name='welcome' component={WelcomeScreen} />
                <Stack.Screen name='onBoardScreenOne' component={OnBoardScreenOne}/>
                <Stack.Screen name='onBoardScreenTwo' component={OnBoardScreenTwo}/>
                <Stack.Screen name='onBoardScreenThree' component={OnBoardScreenThree}/>
                <Stack.Screen name='onBoardScreenFour' component={OnBoardScreenFour}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;