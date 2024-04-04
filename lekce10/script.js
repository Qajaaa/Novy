const fruits = ['jablko', 'hruška', 'banán', 'jahoda', 'malina']

console.log(`puvodni pole ${fruits}`)
console.log(fruits.length)
console.log(fruits[5])
console.log(fruits.pop())
console.log(`pole po aplikaci metody pop: ${fruits}`)
console.log(fruits.push("broskev"))
console.log(`pole po aplikaci metody push: ${fruits}`)

fruits[1] = "meloun"
console.log(`pole po prepsani hodnoty: ${fruits}`)

console.log(fruits.shift())
console.log(`pole po aplikaci metody shift: ${fruits}`)

console.log(fruits.unshift("kokos"))
console.log(`pole po aplikaci metody unshift: ${fruits}`)

const index = fruits.indexOf("jahoda")
fruits[index] = "ostruzina"
console.log(`pole po prepsani hodnoty: ${fruits}`)

const index2 = fruits.indexOf("meloun")
fruits.splice(index2, 1)
console.log(`pole po smazani hodnoty: ${fruits}`)

const fruits2 = fruits.slice(0, 2)
console.log(`Nove pole fruits2: ${fruits2}`)

console.log(fruits.includes("ostruzina"))




const fruits = ['jablko', 'hruška', 'banán', 'jahoda', 'malina']

fruits.forEach((polozka, index) => {
    console.log(`Polozka ${polozka} je na indexu ${index}`)
})

const jmena = ["Milena", "Jarka", "Martin", "Jana"]

jmena.forEach((polozka) => { 
    document.body.innerHTML += `<p>${polozka}@czechitas.cz</p>`
})




const jmena = ["Michal", "Jakub", "Martina", "Marta", "Milena", "Jana"]

const maily = jmena.map((jmeno) => {
    return `${jmeno}@moje-firma.com`
})

const maily2 = []

jmena.forEach((jmeno) => {
    maily2.push(`${jmeno}@moje-firma.com`)
})

jmena.forEach((jmeno, index) => {
    jmena[index] = `${jmeno}@moje-firma.com`
})

console.log(maily)
console.log(maily2)
console.log(jmena)