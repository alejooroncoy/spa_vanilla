import getData from "../utils/getData";

const Home = async() => {
    const characters = await getData();
    const view = `
    <div class="Characters">
        ${characters.results.map(item => `
        <article class="Characters-item">
        <a href="#/${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
        </a>
    </article>`).join('')}
    </div>
    `; 
    return view; 
};
export default Home;