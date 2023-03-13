import Image from "next/image";
import Link from "next/link";
import React from "react";

const Challenges = () => {
  return (
    <>
      <div className="p-8 text-white">
        <h2 className="text-2xl">
          Challenge <br /> Categories
        </h2>

        <div className="flex my-10 flex-wrap justify-center gap-5">
          <Link href={'challenges/footware'}>
          <Challenge image={"/challenges/Footware.png"} name={'Footware'} />
          </Link>
          <Challenge image={"/challenges/architecture.png"} name={'Architecture'} />
          <Challenge image={"/challenges/automotive.png"} name={'Automotive'} />
          <Challenge image={"/challenges/character.png"} name={'Character'} />
          <Challenge image={"/challenges/furniture.png"} name={'Furniture'} />
          <Challenge image={"/challenges/jewellery.png"} name={'Jewellery'} />
        </div>
      </div>
    </>
  );
};

export default Challenges;

export const Challenge = ({image, name}) => {
  return (
    <>
      <div className="relative">
        <Image
          src={image}
          width={400}
          height={400}
          alt={"footware"}
        />

        <div className="bg-black bg-opacity-50 text-3xl text-center absolute h-1/2 bottom-0 w-full p-5 ">

            <h2>{name}</h2>
        </div>
      </div>
    </>
  );
};
