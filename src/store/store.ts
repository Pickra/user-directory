import thunk from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { usersReducer } from '../Users/state/UsersReducer';
import { UserData } from '../Users/User';

export type UsersState = { [key: number]: UserData[] };

export interface AppState {
  users: UsersState;
}

export type ThunkDispatchType = ThunkDispatch<AppState, {}, AnyAction>;

export const rootReducer = combineReducers({
  users: usersReducer
});

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const buildStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export const store = buildStore();
