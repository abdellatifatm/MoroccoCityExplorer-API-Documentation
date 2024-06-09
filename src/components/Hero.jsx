import {
    Button,
    Typography,
  } from "@material-tailwind/react";
  import {
  } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
  export default function Hero(){

    return(
        <>
             <header className="bg-white p-8 mb-28 ">
        <div className="grid mt-16 min-h-[55vh] w-full lg:h-[55vh] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Welcome to MoroccoCityExplorer API
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Discover the <span className="text-green-500 leading-snug "> best places </span> and 
              <span className="text-green-500 leading-snug "> restaurants </span> 
              in Moroccan cities with our API.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Explore the rich culture and vibrant life of Morocco through detailed city information and more.
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Button className="bg-green-500 w-full px-4 md:w-[12rem] text-sm " style={{ textTransform: 'none' }}>
                  Github
                  
                </Button>
                <Link to='/documentation'>
                <Button  className=" bg-gray-900 text-sm flex  w-full items-center gap-2" style={{ textTransform: 'none' }}>
                  Read Documentation{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
        </>
    )
  }