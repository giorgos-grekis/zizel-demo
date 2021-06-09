import React, {useState, useEffect } from "react";
// import FirstLine from './common/firstLine'
import classes from "./header.module.scss";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import Image from "next/image";
import Link from 'next/link';
// import Container from "react-bootstrap/Container";

import NavBar from './NavBar';
import MessageTop from './common/messageTop';
import MobileMenu from "./MobileMenu";
import { Modal, Button, Col, Container, Row ,Nav} from "react-bootstrap";



const Header = () => {
  
  const [showmenu,setShowMenu] = useState(false)

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }


  function showModileMenu () {
    // return console.log('hello form mobile menu')
    setShowMenu(!showmenu)
  }


  const size = useWindowSize();



  return (
    <>
    {/* <MobileMenu hide={() => setShowMenu(false)} show={showmenu}/> */}
    <Modal
            
            show={showmenu}
            onHide={()=> setShowMenu(false)}
            dialogClassName={`mobilemodal`}
        >
          <Modal.Header style={{backgroundColor:"white"}} closeButton>
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            

            <div className={classes.link} href="/">ΜΑΡΚΕΣ</div>
            <div className={classes.link} href="/">SEASONAL</div>
            <div className={classes.link} href="/">NEW IN</div>
            <div className={classes.link} href="/">ΜΑΛΛΙΑ</div>
            <div className={classes.link} href="/">ΠΡΟΣΩΠΟ</div>
            <div className={classes.link} href="/">ΣΩΜΑ</div>
            <div className={classes.link} href="/">ΝΥΧΙΑ</div>
            <div className={classes.link} href="/">MAKEUP</div>
            <div className={classes.link} href="/">OUTFIT</div>
            <div className={classes.link} href="/">ΑΝΔΡΑΣ</div>
            <div className={classes.link} href="/">ΔΩΡΑ</div>
            <div className={classes.link} href="/">ΔΕΙΓΜΑΤΑ</div>
            <div className={classes.link} href="/">BLOG</div>
          
        

            
         
          </Modal.Body>
        </Modal>
    <Container className={`${classes.containerHeader} `}>
      {/* <img src='./assets/images/logo.png'/> */}
      <div className={classes.headerFlex}>

        
    {size.width <= 991 ? 
    ( 
        <a onClick={showModileMenu}>
        <Image
            src="/assets/images/logo-mobile.png"
            alt="Logo Images"
            width={146}
            height={41}
        />
        </a>
      )
      : (
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
      )
    }

      {/* <Link href='/'>
        <a>
        <Image
            src="/assets/images/logo-mobile.png"
            alt="Logo Images"
            width={146}
            height={41}
        />
        </a>
      </Link> */}

      {/* <img src='./assets/images/logo-mobile.png' /> */}
    

    {/* <Link href='/'>
        <a>
        <Image
            src="/assets/images/logo.png"
            alt="Logo Images"
            width={269}
            height={75}
        />
        </a>
    </Link> */}

        <div className={classes.search}>
            <input
            className={classes.input}
            type="text"
            placeholder="Αναζητήστε Προϊόν ή Brand..."
            />
            <AiOutlineSearch className={classes.searchIcon}/>    
        </div>
      


      
      <div className={classes.header}>
        <p className={classes.login}>Είσοδος / Εγγραφή</p>
        <div >
          <AiOutlineSearch className={`${classes.icons} ${classes.iconSpecial}`}/>   
        </div>
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
    </>
  );
};

export default Header;
