import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreenOne from '../screens/onboarding/onboardScreen1';
import OnBoardScreenTwo from '../screens/onboarding/onBoardScreen2';
import OnBoardScreenThree from '../screens/onboarding/onboardScreen3';
import OnBoardScreenFour from '../screens/onboarding/onboardScreen4';
import { WelcomeScreen } from '../screens/welcome';
import CreateAccountPage from '../screens/auth/signUp/RegisterPage1';
import CreateAccountInfoPage from '../screens/auth/signUp/RegisterPage2';
import UserRegisterInfo from '../screens/auth/signUp/RegisterPage3';
import SuccessRegisteration from '../screens/successRegisteration';
import Login from '../screens/auth/login';
import Dashboard from '../screens/dashboard';
import { HomeTab } from './TabNavigator';

interface AppNavigatorProps {

}

const Stack = createNativeStackNavigator();

const WelcomeNavigator = ()=>{
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='welcome'>
        <Stack.Screen name='welcome' component={WelcomeScreen} />
                <Stack.Screen name='onBoardScreenOne' component={OnBoardScreenOne}/>
                <Stack.Screen name='onBoardScreenTwo' component={OnBoardScreenTwo}/>
                <Stack.Screen name='onBoardScreenThree' component={OnBoardScreenThree}/>
                <Stack.Screen name='onBoardScreenFour' component={OnBoardScreenFour}/>
    </Stack.Navigator>
}

const AppNavigator = (props : AppNavigatorProps) =>{
    return(
        <NavigationContainer independent>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='welcome'>
                <Stack.Screen name='welcome' component={WelcomeScreen} />
                <Stack.Screen name='onBoardScreenOne' component={OnBoardScreenOne}/>
                <Stack.Screen name='onBoardScreenTwo' component={OnBoardScreenTwo}/>
                <Stack.Screen name='onBoardScreenThree' component={OnBoardScreenThree}/>
                <Stack.Screen name='onBoardScreenFour' component={OnBoardScreenFour}/>
                <Stack.Screen name='registerPage' component={CreateAccountPage} />
                <Stack.Screen name='registerPageOne' component={CreateAccountInfoPage} />
                <Stack.Screen name='userInfoPage' component={UserRegisterInfo} />
                <Stack.Screen name='SuccessRegister' component={SuccessRegisteration} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Dashboard' component={HomeTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;