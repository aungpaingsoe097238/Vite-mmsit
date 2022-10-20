import './style.scss'
import * as bootstrap from 'bootstrap'
import { removeLoaderUi, showLoaderUi } from './js/loader.js';

showLoaderUi();

let itemRow = document.querySelector('.item-row');
let cardBtn = document.querySelector('.cardBtn');

let items = [];

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    items = json;
    removeLoaderUi()  // remove loader

    // show items
    items.forEach(item => {
      let itemDiv = document.createElement('div');
      itemDiv.classList.add('col-12', 'col-md-4');
      itemDiv.innerHTML = `
        <div class="card-item card d-flex flex-column">
          <div class="card-body">
            <div class="mb-3">
            <img src="${item.image}" class="item-img " alt="">
            </div>
            <p class="card-title fw-bold text-truncate">${item.title}</p>
            <p class="card-text mb-2">${item.description.substring(0, 100)}</p>
            <div class=" d-flex justify-content-between align-items-center mt-auto ">
              <span class=" fw-bold mb-0">$ <span>100</span> </span>
              <button class="btn btn-outline-primary add-cart">
              <i class="bi bi-cart-plus pe-none"></i> Add Cart
              </button>
            </div>
          </div>
        </div>
        `;
      itemRow.append(itemDiv)
    });
  }
  )

  // window.addToCart = event =>{
  //   console.log('add to cart')
  // }

  // event delegation
  itemRow.addEventListener('click',e=>{
    if(e.target.classList.contains('add-cart')){
      let currentCartItem = e.target.closest('.card-item');
      let currentCartImg = currentCartItem.querySelector('.item-img');
      let newImg = new Image();
      newImg.src = currentCartImg.src;
      newImg.style.position = "fixed";
      newImg.style.height = "100px";
      newImg.style.zIndex = 2000;
      newImg.style.transition = 0.5+"s";
      newImg.style.top = currentCartImg.getBoundingClientRect().top+"px";
      newImg.style.left = currentCartImg.getBoundingClientRect().left+"px";
      document.body.append(newImg);

      setTimeout(_=>{
        newImg.style.height = 0+"px";
        newImg.style.transform = "rotate(360deg)"
        newImg.style.top = (cardBtn.getBoundingClientRect().top+10)+"px";
        newImg.style.left = (cardBtn.getBoundingClientRect().left+30)+"px";
      },100)

    }
  })