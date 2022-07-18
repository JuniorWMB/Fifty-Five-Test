const myElements = document.getElementsByClassName("ProductCard");
const productsList = [];
const config = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (events, self) {
  events.forEach((event) => {
    if (event.isIntersecting) {
      observer.unobserve(event.target);
      productsList.push({
        title: event.target.querySelector(".ProductCard__subtitle").children[0]
          .innerHTML,
        price: event.target.querySelector(".ProductCard__price").children[0]
          .innerHTML,
      });

      console.log(productsList);
    }
  });
}, config);
Array.prototype.forEach.call(myElements, function (article) {
  observer.observe(article);
});
