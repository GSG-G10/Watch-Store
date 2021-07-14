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
   
}
