class UI {

    static addFilmToUI(newfilm){




        const filmList = document.getElementById("films")

        filmList.innerHTML += `
        <tr>
        <td><img src="${newfilm.url}"  class="img-fluid img-thumbnail"></td>
        <td>${newfilm.title}</td>
        <td>${newfilm.director}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        `





    }

    static clearInputs(element1, element2, element3) {
        element1.value = ""
        element2.value = ""
        element3.value = ""
    }

    static displayMessages(message, type) {
        const cardbody = document.querySelector(".card-body")

        const div = document.createElement("div")


        div.className = `alert alert-${type}`
        div.textContent = message

        cardbody.appendChild(div)

        setTimeout(function () {
            div.remove()
        }, 1000)
    }

    static loadAllFilms(films) {
        const filmList = document.getElementById("films")

        films.forEach(function (film) {
            filmList.innerHTML += ` <tr>
            <td><img src="${film.url}"  class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>`
        })
    }

    static dleteFilmFromUI(element) {
        element.parentElement.parentElement.remove()
    }

    static clearAllFilmsFromUI () {
        const filmList = document.getElementById("films")

        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove()
        }
    }

}
