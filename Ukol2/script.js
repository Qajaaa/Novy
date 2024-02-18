/*
Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. 
Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. 
Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.
Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. 
Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky. 
Pomocí metody slice vyřízněte ze jména i příjmení příslušné části. Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.*/

let jmeno = prompt("Zadejte své křestní jméno bez diakritiky.")
let prijmeni = prompt("Zadejte své příjmení bez diakritiky.")

let novaAdresa = document.getElementById("novaAdresa")



let mezeraJmeno = jmeno.trim()
let mezeraPrjmeni = prijmeni.trim()
let urizleJmeno = mezeraJmeno.slice(0, 3)
let urizlePrijmeni = mezeraPrjmeni.slice(0, 3)
let maleJmeno = urizleJmeno.toLowerCase()
let malePrijmeni = urizlePrijmeni.toLowerCase()
let domena =  "@fit.cvut.cz"


novaAdresa.innerHTML = `<p> ${maleJmeno}${malePrijmeni}${domena}</p> `

/* snažila jsem se zapis provést takto, ale úplně nevím z jakého důvodu nefungoval

const email = {

    mezeraJmeno: jmeno.trim(),
    mezeraPrjmeni: prijmeni.trim(),
    urizleJmeno: mezeraJmeno.slice(0, 4),
    urizlePrijmeni: mezeraPrjmeni.slice(0, 3),
    maleJmeno: urizleJmeno.toLowerCase(),
    malePrijmeni: urizlePrijmeni.toLowerCase(),
    domena: "@fit.cvut.cz"
};
*/