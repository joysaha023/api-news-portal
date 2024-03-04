const buttonDiv = document.getElementById('category-bar-container')
const newsContainer = document.getElementById('news-container')

const loadCategory = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const singleData = data.data.news_category;
    // console.log(singleData)
    singleData.forEach((item) => {
        const appendBtn = document.createElement('div');
        appendBtn.innerHTML = `
        <button onclick="getNewsId('${item.category_id}')" class="pol-btn">${item.category_name}</button>
        `;
        buttonDiv.appendChild(appendBtn)
    })
}

const getNewsId = async (id) => {
    // loadNews(id)
    // console.log(id)
    loadNews(id)
}



const loadNews = async (id ='08' ) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()
    const singleNews = data.data
    newsContainer.innerText = ''
    
    singleNews.forEach((singleNews) => {
        const appendNews = document.createElement('div')
        appendNews.classList.add("singleNews")
        appendNews.innerHTML = `
            
        <div class="news-photo">
        <img class="news-photo"
          src=${singleNews.image_url}
          alt=""
        />
      </div>
      <div class="news-info">
        <div class="news-header">
          <h4>${singleNews.title.slice(0, 20)}</h4>
          <p class="news-badge">
          ${singleNews.rating.badge} <sup> <h6 class="news-rating"> ${
    singleNews.rating.number
  }</h6></sup>
          </p>
        </div>
        <p>
        ${singleNews.details.slice(0, 200)}
        </p>

        <div class="news-footer">
          <div class="author">
            <div class="">
              <img
                class="author-img"
                src=${singleNews.author.img}
                alt=""
              />
            </div>
            <div class="author-info">
              <h6> ${singleNews.author.name}</h6>
              <p>Date: ${singleNews.author.published_date}</p>
            </div>
          </div>
          <div class="Views author">
            <img
              class="view-img"
              src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"
              alt=""
            />
            <p>${singleNews.total_view}</p>
          </div>
          <div class="details-btn-container">
            <button onclick="handleDetails(${JSON.stringify({name:"gias"})})" class="details-btn">Details</button>
          </div>
      </div>
    </div>
        `;
        newsContainer.appendChild(appendNews)
    })
}



loadCategory()
loadNews()