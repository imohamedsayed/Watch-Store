let navs = document.querySelectorAll(".asideOption");

let websiteSections = [
  "landing-content",
  "products",
  "userProfile",
  "cart-page",
  "contact-section",
  "product-view",
];

function closeAllSections() {
  for (let i = 0; i < websiteSections.length; i++) {
    document.querySelector(`.${websiteSections[i]}`).classList.add("d-none");
  }
}

navs.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    removeActive(navs);
    navItem.classList.add("active");
    closeAllSections();
    document
      .querySelector(`.${navItem.dataset.section}`)
      .classList.remove("d-none");
  });
});

function showProduct() {
  closeAllSections();
  document.querySelector(".product-view").classList.remove("d-none");
}
