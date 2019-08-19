// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function cardCreator(article) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('.card')

        const headlineDiv = document.createElement('div')
        headlineDiv.classList.add('.headline')
        headlineDiv.textContent = article.headline
        

        const authorDiv = document.createElement('div')
        authorDiv.classList.add('.author')

            const imgContainerDiv = document.createElement('div')
            imgContainerDiv.classList.add('.img-container')

                const authorImg = document.createElement('img')
                authorImg.src = article.authorPhoto

            const authorName = document.createElement('span')
            authorName.textContent = `By ${article.authorName}`

    cardsContainerDiv.appendChild(cardDiv)
        cardDiv.appendChild(headlineDiv)
        cardDiv.appendChild(authorDiv)
            authorDiv.appendChild(imgContainerDiv)
                imgContainerDiv.appendChild(authorImg)
            authorDiv.appendChild(authorName)

    return cardDiv
}

const cardsContainerDiv = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        //BOOTSTRAP
        const articles = response.data.articles
        articles.bootstrap.forEach( topic => {
            let bootstrapTopics = cardCreator(topic)
            cardsContainerDiv.appendChild(bootstrapTopics)
        })
            return response
    })
    .then( response => {
        //JAVASCRIPT
        const articles = response.data.articles
        articles.javascript.forEach( topic => {
            let javascriptTopics = cardCreator(topic)
            cardsContainerDiv.appendChild(javascriptTopics)
        })
            return response
    })
    .then( response => {
        //JQUERY
        const articles = response.data.articles
        articles.jquery.forEach( topic => {
            let jqueryTopics = cardCreator(topic)
            cardsContainerDiv.appendChild(jqueryTopics)
        })
            return response
    })
    .then( response => {
        //NODE
        const articles = response.data.articles
        articles.node.forEach( topic => {
            let nodeTopics = cardCreator(topic)
            cardsContainerDiv.appendChild(nodeTopics)
        })
            return response
    })
    .then( response => {
        //TECHNOLOGY
        console.log(response)
        const articles = response.data.articles
        articles.technology.forEach( topic => {
            let technologyTopics = cardCreator(topic)
            cardsContainerDiv.appendChild(technologyTopics)
        })
            return response
    })
    .catch( err => {
        console.log(err)
    })
