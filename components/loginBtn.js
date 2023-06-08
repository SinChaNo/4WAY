'use client';
import { signIn } from 'next-auth/react'

export default function LoginBtn() {
  return (
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button 
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        onClick={() => { signIn() }}
      >
        Git
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24" data-darkreader-inline-stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  )
} 