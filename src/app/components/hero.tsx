/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "./button";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex">
      <div className=''>
        <h1 className="w-[500px] h-12 text-4xl font-bold mt-[150px] ml-[62px]">Welcome To Our Website</h1>
        <p className="text-gray-500 text-2xl mt-4 ml-[66px] ">
          Lorem Ipsum is simply dummy text of <br />
          the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's <br />
          standard
        </p>
        <div className="mt-4 ml-[62px]">
          <Button />
        </div>
      </div>
      <div className="image mt-[100px] ml-[200px] ">
        <Image src="/img1.png" alt="pic1" width={500} height={465} />
      </div>
    </div>
  );
}
