function add (x,y) {
    return x+y
}

console.log(add(3,4) === 7)


// DOM = Doucment Object Model

let pokemonImageURLs = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'
]

let pokemonHeading = document.createElement("h1")
// <h1></h1>
pokemonHeading.append("Best Pokemon")
pokemonHeading.classList.add("pokemon-heading")
// <h1 class="pokemon-heading">Pokemon</h1>
pokemonHeading.classList.add("pokemon-main")
// <h1 class="pokemon-heading pokemon-main">Pokemon</h1>

let pokemonGalleryElement = document.querySelector(".pokemon-gallery")    
 //gives first result, need "" around  element.
// can use CSS advanced seletors

// pokemonGalleryElement.append(pokeImg)
pokemonGalleryElement.append(pokemonHeading)


for (let index=0;index<pokemonImageURLs.length;index++){
    let imageURL = pokemonImageURLs[index]

    let pokeImg = document.createElement("img")  // a way to create any HTML tag in JS
    pokeImg.src =   imageURL
   
    pokemonGalleryElement.append(pokeImg)
    
    }

//js moved pokeImg from gallery to paragraph.

// let p = document.querySelector("p")
// p.append(pokeImg)

//append means add to end of a list, prepend is for beginging. use append over appendChild.




// let allParagraphs = document.querySelectorAll("p")
// console.log(allParagraphs)    //becomes a NodeList, like an array but not quite. Still can loop.
//need query selectors to get to DOM
