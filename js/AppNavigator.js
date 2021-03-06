import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import PlatformScreen from './screens/Platform';
import PlayersScreen from './screens/Players';
import TeamsScreen from './screens/Teams';
import { setDefaultFont } from './utils';

setDefaultFont();

const Stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerTitle: 'Home' },
    },
    Players: {
      screen: PlayersScreen,
      navigationOptions: { headerTitle: 'Players' },
    },
    Platform: {
      screen: PlatformScreen,
      navigationOptions: { headerTitle: 'Platform' },
    },
    Teams: {
      screen: TeamsScreen,
      navigationOptions: { headerTitle: 'Teams' },
    },
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });
        return { transform: [{ translateX: translateX }] };
      },
    }),
  },
);

export default createAppContainer(Stack);
