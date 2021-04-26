import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  column: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,
    backgroundColor: Colors.white,
    marginHorizontal: Metrics.smallMargin,
    alignContent: 'center',
    borderRadius: Metrics.smallMargin
  },
  row: {
    flex: 1,
    backgroundColor: Colors.white,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'flex-start',
    margin: 10,
    padding: 5,
    paddingVertical: 10,
    borderRadius: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  empty: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.black,
    fontSize: 11
  },
  label: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    color: Colors.black,
    marginLeft: -5,
    fontSize: 11
  },
  cuisineType: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    marginLeft: 10,
    color: Colors.black,
    fontSize: 11
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  iconLayout: {
    width: 22,
    height: 22
  }
})
