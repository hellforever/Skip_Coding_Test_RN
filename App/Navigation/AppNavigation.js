import { createAppContainer } from 'react-navigation'
import SearchBarContainer from '../Containers/SearchBarContainer'
import SearchBar from '../Containers/SearchBarContainer'
import RestaurantList from '../Containers/RestaurantList'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SearchBarContainer: { screen: SearchBarContainer },
  SearchBar: { screen: SearchBar },
  RestaurantList: { screen: RestaurantList },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
