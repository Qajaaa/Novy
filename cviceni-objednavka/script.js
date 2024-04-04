const formular = document.querySelector('#objednavka')

formular.addEventListener('submit', (e) => {
    e.preventDefault()
    const platebniKarta = e.target.querySelector('input').value
    const doprava = e.target.querySelector('select').value
    console.log('Platební karta:', platebniKarta)
    console.log('Doprava:', doprava)
    formular.innerHTML = '<p>Objednávka odeslána ke zpracování.<p>'
})