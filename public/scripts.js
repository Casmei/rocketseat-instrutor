const modalOverlay = document.querySelector ('.modal-overlay')
const cards = document.querySelectorAll('.card__image-container')

console.log(cards)

for (let card of cards) {
  card.addEventListener('click', function(){
    const videoId = card.getAttribute("id");
    window.location.href = `/video?id=${videoId}`


  })
}


