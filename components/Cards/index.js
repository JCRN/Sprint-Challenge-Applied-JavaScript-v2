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

// Get top level element
const cards = document.querySelector('.cards-container')

// Axios GET request
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(results => {    
    let articles = results.data.articles
    console.log('articles: ', articles)
    for (topic in articles) {        
        console.log('individual topic: ', topic)
        console.log('and its values: ', articles[topic])
        articles[topic].forEach(article => cards.appendChild(createArticleCard(article)))
    }
})
.catch(error => {
    alert('ERROR', error)
})

// Component function
function createArticleCard(article) {
    // Define elements
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardAuthorImgContainer = document.createElement('div')
    const cardAuthorImgContainerImg = document.createElement('img')
    const cardAuthorName = document.createElement('span')

    // Set class names
    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardAuthorImgContainer.classList.add('img-container')

    // Set content
    cardHeadline.textContent = article.headline
    cardAuthorImgContainerImg.src = article.authorPhoto
    cardAuthorName.textContent = `By ${article.authorName}`

    // Build component
    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardAuthorImgContainer)
    cardAuthorImgContainer.appendChild(cardAuthorImgContainerImg)
    cardAuthor.appendChild(cardAuthorName)

    // Return component
    return card
}