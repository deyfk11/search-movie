import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SearchMovie from './SearchMovie';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <SearchMovie />
  </Provider>,
  document.getElementById('root'),
);
