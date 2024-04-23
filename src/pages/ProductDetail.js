import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {  toast } from 'react-toastify';
export default function ProductDetail({cartItems, setCartItems}) {
   const [product, setProduct] = useState(null);
   const [qty ,setQty] = useState(1)
   const {id} = useParams();

   useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+'/product/'+id)
    .then(res => res.json())
    .then(res => setProduct(res.product))
  },[]) // for get the datas 

//   ADD TO CART FUNCTION 
function adTtoCart() {
 const itemExist =  cartItems.find((item) => item.product._id == product._id)
 //IF ITEM IS EXISTE
 if (!itemExist) {
  const newItem = {product, qty}
 setCartItems((state) => [...state, newItem]);
 toast.success('card item added successfully')
 } 
}

//incress qty
function increaseQty() {
  if (product.stock == qty) {
    return;
  } else{
    setQty((state) => state + 1);
  }
}

//incress qty
function decreaseQty() {
  if (qty > 1) {
    setQty((state) => state - 1);
  } 
}


  return ( product &&
    <div className="container container-fluid">
      <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <img
            src={product.images[0].image}
            alt="sdf"
            height="500"
            width="500"
          />
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3>{product.name}</h3>
          <p id="product_id"> # {product._id}</p>

          <hr />

          <div className="rating-outer">
            <div className="rating-inner" style={{width : `${product.ratings/5 *100}%`}}></div>
          </div>

          <hr />

          <p id="product_price">${product.price}</p>
          <div className="stockCounter d-inline">
            <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

            <input
              type="number"
              className="form-control count d-inline"
              value={qty}
              readOnly
            />

            <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
          </div>
          <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4"
            onClick={adTtoCart}
            disabled = {product.stock == 0}
          >
            Add to Cart
          </button>

          <hr />

          <p>
            Status: <span className={product.stock > 0 ? 'text-success' : 'text-danger' } id="stock_status" >{product.stock > 0 ? 'In Stock' : 'out of stock'}</span>
          </p>

          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>
            {product.description}
          </p>
          <hr />
          <p id="product_seller mb-3">
            Sold by: <strong>{product.seller}</strong>
          </p>

          <div className="rating w-50"></div>
        </div>
      </div>
    </div>
  );
}
