'use client';
import { redirect } from 'next/navigation'

function Home() {
    redirect('/posts')
}

export default Home
