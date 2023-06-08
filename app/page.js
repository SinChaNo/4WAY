import Hero from '@/components/hero';
import { connectDB } from '@/mongoDB';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';


export default async function Home() {
  const session = await getServerSession(authOptions);
  const name  = session?.user?.name

  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  console.log(result)
  return (
    <>
      {!session ? 
        <h1>로그인 필요</h1> 
        : 
        <>
          <Hero />
        </>
        
      }
    </>
  )
}
