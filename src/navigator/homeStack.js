import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import homeScreen from '../components/homeScreen';
import temp from '../components/temp';

const screens = {
  Home: {
    screen: homeScreen,
  },
  Temp: {
    screen: temp,
  },

};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
