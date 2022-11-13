/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import Animation from './components/Temp/animation'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className='relative flex justify-center'>
            <div className='absolute top-10 border mr-16 rounded-full w-fit p-2 border-2 cursor-pointer border-violet-600 hover:bg-opacity-25 hover:bg-violet-300'>
              <a target="_blank" href='mailto:gretelmn@gmail.com' rel="noreferrer"><img src="./assets/linkedin.png" alt='linkedin-icon'/></a>
            </div>
            <div className='absolute top-10 border ml-16 rounded-full w-fit p-2 border-2 cursor-pointer border-violet-600 hover:bg-opacity-25 hover:bg-violet-300'>
              <a target="_blank" href='https://www.linkedin.com/in/gretelmn/' rel="noreferrer"><img src="./assets/email.png" alt='email-icon'/></a>
            </div>
          </div>
          <div className="mx-auto max-w-3xl pt-10 pb-10 sm:pt-48 sm:pb-40">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Hello and Welcome
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  I'm <span className='font-bold text-violet-600'>Gretel Martinez</span>, <span className='font-bold'>Software Engineer</span> and UX/UI passionate.
                </p>
                <p className="text-lg leading-8 text-gray-600 sm:text-center">
                  This is my personal portfolio, and I'm working to create the best experience for you.
                </p>
                <p className="text-lg leading-8 text-gray-600 sm:text-center">
                  Meantime please check my repositories in <span className='font-bold'>Github</span>:
                </p>

                <div className="mt-8 mx-auto flex sm:justify-center border-2 border-white w-fit rounded-full p-2 pr-3 hover:border-violet-600">                
                  <a target="_blank" href='https://github.com/grety22?tab=repositories' rel="noreferrer">
                    <img src="./assets/github.png" alt='github-icon'/>
                  </a>
                </div>

                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Thank you for your patience. 
                </p>
                <p className="text-lg leading-8 text-gray-600 sm:text-center">
                  I'm looking forward to show you my career journey.
                </p>
              </div>

              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>



              <Animation />

          </div>
        </div>
      </main>
    </div>
  )
}

