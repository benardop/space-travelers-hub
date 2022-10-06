import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocket';
import missionReducer from './missions/missions';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
});

const store = configureStore({
  reducer,
});

export default store;
