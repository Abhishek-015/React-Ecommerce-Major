import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // connect is higher order component that takes two fucnctions in two different parameter and gives the souped component
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../firebase/firebase.utils";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser,hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">Shop</Link>
      <Link className="option" to="/contact">Contact</Link>
        {currentUser ? 
          <Link className="option" onClick={()=>auth.signOut()}>Sign Out</Link>
         : 
          <Link className="option" to="/signin"> Sign In</Link>
        }
        <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
    
  </div>
);

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
