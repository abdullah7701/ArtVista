import React from "react";
import { saleImgOne, saleImgTwo, saleImgThree } from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  const openEventsPage = () => {
    window.open("/events", "_blank");
  };

  const openLocalHostPage = () => {
    window.open("http://localhost:5173/", "_blank");
  };

  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <button onClick={openEventsPage}>
          <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
        </button>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <button onClick={openLocalHostPage}>
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
          </button>
        </div>
        <div className="h-1/2 w-full">
          <a href="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgThree} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sale;