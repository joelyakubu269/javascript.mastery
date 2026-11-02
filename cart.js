let calculateSubtotal=(items)=>{
    let total=0
    for(let key of items) {
    let pri= key.price
    let quant= key.quantity
    total+= pri * quant
    }
    return total
}
let calculateDiscount=(subtotal, discountPercent)=>{
    const discountAmount= discountPercent/100 * subtotal
    return discountAmount
}
 let calculateTax=(amountAfterDiscount, taxPercent)=>{
    const taxamount= taxPercent/100 * amountAfterDiscount
    return taxamount
 }
 let createCartSummary=(items, discountPercent, taxPercent)=>{
    const subtotal= calculateSubtotal(items)
    const discount= calculateDiscount(subtotal,discountPercent)
    const amountAfterDiscount= subtotal- discount
    const tax = calculateTax(amountAfterDiscount,taxPercent)
    const total= subtotal + discount
    const cartSum= {
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        total:total,
    }
    return cartSum
 }
const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));
const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
