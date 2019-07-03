import { createBottomTabNavigator ,createAppContainer } from 'react-navigation'
import StackHome from './StackHome'
import StackSearch from './StackSearch'
import Add from './Add'
import StackFollow from './StackFollow'
import Profile from './Profile'

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
        //Lo realizo de forma "Manual"  ===>> NO DRY
        let { routeName } = navigation.state.routes[navigation.state.index]

        let navigationOptions = {}
        if (routeName === 'Comments') {
          navigationOptions.tabBarVisible = false;
        }
        return navigationOptions
      }  
    },
    Add: {
      screen: Add,  
    },
    Follow: {
      screen: StackFollow,
      navigationOptions: ({ navigation }) => {
        //Al no funcionar tabBarVisible = false en la V3  para Comments.,
        //Lo realizo de forma "Manual" ==>> NO DRY
        let { routeName } = navigation.state.routes[navigation.state.index]

        let navigationOptions = {}
        if (routeName === 'Comments') {
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