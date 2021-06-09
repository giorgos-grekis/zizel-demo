import React from "react";
import classes from "./product.module.scss";
import Link from "next/link";

import ButtonsPruducts from "./buttonsPruducts";
import { AiOutlineHeart } from "react-icons/ai";
import {SiFacebook} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaPinterest} from 'react-icons/fa'
import { Col, Container, Row } from "react-bootstrap";

const ProductOne = () => {
  return (

    <Container className="myContainer">

      <div className={`${classes.mobile} text-center mt-1 mb-4`}>
        <span className='font-weight-bold'>Δωρεάν Αποστολή </span>
            Για αγορές άνω των 59€
      </div>


      <div className={`${classes.product} row`}>

          {/* product thumbnail */}
        <div class="d-none d-lg-block col-lg-1">
          <div className={`${classes.productThumbnail}`}>
            <img
              src="./assets/images/product-1.jpg"
              alt="product-1"
            //   style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* product images */}
        <div class="col-12 mx-auto col-lg-5">
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

             <div className={classes.socialAll}>
                    <span className={`${classes.socialShare} `}>share</span>
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

          <div className="d-flex p-0">
            <div>
              <p className={classes.price}>13,02 €</p>
              <p className={classes.priceWin}>Κερδίζετε 5.58€</p>
            </div>
            <div>
              <del className={classes.priceDel}>18,60 €</del>
            </div>
          </div>

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
            </div>
            <div className="col-12 mb-2 mb-lg-0 col-lg-7">
              <Link href={"/cart"}>
                <a className={classes.button}>ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</a>
              </Link>
            </div>
            <div className="col-12 col-lg-2">
              <AiOutlineHeart className={`${classes.icons} d-none d-lg-block`} />
              <Link href={"/cart"}>
                <a className={classes.button_2}>
                  ΣΤΑ ΑΓΑΠΗΜΕΝΑ
                  <AiOutlineHeart className={classes.icons} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.underline}></div>
    </Container>
  );
};

export default ProductOne;
