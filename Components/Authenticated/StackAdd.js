import { createStackNavigator } from 'react-navigation'
import Add from './Add'
import SelectGalery from './SelectGalery';

const StackAdd = createStackNavigator(
  {
    Add: {
      screen: Add
    },
    Selection: {
      screen: SelectGalery
    },
  }
)

export default StackAdd;