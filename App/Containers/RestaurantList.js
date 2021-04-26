import React from 'react'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { connect } from 'react-redux'

import styles from './Styles/RestaurantListStyle'

class RestaurantList extends React.PureComponent {

  renderRow ({ item }) {
    return (
      <TouchableOpacity onPress={() => {
        Alert.alert(
          'Detail',
          'Address: ' + item.Address.FirstLine + '\nOpenTime: ' + item.OpeningTime + '\nDeal: ' +
          item.Deals.map((dealItem, index) => dealItem.Description + ' '))
      }}>
        <View style={styles.column}>
          <FastImage
            style={{ width: 70, height: 70 }}
            source={{
              uri: item.LogoUrl,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.row}>
            <Text style={styles.boldLabel}>{item.Name}</Text>
            <View style={styles.column}>
              <Text style={styles.label}>score {item.Rating.StarRating}</Text>
              {item.CuisineTypes.map((cuisineItem, index) => <Text
                style={styles.cuisineType}>{cuisineItem.Name} </Text>)}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.empty}> - Nothing to See Here - </Text>

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  render () {
    const { list } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => {
            return item.Name + index
          }}
          data={list}
          renderItem={this.renderRow}
          numColumns={1}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.restaurantList.payload != null && state.restaurantList.payload.Restaurants != null) {
    return { list: state.restaurantList.payload.Restaurants }
  } else {
    return { list: [] }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
