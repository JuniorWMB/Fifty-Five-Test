//VERSION ONE

// In this section, I will get from the DOM all the elements of "ProductCard"
const myElements = document.getElementsByClassName("ProductCard");

// I create an array to push the product's title and price information
const productsList = [];

// this is how I configured the intersection observer
const config = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (events, self) {
  events.forEach((event) => {
    if (event.isIntersecting) {
      //All products caught in  the intersection are automatically added to productlist

      productsList.push({
        title: event.target.querySelector(".ProductCard__subtitle").children[0]
          .innerHTML,
        price: event.target.querySelector(".ProductCard__price").children[0]
          .innerHTML,
      });

      //Unobserve allows me to not add all the elements already caught in the intersection above
      observer.unobserve(event.target);

      console.log(productsList);
    }
  });
}, config);

// Here, I looped all my ProductCard in the DOM
Array.prototype.forEach.call(myElements, function (article) {
  observer.observe(article);
});

//VERSION TWO

// In this section, I will get from the DOM all the elements of "ProductCard"
const myElementsV2 = document.getElementsByClassName("ProductCard");

// this is how I configured the intersection observer
const configV2 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observerV2 = new IntersectionObserver(function (events, self) {
  events.forEach((event) => {
    if (event.isIntersecting) {
      //Title
      console.log(
        event.target.querySelector(".ProductCard__subtitle").children[0]
          .innerHTML
      );
      //Price
      console.log(
        event.target.querySelector(".ProductCard__price").children[0].innerHTML
      );

      //Unobserve allows me to not add all the elements already caught in the intersection above
      observer.unobserve(event.target);
    }
  });
}, configV2);

// Here, I looped all my ProductCard in the DOM
Array.prototype.forEach.call(myElementsV2, function (article) {
  observerV2.observe(article);
});
