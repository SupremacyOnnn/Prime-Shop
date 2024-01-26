import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeScreen from './screens/HomeScreens';
import ProductScreens from './screens/ProductScreens';
import { Provider } from 'react-redux';
import store from './store';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegistrationScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute'
import OrderListScreen from './screens/Admin/OrderListScreen';
import ProductListScreen from './screens/Admin/ProductListScreen';
import ProductEditScreen from './screens/Admin/ProductEditScreen';
import UserListScreen from './screens/Admin/UserListScreen';
import UserEditScreen from './screens/Admin/UserEditScreen';
import {HelmetProvider} from 'react-helmet-async'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>
      <Route index={true} path='/' element={<HomeScreen></HomeScreen>}/>
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<HomeScreen />}
      />
      <Route index={true} path='/product/:id' element={<ProductScreens></ProductScreens>}/>
      <Route index={true} path='/cart' element={<CartScreen/>}/>
      <Route index={true} path='/login' element={<LoginScreen/>}/>
      <Route index={true} path='/register' element={<RegisterScreen/>}/>



      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrdersScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>

      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
        <Route
          path='/admin/productlist/:pageNumber'
          element={<ProductListScreen />}
        />

        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />
      </Route>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router}/>
        </PayPalScriptProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
