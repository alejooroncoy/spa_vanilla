const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}`: API;
    try{
        const peticion = await fetch(apiURL);
        const data = await peticion.json();
        return data;
    }
    catch(error){ 
        console.log(error.message);
    };
};
export default getData;