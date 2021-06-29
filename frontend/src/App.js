import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router ,Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'
import UserListScreen from './Screens/UserListScreen'
import UserEditScreen from './Screens/UserEditScreen'
import ProductListScreen from './Screens/ProductListScreen'
import ProductEditScreen from './Screens/ProductEditScreen'
import OrderListScreen from './Screens/OrderListScreen'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className = 'py-3'>
        <Container>
          <Route path = '/login' component = {LoginScreen} />
          <Route path = '/order/:id' component = {OrderScreen} />
          <Route path = '/payment' component = {PaymentScreen} />
          <Route path = '/shipping' component = {ShippingScreen} />
          <Route path = '/placeorder' component = {PlaceOrderScreen} />
          <Route path = '/register' component = {RegisterScreen} />
          <Route path = '/profile' component = {ProfileScreen} />
          <Route exact path = '/' component = {HomeScreen} />
          <Route path = '/page/:pageNumber' component = {HomeScreen} />
          <Route path = '/search/:keyword/:page/:pageNumber' component = {HomeScreen} />
          <Route exact path = '/search/:keyword' component = {HomeScreen} />
          <Route  path = '/product/:id' component = {ProductScreen} />
          <Route  path = '/cart/:id?' component = {CartScreen} />
          <Route  path = '/admin/userlist/' component = {UserListScreen} />
          <Route  exact path = '/admin/productlist' component = {ProductListScreen} />
          <Route  exact path = '/admin/productlist/:pageNumber' component = {ProductListScreen} />
          <Route  path = '/admin/orderlist/' component = {OrderListScreen} />
          <Route  path = '/admin/user/:id/edit' component = {UserEditScreen} />
          <Route  path = '/admin/product/:id/edit' component = {ProductEditScreen} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
