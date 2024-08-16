import { CgPokemon } from "react-icons/cg";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLink,
  FaLinkedin,
} from "react-icons/fa";

const IconMapping = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  hackerrank: <FaHackerrank />,
  instagram: <FaInstagram />,
  facebook: <FaFacebook />,
  discord: <FaDiscord />,
  pokemon: <CgPokemon />,
  link: <FaLink />,
};

function getIconComponent(iconName) {
  const IconComponent = IconMapping[iconName.toLowerCase().replaceAll(" ", "")];
  if (IconComponent) {
    return IconComponent;
  }
  return IconMapping["link"];
}

export default getIconComponent;
