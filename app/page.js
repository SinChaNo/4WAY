import Hero from '@/components/hero';
import { connectDB } from '@/mongoDB';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import SignIn from './signIn/page';


export default async function Home() {
  const session = await getServerSession(authOptions);

  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  console.log(result)
  return (
    <>
      {!session ? 
        <SignIn />
        : 
        <Hero />
      }
    </>
  )
}