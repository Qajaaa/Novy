const justFood = (pocetStravniku) => {
    let vyslednaCena = pocetStravniku * 100
    return `Ceteringem od Just Food pro ${pocetStravniku} osob za ${vyslednaCena} Kč.`
}

const yourMama = (pocetStravniku) => {
    let vyslednaCena = pocetStravniku * 150
    return `Ceteringem od Your Mama pro ${pocetStravniku} osob za ${vyslednaCena} Kč.`
}

const flavourHaven = (pocetStravniku) => {
    let vyslednaCena = pocetStravniku * 200
    return `Ceteringem od Flavour Haven pro ${pocetStravniku} osob za ${vyslednaCena} Kč.`
}

const createEvent = (nazev,pocetUcastniku,fceFirma) => {
    return `Událost ${nazev} s ${fceFirma(pocetUcastniku)}`
}
