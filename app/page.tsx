"use client";
import dynamic from "next/dynamic";

export default function Home() {
  const Main = dynamic(() => import("./main"), {
    ssr: false,
  });
  return <Main />;
}
