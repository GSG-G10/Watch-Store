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
const AddProductBtn = document
    .getElementById("AddProductBtn")
    .addEventListener("click", ProductDetail);