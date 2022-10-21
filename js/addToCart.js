import { cardBtn, cartCounter } from "../main";


export const cartCounterUpdate = function () {
  let count = parseInt(cartCounter[0].innerText);
  cartCounter.forEach(current => {
    current.innerText = count + 1
  })
}

export const addToCart = function(e){
    if(e.target.classList.contains('add-cart')){
        let currentCartItem = e.target.closest('.card-item');
        let currentCartImg = currentCartItem.querySelector('.item-img');
        let newImg = new Image();
        newImg.src = currentCartImg.src;
        newImg.style.position = "fixed";
        newImg.style.height = "100px";
        newImg.style.zIndex = 2000;
        newImg.style.transition = 1+"s";
        newImg.style.top = currentCartImg.getBoundingClientRect().top+"px";
        newImg.style.left = currentCartImg.getBoundingClientRect().left+"px";
        document.body.append(newImg);
  
        setTimeout(_=>{
          newImg.style.height = 0+"px";
          newImg.style.transform = "rotate(360deg)"
          newImg.style.top = (cardBtn.getBoundingClientRect().top+10)+"px";
          newImg.style.left = (cardBtn.getBoundingClientRect().left+30)+"px";
        },100)
  
        setTimeout(_=>{
          cardBtn.classList.add("animate__tada");
          cartCounterUpdate()
        },800)

        cardBtn.addEventListener('animationend',_=>cardBtn.classList.remove('animate__tada'))

      }
}