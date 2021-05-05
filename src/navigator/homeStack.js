import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import homeScreen from '../components/homeScreen';
import temp from '../components/temp';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
  <Navigator
    // headerMode='screen' //default option
    initialRouteName='homeScreen'
    screenOptions={{
      gestureEnabled: false,
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#de1', height: 70 },
      headerTitleStyle: { fontWeight: 'bold' },
      headerTitleAlign: 'center',
    }}>
    <Screen
      name='homeScreen'
      component={homeScreen}
      options={{
        headerTitle: () => <Header title='asdf' navigation={navigation} />,
      }}
    />

    <Screen
      name='temp'
      component={temp}
      options={{
        title: 'temp',
      }}
    />
  </Navigator>
);
