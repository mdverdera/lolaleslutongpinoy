import { ClockIcon } from "@heroicons/react/24/solid";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { getStaticProps } from "pages/recipes";

const RecipeBox = ({
  recipe,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className="card">
        <div className="h-32 sm:h-48 relative">
          <Image
            src={recipe.imagePath}
            alt="stew"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Link href={`/recipes/${recipe.id}`} passHref>
          <div className="m-4 cursor-pointer">
            <span className="font-bold">{recipe.title}</span>
            <span className="block text-gray-500 text-sm truncate ...">
              {recipe.description}
            </span>
          </div>
        </Link>
        <div className="badge">
          <ClockIcon className="w-5 h-5 inline-block" />

          <span>{recipe.duration}</span>
        </div>
      </div>
    </>
  );
};

export default RecipeBox;
