// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}

const urlList = "https://pokeapi.co/api/v2/pokemon";

async function doStuffList(data) {
    const response = await fetch(url);
    if(response.ok) {
    const data = await response.json();
    doStuff(data);
    }
}

async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}


function doStuff(data) {
    results = data;
    console.log("first: ", results);
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem}</li>`;
        pokeListElement.innerHTML += html;
    });
}

getPokemon(url);
console.log("second: ", results);

document.querySelector(output)