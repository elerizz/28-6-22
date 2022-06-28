import { newEl, createCard, q } from "./utils.js";

const BASE_URL = "https://fakestoreapi.com/products";

const newCollectionEl = q(".new-collection");
const addProduct = q(".add-product");
// const loadingEl = q(".loading");

const userName = prompt("Inserisci qui il tuo username");
const userNameEl = newEl("h3");
userNameEl.innerHTML = userName;

const navbar = q(".main-navbar");
navbar.append(userNameEl);

const footer = newEl("main-footer");
footer.innerHTML = userName;
document.body.append(footer);

//sezione prodotti
fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    const countList = data
      .filter((product) => product.rating.count >= 200)
      .map((product) =>
        createCard(newCollectionEl, product.image, product.title, product.price)
      );
    navbar.textContent = `n. of available items: ${countList.length}`;
  });
// .then(() => (loadingEl.style.display = "none"));

// const productCount = createCard.count;
// console.log(productNumber);
// navbar.innerHTML = productCount;

// header con username

userName.textContent = userName;

try {
  if (localStorage.getItem("username")) {
    throw new Error("Nessun username presente al localStorage");
  }
} catch (error) {
  console.log(error);
  localStorage.setItem("username", userName);
}
