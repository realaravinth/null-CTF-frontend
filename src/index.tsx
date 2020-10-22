import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
//import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store, useAppDispatch} from './app/store';
import {thunkedGetState} from './app/reducers/authSlice';

import {saveState} from './app/utils/persistState';

store.subscribe(() => saveState(store.getState()));

store.dispatch(thunkedGetState());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
