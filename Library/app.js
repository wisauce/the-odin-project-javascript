const games = []

function Game(title, genre, description) {
  this.title = title;
  this.genre = genre;
  this.description = description;
}

function addGame(event) {
  const title = document.querySelector("#title").value;
  const genre = document.querySelector("#genre").value;
  const description = document.querySelector("#description").value;
  const newgame = new Game(title, genre, description);
  games.push(newgame);
  event.preventDefault();
  addCard(newgame);
  document.querySelector("form").reset();
}

function addCard(Game) {
  let card = document.createElement("div");
  let elTitle = document.createElement("h2");
  elTitle.style.fontWeight = "bold";
  elTitle.innerText = Game.title;
  let elGenre = document.createElement("h4");
  elGenre.innerText = Game.genre;
  let elDesc = document.createElement("p");
  elDesc.innerText = Game.description;
  card.appendChild(elTitle);
  card.appendChild(elGenre);
  card.appendChild(elDesc);
  card.style.border = "2px solid black";
  card.style.padding = "4px"
  let gridContainer = document.querySelector("#grid-container");
  gridContainer.appendChild(card);
}

let form = document.querySelector("form");
form.addEventListener("submit", addGame);