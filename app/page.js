import { Hero } from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen max-w-[1340px] h-full mx-auto">
      <Hero/>
    </main>
  )
}
