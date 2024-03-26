import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Red Box"
          price="35.00"
          color="Vintage Wall Art by Frank Moth."
          badge={true}
          des="Red & Black "
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Unique Square Coffee"
          price="180.00"
          color="Floral Head Wall Art by CapTVArt" 
          badge={false}
          des=" Black & White "
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="She Saw The Equator"
          price="25.00"
          color="Vintage Art by Frank Moth"
          badge={true}
          des="Mixed "
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="It Was All A Dream"
          price="220.00"
          color="Surreal Illustration by IR Artwork"
          badge={false}
          des="Abstract"
        />
      </div>
    </div>
  );
};

export default BestSellers;
