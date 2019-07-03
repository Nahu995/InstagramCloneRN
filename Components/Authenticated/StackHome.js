import { createStackNavigator } from "react-navigation";
import Home from './Home'
import Author from './Profile'
import Comments from './Comments'
import Publishing from './Publishing'

const StackHome = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Author: {
      screen: Author
    },
    Publishing: {
      screen: Publishing
    },
    Comments: {
      screen: Comments,
    }
  }
)

export default StackHome