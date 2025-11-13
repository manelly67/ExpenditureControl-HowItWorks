import './styles/style-reset.css';
import './styles/style.css';
import { googleFonts } from "./components/google-fonts";
import { homepage } from "./components/homepage";

const meta = document.createElement("meta");
meta.setAttribute("name", "description");
meta.setAttribute(
  "content",
  "description of the benefits of the app CoffeeTea designed for expense controlling"
);

googleFonts();
homepage();

document.head.appendChild(meta);
