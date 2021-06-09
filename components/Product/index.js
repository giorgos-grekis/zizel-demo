import React from "react";
import classes from './product.module.scss';
import Link from 'next/link'

import ButtonsPruducts from './buttonsPruducts';
import { AiOutlineHeart } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";

const ProductOne = () => {
  return (
    // <Container className='myContainer'>
    //   <Row>
    //     <Col xl={1} sm={0}>
    //         small Images
    //     </Col>
    //     <Col xl={5}>
    //         largs Images
    //     </Col>
    //     <Col xl={6}>
    //         contect
    //     </Col>
    //   </Row>
    // </Container>

    <Container className="myContainer">
      <div className="row">
        <div class="col-lx-1 d-sm-none ">small Images</div>
        <div class="col-5 ">largs Images</div>

        <div class="col-6 description">
            
            <img src='./assets/images/product-image.png' alt='' />
            
            <p className={classes.title}>
                L' Oreal Professionnel Pro Longer
                <br />
                Shampoo (300ml)
            </p>

            <p className={classes.code}>Κωδ: <span>LRL-E277300</span></p>

            <p className={classes.availability}>
                Διαθεσιμότητα Άμεση
                <span>
                   &nbsp; (1 έως 2 εργάσιμες)
                </span>
            </p>

            <div className='d-flex p-0'>
                <div>
                    <p className={classes.price}>13,02 €</p>
                    <p className={classes.priceWin}>Κερδίζετε 5.58€</p>
                </div>
                <div>
                    <del className={classes.priceDel}>18,60 €</del>
                </div>
            </div>

            <p className='mt-3'>Σαμπουάν Κατά της Ψαλίδας που αποτελεί την ιδανική περοποίηση για μαλλία με λέπτυνση και τάση για ψαλίδα στις άκρες.</p>

            <div className={classes.choice}>
                <span style={{fontWeight:'bold', marginRight: '1rem'}}>Απόχρωση</span>
                <select>
                    <option value="volvo">Επιλέξτε</option>
                    <option value="saab">Απόχρωση 1</option>
                    <option value="mercedes">Απόχρωση 2</option>
                    <option value="audi">Απόχρωση 3</option>
                </select>
            </div>

            <div className={classes.details}>
                <span style={{fontWeight:'bold'}}>Αποκλειστικά στο Zizel Beauty Shop: &nbsp;</span>
                Το συγκεκριμένο προϊόν συνοδεύεται από θήκη προστασίας & μεταφοράς αξίας 29,90€ !
            </div>

            <div className={classes.underline}></div>

            <div className='row'>
                <div className='col-3'>
                    <ButtonsPruducts />
                    {/* <div className="row mx-auto">
                        <div className="col-3">-</div>
                        <div className="col-3">1</div>
                        <div className="col-3">+</div>
                    </div> */}
                </div>
                <div className='col-7'>
                    <Link href={'/cart'}>
                        <a className={classes.button}>
                            ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ
                        </a>
                    </Link>
                </div>
                <div className='col-2'>
                 <AiOutlineHeart className={classes.icons}/>
                </div>
            </div>

        </div>
      </div>
    </Container>
  );
};

export default ProductOne;
