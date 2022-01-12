import { applyMiddleware, combineReducers, createStore } from 'redux';
import { authReducer } from './auth/reducer';
import thunk from 'redux-thunk';
import { chatReducer } from './chat/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  messages: chatReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
