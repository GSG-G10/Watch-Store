const IDfiled = document.getElementById("ProductIDField");
const Namefiled = document.getElementById("ProductNameField");
const IMGfiled = document.getElementById("ProductImgField");
const PRICEfiled = document.getElementById("ProductPriceField");
const DetailsID = document.getElementById("productID");
const DetailsName = document.getElementById("productName");
const DetailsIMG = document.getElementById("productURL");
const DetailsPRICE = document.getElementById("productPrice");
const myTable = document.getElementById("ProTable");

const openForm = () => {
    document.getElementById("myForm").style.display = "block";
};

const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
};
//---------------------Product properities------------------
const getProductName = () => {
    return DetailsName.value;
};
const getProductID = () => {
    return IDfiled.value;
};
const getProductURL = () => {
    return IMGfiled.value;
};
const getProductPrice = () => {
    return PRICEfiled.value;
};
//Go to productDetail function in the logic.js
/*const AddProductBtn = document
    .getElementById("AddProductBtn")
    .addEventListener("click", ProductDetail);

  /* add to cart function */

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
        console.log("h")
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumber(){
    //every time we reload the page will call this function,wil get the element in localstorge
    //and will put it in cart ,this process will store the number in cart wvery time we reload the page or close it
    let productNumber = localStorage.getItem('cartNumber')
    if(productNumber){
        document.querySelector('.cart span').textContent = productNumber
    }
}
function cartNumbers(product){
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


function setItems (product){
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
 function totalCost(product){
     console.log("the price is",product.price)
     let cardCost=localStorage.getItem('totalCost');
    
     if(cardCost != null){
         cardCost = parseInt(cardCost);
          localStorage.setItem("totalCost",cardCost +product.price)
     }else{
         localStorage.setItem("totalCost",product.price);
     }
 }
function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
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
