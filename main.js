import "./style.scss";
import * as bootstrap from "bootstrap";
import { removeLoaderUi, showLoaderUi } from "./js/loader.js";
import { createItemUi } from "./js/item";
import { addToCart } from "./js/addToCart";

showLoaderUi();

export const itemRow = document.querySelector(".item-row");
export const cardBtn = document.querySelector(".cardBtn");
export const cartCounter = document.querySelectorAll(".cart-counter");
export const cartBox = document.querySelector("#cartBox");
export const total = document.querySelector("#total");

export let items = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    items = json;
    removeLoaderUi(); // remove loader

    // show items
    items.forEach((item) => {
      itemRow.append(createItemUi(item));
    });
  });

// window.addToCart = event =>{
//   console.log('add to cart')
// }

// event delegation
itemRow.addEventListener("click", (e) => {
  addToCart(e);
});
