import { connectDB } from "@/mongoDB";
import { ObjectId } from "mongodb";

export default async function Delete(req, res){
  if(req.method === 'POST'){
    console.log(`req.body: ${req.body}`);
    console.log(`method: ${req.method}`);
    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').deleteOne({ _id : new ObjectId(req.body) });
    res.status(200).json('Delete Complete')
  }
  else return res.status(500)
}