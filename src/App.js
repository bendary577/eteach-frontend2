import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import SignUpAs from "./Screens/SignUpAs";
import ForgetPassword from './Screens/ForgetPassword';
import CustomerAccount from './Screens/CustomerAccount';
import EditProfile from "./Screens/EditProfile";
import MakeComplaint from './Screens/MakeComplaint';
import BuyItem from './Screens/BuyItem';
import MyOrders from './Screens/MyOrders';
import OrderDetails from './Screens/OrderDetails';
import MyCart from './Screens/MyCart';
import Store from './Screens/Store';
import CreateStore from './Screens/CreateStore';
import Uploaditem from './Screens/Uploaditem';
import MyInvoices from './Screens/MyInvoices';
import MakeInvoice from './Screens/MakeInvoice';
import ViewItemDetails from './Screens/ViewItemDetails';
import SellerProfile from './Screens/SellerProfile';
import './App.css';
import BrowseStores from './Screens/BrowseStores';
import SigninPage from './Screens/SigninPage';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/signin">
                        <SigninPage />
                    </Route>

                    <Route exact path="/signup">
                        <SignUp />
                    </Route>

                    <Route exact path="/registeras">
                        <SignUpAs />
                    </Route>

                    <Route exact path="/forgetpassword">
                        <ForgetPassword />
                    </Route>

                    <Route exact path="/customerprofile">
                        <CustomerAccount />
                    </Route>

                    <Route exact path="/editprofile">
                        <EditProfile />
                    </Route>

                    <Route exact path="/complaint">
                        <MakeComplaint />
                    </Route>

                    <Route exact path="/buyitem">
                        <BuyItem />
                    </Route>

                    <Route exact path="/myorders">
                        <MyOrders />
                    </Route>

                    <Route exact path="/orderDetails">
                        <OrderDetails />
                    </Route>

                    <Route exact path="/mycart">
                        <MyCart />
                    </Route>

                    <Route exact path="/store">
                        <Store />
                    </Route>

                    <Route exact path="/createstore">
                        <CreateStore />
                    </Route>

                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route exact path="/viewitem">
                        <ViewItemDetails />
                    </Route>

                    <Route exact path="/uploaditem">
                        <Uploaditem />
                    </Route>

                    <Route exact path="/makeinvoice">
                        <MakeInvoice />
                    </Route>

                    <Route exact path="/myinvoice">
                        <MyInvoices />
                    </Route>

                    <Route exact path="/sellerProfile">
                        <SellerProfile />
                    </Route>

                    <Route exact path="/browsestores">
                        <BrowseStores />
                    </Route>

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
