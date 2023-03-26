const { convert } = require('html-to-text');
import Head from 'next/head'
import MediaCard from '../components/Card';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import AboutCard from '../components/AboutCard';
import { v4 as uuidv4 } from 'uuid';

export default function HomePage({ allPosts }) {


    const homePost = allPosts.filter((post, i) => {
        return i <= 5;
    })

    return (
        <>
            <Head>
                <title>World Tech Travel</title>
            </Head>
            <Header />
            <Grid className='container' container mt={4} spacing={2}>
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
                            <Grid key={key} my={2} item xs={12} >
                                <MediaCard imgSrc={post.imgSrc} link={post._id} contMd={8} imgMd={4} title={post.title} content={cardContent} date={post.date} category={post.category} />
                            </Grid>
                        )
                    } else if (i == 1) {
                        return (
                            <Grid key={key} my={2} item xs={12} md={6}>
                                <MediaCard imgSrc={post.imgSrc} link={post._id} contMd={8} imgMd={4} title={post.title} content={cardContent} date={post.date} category={post.category} />
                            </Grid>
                        )
                    } else if (i === 2) {
                        return (
                            <Grid key={key} my={2} xs={12} item md={6}>
                                <MediaCard imgSrc={post.imgSrc} link={post._id} contMd={8} imgMd={4} title={post.title} content={cardContent} date={post.date} category={post.category} />
                            </Grid>
                        )
                    } else if (i === 3) {
                        return (
                            <Grid className='container16px' key={key} mt={4} container spacing={2}>
                                <Grid item xs={12} md={8}>

                                    <MediaCard imgSrc={post.imgSrc} link={post._id} contMd={8} imgMd={4} key={post._id} title={post.title} content={cardContent} date={post.date} category={post.category} />

                                </Grid>
                                <Grid item sx={{ display: { sm: 'none', md: "block" } }} md={4}>

                                    <AboutCard />

                                </Grid>

                            </Grid>
                        )

                    } else {
                        return (
                            <Grid key={key} xs={12} item md={8}>
                                <Grid my={2} xs={12} item md={12}>
                                    <MediaCard imgSrc={post.imgSrc} link={post._id} contMd={8} imgMd={4} key={post._id} title={post.title} content={cardContent} date={post.date} category={post.category} />
                                </Grid>
                            </Grid>
                        )
                    }
                })}






            </Grid>
        </>

    )
}


export async function getServerSideProps(context) {
    let res = await fetch("https://www.worldtechtravel.in/api/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }, mode: 'cors', // enable CORS

    });
    let allPosts = await res.json();

    return {
        props: { allPosts },
    };
}
