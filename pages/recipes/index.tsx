import RecipeBox from "@components/recipe/RecipeBox";
import recipes from "@data/recipes";
import { MagnifyingGlassIcon, ClockIcon } from "@heroicons/react/24/solid";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

type RecipeModel = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  duration: string;
  imagePath: string;
  youtubeLink: string;
};

const Recipes = ({
  recipesData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <section id="recipe" className="bg-purple-100">
        {/* Main Container */}
        <div className="max-w-lg mx-auto py-24 lg:max-w-4xl">
          <h2 className="text-gray-700 text-6xl font-semibold text-center mb-6 ">
            Recipes
          </h2>
          <p className="mb-6 text-lg tracking-widest text-center text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            laboriosam aperiam error assumenda modi totam aut maxime.
          </p>
        </div>
      </section>
      <section id="searchRecipe" className="relative bg-gray-100">
        {/* Container */}
        <div className="max-w-lg mx-auto p-6 lg:max-w-4xl">
          {/* Search */}
          <div className="relative flex flex-row w-full p-10 -mt-20 -space-x-6 bg-purple-400 rounded-lg">
            {/* Input and Search Icon */}
            <input
              className="mx-auto border-none w-full placeholder:font-thin placeholder-yellow-500 pr-5 focus:outline-none"
              placeholder="Search"
            />

            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>
      <section id="latestRecipe" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3 max-w-lg lg:max-w-4xl">
          <h2 className="text-4xl mb-6 font-bold text-center text-gray-700">
            Latest Recipe
          </h2>
          <p className="max-w-lg mx-auto text-center text-gray-400 lg:max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            natus necessitatibus numquam cupiditate expedita voluptatum a.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-10">
            {/* Recipe Box */}
            {recipesData.map((recipe: RecipeModel) => {
              return (
                <div key={recipe.id}>
                  {/* cards go here */}

                  <RecipeBox recipe={recipe} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;

export const getStaticProps: GetStaticProps = async (context) => {
  const recipesData = recipes;

  return {
    props: {
      recipesData,
    },
    revalidate: 60,
  };
};
