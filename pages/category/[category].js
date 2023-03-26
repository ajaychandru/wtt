import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import Header from '../../components/Header';
import MediaCard from '../../components/Card'
import { v4 as uuidv4 } from 'uuid';
const { convert } = require('html-to-text');

const Category = ({posts}) => {
  const router = useRouter()
  const { category } = router.query


  const categoryPost = posts.filter((element, i) => {
    return element.category === category
  })
  
  return (
    <>
    <Header/>
    <Grid p={5} container item xs={12} spacing={2}>
      {categoryPost.map((post) => {
        const cardContent=convert(post.postContent,{
          selectors: [
              { selector: 'img',format:'skip' },
              {selector:'a',format:'skip'},
              {selector:'br',format:'skip'},
              
            ]
      }).substring(0,150);
        const key = uuidv4();
        return (<Grid key={key} item xs={12} md={6}>
          <MediaCard imgSrc={post.imgSrc} link={post._id} contMd={12} md={12} title={post.title} category={post.category} date={post.date} content={cardContent} />
        </Grid>
        )
      })}
    </Grid>

    </>



  )
}
export async function getStaticPaths() {

  return {
    paths: [{ params: { category: 'world' } }, { params: { category: 'tech' } }, { params: { category: 'travel' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps() {

  const apiUrl="https://wtt-seven.vercel.app/api/posts"? "https://wtt-seven.vercel.app/api/posts":"https://wtt-ajaychandru.vercel.app/api/posts";

  let res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: 'cors' // enable CORS
    // send cookies, if any
  });
  let posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}

export default Category;