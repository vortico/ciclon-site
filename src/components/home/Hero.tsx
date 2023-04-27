import CiclonName from '@/components/CiclonName'
import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-8 pt-20 text-center sm:pt-24 lg:pt-32">
        <h1 className="text-4xl font-extrabold text-primary-700 dark:text-primary-200 sm:text-5xl lg:text-6xl">
          We are proudly working on a Machine Learning revolution
        </h1>
        <p className="mx-auto mt-10 max-w-3xl text-lg">
          <CiclonName /> will be one of the four elements of this new way to understand the world of Machine Learning
          and Artificial Intelligence.
        </p>
        <p className="mx-auto mt-10 max-w-3xl text-lg">
          Just give us some time to get it ready for you and we will be back soon with a lot of surprises.
        </p>
      </section>
    </>
  )
}
