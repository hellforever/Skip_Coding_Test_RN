import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import { Divider } from 'react-native-elements'

// Styles
import styles from './Styles/RootContainerStyles'
import RestaurantList from './RestaurantList'
import SearchBarContainer from './SearchBarContainer'

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <Divider style={{ height: (Platform.OS === 'ios') ? 30 : 0 }} />
        <SearchBarContainer />
        <RestaurantList />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
