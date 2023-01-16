const input = document.getElementById('new_search');
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
input.addEventListener('click', function() {
  alert('Lets Explore Makeup Products !!!');
})
    console.log(e.target.search.value)
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${e.target.search.value}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach(dataItem => {
        let image = document.createElement('img');
        image.src= dataItem.image_link
        let name = document.createElement('p');
        name.textContent = dataItem.name
        let price = document.createElement('p');
        price.textContent = dataItem.price
        let rating = document.createElement('p');
        rating.textContent = dataItem.rating
        let element = document.getElementById('result')
        element.appendChild(image)
        element.appendChild(name)
        element.appendChild(price)
        element.appendChild(rating)
      
      })
      
      })
    })