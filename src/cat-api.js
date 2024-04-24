const baseUrl= "https://api.thecatapi.com/v1";
const api_key="live_tKr4IYSQLzyDcnpfmmXMohRhtJFemy4XW1xBvdKb3wBzX1f7kQfxOKmng3gzh4C8";

export function fetchBreeds(){
   return fetch (`${baseUrl}/breeds?x-api-key=${api_key}`).then((res)=> {
    if (!res.ok){
        throw new Error(res.status);
    }
    else{
        return (res.json);
    }
   });
   
}

export function fetchCatByBreed(breedId){
 return fetch(`${baseUrl}/images/search?x-api-key=${api_key}&breed_id=${breedId}`).then((res)=>{
    if (!res.ok){
        throw new Error(res.status);
    }
    else{
        return (res.json);
    } 
 });
}
