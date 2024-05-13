import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import "../css/home.css";
export default function Home() {
  const [products, setProducts] = useState([]); // for store the api datas
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/products?" + searchParams)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, [searchParams]); // for get the datas

  return (
    <Fragment>
      <div className="main_section">
      <section id="products" className="  container mt-3">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="home_section">
            <div className="row">
              <div className="col-md-6">
                <h3 className="home_mainText">Fall in love Technology</h3>
                <h4 className="Home_subText1">HUEG SALE !</h4>
                <p className="Home_subText2">Save up to 50% off</p>
              </div>
              <div className="col-md-6">
                <img src="./images/Home_images/laptopandphone.png" />
               
              </div>
              
            </div>
          </div>
        </div>
      </section>
      </div>
     

      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
