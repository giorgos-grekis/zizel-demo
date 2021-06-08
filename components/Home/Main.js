import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
// import { Button } from 'react-bootstrap'

import classes from './main.module.scss'

const Main = () => {
    return (
        <div className={classes.main}>

            <div>
                <div className={classes.first}>
                    <h3>MAKE A SPLASH IN ESSIE PASTELS</h3>
                    <p>
                        New essis spring 
                        <br />
                        collection 2020
                      
                    </p>
                    {/* <Button>ΑΝΑΚΑΛΥΨΕ ΤΗΝ</Button> */}
                    <Link href='/product'>
                        <a className={classes.button}> 
                            ΑΝΑΚΑΛΥΨΕ ΤΗΝ
                        </a>
                    </Link>
                </div>
            </div>

            <div>
                {/* <Image 
                src='/assets/images/mainImage.png'
                alt='Main Logo'
                width={907}
                height={550}
                /> */}
                <img src='./assets/images/mainImage.png' alt='Main Logo' />
            </div>
            
        </div>
    )
}

export default Main
