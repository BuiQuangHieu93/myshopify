import Discover from "@/components/shared/Discover";
import Navbar from "@/components/shared/Navbar";
import Slider from "@/components/shared/Slider";
import Trending from "@/components/shared/Trending";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <Slider />
        <Discover />
        <Trending />
        <UserButton />
      </section>
    </>
  );
}
