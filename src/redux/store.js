import { configureStore } from '@reduxjs/toolkit'
import storePersist from './storePersist'

// middlewares
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

// Reducers
import rootReducer from '@/redux/reducers'

const customMiddlewares = [thunk]
const logger = createLogger({ collapsed: true })
process.env.NODE_ENV === 'development' && customMiddlewares.push(logger);

const siteKey = 'testing.example.com'
const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddlewares)
});

store.subscribe(() => {
    const shouldSet = store.getState().counterR;
    if (!shouldSet) return;
    storePersist.set(siteKey, store.getState().counterR);
});

export default store;