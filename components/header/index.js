import React from "react";
// import FirstLine from './common/firstLine'
import classes from "./header.module.scss";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import Image from "next/image";
import Link from 'next/link';
import Container from "react-bootstrap/Container";

import NavBar from './NavBar';
import MessageTop from './common/messageTop';

const Header = () => {
  return (
    <Container className={`${classes.containerHeader} `}>
      {/* <img src='./assets/images/logo.png'/> */}
      <div className={classes.headerFlex}>


    <Link href='/'>
        <a>
        <Image
            src="/assets/images/logo.png"
            alt="Logo Images"
            width={269}
            height={75}
        />
        </a>
    </Link>

        <div className={classes.search}>
            <input
            className={classes.input}
            type="text"
            placeholder="Αναζητήστε Προϊόν ή Brand..."
            />
            <AiOutlineSearch className={classes.searchIcon}/>    
        </div>
      


      
      <div className={classes.header}>
        <p>Είσοδος / Εγγραφή</p>
        <div className={classes.userIcon}>
          <AiOutlineUser className={classes.icons}/>
          <span className={classes.arrowDown}></span>
        </div>
        <div >
          <AiOutlineHeart className={classes.icons}/>
        </div>
        <div >
          <BiShoppingBag className={classes.icons}/>
        </div>
      </div>
      </div>

      <div className={classes.border}></div>


      <NavBar />

      {/* <MessageTop /> */}

    </Container>
  );
};

export default Header;
