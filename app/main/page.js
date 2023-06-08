import Card from "@/components/card";
import { connectDB } from "@/mongoDB";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const Main = async () => {
  const session = await getServerSession(authOptions);
	const db = (await connectDB).db("forum")
  const result = await db.collection('post').find().toArray();
	return (
		<>
			<Card result={result} session = {session}/>
		</>
	)
}

export default Main;