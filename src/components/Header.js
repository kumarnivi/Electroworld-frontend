// import Search from "./Search";
// import { Link } from "react-router-dom";
// import '../components/header.css'
// export default function Header({cartItems}) {
//     return     <nav className="navbar row">
//     <div className="col-12 col-md-3">
//       <div className="navbar-brand">
//         <Link to="/">
//         <img width="100px" src="/images/logo.png" />
//         </Link>
       
//       </div>
//     </div>

    

//     <div className="col-12 col-md-6 mt-4 mt-md-0 text-right">
//       <Link to={"/cart"}>
//       <span id="cart" className="ml-3" >Cart</span>
//       <span className="ml-1" id="cart_count">{cartItems.length}</span>
//       </Link>
     
//     </div>
//     <div className="col-12 col-md-3 mt-2 mt-md-0">
//     <Search/>
//     </div>
//   </nav>
// }



import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import '../css/header.css';

export default function Header({ cartItems }) {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to="/">
            <img width="100px" src="/images/logo.png" alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-4 mt-md-0 text-right link-col">
       
        <Link to="/favorites" className="nav-link ml-3" >
          Favorites
        </Link>
        <Link to="/contact" className="nav-link ml-3">
          Contact
        </Link>
        <Link to="/profile" className="nav-link ml-3">
          Profile
        </Link>
        <Link to="/cart" className="nav-link ml-3"  style={{position:"relative"}}>
          Cart <span id="cart_count">{cartItems.length}</span>
        </Link>
      </div>

      <div className="col-12 col-md-3 mt-2 mt-md-0">
        <Search />
      </div>
    </nav>
  );
}
