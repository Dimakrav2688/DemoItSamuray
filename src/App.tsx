// @ts-ignore
import React, { Suspense } from 'react'
// @ts-ignore
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// @ts-ignore
import store from "./redux/redux-store.ts";
// @ts-ignore
import Headers from './Components/Headers/Headers.tsx'
// @ts-ignore
import Product from './Components/Shop/Product.tsx'
// @ts-ignore
import style from './App.css'
import i18n from './i18n'
// @ts-ignore
import { I18nextProvider } from "react-i18next";
// @ts-ignore
import { QueryParamProvider } from 'use-query-params';

const Shop = React.lazy(() => import('./Components/Shop/ShopContainer'))


const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Headers />
      <Route path='/' render={() => <Shop/>} />
      <Route path='/:product.name?' render={() => <Product />} />
    </div>
  )
}

const AppShopProducts: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <QueryParamProvider ReactRouterRoute={Route}>
              <App />
            </QueryParamProvider>
          </Provider>
        </I18nextProvider>
      </Suspense >
    </BrowserRouter>
  )
}

export default AppShopProducts;
