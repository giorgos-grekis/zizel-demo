import React from 'react'

import MessageTop from '../components/header/common/messageTop'
import Breadcrumb from '../components/Breadcrumb';
import ProductOne from  '../components/Product/index'

import { Container } from 'react-bootstrap';

const product = () => {
    return (
        <Container className='myContainer'>
            <MessageTop />
            <Breadcrumb />

            <ProductOne />
            
        </Container>
    )
}

export default product
