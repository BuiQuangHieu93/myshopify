"use client";
import Wrapper from "@/components/Wrapper";
import ImageDiscover from "./ImageDiscover";

const Discover = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex justify-center">
          <ImageDiscover
            src="/images/women.jpg"
            height={630}
            width={570}
            alt="women"
            title="Women"
          />

          <div className="flex flex-col ml-12 mr-12 justify-between">
            <ImageDiscover
              src="/images/bag.jpg"
              alt="bag"
              title="Accessories"
              height={300}
              width={300}
            />

            <ImageDiscover
              src="/images/shoes.jpg"
              height={300}
              width={300}
              alt="shoes"
              title="Footwear"
            />
          </div>

          <ImageDiscover
            src="/images/clock.jpg"
            alt="clock"
            height={630}
            width={300}
            title="Watches"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Discover;
