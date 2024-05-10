import { getCatFacts, getDogBreeds } from '@/services/api';
import React from 'react'
import CatFacts from"@/components/Animal/CatFacts/page"
import DogBreeds from "@/components/Animal/DogBreeds"

const handler = async (page, sub) => {
    if(page=="Animal"){
        if(sub=="cat-facts"){
            const data = await getCatFacts();
            return data;
        }
        if(sub="dog-breeds"){
            const data = await getDogBreeds();
            return data.message;
        }

    }
}
 

const page = async ({params}) => {
    const {page,sub} = params;
    const data = await handler(page, sub);
  return (
    <div>
       {sub=="cat-facts" && <CatFacts data={data} sub={sub} />}
       {sub=="dog-breeds" && <DogBreeds data={data} sub={sub} />}

    </div>
  )
}

export default page