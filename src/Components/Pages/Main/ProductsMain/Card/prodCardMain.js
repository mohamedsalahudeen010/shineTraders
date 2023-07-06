
import { Modal } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../Action/cartActions";
import "./ProdCardMain.css"
import { addToCart, fetchAddToCart } from "../../../../../Base/redux/Cart/cartAction";


const ProductCardMain = ({ product }) => {
  const history = useHistory();
  const [varient, setVarient] = useState(1);
  
  const [quantity, setQuantity] = useState(1);


  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(
      addToCart(
        product,
        varient,
        quantity
        
      )
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row prod-card-main-main">



      <Card className="prod-card-main p-1 ">
        <Card.Title
        className="prod-card-name-main">{product.name}</Card.Title>
        <Card.Img
          variant="top"
          className="card-image-main"
          src={product.image}
          onClick={handleShow}
          
        />
        <Card.Body>
          {/* ======================================================*/}
          <div className="flex-container card-body">
          <div className="w-100 m-1 prod-card-type2-main">
            {product.type2}
            </div>
          </div>
          <div className="flex-container">
            <div className="w-100 m-1 prod-varient-main">
              Varients
              <select
                className="form-control "
                value={varient}
                onChange={(e) => {
                  setVarient(e.target.value);
                }}
              >
                {[1,4,10,20].map((varient) => (
                  <option key={varient} value={varient}>
                    {varient} litre
                  </option>
                ))}
              </select>
            </div>
            <div className="w-100 ">
              Quantity
              <select
                className="Quantity form-control m-1"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
              {[...Array(10).keys()].map((arr, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

         
          {/* <<<<<<<<<<<<<<<<<<<PRICE>>>>>>>>>>>>>>>>> */}
          <div className="flex-container">
            <div className="w-100">
              <h5
              className="prod-price-main">
                Price :{" "}
                {varient *
                  quantity * product.prize}{" "}
                Rs/-
              </h5>
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<ADD TO CART>>>>>>>>>>>>>>>>> */}
          <div className="flex-container">
            <div className="w-100">
              <button className=" prod-main-btn"
              onClick={()=>dispatch(fetchAddToCart(product,varient,quantity))} >
              
                 Add to Cart
              </button>
            </div> 
           
         </div>  

 {/* <div className="w-100">
              <button
                className="m-1 card_btn"
                onClick={() => {
                  history.push(`/addtocart`);
                }}
              >
                Buy Now
              </button>
            </div> */}
        </Card.Body>
      </Card>


{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="flex-container">
              <div className="w-100 ">
                <img
                  className="image-fluid img-model"
                  style={{ height: "20rem", width: "20rem" }}
                  src={product.image}
                  alt="pizza"
                ></img>
              </div>
            </div>
          </Modal.Body>
          <p style={{ width: "90%", marginLeft: "0.5rem" }}>
            {product.description}
          </p>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProductCardMain;
