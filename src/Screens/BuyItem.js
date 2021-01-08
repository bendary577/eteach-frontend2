import React, { Component } from "react";
import CustomerAccountNavBar from "../ScreenSnippets/CustomerAccNavBar";
import "../../public/css/buyitem.css";
import PaymentForm from "../Components/PaymentForm";
import BuyItemInfoCard from "../Components/BuyItemInfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";


class BuyItem extends Component {

    render() {
        return (
            <div className="parent-div">

                <CustomerAccountNavBar />

                {/*------------------------------ left side bar --------------------------------------------- */}

                <div className="container">
                    <div className="d-flex intro-headline mt-5">
                        <FontAwesomeIcon icon={faShoppingBasket} className=" fa-2x mr-2 mb-1"></FontAwesomeIcon>
                        <h2 className="font-weight-bold">Checkout</h2>
                    </div>
                    <div className="row">
                        <div className="left col-sm-12 col-md-6">
                            <PaymentForm />
                            <div className="clearfix">
                                <h5 className="float-left mb-4">
                                    we will use the info saved in your account
                                </h5>
                                <a href="/editprofile" className="btn btn-success float-right mb-3" role="button">
                                    <FontAwesomeIcon icon={faUserEdit} className="mr-2"></FontAwesomeIcon>
                                    edit profile info
                                </a>
                            </div>
                        </div>

                        {/*------------------------------ right side bar --------------------------------------------- */}

                        <div className="right col-sm-12 col-md-6">
                            <BuyItemInfoCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyItem;
