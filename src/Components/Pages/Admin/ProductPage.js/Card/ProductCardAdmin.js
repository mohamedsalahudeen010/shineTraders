
import { Modal } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../Action/cartActions";
import "./ProdCardAdmin.css"
import { addToCart, fetchAddToCart } from "../../../../../Base/redux/Cart/cartAction";


const ProductCardAdmin = ({ product }) => {
  const history = useHistory();
  


  const dispatch = useDispatch();

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row prod-card-main-admin">



      <Card className="prod-card-admin p-1 ">
        <Card.Title
        className="prod-card-name-admin">{product.name}</Card.Title>
        <Card.Img
          variant="top"
          className="card-image-admin"
          src={product.image}
          onClick={handleShow}
          
        />
        <Card.Body>
          {/* ======================================================*/}
          <div className="flex-container card-body">
          <div className="w-100 prod-card-type2-admin">
            {product.type2}
            </div>
          </div>
          <div className="flex-container">
            <div className="w-100 prod-varient-admin">
             <div style={{fontWeight:"bold"}}>Quantity</div> 
              {product.quantity}
            </div>
            <div className="w-100 ">
            <div style={{fontWeight:"bold"}} >Stock</div> 
              {product.stock} Nos
            </div>
          </div>

         
          {/* <<<<<<<<<<<<<<<<<<<PRICE>>>>>>>>>>>>>>>>> */}
          <div className="flex-container">
            <div className="w-100">
              <h5
              className="prod-price-admin">
                Price :{" "}
                { product.prize}{" "}
                Rs/-
              </h5>
            </div>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<ADD TO CART>>>>>>>>>>>>>>>>> */}
          <div className="flex-container">
            <div className="w-100">
             
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

export default ProductCardAdmin;
