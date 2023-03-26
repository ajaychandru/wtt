import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from "./Cards.module.css"

import Fab from '@mui/material/Fab';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ShareIcon from '@mui/icons-material/Share';

export default function MediaCard(props) {
    // console.log(props)
    return (

        <Card className={styles.font} sx={{ maxWidth: "100%", boxShadow: "10px", }}>

            <Grid item container >
                <Grid item xs={12} md={props.imgMd}>
                    <CardMedia
                        sx={{ height: 300, maxWidth: "100%" }}
                        image={props.imgSrc}
                        title="green iguana"
                    />
                </Grid>

                <Grid item xs={12} md={props.contMd} >
                    <CardContent  >
                        <Typography className={styles.font} gutterBottom variant="caption" component="div">
                            {props.category}
                        </Typography>
                        <Typography className={styles.font} gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography className={styles.font} gutterBottom variant="subtitle2" component="div">
                            {props.date}
                        </Typography>
                        <Typography className={styles.font} fontFamily="Noto Sans" variant="body1">
                            {props.content}
                        </Typography>

                    </CardContent>
                    <CardActions >
                        <Fab  size='medium' sx={{ backgroundColor: "#ffb8a8" }} variant="extended">
                            <ShareIcon size="medium" sx={{ mr: 1 }} />
                            Share
                        </Fab>
                        <Fab href={"/post/" + props.link} size='medium' sx={{ backgroundColor: "#ffb8a8",marginLeft:".5rem" }} variant="extended" aria-label={props.title}>
                            <ReadMoreIcon size='medium' sx={{ mr: 1 }} />
                            Read More
                        </Fab>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>



    );
}
