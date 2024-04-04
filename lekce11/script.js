const hesloDatabaze = "SuperTajneHeslo123"
let hesloUzivatele = prompt("Zadej heslo")
let pocetPokusu = 0

while(hesloDatabaze !== hesloUzivatele && pocetPokusu < 5) {
    hesloUzivatele = prompt("Spatne zadane heslo, zkus to znovu")
    pocetPokusu++
}

console.log("Prihlasen")

const elMain = document.querySelector("main")
const articleId = window.location.hash.slice(1)
const article = articles.find((ar) => ar.id === articleId)

elMain.innerHTML += `
  <article>
    <h2>${article.title}</h2>
    <p>${article.lead}</p>
    <p>${article.content}</p>
  </article>
`

const elMain = document.querySelector("main")
const articleId = window.location.hash.slice(1)
const article = articles.find((ar) => ar.id === articleId)

elMain.innerHTML += `
  <article>
    <h2>${article.title}</h2>
    <p>${article.lead}</p>
    <p>${article.content}</p>
  </article>
`

