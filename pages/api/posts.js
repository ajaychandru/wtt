
// import clientPromise from "../../lib/mongodb";
    async function handler(req, res) {
    

     if (req.method === "GET") {
        try{
            const data=[
                {
                _id: "641ee7c67cac17cc32c2a8bf",
                title: "Statecraft |lessons from ancient india",
                category: "world",
                imgSrc: "/images/95801346.webp",
                postContent:"hello",
                date: "Mar 23"
                },
            ]                
                res.status(200).json(data);

        }catch (e) {
                  console.error(e);
               res.status(500).json(e);
                }
     }

            }
            export default handler

            //     try {
            //         const client = await clientPromise;
            //         const db = client.db("ajBlogDB");
        
            //         const posts = await db
            //             .collection("posts")
            //             .find({})
            //             .sort({_id:-1})
            //             .limit(10)
            //             .toArray();
        
            //         res.status(200).json(posts);
            //     } catch (e) {
            //         console.error(e);
            //         res.status(500).json(e);
            //     }
            // } else if (req.method === "POST") {
        
            //     try {
            //         const client = await clientPromise;
            //         const db = client.db("ajBlogDB");
            //         const posts = await db
            //             .collection("posts")
            //             .insertOne(req.body.form);
            //         res.json(posts);
        
            //     } catch (e) {
            //         console.error(e);
            //         res.status(500).json({ error: "Error inserting post into database" });
            //     }
        
            // }

    

 





















