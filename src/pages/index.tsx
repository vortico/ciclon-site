import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import PlainLayout from '@/layouts/plain'
import React from 'react'

export default function Home() {
  return (
    <PlainLayout>
      <>
        <header>
          <Hero />
        </header>
        <main className="mb-20 space-y-20 pt-20 sm:mb-32 sm:space-y-32 sm:pt-32 md:mb-40 md:space-y-40 md:pt-40"></main>
        <Footer />
      </>
    </PlainLayout>
  )
}
