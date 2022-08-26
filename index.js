//Globals
const baseURL = 'https://rickandmortyapi.com/api/character'


//Dom Selectors
const proImg = document.querySelector('#character_img')

const name = document.querySelector('#name')

const status = document.querySelector('#status')

const species = document.querySelector('#species')

const gender = document.querySelector('#gender')

const locate = document.querySelector('#location')

const sideNav = document.querySelector('#navlist')

const form = document.querySelector('#search-form')

const search = document.querySelector('#searchinput')

const button = document.querySelector(".heart-like-button");

//Event Listeners
form.addEventListener('submit', (e) => {
    filterSearch(e)
})
  
button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
});



//Fetchers
function grabCharacters(baseURL) {
  fetch(baseURL)
    .then((res) => res.json())
    .then(data => {
      getCast(data.results[0])
      changeCast(data.results)
      console.log(data)
    })
 
}

//Render Functions
function getCast(info) {
  name.innerText = info.name
  proImg.src = info.image
  status.innerText = `Status:   ${info.status}`
  species.innerText = `Species:   ${info.species}`
  gender.innerText = `Gender:    ${info.gender}`
  locate.innerText = `Location: ${info.location.name}`

}

function changeCast(plumbus) {
  sideNav.innerHTML = ''
  plumbus.forEach(item => {
    const newLi = document.createElement('h5')
    newLi.innerText = item.name
    sideNav.append(newLi)

    newLi.addEventListener('click', () => {
      getCast(item)
    })

  })

}


function filterSearch(e) {
  e.preventDefault()
  console.log(e)
  console.log(search.value)
  fetch(`https://rickandmortyapi.com/api/character/?name=${search.value}`)
    .then(response => response.json())
    .then(data => changeCast(data.results))

}


//Event Handlers




//Initializers
grabCharacters(baseURL)
