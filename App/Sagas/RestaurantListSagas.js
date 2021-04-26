import { call, put } from 'redux-saga/effects'
import RestaurantListActions from '../Redux/RestaurantListRedux'

export function * getRestaurantList (api, action) {
  const { data } = action

  const response = yield call(api.getRestaurantList, data)
  if (response.ok) {
    yield put(RestaurantListActions.restaurantListSuccess(response.data))
  } else {
    yield put(RestaurantListActions.restaurantListFailure())
  }
}
