import React from "react";
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
        <div class="col-6 ">contect</div>
      </div>
    </Container>
  );
};

export default ProductOne;
