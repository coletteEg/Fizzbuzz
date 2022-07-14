let myPokemon = ["Gengar", "Pikachu", "Eevee", "Dragonite", "Charizard"]

console.log(myPokemon.length)

for(let i = 0; i < myPokemon.length; i++){
    if(i % 2 === 0){
        console.log(myPokemon[i])
    } else {
        myPokemon.splice(i,0,"bulbasaur")
    }
}
console.log(myPokemon)

for(let i = 0; i < myPokemon.length; i++){
    if(myPokemon[i] !== "bulbasaur"){
        console.log("this pokemon is dumb")
    }


}
console.log("--------------")


let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    console.log(guessMe)
    guessMe += 22
}
console.log(guessMe)
