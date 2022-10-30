import { ClockIcon } from "@heroicons/react/24/solid";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { getStaticProps } from "pages/recipes";

const RecipeBox = ({
  recipe,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <div className="h-32 sm:h-48 relative group item">
        <Image
          src={recipe.imagePath}
          alt={recipe.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={rgbDataURL(230, 230, 250)}
          className="hidden w-full duration-200 md:block group-hover:scale-110"
        />
        {/* Item Gradient */}
        <div className="item-gradient"></div>
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
    </>
  );
};

export default RecipeBox;
