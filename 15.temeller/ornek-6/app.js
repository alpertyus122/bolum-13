//  <a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newlink = document.createElement("a") ;

const cardbody = document.getElementsByClassName("card-body")[1] ;

newlink.id = "clear-todos" ;

newlink.className = "btn btn-danger" ;

newlink.href = "https://www.youtube.com" ;

newlink.target = "_blank" ;

newlink.appendChild(document.createTextNode("başka sayfaya git")) ;

cardbody.appendChild(newlink) ;



console.log(newlink) ;