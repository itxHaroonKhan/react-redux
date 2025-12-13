import React from 'react'

import './index.css'

import { BrowserRouter } from 'react-router'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './Redex/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
)
