const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  document.getElementById("cisla").innerHTML=numbers;
 

  const vysledekMocnina = document.getElementById("mocnina")
  numbers.forEach(number => {
      const mocnina = number * number;
      vysledekMocnina.innerHTML += `Druhá mocnina čísla ${number} je ${mocnina}<br>`;
      
  });

  const negativeNumbersDiv = document.getElementById("negativeNumbers")
  numbers.forEach(number => {
    if (number < 0) {
      negativeNumbersDiv.innerHTML += number + "<br>";
    }
  });

  const absoluteNumbersDiv = document.getElementById("absoluteNumbers")
  const absoluteNumbers = numbers.map(number => Math.abs(number));

  absoluteNumbers.forEach(number => {
    absoluteNumbersDiv.innerHTML += number + "<br>";
  });

  const sudaCislaDiv = document.getElementById("suda");

  numbers.forEach(number => {
    if (number % 2 === 0) { 
      sudaCislaDiv.innerHTML += number + "<br>";
    }
  });

  const delitelna3Div = document.getElementById("delitelna3")
  

  numbers.forEach(number => {
    if (Math.abs(number) % 3 === 0)
    delitelna3Div.innerHTML += number + "<br>";
  
  });
   const vzdalenostDiv = document.getElementById ("vzdalenost")

   numbers.forEach(index => {
    const vzdalenost = numbers.indexOf(index) - numbers.indexOf(5)
    vzdalenostDiv.innerHTML += vzdalenost + "<br>";
  })

  const vzdalenostMocninaDiv = document.getElementById ("vzdalenostMocnina")

  numbers.forEach(index => {
   const vzdalenost = index - numbers.indexOf(5)
   const mocnina = vzdalenost * vzdalenost
   vzdalenostMocninaDiv.innerHTML += mocnina + "<br>";
 })

 
const pocetZapornaDiv = document.getElementById("pocetZaporna");
const pocetZaporna = numbers.filter(number => number < 0).length;
pocetZapornaDiv.innerHTML += pocetZaporna + "<br>";


const soucetDiv= document.getElementById("soucet");
let soucet = 0;

  numbers.forEach(number => {
  soucet += number;
})
  soucetDiv.innerHTML = soucet;


const prumerDiv = document.getElementById("prumer")
let soucetPrumer = 0;

  numbers.forEach(number => {
    soucetPrumer += number;
  });
  
  const prumer = soucetPrumer / numbers.length;
prumerDiv.innerHTML += prumer + "<br>";

const soucetKladnaDiv = document.getElementById("soucetKladna")

let soucetKladna = 0;

numbers.forEach(number => {
  if (number > 0) {
    soucetKladna += number;
    
  }
});

soucetKladnaDiv.innerHTML += soucetKladna + "<br>";