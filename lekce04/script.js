/*const jmeno = prompt("Zadej jmeno")
const email = "michal.kucera@czechitas.cz"
const id = "1"

console.log(jmeno.toUpperCase())
console.log(jmeno.toLowerCase())
console.log(jmeno.trim())
console.log(jmeno.trimStart())
console.log(jmeno.trimEnd())
console.log(jmeno.slice(3, 6)) 
console.log(email.indexOf("q;wljelk12"))
console.log(id.padStart(3, "0"))
console.log(id.padEnd(3, "0")) 

const pizza = {
    nazev: "Hawaii", 
    cena: 230,
    zaklad: "smetana"
}

document.body.innerHTML = 
"<h2>" + pizza.nazev + "</h2>" 
+ "<p>Cena: " + pizza.cena + "Kc</p>" 
+ "<p>Zaklad: " + pizza.zaklad + "</p>" 

document.body.innerHTML += `
<h2>${pizza.nazev}</h2> 
<p>Cena: ${pizza.cena}</p> 
<p>Zaklad: ${pizza.zaklad}</p>
` Interpolace zapisu 


Vlastnosti a metody

V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

    Vypište do stránky počet znaků názvu.
    Vypište název filmu převedený na velká písmena.
    Vypište z názvu prvních pět písmen.
    Vypište z názvu posledních pět písmen.

const title = "Duna"

document.body.innerHTML = (title.length);
document.body.innerHTML = (title.toUpperCase());
document.body.innerHTML += title.slice(0, 5);
document.body.innerHTML += title.slice(title.length - 5, title.length);




V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

    Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
    Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
    Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).


let vek = Number(prompt("Zadej svůj věk"))
let jmeno = prompt("Zadej své jméno")
let heslo = prompt("Zadej svoje heslo ")

let vysledekOckovani = document.getElementById("vysledekOckovani")

if(vek >= 65) {
    vysledekOckovani.innerHTML = "Věk v pořádku <br />"
    if (heslo.length > 8) {
        if(prompt("zadej heslo") === heslo) {
            vysledekOckovani.innerHTML += "Heslo je v pořádku a bylo správně zadané"
        }else{
            vysledekOckovani.innerHTML += "Heslo je v pořádku a nebylo zadáno správně zadané"
        }
    }else{
        vysledekOckovani.innerHTML += "Heslo není v pořádku"
        console.log("Odesilám k očkování")
    }
}else{
    vysledekOckovani.innerHTML = "Věk není v pořádku"
}

Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.

Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
  userName: 'slavomir.ponuchalek',
  domain: 'yahoo.com',
};
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.

*/

// Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
let email = prompt("Zadej svůj email")

let elementEmail = document.getElementById("vysledekEmail")

// Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
let atIndex = email.indexOf("@")

//Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
elementEmail.innerHTML = email.slice(0,atIndex)

//Dále z e-mailu získejte název domény tedy například gmail.com.
elementEmail.innerHTML += "<br />"

elementEmail.innerHTML += email.slice(atIndex+1, email.length)

elementEmail.innerHTML += "<br />"
elementEmail.innerHTML += "<br />"

//Ze získaných informací vytvořte objekt, který bude vypadat například takto:¨

const parsedEmail = {
    userName:  email.slice(0,atIndex),
    domain:  email.slice(atIndex+1, email.length),
};

console.log(parsedEmail)

elementEmail.innerHTML += `<p>username: ${parsedEmail.userName}</p>` 
elementEmail.innerHTML += "<p>domain:" + parsedEmail.domain + "</p>"


/*Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
  <p>Pod Stájemi 67</p>
  <p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.*/

let ulice = prompt("Zadej ulici")
let cisloDomu = prompt("Zadej číslo domu")
let mesto = prompt("Zadej mesto")
let psc = prompt("Zadej PSČ")

let vysledekDorucovani = document.getElementById("vysledekDorucovani")

vysledekDorucovani.innerHTML = 
`
<address>
  <p>${ulice} ${cisloDomu}</p>
  <p>${psc} ${mesto}</p>
</address>
`