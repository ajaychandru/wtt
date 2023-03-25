import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import parse from "html-react-parser"
import RecentPost from '../../components/RecentPost';
import Header from '../../components/Header';

const Post = ({ posts }) => {
  const router = useRouter()
  const { post } = router.query
  const [requiredPost] = posts.filter((rPost) => {
    return rPost._id === post
  })

  return (
    <>

      <Header />
      <Grid container>

        <Grid sx={{ padding:"0 4rem", boxShadow: 1 }} container item xs={12} md={10} >
          <Grid  item xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
              <h1 className='postH1'>
                {requiredPost.title}
              </h1>

              <h4>
                Author: Ajay Chandru
              </h4>


            </Box>
          </Grid>
          <Grid className='postContent'  item xs={12}>

            {parse(requiredPost.postContent)}


          </Grid>

        </Grid>
        <Grid item xs={2} sx={{ display: { xs: "none", sm: "none", md: "block" } }} >
          <RecentPost postObject={posts} />
        </Grid>

      </Grid>
    </>
  )
}

export async function getStaticPaths() {
  

  let res = await fetch("https://wtt.vercel.app/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

 
  let posts = await res.json();
  console.log(posts);
  const pathArray = posts.map((post) => {
    return ({
      params: {
        post: post._id
      }
    })
  })

  return {
    paths: pathArray,
    fallback: false, // can also be true or 'blocking'
  }
}


export async function getStaticProps() {
  
  let res = await fetch("https://wtt.vercel.app/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  let posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}


export default Post