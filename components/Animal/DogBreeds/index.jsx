import { getDogImage } from "@/services/api";
import Image from "next/image";
import React from "react";

const index = ({ data, sub }) => {
  return (
    <div className="dog-breed__container">
      <h2 className="title text-[1.5rem] py-4">
        {String(sub)
          .split("-")
          .map((w) => w[0].toUpperCase() + w.slice(1))
          .join(" ")}
      </h2>
      {
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] grid-rows-[minmax(200px,auto)] gap-4">
          {Object.keys(data).map(async (breed, index) => {
            const breedImage = await getDogImage(breed);
            return (
              <div
                key={index}
                className="col-span-1 rounded-md shadow-md border border-[#2e2c2cf7] grid align-top items-start h-max"
              >
                <h2 className="text-lg font-bold mb-2 w-full bg-[#2e2c2cf7] p-2 tracking-wider">
                  {breed}
                </h2>
                <div className="grid align-top place-items-start relative h-60">
                  <Image
                    src={breedImage}
                    alt={breed}
                    fill
                    className="object-contain"
                  />
                </div>
                <details className="px-2 py-1">
                  <summary>View Sub Breeds</summary>
                  <div className="flex gap-2  overflow-x-auto bg-red-100">
                    {data[breed].map(async (subBreed, subIndex) => {
                      let image = await getDogImage(breed, `${subBreed}`);
                      return (
                        <div key={subIndex} className="w-[200px] h-[150px]">
                          <p className="bg-[#2e2c2cf7] p-2">
                            {subBreed} {breed}
                          </p>
                          <Image
                            src={image}
                            width={200}
                            height={200}
                            className="object-cover"
                            alt={subBreed}
                          />
                        </div>
                      );
                    })}
                  </div>
                </details>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default index;
