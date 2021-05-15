import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './App/Redux/Reducers';

import Field from './App/components/field';

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Field />
    </Provider>
  );
}