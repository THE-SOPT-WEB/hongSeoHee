let burgerCardList = document.querySelectorAll(".burger__card");
let cartPrice = document.querySelector(".cart__price");
let cartList = document.querySelector(".cart__list");
const parsePriceToNumber = (price) => {
  const removedComma = price.replace(/\D/g, "");
  return +removedComma;
};
function changeBurgerCount(e) {
  console.log(e.target.parentNode);
}
function removeBurger(e) {
  // 선택한 버거 리스트, 수량, 가격 가져와서 가격 변경 후 li 자체를 삭제
  const burgerLi = e.target.parentNode;
  const burgetCount = burgerLi.childNodes[1].value;
  const burgerPrice = burgerLi.childNodes[2].data;
  cartPrice.innerHTML = (
    parsePriceToNumber(cartPrice.innerHTML) -
    burgetCount * parsePriceToNumber(burgerPrice)
  ).toLocaleString();
  burgerLi.remove();
}

function addCartList(e) {
  const selectBurgerCard = e.currentTarget.querySelector(".burger__content");
  const burgerInfo = {
    name: selectBurgerCard.querySelector(".burger__name").innerText,
    price: selectBurgerCard.querySelector(".burger__price").innerText,
  };
  const li = document.createElement("li");
  const className = "buger" + burgerInfo.name.replaceAll(" ", "");

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
  cartPrice.innerHTML = (
    parsePriceToNumber(burgerInfo.price) +
    parsePriceToNumber(cartPrice.innerHTML)
  ).toLocaleString();
}

burgerCardList.forEach((burgerCard) => {
  burgerCard.addEventListener("click", addCartList);
});
