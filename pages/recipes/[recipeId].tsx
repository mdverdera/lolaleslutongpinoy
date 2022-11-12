import recipes from "@data/recipes";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";
import Head from "next/head";

const RecipeDetail = ({
  recipe,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const opts: YouTubeProps["opts"] = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Lola Les Lutong Pinoy | {recipe.title}</title>
        <meta name="description" content={recipe.description} />
      </Head>
      <section id="recipeDetail" className="bg-gray-100">
        {/* Recipe Container */}
        <div className="container flex flex-col items-center max-w-lg mx-auto px-6 pt-24 pb-32 lg:flex-row lg:space-x-16 lg:max-w-4xl">
          {/* Image */}
          <div className="lg:w-1/2 relative group">
            <Image
              src={recipe.imagePath}
              alt="Filipino style spaghetti"
              className="mb-10"
              width={400}
              height={260}
            />
            <div className="absolute bottom-[6px] left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-start items-center w-full">
                <picture>
                  <img
                    src="/img/icon-pinterest.svg"
                    alt="pin at pinterest"
                    className="h-8 p-2 rounded-full cursor-pointer ficon"
                  />
                </picture>
                <div className="font-normal">
                  <p className="text-md">Pin this recipe</p>
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col items-start lg:w-1/2">
            <div className="flex flex-col space-y-5">
              <h4 className="max-w-lg text-xl font-bold text-gray-700 lg:text-4xl">
                {recipe.title}
              </h4>
              <p className="text-md lg:text-lg">{recipe.description}</p>

              <p className="text-md lg:text-lg"></p>

              <ins
                className="adsbygoogle block text-center"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4037215281786151"
                data-ad-slot="5992533090"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            </div>

            {/* Link */}
            <div className="block mt-4">
              <Link href="#videoRecipe">
                <a className="border-b border-cyan-600 text-cyan-600">
                  Go to video recipe
                  <ArrowDownIcon className="inline pb-2 pl-1 h-6" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join TikTok Section */}
      <section id="joinTikTok" className="relative px-6 lg:px-0">
        <div className="relative -top-24 max-w-lg mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 lg:max-w-4xl lg:px-16">
          <h5 className="text-2xl font-bold">Earn on TikTok today</h5>
          <p className="text-sm">
            {`Love to cook? Follow us on TikTok for more video recipes. Join
            TikTok using my invite code and we'll both earn.`}
          </p>

          {/* TikTok Button Container */}
          <Link href="https://vt.tiktok.com/ZSRtr9ecP/" passHref>
            <div className="py-2 px-6 rounded-full inline-flex items-center bg-grayishBlue cursor-pointer hover:scale-95">
              <picture>
                <img
                  src="/img/icon-tiktok.svg"
                  alt="tiktok"
                  className="h-6 rounded-full mr-2"
                />
              </picture>
              <span> Join TikTok</span>
            </div>
          </Link>
        </div>
      </section>

      <section id="videoRecipe">
        <div className="max-w-lg mx-auto text-center px-2  mb-20 lg:px-10 lg:max-w-4xl">
          <h3 className="mb-8 text-xl font-bold text-gray-700 lg:text-4xl">
            Subscribe to our youtube channel.
          </h3>
          <p className="max-w-3xl mx-auto leading-9 text-center text-gray-700 mb-24 text-xl">
            {`Please watch the video below for step-by-step procedure on How to
            cook ${recipe.title}.`}{" "}
            You can also visit and subscribe to our
            <Link href="https://www.youtube.com/channel/UCqkfjJDkUYuayjqku79NJRQ">
              <a className="text-veryDarkBlue font-semibold">
                {" "}
                youtube channel{" "}
              </a>
            </Link>
            for updates and new video recipes like this.
          </p>

          <YouTube videoId={recipe.youtubeId} opts={opts} />
        </div>
      </section>
    </>
  );
};

export default RecipeDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = recipes.map((recipe) => {
    return {
      params: { recipeId: recipe.id },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const recipe = recipes.find((recipe) => recipe.id === params?.recipeId);

  if (!recipe?.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      recipe,
    },
    revalidate: 60,
  };
};
