import Image from "next/image";
import ThemeButton from "@/components/theme-button";
import Hero from "@/components/Hero/hero";
import Benefits from "@/components/Benefits/Benefits";
import Collaboration from "@/components/Collaboration/collaboration";
import ButtonGradient from "@/components/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <Hero/>
        <Benefits/>
        <Collaboration/>
      </div>
      <ButtonGradient/>
    </div>
  );
}
