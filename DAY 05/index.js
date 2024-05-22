function data (artist, song, year) {

    this.artist = artist

    this.song = song

    this.year = year
}


const h1 = document.querySelector('h1')

const music  =  new data("seyi vibez", "today", "2023")

console.log(music);


class p2 {

    constructor(name, role){

        return `the name of my school ${name}`

        `and the role is ${role}`

    }

}

p2.constructor()

// outputr will be object object 
// but if it's wriiten witrhoutr attaching it to the html 
// the output will be seyivibez, today, 2023
// const music = new data(": Seyi vibez", ": today", ": 2023")