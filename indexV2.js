const productCardsArray = [...document.getElementsByClassName("ProductCard")];

let displayedCards = [];

window.addEventListener("scroll", function () {
  productCardsArray.forEach((productCard) => {
    let positionCard = productCard.getBoundingClientRect();
    if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
      if (!displayedCards.find((card) => card === productCard)) {
        let itemName = productCard.querySelector(
          ".ProductCard__title > div"
        ).innerHTML;
        let itemPrice = productCard.querySelector(
          ".ProductCard__price > strong"
        ).innerHTML;
        console.log(itemName, " ", itemPrice);
        displayedCards.push(productCard);
      }
    }
  });
});
