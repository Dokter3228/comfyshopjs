const productSection = document.querySelector(".product-section");
const shoppedItems = document.querySelector(".shopped-items");
const shop = document.querySelector(".shop");
const iconCross = document.querySelector(".iconCross");
const iconShop = document.querySelector(".iconShop");
const totalPrice = document.querySelector(".total-price");

iconShop.addEventListener("click", toggleShop);
iconCross.addEventListener("click", toggleShop);

const products = [
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668084633/product-1_evgdfv.jpg",
    title: "High-Back Bench",
    price: "9.99",
  },
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668085967/product-1_3_nhlwda.jpg",
    title: "Albany Table",
    price: "79.99",
  },
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668085628/product-4_rolf3u.jpg",
    title: "Accent Chair",
    price: "25.99",
  },
  {
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668086009/pexels-dominika-roseclay-1139785_fp3zqa.jpg",
    title: "Wooden Table",
    price: "45.99",
  },
];

const shoppedProducts = [];

function toggleShop() {
  if (shop.classList.value == "shop") {
    shop.classList.add("show");
    shop.style = "box-shadow: 0 0 0 9999px #000000b0";
  } else {
    shop.classList = "shop";
    shop.style = "box-shadow: 0 0 0 9999px #000000b0";
  }
}

function renderProducts(products) {
  products.map((product) => {
    const newProduct = document.createElement("div");
    newProduct.classList.add("product");

    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    newProduct.appendChild(newContainer);

    const newImage = document.createElement("img");
    newImage.src = product.image;
    newImage.style = "max-height: 200px";
    newContainer.appendChild(newImage);

    const newMiddle = document.createElement("div");
    newMiddle.classList.add("middle");
    newContainer.appendChild(newMiddle);

    const newSvg = document.createElement("img");
    newSvg.src = "./bx-cart-download.svg";
    newSvg.classList.add("iconBuy");
    newSvg.style = "width: 40px";
    newSvg.addEventListener("click", (e) => {
      shoppedProducts.push(product);
      renderShoppedProducts(shoppedProducts);
    });
    newMiddle.appendChild(newSvg);

    const newProductInfo = document.createElement("div");
    newProductInfo.classList.add("product-info");
    newProduct.appendChild(newProductInfo);

    const newTitle = document.createElement("p");
    newTitle.classList.add("product-name");
    newTitle.textContent = product.title;
    newProductInfo.appendChild(newTitle);

    const newPrice = document.createElement("p");
    newPrice.classList.add("product-price");
    newPrice.textContent = "$" + product.price;
    newProductInfo.appendChild(newPrice);

    productSection.appendChild(newProduct);
  });
}
renderProducts(products);

function renderShoppedProducts(shoppedProducts) {
  shoppedItems.innerHTML = "";
  shoppedProducts.map((product, index) => {
    const shoppedItem = document.createElement("div");
    shoppedItem.classList.add("shopped-item");

    const newImage = document.createElement("img");
    newImage.src = product.image;
    newImage.style = "width: 70px; height: 70px; border-radius: 10px";
    shoppedItem.appendChild(newImage);

    const newTitle = document.createElement("p");
    newTitle.classList.add("product-name");
    newTitle.textContent = product.title;
    shoppedItem.appendChild(newTitle);

    const newPrice = document.createElement("p");
    newPrice.classList.add("product-price");
    newPrice.textContent = "$" + product.price;
    shoppedItem.appendChild(newPrice);

    const newPRemove = document.createElement("p");
    newPRemove.classList.add("p-remove");
    newPRemove.textContent = "remove";
    newPRemove.addEventListener("click", () => {
      console.log(index);
      shoppedProducts.splice(index, 1);
      renderShoppedProducts(shoppedProducts);
      if (shoppedProducts.length == 0) {
        totalPrice.textContent = "$" + 0;
      }
    });
    shoppedItem.appendChild(newPRemove);

    shoppedItems.appendChild(shoppedItem);

    let price = shoppedProducts.reduce(
      (sum, item) => (sum += Number(item.price)),
      0
    );
    totalPrice.textContent = "$" + Math.round(price);
  });
}
