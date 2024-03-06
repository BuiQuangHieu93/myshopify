import ImageDiscover from "./ImageDiscover";
import WrapperContainer from "@/components/Wrapper";

const Discover = () => {
  return (
    <div>
      <WrapperContainer>
        <div className="flex-between  ">
          <ImageDiscover
            src="/images/women.jpg"
            height={630}
            width={570}
            alt="women"
            title="Women"
          />

          <div className="flex flex-col ml-12 mr-12 h-[630px] justify-between">
            <div className="overflow-hidden w-[300px] h-[300px]">
              <ImageDiscover
                src="/images/bag.jpg"
                alt="bag"
                title="Accessories"
                height={300}
                width={300}
              />
            </div>
            <div className="overflow-hidden w-[300px] h-[300px]">
              <ImageDiscover
                src="/images/shoes.jpg"
                height={300}
                width={300}
                alt="shoes"
                title="Footwear"
              />
            </div>
          </div>

          <ImageDiscover
            src="/images/clock.jpg"
            alt="clock"
            height={630}
            width={300}
            title="Watches"
          />
        </div>
      </WrapperContainer>
    </div>
  );
};

export default Discover;
