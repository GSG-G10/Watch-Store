const productsContainers = document.querySelector(".products");
const buildProductGallery = productStored.forEach((e) => {
  const name = e.name;
  const Id = e.ID;
  const ImageSource = e.Img;
  const price = e.price;
  //Create a product card
  const productCard = document.createElement("div");
  productsContainers.appendChild(productCard);
  productCard.classList.add("product-card");
  // Create a product content container 
  const productContent = document.createElement("div");
  productCard.appendChild(productContent);
  productContent.classList.add("product-content");
  // Add Image from local storage to product card
  const productImage = document.createElement("img");
  productContent.appendChild(productImage);
  productImage.classList.add("card-image");
  productImage.src = ImageSource;
  // Set name for product 
  const productTitle = document.createElement("h3");
  productContent.appendChild(productTitle);
  productTitle.classList.add("product-title");
  productTitle.textContent = `${name} ID: ${Id}`;

  // Set description for product
  const productDescription = document.createElement("p");
  productContent.appendChild(productDescription);
  productDescription.classList.add("description-watch");
  productDescription.textContent =
    "This is a classic watch with high quality and excellent material. All colors are available, and you can wear it on important occasions.";
  // Create data section inside product Card
  const productData = document.createElement("div");
  productCard.appendChild(productData);
  productData.classList.add("product-data");
  // Set price from local storage
  const productPrice = document.createElement("span");
  productData.appendChild(productPrice);
  productPrice.classList.add("price");
  productPrice.textContent = `${price} $`
//   Add to cart Button 
  const productCartButton = document.createElement("a");
  productData.appendChild(productCartButton);
  productCartButton.classList.add("add-cart");
  productCartButton.textContent = `Add to cart`
});

