import { cardBtn, cartBox, cartCounter, items, total } from "../main";

export const cartCounterUpdate = function () {
  let count = parseInt(cartCounter[0].innerText);
  cartCounter.forEach(current => {
    current.innerText = count + 1
  })
}

export const cartTotal = function () {
  let allCartCost = document.querySelectorAll('.cart-cost');
  total.innerHTML = [...allCartCost ].reduce((pv,cv)=> pv + parseFloat(cv.innerHTML) ,0).toFixed();
 }

window.inc = function (event,price) {
  let cartItemCart = event.target.closest('.item-in-cart');
  let cartItemQuantity = cartItemCart.querySelector('.cart-quantity');
  let cartCost = cartItemCart.querySelector('.cart-cost');
  let currentCartItemQuantity = parseInt(cartItemQuantity.value) 
  cartItemQuantity.value = currentCartItemQuantity + 1;
  cartCost.innerText = currentCartItemQuantity * price;
} 

window.dec = function ( event ,price ) {
  let cartItemCart = event.target.closest('.item-in-cart');
  let cartItemQuantity = cartItemCart.querySelector('.cart-quantity');
  let cartCost = cartItemCart.querySelector('.cart-cost');
  let decBtn =  event.target.closest('.dec');

  let currentCartItemQuantity = parseInt(cartItemQuantity.value) 

  if( currentCartItemQuantity <= 1 ){
     decBtn.classList.add('disabled');
  }else{
    decBtn.classList.remove('disabled');
    cartItemQuantity.value = currentCartItemQuantity - 1;
    cartCost.innerText = price - currentCartItemQuantity;
  }

}

export const createItemInCartBox = function ({ title, image, price }) {
  let div = document.createElement('div');
  div.classList.add('item-in-cart');
  div.innerHTML = `
    <div class=" border border-1 rounded p-3">
      <div class="">
        <img src="${image}" class="cart-item-img mb-3" >
      </div>
      <p>${title}</p>
      <div class="d-flex justify-content-between align-items-center">
        <p class="mb-0">$ <span class="cart-cost" >${price}</span> </p>
        <div class="col-6">
          <div class=" cart-item-quantity input-group input-group-sm">
              <button class="btn btn-primary dec" onclick="dec(event,${price})">
                <i class=" bi bi-dash pe-none"></i>
              </button>
              <input type="text" class=" text-end form-control cart-quantity" value="1">
              <button class="btn btn-primary inc" onclick="inc(event,${price})">
                <i class=" bi bi-plus pe-none"></i>
              </button>
          </div>
        </div>
      </div>
    </div>
  `;
  cartBox.append(div);
}

export const addToCart = function (e) {
  if (e.target.classList.contains('add-cart')) {
    let currentCartItem = e.target.closest('.card-item');
    let currentCartImg = currentCartItem.querySelector('.item-img');

    let itemId = currentCartItem.getAttribute('item-id');
    let itemDetail = items.find(item => item.id === parseInt(itemId))

    let newImg = new Image();
    newImg.src = currentCartImg.src;
    newImg.style.position = "fixed";
    newImg.style.height = "100px";
    newImg.style.zIndex = 2000;
    newImg.style.transition = 1 + "s";
    newImg.style.top = currentCartImg.getBoundingClientRect().top + "px";
    newImg.style.left = currentCartImg.getBoundingClientRect().left + "px";
    document.body.append(newImg);

    setTimeout(_ => {
      newImg.style.height = 0 + "px";
      newImg.style.transform = "rotate(360deg)"
      newImg.style.top = (cardBtn.getBoundingClientRect().top + 10) + "px";
      newImg.style.left = (cardBtn.getBoundingClientRect().left + 30) + "px";
    }, 100)

    setTimeout(_ => {
      cardBtn.classList.add("animate__tada");
      newImg.remove();
      cartCounterUpdate();
      createItemInCartBox(itemDetail);
      cartTotal();
    }, 800)

    cardBtn.addEventListener('animationend', _ => cardBtn.classList.remove('animate__tada'))

  }
}