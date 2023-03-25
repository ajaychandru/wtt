import NextCors from 'nextjs-cors';
import clientPromise from "../../lib/mongodb";
    async function handler(req, res) {
     NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

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
        
                    res.json(posts);
                } catch (e) {
                    console.error(e);
                }
            } else if (req.method === "POST") {
        
                try {
                    const client = await clientPromise;
                    const db = client.db("ajBlogDB");
                    const posts = await db
                        .collection("posts")
                        .insertOne(req.body.form);
                    res.json(posts);
        
                } catch (e) {
                    console.error(e);
                    res.status(500).json({ error: "Error inserting post into database" });
                }
        
            }

    
  res.status(200).json(data);
 
  }
export default handler




















// export default async (req, res) => {
//     if (req.method === "GET") {
//         try {
//             const client = await clientPromise;
//             const db = client.db("ajBlogDB");

//             const posts = await db
//                 .collection("posts")
//                 .find({})
//                 .sort({_id:-1})
//                 .limit(10)
//                 .toArray();

//             res.json(posts);
//         } catch (e) {
//             console.error(e);
//         }
//     } else if (req.method === "POST") {

//         try {
//             const client = await clientPromise;
//             const db = client.db("ajBlogDB");
//             const posts = await db
//                 .collection("posts")
//                 .insertOne(req.body.form);
//             res.json(posts);

//         } catch (e) {
//             console.error(e);
//             res.status(500).json({ error: "Error inserting post into database" });
//         }

//     }

// };