// @ts-ignore
import React, {Suspense} from 'react'
// @ts-ignore
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
// @ts-ignore
import store from "./redux/redux-store.ts";
// @ts-ignore
import Headers from './Components/Headers/Headers.tsx'
// @ts-ignore
import style from './App.css'
import i18n from './i18n'
import {I18nextProvider} from "react-i18next";
import { QueryParamProvider } from 'use-query-params';

const Shop = React.lazy(() => import('./Components/Shop/ShopContainer'))


const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Headers />
      <Suspense fallback={<div>Loading...</div>}>
        <Shop />
      </Suspense>
    </div>
  )
}

const AppShopProducts: React.FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <Router>
              <QueryParamProvider ReactRouterRoute={Route}>
                <App/>
              </QueryParamProvider>
            </Router>
          </Provider>
      </I18nextProvider>
    </Suspense>
  )
}

export default AppShopProducts;
