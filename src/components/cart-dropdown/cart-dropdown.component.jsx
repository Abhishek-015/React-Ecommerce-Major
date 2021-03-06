import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custum-button.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) =>(
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart : {cartItems}})=>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)
