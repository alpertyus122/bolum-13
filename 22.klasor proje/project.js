const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")

const ui = new UI()

eventlisteners()

function eventlisteners() {
    form.addEventListener("submit", addfilim)
}
function addfilim(e) {
    const title = titleElement.value
    const director = directorElement.value
    const Url = urlElement.value




    e.preventDefault()
}
