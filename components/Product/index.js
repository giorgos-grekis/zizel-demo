import React from "react";
import classes from "./product.module.scss";
import Link from "next/link";
import ButtonsPruducts from "./buttonsPruducts";
import { AiOutlineHeart } from "react-icons/ai";
import {SiFacebook} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaPinterest} from 'react-icons/fa'
import { Modal, Col, Container, Row } from "react-bootstrap";
import { useState } from "react"

const ProductOne = () => {


  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (

      <Container className="myContainer my-5">

        <Modal
            centered
            show={show}
            onHide={handleClose}
            dialogClassName={`modal-75w`}
        >
          <Modal.Header style={{backgroundColor:"#ebebeb"}} closeButton>
            <Modal.Title>Προστέθηκε στο καλάθι σας</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Row>
                <Col md={5}>
                  <img style={{maxWidth:'100%', height:'auto', border:'1px solid #ebebeb'}} src="/assets/images/product-1.jpg"/>
                </Col>
                <Col md={7}>
                  <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>L' Oreal Professionnel Pro Longer Shampoo (300ml)</p>
                  <div className={classes.code}>
                    Κωδ: <span>LRL-E277300</span>
                  </div>
                  <div>Ποσότητα: 1</div>
                  <div className={`flex my-3`}>
                    <div>
                      <span style={{fontSize:'1.5rem', fontWeight:'bold'}}>13,02 €</span>
                      <span style={{fontSize:'1.2rem', color:'#6c757d', marginLeft:'5px', textDecoration:'line-through'}}>18,60 €</span>
                    </div>
                    <div>
                      <span className={classes.priceWin}>Κερδίζετε 5.58€</span>
                    </div>
                  </div>
                  <div style={{backgroundColor:"#e7f9fb", padding:'15px'}} className={`d-flex justify-content-between`}>
                    <div><strong>2</strong> Προϊόντα στο καλάθι</div>
                    <div>Σύνολο: <strong>25,02</strong></div>
                  </div>
                </Col>
              </Row>
              <Row className={`my-4`}>
                <Col md={6}>
                  <span className={`d-flex justify-content-center`} style={{color:'#15c0d5', backgroundColor:"#fff", cursor:'pointer', padding:'10px', border:'1px solid #e4e4e4'}} >ΣΥΝΕΧΕΙΑ ΑΓΟΡΩΝ</span>
                </Col>
                <Col md={6}>
                  <span className={`d-flex justify-content-center`} style={{color:'#fff', backgroundColor:"#15c0d5", cursor:'pointer', padding:'10px',  border:'1px solid #15c0d5'}} >ΔΕΙΤΕ ΤΟ ΚΑΛΑΘΙ</span>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>

        <div className={`${classes.mobile} text-center mt-1 mb-4`}>
          <span className='font-weight-bold'>Δωρεάν Αποστολή </span>
          Για αγορές άνω των 59€
        </div>

        <div className={`${classes.product} row`}>

          {/* product thumbnail */}
          <div className="d-none d-lg-block col-lg-1">
            <div className={`${classes.productThumbnail}`}>
              <img
                  src="./assets/images/product-1.jpg"
                  alt="product-1"
                  //   style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* product images */}
          <div className="col-12 mx-auto col-lg-5">
            <div className={classes.productImage}>
              <img
                  src="./assets/images/product-1.jpg"
                  alt="product-1"
                  //   style={{ width: "100%" }}
              />
              <div className={classes.discount}>
                -20%
              </div>

              <div className={classes.new}>
                NEW
              </div>
            </div>
            {/* social icons */}
            {/* <div className='row mx-auto w-50 mt-3'>
                <div 
                className={`${classes.socialShare} col-3 mr-auto`} 
                >share</div>

                <div className={`${classes.social} col-2 mr-auto`}>
                <SiFacebook />
                </div>
                <div className={`${classes.social} col-2 mr-auto`}>
                    <AiFillTwitterCircle />
                </div>
                <div className={`${classes.social} col-2 mr-auto`}>
                    <FaPinterest />
                </div>
             </div> */}

            <div className={classes.socialAll}>
              <span className={`${classes.socialShare} `}>Share</span>
              <SiFacebook className={`${classes.social}`}/>
              <AiFillTwitterCircle className={`${classes.social}`}/>
              <FaPinterest className={`${classes.social}`}/>
            </div>
          </div>

          <div class="col-12 mx-auto mt-5 mt-lg-0 col-lg-6 description">
            <img src="./assets/images/product-image.png" alt="" />

            <p className={classes.title}>
              L' Oreal Professionnel Pro Longer
              <br />
              Shampoo (300ml)
            </p>

            <p className={classes.code}>
              Κωδ: <span>LRL-E277300</span>
            </p>

            <p className={classes.availability}>
              Διαθεσιμότητα Άμεση
              <span>&nbsp; (1 έως 2 εργάσιμες)</span>
            </p>

            <div className={`flex my-3`}>
              <div>
                <span style={{fontSize:'1.5rem', fontWeight:'bold'}}>13,02 €</span>
                <span style={{fontSize:'1.2rem', color:'#6c757d', marginLeft:'5px', textDecoration:'line-through'}}>18,60 €</span>
              </div>
              <div>
                <span className={classes.priceWin}>Κερδίζετε 5.58€</span>
              </div>
            </div>

            {/*<div className="d-flex p-0">*/}
            {/*  <div>*/}
            {/*    <p className={classes.price}>13,02 €</p>*/}
            {/*    <p className={classes.priceWin}>Κερδίζετε 5.58€</p>*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <del className={classes.priceDel}>18,60 €</del>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <p className="mt-3">
              Σαμπουάν Κατά της Ψαλίδας που αποτελεί την ιδανική περοποίηση για
              μαλλία με λέπτυνση και τάση για ψαλίδα στις άκρες.
            </p>

            <div className={classes.choice}>
            <span style={{ fontWeight: "bold", marginRight: "1rem" }}>
              Απόχρωση
            </span>
              <select>
                <option value="volvo">Επιλέξτε</option>
                <option value="saab">Απόχρωση 1</option>
                <option value="mercedes">Απόχρωση 2</option>
                <option value="audi">Απόχρωση 3</option>
              </select>
            </div>

            <div className={classes.details}>
            <span style={{ fontWeight: "bold" }}>
              Αποκλειστικά στο Zizel Beauty Shop: &nbsp;
            </span>
              Το συγκεκριμένο προϊόν συνοδεύεται από θήκη προστασίας & μεταφοράς
              αξίας 29,90€ !
            </div>

            <div className={classes.underline}></div>

            <div className="row">
              <div className="col-12 mb-3 mb-lg-0 col-lg-3">
                <ButtonsPruducts />
                {/* <div className="row mx-auto">
                        <div className="col-3">-</div>
                        <div className="col-3">1</div>
                        <div className="col-3">+</div>
                    </div> */}
              </div>
              <div className="col-12 mb-2 mb-lg-0 col-lg-7">
                {/*<Link href={"/cart"}>*/}
                {/*  <a className={classes.button}>ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</a>*/}
                {/*</Link>*/}
                <span onClick={handleShow} className={classes.button}>ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</span>
              </div>
              {/*<div className="col-12 col-lg-2 d-flex align-items-center">*/}
              {/*  /!*<AiOutlineHeart className={classes.icons} />*!/*/}
              {/*  <AiOutlineHeart className={`${classes.icons} d-none d-lg-block`} />*/}
              {/*  <Link href={"/product"}>*/}
              {/*    <a className={classes.button_2}>*/}
              {/*      ΣΤΑ ΑΓΑΠΗΜΕΝΑ*/}
              {/*      <AiOutlineHeart className={classes.icons} />*/}
              {/*    </a>*/}
              {/*  </Link>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>

        <div className={classes.underline}></div>
      </Container>
  );
};

export default ProductOne;
