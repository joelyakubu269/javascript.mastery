let calculateSubtotal=(items)=>{
    let total=0
    for(let key of items) {
    let pri= key.price
    let quant= key.quantity
    total+= pri * quant
    }
    return total
}
const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

console.log(calculateSubtotal(cartItems))