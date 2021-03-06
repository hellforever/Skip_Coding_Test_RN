import { call, put } from 'redux-saga/effects'
import { GithubSelectors } from '../Redux/GithubRedux'
import RestaurantListActions from '../Redux/RestaurantListRedux'

export const selectAvatar = GithubSelectors.selectAvatar

export function * startup (api, action) {
  const response = yield call(api.getRestaurantList, 'ec4m')
  if (response.ok) {
    yield put(RestaurantListActions.restaurantListSuccess(response.data))
  } else {
    yield put(RestaurantListActions.restaurantListFailure())
  }
}
