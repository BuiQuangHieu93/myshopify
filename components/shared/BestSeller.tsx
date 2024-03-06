import React from "react";
import WrapperContainer from "../Wrapper";
import Card from "./Card";
import { trending } from "@/constants";

const BestSeller = () => {
  return (
    <>
      <WrapperContainer title="BEST SELLER" subtitle="Top sale in this week">
        <div className="grid grid-cols-4 gap-x-[68px]">
          {trending.map((item, index) => (
            <Card
              key={index}
              src={item.src}
              srcAlt={item.srcAlt}
              alt={item.alt}
              status={item.status}
              size={item.size}
              title={item.title}
              price={item.price}
              sale={typeof item.sale === "number" ? item.sale : undefined}
            />
          ))}
        </div>
      </WrapperContainer>
    </>
  );
};

export default BestSeller;
