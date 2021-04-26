import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { RestaurantListTypes } from '../Redux/RestaurantListRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getRestaurantList } from './RestaurantListSagas'

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup, api),

    takeLatest(RestaurantListTypes.RESTAURANT_LIST_REQUEST, getRestaurantList, api)
  ])
}
