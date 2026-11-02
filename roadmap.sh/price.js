let calculateDiscount=(price, discountPercent)=>{
    const discount= (discountPercent/100 * price)
    return discount
}
let calculateTax=(priceAfterDiscount, taxPercent)=>{
    const tax = (taxPercent/100  * priceAfterDiscount)
    return tax
}
let calculateFinalPrice=(price, discountPercent, taxPercent)=>{
    const discountVal= calculateDiscount(price,discountPercent)
    const priceAfterDiscount= price - discountVal
    const tax = calculateTax(priceAfterDiscount,taxPercent)
}