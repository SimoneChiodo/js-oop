// TESTO:
// In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
// La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
// - marca
// - anno
// - colore
//
// Successivamente:
// Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
// Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
// Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
//
// BONUS
// In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile".
// La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
//
// Successivamente:
// Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
// Stampiamo il numero di porte e il tipo di carburante.

class Veicolo {
    marca;
    anno;
    colore;

    constructor(marca, anno, colore) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
    }

    informazioni() {
        return `${this.marca}, ${this.anno}, ${this.colore}`;
    }

    calcolaEta() {
        const date = new Date();
        return date.getFullYear() - this.anno;
    }
}

class Automobile extends Veicolo {
    numPorte;
    combustibile;

    constructor(marca, anno, colore, numPorte, combustibile) {
        super(marca, anno, colore);
        this.numPorte = numPorte;
        this.combustibile = combustibile;
    }

    // informazioniAuto() {
    //     return this.informazioni() + `, ${this.numPorte}, ${this.combustibile}`;
    // }
    informazioni() {
        return `${this.marca}, ${this.anno}, ${this.colore}, ${this.numPorte}, ${this.combustibile}`;
    }
}

// OUTPUT
const fiat = new Veicolo("Fiat", 2019, "blu");
console.log(fiat);
console.log(fiat.informazioni());
console.log(fiat.calcolaEta());

// OUTPUT EREDITARIETA'
const Opel = new Automobile("Opel", 2020, "nera", 4, "benzina");
// console.log(Opel.informazioniAuto());
console.log(Opel.informazioni());
