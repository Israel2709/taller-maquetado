//alert("Hola Koders!")
//prompt("escribe tu nombre aquí")
//console.log(" este es un mensaje de consola")

/*let myName = "israel salinas martínez"
let someNumber = 5 + 3
let isMinor = 6 < 7

if( isMinor === true ){
    alert("en efecto es menor")
} else {
    alert("no es menor")
}

for( let i = 0; i < 10; i++ ){
    console.log("estamos en el paso " + i + " del ciclo")
}

let foo = "una variable definida"
console.log( foo )

const addTwoNumbers = ( number1, number2 ) => {
    let result = number1 + number2
    return result
}

console.log( addTwoNumbers(12, 50))*/

const hideElementById = elementId => {
  document
    .getElementById(elementId) /*Buscamos el elemento con base en su id*/
    .classList /*accede a la lista de clases del elemento*/
    .add(
      'd-none'
    ) /*Agrega la clase "d-none" a la lista de clases del elemento*/
}

const showElementById = elementId => {
  document
    .getElementById(elementId) /*Buscamos el elemento con base en su id*/
    .classList /*accede a la lista de clases del elemento*/
    .remove(
      'd-none'
    ) /*Agrega la clase "d-none" a la lista de clases del elemento*/
}

/*document.getElementById('button-one').addEventListener('click', () => {
  hideElementById('test-card')
  showElementById('test-card-2')
})*/

let postCollection = {
  post1: {
    cover: 'https://picsum.photos/id/221/200/100',
    author: 'Israel Salinas',
    date: '07 Dic 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quisquam blanditiis voluptatibus non illo? Autem     aliquid provident rem accusamus assumenda.',
    title: 'Título número 1'
  },
  post2: {
    cover: 'https://picsum.photos/id/222/200/100',
    author: 'Charles Silva',
    date: '08 Dic 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quisquam blanditiis voluptatibus non illo? Autem     aliquid provident rem accusamus assumenda.',
    title: 'Título número 2'
  },
  post3: {
    cover: 'https://picsum.photos/id/22/200/100',
    author: 'David Moranchel',
    date: '09 Dic 2021',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quisquam blanditiis voluptatibus non illo? Autem     aliquid provident rem accusamus assumenda.',
    title: 'Título número 3'
  }
}

//let container = document.getElementById("post-wrapper")

const printAllPost = () => {
  let container = document.getElementById('post-wrapper')

  Object.keys(postCollection).forEach(key => {
    console.log(key)
    console.log(postCollection[key])
    let postData = postCollection[key]
    let { cover, author, date, content, title } = postData
    let currentContent = container.innerHTML
    let cardHTML = `<div class="card mb-4">
                <img
                  src=${cover}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div class="author-data d-flex align-items-center mb-3">
                    <img
                      src="https://lh3.googleusercontent.com/a-/AOh14GjLSYdjpS22H3iyojbmfWPa7hQbS7tCSoS3FrnPKw=s96-c"
                      alt=""
                      class="rounded-circle me-3 d-block"
                    />
                    <div>
                      <p class="name fs-3 mb-2">${author}</p>
                      <p class="date m-0 text-muted">${date}</p>
                    </div>
                  </div>
                  <h5 class="card-title fs-1 fw-bold">${title}</h5>
                  <p>
                    ${content}
                  </p>
                  <p class="card-text">
                    <span class="text-muted">#hashtag_1 </span>
                    <span class="text-muted">#hashtag_2 </span>
                    <span class="text-muted">#hashtag_3 </span>
                    <span class="text-muted">#hashtag_4 </span>
                    <span class="text-muted">#hashtag_5 </span>
                  </p>
                  <button id="button-one" class="btn btn-primary">
                    Go somewhere
                  </button>
                </div>
              </div>
    `
    let newContent = currentContent + cardHTML
    container.innerHTML = newContent
  })
}

printAllPost()
