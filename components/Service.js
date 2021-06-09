import React from "react";

import classes from './Service.module.scss';
import {AiOutlineInbox} from 'react-icons/ai';
import {RiWallet3Line} from 'react-icons/ri';

import { Col, Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <Container className="myContainer my-2">
      <Row className={classes.desktop}>

        <Col>
            <div className={classes.service}>
                <AiOutlineInbox className={classes.icon}/>
                <div className={classes.text}>
                    <h3 className={classes.title}>Δωρεάν Αποστολή</h3>
                    <p className={classes.subtile}>Για αγορές άνω των 59€</p>
                </div>
            </div>
        </Col>

        <Col>
            <div className={classes.service}>
                <AiOutlineInbox className={classes.icon}/>
                <div className={classes.text}>
                    <h3 className={classes.title}>Δωρεάν Δείγματα</h3>
                    <p className={classes.subtile}>Τα επιλέγετε εσείς</p>
                </div>
            </div>
        </Col>

        <Col>
            <div className={classes.service}>
                <RiWallet3Line className={classes.icon}/>
                <div className={classes.text}>
                    <h3 className={classes.title}>Άτοκες Δόσεις</h3>
                    <p className={classes.subtile}>Για αγορές άνω των 100€</p>
                </div>
            </div>
        </Col>

        <Col>
            <div className={classes.service}>
                <AiOutlineInbox className={classes.icon}/>
                <div className={classes.text}>
                    <h3 className={classes.title}>Δωρεάν Αποστολή</h3>
                    <p className={classes.subtile}>Για αγορές άνω των 59€</p>
                </div>
            </div>
        </Col>


      </Row>

      <div className={`${classes.mobile} text-center my-3`}>
        <span className='font-weight-bold'>Δωρεάν Αποστολή </span>
            Για αγορές άνω των 59€
      </div>
    </Container>
  );
};

export default Service;
