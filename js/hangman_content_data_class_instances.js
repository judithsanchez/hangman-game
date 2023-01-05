const content_data_aladdin = new HangmanContentData({
  content_type: "movie",
  content_name: { english: "Aladdin", spanish: "Aladdin" },
  content_image:
    "https://bocaditosespanol.com/wp-content/uploads/2022/10/characters-disney-jasmine_1.svg",
  sentences: [
    { english: "She has long black hair", spanish: "Tiene pelo largo y negro" },
    { english: "She is friends with Aladdin", spanish: "Es amiga de Aladdin" },
    { english: "Her pet is a tiger", spanish: "Su mascota es un tigre" },
  ],
});

const content_data_mulan = new HangmanContentData({
  content_type: "movie",
  content_name: { english: "Mulan", spanish: "Mulán" },
  content_image:
    "https://bocaditosespanol.com/wp-content/uploads/2022/10/characters-disney-mulan_1.svg",
  sentences: [
    { english: "She has long black hair", spanish: "Tiene pelo largo y negro" },
    { english: "She is brave", spanish: "Ella es valiente" },
    {
      english: "She has a pet dragon",
      spanish: "Ella tiene un dragón mascota",
    },
  ],
});

const content_data_mario_bross = new HangmanContentData({
  content_type: "movie",
  content_name: { english: "Mario Bross", spanish: "Mario Bross" },
  content_image:
    "https://bocaditosespanol.com/wp-content/uploads/2022/10/characters-nintendo-mario-bros_1.svg",
  sentences: [
    { english: "He has a red hat", spanish: "Él tiene un sombrero rojo" },
    { english: "He is a plumber", spanish: "Él es un plomero" },
    { english: "Bowser is his enemy", spanish: "Bowser es su enemigo" },
  ],
});

const content_data_lilo_and_stitch = new HangmanContentData({
  content_type: "movie",
  content_name: { english: "Lilo and Stitch", spanish: "Lilo y Stitch" },
  content_image:
    "https://bocaditosespanol.com/wp-content/uploads/2022/10/characters-disney-stitch_1.svg",
  sentences: [
    { english: "He is an alien", spanish: "Él es un alien" },
    { english: "He landed in Hawaii", spanish: "Él aterrizó en Hawaii" },
    { english: "He is friends with Lilo", spanish: "Él es amigo de Lilo" },
  ],
});

const content_data_pikachu = new HangmanContentData({
  content_type: "movie",
  content_name: { english: "Pokemon", spanish: "Pokémon" },
  content_image:
    "https://bocaditosespanol.com/wp-content/uploads/2022/10/characters-pokemon-pikachu-1.svg",
  sentences: [
    { english: "It is an electric type", spanish: "Es de tipo eléctrico" },
    { english: "It is adorable", spanish: "Él es adorable" },
    { english: "Pikachu is a mouse", spanish: "Pikachu es un ratón" },
  ],
});

const hangman_content_data_list = [
  content_data_aladdin,
  content_data_mulan,
  content_data_mario_bross,
  content_data_lilo_and_stitch,
  content_data_pikachu,
];
