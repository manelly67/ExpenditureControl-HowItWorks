import "./styles/style-reset.css";
import "./styles/style.css";
import logo from "./assets/mn_bg_white.ico";
import { googleFonts } from "./components/google-fonts";
import { homepage } from "./components/homepage";

const link = document.createElement("link");
link.setAttribute("rel", "icon");
link.setAttribute("type", "image/ico");
link.setAttribute("href", logo);

const meta = document.createElement("meta");
meta.setAttribute("name", "description");
meta.setAttribute(
  "content",
  "description of the benefits of the app CoffeeTea designed for expense controlling"
);

googleFonts();
homepage();

document.head.appendChild(meta);
document.head.appendChild(link);
