import React, { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';

import styles from "./Card.module.css"




export default  function Card(props) { 

    return (


        <Grid className={styles.cardContainer} container>
            <Grid className={styles.imgContainer} item xs={12} sm={12} md={4}>

            <img src={props.imgSrc}  className={styles.cardImg} alt={props.title} />

            </Grid>

            <Grid item xs={12} sm={8}>
                <div className={styles.cardContent} >

                    <a rel="preload" href='#' >{props.title}</a>
                    <span>
                        {props.category}
                    </span>
                    <span>
                        {props.date}
                    </span>

                    <p>
                        {props.content + "...."}
                    </p>

                </div>

            </Grid>
            <div className={styles.hr}>

            </div>
        </Grid>
    );
}



