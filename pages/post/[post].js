// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import { useRouter } from 'next/router'

// import Box from '@mui/material/Box';
// import parse from "html-react-parser"
// import RecentPost from '../../components/RecentPost';
// import Header from '../../components/Header';

// const Post = () => {
//   const router = useRouter()
//   const { post } = router.query
//   const posts=[
//     {
//     _id: "641ee7c67cac17cc32c2a8bf",
//     title: "Statecraft |lessons from ancient india",
//     category: "world",
//     imgSrc: "/images/95801346.webp",
//     postContent:"hello",
//     date: "Mar 23"
//     },
//     {
//         _id: "641ee7c67cac17cc32c2a8bf",
//         title: "Statecraft |lessons from ancient india",
//         category: "world",
//         imgSrc: "/images/95801346.webp",
//         postContent:"hello",
//         date: "Mar 23"
//         },
//         {
//             _id: "641ee7c67cac17cc32c2a8bf",
//             title: "Statecraft |lessons from ancient india",
//             category: "world",
//             imgSrc: "/images/95801346.webp",
//             postContent:"hello",
//             date: "Mar 23"
//             },
//             {
//                 _id: "641ee7c67cac17cc32c2a8bf",
//                 title: "Statecraft |lessons from ancient india",
//                 category: "world",
//                 imgSrc: "/images/95801346.webp",
//                 postContent:"hello",
//                 date: "Mar 23"
//                 },
//                 {
//                     _id: "641ee7c67cac17cc32c2a8bf",
//                     title: "Statecraft |lessons from ancient india",
//                     category: "world",
//                     imgSrc: "/images/95801346.webp",
//                     postContent:"hello",
//                     date: "Mar 23"
//                     },
//                     {
//                         _id: "641ee7c67cac17cc32c2a8bf",
//                         title: "Statecraft |lessons from ancient india",
//                         category: "world",
//                         imgSrc: "/images/95801346.webp",
//                         postContent:"hello",
//                         date: "Mar 23"
//                         },
//                         {
//                             _id: "641ee7c67cac17cc32c2a8bf",
//                             title: "Statecraft |lessons from ancient india",
//                             category: "world",
//                             imgSrc: "/images/95801346.webp",
//                             postContent:"hello",
//                             date: "Mar 23"
//                             },
//     ]

//   const [requiredPost] = posts.filter((rPost) => {
//     return rPost._id === post
//   })

//   return (
//     <>

//       <Header />
//       <Grid container>

//         <Grid sx={{ padding:"0 4rem", boxShadow: 1 }} container item xs={12} md={10} >
//           <Grid  item xs={12}>
//             <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
//               <h1 className='postH1'>
//                 {requiredPost[0].title}
//               </h1>

//               <h4>
//                 Author: Ajay Chandru
//               </h4>


//             </Box>
//           </Grid>
//           <Grid className='postContent'  item xs={12}>

//             {parse(requiredPost.postContent)}


//           </Grid>

//         </Grid>
//         <Grid item xs={2} sx={{ display: { xs: "none", sm: "none", md: "block" } }} >
//           <RecentPost postObject={posts} />
//         </Grid>

//       </Grid>
//     </>
//   )
// }

// // export async function getStaticPaths() {
  

// //   let res = await fetch("https://wtt.vercel.app/api/posts", {
// //     method: "GET",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     mode: 'cors', // enable CORS
   
// //   })

 
// //   let posts = await res.json();
// //   console.log(posts);
// //   const pathArray = posts.map((post) => {
// //     return ({
// //       params: {
// //         post: post._id
// //       }
// //     })
// //   })

// //   return {
// //     paths: pathArray,
// //     fallback: false, // can also be true or 'blocking'
// //   }
// // }


// // export async function getStaticProps() {
  
// //   let res = await fetch("https://wtt.vercel.app/api/posts", {
// //     method: "GET",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     mode: 'cors', // enable CORS
// //     credentials: 'same-origin', // send cookies, if any
// //   })
// //   let posts = await res.json();

// //   return {
// //     props: {
// //       posts,
// //     },
// //   }
// // }


// export default Post