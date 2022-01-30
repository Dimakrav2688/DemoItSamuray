import React from 'react'
import Shop from './Components/Shop/ShopContainer'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Headers from './Components/Headers/Headers'
// import WithMaterialUI from '../src/Components/TestComponents/TestComponent-1'
import style from './App.css'



const App = () => {
  return (
    <div className={style.container}  >
      {/* < WithMaterialUI /> */}
      < Headers />
      < Shop />
      
    </div>
  )
}

const AppShopProducts = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
}

export default AppShopProducts;
