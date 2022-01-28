
import Shop from './Components/Shop/ShopContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';



const App = () => {
  return (
    <div >
      <Shop />
      {/* <Routes>
        <Route path='/products' render={()=> } />      
      </Routes> */}
    </div>
  );
}




const AppShopProducts = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
}

export default AppShopProducts;
