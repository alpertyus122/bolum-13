const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardbody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films")



eventlisteners()

function eventlisteners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage()
        UI.loadAllFilms(films)
    })

    cardbody.addEventListener("click", dleteFilm)
    clear.addEventListener("click", clearAllFilms)
}
function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value


    if (title === "" || director === "" || url === "") {
        UI.displayMessages("tüm alanları doldurun", "danger")
    }
    else {
        const newFilm = new film(title, director, url)

        UI.addFilmToUI(newFilm)

        storage.addFilmToStorage(newFilm)

        UI.displayMessages("filim başarıyla eklendi ", "success")
    }

    UI.clearInputs(titleElement, urlElement, directorElement)

    e.preventDefault()
}

function dleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.dleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessages("silme işlemi başarılı", "success")
    }
}

function clearAllFilms() {

    if (confirm("eminmisiniz ?")) {
        UI.clearAllFilmsFromUI()
        storage.clearAllFilmsFromStorage()
    }

}