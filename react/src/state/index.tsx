import { configureStore } from '@reduxjs/toolkit';
import { load, save } from 'redux-localstorage-simple';

import user from 'state/user/reducer';

const PERSISTED_KEYS: string[] = ['user'];

const store = configureStore({
  reducer: {
    user,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: true }).concat(save({ states: PERSISTED_KEYS, debounce: 1000 })),
  preloadedState: load({ states: PERSISTED_KEYS }),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
