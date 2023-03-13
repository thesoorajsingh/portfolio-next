/* eslint-disable prettier/prettier */
import Image from "next/image"
// import rocketImage from "../public/rocket.webp"

export default function Hero() {
  return (
    <section className="relative w-full">
      <section className="container mx-auto text-center">
        {/* This image is absolutely positioned to the page, not the hero */}
        <Image
          className="absolute -top-[5rem] left-[0rem] -z-10 sm:-top-[25rem] md:left-[rem] md:-top-[20rem]"
          src="/assets/gradient.png"
          alt="gradient"
          height={300}
          width={1400}
          loading="lazy"
        />
        <div className="px-2 text-left">
          <div className="pl-6 pb-4">
            <h4
              className="leading-tighter my-4 mx-auto max-w-2xl text-xl font-extrabold tracking-tighter md:text-xl"
              data-aos="zoom-y-out"
            >
              Hi, my name is{" "}
            </h4>
            <h1>
              <span className="leading-tighter my-4 mx-auto max-w-2xl bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-5xl font-extrabold tracking-tighter text-transparent ">
                Sooraj Singh.
              </span>
            </h1>
          </div>
          {/* <span className="relative inline-block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text pl-2 pr-5 italic text-transparent">
              <svg
                width="68"
                height="5"
                viewBox="0 0 68 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2/3 left-0 right-1 -z-10 h-[0.58em] w-full"
              >
                <path
                  d="M1 1C1 1 25.411 7.75 67 1"
                  stroke="#93C5FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              fast
            </span> */}
          <p className="mx-auto max-w-xl px-2 pb-6 text-left font-grotesk text-lg font-medium text-gray-one md:max-w-2xl md:px-6">
            I&apos;m a software engineer specializing in building and sometimes
            designing exceptional software.
            <br /> I&apos;m currently enabling India to invest like the top 1%
            do @{" "}
            <span className="underline underline-offset-4 hover:cursor-pointer hover:text-green-primary">
              <a href="https://leafround.com" target="_blank" rel="noreferrer">
                Leaf Round
              </a>
            </span>
          </p>
          {/* <div
            className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div>
              <a
                className="mb-4 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 align-middle font-medium text-white transition-all duration-100 ease-linear hover:bg-blue-700 sm:mb-0 sm:w-auto"
                href="https://github.com/lucky-chap/kaminari/generate"
                target="_blank"
                rel="noreferrer"
              >
                Use Template
              </a>
            </div>
            <div>
              <a
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-1000 py-2 px-6 align-middle font-medium text-white transition-all duration-100 ease-linear hover:bg-gray-900 sm:ml-4 sm:w-auto"
                href="https://github.com/lucky-chap/kaminari"
                target="_blank"
                rel="noreferrer"
              >
                Star ✨
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </section>
  )
}
