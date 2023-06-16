const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="date"], input[type="time"], input[type="number"]'
);
const resaFinish = document.querySelector(".resafinish");
let pseudo, email;

//-------------Array Dish--------------------
let entreeData = [
  {
    id: 1,
    image: "./assets/img/dish/5.jpg",
    imageMini: "./assets/img/dishMini/entree/5.jpg",
    h1: "Crispy Skulls",
    p: "Patate, concombre, etc",
    prix: 8,
    nbr: 1,
  },
  {
    id: 2,
    image: "./assets/img/dish/6.jpg",
    imageMini: "./assets/img/dishMini/entree/6.jpg",
    h1: "Parisian Sandwich",
    p: "Baguette",
    prix: 8,
    nbr: 1,
  },
  {
    id: 3,
    image: "./assets/img/dish/10.jpg",
    imageMini: "./assets/img/dishMini/entree/10.jpg",
    h1: "Janus Sushi",
    p: "Patate, concombre, etc",
    prix: 9,
    nbr: 1,
  },
  {
    id: 4,
    image: "./assets/img/dish/13.jpg",
    imageMini: "./assets/img/dishMini/entree/13.jpg",
    h1: "No Name",
    p: "Patate, concombre, etc",
    prix: 10,
    nbr: 1,
  },
  {
    id: 5,
    image: "./assets/img/dish/14.jpg",
    imageMini: "./assets/img/dishMini/entree/14.jpg",
    h1: "Screaming Mouth",
    p: "Patate, concombre, etc",
    prix: 12,
    nbr: 1,
  },
  {
    id: 6,
    image: "./assets/img/dish/16.jpg",
    imageMini: "./assets/img/dishMini/entree/16.jpg",
    h1: "Hot Liberty",
    p: "Patate, concombre, etc",
    prix: 14,
    nbr: 1,
  },
  {
    id: 7,
    image: "./assets/img/dish/17.jpg",
    imageMini: "./assets/img/dishMini/entree/17.jpg",
    h1: "Eyes Balls",
    p: "Patate, concombre, etc",
    prix: 15,
    nbr: 1,
  },
];
let platData = [
  {
    id: 8,
    image: "./assets/img/dish/1.jpg",
    imageMini: "./assets/img/dishMini/plat/1.jpg",
    h1: "Burning Fat Man",
    p: "Patate, concombre, etc",
    prix: 7,
    nbr: 1,
  },
  {
    id: 9,
    image: "./assets/img/dish/4.jpg",
    imageMini: "./assets/img/dishMini/plat/4.jpg",
    h1: "Big Bowl",
    p: "Baguette",
    prix: 7,
    nbr: 1,
  },
  {
    id: 10,
    image: "./assets/img/dish/7.jpg",
    imageMini: "./assets/img/dishMini/plat/7.jpg",
    h1: "Hot Pot",
    p: "Patate, concombre, etc",
    prix: 22,
    nbr: 1,
  },
  {
    id: 11,
    image: "./assets/img/dish/9.jpg",
    imageMini: "./assets/img/dishMini/plat/9.jpg",
    h1: "Head Soup",
    p: "Patate, concombre, etc",
    prix: 12,
    nbr: 1,
  },
  {
    id: 12,
    image: "./assets/img/dish/11.jpg",
    imageMini: "./assets/img/dishMini/plat/11.jpg",
    h1: "Dumpling",
    p: "Patate, concombre, etc",
    prix: 7,
    nbr: 1,
  },
  {
    id: 13,
    image: "./assets/img/dish/15.jpg",
    imageMini: "./assets/img/dishMini/plat/15.jpg",
    h1: "Porky Burger",
    p: "Patate, concombre, etc",
    prix: 14,
    nbr: 1,
  },
];
let dessertData = [
  {
    id: 14,
    image: "./assets/img/dish/2.jpg",
    imageMini: "./assets/img/dishMini/dessert/2.jpg",
    h1: "Brain Ice",
    p: "Patate, concombre, etc",
    prix: 16,
    nbr: 1,
  },
  {
    id: 15,
    image: "./assets/img/dish/3.jpg",
    imageMini: "./assets/img/dishMini/dessert/3.jpg",
    h1: "Republicain Cake",
    p: "Baguette",
    prix: 18,
    nbr: 1,
  },
  {
    id: 16,
    image: "./assets/img/dish/8.jpg",
    imageMini: "./assets/img/dishMini/dessert/8.jpg",
    h1: "Exotic Gelly",
    p: "Patate, concombre, etc",
    prix: 11,
    nbr: 1,
  },
  {
    id: 17,
    image: "./assets/img/dish/12.jpg",
    imageMini: "./assets/img/dishMini/dessert/12.jpg",
    h1: "Booby Creamy",
    p: "Patate, concombre, etc",
    prix: 12,
    nbr: 1,
  },
  {
    id: 18,
    image: "./assets/img/dish/18.jpg",
    imageMini: "./assets/img/dishMini/dessert/18.jpg",
    h1: "City Shake",
    p: "Patate, concombre, etc",
    prix: 7,
    nbr: 1,
  },
];
let fullData = [...entreeData, ...platData, ...dessertData];
//----------------POP UP MENU ------------------------

///--------Pop Up-------------PARTIE A REVOIR AVEC METHODE FIND +++ INNER HTML   // const produitSelect = data.find((dish) => dish.h1 === h1Value);
// console.log(produitSelect);

let popupBg = document.getElementById("popup-bg");
let popupClose = document.getElementById("popup-close");

const popUp = () => {
  document.querySelectorAll(".dishCard").forEach((dish) => {
    dish.addEventListener("click", (e) => {
      let dishCardClicked = e.target.closest(".dishCard");
      const IdDishCardCicked = dishCardClicked.id;
      let produitSelect = data.find((dish) => dish.id == IdDishCardCicked);

      popupBg.innerHTML = `
           <div id="popup-content">
            <button id="popup-close" onclick="closePopup()">X</button>
            <img id="popup-img" src="${produitSelect.image}" alt="" />
            <div class="popup-info">
              <h3 id="name">${produitSelect.h1}</h3>
              <p id="nbr">${produitSelect.nbr}</p>
              <h4 id="prix">${produitSelect.prix}</h4>
              <p id="popup-p">${produitSelect.p}</p>
              <span id="id">${produitSelect.id}</span>
              <button class="by" onclick="ajouter()">BY</button>
            </div>
          </div>    
      `;
      popupBg.classList.add("active");
    });
  });
};
function closePopup() {
  popupBg.classList.remove("active");
}

//-------------Dish Fonction----------------------
const dishEntree = document.getElementById("dishEntree");
let data = entreeData;

const dishDisplay = () => {
  document.querySelectorAll(".btnmenu").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.id === "dessert") {
        data = dessertData;
      } else if (e.target.id === "plat") {
        data = platData;
      } else if (e.target.id === "entree") {
        data = entreeData;
      } else {
        data = entreeData;
      }
      dishContainer();
      popUp();
    });
  });
};

const dishContainer = () => {
  dishEntree.innerHTML = data
    .map(
      (dish) =>
        `
    <div class="dishCard" id="${dish.id}">
    <div class="dishCardLeft" style="background:url(${dish.imageMini}) center/cover;"></div>
    <div class="dishCardRight">
    <h3 class ="dish-h3" id=${dish.h1}>${dish.h1}</h3>
    <p class="dish-p">${dish.p}</p>
    <p class="qte">${dish.nbr}</p>
    <h4 class="dish-h4">${dish.prix}</h4>
    <span class="id">${dish.id}
    </div>
    </div>
    `
    )
    .join("");
};

dishContainer();
dishDisplay();
popUp();
/// SECTION3 ACHAT---------------------------------------------------------------------------------------------------------------
const byBtn = document.querySelector(".by");

//// Fonction Ligne Panier
function lignePanier(name, id, nbr, prix) {
  this.idArticle = id;
  this.nameArticle = name;
  this.nbrArticle = nbr;
  this.prixArticle = prix;
  this.ajouterNbr = function (nbr) {
    this.nbrArticle += nbr;
  };
  this.getName = function () {
    return this.nameArticle;
  };
  this.getPrixLigne = function () {
    var resultat = this.prixArticle * this.nbrArticle;
    return resultat;
  };
  this.getId = function () {
    return this.idArticle;
  };
}

/// Fonction Panier----------
function panier() {
  this.liste = [];
  this.ajouterArticle = function (name, id, nbr, prix) {
    var index = this.getArticle(id);
    console.log(index);
    if (index == -1) this.liste.push(new lignePanier(name, id, nbr, prix));
    else this.liste[index].ajouterNbr(nbr);
  };
  this.getPrixPanier = function () {
    var total = 0;
    for (var i = 0; i < this.liste.length; i++)
      total += this.liste[i].getPrixLigne();
    return total;
  };
  this.getArticle = function (id) {
    for (var i = 0; i < this.liste.length; i++)
      if (id == this.liste[i].getId()) return i;
    return -1;
  };
  this.supprimerArticle = function (id) {
    var index = this.getArticle(id);
    if (index > -1) this.liste.splice(index, 1);
  };
}

/// Fonction Ajouter
function ajouter() {
  let id = parseInt(document.getElementById("id").textContent);
  let name = document.getElementById("name").textContent;
  let nbr = parseInt(document.getElementById("nbr").textContent);
  let prix = parseInt(document.getElementById("prix").textContent);
  let monPanier = new panier();
  monPanier.ajouterArticle(name, id, nbr, prix);

  let tableau = document.getElementById("tableau");
  let longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
  if (longueurTab > 0) {
    for (var i = longueurTab; i > 0; i--) {
      monPanier.ajouterArticle(
        tableau.rows[i].cells[0].innerHTML,
        parseInt(tableau.rows[i].cells[1].innerHTML),
        parseInt(tableau.rows[i].cells[2].innerHTML),
        parseInt(tableau.rows[i].cells[3].innerHTML),
        parseInt(tableau.rows[i].cells[4].innerHTML)
      );

      tableau.deleteRow(i);
    }
  }
  //// Creation des valeurs du tableau
  let longueur = monPanier.liste.length;
  for (var i = 0; i < longueur; i++) {
    let ligne = monPanier.liste[i];
    let ligneTableau = tableau.insertRow(-1);
    let colonne1 = ligneTableau.insertCell(0);
    colonne1.innerHTML += ligne.getName();
    let colonne2 = ligneTableau.insertCell(1);
    colonne2.innerHTML += ligne.idArticle;
    let colonne3 = ligneTableau.insertCell(2);
    colonne3.innerHTML += ligne.nbrArticle;

    let colonne4 = ligneTableau.insertCell(3);
    colonne4.innerHTML += ligne.prixArticle;
    let colonne5 = ligneTableau.insertCell(4);
    colonne5.innerHTML += ligne.getPrixLigne();
    let colonne6 = ligneTableau.insertCell(5);
    colonne6.innerHTML +=
      '<button class="btn btn-primary" type="submit" onclick="supprimer(this.parentNode.parentNode.cells[1].innerHTML)"><span class="glyphicon glyphicon-remove"></span> Retirer</button>';
  }
  document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
  document.getElementById("nbreLignes").innerHTML = longueur;
}

function supprimer(id) {
  var monPanier = new panier();
  var tableau = document.getElementById("tableau");
  var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
  if (longueurTab > 0) {
    for (var i = longueurTab; i > 0; i--) {
      monPanier.ajouterArticle(
        tableau.rows[i].cells[0].innerHTML,
        parseInt(tableau.rows[i].cells[1].innerHTML),
        parseInt(tableau.rows[i].cells[2].innerHTML),
        parseInt(tableau.rows[i].cells[3].innerHTML),
        parseInt(tableau.rows[i].cells[4].innerHTML)
      );
      tableau.deleteRow(i);
    }
  }
  ///// Code pour remonter une ligne
  monPanier.supprimerArticle(id);
  var longueur = monPanier.liste.length;
  for (var i = 0; i < longueur; i++) {
    let ligne = monPanier.liste[i];
    let ligneTableau = tableau.insertRow(-1);
    let colonne1 = ligneTableau.insertCell(0);
    colonne1.innerHTML += ligne.getName();
    let colonne2 = ligneTableau.insertCell(1);
    colonne2.innerHTML += ligne.idArticle;
    let colonne3 = ligneTableau.insertCell(2);
    colonne3.innerHTML += ligne.nbrArticle;

    let colonne4 = ligneTableau.insertCell(3);
    colonne4.innerHTML += ligne.prixArticle;
    let colonne5 = ligneTableau.insertCell(4);
    colonne5.innerHTML += ligne.getPrixLigne();
    let colonne6 = ligneTableau.insertCell(5);
    colonne6.innerHTML +=
      '<button class="btn btn-primary" type="submit" onclick="supprimer(this.parentNode.parentNode.cells[1].innerHTML)"><span class="glyphicon glyphicon-remove"></span> Retirer</button>';
  }
  document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
  document.getElementById("nbreLignes").innerHTML = longueur;
}

/// SECTION4 MAP----------------------------------------------------------------------------

//initialiser la carte
var carte = L.map("maCarte").setView([24.6694444, 124.70166666666667], 12);
L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
  attribution:
    'données <a href="//osm.org/ copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM france</a>',
  minZoom: 1,
  maxZoom: 20,
}).addTo(carte);

const icone = L.icon({
  iconUrl: "./assets/img/iconmap.png",
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [0, -50],
});

const marqueur = L.marker([24.6694444, 124.70166666666667], {
  icon: icone,
}).addTo(carte);
marqueur.bindPopup("<h1>LA BOUSTIFAILLE</h1><p>Votre restaurant favoris</p>");

/// Formulaire de reservation-----------------------------------

/// Erreur Display

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

/// Fonction Pseudo---------------------------

const pseudoChecker = (value) => {
  if (value.length >= 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

/// Fonction Mail-----------------------------
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

///Fonction Number
let number;
const numberChecker = (value) => {
  let numbervalue = document.getElementById("number").value;
  number = value;

  // console.log(numbervalue);
};

/// Fonction DAY----------------------------
/// convert  today date to input format

const today = new Date().toISOString().split("T")[0];
date.min = today;

const dayChecker = (value) => {
  let day = new Date(document.getElementById("date").value)
    .toISOString()
    .split("T")[0];
  date = value;
  console.log(date);
};

/// Fonction Time-------------------------
let heure;
const newHeure = (value) => {
  let select = document.getElementById("heure"),
    index = select.selectedIndex;
  heure = select.options[index].value;
  // console.log(heure);
};

//
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "number":
        numberChecker(e.target.value);
        break;
      case "date":
        dayChecker(e.target.value);
        break;
      case "heure":
        newHeure(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pseudo && email && date && heure && number) {
    const data = {
      pseudo,
      email,
      date,
      heure,
      number,
    };
    console.log(data);
    inputs.forEach((input) => (input.value = ""));
    pseudo = null;
    email = null;
    date = null;
    heure = null;
    number = null;

    form.style.display = "none";
    resaFinish.innerHTML = `
    <h1> Reservation effectué</h1>
    <p class="resa"> Merci ${data.pseudo} pour votre réservation pour ${data.number} dans notre restaurant.
    Nous vous attendons le ${data.date} pour ${data.heure}.
    Un email de confirmation vous a été envoyé à ${data.email} </p>
    <h3> A Bientôt </h3>
     `;
    console.log("c'est ok");
  } else {
    alert("veuiller remplir correctement les chant");
  }
});
