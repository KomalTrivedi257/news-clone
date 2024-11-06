let news = []

fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=f40203cc39184176a487521beaf0836b')
.then(response=>response.json())
.then(response => {
    news = response.articles
    displayNews()
})
.catch(error => console.error('Error:',error));
function displayNews(){
    const container = document.getElementById('container')

  news.forEach(article=>{
  const newsContainer = document.createElement('div')
  newsContainer.classList.add('news-container')

  const topSection = document.createElement('div')
  const bottomSection = document.createElement('div')

   const newsImage = document.createElement('img')
   let defaultNewsImage = 'https://tse1.mm.bing.net/th?id=OIP.Ec7_gRH4MbBc9kvGUKJXygHaFY&pid=Api&P=0&h=180'
   newsImage.src = article.urlToImage ?  article.urlToImage : defaultNewsImage 
  const newsTitle = document.createElement('h1')
  newsTitle.innerText = article.title

  const newsDecs = document.createElement('p')
  newsDecs.innerText = article.description

  const newsAuthor= document.createElement('div')
  newsAuthor.innerText= `✍🏻 ${article.author}`

  const newsDate = document.createElement('div')
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US',{
    weekday:'long',year:'numeric',month:'long',day:'numeric'})
  newsDate.innerText =`🕒 ${formattedDate}`

  const readMoreLink = document.createElement('a')
  readMoreLink.href = article.url
  readMoreLink.target = '_blank'
  readMoreLink.classList.add('read-more-link')
  readMoreLink.innerText = 'Read more'

  topSection.append(newsImage,newsTitle,newsDecs)
  bottomSection.append(newsAuthor,newsDate,readMoreLink)

//   newsContainer.append(newsImage,newsTitle,newsDecs,
//     newsAuthor,newsDate,readMoreLink)
     newsContainer.append(topSection,bottomSection)
    container.append(newsContainer)
  })  
}
