import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import { SearchBar } from 'react-native-elements'
import RestaurantListActions from '../Redux/RestaurantListRedux'

class SearchBarComponent extends React.Component {
  state = {
    search: '',
  }
  updateSearch = (search) => {
    this.setState({ search });
    if(search != null && search.length >= 4) {
      this.props.onSearchTextChanged(search)
    }
  };

  render () {
    const { search } = this.state
    return (
      <SearchBar
        platform="default"
        placeholder="Search with postcode"
        onChangeText={this.updateSearch}
        value={search}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTextChanged: (postCode) => dispatch(RestaurantListActions.restaurantListRequest(postCode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent)
