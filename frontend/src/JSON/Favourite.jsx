import FF from "../assets/Images/ff.jfif";
import Minecraft from "../assets/Images/minecraft.jpg";
import GTA from "../assets/Images/gta.jpg";
import Android from "../assets/Icons/android.png";
import Ios from "../assets/Icons/ios.png";
import Pc from "../assets/Icons/pc.png";
import Xbox from "../assets/Icons/xbox.png";
import PlayStation from "../assets/Icons/playstation.png";

let Favourite = [
  {
    id: 101,
    rank: 1,
    image: FF,
    title: "Free Fire",
    description:
      "Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute and aim to stay in the safe zone for as long as possible. Drive vehicles to explore the vast map, hide in wild, or become invisible by proning under grass or rifts. Ambush, snipe, survive, there is only one goal: to survive and answer the call of duty. The game offers a variety of characters, weapons, and skins, making it highly customizable and engaging for players of all skill levels.",
    platforms: [
      { name: "Android", icon: Android },
      { name: "iOS", icon: Ios },
    ],
  },
  {
    id: 102,
    rank: 2,
    image: Minecraft,
    title: "Minecraft",
    description:
      "Minecraft is a game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs. With its endless possibilities, Minecraft encourages creativity, collaboration, and exploration, making it a favorite among players of all ages. The game also supports multiplayer modes, allowing players to connect and build together.",
    platforms: [
      { name: "PC", icon: Pc },
      { name: "Xbox", icon: Xbox },
      { name: "PlayStation", icon: PlayStation },
      { name: "Android", icon: Android },
      { name: "iOS", icon: Ios },
    ],
  },
  {
    id: 103,
    rank: 3,
    image: GTA,
    title: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second. The game features an engaging storyline with three unique protagonists, each with their own skills and missions. Players can also enjoy the expansive online multiplayer mode, GTA Online, which includes heists, races, and various other activities. With its stunning graphics and immersive gameplay, GTA V remains a benchmark in open-world gaming.",
    platforms: [
      { name: "PC", icon: Pc },
      { name: "Xbox", icon: Xbox },
      { name: "PlayStation", icon: PlayStation },
    ],
  },
];

export default Favourite;
