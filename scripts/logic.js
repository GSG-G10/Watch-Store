//Add the productDetail into the local storage.
const ProductDetail = () => {
  let productObj = {
    name: getProductName(),
    ID: getProductID(),
    Img: getProductURL(),
    price: getProductPrice(),
  };
  localStorage.setItem(productObj.ID, JSON.stringify(productObj));
  localKeys()
  console.log("array of keys :", localKeys())
};

const localKeys = () =>{
    const keys = Object.keys(localStorage);
    return keys
}
