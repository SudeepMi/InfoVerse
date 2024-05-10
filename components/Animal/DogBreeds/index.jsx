import { getDogImage } from '@/services/api'
import Image from 'next/image'
import React from 'react'

const index = ({ data, sub }) => {

  return (
    <div>
      <h2>{String(sub).split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}</h2>
      {
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
          {Object.keys(data).map(async (breed, index) => {
            const breedImage = await getDogImage(breed);
            return <div key={index} className="rounded-md shadow-md border border-[#2e2c2cf7] grid align-top items-start">
              <h2 className="text-lg font-bold mb-2 w-full bg-[#2e2c2cf7] p-2 tracking-wider">{breed}</h2>
              <div className='grid align-top place-items-start relative h-60'>
              <Image src={breedImage} alt={breed} fill className="object-contain"  />
              </div>
              <div className="flex gap-2 flex-wrap">
                {data[breed].map(async (subBreed, subIndex) => {
                  let image = await getDogImage(breed, `${subBreed}`)
                  return <div key={subIndex} className="">
                    <p className='bg-[#2e2c2cf7] p-2'>{subBreed} {breed}</p>
                    <Image src={image} width={200} height={200} className='object-cover' alt={subBreed} />
                  </div>
                })}
              </div>
            </div>
          })}
        </div>
      }
    </div>
  )
}

export default index