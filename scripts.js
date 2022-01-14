let cardSpreads = [
  {
    id: 0,
    spread: "Gestalt 3 Card Spread",
    description:
      "The Gestalt school of psychology believes that everything is perceived in patterns and that the sum of the parts is different from and greater than the whole. What this means the positions of the cards do not matter, and each individual card will build up the whole picture.<br>Use the 3 card spread when you are in a hurry or have a specific question to answer, the 6 card spread for more detailed or complex issues, and the full 9 card spread for matters which are not clear or involve a major life decision.<br>Focus on a question or an area of concern. Pick your cards. Read over the descriptions of the cards to see if there is a general message from the cards. Take note of which cards naturally fit together (same suit or major arcana), as well as which card seems to be the key to the reading. Use your intuition here. Using the key card as the base, go over the cards again to see what kind of message is given to you",
    cards: 3,
    positions: ["First Card", "Second Card", "Third Card"],
  },
  {
    id: 1,
    spread: "Gestalt 6 Card Spread",
    description:
      "The Gestalt school of psychology believes that everything is perceived in patterns and that the sum of the parts is different from and greater than the whole. What this means the positions of the cards do not matter, and each individual card will build up the whole picture.<br>Use the 3 card spread when you are in a hurry or have a specific question to answer, the 6 card spread for more detailed or complex issues, and the full 9 card spread for matters which are not clear or involve a major life decision.<br>Focus on a question or an area of concern. Pick your cards. Read over the descriptions of the cards to see if there is a general message from the cards. Take note of which cards naturally fit together (same suit or major arcana), as well as which card seems to be the key to the reading. Use your intuition here. Using the key card as the base, go over the cards again to see what kind of message is given to you",
    cards: 6,
    positions: [
      "First Card",
      "Second Card",
      "Third Card",
      "Fourth Card",
      "Fifth Card",
      "Sixth Card",
    ],
  },
  {
    id: 2,
    spread: "Gestalt 9 Card Spread",
    description:
      "The Gestalt school of psychology believes that everything is perceived in patterns and that the sum of the parts is different from and greater than the whole. What this means the positions of the cards do not matter, and each individual card will build up the whole picture.<br>Use the 3 card spread when you are in a hurry or have a specific question to answer, the 6 card spread for more detailed or complex issues, and the full 9 card spread for matters which are not clear or involve a major life decision.<br>Focus on a question or an area of concern. Pick your cards. Read over the descriptions of the cards to see if there is a general message from the cards. Take note of which cards naturally fit together (same suit or major arcana), as well as which card seems to be the key to the reading. Use your intuition here. Using the key card as the base, go over the cards again to see what kind of message is given to you",
    cards: 9,
    positions: [
      "First Card",
      "Second Card",
      "Third Card",
      "Fourth Card",
      "Fifth Card",
      "Sixth Card",
      "Seventh Card",
      "Eighth Card",
      "Ninth Card",
    ],
  },
  {
    id: 3,
    spread: "Horseshoe Spread",
    description:
      "This spread assigns significance to the positions of the cards which can be helpful with more specific questions and issues.",
    cards: 5,
    positions: [
      "Issue",
      "Present Influences",
      "Unexpected Influences",
      "Suggested Action",
      "Possible Outcome",
    ],
  },
  {
    id: 4,
    spread: "Pyramid Spread",
    description:
      "The Pyramid is a sacred shape and has been found across the globe, from Egypt to South America. The greatest attention to this are the Pyramids of Giza, which have become spiritual gathering and healing places. The Pyramids are also known to act as transformers of cosmic energy.<br>The Pyramid Spread is therefore especially good for spiritual matters or major life changes.",
    cards: 10,
    positions: [
      "The Question",
      "The Essence",
      "The Head",
      "The Heart",
      "The Price",
      "Unhelpful Influences",
      "The Unexpected",
      "Helpful Influences",
      "Suggested Action",
      "Possible Outcome",
    ],
  },
  {
    id: 5,
    spread: "Celtic Cross Spread",
    description:
      "This spread is effective for very complex issues or in-depth live reviews. This spread is split up into sections.<br>Cards 1-3 are the center of the reading, 4-7 represent underlying factors based on the elements, and cards 8-11 are the pathway cards",
    cards: 11,
    positions: [
      "Present Position",
      "Issue Dominating Your Life",
      "Obsticles to Happiness/Success",
      "Earth",
      "Air",
      "Fire",
      "Water",
      "Suggested Action",
      "Helpful Influences",
      "Short-Term Outcome",
      "Long-Term Outcome",
    ],
  },
];

let card_images = [
  // MAJOR ARCANA
  {
    name_short: "ar00",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg",
  },
  {
    name_short: "ar01",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
  },
  {
    name_short: "ar02",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg",
  },
  {
    name_short: "ar03",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg",
  },
  {
    name_short: "ar04",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg",
  },
  {
    name_short: "ar05",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg",
  },
  {
    name_short: "ar06",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
  },
  {
    name_short: "ar07",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  },
  {
    name_short: "ar08",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
  },
  {
    name_short: "ar09",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg",
  },
  {
    name_short: "ar10",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
  },
  {
    name_short: "ar11",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/RWS_Tarot_11_Justice.jpg",
  },
  {
    name_short: "ar12",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
  },
  {
    name_short: "ar13",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg",
  },
  {
    name_short: "ar14",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/f/f8/RWS_Tarot_14_Temperance.jpg",
  },
  {
    name_short: "ar15",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/5/55/RWS_Tarot_15_Devil.jpg",
  },
  {
    name_short: "ar16",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  },
  {
    name_short: "ar17",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_17_Star.jpg",
  },
  {
    name_short: "ar18",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg",
  },
  {
    name_short: "ar19",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg",
  },
  {
    name_short: "ar20",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/d/dd/RWS_Tarot_20_Judgement.jpg",
  },
  {
    name_short: "ar21",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg",
  },
  // WANDS
  {
    name_short: "waac",
    img_url: "https://upload.wikimedia.org/wikipedia/en/1/11/Wands01.jpg",
  },
  {
    name_short: "wa02",
    img_url: "https://upload.wikimedia.org/wikipedia/en/0/0f/Wands02.jpg",
  },
  {
    name_short: "wa03",
    img_url: "https://upload.wikimedia.org/wikipedia/en/f/ff/Wands03.jpg",
  },
  {
    name_short: "wa04",
    img_url: "https://upload.wikimedia.org/wikipedia/en/a/a4/Wands04.jpg",
  },
  {
    name_short: "wa05",
    img_url: "https://upload.wikimedia.org/wikipedia/en/9/9d/Wands05.jpg",
  },
  {
    name_short: "wa06",
    img_url: "https://upload.wikimedia.org/wikipedia/en/3/3b/Wands06.jpg",
  },
  {
    name_short: "wa07",
    img_url: "https://upload.wikimedia.org/wikipedia/en/e/e4/Wands07.jpg",
  },
  {
    name_short: "wa08",
    img_url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Wands08.jpg",
  },
  {
    name_short: "wa09",
    img_url: "https://upload.wikimedia.org/wikipedia/en/e/e7/Wands09.jpg",
  },
  {
    name_short: "wa10",
    img_url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Wands10.jpg",
  },
  {
    name_short: "wapa",
    img_url: "https://upload.wikimedia.org/wikipedia/en/6/6a/Wands11.jpg",
  },
  {
    name_short: "wakn",
    img_url: "https://upload.wikimedia.org/wikipedia/en/1/16/Wands12.jpg",
  },
  {
    name_short: "waqu",
    img_url: "https://upload.wikimedia.org/wikipedia/en/0/0d/Wands13.jpg",
  },
  {
    name_short: "waki",
    img_url: "https://upload.wikimedia.org/wikipedia/en/c/ce/Wands14.jpg",
  },
  // CUPS
  {
    name_short: "cuac",
    img_url: "https://upload.wikimedia.org/wikipedia/en/3/36/Cups01.jpg",
  },
  {
    name_short: "cu02",
    img_url: "https://upload.wikimedia.org/wikipedia/en/f/f8/Cups02.jpg",
  },
  {
    name_short: "cu03",
    img_url: "https://upload.wikimedia.org/wikipedia/en/7/7a/Cups03.jpg",
  },
  {
    name_short: "cu04",
    img_url: "https://upload.wikimedia.org/wikipedia/en/3/35/Cups04.jpg",
  },
  {
    name_short: "cu05",
    img_url: "https://upload.wikimedia.org/wikipedia/en/d/d7/Cups05.jpg",
  },
  {
    name_short: "cu06",
    img_url: "https://upload.wikimedia.org/wikipedia/en/1/17/Cups06.jpg",
  },
  {
    name_short: "cu07",
    img_url: "https://upload.wikimedia.org/wikipedia/en/a/ae/Cups07.jpg",
  },
  {
    name_short: "cu08",
    img_url: "https://upload.wikimedia.org/wikipedia/en/6/60/Cups08.jpg",
  },
  {
    name_short: "cu09",
    img_url: "https://upload.wikimedia.org/wikipedia/en/2/24/Cups09.jpg",
  },
  {
    name_short: "cu10",
    img_url: "https://upload.wikimedia.org/wikipedia/en/8/84/Cups10.jpg",
  },
  {
    name_short: "cupa",
    img_url: "https://upload.wikimedia.org/wikipedia/en/a/ad/Cups11.jpg",
  },
  {
    name_short: "cukn",
    img_url: "https://upload.wikimedia.org/wikipedia/en/f/fa/Cups12.jpg",
  },
  {
    name_short: "cuqu",
    img_url: "https://upload.wikimedia.org/wikipedia/en/6/62/Cups13.jpg",
  },
  {
    name_short: "cuki",
    img_url: "https://upload.wikimedia.org/wikipedia/en/0/04/Cups14.jpg",
  },
  // PENTACLES
  {
    name_short: "peac",
    img_url: "https://upload.wikimedia.org/wikipedia/en/f/fd/Pents01.jpg",
  },
  {
    name_short: "pe02",
    img_url: "https://upload.wikimedia.org/wikipedia/en/9/9f/Pents02.jpg",
  },
  {
    name_short: "pe03",
    img_url: "https://upload.wikimedia.org/wikipedia/en/4/42/Pents03.jpg",
  },
  {
    name_short: "pe04",
    img_url: "https://upload.wikimedia.org/wikipedia/en/3/35/Pents04.jpg",
  },
  {
    name_short: "pe05",
    img_url: "https://upload.wikimedia.org/wikipedia/en/9/96/Pents05.jpg",
  },
  {
    name_short: "pe06",
    img_url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Pents06.jpg",
  },
  {
    name_short: "pe07",
    img_url: "https://upload.wikimedia.org/wikipedia/en/6/6a/Pents07.jpg",
  },
  {
    name_short: "pe08",
    img_url: "https://upload.wikimedia.org/wikipedia/en/4/49/Pents08.jpg",
  },
  {
    name_short: "pe09",
    img_url: "https://upload.wikimedia.org/wikipedia/en/f/f0/Pents09.jpg",
  },
  {
    name_short: "pe10",
    img_url: "https://upload.wikimedia.org/wikipedia/en/4/42/Pents10.jpg",
  },
  {
    name_short: "pepa",
    img_url: "https://upload.wikimedia.org/wikipedia/en/e/ec/Pents11.jpg",
  },
  {
    name_short: "pekn",
    img_url: "https://upload.wikimedia.org/wikipedia/en/d/d5/Pents12.jpg",
  },
  {
    name_short: "pequ",
    img_url: "https://upload.wikimedia.org/wikipedia/en/8/88/Pents13.jpg",
  },
  {
    name_short: "peki",
    img_url: "https://upload.wikimedia.org/wikipedia/en/1/1c/Pents14.jpg",
  },
  // SWORDS
  {
    name_short: "swac",
    img_url: "https://upload.wikimedia.org/wikipedia/en/1/1a/Swords01.jpg",
  },
  {
    name_short: "sw02",
    img_url: "https://upload.wikimedia.org/wikipedia/en/9/9e/Swords02.jpg",
  },
  {
    name_short: "sw03",
    img_url: "https://upload.wikimedia.org/wikipedia/en/0/02/Swords03.jpg",
  },
  {
    name_short: "sw04",
    img_url: "https://upload.wikimedia.org/wikipedia/en/b/bf/Swords04.jpg",
  },
  {
    name_short: "sw05",
    img_url: "https://upload.wikimedia.org/wikipedia/en/2/23/Swords05.jpg",
  },
  {
    name_short: "sw06",
    img_url: "https://upload.wikimedia.org/wikipedia/en/2/29/Swords06.jpg",
  },
  {
    name_short: "sw07",
    img_url: "https://upload.wikimedia.org/wikipedia/en/3/34/Swords07.jpg",
  },
  {
    name_short: "sw08",
    img_url: "https://upload.wikimedia.org/wikipedia/en/a/a7/Swords08.jpg",
  },
  {
    name_short: "sw09",
    img_url: "https://upload.wikimedia.org/wikipedia/en/2/2f/Swords09.jpg",
  },
  {
    name_short: "sw10",
    img_url: "https://upload.wikimedia.org/wikipedia/en/d/d4/Swords10.jpg",
  },
  {
    name_short: "swpa",
    img_url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Swords11.jpg",
  },
  {
    name_short: "swkn",
    img_url: "https://upload.wikimedia.org/wikipedia/en/b/b0/Swords12.jpg",
  },
  {
    name_short: "swqu",
    img_url: "https://upload.wikimedia.org/wikipedia/en/d/d4/Swords13.jpg",
  },
  {
    name_short: "swki",
    img_url: "https://upload.wikimedia.org/wikipedia/en/3/33/Swords14.jpg",
  },
];

let selectedSpread;
let selectedCards = [];

let prevButton = document.getElementById("prevBtn");
let nextButton = document.getElementById("nextBtn");

let spread = document.querySelector("#tarot-spread");
let cardNumberContainer = document.querySelector("#tarot-card-selector");

let tabs = document.getElementsByClassName("tab");
let currentTab = 0;
cardSpreads.forEach((card) => {
  spread.innerHTML += `
    <option value="${card.id}">${card.spread}</option>
  `;
});

spread.addEventListener("change", () => {
  let selected = parseInt(spread.value);
  currentTab = 0;
  selectedSpread = cardSpreads[selected];
  document.querySelector(
    "#selected-spread"
  ).innerHTML = `<h3>${selectedSpread.spread}</h3>
  <p>${selectedSpread.description}</p>`;
  createCardNumberInputs(selectedSpread.cards);
  document.querySelector("#digital-tarot").style.display = "block";
  document.querySelector("#results").style.display = "none";
  selectedCards.length = 0;
  document.querySelector(".card-description-container").innerHTML = "";
});

function pickTarot(amt) {
  if (!validateSelection()) return false;
  document.querySelector("#submit-btn").disabled = true;
  prevButton.disabled = true;
  fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
    .then((res) => res.json())
    .then((data) => {
      let cards = data.cards;
      shuffle(cards);
      let cardsContainer = document.querySelector(
        ".card-description-container"
      );
      //     reset container
      cardsContainer.innerHTML = "";
      for (let i = 0; i < amt; i++) {
        cardsContainer.innerHTML += createDescription(
          cards[document.getElementsByClassName("card-input")[i].value - 1],
          i
        );
      }
      document.querySelector("#results").style.display = "block";
    });
}

function createDescription(data, index) {
  let img = findImg(data);
  return `
  <div class="tarot-cardtainer" style="flex-wrap: wrap; gap: 10px;">
  <h2 style="width: 100%; flex-basis: 100%">${
    selectedSpread.positions[index]
  }</h2>
        <img src=${img.img_url} class="${img.direction ? "reverse" : ""}" />
        <div class="tarot">
          <h2>${data.name} - ${data.type}</h2>
          <h3>Upright meaning: ${data.meaning_up}</h3>
          <h3>Reversed meaning: ${data.meaning_rev}</h3>
          <p>${data.desc}</p>
        </div>
      </div>
  `;
}

function findImg(cardData) {
  let imgObj = card_images.find((card) => {
    return card.name_short == cardData.name_short;
  });
  imgObj.direction = Math.floor(Math.random() * 2);
  console.log(imgObj);
  return imgObj;
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

// Card Input Wizard

function createCardNumberInputs(amt) {
  cardNumberContainer.innerHTML = "";
  for (let i = 0; i < amt; i++) {
    cardNumberContainer.innerHTML += `
    <div class="tab">
    Card number ${i + 1}
    <input name="card${i + 1}" class="card-input">
    ${
      i == amt - 1
        ? `<button onclick='pickTarot(${amt})' id="submit-btn">submit</button>`
        : ""
    }
    </div>
    `;
    showTab(currentTab);
  }
}

function showTab(n) {
  tabs[n].style.display = "block";
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
