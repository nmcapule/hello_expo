import { StackNavigator } from 'react-navigation';
import { LoginScreen } from './screens/LoginScreen';
import { StubScreen } from './screens/StubScreen';
import { HomeNavigation } from './screens/HomeNavigation/HomeNavigation';

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Stub: { screen: StubScreen },
  Home: { screen: HomeNavigation },
},{ 
  initialRouteName: 'Login',
  headerMode: 'screen' 
});

export default App;