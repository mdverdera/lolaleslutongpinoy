import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FilmIcon } from "@heroicons/react/24/solid";
import IllustrationHero from "../public/img/illustration-hero.svg";
import Navigation from "@components/layout/Navigation";

const Home: NextPage = () => {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        {/* Container For Image and Content */}
        <div className="container flex flex-col-reverse mx-auto py-6 px-6 lg:flex-row lg:px-24 lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              Simple Filipino Recipes
            </h1>

            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              A food blog that emphasizes Filipino food that is affordable and
              easy to do in daily life.
            </p>

            {/* Buttons Container */}
            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <Link href="/welcome">
                <a className="p-4 text-sm font-semibold text-veryDarkBlue bg-purple-100 rounded shadow-md border-2 border-purple-100 md:text-base hover:bg-white hover:text-grayishBlue">
                  Start here
                </a>
              </Link>
            </div>
          </div>
          {/* Image */}

          <div className="relative mx-auto rounded-2xl  lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero "></div>

            <Image
              src={IllustrationHero}
              alt="hero"
              width={655}
              height={520}
              className="relative z-10 lg:top-24 xl:top-0 rounded-2xl overflow-x-visible"
              placeholder="blur"
              blurDataURL={rgbDataURL(230, 230, 250)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
