import { createBottomTabNavigator ,createAppContainer } from 'react-navigation'
import StackHome from './StackHome'
import StackSearch from './StackSearch'
import StackFollow from './StackFollow'
import Profile from './Profile'
import StackAdd from './StackAdd';

const PathsAuthenticated = createBottomTabNavigator(
  {
    Home: {
      screen: StackHome,
      navigationOptions: ({ navigation }) => {
        //Al no funcionar tabBarVisible = false en la V3  para Comments.,
        //Lo realizo de forma "Manual" ===>> NO DRY
        let { routeName } = navigation.state.routes[navigation.state.index]

        let navigationOptions = {}
        if (routeName === 'Comments') {
          navigationOptions.tabBarVisible = false;
        }
        return navigationOptions
      }
    },
    Search: {
      screen: StackSearch,
      navigationOptions: ({ navigation }) => {
        //Al no funcionar tabBarVisible = false en la V3  para Comments.,
        //Lo realizo de forma "Manual"  ===> NO DRY
        let { routeName } = navigation.state.routes[navigation.state.index]

        let navigationOptions = {}
        if (routeName === 'Comments') {
          navigationOptions.tabBarVisible = false;
        }
        return navigationOptions
      }  
    },
    Add: {
      screen: StackAdd,
      navigationOptions: ({ navigation }) => {
        //Al no funcionar tabBarVisible = false en la V3  para Add.,
        //Lo realizo de forma "Manual" ===> NO DRY
        let { routeName } = navigation.state.routes[navigation.state.index]

        let navigationOptions = {}
        if (routeName === 'Selection') {
          navigationOptions.tabBarVisible = false;
        }
        return navigationOptions
      }
    },
    Follow: {
      screen: StackFollow,
      navigationOptions: ({ navigation }) => {
        //Al no funcionar tabBarVisible = false en la V3  para Comments.,
        //Lo realizo de forma "Manual" ===> NO DRY
        let { routeName } = navigation.state.routes[navigation.state.index]

        let navigationOptions = {}
        if (routeName === 'TabFollow') {
          navigationOptions.tabBarVisible = false;
        }
        return navigationOptions
      }   
    },
    Profile: {
      screen: Profile,  
    },
  },
  {
    tabBarPosition: 'bottom'
  }
)

export default createAppContainer(PathsAuthenticated);