import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import MessageTop from '../components/header/common/messageTop'
import Service from '../components/Service'
import Main from  '../components/Home/Main'


import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="myContainer">

      <MessageTop />

      <Service />

      <Main />




    </Container>
  )
}
