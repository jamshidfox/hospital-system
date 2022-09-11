import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import createStore from './etc/store'
import { ThemeProvider } from 'styled-components'
import theme from './constants/theme'
import { BrowserRouter } from 'react-router-dom'
//configue i18n
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },

    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

const root = ReactDOM.createRoot(document.getElementById('root'))
const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)
const routes = require('./containers').default

root.render(
  <React.Fragment>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App routes={routes(store)} store={store} />
      </ThemeProvider>
    </BrowserRouter>
  </React.Fragment>
)
