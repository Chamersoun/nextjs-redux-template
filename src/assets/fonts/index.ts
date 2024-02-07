import { DM_Sans, Poppins } from "next/font/google";

const textFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const titleFont = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

const subtitleFont = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export { subtitleFont, textFont, titleFont };
