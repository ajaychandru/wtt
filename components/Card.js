import React from 'react';

import Grid from '@mui/material/Grid';

import styles from "./Cards.module.css"



export default function Card(props) {
function handleClick(){
    window.location.href = "/post/"+props.link;
}
    return (


        <Grid className={styles.cardContainer} container>
            <Grid className={styles.imgContainer} item xs={12} sm={4}>

                    <img src={props.imgSrc} loading={props.loading} className={styles.cardImg}  onClick={handleClick} />
             

            </Grid>

            <Grid item xs={12} sm={8}>
                <div className={styles.cardContent} >

                    <a rel="preload" href={"/post/" + props.link} >{props.title}</a>
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