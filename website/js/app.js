//  initialize variables
 let nextCartId = 0
 let cartList = []
 const cartListKey = "cart"
 let cartTotal = 0

//  initialize local storage on page load
function initializeData() {
  // get local storage for cart id
  let stringData = localStorage.getItem(cartListKey)
  if (stringData) {
    // convert string stored in local storage to JS array
    cartList = JSON.parse(stringData)

    // update the cart count dynamically via the length of cart array
    document.querySelector('.cart-count').innerHTML = cartList.length

    // add each task name to an unordered list on the page
    for (let i = 0; i < cartList.length; i++) {
      addItemToCart(cartList[i][0],cartList[i][1])
      
      // clean price string and sum for total cart balance
      let price = cartList[i][1];
      trimmedPrice = price.replace("$", "");

      cartTotal += +trimmedPrice;
    }
    // call update function to update cart balance on cart page
    updateTotal(+cartTotal);
  }
}

// even handler for all add to cart buttons 
// since all the category page buttons share the class this works for all buttons without unique id's
const buttons = document.querySelectorAll('.add-button');

buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', addItem)
})

// event listener helper function to add items belonging to clicked buttons
function addItem(e) {

  // find parent element associated with button click
  let buttonItem = e.target.parentNode.parentNode.querySelector('.card-title')
  let buttonCost = e.target.parentNode.parentNode.querySelector('.price')

  // grab item name and cost from event elements
  let itemName = buttonItem.innerHTML
  let itemCost = buttonCost.innerHTML

  //add the item name and cost to cart
  addItemToCart(itemName,itemCost);

  // add cart items to localStorage as array of arrays
    cartList.push([itemName,itemCost]);
    stringData = JSON.stringify(cartList)
    localStorage.setItem(cartListKey, stringData)

    // call initialize to reload data after each button click
    // this updates the cart item count in header without reloading page
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
  // append div to unordered list element
  cartListElement.appendChild(newCartItemDiv);

  // create a new list item anchor element
  // give it a unique id and increment id
  let newCartItem = document.createElement("a")
  newCartItem.id = "list-group-item-" + nextCartId
  nextCartId += 1
  newCartItem.className = "list-group-item list-group-item-action p-2 bd-highlight postition-relative fw-bold"

  // create new element for item cost to display in cart
  let newCartItemCost = document.createElement("p")
  newCartItemCost.className = "list-group-item-action fw-normal"

  // create span element to contain anchor tag for remove button
  let deleteButtonSpan = document.createElement('span');
      deleteButtonSpan.setAttribute('class', 'position-absolute top-50 end-0 translate-middle-y')

  // create button element for cart item removal
  let deleteCartItemButton = document.createElement('button');

  // give unique id and other attributes
  deleteCartItemButton.setAttribute('id', `delete-${nextCartId}`);
  deleteCartItemButton.setAttribute('type', 'button')
  deleteCartItemButton.setAttribute('class', 'btn btn-danger btn-block')
  deleteCartItemButton.innerHTML = "Remove";
  deleteCartItemButton.setAttribute('style', 'margin: 5px')

  // add event listener for cart item deletion on click
  deleteCartItemButton.addEventListener("click", deleteItem)

  // append button to span
  deleteButtonSpan.appendChild(deleteCartItemButton);

  // add text to new list item from function input arguments
  newCartItem.innerHTML = itemName
  newCartItemCost.innerHTML = itemCost

  // add button and item cost to item anchor tag element
  // add list item to existing list
  newCartItem.appendChild(newCartItemCost)
  newCartItem.appendChild(deleteButtonSpan)
  // add cart item anchor tag element to it's container div
  newCartItemDiv.appendChild(newCartItem)

}

// eventhandler helper function for cart item deletion
function deleteItem(e) {

  // cart item is the div that contains the button
  let cartItem = e.target.parentNode.parentNode.parentNode;
  if (!cartItem)
    return
  // id is the anchor tag id which is dynamically named based on nextCartID
  let id = e.target.parentNode.parentNode.id;

  // remove the prefix to only have the number so we can use it as index for list removal
  newID = id.replace("list-group-item-", "");

  // remove the div container element from the dom
  cartItem.remove();

  // splice the cart item out of the list of cart items
  // stringify it and update local storage
  cartList.splice(newID, 1);
  stringData = JSON.stringify(cartList)
  localStorage.setItem('cart', stringData);
  // reload the page so that local storage matches the elements on the page
  // otherwise it doesn't sync and we'd remove the wrong elements out of local storage
  location.reload();

}

// helper function to update cart total
function updateTotal(int){
  // if total cost exists update the total based on cart item price totals
  // subraction isn't needed because initializeData will run at the end and re-add the new total
  totalCost = document.getElementById('cart-total');
  if(totalCost){
  totalCost.innerHTML = "Total: $" + int;
  }
  else return
}

initializeData();