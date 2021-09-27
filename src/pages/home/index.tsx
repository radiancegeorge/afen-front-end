import React, { useEffect } from "react";
import { BannerSection } from "./banner-section";
import { TokenArtSection } from "./token-art-section";
import { PoweredBySection } from "./powerd-by-section";
import { AfroxnftSection } from "./own-afroxnft-section";
import { FeaturedInSection } from "./featured-in-section";
import { NewsLetterSection } from "./news-letter-section";

const Home = (props: any) => {
  useEffect(() => {
    var element: any = document.getElementById("header");
    element.classList.remove("service");
    return () => {
      element.classList.add("service");
    };
  }, []);
  return (
    <>
      <BannerSection />
      <TokenArtSection />
      <PoweredBySection />
      <AfroxnftSection />
      <FeaturedInSection />
      <NewsLetterSection />
    </>
  );
};

export { Home };
