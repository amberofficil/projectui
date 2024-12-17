import DiscountItems from "./components/DiscountItems";
import FeaturedProducts from "./components/FeaturedProducts";
import GetLatest from "./components/GetLatest";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import LatestBlog from "./components/LatestBlog";
import LI from "./components/LI";
import TopCategories from "./components/TopCategories";
import TrendingProducts from "./components/TrendingProducts";
import Unique from "./components/Unique";
import WhatShopexOffer from "./components/WhatShopexOffer";


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Latest />
      <WhatShopexOffer />
      <Unique />
      <TrendingProducts />
      <DiscountItems />
      <TopCategories />
      <GetLatest />
      <LI />
      <LatestBlog />
    </div>
  );
}
