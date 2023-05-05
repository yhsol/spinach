import { FirstLetter } from "@/components/TourOfTailwind";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div className="bg-slate-400 p-20 gap-10 min-h-screen">
      <FirstLetter />
    </div>
  );
}
