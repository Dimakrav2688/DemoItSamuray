import React from 'react'
import Shop from './Components/Shop/ShopContainer'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';



const App = () => {
  return (
    <div >
      < Shop/>
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
