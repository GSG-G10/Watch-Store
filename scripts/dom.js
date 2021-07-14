const addProductButton = document.getElementById("AddProductBtn");
const ProductsContainer = document.getElementsByClassName("products");
const openForm = () => {
  document.getElementById("myForm").style.display = "block";
};

const closeForm = () => {
  document.getElementById("myForm").style.display = "none";
};
//---------------------Product properities------------------
const getProductName = () => {
  return document.getElementById("productName").value;
};
const getProductID = () => {
  return document.getElementById("productID").value;
};
const getProductURL = () => {
  return document.getElementById("productURL").value;
};
const getProductPrice = () => {
  return document.getElementById("productPrice").value;
};

//Go to productDetail function in the logic.js
const AddProductBtn = addProductButton.addEventListener("click", ProductDetail);
JSON.parse(localStorage.getItem(productStored[productStored.length -1].ID))