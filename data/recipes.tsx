const recipes = [
  {
    id: "43a33817-eef7-4794-9f02-7218a5aa7bcc",
    title: "Filipino Style Spaghetti",
    description:
      "Filipino version of spaghetti is sweet and this is made with banana ketchup rather than tomato sauce.",
    category: "Pasta",
    date: "October 23, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/filipino-style-spaghetti.jpg",
    youtubeLink: "https://youtu.be/IF_ZGZJanTU",
    youtubeId: "IF_ZGZJanTU",
  },
  {
    id: "fa652b27-70db-48e5-9ac3-ddcdec4d436c",
    title: "Spicy Binagoongang Baboy with Talong",
    description:
      "In this amazing dish we will mix garlic, onions, tomato, shrimp paste, eggplant, and more. Sauteed shrimp paste will add a great flavor to the fried eggplant.",
    category: "Pork",
    date: "October 24, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/pork-binagoongan-talong.jpg",
    youtubeLink: "https://youtu.be/Y_ZgkEsYOpU",
    youtubeId: "Y_ZgkEsYOpU",
  },
  {
    id: "e875dd17-b3a0-48c8-8f28-bf48644f4d47",
    title: "Bicol Express",
    description:
      "Bicol express is a Filipino food which is very easy to prepare and yet it is very popular in the Philippines. It is a spicy food which will make you feel wanted to eat more.",
    category: "Pork",
    date: "October 25, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/bicol-express.jpg",
    youtubeLink: "https://youtu.be/kLRAa2x_OZA",
    youtubeId: "kLRAa2x_OZA",
  },
  {
    id: "f1bb18fb-19ff-46d7-bf67-b903de680285",
    title: "Chicken Curry",
    description:
      "Today, we're going to show you how to cook Filipino version of Chicken Curry. Coconut milk will be used to cook this version of Chicken Curry instead of yoghurt. The ingredients will be used are easy to find in our home.",
    category: "Chicken",
    date: "October 26, 2022",
    duration: "40 mins",
    imagePath: "/img/recipe/chicken-curry.jpg",
    youtubeLink: "https://youtu.be/lPbfe4ieWcg",
    youtubeId: "lPbfe4ieWcg",
  },
  {
    id: "91746efc-6688-4949-bf08-61b0d8ca4b06",
    title: "Lumpiang Shanghai",
    description:
      "Lumpiang Shanghai is a Filipino version of spring rolls. It is filled with ground pork that is mixed with vegetables such as carrots, wrapped in a lumpia wrapper and then deep fried.",
    category: "Party",
    date: "October 27, 2022",
    duration: "25 mins",
    imagePath: "/img/recipe/lumpiang-shanghai.jpg",
    youtubeLink: "https://youtu.be/LUxJ9a4zQA8",
    youtubeId: "LUxJ9a4zQA8",
  },
  {
    id: "cb964c93-f911-4a02-869e-967b2550ec87",
    title: "Chicken Adobo",
    description:
      "Chicken Adobo is a Filipino dish of chicken stewed in vinegar, garlic, and soy sauce. Adobo is a method in cooking, which is originated here in the Philippines. It is also considered as unofficial national dish of the Philippines.",
    category: "Chicken",
    date: "October 28, 2022",
    duration: "25 mins",
    imagePath: "/img/recipe/chicken-adobo.jpg",
    youtubeLink: "https://youtu.be/j6bs3C_n7PU",
    youtubeId: "j6bs3C_n7PU",
  },
  {
    id: "3b81322a-59c5-4308-a683-230d71a50958",
    title: "Ginisang Monggo",
    description:
      "Ginisang Monggo is a Filipino mung bean soup that is flavorful, delicious and tasty. It is made with mung beans, garlic, tomatoes, onions, various vegetables, and patis. It is cooked with pork, tinapa, or other seafood and meat. It is also commonly garnished with chicharon on top.",
    category: "Pork",
    date: "October 29, 2022",
    duration: "25 mins",
    imagePath: "/img/recipe/ginisang-monggo.jpg",
    youtubeLink: "https://youtu.be/qHDVPKOWo-M",
    youtubeId: "qHDVPKOWo-M",
  },
  {
    id: "7140f315-abf7-4f6d-87ab-a96354c7736d",
    title: "Ginataang Bilo-Bilo",
    description:
      "Ginataang Bilo-Bilo our favorite Filipino snack. Made with glutinous rice balls, saging na saba, sweet potatoes and sago that is cooked in sweet coconut milk.",
    category: "Meryenda",
    date: "October 30, 2022",
    duration: "25 mins",
    imagePath: "/img/recipe/ginataang-bilo-bilo.jpg",
    youtubeLink: "https://youtu.be/wprpTT_i9-I",
    youtubeId: "wprpTT_i9-I",
  },
  {
    id: "9bcd254e-ade0-4b58-b8a3-860c7753d372",
    title: "Pancit Canton",
    description:
      "Pancit Canton is often served on birthdays and special occasions to signify long life. It is prepared with a combination of various veggies that makes this dish healthy and delicious.",
    category: "Meryenda",
    date: "October 31, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/pancit-canton.jpg",
    youtubeLink: "https://youtu.be/5n_GjFbJq7U",
    youtubeId: "5n_GjFbJq7U",
  },
  {
    id: "5c151c74-235a-4847-80d8-1658722f5ae6",
    title: "Lechon Belly",
    description:
      "Lechon belly is tasty and delicious Filipino dish. It is crispy on the outside and soft and juicy in the inside. For it to become juicy and tasty inside, it should be boil with star anise, onion, garlic, salt, ground black pepper and bay leaf.",
    category: "Pork",
    date: "November 1, 2022",
    duration: "3 hrs",
    imagePath: "/img/recipe/lechon-belly.jpg",
    youtubeLink: "https://youtu.be/u7GpHgQ5peM",
    youtubeId: "u7GpHgQ5peM",
  },
  {
    id: "3c9c8f2a-7d72-4d41-aaa3-59d5222db2b6",
    title: "Lechon Paksiw",
    description:
      "Lechon Paksiw is a Filipino pork dish that is cooked with vinegar. Lechon belly will be cut into serving sizes and will be boiled in a special sauce with other condiments like salt, optionally you can add garlic and ground black pepper.",
    category: "Pork",
    date: "November 2, 2022",
    duration: "20 mins",
    imagePath: "/img/recipe/lechon-paksiw.jpg",
    youtubeLink: "https://youtu.be/uhGoeEW74ok",
    youtubeId: "uhGoeEW74ok",
  },
  {
    id: "9fdca563-96d8-4913-86b0-e9feffba6fab",
    title: "Pinakbet",
    description:
      "Pinakbet or Pakbet is a delicious and popular Filipino vegetable dish. As this dish is composed of a variety of vegetables, it is full of different vitamins and minerals.",
    category: "Vegetable",
    date: "November 3, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/pinakbet.jpg",
    youtubeLink: "https://youtu.be/307Gyi73mOI",
    youtubeId: "307Gyi73mOI",
  },
];

export default recipes;
