
/*


    Založte si novou prázdnou stránku s JavaScriptovým programem.

    Dejme tomu, že si jako programátoři vyděláváte 20 euro na hodinu. Uložte tuto hodnotu do proměnné wageInEur.

    Spočítejte, kolik je vaše hodinová mzda v českých korunách, jestliže kurz eura je 24.55 Kč. Výsledek zaokrouhlete na celé koruny a uložte do proměnné :var[wageInCzk].

    Vypište obsah proměnné :var[wageInCzk] do webové stránky tak, aby na stránce byl nadpis h1 s obsahem:

        Mzda v korunách: 532 Kč



let wageInEur = 20
let kurz = 24.55
let wageInCzk = Math.round (wageInEur * kurz)
 "<h1>Mzda v korunach: " + wageInCzk + " Kc.</h1>"


Představte si, že jste pořadatelé ultramaratonského závodu. Závod začíná ve tři hodiny odpoledne, což ve 24hodinovém formátu zapíšeme jako 15. Nejlepší běžec zvládne vaši brutální trasu za 10 hodin. Doběhne tedy v jednu hodinu ráno, v našem formátu zapsáno jako 1.

    Založte si JavaScriptový program a uložte čas startu závodu do proměnné start.
    Do proměnné delka uložte délku závodu pro nějakého běžce. Klidně může být pomalejší než náš šampion.
    Do proměnné konec spočítejte, v kolik hodin závod pro našeho běžce skončí a vypište její obsah do stránky.
    Vyzkoušejte různé délky a ověřte, že váš postup funguje.




const start = 15
let delka = 13
let konec = (start + delka) % 24

document.body.innerHTML = konec
*/
