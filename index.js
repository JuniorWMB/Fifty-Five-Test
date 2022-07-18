const listProduct = [];

//my config for intersection obsever,catch all '.ProductCard__content' go throught in intersection
const config = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

let observer = new IntersectionObserver(function (events, self) {
  events.forEach((event) => {
    if (event.isIntersecting) {
      listProduct.push({
        Name: event.target.querySelectorAll(".ProductCard__subtitle")[0]
          .innerText,
        Price: event.target.querySelectorAll(".ProductCard__price")[0]
          .innerText,
      });
      console.log(listProduct);
    }
  });
}, config);

// Here i catch all '.ProductCard__content'
let target = ".ProductCard__content";
document.querySelectorAll(target).forEach((i) => {
  if (i) {
    observer.observe(i);
  }
});
