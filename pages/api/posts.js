
// import clientPromise from "../../lib/mongodb";
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

    

 
  }
export default handler




















