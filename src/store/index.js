import { proxy } from "valtio";

import wallpaper from "../../public/images/3D/textures/Wallpaper_baseColor.png";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isFullTexture: false,
  fullDecal: wallpaper,
});

export default state;
