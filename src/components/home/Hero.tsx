import LinkButton from '@/components/LinkButton'
import { CiclonName } from '@/components/names'
import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-8 pt-20 text-center sm:pt-24 lg:pt-32">
        <h1 className="text-4xl font-extrabold text-primary-700 dark:text-primary-200 sm:text-5xl lg:text-6xl">
          We are working on the next Machine Learning revolution
        </h1>
        <p className="mx-auto mt-10 max-w-3xl text-2xl">
          <CiclonName /> is one of the four keys to the new era of Machine Learning and Artificial Intelligence.
        </p>
        <p className="mx-auto mt-10 max-w-3xl text-lg">Stay tuned for more information.</p>
        <div className="mt-20 h-12 w-auto">
          <LinkButton className="px-10 text-lg" color="brand" text="More info" href="https://vortico.tech" />
        </div>
      </section>
    </>
  )
}
