let burgerCardList = document.querySelectorAll(".burger__card");
let cartPrice = document.querySelector(".cart__price");
let cartList = document.querySelector(".cart__list");

function addCartList(e) {
  const selectBurgerCard = e.currentTarget.querySelector(".burger__content");
  const burgerInfo = {
    name: selectBurgerCard
      .querySelector(".burger__name")
      .innerText.replaceAll(" ", ""),
    price: selectBurgerCard.querySelector(".burger__price").innerText,
  };
  //   console.log(burgerInfo);
  //   console.log(cartList);
  const li = document.createElement("li");
  li.classList.add(burgerInfo.name);
  //   console.log(li);
}

burgerCardList.forEach((burgerCard) => {
  burgerCard.addEventListener("click", addCartList);
});
