//Add the productDetail into the local storage.
const ProductDetail = () => {
  let productObj = {
    name: getProductName(),
    ID: getProductID(),
    Img: getProductURL(),
    price: getProductPrice(),
  };
  localStorage.setItem(productObj.ID, JSON.stringify(productObj));
  localKeys();
};
// Set Local Storage Keys In Array
const localKeys = () => Object.keys(localStorage);

// Mapping And Create new Array Of Object
const productStored = localKeys().map((e) => {
  const elementObj = localStorage.getItem(parseInt(e));
  return JSON.parse(elementObj);
});
