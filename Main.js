const container = document.querySelector(".container");
const key = "oCy2VQPr0dVNNPjSfwLtjA6ktJbiHarkRsCnnNBnqqk";
var count = 50;

var url =
  "https://api.unsplash.com/photos/random?client_id=" + key + "&count=" + count;

fetch(url)
  .then(function (header) {
    return header.json();
  })
  .then(function (data) {
    generateCards(data);
  });

function generateCards(cards) {
  if (cards) {
    cards.forEach((card, idx) => {
      var listOfCards = [];

      var overDivEl = document.createElement("div");
      overDivEl.classList.add("overlay");
      overDivEl.innerHTML = `<a href="${card.urls.full}" download="${card.id}">
          <button class="fas fa-download"></button>
        </a>`;

      var imgDivEl = document.createElement("div");
      imgDivEl.classList.add("image");
      imgDivEl.style.backgroundImage = "url(" + card.urls.small + ")";

      var cardDivEl = document.createElement("div");
      cardDivEl.classList.add("card");
      cardDivEl.appendChild(overDivEl);
      cardDivEl.appendChild(imgDivEl);

      container.appendChild(cardDivEl);
    });
  }
}
