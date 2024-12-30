import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DbProducts from "../data/Productslist";

export const SinglePage = () => {
  const [pPrice, setPPrice] = useState(1);

  const params = {productId:"1"}

  let fData = DbProducts.find((x) => x.id === Number(params?.productId));

  // price increasing function

  const increasePrice = () => {
    setPPrice(pPrice + 1);
  };
  // price decreasing function

  const decreasePrice = () => {
    if (pPrice > 1) {
      setPPrice(pPrice - 1);
    }
  };

  const navigate = useNavigate();

  // go back to men product page

  const goBacktoMenPage = () => {
    navigate("/men");
  };

  return (
    <>
      <h1 className="lead my-5 fs-2 fw-bold text-center text-uppercase">
        {fData?.title}
      </h1>

      <button onClick={goBacktoMenPage} className="btn btn-dark my-4 px-5 py-2">
        Go Back to Men Page
      </button>

      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-primary">{fData?.title}</h3>
            <h6 className="card-subtitle">{fData?.category}</h6>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-6">
                <div className="white-box text-center">
                  <img
                    src={fData?.image}
                    height={400}
                    width={300}
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6">
                <h4 className="box-title mt-5">Product description</h4>
                <p>{fData?.description}</p>
                <h2 className="mt-5">
                  $ {fData?.price}
                  <small className="text-success">(20%off)</small>
                </h2>
                <button
                  className="btn btn-dark btn-rounded mr-1"
                  data-toggle="tooltip"
        
                  data-original-title="Add to cart"
                >
                  <i className="fa fa-shopping-cart" />
                </button>
                <button className="btn btn-primary btn-rounded">Buy Now</button>
                <h3 className="box-title mt-5">Key Highlights</h3>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check text-success" />
                    Sturdy structure
                  </li>
                  <li>
                    <i className="fa fa-check text-success" />
                    Designed to foster easy portability
                  </li>
                  <li>
                    <i className="fa fa-check text-success" />
                    Perfect furniture to flaunt your wonderful collectibles
                  </li>
                </ul>

                <div>
                  <button onClick={increasePrice} className="btn btn-dark me-2">
                    +
                  </button>
                  {pPrice}
                  <button onClick={decreasePrice} className="btn btn-dark ms-2">
                    -
                  </button>
                  <p className="text-warning fw-bold fs-1">
                    Total Amount: {pPrice * fData?.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
