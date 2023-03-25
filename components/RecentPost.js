import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import styles from "./recentPost.module.css"
const RecentPost = (props) => {
    const recentPost = props.postObject.filter((element, i) => {
        return i < 8
    })

    return (
        <>


            <Box sx={{ display: "flex", flexDirection: "column" ,border:"solid 1px #001f3f" }}>
                <Box sx={{ boxShadow: 3, padding:"1rem",backgroundColor:"#001f3f"}}>
                    <Typography sx={{ textAlign: "center",color:"white" }} variant="h6">
                        Recent Post
                    </Typography>
                </Box>
                {recentPost.map((post) => {
                    const key = uuidv4();
                    return (
                        <Link style={{ textDecoration: "none" }} key={key} href={"/post/" + post._id}><Button sx={{ textAlign: "start" }} variant="solid" >{post.title}</Button></Link>
                    )
                })}

            </Box>
        </>
    )

}


export default RecentPost;
