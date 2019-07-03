import { createStackNavigator} from 'react-navigation'
import Publishing from './Publishing'
import Search from './Search'
import Author from './Profile'
import Comments from './Comments'

const StackSearch = createStackNavigator(
  {
    Search: {
      screen: Search,
    },
    Publishing: {
      screen: Publishing
    },
    Author: {
      screen: Author
    },
    Comments: {
      screen: Comments
    }

  }
)

export default StackSearch