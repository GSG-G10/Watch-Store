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
const AddProductBtn = document
  .getElementById("AddProductBtn")
  .addEventListener("click", ProductDetail);
