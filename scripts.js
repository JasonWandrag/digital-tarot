let selectedSpread;
let selectedCards = [];

let prevButton = document.getElementById("prevBtn");
let nextButton = document.getElementById("nextBtn");

let spread = document.querySelector("#tarot-spread");
let cardNumberContainer = document.querySelector("#tarot-card-selector");

let tabs = document.getElementsByClassName("tab");
let currentTab = 0;

let cardSpreads = new Promise((resolve, reject) => {
  fetch("./card-spreads.json")
    .then((res) => res.json())
    .then((spreads) => {
      spreads.forEach((card) => {
        spread.innerHTML += `
      <option value="${card.id}">${card.spread}</option>
    `;
      });
      resolve(spreads);
    })
    .catch((err) => reject(err));
});

let cards = new Promise((resolve, reject) => {
  fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
    .then((res) => res.json())
    .then((tarot) => {
      resolve(tarot.cards);
    })
    .catch((err) => reject(err));
});

spread.addEventListener("change", () => {
  cardSpreads.then((spreads) => {
    let selected = parseInt(spread.value);
    currentTab = 0;
    selectedSpread = spreads[selected];
    document.querySelector(
      "#selected-spread"
    ).innerHTML = `<h3>${selectedSpread.spread}</h3>
    <p>${selectedSpread.description}</p>`;
    createCardNumberInputs(selectedSpread.positions.length);
    document.querySelector("#digital-tarot").style.display = "block";
    document.querySelector("#digital-tarot").scrollIntoView();
    document.querySelector("#results").style.display = "none";
    selectedCards.length = 0;
    let cardsContainer = document.querySelector(".card-description-container");
    cardsContainer.innerHTML = "";
    cardsContainer.className = "card-description-container";
    cardsContainer.classList.add(selectedSpread.containerClass);
  });
});

function pickTarot(amt) {
  nextButton.disabled = true;
  prevButton.disabled = true;
  cards.then((cards) => {
    shuffle(cards);
    let cardsContainer = document.querySelector(".card-description-container");
    cardsContainer.innerHTML = "";
    for (let i = 0; i < amt; i++) {
      cardsContainer.innerHTML += createCard(
        cards[document.getElementsByClassName("card-input")[i].value - 1],
        i
      );
    }
    document.querySelector("#results").style.display = "block";
    document.querySelector("#results").scrollIntoView();
  });
}

function createCard(data, index) {
  const direction = Math.floor(Math.random() * 2);
  return `
  <div class="tarot-cardtainer" card="${index}"  data-bs-toggle="modal" data-bs-target="#card${index}">
    <div class="overlay"></div>
    <h4>${index + 1}. ${selectedSpread.positions[index]}</h4>
    <img src="./images/cards/${data.name_short}.jpg" class="${
    direction ? "reverse" : ""
  }" />
  </div>

<!-- Modal -->
  <div class="modal fade" id="card${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${index + 1}. ${
    selectedSpread.positions[index]
  }</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body  d-md-flex">
        <img src="./images/cards/${data.name_short}.jpg" class="${
    direction ? "reverse img-fluid modal-img" : " img-fluid modal-img"
  }" />
          <div class="tarot">
            <h2>${data.name} - ${data.type} arcana</h2>
            <h4>${direction ? "Reversed" : "Upright"} meaning: ${
    direction ? data.meaning_rev : data.meaning_up
  }</h4>
            <p>${data.desc}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function createCardNumberInputs(amt) {
  cardNumberContainer.innerHTML = "";
  for (let i = 0; i < amt; i++) {
    cardNumberContainer.innerHTML += `
    <div class="tab">
      <div class="row mb-3">
        <label class="col-sm-4 col-form-label">${
          selectedSpread.positions[i]
        }</label>
        <div class="col-sm-8">
          <input name="card${i + 1}" class="form-control card-input">
        </div>
      </div>
    </div>
    `;
    showTab(currentTab);
  }
}

function showTab(n) {
  tabs[n].style.display = "block";
  tabs[n].querySelector(".card-input").focus();
  currentTab == 0
    ? (prevButton.disabled = true)
    : (prevButton.disabled = false);
  currentTab == selectedSpread.cards - 1
    ? (nextButton.disabled = true)
    : (nextButton.disabled = false);
}

function nextPrev(dir) {
  if (dir !== -1 && !validateSelection()) return false;
  if (dir == -1) {
    selectedCards.pop();
  }
  if (dir == 1 && currentTab == tabs.length - 1) {
    return pickTarot(selectedSpread.positions.length);
  }
  tabs[currentTab].style.display = "none";
  currentTab = currentTab + dir;
  showTab(currentTab);
}

function validateSelection() {
  let selection = parseInt(
    document.getElementsByClassName("card-input")[currentTab].value
  );
  if (!selection) {
    alert("Please select a card");
    return false;
  }
  if (selectedCards.find((number) => number == selection)) {
    alert("You have selected this card before, please choose a new card");
    return false;
  }
  if (selection > 78 || selection < 0) {
    alert("You have chosen an invalid card, please choose again");
    return false;
  }

  selectedCards.push(selection);
  return true;
}
