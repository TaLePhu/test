import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Index from './components';

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}