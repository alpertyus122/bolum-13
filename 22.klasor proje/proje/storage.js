function storage() {

}
storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmsFromStorage()

    films.push(newFilm)

    localStorage.setItem("films", JSON.stringify(films))
}
storage.prototype.getFilmsFromStorage = function () {
    let films;

    if (localStorage.getItem("films") === null) {
        films = []
    }
    else {
        films = JSON.parse(localStorage.getItem("films"))
        // films = JSON.parse(localStorage.getItem("films"))
    }
    return films
}

storage.prototype.deleteFilmFromStorage = function (filmTitle) {
    let films = this.getFilmsFromStorage()

    films.forEach(function (film, index) {
        if (film.title === filmTitle) {
            films.splice(index, 1)
        }
    })

    localStorage.setItem("films", JSON.stringify(films))
}

storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films")
}