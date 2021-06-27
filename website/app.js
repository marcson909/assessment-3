 let nextCartId = 0
 let cartList = []
 const cartListKey = "cart"

function initializeData() {
  let stringData = localStorage.getItem(cartListKey)
  if (stringData) {
    // convert string stored in local storage to JS array
    cartList = JSON.parse(stringData)

    document.querySelector('.cart-count').innerHTML = cartList.length

    // add each task name to an unordered list on the page
    for (let i = 0; i < cartList.length; i++) {
      addItemToCart(cartList[i][0],cartList[i][1])
    }
  }
}

const buttons = document.querySelectorAll('.add-button');
console.log(buttons);

buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', addItem)
})

function addItem(e) {
  // find input element
  let buttonItem = e.target.parentNode.parentNode.querySelector('.card-title')

  console.log(buttonItem)

  let buttonCost = e.target.parentNode.parentNode.querySelector('.price')

  console.log(buttonCost)

  // grab item name and cost from event elements
  let itemName = buttonItem.innerHTML
  let itemCost = buttonCost.innerHTML

  addItemToCart(itemName,itemCost);

  // add task to localStorage
    cartList.push([itemName,itemCost]);
    stringData = JSON.stringify(cartList)
    localStorage.setItem(cartListKey, stringData)
    initializeData();
}


function addItemToCart(itemName,itemCost) {

  // find existing parent list element
  let cartListElement = document.querySelector(".cart-list")
  if (!cartListElement) {
    return
  }
  // create new list item parent div
  let newCartItemDiv = document.createElement("div");
  newCartItemDiv.className = "d-flex flex-column bd-highlight mb-3";

  cartListElement.appendChild(newCartItemDiv);
  // create a new list item

  let newCartItem = document.createElement("a")
  newCartItem.id = "list-group-item-" + nextCartId
  nextCartId += 1
  newCartItem.className = "list-group-item list-group-item-action p-2 bd-highlight"

  let newCartItemCost = document.createElement("p")
  newCartItemCost.className = "list-group-item-action"

  let deleteButtonSpan = document.createElement('span');
      deleteButtonSpan.setAttribute('class', '')
  let deleteCartItemButton = document.createElement('button');

  deleteCartItemButton.setAttribute('id', `delete-${nextCartId}`);

  deleteCartItemButton.setAttribute('type', 'button')
  deleteCartItemButton.setAttribute('class', 'btn btn-outline-danger btn-block mt-2')
  deleteCartItemButton.setAttribute('style', 'margin-left: 5px')

  deleteCartItemButton.addEventListener("click", deleteItem)

  deleteButtonSpan.appendChild(deleteCartItemButton);

  // add text to new list item
  newCartItem.innerHTML = itemName
  newCartItemCost.innerHTML = itemCost

  // add list item to existing list
  newCartItem.appendChild(newCartItemCost)
  newCartItem.appendChild(deleteButtonSpan)
  newCartItemDiv.appendChild(newCartItem)

}

function deleteItem(e) {

  let cartItem = e.target.parentNode.parentNode.parentNode;
  if (!cartItem)
    return
  console.log(cartItem);
  let id = e.target.parentNode.parentNode.id;
  newID = id.replace("list-group-item-", "");
  console.log(id)
  cartItem.remove();

  console.log(newID);
  cartList.splice(newID, 1);
  stringData = JSON.stringify(cartList)
  localStorage.setItem('cart', stringData);
  location.reload();

}

initializeData();