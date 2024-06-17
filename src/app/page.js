import Image from "next/image";
import ThemeButton from "@/components/theme-button";
import Hero from "@/components/Hero/hero";
import ButtonGradient from "@/components/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <Hero/>
      </div>
      <ButtonGradient/>
    </div>
  );
}
