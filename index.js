document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.search.value)
})

const input = document.getElementById('new_search');
input.addEventListener('click', function() {
  alert('Lets Explore Makeup !!!');
})