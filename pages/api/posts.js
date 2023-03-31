
import clientPromise from "../../lib/mongodb";
import axios from 'axios';
import sharp from 'sharp';

async function resizeImg(url) {
    try {
        const response = await axios.get(url, {
            responseType: 'arraybuffer'
        });
        const imageBuffer = Buffer.from(response.data, 'binary');
        const resizedImage = await sharp(imageBuffer)
            .resize(535, 356)
            .webp({ quality: 80, alphaQuality: 0 })
            .toBuffer();

        const dataUrl = `data:image/webp;base64,${resizedImage.toString('base64')}`;
        return dataUrl;
    } catch (error) {
        return Promise.reject(error);
    }
}



    async function handler(req, res) {
    

     if (req.method === "GET") {
                try {
                    const client = await clientPromise;
                    const db = client.db("ajBlogDB");
        
                    const posts = await db
                        .collection("posts")
                        .find({})
                        .sort({_id:-1})
                        .limit(10)
                        .toArray();
        
                    res.status(200).json(posts);
                } catch (e) {
                    console.error(e);
                    res.status(500).json(e);
                }
            } else if (req.method === "POST") {
        
                try {
                    const formData=req.body.form;
                    const imgUrl=await resizeImg(formData.imgSrc);
                    formData.imgSrc=imgUrl;

                    const client = await clientPromise;
                    const db = client.db("ajBlogDB");
                    const posts = await db
                        .collection("posts")
                        .insertOne(formData);
                    res.json(posts);
        
                } catch (e) {
                    console.error(e);
                    res.status(500).json({ error: "Error inserting post into database" });
                }
        
            }

    

 
  }
export default handler




















