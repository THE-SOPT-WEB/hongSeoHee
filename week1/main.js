let burgerCardList = document.querySelectorAll(".burger__card");
let cartPrice = document.querySelector(".cart__price");
let cartList = document.querySelector(".cart__list");
function changeBurgerCount(e) {
  console.log(e);
}
function removeBurger(e) {
  console.log(e.target);
}

function addCartList(e) {
  const selectBurgerCard = e.currentTarget.querySelector(".burger__content");
  const burgerInfo = {
    name: selectBurgerCard.querySelector(".burger__name").innerText,
    price: selectBurgerCard.querySelector(".burger__price").innerText,
  };
  const li = document.createElement("li");
  const className = burgerInfo.name.replaceAll(" ", "");

  li.classList.add(className);
  li.innerHTML = `${burgerInfo.name}
            <input class=${className} type="number" name="burgerCount" value="1" min="1">
            ${burgerInfo.price}
            <button class=${className}>X</button>`;
  cartList.appendChild(li);
  const eventNodes = document.querySelectorAll(`.${className}`);
  // 버거 수량 위아래 조정
  eventNodes[1].addEventListener("change", changeBurgerCount);
  // 버거 삭제 버튼
  eventNodes[2].addEventListener("click", removeBurger);
}

burgerCardList.forEach((burgerCard) => {
  burgerCard.addEventListener("click", addCartList);
});
