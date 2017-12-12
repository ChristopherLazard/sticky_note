import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, {}, enhancers);

if (module.hot) {
  module.hot.accept('./Reducers/', () => {
    const nextRootReducer = require('./Reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;