

//***** user authentication*********** *****//
let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")
}

//**** Log Out *****//
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})
////////////////////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title: "Z Flip Foldable Mobile",
        description:"Samsung announced the Galaxy Z Flip 5 at its Galaxy Unpacked launch event on July 26.",
        imageUrl : "images/gg-1.jpg",
        price : "$799.9"
    },
    {
        id:2,
        title: "Air Pods Pro",
        description:"AirPods Pro are Apple's first in-ear wireless headphones with active noise reduction.",
        imageUrl : "images/hh-2.jpg",
        price : "$60"
    },
    {
        id:3,
        title: "250D DSLR Camera",
        description:"This highly-portable DSLR camera is a great option for stepping up your photography from a ...",
        imageUrl : "images/ee-3.jpg",
        price : "$230"
    },
    {
        id:4,
        title: "Head Phones",
        description:"Our assortment includes a variety of headphones for a variety of listening preferences.",
        imageUrl : "images/aa-1.jpg",   
        price : "$100"
    },
]
function drawItems (){
    let y = products.map((item) => {
        return (`
        <div class="product_item">
        <div class="img-box">
            <img class="product_item_img" src="${item.imageUrl}" alt="">
        </div>
        <div class="product_item_desc">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <span>${item.price}</span>
        </div>
        <div class="product_item_action">
         <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
         <i class="far fa-heart fav"></i>
        </div>
    </div>`)}).join("");
    
    allProducts.innerHTML = y;
}
drawItems ()

let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")



let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}



  if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
            let cartProductsLength = document.querySelectorAll(".carts_products div p")
            badge.style.display ="block";
            badge.innerHTML = cartProductsLength.length;
        }
    }else {
        window.location ="login.html"
    }


//////////////////////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block";
         }
     } 
}
///////////////////////////////////////////////////////////////////////


