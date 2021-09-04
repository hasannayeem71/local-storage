const viewDataFromLocalStorage = ()=>{
    const cart =  localStorageData(); 
        for (const key in cart) {
          displayProduct(key)
        }
};
const addToItemList = ()=>{
    const inputField=document.getElementById("input-field");
    const inputText = inputField.value;
    if(!inputText){
        return;
    }
    displayProduct(inputText);
    addProductToCart(inputText);
    inputField.value='';
};
const displayProduct = data =>{
    const ul=document.getElementById('item-list');
    const li=document.createElement('li');
    li.innerText=data;
    ul.appendChild(li);
};
const localStorageData = ()=>{
    const cart = localStorage.getItem('cart');
    let cartObj ;
    if(cart){
        cartObj=JSON.parse(cart);
    }
    else{
        cartObj={};
    }
    return cartObj;
};

const addProductToCart = name =>{
    const cart = localStorageData();
    if(cart[name]){
        cart[name]=cart[name]+1;
    }else{
        cart[name]=1;
    }
    const stringifiedData = JSON.stringify(cart);
    localStorage.setItem('cart',stringifiedData);
};
const deleteAll = ()=>{
document.getElementById('item-list').textContent='';
localStorage.removeItem('cart');
};
viewDataFromLocalStorage();