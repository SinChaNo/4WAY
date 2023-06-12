import { connectDB } from "@/mongoDB";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

const post = async (res, req) => {
  let session =  await getServerSession(res, req, authOptions);
  console.log(session);
  if (session) {
    res.body.author = session.user.email
  }
  if (res.method == 'POST'){
    const doc = res.body;
    console.log(doc)
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne(doc);
    console.log(
      `A document was inserted with the _id: ${result.insertedId}`,
    );
    return req.status(200).redirect(302,'/main');
  }
}

export default post;