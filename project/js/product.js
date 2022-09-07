let productColorOptions = document.querySelectorAll(
  ".product-view .product-details .color-options span"
);

productColorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    removeActive(productColorOptions);
    option.classList.add("active");
  });
});

let productSizeOptions = document.querySelectorAll(
  ".product-view .product-details .size-options span"
);

productSizeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    removeActive(productSizeOptions);
    option.classList.add("active");
  });
});
