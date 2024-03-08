"use client";
import React, { useState, useEffect } from "react";
import WrapperContainer from "../Wrapper";
import Card from "./Card";
import { trending } from "@/constants";

const Trending = () => {
  const [numItemsPerRow, setNumItemsPerRow] = useState(4); // Default to 4 items per row

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumItemsPerRow(4);
      } else if (window.innerWidth >= 768) {
        setNumItemsPerRow(2);
      } else {
        setNumItemsPerRow(1);
      }
      console.log(numItemsPerRow);
    };

    // Initial calculation
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the number of rows based on the length of the trending array and the number of items per row
  const numRows = Math.ceil(trending.length / numItemsPerRow);

  return (
    <>
      <WrapperContainer title="TRENDING" subtitle="Top view in this week">
        <div className="grid grid-cols-4">
          {Array.from({ length: numRows }, (_, row) =>
            trending
              .slice(row * numItemsPerRow, (row + 1) * numItemsPerRow)
              .map((item, index) => (
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
              ))
          )}
        </div>
      </WrapperContainer>
    </>
  );
};

export default Trending;
