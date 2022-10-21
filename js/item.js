import { excerpt } from "./utilities";

export const createItemUi = function({ id , title , image , description , price}){

    let itemDiv = document.createElement('div');
    itemDiv.classList.add('col-12', 'col-md-4');
    itemDiv.innerHTML = `
      <div class="card-item card d-flex flex-column" item-id="${id}">
        <div class="card-body">
          <div class="mb-3">
          <img src="${image}" class="item-img " alt="">
          </div>
          <p class="card-title fw-bold text-truncate">${title}</p>
          <p class="card-text mb-2">${excerpt(description)}</p>
          <div class=" d-flex justify-content-between align-items-center mt-auto ">
            <span class=" fw-bold mb-0">$ <span>${price}</span> </span>
            <button class="btn btn-outline-primary add-cart">
            <i class="bi bi-cart-plus pe-none"></i> Add Cart
            </button>
          </div>
        </div>
      </div>
      `;

    return itemDiv;
}