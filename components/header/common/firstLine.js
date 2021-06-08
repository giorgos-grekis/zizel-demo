import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import classes from './firstLine.module.scss';

const FirstLine = () => {



    return (
        <div className={classes.firstLine}>
            <Container className={classes.container}>
                <div>
                    <span className={classes.phone}>210 960 81 10</span>
                    <span className={classes.date}>Δευ-Σαβ 09:00 - 18:00</span>
                </div>

                <div className={classes.language}>
                    <span className={classes.active}>GR</span>
                    <span className={classes.border}></span>
                    <span>EN</span>
                </div>

            </Container>
        </div>
    )
}

export default FirstLine
