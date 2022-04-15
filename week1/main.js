let burgerCardList = document.querySelectorAll(".burger__card");
let cartPrice = document.querySelector(".cart__price");
let cartList = document.querySelector(".cart__list");

// localStorage.clear();
console.log(localStorage.getItem("burgerCart"));
const parsePriceToNumber = (price) => {
  const removedComma = price.replace(/\D/g, "");
  return +removedComma;
};
if (localStorage.getItem("burgerCart")) initBurgerCart();
function initBurgerCart() {
  const currentStorage = JSON.parse(localStorage.getItem("burgerCart"));
  const burgerList = currentStorage.burger;
  const burgerCount = currentStorage.count;
  const burgerName = currentStorage.name;
  const burgerPrice = currentStorage.price;

  for (let i = 0; i < burgerList.length; i += 1) {
    const li = document.createElement("li");
    const burgerLists = cartList.children;
    li.classList.add(burgerList[i]);
    li.innerHTML = `${burgerName[i]}
            <input class=${burgerList[i]} type="number" name="burgerCount" value=${burgerCount[i]} min="1" >
            ${burgerPrice[i]}
            <button class=${burgerList[i]}>X</button>`;
    cartList.appendChild(li);

    const eventNodes = document.querySelectorAll(`.${burgerList[i]}`);
    // 버거 수량 위아래 조정
    eventNodes[1].addEventListener("change", changeBurgerCount);
    // 버거 삭제 버튼
    eventNodes[2].addEventListener("click", removeBurger);
    cartPrice.innerHTML = (
      burgerCount[i] * parsePriceToNumber(burgerPrice[i]) +
      parsePriceToNumber(cartPrice.innerHTML)
    ).toLocaleString();
  }
}

function setLocalStorage(burgerList, count, name, price) {
  localStorage.setItem(
    "burgerCart",
    JSON.stringify({
      burger: burgerList,
      count: count,
      name: name,
      price: price,
    })
  );
}

function changeBurgerCount() {
  // 장바구니에 있는 모든 버거 리스트, 수량, 가격 가져와서 전체 금액 다시 계산 후 금액 수정
  const burgerLists = cartList.children;
  const currentStorage = JSON.parse(localStorage.getItem("burgerCart"));

  let sum = 0;
  for (let i = 0; i < burgerLists.length; i += 1) {
    const burgerCount = burgerLists[i].childNodes[1].value;
    const burgerPrice = burgerLists[i].childNodes[2].data;
    sum += burgerCount * parsePriceToNumber(burgerPrice);
    currentStorage.count[i] = burgerCount;
  }
  cartPrice.innerHTML = sum.toLocaleString();
  setLocalStorage(
    currentStorage.burger,
    currentStorage.count,
    currentStorage.name,
    currentStorage.price
  );
}
function removeBurger(e) {
  // 선택한 버거 리스트, 수량, 가격 가져와서 가격 변경 후 li 자체를 삭제
  const burgerLi = e.target.parentNode;
  const burgerCount = burgerLi.childNodes[1].value;
  const burgerPrice = burgerLi.childNodes[2].data;
  cartPrice.innerHTML = (
    parsePriceToNumber(cartPrice.innerHTML) -
    burgerCount * parsePriceToNumber(burgerPrice)
  ).toLocaleString();
  burgerLi.remove();
  // 로컬 스토리지에서 삭제
  const currentStorage = JSON.parse(localStorage.getItem("burgerCart"));
  const removeIndex = currentStorage.burger.indexOf(burgerLi.className);
  currentStorage.burger.splice(removeIndex, 1);
  currentStorage.count.splice(removeIndex, 1);
  currentStorage.name.splice(removeIndex, 1);
  currentStorage.price.splice(removeIndex, 1);
  setLocalStorage(
    currentStorage.burger,
    currentStorage.count,
    currentStorage.name,
    currentStorage.price
  );
}

function addCartList(e) {
  const selectBurgerCard = e.currentTarget.querySelector(".burger__content");
  const burgerInfo = {
    name: selectBurgerCard.querySelector(".burger__name").innerText,
    price: selectBurgerCard.querySelector(".burger__price").innerText,
  };
  const li = document.createElement("li");
  const className = "buger" + burgerInfo.name.replaceAll(" ", "");
  const classList = [];
  const burgerLists = cartList.children;

  // 현재 저장소 가져오기
  const currentStorage = JSON.parse(localStorage.getItem("burgerCart"));

  for (let i = 0; i < burgerLists.length; i += 1) {
    classList.push(burgerLists[i].className);
  }
  if (classList.includes(className)) {
    const inputNode = document.querySelectorAll(`.${className}`)[1];
    inputNode.value = +inputNode.value + 1;

    // 로컬 스토리지
    currentStorage.count[classList.indexOf(className)] += 1;
    setLocalStorage(
      currentStorage.burger,
      currentStorage.count,
      currentStorage.name,
      currentStorage.price
    );
  } else {
    li.classList.add(className);
    li.innerHTML = `${burgerInfo.name}
            <input class=${className} type="number" name="burgerCount" value="1" min="1" >
            ${burgerInfo.price}
            <button class=${className}>X</button>`;
    cartList.appendChild(li);
    if (currentStorage === null) {
      setLocalStorage([className], [1], [burgerInfo.name], [burgerInfo.price]);
    } else {
      setLocalStorage(
        [...currentStorage.burger, className],
        [...currentStorage.count, 1],
        [...currentStorage.name, burgerInfo.name],
        [...currentStorage.price, burgerInfo.price]
      );
    }
  }
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
  // 애니메이션 클래스 명으로 추가
  burgerCard.addEventListener("click", function (e) {
    e.preventDefault;
    const burgerCart = document.querySelector(".cart__content");
    setTimeout(function () {
      burgerCart.classList.add("swing");
    }, 20);
    burgerCart.classList.remove("swing");
  });
});
