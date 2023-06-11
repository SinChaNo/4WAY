import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LogoutBtn from '@/components/logoutBtn'
import Footer from '@/components/footer'
import LogInBtn from '@/components/LoginBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session)

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            {/* Navigation */}
            <div className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
              <Link className="mr-5 hover:text-gray-900" href='/main'>Main</Link>
            </div>
            {/* Logo */}
            <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" data-darkreader-inline-stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <Link href="/" className="ml-3 text-xl">4WAY</Link>
            </div>
            {/* 로그인 버튼 */}
            {/* 이름을 클릭할시 드롭다운메뉴안에 들어가도록 추후 수정할 것 */}
            {session ? <LogoutBtn /> : <LogInBtn />}
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
