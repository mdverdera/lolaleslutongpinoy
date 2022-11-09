import RecipeBox from "@components/recipe/RecipeBox";
import recipes from "@data/recipes";
import { MagnifyingGlassIcon, ClockIcon } from "@heroicons/react/24/solid";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

type RecipeModel = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  duration: string;
  imagePath: string;
  youtubeLink: string;
  youtubeId: string;
};

const Recipes = ({
  recipesData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [postNum, setPostNum] = useState(6); // Default number of posts dislplayed

  function loadMore() {
    setPostNum((prevPostNum) => prevPostNum + 6); // 6 is the number of posts you want to load per click
  }

  return (
    <>
      <Head>
        <title>Lola Les Lutong Pinoy | Recipes</title>
        <meta
          name="description"
          content="Try this latest recipe from Lola Les Lutong Pinoy blog."
        />
      </Head>
      <section id="recipe" className="bg-purple-100">
        {/* Main Container */}
        <div className="max-w-lg mx-auto py-24 lg:max-w-4xl">
          <h2 className="text-gray-700 text-6xl font-semibold text-center mb-6 ">
            Recipes
          </h2>
          <p className="mb-6 text-lg tracking-widest text-center text-gray-600">
            This blog is for everyone who enjoys cooking Filipino Food and for
            everyone who loves to eat Filipino Food.
          </p>
          {/* Display Ad */}
          <ins
            className="adsbygoogle block"
            data-ad-client="ca-pub-4037215281786151"
            data-ad-slot="5161779101"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      </section>
      <section id="searchRecipe" className="relative bg-gray-100">
        {/* Container */}
        <div className="max-w-lg mx-auto p-6 lg:max-w-4xl">
          {/* Search */}
          <div className="relative flex flex-col justify-center items-center w-full space-y-3 py-5 -mt-20 bg-purple-400 rounded-lg">
            {/* Input and Search Icon */}
            {/* <input
              className="mx-auto border-none w-full placeholder:font-thin placeholder-yellow-500 pr-5 focus:outline-none"
              placeholder="Search"
            /> <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />*/}
            <h1 className="uppercase text-lg font-bold text-white">
              Follow us
            </h1>
            {/* Social Container */}
            <div className="flex flex-row mx-auto items-center justify-center  space-x-2 md:space-x-8">
              <Link
                href="https://www.youtube.com/channel/UCqkfjJDkUYuayjqku79NJRQ"
                passHref
              >
                <picture>
                  <img
                    src="/img/icon-youtube.svg"
                    alt="youtube"
                    className="h-12 p-2 rounded-full cursor-pointer ficon"
                  />
                </picture>
              </Link>

              <Link href="https://www.facebook.com/LolaLesLutongPinoy" passHref>
                <picture>
                  <img
                    src="/img/icon-facebook.svg"
                    alt="facebook"
                    className="h-12 p-2 rounded-full cursor-pointer ficon"
                  />
                </picture>
              </Link>

              <Link
                href="https://www.instagram.com/lolaleslutongpinoy/"
                passHref
              >
                <picture>
                  <img
                    src="/img/icon-instagram.svg"
                    alt="instagram"
                    className="h-12 p-2 rounded-full cursor-pointer ficon"
                  />
                </picture>
              </Link>

              <Link
                href="https://www.pinterest.ph/lolaleslutongpinoy/"
                passHref
              >
                <picture>
                  <img
                    src="/img/icon-pinterest.svg"
                    alt="pinterest"
                    className="h-12 p-2 rounded-full cursor-pointer ficon"
                  />
                </picture>
              </Link>
              <Link href="https://www.tiktok.com/@lolaleslutongpinoy/" passHref>
                <picture>
                  <img
                    src="/img/icon-tiktok.svg"
                    alt="tiktok"
                    className="h-12 p-2 rounded-full cursor-pointer ficon"
                  />
                </picture>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="latestRecipe" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3 max-w-lg lg:max-w-4xl">
          <h2 className="text-4xl mb-6 font-bold text-center text-gray-700">
            Latest Recipe
          </h2>
          <p className="max-w-lg mx-auto text-center text-gray-400 lg:max-w-4xl">
            Try this latest recipe from our blog. Enjoy!
          </p>
          <div>
            <div className="mt-8 grid md:grid-cols-3 gap-10">
              {/* Recipe Box */}
              {recipesData.slice(0, postNum).map((recipe: RecipeModel) => {
                return (
                  <div className="card" key={recipe.id}>
                    {/* cards go here */}
                    <RecipeBox recipe={recipe} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center pt-20">
            <button
              onClick={loadMore}
              className="btn bg-veryLightYellowGreen-100 text-veryLightYellowGreen-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300"
            >
              Load More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;

export const getStaticProps: GetStaticProps = async (context) => {
  const recipesData = recipes.reverse();

  return {
    props: {
      recipesData,
    },
    revalidate: 60,
  };
};
