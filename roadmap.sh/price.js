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
    const finalPrice= priceAfterDiscount + tax
    return {tax,finalPrice}
}
let createPriceSummary=(price,discountPercent,taxPercent)=>{
    const {tax,finalPrice}=calculateFinalPrice(price, discountPercent, taxPercent)
    const prize = {
        price : price,
        discount: discountPercent,
        taxp: tax,
        finalPrice: finalPrice,
    }
    return prize
}
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));