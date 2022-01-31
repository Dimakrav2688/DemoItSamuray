import React, {Suspense}  from 'react'
import Shop from './Components/Shop/ShopContainer'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/redux-store';
import Headers from './Components/Headers/Headers'
// import WithMaterialUI from '../src/Components/TestComponents/TestComponent-1'
import style from './App.css'
import i18n from './i18n'
import {I18nextProvider} from "react-i18next";


const App = () => {
    return (
        <div className={style.container}>
            {/* < WithMaterialUI /> */}
            < Headers/>
            < Shop/>
        </div>
    )
}

const AppShopProducts = () => {
    return (
        <Suspense fallback={"Loading..."}>
            <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
            </I18nextProvider>
        </Suspense>
    )
}

export default AppShopProducts;
