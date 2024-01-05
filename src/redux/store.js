import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//reducers
import userReducer from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const presistedUserReducer =persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  user: presistedUserReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

const persistor = persistStore(store);
export { store, persistor };