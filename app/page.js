import Hero from '@/components/hero';
import { connectDB } from '@/mongoDB';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import SignIn from './signIn/page';


export default async function Home() {
  return (
    <>
      <Hero />
    </>
  )
}