import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../scenes/login';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
};

const RouteConfigs = {
  Login:LoginScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;