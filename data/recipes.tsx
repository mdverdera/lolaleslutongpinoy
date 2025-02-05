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
  {
    id: "d24f36af-0a68-45ea-a896-595721997585",
    title: "Filipino Breakfast",
    description:
      "Filipinos used to have a hefty and satisfying breakfast. It is usually loaded with rice, meats, dried fish, and eggs. It is essential for them to have this kind of breakfast for their body to function at its best.",
    category: "Breakfast",
    date: "November 4, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/filipino-breakfast.jpg",
    youtubeLink: "https://youtu.be/3-m0jVkTFTI",
    youtubeId: "3-m0jVkTFTI",
  },
  {
    id: "3fe9cd58-905e-4a94-9436-b558603e5af1",
    title: "Pastil",
    description:
      "Filipino packed rice dish made with steamed rice wrapped in fragrant banana leaves with dry shredded chicken. In a pot, chicken breast will be boiled with water, garlic, onion, soy sauce, oyster sauce and ground black pepper.",
    category: "Chicken",
    date: "November 5, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/pastil.jpg",
    youtubeLink: "https://youtu.be/mhowSoanDBE",
    youtubeId: "mhowSoanDBE",
  },
  {
    id: "5f568c04-6f08-4dd4-b4f9-771c338df5f3",
    title: "Fruit Cocktail Gelatin",
    description:
      "Fruit cocktail gelatin is an easy to prepare dessert that you can make for birthday parties, anniversaries, reunions and for holidays. The kids will love it because it is colorful and delicious.",
    category: "Dessert",
    date: "November 6, 2022",
    duration: "20 mins",
    imagePath: "/img/recipe/fruit-cocktail-gelatin.jpg",
    youtubeLink: "https://youtu.be/EDoXT9omWv4",
    youtubeId: "EDoXT9omWv4",
  },
  {
    id: "694e0ca8-d196-48ec-99a5-a816cc3cca2a",
    title: "Ube Halaya",
    description:
      "Ube halaya or Halayang ube is a famous Filipino dessert made from boiled and mashed purple yam with other few ingredients like condensed milk. Ube halaya dessert can be incorporated in other desserts like biko, halo-halo, leche flan, and many more. It can be also used as the main base and flavor of pastries and ice cream.",
    category: "Dessert",
    date: "November 7, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/ube-halaya.jpg",
    youtubeLink: "https://youtu.be/Nvz2uT7EIRg",
    youtubeId: "Nvz2uT7EIRg",
  },
  {
    id: "42a38afd-3b5a-4e6f-aae3-b4290b3c0086",
    title: "Chicken Macaroni Soup",
    description:
      "Sopas or Chicken Macaroni Soup is a Filipino food that is good for breakfast or in the afternoon as a snack. Most Filipino enjoy this soup dish during cold weather because it can easily warm the body from within.",
    category: "Meryenda",
    date: "November 8, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/chicken-macaroni-soup.jpg",
    youtubeLink: "https://youtu.be/9W3TJRU7XWY",
    youtubeId: "9W3TJRU7XWY",
  },
  {
    id: "3397dab0-4571-4cf7-acfe-6f3855efa6cc",
    title: "Lechon Manok",
    description:
      "Lechon Manok is one of Filipino favorite food in any special occasion or simple gatherings. The recipe and preparation for Lechon Manok is very simple. The whole chicken will be marinated and roasted for 1 to 2 hours.",
    category: "Chicken",
    date: "November 9, 2022",
    duration: "2 hrs",
    imagePath: "/img/recipe/lechon-manok.jpg",
    youtubeLink: "https://youtu.be/r7SFNouTQcE",
    youtubeId: "r7SFNouTQcE",
  },
  {
    id: "f33041d3-aca5-4b26-a1f0-8015bc8437b1",
    title: "Sinigang na Manok",
    description:
      "Sinigang na Manok is a sour soup dish that is authentic in the Philippines. Cooking method is also similar to sinampaluklang manok with a slight difference in the ingredients. Sinigang can be chicken, pork, fish, beef or shrimp with various vegetables.",
    category: "Chicken",
    date: "November 10, 2022",
    duration: "25 mins",
    imagePath: "/img/recipe/sinigang-na-manok.jpg",
    youtubeLink: "https://youtu.be/g69uwDj7iuA",
    youtubeId: "g69uwDj7iuA",
  },
  {
    id: "02219d46-db44-4749-83ae-c6a07d3b8b1d",
    title: "Cassava Cake",
    description:
      "Cassava cake is a traditional Filipino food that is made from grated cassava with the mixture of egg, evaporated milk, condensed milk, cheese and coconut milk. It can be made for business, give-away, gatherings and special occasions. It is also commonly eaten for breakfast and merienda.",
    category: "Dessert",
    date: "November 11, 2022",
    duration: "1 hr",
    imagePath: "/img/recipe/cassava-cake.jpg",
    youtubeLink: "https://youtu.be/2xJ861cSYnQ",
    youtubeId: "2xJ861cSYnQ",
  },
  {
    id: "deaacdbb-d6b3-4e9a-b43f-e2dbe4421813",
    title: "Pork Pochero",
    description:
      "Pork Pochero is a Filipino dish that is perfect for cold weather. This Filipino dish is very healthy and delicious since it consists of various vegetables. Aside from pork pochero, it also have other variations; beef pochero and chicken pochero.",
    category: "Pork",
    date: "November 12, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/pork-pochero.jpg",
    youtubeLink: "https://youtu.be/JtyypzJlqME",
    youtubeId: "JtyypzJlqME",
  },
  {
    id: "5489d0d2-fad4-46f6-9191-4d83bdaceeb9",
    title: "Ube Suman Kamoteng Kahoy with Bukayo Filling",
    description:
      "Cassava suman is a Filipino kakanin that is made of grated cassava, sugar and malagkit powder. It will be wrapped in a softened banana leaf then steamed for an hour or until the texture becomes firm. In this recipe, we added Bukayo as a filling to our suman to make it more delicious!",
    category: "Kakanin",
    date: "November 13, 2022",
    duration: "2 hrs",
    imagePath: "/img/recipe/ube-suman-bukayo.jpg",
    youtubeLink: "https://youtu.be/IZM2LZOB_l8",
    youtubeId: "IZM2LZOB_l8",
  },
  {
    id: "efb7ac30-0f40-44f2-9bfa-c83d5638d78b",
    title: "Pork Lomo Barbecue",
    description:
      "Pork Lomo Barbecue is made from thinly sliced lomo pork. These sliced pork are marinated in the mixture of soy sauce, oyster sauce, ketchup and other seasonings that will give a great taste to the pork. The lomo or the pork tenderloin is the most tender meat cut on the pork.",
    category: "Pork",
    date: "November 14, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/pork-lomo-bbq.jpg",
    youtubeLink: "https://youtu.be/F7UecKqwSsI",
    youtubeId: "F7UecKqwSsI",
  },
  {
    id: "6da39953-8ba8-4a35-9826-8b59655a9cdb",
    title: "Turbo Crispy Pata",
    description:
      "Crispy Pata is a famous pork dish that is usually served in parties or special occasions in the Philippines. It is usually eaten with alcohol drinks as a pulutan, but we can also eat this dish with rice and soy sauce, vinegar with siling labuyo sauce.",
    category: "Pork",
    date: "November 15, 2022",
    duration: "3 hrs",
    imagePath: "/img/recipe/turbo-crispy-pata.jpg",
    youtubeLink: "https://youtu.be/h_CCk58uGoA",
    youtubeId: "h_CCk58uGoA",
  },
  {
    id: "9a50f998-e770-4400-92fd-4677701e5944",
    title: "Buko Pandan",
    description:
      "Buko Pandan is a dessert that can be served in all occasions or even in simple gatherings. The kids will surely love this dessert and even the kids at heart. This dessert is very simple to prepare, you just need to create a gulaman and mixed it with milk, coconut meat and cream. Optionally, you can add pearls and sugar.",
    category: "Dessert",
    date: "November 16, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/buko-pandan.jpg",
    youtubeLink: "https://youtu.be/wW9ATEo9RCg",
    youtubeId: "wW9ATEo9RCg",
  },
  {
    id: "49cba14b-f429-4912-aac2-5b930ca173d9",
    title: "Sapin-Sapin",
    description: "...",
    category: "Kakanin",
    date: "November 17, 2022",
    duration: "1 hr",
    imagePath: "/img/recipe/sapin-sapin.jpg",
    youtubeLink: "https://youtu.be/pN2fxlRliy4",
    youtubeId: "pN2fxlRliy4",
  },
  {
    id: "9bb1fd7b-08ea-486b-8a29-04008877dbd2",
    title: "Beef Kaldereta with Gata",
    description: "...",
    category: "Beef",
    date: "November 27, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/beef-kaldereta.jpg",
    youtubeLink: "https://youtu.be/dScF7uwrHSM",
    youtubeId: "dScF7uwrHSM",
  },
  {
    id: "fc3e2246-7dd0-42e2-b150-6ff8db0203ce",
    title: "Kapampangan Tibok-Tibok",
    description: "...",
    category: "Kakanin",
    date: "December 1, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/tibok-tibok.jpg",
    youtubeLink: "https://youtu.be/oRUKmYjJnoQ",
    youtubeId: "oRUKmYjJnoQ",
  },
  {
    id: "779fded7-f5c5-49e9-96f3-6a066663eff5",
    title: "Nilagang Baka",
    description: "...",
    category: "Beef",
    date: "December 4, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/nilagang-baka.jpg",
    youtubeLink: "https://youtu.be/zAeSppIfrKg",
    youtubeId: "zAeSppIfrKg",
  },
  {
    id: "3562895d-081d-48b8-a81c-432497f146e3",
    title: "Ginisang Patola with Egg",
    description: "...",
    category: "Vegetable",
    date: "December 8, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/patola-egg.jpg",
    youtubeLink: "https://youtu.be/6IX8oRTid8Y",
    youtubeId: "6IX8oRTid8Y",
  },
  {
    id: "72435c65-5c47-4d6e-ab63-189dded4bd3f",
    title: "Kalamay Hati",
    description: "...",
    category: "Kakanin",
    date: "December 11, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/kalamay-hati.jpg",
    youtubeLink: "https://youtu.be/5-utRE1LAs0",
    youtubeId: "5-utRE1LAs0",
  },
  {
    id: "ba429a79-62bc-4bc7-84bc-cf81a3d84d96",
    title: "Palitaw",
    description: "...",
    category: "Kakanin",
    date: "December 14, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/palitaw.jpg",
    youtubeLink: "https://youtu.be/Jv99zApwur4",
    youtubeId: "Jv99zApwur4",
  },
  {
    id: "9c1ad0f5-1c6e-45bb-8298-7841573c0862",
    title: "Buko Salad",
    description: "...",
    category: "Dessert",
    date: "December 20, 2022",
    duration: "30 mins",
    imagePath: "/img/recipe/buko-salad.jpg",
    youtubeLink: "https://youtu.be/2BaaNXmj_LM",
    youtubeId: "2BaaNXmj_LM",
  },
  {
    id: "a6261edc-02bf-479c-bf0e-355ab9346e80",
    title: "Kalamay sa Latik",
    description: "...",
    category: "Kakanin",
    date: "January 1, 2023",
    duration: "30 mins",
    imagePath: "/img/recipe/kalamay-sa-latik.jpg",
    youtubeLink: "https://youtu.be/ZtuOWpV7nps",
    youtubeId: "ZtuOWpV7nps",
  },
  {
    id: "1444a1b6-8d19-49c6-8921-552a8bf8c05b",
    title: "Ube Biko de Leche",
    description: "...",
    category: "Dessert",
    date: "January 16, 2023",
    duration: "30 mins",
    imagePath: "/img/recipe/ube-biko-leche-flan.jpg",
    youtubeLink: "https://youtu.be/67tyvFehCes",
    youtubeId: "67tyvFehCes",
  },
];

export default recipes;
