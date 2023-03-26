import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router'

import Box from '@mui/material/Box';
import parse from "html-react-parser"
import RecentPost from '../../components/RecentPost';
import Header from '../../components/Header';

const Post = ({posts}) => {
  const router = useRouter()
  const { post } = router.query
  const [requiredPost] = posts.filter((rPost) => {
    return rPost._id === post
  })

  return (
    <>

      <Header />
      <Grid container>

        <Grid sx={{ padding:{xs:"0 1rem",sm:"0 1rem",md:"0 4rem"}, boxShadow: 1 }} container item xs={12} md={10} >
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



export async function getServerSideProps() {
  let res = await fetch("https://worldtechtravel.in/api/posts", {
 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: 'cors', // enable CORS
    credentials: 'same-origin', // send cookies, if any
  })
  let posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}


export default Post