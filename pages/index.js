const { convert } = require('html-to-text');
import Grid from '@mui/material/Grid';

import { v4 as uuidv4 } from 'uuid';
import ResponsiveAppBar from '../components/AppBar';

import Card from '../components/Card';
import Header from '../components/Header';
import MyAppBar from '../components/MyAppBar';



export default function HomePage({ allPosts }) {


    const homePost = allPosts.filter((post, i) => {
        return i <= 5;
    })

    return (
        <>
           
       
            <Header/> 
            <Grid className='postContainer' sx={{padding:"0 2rem"}}  container mt={2} spacing={2}>
                {homePost.map((post, i) => {
                    const key = uuidv4();
                    const cardContent = convert(post.postContent, {
                        selectors: [
                            { selector: 'img', format: 'skip' },
                            { selector: 'a', format: 'skip' },
                            { selector: 'br', format: 'skip' },

                        ]
                    }).substring(0, 150);
                    if (i === 0) {

                        return (
                            <Grid  key={key} item xs={12}  >
                                <Card imgSrc={post.imgSrc}
                                 link={post._id}
                                  title={post.title}
                                   content={cardContent}
                                    date={post.date} 
                                    category={post.category} />
                            </Grid>
                        )
                    }  else  if (i === 1) {

                        return (
                            <Grid  key={key} item xs={12} sm={12} md={6} >
                                <Card imgSrc={post.imgSrc}
                                 link={post._id}
                                  title={post.title}
                                   content={cardContent}
                                    date={post.date} 
                                    category={post.category}
                                    />
                            </Grid>
                        )
                    } else   if (i === 2) {

                        return (
                            <Grid  key={key} item xs={12} sm={12} md={6} >
                                <Card imgSrc={post.imgSrc}
                                 link={post._id}
                                  title={post.title}
                                   content={cardContent}
                                    date={post.date} 
                                    category={post.category} />
                            </Grid>
                        )
                    }  else   if (i === 3) {

                        return (
                            <Grid  key={key} item xs={12} sm={12} md={12} >
                                <Card imgSrc={post.imgSrc}
                                 link={post._id}
                                  title={post.title}
                                   content={cardContent}
                                    date={post.date} 
                                    category={post.category} />
                            </Grid>
                        )
                    }  else   if (i === 4) {

                        return (
                            <Grid  key={key} item xs={12} sm={12} md={12} >
                                <Card imgSrc={post.imgSrc}
                                 link={post._id}
                                  title={post.title}
                                   content={cardContent}
                                    date={post.date} 
                                    category={post.category} />
                            </Grid>
                        )
                    }  
                })}
            </Grid>
        </>

    )
}


export async function getServerSideProps(context) {
    let res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },

    });
    let allPosts = await res.json();

    return {
        props: { allPosts },
    };
}
