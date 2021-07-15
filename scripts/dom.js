const addProductButton = document.getElementById("AddProductBtn");
// const ProductsContainer = document.getElementsByClassName("products");
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

let products=[
    {
        title:'CLASSIC WATCH',
        description:'This is a classic watch with high quality and excellent material All colors are available, and you can wear it on important occasions',
        price:15,
        inCart:0
    },{
        title:'black shirst',
        description:'This is a classic watch with high quality and excellent material All colors are available, and you can wear it on important occasions',
        price:25,
        inCart:0
    },
    {
        title:'red shirst',
        description:'This is a classic watch with high quality and excellent material All colors are available, and you can wear it on important occasions',
        price:50,
        inCart:0
    },
    {
        title:'blue shirst',
        description:'This is a classic watch with high quality and excellent material All colors are available, and you can wear it on important occasions',
        price:40,
        inCart:0
    },
];
const carts = document.querySelectorAll('.add-cart')

for(let i =0 ; i< carts.length ; i++){
    carts[i].addEventListener('click',()=>{
    
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
const onLoadCartNumber=()=>{
    let productNumber = localStorage.getItem('cartNumber')
    if(productNumber){
        document.querySelector('.cart span').textContent = productNumber
    }
}
const cartNumbers=(product)=>{
    console.log('this the product',product)
    let productNumber = localStorage.getItem('cartNumber')
    productNumber = parseInt(productNumber)
    if(productNumber){
        localStorage.setItem('cartNumber', productNumber + 1);
        document.querySelector('.cart span').textContent = productNumber + 1
    }else{
        localStorage.setItem('cartNumber',1);
        document.querySelector('.cart span').textContent =1
    }
  setItems(product);
}


const setItems= (product)=>{
    let cartItems=localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.title]==undefined){
          cartItems={
                ...cartItems,[product.title]:product
            }
            
        }
        cartItems[product.name].inCart +=1
       }else{
      
      product.inCart = 1;
      cartItems={
          [product.name]:product
      }
        }
       localStorage.setItem('productsInCart',JSON.stringify(cartItems));
    

}
const totalCost=(product)=>{
     console.log("the price is",product.price)
     let cardCost=localStorage.getItem('totalCost');
    
     if(cardCost != null){
         cardCost = parseInt(cardCost);
          localStorage.setItem("totalCost",cardCost +product.price)
     }else{
         localStorage.setItem("totalCost",product.price);
     }
 }
 const AddProductBtn = document
    .getElementById("AddProductBtn")
    .addEventListener("click", ProductDetail);
const displayCart=()=>{
    let cartItems = "";
    cartItems = localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    let productConatiner = document.querySelector('.allProduct')
    let cartCost = localStorage.getItem('totalCost');
    Object.values(cartItems).map(item=>{
      productConatiner.innerHTML += `
      <div class="allProduct">
      <i class="fa fa-times-circle fa-2x"></i>
   
      <span class="product-title">${item.title}</span>
      </div>

      <div class="product-prices">${item.price}</div>
      <div class="product-quatity">${item.inCart}</div>
      <div class="product-total">${item.inCart * item.price}</div>
      `
  });
  productConatiner.innerHTML += `
  <div class="TotalPrice">
  <h4 class="basketTotalTitle"> Total Price</h4>
  <h4 class="basketTotal"> $${cartCost}</h4>
  </div>
  `

}
onLoadCartNumber();
displayCart();


document.getElementById("DeleteButton").addEventListener("click", () => {
    alert("  البضاعة المباعة لا ترد ولا تستبدل");
});
