"use client";
import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";
import Image from "next/image";
import { space_grotesk } from "../fonts";

export default function LinkButton({
  href,
  logo,
  text,
  long = false,
  noPadding = false,
  moreStyles = "",
}: {
  href: string;
  logo: string;
  text: string;
  long?: boolean;
  noPadding?: boolean;
  moreStyles?: string;
}) {
  var styles = `border border-white/20 rounded-md cursor-pointer flex flex-row items-center gap-2 font-medium ${space_grotesk.className} ${
    noPadding ? "" : "p-1"
  } ${!long && "aspect-square justify-center"} `;
  styles += moreStyles;
  return (
    <motion.a
      href={href}
      className={styles}
      animate={{ background: "#ffffff20" }}
      whileHover={{
        background: "#ffffff30",
        transition: { duration: 0.1, ease: "easeInOut" },
      }}
    >
      <Image src={logo} height={32} width={32} alt="logo" />
      {long && <p>{text}</p>}
    </motion.a>
  );
}
