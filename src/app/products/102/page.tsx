import React from "react";
import Image from "next/image";

const Item = ({ searchParams }: any) => {
  return (
    <main>
      <h2>{searchParams.title}</h2>
      <p>{searchParams.price}</p>
      <div className="relative w-80 h-56">
        <Image src={searchParams.img} alt="background image" priority fill />
      </div>
    </main>
  );
};

export default Item;
