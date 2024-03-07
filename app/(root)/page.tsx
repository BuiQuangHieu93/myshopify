import BannerHolder from "@/components/shared/BannerHolder";
import BestSeller from "@/components/shared/BestSeller";
import Blog from "@/components/shared/Blog";
import Discover from "@/components/shared/Discover";
import Follow from "@/components/shared/Follow";
import Slider from "@/components/shared/Slider";
import Trending from "@/components/shared/Trending";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <Slider />
        <Discover />
        <Trending />
        <BannerHolder />
        <BestSeller />
        <Blog />
        <Follow />
        <UserButton />
      </section>
    </>
  );
}
