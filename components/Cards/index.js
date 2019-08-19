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

    return cardDiv
}

const cardsContainerDiv = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        response.data.articles.forEach((topic) => {
            const topics = response.data.articles(topic)
        })
        response.data.artices.topics.forEach((story) => {
            const article = response.data.articles.topics(story)
        })
        response.data.articles.topics.article.forEach((info) => {
            cardsContainerDiv.append(cardCreator(info))
        })
    })
    .catch( err => {
        console.log(err)
    })
