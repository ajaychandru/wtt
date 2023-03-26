// import { Grid, TextField } from "@mui/material"
// import { useState } from "react"

// import React from "react"

// import Editor from "./Editor";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { Box } from "@mui/system";
// import Fab from '@mui/material/Fab';
// import { useRouter } from "next/router"
// import axios from 'axios';
// import { UiFileInputButton } from "./UiFileInputButton";
// import Image from 'next/image'


// export default function Form() {
//     const router = useRouter();
//     const [form, setForm] = useState({
//         title: "",
//         category: "",
//         imgSrc: "",
//         postContent: "",
//         date:""

//     })

//     console.log(form);
//     function handleChange(event) {
//         const date=new Date().toLocaleDateString("en-GB",{month:"short",year:"2-digit"})
//         setForm((prevValue) => {
//             return ({
//                 ...prevValue,
//                 [event.target.name]: event.target.value,
//                 date:date
//             })
//         })
//     }

//     const onChange = async (formData) => {
//         const config = {
//             headers: { 'content-type': 'multipart/form-data' },
//             onUploadProgress: (event) => {
//                 console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
//             },
//         };

//         const response = await axios.post('/api/upload', formData, config);

//         const { data, file } = response.data;
//         console.log(file);
//         const filePath = "/images/" + file[0].filename;
//         setForm((prevValue) => {
//             return (
//                 {
//                     ...prevValue,
//                     imgSrc: filePath
//                 }
//             )
//         })

//     };

//     // async function submitPost() {
    

       

//     //     let res = await fetch("https://wtt-ajaychandru.vercel.app/api", {
//     //         method: "POST",
//     //         body: JSON.stringify({ form }),
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //         },
//     //     })
//     //     router.push('/');

//     // }
//     // function handleEditor(data) {
//     //     // handles data coming from editor
//     //     setForm((prevValue) => {
//     //         return ({
//     //             ...prevValue,
//     //             postContent: data,
                
          
//     //         }

//     //         )
//     //     })
//     // }


//     return (



//         <Grid p={1} sx={{ width: "75%", marginLeft: "10rem" }}>

//             <Grid my={2} item xs={12}  >
//                 <TextField onChange={handleChange} sx={{ width: "100% " }} label="Title" variant="outlined" value={form.title} name="title" />
//             </Grid>

//             <Box my={2} sx={{ width: "200px" }}>
//                 <FormControl fullWidth>
//                     <InputLabel id="category-select-label">Category</InputLabel>
//                     <Select
//                         labelId="category-select-label"
//                         id="category-select"
//                         value={form.category}
//                         label="Category"
//                         onChange={handleChange}
//                         name="category"
//                     >
//                         <MenuItem value={"world"}>World</MenuItem>
//                         <MenuItem value={"tech"}>Tech</MenuItem>
//                         <MenuItem value={"travel"}>Travel</MenuItem>
//                     </Select>
//                 </FormControl>
//             </Box>
//             <UiFileInputButton
//                 label="Upload Single Thumbnail"
//                 uploadFileName="theFiles"
//                 onChange={onChange}
//             />

//             <Grid mt={2} item xs={12}>
//                 <Editor getData={handleEditor} />
//             </Grid>
//             <Grid sx={{ marginTop: "3rem" }} item xs={12}>
//                 <Fab onClick={submitPost} variant="extended" color="primary" aria-label="add">
//                     Submit
//                 </Fab>
//             </Grid>

//         </Grid>



//     )
// }