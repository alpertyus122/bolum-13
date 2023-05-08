const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardbody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films")

const ui = new UI()

const storage1 = new storage()

eventlisteners()

function eventlisteners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage1.getFilmsFromStorage()
        ui.loadAllFilms(films)
    })

    cardbody.addEventListener("click", dleteFilm)
    clear.addEventListener("click", clearAllFilms)
}
function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value


    if (title === "" || director === "" || url === "") {
        ui.displayMessages("tüm alanları doldurun", "danger")
    }
    else {
        const newFilm = new Film(title, director, url)

        ui.addFilmToUI(newFilm)

        storage1.addFilmToStorage(newFilm)

        ui.displayMessages("filim başarıyla eklendi ", "success")
    }

    ui.clearInputs(titleElement, urlElement, directorElement)

    e.preventDefault()
}

function dleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.dleteFilmFromUI(e.target)
        storage1.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages("silme işlemi başarılı", "success")
    }
}

function clearAllFilms() {

    if (confirm("eminmisiniz ?")) {
        ui.clearAllFilmsFromUI()
        storage1.clearAllFilmsFromStorage()
    }

}