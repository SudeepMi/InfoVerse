import axios from "axios"


async function getDogImage(breedName,subBread=null){
    // console.log("API ENDPOINT :: ",breedName)
    const {data} = await axios.get(`https://dog.ceo/api/breed/${breedName.toLowerCase()}${subBread ? '/'+subBread : ''}/images/random`);
    return data.message;
}
async function getCatFacts(){
    const {data} = await axios.get("https://cat-fact.herokuapp.com/facts");
    return data;
}

async function getDogBreeds(){
    const {data} = await axios.get("https://dog.ceo/api/breeds/list/all");
    return data;
}

async function getPetFoodFacts(){
    const {data} = await axios.get("https://world.openpetfoodfacts.org/api/v0/product/20106836.json");
    return data;
}




export {
    getCatFacts,
    getDogBreeds,
    getPetFoodFacts,
    getDogImage
}