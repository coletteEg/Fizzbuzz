let myPokemon = ["Gengar", "Pikachu", "Eevee", "Dragonite", "Charizard"]

console.log(myPokemon[3])
// .push lets you add something to your array
myPokemon.push("Milotic")

console.log(myPokemon)
//this is another way to add and assign a place
myPokemon[6] = "Turtwig"
console.log(myPokemon)
// .pop removes the last element

myPokemon.pop()
console.log(myPokemon)

//.unshift adds to the first spot of the array
// .shift removes the first spot

myPokemon[0] = "Turtwig"
// you can change the spot by doing this
// if something already exists then it will replace it

let Eevee = myPokemon.slice(2,3)
console.log(Eevee)
// .slice returns a copy of the array

myPokemon.splice(3,2)
console.log(myPokemon)
//.splice deleted things in the array

myPokemon.splice(2,0,"Bulbasaur")
console.log(myPokemon)
//.splice can also add a value after what you specify is the starting point
