import Android from "../assets/Icons/android.png";
import Ios from "../assets/Icons/ios.png";
import Pc from "../assets/Icons/pc.png";
import Xbox from "../assets/Icons/xbox.png";
import PlayStation from "../assets/Icons/playstation.png";

let Top100 = [
  {
    id: 1,
    rank: 1,
    image:
      "https://www.theaureview.com/wp-content/uploads/2023/10/Baldurs-gate-3-chatacter-creation-guide.jpeg",
    title: "Baldur's Gate 3",
    description:
      "Baldur's Gate 3 is a role-playing game developed and published by Larian Studios. Set in the Dungeons & Dragons universe, it offers a rich narrative, deep character customization, and tactical turn-based combat. Players can explore a vast world filled with secrets, interact with a diverse cast of characters, and make impactful choices that shape the story. The game has been praised for its intricate storytelling, stunning visuals, and innovative gameplay mechanics, making it a standout title in the RPG genre.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink: "https://store.steampowered.com/app/1",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/game1",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink: "https://www.xbox.com/en-US/games/game1",
      },
    ],
  },
  {
    id: 2,
    rank: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Nou4oHurJxom1LW1QZvXbvtsRRzpNTD28g&s",
    title: "Elden Ring",
    description:
      "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game is a collaboration between game director Hidetaka Miyazaki and fantasy novelist George R. R. Martin. Set in a sprawling open world, players can explore diverse landscapes, battle formidable enemies, and uncover hidden lore. The game features challenging combat, deep character progression, and a unique multiplayer system. Elden Ring has received critical acclaim for its world-building, gameplay depth, and artistic design.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink: "https://store.steampowered.com/app/2",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/game2",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink: "https://www.xbox.com/en-US/games/game2",
      },
    ],
  },
  {
    id: 3,
    rank: 3,
    image:
      "https://store-images.s-microsoft.com/image/apps.6136.14482474285447263.0a4055ed-9044-4c0c-abf5-292bb1bcb735.3db4c9c4-de15-4e0f-8b4d-1539f8a2ab08?q=90&w=480&h=270",
    title: "Persona 5 Royal",
    description:
      "Persona 5 Royal is a role-playing game developed by Atlus. It is an expanded version of the original Persona 5 game, featuring new content and gameplay elements. Players take on the role of a high school student who leads a double life as a Phantom Thief, exploring mysterious dungeons and battling supernatural enemies. The game introduces new characters, story arcs, and enhanced mechanics, making it a definitive edition. Persona 5 Royal has been lauded for its stylish presentation, engaging narrative, and memorable soundtrack.",
    platforms: [
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/game3",
      },
      {
        name: "PC",
        icon: Pc,
        downloadLink: "https://store.steampowered.com/app/3",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink: "https://www.xbox.com/en-US/games/game3",
      },
    ],
  },
  {
    id: 4,
    rank: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqn_xPrTZ4SCvPorkPqFkH1HHcmPsC6SkoBg&s",
    title: "Mass Effect Trilogy",
    description:
      "Mass Effect Trilogy is a collection of the first three games in the Mass Effect series, developed by BioWare and published by Electronic Arts. The trilogy follows the story of Commander Shepard, a human soldier who must save the galaxy from an ancient alien threat known as the Reapers. Featuring a blend of action, exploration, and decision-making, the trilogy allows players to shape the story through their choices. The remastered edition enhances graphics and gameplay, making it a must-play for fans of sci-fi RPGs.",
    platforms: [
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/game4",
      },
      {
        name: "PC",
        icon: Pc,
        downloadLink: "https://store.steampowered.com/app/4",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink: "https://www.xbox.com/en-US/games/game4",
      },
    ],
  },
  {
    id: 5,
    rank: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoMgFiFFrrYzStnaavfcBVv-2APCRjCtEBw&s",
    title: "Persona 4 Golden",
    description:
      "Persona 4 Golden is a role-playing game developed by Atlus. It is an enhanced version of the original Persona 4 game, featuring new content and improvements. Set in a rural town, players investigate a series of mysterious murders while balancing school life and friendships. The game introduces new social links, dungeons, and story elements, providing a richer experience. Persona 4 Golden is celebrated for its compelling characters, engaging gameplay, and emotional storytelling.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink: "https://store.steampowered.com/app/5",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/game5",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink: "https://www.xbox.com/en-US/games/game5",
      },
    ],
  },
  {
    id: 6,
    rank: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDKN1JHOxGdPkJ8z566Ev9mUFAIeSxk7xKA&s",
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "The Legend of Zelda: Breath of the Wild is an open-world action-adventure game developed and published by Nintendo. It features a vast world to explore, innovative gameplay mechanics, and a captivating story. Players can climb mountains, cook meals, and solve puzzles while battling enemies and uncovering the secrets of Hyrule. The game has been widely praised for its freedom of exploration, stunning visuals, and groundbreaking design, earning numerous Game of the Year awards.",
    platforms: [
      {
        name: "Nintendo Switch",
        icon: "https://via.placeholder.com/40?text=Switch",
        downloadLink:
          "https://www.nintendo.com/games/detail/the-legend-of-zelda-breath-of-the-wild-switch/",
      },
    ],
  },
  {
    id: 7,
    rank: 7,
    image:
      "https://store-images.s-microsoft.com/image/apps.58752.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.95fdf1a1-efd6-4938-8100-8abae91695d6?q=90&w=480&h=270",
    title: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is an action-adventure game developed and published by Rockstar Games. It is set in a vast open world and tells the story of Arthur Morgan, an outlaw in the late 19th century. Players can engage in various activities such as hunting, fishing, and interacting with NPCs, all while navigating a complex narrative filled with moral dilemmas. The game has been acclaimed for its realistic world, detailed characters, and emotional storytelling.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink:
          "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink:
          "https://www.playstation.com/en-us/games/red-dead-redemption-2/",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink: "https://www.xbox.com/en-US/games/red-dead-redemption-2",
      },
    ],
  },
  {
    id: 8,
    rank: 8,
    image:
      "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
    title: "The Witcher 3: Wild Hunt",
    description:
      "The Witcher 3: Wild Hunt is an action role-playing game developed and published by CD Projekt. It features a rich narrative, expansive open world, and deep character development. Players take on the role of Geralt of Rivia, a monster hunter, as he searches for his adopted daughter while battling various foes. The game is known for its intricate quests, moral choices, and stunning visuals. It has received numerous awards and is considered one of the best RPGs of all time.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink:
          "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink:
          "https://www.playstation.com/en-us/games/the-witcher-3-wild-hunt/",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink:
          "https://www.xbox.com/en-US/games/the-witcher-3-wild-hunt",
      },
    ],
  },
  {
    id: 9,
    rank: 9,
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
    title: "Hollow Knight",
    description:
      "Hollow Knight is a 2D action-adventure game developed and published by Team Cherry. It features a beautifully hand-drawn world, challenging gameplay, and a deep story. Players explore the underground kingdom of Hallownest, battling enemies and uncovering secrets. The game is praised for its tight controls, atmospheric design, and intricate level design. Hollow Knight has become a beloved title in the indie game community.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink:
          "https://store.steampowered.com/app/367520/Hollow_Knight/",
      },
      {
        name: "Nintendo Switch",
        icon: "https://via.placeholder.com/40?text=Switch",
        downloadLink:
          "https://www.nintendo.com/games/detail/hollow-knight-switch/",
      },
    ],
  },
  {
    id: 10,
    rank: 10,
    image:
      "https://store-images.s-microsoft.com/image/apps.61214.71827372323164480.6e97c7d2-899a-404f-8660-d622a7fc9162.740b1351-e659-486b-9d1c-948e0d928ead?q=90&w=480&h=270",
    title: "Dark Souls III",
    description:
      "Dark Souls III is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. It features challenging gameplay, intricate level design, and a dark fantasy setting. Players navigate a world filled with deadly enemies, uncovering lore and upgrading their character. The game is known for its difficulty, rewarding combat, and atmospheric design. Dark Souls III has been praised for its gameplay mechanics, world-building, and visual design.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink:
          "https://store.steampowered.com/app/374320/DARK_SOULS_III/",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/dark-souls-iii/",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink: "https://www.xbox.com/en-US/games/dark-souls-iii",
      },
    ],
  },
  {
    id: 11,
    rank: 11,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGm6EcY9QQUhNNkGujISa7TOyUmuYww-ZNg&s",
    title: "God of War (2018)",
    description:
      "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It follows the story of Kratos and his son Atreus in a Norse mythology-inspired world. Players engage in brutal combat, solve puzzles, and explore a richly detailed world. The game has been praised for its storytelling, character development, and stunning visuals. God of War has won numerous awards and is considered a masterpiece in the action-adventure genre.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink: "https://store.steampowered.com/app/1593500/God_of_War/",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/god-of-war/",
      },
    ],
  },
  {
    id: 12,
    rank: 12,
    image:
      "https://www.hollywoodreporter.com/wp-content/uploads/2018/08/sekiro-_shadows_die_twice.jpg",
    title: "Sekiro: Shadows Die Twice",
    description:
      "Sekiro: Shadows Die Twice is an action-adventure game developed by FromSoftware and published by Activision. It features challenging combat, stealth mechanics, and a rich story set in a reimagined Sengoku-era Japan. Players take on the role of a shinobi named Wolf, seeking revenge on his enemies. The game is known for its difficulty, precise combat, and beautiful world design. Sekiro has received critical acclaim for its gameplay mechanics, story, and visual design.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink:
          "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink:
          "https://www.playstation.com/en-us/games/sekiro-shadows-die-twice/",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink:
          "https://www.xbox.com/en-US/games/sekiro-shadows-die-twice",
      },
    ],
  },
  {
    id: 13,
    rank: 13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ozuGLp7hoLFPk_WqpY8QEDdCDfTFe5jNlw&s",
    title: "Bloodborne",
    description:
      "Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment. It features a dark and gothic world, challenging gameplay, and a rich story. Players navigate the city of Yharnam, battling horrific creatures and uncovering the city's dark secrets. The game is known for its fast-paced combat, atmospheric design, and intricate lore. Bloodborne has been praised for its gameplay mechanics, world-building, and visual design.",
    platforms: [
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/bloodborne/",
      },
    ],
  },
  {
    id: 14,
    rank: 14,
    image:
      "https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg",
    title: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is an open-world action role-playing game developed and published by CD Projekt. It features a futuristic setting, deep character customization, and a branching narrative. Players take on the role of V, a mercenary in the dystopian Night City, navigating a world filled with cybernetic enhancements and corporate intrigue. The game is known for its detailed world, complex characters, and immersive storytelling. Despite a rocky launch, Cyberpunk 2077 has received praise for its ambition and depth.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink:
          "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink: "https://www.playstation.com/en-us/games/cyberpunk-2077/",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink: "https://www.xbox.com/en-US/games/cyberpunk-2077",
      },
    ],
  },
  {
    id: 15,
    rank: 15,
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001369/3a41386d4b0999365727a21cc5c13853cfc244abca39b689bb79a339601e48c3",
    title: "The Elder Scrolls V: Skyrim",
    description:
      "The Elder Scrolls V: Skyrim is an open-world action role-playing game developed by Bethesda Game Studios. It features a vast world to explore, deep character customization, and a rich story. Players take on the role of the Dragonborn, a hero with the power to defeat dragons and save the world. The game is known for its freedom of exploration, detailed world, and modding community. Skyrim has received numerous awards and is considered one of the best RPGs of all time.",
    platforms: [
      {
        name: "PC",
        icon: Pc,
        downloadLink:
          "https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/",
      },
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink:
          "https://www.playstation.com/en-us/games/the-elder-scrolls-v-skyrim/",
      },
      {
        name: "Xbox",
        icon: Xbox,
        downloadLink:
          "https://www.xbox.com/en-US/games/the-elder-scrolls-v-skyrim",
      },
    ],
  },
  {
    id: 16,
    rank: 16,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqN20v2S4pbAUbQkGzH5pDs7ReasDArnb4w&s",
    title: "The Last of Us Part II",
    description:
      "The Last of Us Part II is an action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment. It follows the story of Ellie as she navigates a post-apocalyptic world filled with danger and emotional challenges. Players engage in intense combat, solve puzzles, and explore a richly detailed world. The game has been praised for its storytelling, character development, and stunning visuals. The Last of Us Part II has won numerous awards and is considered a masterpiece in the action-adventure genre.",
    platforms: [
      {
        name: "PlayStation",
        icon: PlayStation,
        downloadLink:
          "https://www.playstation.com/en-us/games/the-last-of-us-part-ii/",
      },
    ],
  },
];
export default Top100;
