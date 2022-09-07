function removeActive(elements) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}

let omegaWatches = ["w-1", "w-2", "w-20", "w-4"],
  seikoWatches = ["w-21", "w-6", "w-9", "w-10"],
  rolexWatches = ["w-11", "w-12", "w-13", "w-14"],
  cartierWatches = ["w-15", "w-16", "w-17", "w-18"],
  zenithWatches = ["w-19", "w-1", "w-20", "w-3"],
  IWCWatches = ["w-21", "w-20", "w-13", "w-15"],
  citizenWatches = ["w-1", "w-4", "w-18", "w-10"],
  fossilWatches = ["w-2", "w-5", "w-19", "w-11"],
  casioWatches = ["w-21", "w-20", "w-17", "w-9"];

let collectionItem = document.querySelectorAll(".wrapper .item");
collectionItem.forEach((collItem) => {
  collItem.addEventListener("click", () => {
    removeActive(collectionItem);
    collItem.classList.add("active");
    switch (collItem.dataset.collection) {
      case "1":
        displayCollection(omegaWatches);
        break;
      case "2":
        displayCollection(seikoWatches);
        break;
      case "3":
        displayCollection(rolexWatches);
        break;
      case "4":
        displayCollection(cartierWatches);
        break;
      case "5":
        displayCollection(zenithWatches);
        break;
      case "6":
        displayCollection(IWCWatches);
        break;
      case "7":
        displayCollection(citizenWatches);
        break;
      case "8":
        displayCollection(fossilWatches);
        break;
      case "9":
        displayCollection(casioWatches);
        break;
    }
  });
});

function displayCollection(imgs) {
  document.querySelector(".collection-items").innerHTML = "";
  for (let i = 0; i < imgs.length; i++) {
    document.querySelector(".collection-items").innerHTML += `
        <div class="collection-item">
            <img src='imgs/products/png/${imgs[i]}.png' class='img-fluid'>
        </div>
        `;
  }
}

document.querySelector(".nav-toggler").onclick = () => {
  document.querySelector(".navigation-menu").classList.toggle("open");
};

document.querySelector(".sliderAside-toggler").onclick = () => {
  document.querySelector(".slider-aside").classList.toggle("open");
};
