'use strict'

class Artikal {
    constructor(id, naziv, cena, dostupan) {
        this.id = id
        this.naziv = naziv
        this.cena = cena
        this.dostupan = dostupan
    }
}

let artikli = [
    new Artikal(1, "Laptop", 165, true),
    new Artikal(2, "TV", 650, false),
    new Artikal(3, "Mis", 20, true)
]

let tabela = document.querySelector("#artikli")

for (let i = 0; i < artikli.length; i++) {

    let artikal = artikli[i]
    let red = document.createElement("tr")
    let id = document.createElement("td")
    let naziv = document.createElement("td")
    let cena = document.createElement("td")
    let dostupnost = document.createElement("td")

    id.textContent = artikal.id
    naziv.textContent = artikal.naziv
    cena.textContent = artikal.cena

    if (artikal.dostupan === true) {
        dostupnost.textContent = "DA"
    } else {
        dostupnost.textContent = "NE"
        red.style.backgroundColor ="#FFB6B6"
    }
   
    red.appendChild(id)
    red.appendChild(naziv)
    red.appendChild(cena)
    red.appendChild(dostupnost)

    tabela.appendChild(red)
}