document.body.innerHTML= ""
console.log(Math.round(3.3))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.pow(2, 2))
console.log(Math.sqrt(9))
let jmeno = "Michal" // string
const vek = 26 // number
var jeLektor = true // boolean

console.log(jmeno)
console.log(vek)
console.log(jeLektor)

const jmeno = prompt("Zadej jmeno:")

console.log(jmeno)
document.body.innerHTML = jmeno


const pocetHodin = Number(prompt("Zadej pocet hodin:")) // "100"
const hodinovka = 6000
const bonus = 1000

console.log("Vyplata: " + ((pocetHodin * hodinovka) + bonus))
console.log(hodinovka + pocetHodin)

\n v konyoli enter

const jmeno1 = "Hawaii" // String
const cena1 = 200 // Number
const rozvoz1 = true // Bool

const pizza = {
    jmeno: "Hawaii",
    cena: 200,
    rozvoz: true
}

const pizzerie = {
    pizzaHawaii: {
        jmeno: "Hawaii",
        cena: 200,
        rozvoz: true
    },
    pizzaSalami: {
        jmeno: "Salami",
        cena: 250,
        rozvoz: true
    },
    pizzaBbq: {
        jmeno: "BBQ",
        cena: 300,
        rozvoz: false
    }
}

document.body.innerHTML += "<p>" + pizzerie.pizzaBbq.jmeno + "</p>"
document.body.innerHTML += "<p>" + pizzerie.pizzaBbq.cena + "</p>"

console.log(pizza)
console.log(pizza.jmeno)
console.log(pizza.rozvoz)
console.log(pizzerie.pizzaBbq.jmeno + "\n" + pizzerie.pizzaBbq.cena)

let Fahrenheit

let aktualizujvlozeneStupne = () => {
  Fahrenheit = document.getElementById('prepocet')
  vysledekZadani = document.getElementById('vysledekPrepoctu')

  vysledekZadani.innerHTML = prepoctiNaCelsia(Fahrenheit.value)
}

let prepoctiNaCelsia = (Celsia) => {
    let novyText = null
    let Celsia = (5*(Fahrnheit-32))/9
    novyText = "Počet znaků názvu: " +  + "<br>"
    
    return novyText