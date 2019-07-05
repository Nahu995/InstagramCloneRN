import {createStackNavigator} from 'react-navigation'
import TabFollow from './TabFollow'
import Author from './Profile'
import Publishing from './Publishing'
import Comments from './Comments'

const StackFollow = createStackNavigator(
  {
    TabFollow:{
      screen: TabFollow,
      navigationOptions: {
        header: null
      }
    },
    Author: {
      screen: Author
    },
    Publishing: {
      screen: Publishing
    },
    Comments: {
      screen: Comments
    },
  },
  {

  }
);

export default StackFollow;